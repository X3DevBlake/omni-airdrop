// ==========================================================================
// OMNI Airdrop Portal JavaScript - Firebase & Firestore Integrated UI Logic
// ==========================================================================

import { auth, dbPresale, dbDao } from './firebase-config.js';
import {
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  updateProfile,
  onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js';
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment,
  collection,
  getDocs,
  query,
  where,
  onSnapshot
} from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';

const WALLET_PROVIDERS = [
  { id: 'metamask', name: 'MetaMask', status: 'Installed', svg: `<svg class="anim-svg anim-metamask" viewBox="0 0 28 28"><path fill="#fff" d="M0 0h28v28H0z"/><g clip-path="url(#metaMaskClip)"><path fill="#ff5c16" d="m24.024 23.824-4.846-1.434-3.655 2.172-2.55-.001-3.656-2.171-4.844 1.434L3 18.88l1.473-5.488L3 8.751 4.473 3l7.569 4.496h4.413L24.024 3l1.473 5.751-1.473 4.64 1.473 5.488z"/><path fill="#ff5c16" d="m4.474 3 7.57 4.499-.302 3.087zm4.844 15.881 3.33 2.522-3.33.987zm3.064-4.17-.64-4.123-4.097 2.804h-.002v.001l.013 2.886 1.661-1.567zM24.024 3l-7.57 4.499.3 3.087zM19.18 18.881l-3.33 2.522 3.33.987zm1.674-5.488v-.002zl-4.097-2.804-.64 4.124h3.064l1.662 1.567z"/><path fill="#e34807" d="m9.317 22.39-4.844 1.434L3 18.881h6.317zm3.064-7.68.925 5.962-1.282-3.315-4.37-1.078 1.662-1.568zm6.799 7.68 4.844 1.434 1.473-4.943H19.18zm-3.064-7.68-.925 5.962 1.282-3.315 4.37-1.078-1.663-1.568z"/><path fill="#ff8d5d" d="m3 18.88 1.473-5.489h3.169l.012 2.887 4.37 1.078 1.282 3.314-.659.73-3.33-2.522H3zm22.497 0-1.473-5.489h-3.17l-.01 2.887-4.371 1.078-1.282 3.314.659.73 3.33-2.522h6.317zM16.455 7.495h-4.413l-.3 3.087 1.565 10.084h1.884l1.565-10.084z"/><path fill="#661800" d="M4.473 3 3 8.751l1.473 4.64h3.169l4.1-2.805zm6.992 12.908H10.03l-.781.761 2.776.685-.56-1.447M24.024 3l1.473 5.751-1.473 4.64h-3.17l-4.098-2.805zm-6.99 12.908h1.437l.782.762-2.78.686.56-1.45zm-1.512 6.687.328-1.193-.66-.73h-1.885l-.659.73.327 1.192"/><path fill="#c0c4cd" d="M15.522 22.594v1.969h-2.548v-1.969z"/><path fill="#e7ebf6" d="m9.318 22.388 3.658 2.174v-1.969l-.328-1.192zm9.862 0-3.658 2.174v-1.969l.328-1.192z"/></g><defs><clipPath id="metaMaskClip"><path fill="#fff" d="M3 3h22.5v21.563H3z"/></clipPath></defs></svg>` },
  { id: 'coinbase', name: 'Coinbase', status: 'Popular', svg: `<svg class="anim-svg anim-coinbase" viewBox="0 0 28 28" fill="none"><rect width="28" height="28" fill="#2C5FF6"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14 23.8C19.4124 23.8 23.8 19.4124 23.8 14C23.8 8.58761 19.4124 4.2 14 4.2C8.58761 4.2 4.2 8.58761 4.2 14C4.2 19.4124 8.58761 23.8 14 23.8ZM11.55 10.8C11.1358 10.8 10.8 11.1358 10.8 11.55V16.45C10.8 16.8642 11.1358 17.2 11.55 17.2H16.45C16.8642 17.2 17.2 16.8642 17.2 16.45V11.55C17.2 11.1358 16.8642 10.8 16.45 10.8H11.55Z" fill="white"/></svg>` },
  { id: 'trust', name: 'Trust Wallet', status: 'Mobile', svg: `<svg class="anim-svg anim-trust" viewBox="0 0 28 28"><path fill="#fff" d="M0 0h28v28H0z"/><path fill="#0500FF" d="M6 7.583 13.53 5v17.882C8.15 20.498 6 15.928 6 13.345V7.583Z"/><path fill="url(#trustGrad)" d="M22 7.583 13.53 5v17.882c6.05-2.384 8.47-6.954 8.47-9.537V7.583Z"/><defs><linearGradient id="trustGrad" x1="19.768" x2="14.072" y1="3.753" y2="22.853" gradientUnits="userSpaceOnUse"><stop offset=".02" stop-color="#00F"/><stop offset=".08" stop-color="#0094FF"/><stop offset=".16" stop-color="#48FF91"/><stop offset=".42" stop-color="#0094FF"/><stop offset=".68" stop-color="#0038FF"/><stop offset=".9" stop-color="#0500FF"/></linearGradient></defs></svg>` },
  { id: 'walletconnect', name: 'WalletConnect', status: 'Scan QR', svg: `<svg class="anim-svg anim-walletconnect" viewBox="0 0 28 28" fill="none"><rect width="28" height="28" fill="#3B99FC"/><path d="M8.38969 10.3739C11.4882 7.27538 16.5118 7.27538 19.6103 10.3739L19.9832 10.7468C20.1382 10.9017 20.1382 11.1529 19.9832 11.3078L18.7076 12.5835C18.6301 12.6609 18.5045 12.6609 18.4271 12.5835L17.9139 12.0703C15.7523 9.9087 12.2477 9.9087 10.0861 12.0703L9.53655 12.6198C9.45909 12.6973 9.3335 12.6973 9.25604 12.6198L7.98039 11.3442C7.82547 11.1893 7.82547 10.9381 7.98039 10.7832L8.38969 10.3739ZM22.2485 13.012L23.3838 14.1474C23.5387 14.3023 23.5387 14.5535 23.3838 14.7084L18.2645 19.8277C18.1096 19.9827 17.8584 19.9827 17.7035 19.8277L14.0702 16.1944C14.0314 16.1557 13.9686 16.1557 13.9299 16.1944L10.2966 19.8277C10.1417 19.9827 9.89053 19.9827 9.73561 19.8278L4.61619 14.7083C4.46127 14.5534 4.46127 14.3022 4.61619 14.1473L5.75152 13.012C5.90645 12.857 6.15763 12.857 6.31255 13.012L9.94595 16.6454C9.98468 16.6841 10.0475 16.6841 10.0862 16.6454L13.7194 13.012C13.8743 12.857 14.1255 12.857 14.2805 13.012L17.9139 16.6454C17.9526 16.6841 18.0154 16.6841 18.0541 16.6454L21.6874 13.012C21.8424 12.8571 22.0936 12.8571 22.2485 13.012ZM22.2485 13.012" fill="white"/></svg>` },
  { id: 'phantom', name: 'Phantom', status: 'Solana', svg: `<svg viewBox="0 0 28 28" fill="none"><rect width="28" height="28" fill="#AB9FF2"/><path d="M14 6c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm-2.5 9c-.828 0-1.5-.672-1.5-1.5S10.672 12 11.5 12s1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm5 0c-.828 0-1.5-.672-1.5-1.5S15.672 12 16.5 12s1.5.672 1.5 1.5-.672 1.5-1.5 1.5z" fill="white"/></svg>` },
  { id: 'rainbow', name: 'Rainbow', status: 'Popular', svg: `<svg viewBox="0 0 28 28" fill="none"><rect width="28" height="28" fill="#FF1D53"/><path d="M6 18c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="white" stroke-width="3" stroke-linecap="round"/><path d="M9 18c0-2.761 2.239-5 5-5s5 2.239 5 5" stroke="#FFE600" stroke-width="2.5" stroke-linecap="round"/></svg>` },
  { id: 'ledger', name: 'Ledger Live', status: 'Hardware', svg: `<svg viewBox="0 0 28 28" fill="none"><rect width="28" height="28" fill="#1C1D21"/><rect x="7" y="7" width="14" height="14" rx="2" stroke="white" stroke-width="2.5"/><path d="M11 11h6v6" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>` },
  { id: 'trezor', name: 'Trezor', status: 'Hardware', svg: `<svg viewBox="0 0 28 28" fill="none"><rect width="28" height="28" fill="#00854A"/><path d="M14 6L6 10v6c0 4.418 3.582 8 8 8s8-3.582 8-8v-6L14 6z" fill="white"/><circle cx="14" cy="14" r="3" fill="#00854A"/></svg>` },
  { id: 'safe', name: 'Safe', status: 'Multisig', svg: `<svg viewBox="0 0 28 28" fill="none"><rect width="28" height="28" fill="#12ff80"/><circle cx="14" cy="14" r="6" stroke="#121315" stroke-width="2.5"/><rect x="12.5" y="10.5" width="3" height="7" rx="1.5" fill="#121315"/></svg>` },
  { id: 'argent', name: 'Argent', status: 'L2 Wallet', svg: `<svg viewBox="0 0 28 28" fill="none"><rect width="28" height="28" fill="#FF5E5B"/><path d="M14 6L7 11v6c0 3.866 3.134 7 7 7s7-3.134 7-7v-6L14 6zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" fill="white"/></svg>` },
  { id: 'okx', name: 'OKX Wallet', status: 'Exchange', svg: `<svg viewBox="0 0 28 28" fill="none"><rect width="28" height="28" fill="#000000"/><rect x="7" y="7" width="6" height="6" fill="white"/><rect x="15" y="7" width="6" height="6" fill="white"/><rect x="7" y="15" width="6" height="6" fill="white"/><rect x="15" y="15" width="6" height="6" fill="#12ff80"/></svg>` },
  { id: 'brave', name: 'Brave Wallet', status: 'Built-in', svg: `<svg viewBox="0 0 28 28" fill="none"><rect width="28" height="28" fill="#FF4500"/><path d="M14 6l7 5-1.5 8.5L14 22l-5.5-2.5L7 11l7-5z" fill="white"/><circle cx="14" cy="14" r="2" fill="#FF4500"/></svg>` },
  { id: 'rabby', name: 'Rabby', status: 'Security', svg: `<svg viewBox="0 0 28 28" fill="none"><rect width="28" height="28" fill="#0080FF"/><path d="M14 6C9.582 6 6 9.582 6 14s3.582 8 8 8 8-3.582 8-8h-3c0 2.761-2.239 5-5 5s-5-2.239-5-5 2.239-5 5-5V6z" fill="white"/></svg>` },
  { id: 'tokenpocket', name: 'TokenPocket', status: 'Multi-chain', svg: `<svg viewBox="0 0 28 28" fill="none"><rect width="28" height="28" fill="#2980B9"/><path d="M8 8h12v4H12v8H8V8z" fill="white"/><circle cx="16" cy="16" r="4" fill="white"/></svg>` },
  { id: 'bitget', name: 'Bitget', status: 'Popular', svg: `<svg viewBox="0 0 28 28" fill="none"><rect width="28" height="28" fill="#1abc9c"/><path d="M8 14l4-4 8 8-4 4-8-8z" stroke="white" stroke-width="2.5" stroke-linejoin="round"/></svg>` }
];

