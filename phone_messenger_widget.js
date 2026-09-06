/* =================================================================
   OMNI Phone Messaging & Remote Debugging Suite
   Account: rgkdevx1@gmail.com
   Bridge Port: http://localhost:9099
   ================================================================= */

(function() {
  const BRIDGE_URL = 'http://localhost:9099';
  let messagePollInterval = null;

  const OmniPhoneMessenger = {
    connected: false,
    devices: [],
    messages: [],

    init: function() {
      this.injectWidgetDOM();
      this.checkStatus();
      this.fetchMessages();
      
      // Start 3-second live polling for incoming phone messages
      messagePollInterval = setInterval(() => {
        this.checkStatus();
        this.fetchMessages();
      }, 3000);
    },

    checkStatus: function() {
      fetch(`${BRIDGE_URL}/status`)
        .then(r => r.json())
        .then(data => {
          this.connected = data.connected;
          this.devices = data.devices || [];
          this.updateStatusBadge();
        })
        .catch(err => {
          this.connected = false;
          this.updateStatusBadge();
        });
    },

    updateStatusBadge: function() {
      const badge = document.getElementById('omniPhoneStatusBadge');
      if (badge) {
        if (this.connected) {
          badge.className = 'phone-status-connected';
          badge.innerHTML = `🟢 Phone Connected (${this.devices.length} ADB device)`;
          badge.style.color = '#00e676';
        } else {
          badge.className = 'phone-status-waiting';
          badge.innerHTML = `🟡 Ready for Wireless ADB / USB Phone`;
          badge.style.color = '#ffd700';
        }
      }
    },

    fetchMessages: function() {
      fetch(`${BRIDGE_URL}/messages`)
        .then(r => r.json())
        .then(data => {
          this.messages = data || [];
          this.renderMessagesFeed();
        })
        .catch(err => console.log('Phone Bridge poll offline'));
    },

    sendMessage: function(recipient, text) {
      if (!recipient || !text) {
        alert('Please specify recipient phone number and message body.');
        return;
      }

      fetch(`${BRIDGE_URL}/send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ recipient: recipient, message: text })
      })
      .then(r => r.json())
      .then(res => {
        if (res.success) {
          alert(`✅ Message sent to ${recipient} via Phone ADB!`);
          const msgInput = document.getElementById('omniPhoneMsgInput');
          if (msgInput) msgInput.value = '';
          this.fetchMessages();
        } else {
          alert(`⚠️ Phone message status: ${res.error || 'Sent to queue. Connect phone via Wireless ADB to dispatch.'}`);
          this.fetchMessages();
        }
      })
      .catch(err => alert('Failed to connect to Phone Bridge server.'));
    },

    connectWirelessADB: function(ipPort) {
      if (!ipPort) return;
      fetch(`${BRIDGE_URL}/connect_wireless`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ip_port: ipPort })
      })
      .then(r => r.json())
      .then(res => {
        alert(`ADB Pair result: ${res.output || 'Connecting...'}`);
        this.checkStatus();
      });
    },

    renderMessagesFeed: function() {
      const feed = document.getElementById('omniPhoneMessagesFeed');
      if (!feed) return;

      if (!this.messages || this.messages.length === 0) {
        feed.innerHTML = `<div style="color: #aaa; text-align: center; padding: 20px; font-size: 0.85rem;">No incoming phone messages yet.</div>`;
        return;
      }

      feed.innerHTML = this.messages.map(m => {
        const isSent = m.status === 'sent';
        const dateStr = new Date(parseInt(m.timestamp, 10)).toLocaleTimeString();
        return `
          <div style="background: ${isSent ? 'rgba(0,229,255,0.08)' : 'rgba(255,255,255,0.03)'}; border: 1px solid ${isSent ? 'rgba(0,229,255,0.3)' : 'rgba(255,255,255,0.08)'}; border-radius: 12px; padding: 14px; margin-bottom: 10px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
              <span style="color: ${isSent ? '#00e5ff' : '#ffd700'}; font-weight: bold; font-size: 0.85rem;">
                ${isSent ? '📤 Outgoing to ' + (m.recipient || m.sender) : '📥 Incoming from ' + m.sender}
              </span>
              <span style="color: #888; font-size: 0.7rem; font-family: monospace;">${dateStr}</span>
            </div>
            <div style="color: #fff; font-size: 0.9rem; line-height: 1.4; margin-bottom: 8px;">
              ${m.body}
            </div>
            ${!isSent ? `
              <div style="display: flex; gap: 8px; margin-top: 8px;">
                <input type="text" id="quickReply_${m.id}" placeholder="Type reply to ${m.sender}..." style="flex:1; background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.1); border-radius: 6px; color: #fff; padding: 6px 10px; font-size: 0.8rem; outline: none;">
                <button onclick="OmniPhoneMessenger.sendMessage('${m.sender}', document.getElementById('quickReply_${m.id}').value)" style="background: #00e5ff; border: none; color: #000; font-weight: bold; padding: 6px 14px; border-radius: 6px; cursor: pointer; font-size: 0.75rem;">Reply</button>
              </div>
            ` : ''}
          </div>
        `;
      }).join('');
    },

    injectWidgetDOM: function() {
      if (document.getElementById('omniPhoneWidgetDrawer')) return;

      const widgetBtn = document.createElement('div');
      widgetBtn.id = 'omniPhoneWidgetDrawer';
      widgetBtn.style.cssText = 'position: fixed; bottom: 20px; right: 20px; z-index: 99999; display: flex; align-items: center; gap: 8px; background: rgba(19, 19, 20, 0.9); border: 1px solid #00e5ff; border-radius: 30px; padding: 10px 18px; color: #fff; cursor: pointer; font-family: sans-serif; font-size: 0.85rem; font-weight: bold; box-shadow: 0 0 20px rgba(0,229,255,0.3); backdrop-filter: blur(8px);';
      widgetBtn.innerHTML = `<span>📱 Phone Messenger</span> <span id="omniPhoneStatusBadge" style="font-size: 0.75rem; color: #ffd700;">🟡 Ready</span>`;
      widgetBtn.onclick = () => this.toggleModal();

      document.body.appendChild(widgetBtn);
    },

    toggleModal: function() {
      let modal = document.getElementById('omniPhoneModal');
      if (!modal) {
        modal = document.createElement('div');
        modal.id = 'omniPhoneModal';
        modal.style.cssText = 'position: fixed; bottom: 80px; right: 20px; z-index: 99999; width: 380px; max-height: 540px; background: #131314; border: 1px solid #00e5ff; border-radius: 16px; box-shadow: 0 0 30px rgba(0,229,255,0.25); color: #fff; display: flex; flex-direction: column; overflow: hidden; font-family: sans-serif;';
        modal.innerHTML = `
          <div style="padding: 16px; border-bottom: 1px solid rgba(255,255,255,0.1); background: rgba(0,0,0,0.4); display: flex; justify-content: space-between; align-items: center;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="font-size: 1.2rem;">📱</span>
              <strong style="color: #00e5ff; font-size: 1rem;">Phone Sync Messenger</strong>
            </div>
            <button onclick="document.getElementById('omniPhoneModal').style.display='none'" style="background: none; border: none; color: #aaa; font-size: 1.2rem; cursor: pointer;">&times;</button>
          </div>
          
          <!-- Wireless ADB Pair Header -->
          <div style="padding: 12px 16px; background: rgba(255,215,0,0.05); border-bottom: 1px solid rgba(255,215,0,0.15); font-size: 0.75rem; color: #aaa;">
            <div style="display: flex; gap: 8px; margin-bottom: 6px;">
              <input type="text" id="omniWirelessIpInput" placeholder="Wireless ADB (192.168.1.X:5555)" style="flex:1; background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.1); border-radius: 6px; color: #fff; padding: 6px; font-size: 0.75rem; outline: none;">
              <button onclick="OmniPhoneMessenger.connectWirelessADB(document.getElementById('omniWirelessIpInput').value)" style="background: #ffd700; border: none; color: #000; font-weight: bold; padding: 6px 10px; border-radius: 6px; cursor: pointer;">Pair Phone</button>
            </div>
            <div>Remote Debugging / USB Debugging Active</div>
          </div>

          <!-- Outgoing Message Composer -->
          <div style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.1); background: rgba(0,0,0,0.2);">
            <div style="display: flex; gap: 8px; margin-bottom: 8px;">
              <input type="text" id="omniPhoneRecipientInput" placeholder="Recipient Phone #" style="flex:1; background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.1); border-radius: 6px; color: #fff; padding: 6px 10px; font-size: 0.8rem; outline: none;">
            </div>
            <textarea id="omniPhoneMsgInput" placeholder="Type SMS message..." style="width: 100%; height: 50px; background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.1); border-radius: 6px; color: #fff; padding: 8px; font-size: 0.85rem; outline: none; resize: none; box-sizing: border-box;"></textarea>
            <button onclick="OmniPhoneMessenger.sendMessage(document.getElementById('omniPhoneRecipientInput').value, document.getElementById('omniPhoneMsgInput').value)" style="width: 100%; margin-top: 8px; background: linear-gradient(90deg, #00e5ff, #005bff); border: none; color: #000; font-weight: 800; padding: 8px; border-radius: 6px; cursor: pointer; font-size: 0.85rem;">
              Send Message via Phone
            </button>
          </div>

          <!-- Incoming Messages Feed -->
          <div id="omniPhoneMessagesFeed" style="padding: 16px; flex: 1; overflow-y: auto; max-height: 250px;">
            <div style="color: #aaa; text-align: center; font-size: 0.8rem;">Loading messages...</div>
          </div>
        `;
        document.body.appendChild(modal);
      } else {
        modal.style.display = modal.style.display === 'none' ? 'flex' : 'none';
      }
    }
  };

  window.OmniPhoneMessenger = OmniPhoneMessenger;

  document.addEventListener('DOMContentLoaded', () => {
    OmniPhoneMessenger.init();
  });
})();
