/* ==========================================================================
   OMNI UNIVERSAL DEFLATIONARY BURN & BUYBACK ENGINE
   Ecosystem-Wide Micro-Burns • Live Supply Contraction • Real-Time Velocity
   ========================================================================== */

class OmniUniversalDeflationEngine {
  constructor() {
    this.initialSupply = 1000000000; // 1,000,000,000 OMNI
    this.baseBurned = 14250800;      // 14,250,800 OMNI burned to date
    this.liveBurnDelta = 0;
    this.burnVelocity = 1.42;        // Average OMNI burned per second across all dApps
    this.burnRates = {
      dexSwap: 0.0005,               // 0.05% of DEX Swaps
      bridgeTransfer: 0.0001,        // 0.01% of LayerZero OFT Bridge Transfers
      llmInference: 0.0010,          // 0.10% per OmniBrain AI Inference Call
      kronosGaming: 0.0500,          // 5.00% of Kronos Weapon Upgrades & Minting
      omniairSocial: 0.1000,         // 10.00% of VIP Tier Subscriptions
      miningBlockReward: 0.0035      // 0.35% of PoUNW Mining Block Rewards
    };

    this.startLiveBurnTicker();
  }

  // Record a burn event from any dApp
  recordBurn(amount, eventType, details = "") {
    amount = parseFloat(amount) || 0;
    this.liveBurnDelta += amount;
    
    // Broadcast custom event across tabs / widgets
    const event = new CustomEvent("omni_deflation_burn", {
      detail: {
        amount,
        eventType,
        details,
        totalBurned: this.getTotalBurned(),
        circulatingSupply: this.getCirculatingSupply()
      }
    });
    window.dispatchEvent(event);
    this.updateDomDisplays();
  }

  getTotalBurned() {
    return this.baseBurned + this.liveBurnDelta;
  }

  getCirculatingSupply() {
    return Math.max(this.initialSupply - this.getTotalBurned(), 0);
  }

  getBurnPercentage() {
    return ((this.getTotalBurned() / this.initialSupply) * 100).toFixed(3);
  }

  startLiveBurnTicker() {
    setInterval(() => {
      // Simulate real-time ecosystem micro-burns from live network traffic
      const microBurn = (Math.random() * 0.4 + 0.1) * this.burnVelocity;
      this.liveBurnDelta += microBurn;
      this.updateDomDisplays();
    }, 1000);
  }

  updateDomDisplays() {
    const totalBurned = this.getTotalBurned();
    const circSupply = this.getCirculatingSupply();
    const burnPct = this.getBurnPercentage();

    // Update elements across any page
    document.querySelectorAll(".omni-total-burned-display").forEach(el => {
      el.innerText = `🔥 ${Math.round(totalBurned).toLocaleString()} OMNI (${burnPct}%)`;
    });

    document.querySelectorAll(".omni-circulating-supply-display").forEach(el => {
      el.innerText = `${Math.round(circSupply).toLocaleString()} OMNI`;
    });

    document.querySelectorAll(".omni-burn-velocity-display").forEach(el => {
      el.innerText = `⚡ ${this.burnVelocity.toFixed(2)} OMNI/sec`;
    });
  }
}

// Global Singleton
window.omniDeflationEngine = new OmniUniversalDeflationEngine();