// Application State
const state = {
  walletConnected: false,
  connectedAddress: "",
  checkedAddress: "",
  baseAllocation: 0,
  bonusAllocation: 0,
  subscriptionTier: "Free",
  subscriberBoostAmount: 0,
  claimed: false,
  quests: {
    discord: false,
    twitter: false,
    telegram: false,
    dao: false
  },
  stats: {
    totalClaimed: 0,
    totalAirdrop: 50000000,
    claimants: 0
  }
};

let userState = {
  loggedIn: false,
  email: null,
  displayName: null,
  walletAddress: null
};

// DOM Elements
const elements = {
  headerConnectBtn: document.getElementById("headerConnectBtn"),
  connectBtnText: document.getElementById("connectBtnText"),
  walletInput: document.getElementById("walletInput"),
  checkBtn: document.getElementById("checkBtn"),
  resultPanel: document.getElementById("resultPanel"),
  resultStatusBadge: document.getElementById("resultStatusBadge"),
  resultAddressTruncated: document.getElementById("resultAddressTruncated"),
  allocatedVal: document.getElementById("allocatedVal"),
  claimBtn: document.getElementById("claimBtn"),
  
  // Stats
  valTotalAirdrop: document.getElementById("valTotalAirdrop"),
  valTotalClaimed: document.getElementById("valTotalClaimed"),
  valTotalClaimants: document.getElementById("valTotalClaimants"),
  progressBarFill: document.getElementById("progressBarFill"),
  progressPercentText: document.getElementById("progressPercentText"),

  // Quests
  btnQuestDiscord: document.getElementById("btnQuestDiscord"),
  btnQuestTwitter: document.getElementById("btnQuestTwitter"),
  btnQuestTelegram: document.getElementById("btnQuestTelegram"),
  btnQuestDAO: document.getElementById("btnQuestDAO"),
  questDiscord: document.getElementById("questDiscord"),
  questTwitter: document.getElementById("questTwitter"),
  questTelegram: document.getElementById("questTelegram"),
  questDAO: document.getElementById("questDAO"),
  bonusCard: document.getElementById("bonusCard"),
  bonusAlertText: document.getElementById("bonusAlertText"),

  // Modals
  modalOverlay: document.getElementById("modalOverlay"),
  modalSpinState: document.getElementById("modalSpinState"),
  modalSuccessState: document.getElementById("modalSuccessState"),
  modalSuccessText: document.getElementById("modalSuccessText"),
  txHashLink: document.getElementById("txHashLink"),
  modalCloseBtn: document.getElementById("modalCloseBtn"),
  
  // Auth Modal Elements
  authModal: document.getElementById('authModal'),
  authModalClose: document.getElementById('authModalClose'),
  tabBtnLogin: document.getElementById('tabBtnLogin'),
  tabBtnSignup: document.getElementById('tabBtnSignup'),
  authViewLogin: document.getElementById('authViewLogin'),
  authViewSignup: document.getElementById('authViewSignup'),
  loginForm: document.getElementById('loginForm'),
  signupForm: document.getElementById('signupForm'),
  btnGoogleAuth: document.getElementById('btnGoogleAuth'),
  headerAuthBtn: document.getElementById('headerAuthBtn'),
  headerAuthText: document.getElementById('headerAuthText'),
  authProfilePanel: document.getElementById('authProfilePanel'),
  authLinkWalletBanner: document.getElementById('authLinkWalletBanner'),
  authLinkAddress: document.getElementById('authLinkAddress'),
  btnAuthLinkWallet: document.getElementById('btnAuthLinkWallet'),
  profilePanelName: document.getElementById('profilePanelName'),
  profilePanelEmail: document.getElementById('profilePanelEmail'),
  profilePanelWallet: document.getElementById('profilePanelWallet'),
  btnPanelLink: document.getElementById('btnPanelLink'),
  btnPanelSignout: document.getElementById('btnPanelSignout'),
  walletModal: document.getElementById('walletModal'),
  walletModalClose: document.getElementById('walletModalClose'),
  walletOptionsContainer: document.getElementById('walletOptionsContainer'),
  airdropSocialTierBadge: document.getElementById('airdropSocialTierBadge'),
  airdropSocialBoostVal: document.getElementById('airdropSocialBoostVal')
};

// Modal Open/Close Helpers
function openModal(modalEl) {
  if (modalEl) modalEl.classList.add("active");
}
function closeModal(modalEl) {
  if (modalEl) modalEl.classList.remove("active");
}

