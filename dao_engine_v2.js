/* ==========================================================================
   OMNI DAO GOVERNANCE & LIQUID STAKING V2 ENGINE
   Deep $OMNI & sOMNI Integration • Quadratic Voting • Treasury • Delegation
   ========================================================================== */

class OmniDaoEngineV2 {
  constructor() {
    this.omniBalance = 25000;
    this.somniBalance = 15000;
    this.baseApy = 12.5;
    this.companionsCount = 10;
    this.totalStakedNetwork = 14250800;
    this.treasuryTotalUsd = 42500000;
    this.connectedWallet = "0x7F2C...89B1";

    this.proposals = [
      {
        id: 1,
        title: "OIP-14: LayerZero OFT V2 Multi-Chain Expansion to Solana & Base",
        description: "Deploy LayerZero OFT V2 cross-chain endpoint contracts to enable instant native $OMNI transfers with 0.01% protocol burn.",
        author: "0x7F2C...89B1",
        status: "Active",
        forVotes: 14250800,
        againstVotes: 120500,
        abstainVotes: 45000,
        quorumNeeded: 15000000,
        userVoted: null
      },
      {
        id: 2,
        title: "OIP-15: Allocate 5,000,000 $OMNI Treasury Reserves to Liquid Staking Vaults",
        description: "Fund sOMNI yield pool with protocol-owned liquidity to sustain high APY yield boosts for long-term holders.",
        author: "0x3B9D...14C2",
        status: "Active",
        forVotes: 11800900,
        againstVotes: 450000,
        abstainVotes: 80000,
        quorumNeeded: 15000000,
        userVoted: null
      },
      {
        id: 3,
        title: "OIP-16: Deploy Autonomous AI Agent Validator Nodes on OMNI Network Testnet",
        description: "Integrate autonomous Gemini 3.7 AI agents to monitor transaction throughput and validator node health.",
        author: "0x91A4...77E4",
        status: "Passed",
        forVotes: 16800000,
        againstVotes: 89000,
        abstainVotes: 12000,
        quorumNeeded: 15000000,
        userVoted: "for"
      }
    ];
  }

  // Calculate Companion Stacking APY Boost
  calculateTotalAPY() {
    const stackingBoost = Math.min(this.companionsCount * 1.5, 36); // +1.5% per companion, up to +36%
    return (this.baseApy + 30 + stackingBoost).toFixed(1); // Base + Legendary (30%) + Stacking
  }

  // Calculate Quadratic Voting Power based on total token holdings
  getQuadraticVotingPower() {
    const totalHeld = this.omniBalance + this.somniBalance;
    const basePower = Math.sqrt(totalHeld);
    const companionMultiplier = 1 + (this.companionsCount * 0.05); // +5% power per companion
    return Math.round(basePower * companionMultiplier * 100);
  }

  // Stake $OMNI into sOMNI Liquid Vault
  stakeOmni(amount) {
    amount = parseFloat(amount);
    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount of $OMNI to stake.");
      return;
    }
    if (amount > this.omniBalance) {
      alert(`Insufficient $OMNI balance. You have ${this.omniBalance.toLocaleString()} $OMNI available.`);
      return;
    }

    this.omniBalance -= amount;
    this.somniBalance += amount;
    this.totalStakedNetwork += amount;

