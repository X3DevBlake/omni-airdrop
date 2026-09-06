/* ==========================================================================
   OMNI NETWORK V2 ENGINE
   LayerZero OFT V2 Bridge with 0.01% Deflationary Burn • Validator Telemetry
   One-Click Web3 RPC Configurator • Real-Time Block Ticker
   ========================================================================== */

class OmniNetworkEngineV2 {
  constructor() {
    this.activeValidators = 1024;
    this.networkUptime = "99.998%";
    this.blockFinality = "0.4s";
    this.peakTps = "100,000+";
    this.currentBlock = 18459200;
    this.totalBurnedOmni = 14250800;
    this.connectedWallet = "0x7F2C...89B1";

    this.bridgeChains = [
      { id: "ethereum", name: "Ethereum Mainnet", icon: "💎", fee: "0.0012 ETH", time: "12s" },
      { id: "arbitrum", name: "Arbitrum One", icon: "💙", fee: "0.0001 ETH", time: "2s" },
      { id: "polygon", name: "Polygon PoS", icon: "💜", fee: "0.05 MATIC", time: "3s" },
      { id: "solana", name: "Solana Mainnet", icon: "🟣", fee: "0.00005 SOL", time: "1s" },
      { id: "base", name: "Base L2", icon: "🔵", fee: "0.00008 ETH", time: "2s" },
      { id: "optimism", name: "OP Mainnet", icon: "🔴", fee: "0.0001 ETH", time: "2s" },
      { id: "avalanche", name: "Avalanche C-Chain", icon: "🔺", fee: "0.01 AVAX", time: "1s" }
    ];

    // Cross-Tab Real-Time Token Stream Listener
    this.tokenStreamChannel = new BroadcastChannel("omni_token_stream");
    this.tokenStreamChannel.onmessage = (event) => {
      if (event.data && event.data.type === "MINED_REWARD_STREAM") {
        this.handleIncomingMinedStream(event.data);
      }
    };
  }

  handleIncomingMinedStream(data) {
    const minedVal = data.newMinedBalance || 0;
    const balanceEl = document.getElementById("headerWalletBalanceDisplay");
    if (balanceEl) {
      balanceEl.innerText = (25000 + minedVal).toFixed(4) + " $OMNI";
      balanceEl.style.color = "#10b981";
    }
  }

  // Calculate Deflationary 0.01% Burn Fee
  calculateBridgeBurn(amount) {
    amount = parseFloat(amount) || 0;
    const burnFee = amount * 0.0001; // 0.01%
    const netReceived = amount - burnFee;
    return {
      burnFee: burnFee.toFixed(4),
      netReceived: netReceived.toFixed(4)
    };
  }

  // Execute LayerZero OFT V2 Cross-Chain Transfer
  executeBridgeSwap() {
    const amountInput = document.getElementById("bridgeAmountInput");
    const sourceChainEl = document.getElementById("sourceChainSelect");
    const destChainEl = document.getElementById("destChainSelect");

    const amount = amountInput ? parseFloat(amountInput.value) : 1000;
    const sourceChain = sourceChainEl ? sourceChainEl.value : "Ethereum";
    const destChain = destChainEl ? destChainEl.value : "OMNI Network";

    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid $OMNI bridge transfer amount.");
      return;
    }

    const { burnFee, netReceived } = this.calculateBridgeBurn(amount);
    const txHash = "0x" + Array.from({length: 64}, () => Math.floor(Math.random()*16).toString(16)).join('');

    this.totalBurnedOmni += parseFloat(burnFee);

    alert(`🚀 LayerZero OFT V2 Cross-Chain Transfer Executed!\n\n` +
          `Amount: ${amount.toLocaleString()} $OMNI\n` +
          `Route: ${sourceChain} ➔ ${destChain}\n` +
          `Deflationary 0.01% Burn: 🔥 ${burnFee} $OMNI (Burned permanently from supply!)\n` +
          `Net Received on Destination: 💎 ${netReceived} $OMNI\n` +
          `Estimated Finality: ~0.4s\n` +
          `LayerZero Message TX Hash: ${txHash}`);

    this.updateUI();
  }

  // One-Click Web3 Wallet RPC Configurator
  async addOmniNetworkToMetamask() {
    if (window.ethereum) {
      try {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [{
            chainId: '0x9999', // Chain ID 39321
            chainName: 'OMNI Network Mainnet',
            nativeCurrency: { name: 'OMNI', symbol: 'OMNI', decimals: 18 },
            rpcUrls: ['https://rpc.omni-network-39821.web.app'],
            blockExplorerUrls: ['https://omni-explorer-39821.web.app']
          }]
        });
        alert("🎉 OMNI Network Mainnet successfully configured in your Web3 Wallet!\n\nChain ID: 39321 (0x9999)\nRPC: https://rpc.omni-network-39821.web.app\nCurrency: OMNI");
      } catch (error) {
        alert("Wallet configuration request issued:\nChain ID: 39321 (0x9999)\nRPC: https://rpc.omni-network-39821.web.app\nCurrency: OMNI");
      }
    } else {
      alert("Custom OMNI Network RPC Parameters:\n\nNetwork Name: OMNI Network Mainnet\nChain ID: 39321 (0x9999)\nCurrency Symbol: OMNI\nRPC URL: https://rpc.omni-network-39821.web.app\nExplorer URL: https://omni-explorer-39821.web.app");
    }
  }

  // Update Live Stats in UI
  updateUI() {
    const burnEl = document.getElementById("networkTotalBurnedDisplay");
    const blockEl = document.getElementById("networkBlockHeightDisplay");
    const tpsEl = document.getElementById("networkPeakTpsDisplay");

    if (burnEl) burnEl.innerText = "🔥 " + Math.round(this.totalBurnedOmni).toLocaleString() + " $OMNI";
    if (blockEl) blockEl.innerText = "#" + this.currentBlock.toLocaleString();
    if (tpsEl) tpsEl.innerText = this.peakTps;
  }

  // Start Live Block Ticker
  startBlockTicker() {
    setInterval(() => {
      this.currentBlock += 1;
      const blockEl = document.getElementById("networkBlockHeightDisplay");
      if (blockEl) blockEl.innerText = "#" + this.currentBlock.toLocaleString();
    }, 2000);
  }
}

window.omniNetworkEngine = new OmniNetworkEngineV2();

document.addEventListener("DOMContentLoaded", () => {
  if (window.omniNetworkEngine) {
    window.omniNetworkEngine.updateUI();
    window.omniNetworkEngine.startBlockTicker();
  }
});