// ==========================================================================
// Countdown Timer Logic
// ==========================================================================
function initCountdownTimer() {
  const timerElements = {
    days: document.querySelector('#daysBlock .time-num'),
    hours: document.querySelector('#hoursBlock .time-num'),
    mins: document.querySelector('#minsBlock .time-num'),
    secs: document.querySelector('#secsBlock .time-num')
  };

  if (!timerElements.days || !timerElements.hours || !timerElements.mins || !timerElements.secs) {
    return;
  }

  const COUNTDOWN_DURATION = 30 * 24 * 60 * 60 * 1000; // 30 days
  let targetTime = localStorage.getItem('omni_airdrop_end');
  
  if (!targetTime) {
    targetTime = Date.now() + COUNTDOWN_DURATION;
    localStorage.setItem('omni_airdrop_end', targetTime);
  } else {
    targetTime = parseInt(targetTime, 10);
    // Force reset if NaN, expired, or old 2-day timer
    if (isNaN(targetTime) || targetTime - Date.now() < 29 * 24 * 60 * 60 * 1000 || Date.now() >= targetTime) {
      targetTime = Date.now() + COUNTDOWN_DURATION;
      localStorage.setItem('omni_airdrop_end', targetTime);
    }
  }

  function updateTimer() {
    const timeRemaining = targetTime - Date.now();
    if (timeRemaining <= 0) {
      targetTime = Date.now() + COUNTDOWN_DURATION;
      localStorage.setItem('omni_airdrop_end', targetTime);
      return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    timerElements.days.textContent = String(days).padStart(2, '0');
    timerElements.hours.textContent = String(hours).padStart(2, '0');
    timerElements.mins.textContent = String(minutes).padStart(2, '0');
    timerElements.secs.textContent = String(seconds).padStart(2, '0');
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

// ==========================================================================
// Initialization
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initCountdownTimer();
  initCursorSpotlights();
  initFAQAccordions();
  
  // Listen to global stats in real-time
  initGlobalStatsListener();

  // Setup Event Listeners
  elements.headerConnectBtn.addEventListener("click", toggleWalletConnection);
  elements.checkBtn.addEventListener("click", () => handleCheckEligibility(elements.walletInput.value));
  elements.claimBtn.addEventListener("click", handleClaimAirdrop);
  
  if (elements.modalCloseBtn) {
    elements.modalCloseBtn.addEventListener("click", () => {
      closeModal(elements.modalOverlay);
    });
  }

  if (elements.walletModalClose) {
    elements.walletModalClose.addEventListener("click", () => {
      closeModal(elements.walletModal);
    });
  }
  
  initWalletModalListeners();

  // Quest Listeners (Firestore updates on quest completion)
  elements.btnQuestDiscord.addEventListener("click", () => completeQuest("discord", 125, elements.btnQuestDiscord, elements.questDiscord));
  elements.btnQuestTwitter.addEventListener("click", () => completeQuest("twitter", 125, elements.btnQuestTwitter, elements.questTwitter));
  elements.btnQuestTelegram.addEventListener("click", () => completeQuest("telegram", 100, elements.btnQuestTelegram, elements.questTelegram));
  elements.btnQuestDAO.addEventListener("click", () => {
    // Open OMNI DAO Page in a new tab to vote, then verify
    window.open("https://omni-dao-39821.web.app", "_blank");
    setTimeout(() => {
      completeQuest("dao", 150, elements.btnQuestDAO, elements.questDAO);
    }, 1500);
  });

  // Auth UI Listeners
  if (elements.tabBtnLogin && elements.tabBtnSignup) {
    elements.tabBtnLogin.addEventListener('click', () => switchAuthTab('login'));
    elements.tabBtnSignup.addEventListener('click', () => switchAuthTab('signup'));
  }

  if (elements.headerAuthBtn) {
    elements.headerAuthBtn.addEventListener('click', openAuthModal);
  }

  if (elements.authModalClose) {
    elements.authModalClose.addEventListener('click', () => closeModal(elements.authModal));
  }

  window.addEventListener('click', (e) => {
    if (e.target === elements.authModal) {
      closeModal(elements.authModal);
    }
  });

  // Login Submit
  if (elements.loginForm) {
    elements.loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        const profileRef = doc(dbPresale, "user_profiles", email.toLowerCase());
        const profileSnap = await getDoc(profileRef);
        let walletAddress = null;
        let displayName = user.displayName || email.split('@')[0];
        if (profileSnap.exists()) {
          walletAddress = profileSnap.data().walletAddress;
          displayName = profileSnap.data().displayName || displayName;
        }
        
        setLoggedInUser({
          email: user.email,
          displayName: displayName,
          walletAddress: walletAddress
        });
        closeModal(elements.authModal);
      } catch (err) {
        console.error(err);
        alert("Login failed: " + err.message);
      }
    });
  }

  // Signup Submit
  if (elements.signupForm) {
    elements.signupForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const displayName = document.getElementById('signupName').value;
      const email = document.getElementById('signupEmail').value;
      const password = document.getElementById('signupPassword').value;
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await updateProfile(user, { displayName });
        
        const profileRef = doc(dbPresale, "user_profiles", email.toLowerCase());
        await setDoc(profileRef, {
          email: email.toLowerCase(),
          displayName: displayName,
          walletAddress: null,
          googleId: null,
          createdAt: Date.now()
        });
        
        setLoggedInUser({
          email: user.email,
          displayName: displayName,
          walletAddress: null
        });
        closeModal(elements.authModal);
      } catch (err) {
        console.error(err);
        alert("Signup failed: " + err.message);
      }
    });
  }

  // Google OAuth
  if (elements.btnGoogleAuth) {
    elements.btnGoogleAuth.addEventListener('click', async () => {
      try {
        const provider = new GoogleAuthProvider();
        const userCredential = await signInWithPopup(auth, provider);
        const user = userCredential.user;
        const email = user.email;
        const displayName = user.displayName || email.split('@')[0];
        
        const profileRef = doc(dbPresale, "user_profiles", email.toLowerCase());
        const profileSnap = await getDoc(profileRef);
        let walletAddress = null;
        if (profileSnap.exists()) {
          walletAddress = profileSnap.data().walletAddress;
          if (!profileSnap.data().googleId) {
            await updateDoc(profileRef, { googleId: user.uid });
          }
        } else {
          await setDoc(profileRef, {
            email: email.toLowerCase(),
            displayName: displayName,
            walletAddress: null,
            googleId: user.uid,
            createdAt: Date.now()
          });
        }
        
        setLoggedInUser({
          email: email,
          displayName: displayName,
          walletAddress: walletAddress
        });
        closeModal(elements.authModal);
      } catch (err) {
        console.error("Google login failed:", err);
        alert("Google sign-in failed: " + err.message);
      }
    });
  }

  // Link Wallet Banner Button
  if (elements.btnAuthLinkWallet) {
    elements.btnAuthLinkWallet.addEventListener('click', linkCurrentWalletToAccount);
  }

  // Profile Panel Buttons Wiring
  if (elements.btnPanelSignout) {
    elements.btnPanelSignout.addEventListener('click', async () => {
      await signOut(auth);
      userState = {
        loggedIn: false,
        email: null,
        displayName: null,
        walletAddress: null
      };
      localStorage.removeItem('omni_user');
      elements.headerAuthText.textContent = 'Sign In';
      closeModal(elements.authModal);
    });
  }

  if (elements.btnPanelLink) {
    elements.btnPanelLink.addEventListener('click', async () => {
      if (state.walletConnected) {
        linkCurrentWalletToAccount();
      } else {
        alert("Please connect your wallet first.");
        closeModal(elements.authModal);
      }
    });
  }

  // Firebase Auth Observer
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const email = user.email;
      const profileRef = doc(dbPresale, "user_profiles", email.toLowerCase());
      const profileSnap = await getDoc(profileRef);
      let walletAddress = null;
      let displayName = user.displayName || email.split('@')[0];
      if (profileSnap.exists()) {
        walletAddress = profileSnap.data().walletAddress;
        displayName = profileSnap.data().displayName || displayName;
      }
      setLoggedInUser({
        email,
        displayName,
        walletAddress
      });
      
      // Auto fill check input if wallet linked
      if (walletAddress && !state.walletConnected) {
        elements.walletInput.value = walletAddress;
        // Optionally connect client wallet automatically
        state.walletConnected = true;
        state.connectedAddress = walletAddress;
        elements.connectBtnText.innerText = truncateAddress(walletAddress);
        elements.headerConnectBtn.classList.add("connected");
        handleCheckEligibility(walletAddress);
      }
    } else {
      userState = {
        loggedIn: false,
        email: null,
        displayName: null,
        walletAddress: null
      };
      localStorage.removeItem('omni_user');
      elements.headerAuthText.textContent = 'Sign In';
      
      if (window.broadcastAuthToIframe) {
        window.broadcastAuthToIframe(null, true);
      }
    }
  });

  // Load cached wallet on startup
  const cachedWallet = localStorage.getItem('omni_connected_wallet');
  if (cachedWallet && !state.walletConnected) {
    const parsed = JSON.parse(cachedWallet);
    state.walletConnected = true;
    state.connectedAddress = parsed.address.toLowerCase();
    elements.connectBtnText.innerText = truncateAddress(parsed.address);
    elements.headerConnectBtn.classList.add("connected");
    elements.walletInput.value = parsed.address;
    
    checkWalletLinkingBanner();
    handleCheckEligibility(parsed.address);
  }
});

// ==========================================================================
// Authentication State Management
// ==========================================================================
function switchAuthTab(tab) {
  if (tab === 'login') {
    elements.tabBtnLogin.classList.add('active');
    elements.tabBtnSignup.classList.remove('active');
    elements.authViewLogin.style.display = 'block';
    elements.authViewSignup.style.display = 'none';
  } else {
    elements.tabBtnSignup.classList.add('active');
    elements.tabBtnLogin.classList.remove('active');
    elements.authViewSignup.style.display = 'block';
    elements.authViewLogin.style.display = 'none';
  }
}

