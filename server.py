import http.server
import socketserver
import json
import sqlite3
import urllib.parse
import os
import time
import random

PORT = 8088
DB_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "airdrop.db")
STATIC_DIR = os.path.dirname(os.path.abspath(__file__))

def init_db():
    conn = sqlite3.connect(DB_FILE)
    cursor = conn.cursor()
    
    # 1. Claims Table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS airdrop_claims (
            address TEXT PRIMARY KEY,
            allocated REAL DEFAULT 0.0,
            claimed INTEGER DEFAULT 0, -- 0 = No, 1 = Yes
            timestamp INTEGER DEFAULT 0
        )
    """)
    
    # Pre-seed some mock eligible addresses
    mock_seeds = [
        ("0x71C7656EC7ab88b098defB751B7401B5f6d8976F", 1250.0, 0),
        ("0x2810595486BFC85c4Ac7445749f7E8B8b1115F2c", 2500.0, 0),
        ("0x1F2C5486BFC85c4Ac7445749f7E8B8b1115F2c81D", 750.0, 0),
    ]
    for addr, amt, cl in mock_seeds:
        cursor.execute("""
            INSERT OR IGNORE INTO airdrop_claims (address, allocated, claimed, timestamp)
            VALUES (?, ?, ?, 0)
        """, (addr.lower(), amt, cl))
        
    conn.commit()
    conn.close()

class AirdropServerHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Enable CORS for standard web debugging
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_GET(self):
        parsed_url = urllib.parse.urlparse(self.path)
        path = parsed_url.path
        query = urllib.parse.parse_qs(parsed_url.query)

        if path == "/api/airdrop/eligibility":
            address = query.get("address", [None])[0]
            self.handle_get_eligibility(address)
        elif path == "/api/airdrop/stats":
            self.handle_get_stats()
        else:
            self.handle_serve_static(path)

    def do_POST(self):
        parsed_url = urllib.parse.urlparse(self.path)
        path = parsed_url.path

        content_length = int(self.headers.get('Content-Length', 0))
        post_data = self.rfile.read(content_length).decode('utf-8')
        
        try:
            body = json.loads(post_data) if post_data else {}
        except json.JSONDecodeError:
            self.send_json(400, {"error": "Invalid JSON"})
            return

        if path == "/api/airdrop/claim":
            self.handle_claim(body)
        else:
            self.send_json(404, {"error": "Not Found"})

    def handle_get_eligibility(self, address):
        if not address:
            self.send_json(400, {"error": "Address is required"})
            return
            
        addr = address.strip().lower()
        
        # Determine paths to presale and DAO databases
        parent_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        presale_db_path = os.path.join(parent_dir, "omni-token-presale", "presale.db")
        dao_db_path = os.path.join(parent_dir, "omni-dao", "dao.db")
        
        purchased_omni = 0.0
        staked_omni = 0.0
        dao_omni = 0.0
        voted_proposals = 0
        
        # 1. Query Presale DB
        if os.path.exists(presale_db_path):
            try:
                conn_pre = sqlite3.connect(presale_db_path)
                cursor_pre = conn_pre.cursor()
                # Sum presale tokens purchased
                cursor_pre.execute("SELECT SUM(tokens_allocated) FROM transactions WHERE wallet_address = ? AND payment_currency != 'AIRDROP_CLAIM'", (addr,))
                row_sum = cursor_pre.fetchone()[0]
                if row_sum is not None:
                    purchased_omni = float(row_sum)
                
                # Check if voted on proposals
                cursor_pre.execute("SELECT COUNT(*) FROM user_votes WHERE wallet_address = ?", (addr,))
                voted_proposals = cursor_pre.fetchone()[0]
                
                conn_pre.close()
            except Exception as e:
                print("Error reading Presale DB in airdrop check:", e)
                
        # 2. Query DAO DB
        if os.path.exists(dao_db_path):
            try:
                conn_dao = sqlite3.connect(dao_db_path)
                cursor_dao = conn_dao.cursor()
                # Sum staked positions
                cursor_dao.execute("SELECT SUM(amount) FROM staked_positions WHERE wallet_address = ?", (addr,))
                row_staked = cursor_dao.fetchone()[0]
                if row_staked is not None:
                    staked_omni = float(row_staked)
                
                # Retrieve OMNI wallet balance in DAO
                cursor_dao.execute("SELECT balance FROM user_balances WHERE wallet_address = ? AND token = 'OMNI'", (addr,))
                row_bal = cursor_dao.fetchone()
                if row_bal:
                    dao_omni = float(row_bal[0])
                
                conn_dao.close()
            except Exception as e:
                print("Error reading DAO DB in airdrop check:", e)

        # 3. Retrieve or calculate local claims allocation
        conn = sqlite3.connect(DB_FILE)
        cursor = conn.cursor()
        
        cursor.execute("SELECT allocated, claimed, timestamp FROM airdrop_claims WHERE address = ?", (addr,))
        row = cursor.fetchone()
        
        if not row:
            # Calculate dynamic allocation based on presale and DAO activity
            if purchased_omni > 0 or staked_omni > 0 or dao_omni > 0:
                base = 1250.0
                amt = round(base + (0.5 * purchased_omni) + (1.2 * (staked_omni + dao_omni)), 0)
            else:
                # Seed random allocation for new test accounts
                amt = round(random.uniform(1000.0, 3500.0), 0)
                
            cursor.execute("""
                INSERT INTO airdrop_claims (address, allocated, claimed, timestamp)
                VALUES (?, ?, 0, 0)
            """, (addr, amt))
            conn.commit()
            allocated = amt
            claimed = 0
            timestamp = 0
        else:
            allocated, claimed, timestamp = row
            # If user hasn't claimed yet and has new presale/staked amounts, dynamically update allocation!
            if claimed == 0 and (purchased_omni > 0 or staked_omni > 0 or dao_omni > 0):
                base = 1250.0
                updated_amt = round(base + (0.5 * purchased_omni) + (1.2 * (staked_omni + dao_omni)), 0)
                if updated_amt > allocated:
                    cursor.execute("UPDATE airdrop_claims SET allocated = ? WHERE address = ?", (updated_amt, addr))
                    conn.commit()
                    allocated = updated_amt
            
        conn.close()
        
        self.send_json(200, {
            "address": address,
            "eligible": True,
            "allocated": allocated,
            "claimed": claimed == 1,
            "timestamp": timestamp,
            "quests": {
                "dao": voted_proposals > 0
            }
        })

    def handle_claim(self, body):
        address = body.get("address")
        if not address:
            self.send_json(400, {"error": "Address is required"})
            return
            
        addr = address.strip().lower()
        
        conn = sqlite3.connect(DB_FILE)
        cursor = conn.cursor()
        
        cursor.execute("SELECT allocated, claimed FROM airdrop_claims WHERE address = ?", (addr,))
        row = cursor.fetchone()
        
        if not row:
            self.send_json(400, {"error": "Address not initialized. Please check eligibility first."})
            conn.close()
            return
            
        allocated, claimed = row
        
        if claimed == 1:
            self.send_json(400, {"error": "Airdrop already claimed."})
            conn.close()
            return
            
        # Execute claim
        t_now = int(time.time())
        cursor.execute("UPDATE airdrop_claims SET claimed = 1, timestamp = ? WHERE address = ?", (t_now, addr))
        conn.commit()
        conn.close()
        
        self.send_json(200, {
            "success": True,
            "address": address,
            "amount": allocated,
            "timestamp": t_now
        })

    def handle_get_stats(self):
        conn = sqlite3.connect(DB_FILE)
        cursor = conn.cursor()
        
        # Calculate totals
        cursor.execute("SELECT SUM(allocated) FROM airdrop_claims")
        total_allocated = cursor.fetchone()[0] or 0.0
        
        cursor.execute("SELECT SUM(allocated) FROM airdrop_claims WHERE claimed = 1")
        total_claimed = cursor.fetchone()[0] or 0.0
        
        cursor.execute("SELECT COUNT(*) FROM airdrop_claims WHERE claimed = 1")
        claimants_count = cursor.fetchone()[0] or 0
        
        conn.close()
        
        # Add seed padding representing global claims activity
        global_claimed = total_claimed
        global_total = 50000000.0
        
        self.send_json(200, {
            "total_claimed": global_claimed,
            "total_airdrop": global_total,
            "claimants": claimants_count
        })

    def handle_serve_static(self, path):
        if path == "/":
            path = "/index.html"
            
        file_path = os.path.join(STATIC_DIR, path.lstrip("/"))
        if not os.path.exists(file_path) or os.path.isdir(file_path):
            self.send_response(404)
            self.end_headers()
            self.wfile.write(b"File not found")
            return
            
        content_types = {
            ".html": "text/html",
            ".css": "text/css",
            ".js": "text/javascript",
            ".png": "image/png",
            ".jpg": "image/jpeg",
            ".svg": "image/svg+xml"
        }
        ext = os.path.splitext(file_path)[1].lower()
        content_type = content_types.get(ext, "application/octet-stream")
        
        self.send_response(200)
        self.send_header("Content-Type", content_type)
        self.end_headers()
        
        with open(file_path, "rb") as f:
            self.wfile.write(f.read())

    def send_json(self, status, data):
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.end_headers()
        self.wfile.write(json.dumps(data).encode('utf-8'))

if __name__ == "__main__":
    init_db()
    # Allow address reuse to simplify restarts
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), AirdropServerHandler) as httpd:
        print(f"OMNI Airdrop Web Server listening on port {PORT}")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server.")
            sys.exit(0)
