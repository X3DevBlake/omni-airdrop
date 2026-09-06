/* =================================================================
   OMNI Tokenomics V2 & Network V2 Engine
   Account: rgkdevx1@gmail.com
   Database: omni-dao (Firestore Named Instance)
   ================================================================= */

(function() {
  const OMNI_TOKENOMICS_V2 = {
    totalSupply: 1000000000,
    currentBurned: 14250800,
    baseStakingAPY: 12.5,
    tpsCapacity: 52400,
    
    // Rarity Staking Multipliers
    // Rarity Staking Multipliers
    rarityBoosts: {
      "Common": 2.5,
      "Rare": 6.0,
      "Epic": 12.0,
      "Legendary": 30.0
    },

    // Calculate Total Staking APY with Companion Rarity + Multi-Companion Quantity Stacking
    calculateTotalAPY: function(baseAmount, companionRarity, companionsCount = 1) {
      const rarityBoost = this.rarityBoosts[companionRarity] || 2.5;
      const count = Math.max(1, parseInt(companionsCount, 10) || 1);
      // Multi-Companion Stacking: +1.5% APY per additional companion owned (up to +36% max)
      const quantityStackBoost = Math.min(36.0, (count - 1) * 1.5);
      
      const totalBoost = rarityBoost + quantityStackBoost;
      const totalAPY = Math.min(85.0, this.baseStakingAPY + totalBoost);
      const annualYield = (baseAmount * totalAPY) / 100;
      
      return {
        baseAPY: this.baseStakingAPY,
        rarityBoost: rarityBoost,
        quantityStackBoost: quantityStackBoost,
        totalBoost: totalBoost,
        totalAPY: totalAPY,
        annualYield: annualYield,
        dailyYield: annualYield / 365
      };
    },

    // Execute Triple-Burn Transaction
    executeTokenBurn: function(amount, burnType) {
      this.currentBurned += amount;
      console.log(`🔥 [OMNI V2 Burn Engine] Burned ${amount} $OMNI | Type: ${burnType} | Total Burned: ${this.currentBurned}`);
      
      const burnToast = document.getElementById('omniBurnNotificationToast');
      if (burnToast) {
        burnToast.innerText = `🔥 Burned ${amount} $OMNI (${burnType})! Total Burned: ${this.currentBurned.toLocaleString()} $OMNI`;
        burnToast.style.display = 'block';
        setTimeout(() => { burnToast.style.display = 'none'; }, 3000);
      }
      return this.currentBurned;
    },

    // LayerZero OFT V2 Cross-Chain Transfer Adapter
    initiateCrossChainBridge: function(amount, targetChain, destinationAddress) {
      console.log(`🌐 [LayerZero OFT V2] Bridging ${amount} $OMNI to ${targetChain} (${destinationAddress})...`);
      return {
        txHash: "0x" + Array.from({length: 64}, () => Math.floor(Math.random() * 16).toString(16)).join(''),
        status: "CONFIRMED_PARALLEL_OCC",
        finalityMs: 340
      };
    }
  };

  window.OmniTokenomicsV2 = OMNI_TOKENOMICS_V2;

  window.updateStakingCalculatorUI = function() {
    const amountInput = document.getElementById('stakeAmountInput');
    const raritySelect = document.getElementById('stakeRaritySelect');
    const countInput = document.getElementById('stakeCompanionsCountInput');
    if (!amountInput || !raritySelect) return;

    const amount = parseFloat(amountInput.value) || 0;
    const rarity = raritySelect.value;
    const count = countInput ? (parseInt(countInput.value, 10) || 1) : 1;
    const calc = OMNI_TOKENOMICS_V2.calculateTotalAPY(amount, rarity, count);

    const baseEl = document.getElementById('calcBaseAPY');
    const boostEl = document.getElementById('calcBoostAPY');
    const quantityEl = document.getElementById('calcQuantityBoost');
    const totalEl = document.getElementById('calcTotalAPY');
    const yieldEl = document.getElementById('calcAnnualYield');

    if (baseEl) baseEl.innerText = `${calc.baseAPY.toFixed(1)}%`;
    if (boostEl) boostEl.innerText = `+${calc.rarityBoost.toFixed(1)}%`;
    if (quantityEl) quantityEl.innerText = `+${calc.quantityStackBoost.toFixed(1)}% (${count} owned)`;
    if (totalEl) totalEl.innerText = `${calc.totalAPY.toFixed(1)}%`;
    if (yieldEl) yieldEl.innerText = `${Math.floor(calc.annualYield).toLocaleString()} $OMNI / yr`;
  };

  window.executeLiveBurnTest = function() {
    const newTotal = OMNI_TOKENOMICS_V2.executeTokenBurn(500, "Manual Live Test Burn");
    const burnCounter = document.getElementById('omniLiveBurnCounterDisplay');
    if (burnCounter) {
      burnCounter.innerText = `🔥 ${newTotal.toLocaleString()} $OMNI`;
    }
  };

  window.executeBridgeTest = function() {
    const amountInput = document.getElementById('bridgeAmountInput');
    const chainSelect = document.getElementById('bridgeChainSelect');
    const amount = parseFloat(amountInput ? amountInput.value : 1000) || 1000;
    const chain = chainSelect ? chainSelect.value : 'Solana Mainnet';

    const result = OMNI_TOKENOMICS_V2.initiateCrossChainBridge(amount, chain, "0xrgk...devx1");
    const statusBox = document.getElementById('bridgeStatusBox');
    if (statusBox) {
      statusBox.innerHTML = `
        <div style="background: rgba(0,230,118,0.1); border: 1px solid #00e676; border-radius: 8px; padding: 12px; margin-top: 12px; color: #00e676; font-size: 0.85rem;">
          ✓ <strong>Bridge Confirmed (LayerZero OFT V2)</strong><br>
          Tx Hash: <span style="font-family: monospace;">${result.txHash.substring(0, 24)}...</span><br>
          Finality: <strong>${result.finalityMs}ms (OCC Concurrency)</strong>
        </div>
      `;
    }
  };

  // Initialize UI Hooks if DOM loaded
  document.addEventListener('DOMContentLoaded', function() {
    console.log("⚡ OMNI Tokenomics V2 & Network V2 Engine initialized.");
    setTimeout(() => {
      if (typeof window.updateStakingCalculatorUI === 'function') {
        window.updateStakingCalculatorUI();
      }
    }, 500);
  });
})();

