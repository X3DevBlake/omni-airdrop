/* ==========================================================================
   OMNI MINING PROTOCOL V3
   Dynamic Difficulty Adjustment (DAA) • Halving Countdown • Stratum V2
   Mempool Transaction Packing • NPU Hardware Benchmark Profiler
   ========================================================================== */

class OmniMiningProtocolV3 {
  constructor() {
    this.currentBlock = 1845920;
    this.blocksPerHalving = 2100000;
    this.baseBlockReward = 25.0; // Era 1: 25.0 OMNI
    this.halvingEra = 1;
    this.burnFeeRate = 0.0035; // 0.35% Deflationary Burn

    // Dynamic Difficulty Adjustment (DAA)
    this.targetBlockTimeSec = 0.4; // 0.4s finality
    this.retargetIntervalBlocks = 100;
    this.currentDifficulty = 14820000;
    this.targetBits = "0x1d00ffff";
    this.blocksSinceRetarget = 42;

    // Stratum V2 Mock Mempool Transactions
    this.mempool = [
      { txHash: "0x8fa1...c291", type: "DEX Swap (OMNI/USDT)", fee: "0.042 $OMNI", priority: "HIGH" },
      { txHash: "0x3e19...77b4", type: "LayerZero OFT Bridge", fee: "0.085 $OMNI", priority: "CRITICAL" },
      { txHash: "0x1c80...a412", type: "OmniBrain AI Inference Shard", fee: "0.024 $OMNI", priority: "HIGH" },
      { txHash: "0x77d2...f09e", type: "Kronos NFT Weapon Upgrade", fee: "0.050 $OMNI", priority: "MEDIUM" },
      { txHash: "0x99a0...33c1", type: "Omniair Social Subscription", fee: "0.015 $OMNI", priority: "LOW" }
    ];

    this.selectedBlockTemplate = [...this.mempool];
  }

  // Calculate Halving Progress
  getHalvingProgress() {
    const blocksInCurrentEra = this.currentBlock % this.blocksPerHalving;
    const blocksRemaining = this.blocksPerHalving - blocksInCurrentEra;
    const progressPct = ((blocksInCurrentEra / this.blocksPerHalving) * 100).toFixed(2);
    const estDaysRemaining = Math.round((blocksRemaining * this.targetBlockTimeSec) / 86400);

    return {
      currentEra: this.halvingEra,
      currentReward: this.baseBlockReward,
      nextReward: (this.baseBlockReward / 2).toFixed(2),
      blocksRemaining,
      progressPct,
      estDaysRemaining
    };
  }

  // Dynamic Difficulty Retargeting Calculation
  calculateRetarget(actualTimeFor100BlocksSec) {
    const expectedTimeSec = this.retargetIntervalBlocks * this.targetBlockTimeSec; // 40.0s
    const ratio = actualTimeFor100BlocksSec / expectedTimeSec;
    
    // Clamp difficulty adjustments within factor of 4
    const clampedRatio = Math.max(0.25, Math.min(4.0, ratio));
    this.currentDifficulty = Math.round(this.currentDifficulty / clampedRatio);
    this.blocksSinceRetarget = 0;
    
    return this.currentDifficulty;
  }

  // Hardware NPU / GPU INT4 GEMM Benchmark
  async runHardwareBenchmark(onProgress) {
    const matrixSize = 64;
    const weights = new Int8Array(matrixSize * matrixSize);
    for (let i = 0; i < weights.length; i++) weights[i] = (Math.random() * 15 - 7) | 0;

    const iterations = 500000;
    const startTime = performance.now();

    for (let step = 0; step < 5; step++) {
      await new Promise(r => setTimeout(r, 200));
      for (let i = 0; i < iterations / 5; i++) {
        let acc = 0;
        const offset = i % matrixSize;
        for (let j = 0; j < matrixSize; j++) {
          acc += weights[j * matrixSize + offset] * (((i ^ j) & 0x0F) - 7);
        }
      }
      if (onProgress) onProgress((step + 1) * 20);
    }

    const elapsedMs = performance.now() - startTime;
    const totalOps = iterations * matrixSize * 2;
    const opsPerSec = Math.round((totalOps / elapsedMs) * 1000);
    const gigaFlops = (opsPerSec / 1000000000).toFixed(3);

    // Calculate profitability at $0.05 per OMNI
    const estDailyOmni = (opsPerSec / 12500000000) * 24.9125 * (86400 / 0.4);
    const estDailyUsd = (estDailyOmni * 0.05).toFixed(2);

    return {
      opsPerSec,
      gigaFlops,
      estDailyOmni: estDailyOmni.toFixed(4),
      estDailyUsd
    };
  }
}

window.omniMiningProtocol = new OmniMiningProtocolV3();