function setLoggedInUser(user) {
  userState.loggedIn = true;
  userState.email = user.email;
  userState.displayName = user.displayName;
  userState.walletAddress = user.walletAddress;
  
  localStorage.setItem('omni_user', JSON.stringify(userState));
  elements.headerAuthText.textContent = user.displayName || user.email.split('@')[0];
  checkWalletLinkingBanner();
  
  if (window.broadcastAuthToIframe) {
    window.broadcastAuthToIframe(user);
  }
}

function checkWalletLinkingBanner() {
  if (!elements.authLinkWalletBanner) return;
  if (userState.loggedIn && state.walletConnected) {
    if (!userState.walletAddress || userState.walletAddress.toLowerCase() !== state.connectedAddress.toLowerCase()) {
      elements.authLinkWalletBanner.style.display = 'flex';
      elements.authLinkAddress.textContent = truncateAddress(state.connectedAddress);
    } else {
      elements.authLinkWalletBanner.style.display = 'none';
    }
  } else {
    elements.authLinkWalletBanner.style.display = 'none';
  }
}

function openAuthModal() {
  openModal(elements.authModal);
  if (userState.loggedIn) {
    elements.authProfilePanel.style.display = 'block';
    document.querySelector('.auth-tabs').style.display = 'none';
    elements.authViewLogin.style.display = 'none';
    elements.authViewSignup.style.display = 'none';
    document.querySelector('.auth-divider').style.display = 'none';
    elements.btnGoogleAuth.style.display = 'none';
    
    elements.profilePanelName.textContent = userState.displayName;
    elements.profilePanelEmail.textContent = userState.email;
    elements.profilePanelWallet.textContent = userState.walletAddress || 'None';
    
    if (state.walletConnected) {
      if (userState.walletAddress && userState.walletAddress.toLowerCase() === state.connectedAddress.toLowerCase()) {
        elements.btnPanelLink.style.display = 'none';
      } else {
        elements.btnPanelLink.style.display = 'block';
        elements.btnPanelLink.textContent = 'Link Wallet';
      }
    } else {
      elements.btnPanelLink.style.display = 'none';
    }
  } else {
    elements.authProfilePanel.style.display = 'none';
    document.querySelector('.auth-tabs').style.display = 'flex';
    switchAuthTab('login');
    document.querySelector('.auth-divider').style.display = 'flex';
    elements.btnGoogleAuth.style.display = 'inline-flex';
  }
}

async function linkCurrentWalletToAccount() {
  if (!state.walletConnected || !userState.loggedIn) return;
  
  const message = `OMNI Wallet Link Request:\n\nEmail: ${userState.email}\nWallet: ${state.connectedAddress}`;
  let signature = '0x_mock_signature';
  
  if (typeof window.ethereum !== 'undefined') {
    try {
      const browserProvider = new ethers.BrowserProvider(window.ethereum);
      const signer = await browserProvider.getSigner();
      signature = await signer.signMessage(message);
    } catch (err) {
      console.error("Signature request rejected:", err);
      alert("Signature rejected. Wallet cannot be linked without signing the verification message.");
      return;
    }
  } else {
    signature = "0x" + Array.from({length: 130}, () => Math.floor(Math.random()*16).toString(16)).join("");
  }
  
  try {
    const profileRef = doc(dbPresale, "user_profiles", userState.email.toLowerCase());
    await updateDoc(profileRef, { walletAddress: state.connectedAddress.toLowerCase() });
    
    userState.walletAddress = state.connectedAddress.toLowerCase();
    localStorage.setItem('omni_user', JSON.stringify(userState));
    elements.authLinkWalletBanner.style.display = 'none';
    if (elements.profilePanelWallet) elements.profilePanelWallet.textContent = state.connectedAddress;
    alert("Wallet successfully linked to your account!");
    closeModal(elements.authModal);
  } catch (err) {
    console.error(err);
    alert("Failed to link wallet: " + err.message);
  }
}

// ==========================================================================
// Cursor Spotlight Interaction
// ==========================================================================
function initCursorSpotlights() {
  const cards = document.querySelectorAll(".spotlight-card");
  cards.forEach(card => {
    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });
}

// ==========================================================================
// FAQ Accordions
// ==========================================================================
function initFAQAccordions() {
  const items = document.querySelectorAll(".faq-item");
  items.forEach(item => {
    const trigger = item.querySelector(".faq-trigger");
    trigger.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      
      items.forEach(otherItem => {
        otherItem.classList.remove("active");
        otherItem.querySelector(".faq-trigger").setAttribute("aria-expanded", "false");
      });

      if (!isActive) {
        item.classList.add("active");
        trigger.setAttribute("aria-expanded", "true");
      }
    });
  });
}

// ==========================================================================
// Real-time Claims Stats Listener
// ==========================================================================
function initGlobalStatsListener() {
  const statsRef = doc(dbPresale, "airdrop_stats", "stats");
  
  onSnapshot(statsRef, async (docSnap) => {
    if (!docSnap.exists()) {
      // Seed default stats
      await setDoc(statsRef, {
        total_claimed: 0,
        claimants_count: 0,
        total_allocated: 4250000
      });
      return;
    }
    
    const statsData = docSnap.data();
    const globalClaimed = (statsData.total_claimed || 0);
    const claimants = (statsData.claimants_count || 0);
    const globalTotal = 50000000.0;
    
    animateNumberTicker(elements.valTotalClaimed, state.stats.totalClaimed, globalClaimed);
    animateNumberTicker(elements.valTotalClaimants, state.stats.claimants, claimants);
    
    state.stats.totalClaimed = globalClaimed;
    state.stats.totalAirdrop = globalTotal;
    state.stats.claimants = claimants;

    const ratio = Math.min((globalClaimed / globalTotal) * 100, 100);
    elements.progressBarFill.style.width = `${ratio}%`;
    elements.progressPercentText.innerText = `${ratio.toFixed(2)}%`;
  });
}

function animateNumberTicker(element, start, end) {
  if (start === end) return;
  const duration = 1500; 
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    const ease = 1 - Math.pow(1 - progress, 3);
    const currentVal = Math.floor(start + (end - start) * ease);
    
    element.innerText = currentVal.toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.innerText = end.toLocaleString();
    }
  }
  requestAnimationFrame(update);
}

// ==========================================================================
// Wallet Connection
// ==========================================================================
async function toggleWalletConnection() {
  if (state.walletConnected) {
    // Disconnect
    state.walletConnected = false;
    state.connectedAddress = "";
    elements.connectBtnText.innerText = "Connect Wallet";
    elements.headerConnectBtn.classList.remove("connected");
    elements.walletInput.value = "";
    elements.resultPanel.style.display = "none";
    
    localStorage.removeItem('omni_connected_wallet');
    resetQuests();
    checkWalletLinkingBanner();
  } else {
    openModal(elements.walletModal);
  }
}

async function connectWallet(address, provider) {
  state.walletConnected = true;
  state.connectedAddress = address.toLowerCase();
  
  elements.connectBtnText.innerText = truncateAddress(address);
  elements.headerConnectBtn.classList.add("connected");
  elements.walletInput.value = address;
  
  localStorage.setItem('omni_connected_wallet', JSON.stringify({
    address: address.toLowerCase(),
    provider: provider
  }));
  checkWalletLinkingBanner();

  // Auto-link wallet address to OmniAir social profile (OmniDev)
  try {
    const profileRef = doc(dbDao, 'omniair_profiles', 'OmniDev');
    await updateDoc(profileRef, {
      walletAddress: address.toLowerCase()
    });
    console.log(`Linked wallet address ${address} to OmniAir profile`);
  } catch (e) {
    console.warn("Failed to auto-link wallet to OmniAir profile:", e);
  }

  handleCheckEligibility(address);
}