    alert(`🎉 Successfully staked ${amount.toLocaleString()} $OMNI into sOMNI Liquid Vault!\n\nNew sOMNI Balance: ${this.somniBalance.toLocaleString()} sOMNI\nCurrent Yield: ${this.calculateTotalAPY()}% APY`);
    this.updateUI();
  }

  // Unstake sOMNI back to $OMNI
  unstakeSomni(amount) {
    amount = parseFloat(amount);
    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount of sOMNI to unstake.");
      return;
    }
    if (amount > this.somniBalance) {
      alert(`Insufficient sOMNI balance. You have ${this.somniBalance.toLocaleString()} sOMNI available.`);
      return;
    }

    this.somniBalance -= amount;
    this.omniBalance += amount;
    this.totalStakedNetwork -= amount;

    alert(`Successfully unstaked ${amount.toLocaleString()} sOMNI!\n\nNew $OMNI Balance: ${this.omniBalance.toLocaleString()} $OMNI`);
    this.updateUI();
  }

  // Cast Quadratic Vote on a Proposal
  castVote(proposalId, voteType) {
    const prop = this.proposals.find(p => p.id === proposalId);
    if (!prop) return;

    if (prop.userVoted) {
      alert(`You have already cast your vote ('${prop.userVoted.toUpperCase()}') on Proposal #${proposalId}!`);
      return;
    }

    const voteWeight = this.getQuadraticVotingPower();

    if (voteType === "for") prop.forVotes += voteWeight;
    else if (voteType === "against") prop.againstVotes += voteWeight;
    else if (voteType === "abstain") prop.abstainVotes += voteWeight;

    prop.userVoted = voteType;
    alert(`✅ Vote Successfully Recorded!\n\nProposal: #${prop.id} - ${prop.title}\nVote Choice: ${voteType.toUpperCase()}\nQuadratic Weight Applied: ${voteWeight.toLocaleString()} Votes`);

    this.renderProposals();
  }

  // Update UI Stats Elements
  updateUI() {
    const omniBalEl = document.getElementById("userOmniBalDisplay");
    const somniBalEl = document.getElementById("userSomniBalDisplay");
    const apyEl = document.getElementById("userApyDisplay");
    const votingPowerEl = document.getElementById("userVotingPowerDisplay");
    const totalStakedEl = document.getElementById("totalStakedNetworkDisplay");

    if (omniBalEl) omniBalEl.innerText = this.omniBalance.toLocaleString() + " $OMNI";
    if (somniBalEl) somniBalEl.innerText = this.somniBalance.toLocaleString() + " sOMNI";
    if (apyEl) apyEl.innerText = this.calculateTotalAPY() + "% APY";
    if (votingPowerEl) votingPowerEl.innerText = this.getQuadraticVotingPower().toLocaleString() + " QVP";
    if (totalStakedEl) totalStakedEl.innerText = this.totalStakedNetwork.toLocaleString() + " $OMNI";

    this.renderProposals();
  }

  renderProposals() {
    const container = document.getElementById("daoProposalsContainer");
    if (!container) return;

    container.innerHTML = "";
    this.proposals.forEach(p => {
      const total = p.forVotes + p.againstVotes + p.abstainVotes;
      const forPct = Math.round((p.forVotes / total) * 100);
      const againstPct = Math.round((p.againstVotes / total) * 100);
      const quorumPct = Math.min(Math.round((total / p.quorumNeeded) * 100), 100);

      const card = document.createElement("div");
      card.className = "liquid-glass-card";
      card.style.cssText = "padding: 24px; margin-bottom: 20px;";

      card.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
          <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--neon-cyan); font-weight: bold; background: rgba(0,229,255,0.1); border: 1px solid rgba(0,229,255,0.25); padding: 4px 10px; border-radius: 6px;">
            OIP-${p.id} • ${p.status.toUpperCase()}
          </span>
          <span style="font-size: 0.8rem; color: var(--text-muted);">Author: ${p.author}</span>
        </div>
        <h3 style="font-family: var(--font-header); font-size: 1.2rem; color: #fff; margin-bottom: 8px;">${p.title}</h3>
        <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 16px;">${p.description}</p>

        <!-- Pass/Fail Progress Bar -->
        <div style="background: rgba(0,0,0,0.4); border-radius: 8px; height: 12px; overflow: hidden; display: flex; margin-bottom: 8px;">
          <div style="width: ${forPct}%; background: var(--neon-green); transition: width 0.4s;" title="FOR: ${forPct}%"></div>
          <div style="width: ${againstPct}%; background: #ef4444; transition: width 0.4s;" title="AGAINST: ${againstPct}%"></div>
        </div>

        <div style="display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted); margin-bottom: 16px;">
          <span style="color: var(--neon-green);">FOR: ${p.forVotes.toLocaleString()} (${forPct}%)</span>
          <span style="color: #ef4444;">AGAINST: ${p.againstVotes.toLocaleString()} (${againstPct}%)</span>
          <span>QUORUM: ${quorumPct}%</span>
        </div>

        <!-- Action Buttons -->
        <div style="display: flex; gap: 10px;">
          <button class="btn-primary-action" style="flex: 1; background: linear-gradient(135deg, #10b981, #059669) !important;" onclick="window.omniDaoEngine.castVote(${p.id}, 'for')">
            👍 Vote FOR
          </button>
          <button class="btn-primary-action" style="flex: 1; background: linear-gradient(135deg, #ef4444, #dc2626) !important; color: #fff !important;" onclick="window.omniDaoEngine.castVote(${p.id}, 'against')">
            👎 Vote AGAINST
          </button>
          <button class="btn-ctrl" style="flex: 0.8;" onclick="window.omniDaoEngine.castVote(${p.id}, 'abstain')">
            ⚪ Abstain
          </button>
        </div>
      `;
      container.appendChild(card);
    });
  }
}

window.omniDaoEngine = new OmniDaoEngineV2();

document.addEventListener("DOMContentLoaded", () => {
  if (window.omniDaoEngine) {
    window.omniDaoEngine.updateUI();
  }
});
