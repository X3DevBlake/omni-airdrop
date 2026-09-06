/* ==========================================================================
   OMNIPOOL 250K FRACTIONAL PPLNS MINING & STREAMING ENGINE
   250,000 Global Nodes • 12.50 GOps/s Global Compute • Fractional PPLNS Stream
   Zero-Latency Real-Time Cross-Tab Token Streaming via BroadcastChannel
   ========================================================================== */

class OmniPoolFractionalEngine {
  constructor() {
    this.globalNodes = 250000;
    this.globalHashRate = 12500000000; // 12.50 GigaOps/s
    this.blockTimeMs = 400; // 0.4s OMNI Network block finality
    this.grossBlockReward = 25.0;
    this.burnFeeRate = 0.0035; // 0.35% Deflationary Burn
    this.netBlockReward = this.grossBlockReward * (1 - this.burnFeeRate); // 24.9125 OMNI

    this.localHashRate = 0;
    this.minedBalance = 0.0;
    this.totalBurnedPool = 0.0;
    this.sharesAccepted = 0;
    this.isPoolActive = false;
    this.poolInterval = null;

    // Cross-tab broadcast channel for instant real-time sync with OMNI Network & DAO
    this.broadcastChannel = new BroadcastChannel("omni_token_stream");

    // Load persisted balance if available
    const saved = localStorage.getItem("omni_mined_realtime_balance");
    if (saved) {
      this.minedBalance = parseFloat(saved) || 0.0;
    }
  }

  // Calculate Fractional Pool Share percentage
  getFractionalPoolShare(localHashRate) {
    if (!localHashRate || localHashRate <= 0) return 0;
    return (localHashRate / this.globalHashRate) * 100;
  }

  // Calculate Estimated Earnings per Minute, Hour, Day
  getEarningsEstimates(localHashRate) {
    if (!localHashRate || localHashRate <= 0) {
      return { perSec: 0, perMin: 0, perHour: 0, perDay: 0 };
    }
    const blocksPerSec = 1000 / this.blockTimeMs; // 2.5 blocks/sec
    const shareFraction = localHashRate / this.globalHashRate;
    const rewardPerBlock = this.netBlockReward * shareFraction;

    const perSec = rewardPerBlock * blocksPerSec;
    const perMin = perSec * 60;
    const perHour = perMin * 60;
    const perDay = perHour * 24;

    return { perSec, perMin, perHour, perDay };
  }

  // Start Fractional Mining Stream
  startPoolMining(localHashRateCallback) {
    this.isPoolActive = true;

    this.poolInterval = setInterval(() => {
      if (!this.isPoolActive) return;

      this.localHashRate = localHashRateCallback ? localHashRateCallback() : 50000;
      if (this.localHashRate <= 0) return;

      const shareFraction = this.localHashRate / this.globalHashRate;
      const fractionalReward = this.netBlockReward * shareFraction;
      const fractionalBurn = (this.grossBlockReward * this.burnFeeRate) * shareFraction;

      this.minedBalance += fractionalReward;
      this.totalBurnedPool += fractionalBurn;
      this.sharesAccepted += 1;

      // Save locally
      localStorage.setItem("omni_mined_realtime_balance", this.minedBalance.toString());

      // Broadcast to all open tabs (OMNI Network, OMNI DAO, Explorer, etc.)
      this.broadcastChannel.postMessage({
        type: "MINED_REWARD_STREAM",
        incrementalReward: fractionalReward,
        newMinedBalance: this.minedBalance,
        totalBurnedPool: this.totalBurnedPool,
        localHashRate: this.localHashRate,
        globalNodes: this.globalNodes,
        timestamp: Date.now()
      });

      // Record in Universal Deflation Engine
      if (window.omniDeflationEngine) {
        window.omniDeflationEngine.recordBurn(fractionalBurn, "miningBlockReward", "OmniPool 250k Micro-Share");
      }

      this.updateMinerUI(fractionalReward);
    }, this.blockTimeMs);
  }

  stopPoolMining() {
    this.isPoolActive = false;
    if (this.poolInterval) {
      clearInterval(this.poolInterval);
      this.poolInterval = null;
    }
  }

  updateMinerUI(lastFractionalReward = 0) {
    const liveBalEl = document.getElementById("realtimeStreamingBalanceDisplay");
    const shareEl = document.getElementById("fractionalShareDisplay");
    const estDailyEl = document.getElementById("estDailyRewardsDisplay");
    const globalNodesEl = document.getElementById("globalNodesCountDisplay");
    const globalHashEl = document.getElementById("globalHashrateDisplay");

    if (liveBalEl) {
      liveBalEl.innerText = this.minedBalance.toFixed(6) + " $OMNI";
      liveBalEl.classList.add("balance-glow-pulse");
      setTimeout(() => liveBalEl.classList.remove("balance-glow-pulse"), 250);
    }

    if (shareEl) {
      const sharePct = this.getFractionalPoolShare(this.localHashRate);
      shareEl.innerText = sharePct < 0.00001 ? "< 0.0001%" : sharePct.toFixed(6) + "%";
    }

    if (estDailyEl) {
      const estimates = this.getEarningsEstimates(this.localHashRate);
      estDailyEl.innerText = estimates.perDay.toFixed(4) + " $OMNI / Day";
    }

    if (globalNodesEl) globalNodesEl.innerText = this.globalNodes.toLocaleString() + " Nodes";
    if (globalHashEl) globalHashEl.innerText = (this.globalHashRate / 1000000000).toFixed(2) + " GOps/s";
  }
}

window.omniPoolEngine = new OmniPoolFractionalEngine();