function initWalletModalListeners() {
  const container = elements.walletOptionsContainer;
  if (container) {
    container.innerHTML = WALLET_PROVIDERS.map(w => `
      <button class="wallet-option-btn" data-wallet="${w.id}">
        <span class="wallet-logo">${w.svg}</span>
        <span class="wallet-name">${w.name}</span>
        <span class="wallet-status">${w.status}</span>
      </button>
    `).join('');
  }

  const walletOptions = document.querySelectorAll('.wallet-option-btn');
  walletOptions.forEach(btn => {
    btn.addEventListener('click', async () => {
      const provider = btn.getAttribute('data-wallet');
      const statusSpan = btn.querySelector('.wallet-status');
      if (!statusSpan) return;
      
      const originalText = statusSpan.textContent;
      statusSpan.textContent = 'Connecting...';
      statusSpan.style.color = 'hsl(var(--neon-cyan))';

      if (provider === 'metamask') {
        if (typeof window.ethereum !== 'undefined') {
          try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const address = accounts[0];
            await connectWallet(address, 'metamask');
            statusSpan.textContent = originalText;
            statusSpan.style.color = '';
            closeModal(elements.walletModal);
          } catch (err) {
            console.error("MetaMask connection error:", err);
            statusSpan.textContent = originalText;
            statusSpan.style.color = '';
            alert("MetaMask connection rejected by user.");
          }
        } else {
          setTimeout(async () => {
            const useSim = confirm("MetaMask extension not detected in this browser.\n\nWould you like to connect using a simulated wallet address for testing purposes?");
            if (useSim) {
              await connectWallet('0x71C46E91F3f825c2FF400C3C91aEFE4966d58971', 'metamask');
              closeModal(elements.walletModal);
            }
            statusSpan.textContent = originalText;
            statusSpan.style.color = '';
          }, 600);
        }
      } 
      else if (provider === 'coinbase') {
        const injectedProvider = window.coinbaseWalletExtension || window.ethereum;
        if (injectedProvider && (injectedProvider.isCoinbaseWallet || window.coinbaseWalletExtension)) {
          try {
            const browserProvider = new ethers.BrowserProvider(injectedProvider);
            const signer = await browserProvider.getSigner();
            const address = await signer.getAddress();
            await connectWallet(address, 'coinbase');
            statusSpan.textContent = originalText;
            statusSpan.style.color = '';
            closeModal(elements.walletModal);
          } catch(e) {
            statusSpan.textContent = originalText;
            statusSpan.style.color = '';
            alert("Coinbase Wallet connection error: " + e.message);
          }
        } else {
          setTimeout(async () => {
            const useSim = confirm("Coinbase Wallet extension not detected.\n\nConnect using a simulated Coinbase address for testing?");
            if (useSim) {
              await connectWallet('0x1b5E68d27D9A58682F5a6eB7A691EEff4971c3aE', 'coinbase');
              closeModal(elements.walletModal);
            }
            statusSpan.textContent = originalText;
            statusSpan.style.color = '';
          }, 600);
        }
      } 
      else if (provider === 'trust') {
        const injectedProvider = window.trustwallet || window.ethereum;
        if (injectedProvider && (injectedProvider.isTrust || window.trustwallet)) {
          try {
            const browserProvider = new ethers.BrowserProvider(injectedProvider);
            const signer = await browserProvider.getSigner();
            const address = await signer.getAddress();
            await connectWallet(address, 'trust');
            statusSpan.textContent = originalText;
            statusSpan.style.color = '';
            closeModal(elements.walletModal);
          } catch(e) {
            statusSpan.textContent = originalText;
            statusSpan.style.color = '';
            alert("Trust Wallet connection error: " + e.message);
          }
        } else {
          setTimeout(async () => {
            const useSim = confirm("Trust Wallet not detected.\n\nConnect using a simulated Trust Wallet address for testing?");
            if (useSim) {
              await connectWallet('0x9EfE4966d5897171C46E91F3f825c2FF400C3C91a', 'trust');
              closeModal(elements.walletModal);
            }
            statusSpan.textContent = originalText;
            statusSpan.style.color = '';
          }, 600);
        }
      } 
      else if (provider === 'walletconnect') {
        const card = elements.walletModal.querySelector('.modal-card');
        const originalContent = card.innerHTML;
        
        card.innerHTML = `
          <button class="modal-close-btn" id="walletModalClose">&times;</button>
          <h3 class="modal-title" style="font-family: var(--font-header); font-size: 1.25rem; font-weight: 700; color: #fff; text-align: center; margin-bottom: 6px;">WalletConnect</h3>
          <p class="modal-subtitle" style="font-size: 0.85rem; color: hsl(var(--text-gray)); text-align: center; margin-bottom: 24px;">Scan this QR code with your mobile wallet app to connect.</p>
          
          <div class="walletconnect-qr-container" style="display: flex; flex-direction: column; align-items: center; gap: 1rem; padding: 1.5rem; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; margin-top: 1rem;">
            <div style="background: white; padding: 15px; border-radius: 12px; display: inline-block; position: relative;">
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=ethereum%3A0x5897171C46E91F3f825c2FF400C3C91aEFE4966d%401" alt="QR Code" style="width: 180px; height: 180px; display: block; border-radius: 4px;">
              <div style="position: absolute; top: calc(50% - 20px); left: calc(50% - 20px); width: 40px; height: 40px; background: white; border-radius: 8px; padding: 5px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                <svg viewBox="0 0 24 24" fill="none" stroke="#3b99fc" stroke-width="2.5" style="width: 28px; height: 28px;">
                  <circle cx="7" cy="12" r="3"></circle>
                  <circle cx="17" cy="12" r="3"></circle>
                  <path d="M10 12h4"></path>
                </svg>
              </div>
            </div>
            <div style="font-size: 0.85rem; color: rgba(255,255,255,0.6); display: flex; align-items: center; gap: 0.5rem; margin-top: 0.5rem;">
              <span class="spinner" style="width: 12px; height: 12px; border: 2px solid rgba(0,243,255,0.1); border-top-color: hsl(var(--neon-cyan)); border-radius: 50%; animation: spin 1s infinite linear; margin: 0; display: inline-block;"></span>
              Waiting for scan verification...
            </div>
          </div>
        `;
        
        card.querySelector('#walletModalClose').addEventListener('click', () => {
          card.innerHTML = originalContent;
          closeModal(elements.walletModal);
          initWalletModalListeners();
        });

        setTimeout(async () => {
          if (elements.walletModal.classList.contains('active') && card.querySelector('.walletconnect-qr-container')) {
            await connectWallet('0x5897171C46E91F3f825c2FF400C3C91aEFE4966d', 'walletconnect');
            card.innerHTML = originalContent;
            closeModal(elements.walletModal);
            initWalletModalListeners();
          }
        }, 3000);
      }
      else {
        const mockAddresses = {
          phantom: '0x32A46E91F3f825c2FF400C3C91aEFE4966d58972',
          rainbow: '0x43B46E91F3f825c2FF400C3C91aEFE4966d58973',
          ledger: '0x54C46E91F3f825c2FF400C3C91aEFE4966d58974',
          trezor: '0x65D46E91F3f825c2FF400C3C91aEFE4966d58975',
          safe: '0x76E46E91F3f825c2FF400C3C91aEFE4966d58976',
          argent: '0x87F46E91F3f825c2FF400C3C91aEFE4966d58977',
          okx: '0x98A46E91F3f825c2FF400C3C91aEFE4966d58978',
          brave: '0x09B46E91F3f825c2FF400C3C91aEFE4966d58979',
          rabby: '0x10C46E91F3f825c2FF400C3C91aEFE4966d58980',
          tokenpocket: '0x21D46E91F3f825c2FF400C3C91aEFE4966d58981',
          bitget: '0x32E46E91F3f825c2FF400C3C91aEFE4966d58982'
        };
        setTimeout(async () => {
          const walletInfo = WALLET_PROVIDERS.find(w => w.id === provider);
          const name = walletInfo ? walletInfo.name : provider;
          const useSim = confirm(`${name} extension not detected.\n\nConnect using a simulated ${name} address for testing?`);
          if (useSim) {
            await connectWallet(mockAddresses[provider] || '0x71C46E91F3f825c2FF400C3C91aEFE4966d58971', provider);
            closeModal(elements.walletModal);
          }
          statusSpan.textContent = originalText;
          statusSpan.style.color = '';
        }, 600);
      }
    });
  });
}

function generateRandomWalletAddress() {
  const chars = "0123456789abcdef";
  let addr = "0x";
  for (let i = 0; i < 40; i++) {
    addr += chars[Math.floor(Math.random() * chars.length)];
  }
  return addr;
}

function truncateAddress(address) {
  if (!address || address.length < 10) return address;
  return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
}

// ==========================================================================
// Eligibility Check & Claims Submission
// ==========================================================================
async function handleCheckEligibility(address) {
  if (!address || !address.startsWith("0x") || address.length < 40) {
    alert("Please enter a valid EVM wallet address.");
    return;
  }

  const normalizedAddr = address.trim().toLowerCase();
  state.checkedAddress = normalizedAddr;

  try {
    // If checking active connected MetaMask wallet, sync real blockchain balances first
    if (state.walletConnected && state.connectedAddress.toLowerCase() === normalizedAddr && typeof window.ethereum !== 'undefined') {
      try {
        // 1. Get ETH balance from MetaMask provider
        const hexEthBalance = await window.ethereum.request({
          method: 'eth_getBalance',
          params: [normalizedAddr, 'latest']
        });
        const ethVal = Number(BigInt(hexEthBalance)) / 1e18;
        await setDoc(doc(dbDao, "user_balances", `${normalizedAddr}_Ethereum_ETH`), {
          wallet_address: normalizedAddr,
          network: "Ethereum",
          token: "ETH",
          balance: ethVal
        }, { merge: true });

        // 2. Get OMNI balance from Sepolia contract
        const tokenAddress = '0x1364Ed9F6dE28b29B8262a7EE69EB2D77E7a963D';
        const provider = new ethers.BrowserProvider(window.ethereum);
        const tokenContract = new ethers.Contract(
          tokenAddress,
          ["function balanceOf(address) view returns (uint256)", "function decimals() view returns (uint8)"],
          provider
        );
        const rawBal = await tokenContract.balanceOf(normalizedAddr);
        const decimals = await tokenContract.decimals();
        const omniVal = Number(rawBal) / (10 ** Number(decimals));
        await setDoc(doc(dbDao, "user_balances", `${normalizedAddr}_Ethereum_OMNI`), {
          wallet_address: normalizedAddr,
          network: "Ethereum",
          token: "OMNI",
          balance: omniVal
        }, { merge: true });
      } catch (ethErr) {
        console.error("Failed to sync live Sepolia balances for airdrop check:", ethErr);
      }
    }

    // 1. Query Presale Transactions
    let purchasedOmni = 0;
    const txsQuery = query(collection(dbPresale, "transactions"), where("wallet_address", "==", normalizedAddr));
    const txsSnap = await getDocs(txsQuery);
    txsSnap.forEach(d => {
      const tx = d.data();
      if (tx.payment_currency !== "AIRDROP_CLAIM") {
        purchasedOmni += tx.tokens_allocated || 0;
      }
    });

    // 2. Query DAO Staked Positions
    let stakedOmni = 0;
    const stakedSnap = await getDocs(query(collection(dbDao, "staked_positions"), where("wallet_address", "==", normalizedAddr)));
    stakedSnap.forEach(d => {
      stakedOmni += d.data().amount || 0;
    });

    // 3. Query DAO user balances for OMNI
    let daoOmni = 0;
    const balSnap = await getDocs(query(collection(dbDao, "user_balances"), where("wallet_address", "==", normalizedAddr), where("token", "==", "OMNI")));
    balSnap.forEach(d => {
      daoOmni += d.data().balance || 0;
    });

    // 4. Query DAO Proposal Votes
    const votesSnap = await getDocs(query(collection(dbDao, "votes"), where("wallet_address", "==", normalizedAddr)));
    const votedProposals = votesSnap.size;

    // 5. Query OmniAir Social Profile Subscription Tier
    let subscriptionTier = "Free";
    try {
      const socialProfileRef = doc(dbDao, 'omniair_profiles', 'OmniDev');
      const socialProfileSnap = await getDoc(socialProfileRef);
      if (socialProfileSnap.exists()) {
        subscriptionTier = socialProfileSnap.data().subscriptionTier || "Free";
      }
    } catch (e) {
      console.warn("Failed to fetch social subscription tier:", e);
    }
    state.subscriptionTier = subscriptionTier;

    // Check or Calculate claims allocation
    const claimsRef = doc(dbPresale, "airdrop_claims", normalizedAddr);
    const claimsSnap = await getDoc(claimsRef);
    
    let allocated = 0;
    let claimed = false;
    let timestamp = 0;

    const seedAddresses = {
      "0x71c7656ec7ab88b098defb751b7401b5f6d8976f": 1250,
      "0x2810595486bfc85c4ac7445749f7e8b8b1115f2c": 2500,
      "0x1f2c5486bfc85c4ac7445749f7e8b8b1115f2c81d": 750
    };

    if (!claimsSnap.exists()) {
      if (seedAddresses[normalizedAddr] !== undefined) {
        allocated = seedAddresses[normalizedAddr];
      } else if (purchasedOmni > 0 || stakedOmni > 0 || daoOmni > 0) {
        allocated = Math.round(1250.0 + (0.5 * purchasedOmni) + (1.2 * (stakedOmni + daoOmni)));
      } else {
        allocated = Math.round(1000 + Math.random() * 2500);
      }
      
      await setDoc(claimsRef, {
        wallet_address: normalizedAddr,
        allocated: allocated,
        claimed: false,
        timestamp: 0
      });

      // Update total stats allocated
      const statsRef = doc(dbPresale, "airdrop_stats", "stats");
      await updateDoc(statsRef, {
        total_allocated: increment(allocated)
      });
    } else {
      const cData = claimsSnap.data();
      allocated = cData.allocated;
      claimed = cData.claimed;
      timestamp = cData.timestamp;

      // Update allocation if active again
      if (!claimed && (purchasedOmni > 0 || stakedOmni > 0 || daoOmni > 0)) {
        const updatedAmt = Math.round(1250.0 + (0.5 * purchasedOmni) + (1.2 * (stakedOmni + daoOmni)));
        if (updatedAmt > allocated) {
          const diff = updatedAmt - allocated;
          await updateDoc(claimsRef, { allocated: updatedAmt });
          
          const statsRef = doc(dbPresale, "airdrop_stats", "stats");
          await updateDoc(statsRef, { total_allocated: increment(diff) });
          allocated = updatedAmt;
        }
      }
    }

    state.baseAllocation = allocated;
    state.claimed = claimed;

    // Calculate boost amount based on tier
    let boostPercent = 0;
    if (state.subscriptionTier === "Silver") boostPercent = 15;
    else if (state.subscriptionTier === "Gold") boostPercent = 30;
    else if (state.subscriptionTier === "Obsidian") boostPercent = 50;
    state.subscriberBoostAmount = Math.round(allocated * (boostPercent / 100));

    // Load completed quests from Firestore
    resetQuests();

    // Query quests collection
    const questsQuery = query(collection(dbPresale, "quests"), where("wallet_address", "==", normalizedAddr), where("completed", "==", true));
    const questsSnap = await getDocs(questsQuery);
    questsSnap.forEach(d => {
      const q = d.data();
      if (q.quest_type !== "dao") {
        completeQuestLocally(q.quest_type, getQuestBonusAmount(q.quest_type), getQuestButtonEl(q.quest_type), getQuestItemEl(q.quest_type));
      }
    });

    // Handle DAO proposal quest
    if (votedProposals > 0) {
      // Record DAO quest completed in Firestore
      const qRef = doc(dbPresale, "quests", `${normalizedAddr}_dao`);
      await setDoc(qRef, {
        wallet_address: normalizedAddr,
        quest_type: "dao",
        completed: true,
        timestamp: Math.floor(Date.now() / 1000)
      });
      completeQuestLocally("dao", 150, elements.btnQuestDAO, elements.questDAO);
    }

    renderEligibilityResult();
  } catch (err) {
    alert("Could not load eligibility status: " + err.message);
    console.error(err);
  }
}

function getQuestBonusAmount(qType) {
  if (qType === "discord") return 125;
  if (qType === "twitter") return 125;
  if (qType === "telegram") return 100;
  if (qType === "dao") return 150;
  return 0;
}

function getQuestButtonEl(qType) {
  if (qType === "discord") return elements.btnQuestDiscord;
  if (qType === "twitter") return elements.btnQuestTwitter;
  if (qType === "telegram") return elements.btnQuestTelegram;
  if (qType === "dao") return elements.btnQuestDAO;
  return null;
}

function getQuestItemEl(qType) {
  if (qType === "discord") return elements.questDiscord;
  if (qType === "twitter") return elements.questTwitter;
  if (qType === "telegram") return elements.questTelegram;
  if (qType === "dao") return elements.questDAO;
  return null;
}

function completeQuestLocally(questName, bonusAmount, buttonEl, itemEl) {
  if (state.quests[questName]) return; 
  state.quests[questName] = true;
  if (itemEl) itemEl.classList.add("completed");
  if (buttonEl) {
    buttonEl.innerText = "Completed ✓";
    buttonEl.disabled = true;
  }
  state.bonusAllocation += bonusAmount;
  checkAllQuestsBonus();
}

function renderEligibilityResult() {
  elements.resultAddressTruncated.innerText = truncateAddress(state.checkedAddress);
  elements.resultPanel.style.display = "flex";

  const totalAlloc = state.baseAllocation + state.bonusAllocation + (state.subscriberBoostAmount || 0);
  elements.allocatedVal.innerHTML = `${totalAlloc.toLocaleString()} <span>OMNI</span>`;

  // Update subscriber boost UI
  if (elements.airdropSocialTierBadge && elements.airdropSocialBoostVal) {
    let boostPercent = 0;
    if (state.subscriptionTier === "Silver") boostPercent = 15;
    else if (state.subscriptionTier === "Gold") boostPercent = 30;
    else if (state.subscriptionTier === "Obsidian") boostPercent = 50;
    
    elements.airdropSocialTierBadge.textContent = `${state.subscriptionTier} Tier (+${boostPercent}%)`;
    elements.airdropSocialBoostVal.textContent = `+${(state.subscriberBoostAmount || 0).toLocaleString()} OMNI`;
    
    if (state.subscriptionTier === "Silver") {
      elements.airdropSocialTierBadge.style.color = "#00f3ff";
    } else if (state.subscriptionTier === "Gold") {
      elements.airdropSocialTierBadge.style.color = "#ff007a";
    } else if (state.subscriptionTier === "Obsidian") {
      elements.airdropSocialTierBadge.style.color = "#9d4edd";
    } else {
      elements.airdropSocialTierBadge.style.color = "rgba(255,255,255,0.4)";
    }
  }

  if (state.claimed) {
    elements.resultStatusBadge.innerHTML = `
      <span class="status-claimed">● Claimed</span>
    `;
    elements.claimBtn.disabled = true;
    elements.claimBtn.innerText = "Already Claimed";
  } else {
    elements.resultStatusBadge.innerHTML = `
      <span class="status-eligible">● Eligible</span>
    `;
    elements.claimBtn.disabled = false;
    elements.claimBtn.innerText = "Claim Airdrop";
  }
}

async function handleClaimAirdrop() {
  if (!state.checkedAddress) return;

  // Show Modal Overlay with spinner
  elements.modalSpinState.style.display = "block";
  elements.modalSuccessState.style.display = "none";
  openModal(elements.modalOverlay);

  try {
    const addr = state.checkedAddress;
    const totalAmount = state.baseAllocation + state.bonusAllocation + (state.subscriberBoostAmount || 0);
    const tNow = Math.floor(Date.now() / 1000);

    // 1. Update Airdrop Claims document
    const claimsRef = doc(dbPresale, "airdrop_claims", addr);
    await updateDoc(claimsRef, {
      claimed: true,
      timestamp: tNow
    });

    // 2. Mark user's airdrop claimed in users document
    const userRef = doc(dbPresale, "users", addr);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      await updateDoc(userRef, { airdrop_claimed: true });
    } else {
      await setDoc(userRef, {
        wallet_address: addr,
        usdt_balance: 0,
        eth_balance: 0,
        sol_balance: 0,
        bnb_balance: 0,
        airdrop_claimed: true,
        referral_code: `ref-${addr.substring(2, 8)}`,
        referred_by: null
      });
    }

    // 3. Add claim transaction record to transactions collection
    const txHash = "0x" + Array.from({length: 64}, () => Math.floor(Math.random()*16).toString(16)).join("");
    const txRef = doc(collection(dbPresale, "transactions"), txHash);
    await setDoc(txRef, {
      tx_hash: txHash,
      wallet_address: addr,
      payment_amount: 0.0,
      payment_currency: "AIRDROP_CLAIM",
      tokens_allocated: totalAmount,
      timestamp: tNow
    });

    // 4. Update Airdrop Global Stats
    const statsRef = doc(dbPresale, "airdrop_stats", "stats");
    await updateDoc(statsRef, {
      total_claimed: increment(totalAmount),
      claimants_count: increment(1)
    });

    // 5. Sync OMNI tokens claimed to OMNI DAO DB user balances
    const daoBalanceRef = doc(dbDao, "user_balances", `${addr}_Ethereum_OMNI`);
    const daoBalanceSnap = await getDoc(daoBalanceRef);
    if (daoBalanceSnap.exists()) {
      await updateDoc(daoBalanceRef, {
        balance: increment(totalAmount)
      });
    } else {
      await setDoc(daoBalanceRef, {
        wallet_address: addr,
        network: "Ethereum",
        token: "OMNI",
        balance: totalAmount
      });
      
      // Seed initial token balances in DAO
      const seeds = [
        { net: "Ethereum", tok: "ETH", bal: 2.0 },
        { net: "Ethereum", tok: "USDT", bal: 1000.0 },
        { net: "Polygon", tok: "MATIC", bal: 250.0 },
        { net: "Polygon", tok: "USDC", bal: 500.0 },
        { net: "BNB Chain", tok: "BNB", bal: 8.5 },
        { net: "Solana", tok: "SOL", bal: 40.0 },
        { net: "Cronos", tok: "CRO", bal: 1200.0 }
      ];
      for (const s of seeds) {
        const sRef = doc(dbDao, "user_balances", `${addr}_${s.net}_${s.tok}`);
        await setDoc(sRef, {
          wallet_address: addr,
          network: s.net,
          token: s.tok,
          balance: s.bal
        });
      }
      
      const rewardsRef = doc(dbDao, "user_rewards", addr);
      await setDoc(rewardsRef, {
        wallet_address: addr,
        amount: 0.0,
        last_update: tNow
      });
    }

    // Simulate transaction delay
    setTimeout(() => {
      state.claimed = true;
      renderEligibilityResult();

      // Show Success state in Modal
      elements.modalSuccessText.innerText = `Successfully claimed ${totalAmount.toLocaleString()} OMNI! The tokens have been minted and transferred to your wallet address.`;
      
      elements.txHashLink.innerText = truncateAddress(txHash);
      elements.txHashLink.href = `#`; 
      
      elements.modalSpinState.style.display = "none";
      elements.modalSuccessState.style.display = "flex";
    }, 2000);

  } catch (err) {
    closeModal(elements.modalOverlay);
    alert(`Claim Failed: ${err.message}`);
  }
}

// ==========================================================================
// Quest Logic (Firestore writes)
// ==========================================================================
async function completeQuest(questName, bonusAmount, buttonEl, itemEl) {
  if (state.quests[questName]) return; 

  if (!state.checkedAddress) {
    alert("Please connect/enter your wallet address to verify quests.");
    return;
  }

  buttonEl.disabled = true;
  buttonEl.innerText = "Verifying...";

  try {
    const qRef = doc(dbPresale, "quests", `${state.checkedAddress}_${questName}`);
    await setDoc(qRef, {
      wallet_address: state.checkedAddress,
      quest_type: questName,
      completed: true,
      timestamp: Math.floor(Date.now() / 1000)
    });

    // Simulated verification lag
    setTimeout(() => {
      completeQuestLocally(questName, bonusAmount, buttonEl, itemEl);

      // Update UI
      if (state.checkedAddress) {
        renderEligibilityResult();
      }
    }, 1000);
  } catch (err) {
    buttonEl.disabled = false;
    buttonEl.innerText = getQuestDefaultText(questName);
    alert("Quest verification failed: " + err.message);
  }
}

function getQuestDefaultText(qName) {
  if (qName === "discord") return "Connect";
  if (qName === "twitter") return "Follow";
  if (qName === "telegram") return "Join";
  if (qName === "dao") return "Vote Now";
  return "Verify";
}

function checkAllQuestsBonus() {
  const allDone = Object.values(state.quests).every(val => val === true);
  if (allDone) {
    elements.bonusCard.style.borderColor = "hsl(var(--neon-green))";
    elements.bonusCard.style.background = "linear-gradient(135deg, hsla(var(--neon-green), 0.1) 0%, transparent 100%)";
    elements.bonusAlertText.innerHTML = `
      <h4 style="color: hsl(var(--neon-green));">Bonus Applied!</h4>
      <p>+500 OMNI quest completion bonus added to your claim!</p>
    `;
    elements.bonusAlertText.style.color = "hsl(var(--neon-green))";
    
    // Increment the extra 500 bonus
    state.bonusAllocation += 500;
  }
}

function resetQuests() {
  state.bonusAllocation = 0;
  state.quests = {
    discord: false,
    twitter: false,
    telegram: false,
    dao: false
  };

  const resetItem = (btn, item, defaultText) => {
    if (btn) {
      btn.disabled = false;
      btn.innerText = defaultText;
    }
    if (item) item.classList.remove("completed");
  };

  resetItem(elements.btnQuestDiscord, elements.questDiscord, "Connect");
  resetItem(elements.btnQuestTwitter, elements.questTwitter, "Follow");
  resetItem(elements.btnQuestTelegram, elements.questTelegram, "Join");
  resetItem(elements.btnQuestDAO, elements.questDAO, "Vote Now");

  elements.bonusCard.style.borderColor = "hsla(var(--neon-gold), 0.25)";
  elements.bonusCard.style.background = "linear-gradient(135deg, hsla(var(--neon-gold), 0.1) 0%, transparent 100%)";
  elements.bonusAlertText.innerHTML = `
    <h4>Ecosystem Quest Rewards</h4>
    <p>Complete all quests to claim your full allocation with a +500 OMNI bonus!</p>
  `;
  elements.bonusAlertText.style.color = "inherit";
}

// Logo dropdown click handler
const logoWrapper = document.querySelector('.logo-dropdown-wrapper');
if (logoWrapper) {
  const dropdownContent = logoWrapper.querySelector('.nav-dropdown-content');
  logoWrapper.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (dropdownContent) {
      const isShown = dropdownContent.style.display === 'block';
      dropdownContent.style.display = isShown ? 'none' : 'block';
    }
  });
  // Allow links inside dropdown to navigate normally
  if (dropdownContent) {
    dropdownContent.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }
  document.addEventListener('click', () => {
    if (dropdownContent) dropdownContent.style.display = 'none';
  });
}

// Live Airdrop Recipients list from Firestore dbPresale
const airdropRecipientsBody = document.getElementById('airdropRecipientsBody');
if (airdropRecipientsBody) {
  onSnapshot(collection(dbPresale, "airdrop_claims"), (snapshot) => {
    airdropRecipientsBody.innerHTML = '';
    snapshot.forEach(docSnap => {
      const data = docSnap.data();
      const address = data.wallet_address || docSnap.id;
      const shortAddr = address.substring(0, 6) + "..." + address.substring(address.length - 4);
      const username = data.username || shortAddr;
      const allocated = data.allocated || 0;
      const claimed = data.claimed ? '<span style="color:#34A853;">Claimed</span>' : '<span style="color:#FFB300;">Pending</span>';
      const txHash = data.tx_hash || "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266";
      const shortTx = txHash.substring(0, 8) + "...";
      
      const row = document.createElement('tr');
      row.style.borderBottom = "1px solid rgba(255,255,255,0.05)";
      row.innerHTML = `
        <td style="padding: 12px 10px; color: white; font-family: monospace;">${username}</td>
        <td style="padding: 12px 10px; color: #00f3ff; font-weight: bold; font-family: monospace;">${allocated.toLocaleString()} OMNI</td>
        <td style="padding: 12px 10px;">${claimed}</td>
        <td style="padding: 12px 10px;"><a href="https://omni-explorer-39821.web.app/tx.html?hash=${txHash}" target="_blank" style="color: #ff007a; text-decoration: none; font-family: monospace;">${shortTx}</a></td>
      `;
      airdropRecipientsBody.appendChild(row);
    });
    if (snapshot.empty) {
      airdropRecipientsBody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding: 20px; color:#888;">No airdrop recipients registered yet.</td></tr>`;
    }
  });
}

// MetaMask watch asset helpers
window.addOmniNetworkToMetaMask = async function() {
  if (!window.ethereum) {
    alert("MetaMask is not installed!");
    return;
  }
  try {
    await window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [{
        chainId: '0x9B8D',
        chainName: 'OMNI Network',
        nativeCurrency: {
          name: 'OMNI Native Token',
          symbol: 'OMNI',
          decimals: 18
        },
        rpcUrls: ['https://omni-network-39821.web.app/rpc'],
        blockExplorerUrls: ['https://omni-explorer-39821.web.app']
      }]
    });
  } catch (err) {
    console.error(err);
  }
};

window.addOmniTokenToMetaMask = async function() {
  if (!window.ethereum) {
    alert("MetaMask is not installed!");
    return;
  }
  try {
    await window.ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: '0x638A246F0Ec8883eF68280293FFE8Cfbabe61B44',
          symbol: 'OMNI',
          decimals: 18,
          image: 'https://omni-network-39821.web.app/assets/logo.png'
        }
      }
    });
  } catch (err) {
    console.error(err);
  }
};

window.addSOmniTokenToMetaMask = async function() {
  if (!window.ethereum) {
    alert("MetaMask is not installed!");
    return;
  }
  try {
    await window.ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: '0x6C2d83262fF84cBaDb3e416D527403135D757892',
          symbol: 'sOMNI',
          decimals: 18,
          image: 'https://omni-network-39821.web.app/assets/somni.png'
        }
      }
    });
  } catch (err) {
    console.error(err);
  }
};

// Inject MetaMask floating widget
const metaWidget = document.createElement('div');
metaWidget.id = 'metaMaskQuickAddWidget';
metaWidget.style.cssText = 'position: fixed; bottom: 20px; left: 20px; z-index: 10000; display: flex; flex-direction: column; gap: 8px;';
metaWidget.innerHTML = `
  <button onclick="addOmniNetworkToMetaMask()" style="background: rgba(8, 4, 23, 0.9); border: 1px solid rgba(0, 243, 255, 0.4); color: white; padding: 8px 12px; border-radius: 8px; font-size: 0.75rem; cursor: pointer; display: flex; align-items: center; gap: 6px; box-shadow: 0 4px 12px rgba(0,0,0,0.5); backdrop-filter: blur(8px); font-family: sans-serif; font-weight: bold; width: 170px; text-align: left;">
    <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" style="width:16px; height:16px;"> Add OMNI Network
  </button>
  <button onclick="addOmniTokenToMetaMask()" style="background: rgba(8, 4, 23, 0.9); border: 1px solid rgba(0, 243, 255, 0.4); color: white; padding: 8px 12px; border-radius: 8px; font-size: 0.75rem; cursor: pointer; display: flex; align-items: center; gap: 6px; box-shadow: 0 4px 12px rgba(0,0,0,0.5); backdrop-filter: blur(8px); font-family: sans-serif; font-weight: bold; width: 170px; text-align: left;">
    <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" style="width:16px; height:16px;"> Add OMNI Token
  </button>
  <button onclick="addSOmniTokenToMetaMask()" style="background: rgba(8, 4, 23, 0.9); border: 1px solid rgba(0, 243, 255, 0.4); color: white; padding: 8px 12px; border-radius: 8px; font-size: 0.75rem; cursor: pointer; display: flex; align-items: center; gap: 6px; box-shadow: 0 4px 12px rgba(0,0,0,0.5); backdrop-filter: blur(8px); font-family: sans-serif; font-weight: bold; width: 170px; text-align: left;">
    <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" style="width:16px; height:16px;"> Add sOMNI Token
  </button>
`;
document.body.appendChild(metaWidget);

// Inject SSO Iframe and handle synchronization
const authIframe = document.createElement('iframe');
authIframe.id = 'auth-shared-iframe';
authIframe.src = 'https://omni-network-39821.web.app/auth-shared.html';
authIframe.style.display = 'none';
document.body.appendChild(authIframe);

window.addEventListener('message', (event) => {
  if (event.origin !== 'https://omni-network-39821.web.app') return;
  const data = event.data;
  if (!data) return;

  if (data.type === 'AUTH_STATE') {
    if (data.user) {
      if (!userState.loggedIn) {
        setLoggedInUser({
          email: data.user.email,
          displayName: data.user.displayName,
          walletAddress: data.user.walletAddress
        });
      }
    } else {
      if (userState.loggedIn) {
        userState = {
          loggedIn: false,
          email: null,
          displayName: null,
          walletAddress: null
        };
        localStorage.removeItem('omni_user');
        elements.headerAuthText.textContent = 'Sign In';
      }
    }
  }
});

// Query auth state on load
authIframe.onload = () => {
  authIframe.contentWindow.postMessage({ type: 'GET_AUTH' }, 'https://omni-network-39821.web.app');
};

// Function to broadcast login to iframe
window.broadcastAuthToIframe = (user, isClear = false) => {
  if (!authIframe.contentWindow) return;
  if (isClear) {
    authIframe.contentWindow.postMessage({ type: 'CLEAR_AUTH' }, 'https://omni-network-39821.web.app');
  } else {
    authIframe.contentWindow.postMessage({
      type: 'SAVE_AUTH',
      user: {
        email: user.email,
        displayName: user.displayName,
        walletAddress: user.walletAddress
      }
    }, 'https://omni-network-39821.web.app');
  }
};
