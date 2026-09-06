/**
 * ============================================================================
 * OMNI 3D DIGITAL NATURE LANDSCAPE ENGINE (omni_digital_nature_3d.js)
 * High-Performance Procedural 3D Canvas Background with Cybernetic Trees,
 * Flowing Neon River, Flocking Birds, Swimming River Koi, Fireflies & Aurora Sky
 * ============================================================================
 */

(function() {
  'use strict';

  // Prevent multiple initializations
  if (window.__OMNI_DIGITAL_NATURE_LOADED__) return;
  window.__OMNI_DIGITAL_NATURE_LOADED__ = true;

  // Environment Settings & Presets
  const THEMES = {
    aurora: {
      name: "Aurora Night",
      skyTop: "#030612",
      skyBottom: "#0a1026",
      aurora1: "rgba(0, 229, 255, 0.22)",
      aurora2: "rgba(168, 85, 247, 0.20)",
      riverBase: "#031526",
      riverGlow: "#00e5ff",
      treeFoliage: "#00e5ff",
      treeTrunk: "#0d1b2a",
      wildlifeGlow: "#00e5ff",
      deerGlow: "#38bdf8",
      petalColor: "rgba(0, 229, 255, 0.7)"
    },
    bioluminescent: {
      name: "Bio-Forest",
      skyTop: "#020f0e",
      skyBottom: "#041f1a",
      aurora1: "rgba(16, 185, 129, 0.25)",
      aurora2: "rgba(6, 182, 212, 0.22)",
      riverBase: "#02241d",
      riverGlow: "#10b981",
      treeFoliage: "#10b981",
      treeTrunk: "#062b24",
      wildlifeGlow: "#34d399",
      deerGlow: "#10b981",
      petalColor: "rgba(16, 185, 129, 0.75)"
    },
    sunset: {
      name: "Neon Sunset",
      skyTop: "#18062b",
      skyBottom: "#380d38",
      aurora1: "rgba(244, 63, 94, 0.25)",
      aurora2: "rgba(234, 179, 8, 0.20)",
      riverBase: "#2b0a2c",
      riverGlow: "#f43f5e",
      treeFoliage: "#f43f5e",
      treeTrunk: "#200624",
      wildlifeGlow: "#fbbf24",
      deerGlow: "#f43f5e",
      petalColor: "rgba(244, 63, 94, 0.75)"
    },
    dawn: {
      name: "Cyber Dawn",
      skyTop: "#061329",
      skyBottom: "#13284f",
      aurora1: "rgba(56, 189, 248, 0.25)",
      aurora2: "rgba(245, 158, 11, 0.20)",
      riverBase: "#092244",
      riverGlow: "#38bdf8",
      treeFoliage: "#38bdf8",
      treeTrunk: "#0a1c36",
      wildlifeGlow: "#f59e0b",
      deerGlow: "#38bdf8",
      petalColor: "rgba(56, 189, 248, 0.75)"
    }
  };

  let currentThemeKey = localStorage.getItem('omni_nature_theme') || 'aurora';
  let currentTheme = THEMES[currentThemeKey] || THEMES.aurora;
  let isEcoMode = false;
  let isMuted = true;
  let wildlifeDensity = 1.0;

  // DOM Canvas Setup
  let canvas, ctx;
  let width = window.innerWidth;
  let height = window.innerHeight;
  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let animationFrameId;
  let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };
  let scrollY = 0;
  let time = 0;

  // Audio Ambiance Synthesizer
  let audioCtx = null;
  let riverNoiseNode = null;
  let riverGainNode = null;

  function initAudio() {
    if (audioCtx) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();

      // Digital River White Noise Filtered
      const bufferSize = audioCtx.sampleRate * 2;
      const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = audioCtx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const bandpass = audioCtx.createBiquadFilter();
      bandpass.type = 'bandpass';
      bandpass.frequency.value = 420;
      bandpass.Q.value = 2.0;

      riverGainNode = audioCtx.createGain();
      riverGainNode.gain.value = isMuted ? 0 : 0.04;

      whiteNoise.connect(bandpass);
      bandpass.connect(riverGainNode);
      riverGainNode.connect(audioCtx.destination);
      whiteNoise.start(0);
      riverNoiseNode = whiteNoise;
    } catch(e) {}
  }

  // Wildlife & Scenery Entities
  let stars = [];
  let mountains = [];
  let trees = [];
  let birds = [];
  let fishes = [];
  let fireflies = [];
  let petals = [];
  let deer = { x: 0, y: 0, scale: 1, breath: 0 };

  // Setup Canvas Container
  function createNatureDOM() {
    canvas = document.createElement('canvas');
    canvas.id = 'omni-digital-nature-canvas';
    canvas.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: -2;
      pointer-events: none;
      display: block;
      background: ${currentTheme.skyTop};
      transition: background 0.8s ease;
    `;
    document.body.prepend(canvas);
    ctx = canvas.getContext('2d');

    // Floating Interactive Controller Widget
    const widget = document.createElement('div');
    widget.id = 'omni-nature-control-capsule';
    widget.style.cssText = `
      position: fixed;
      bottom: 24px;
      left: 24px;
      z-index: 9999;
      background: rgba(10, 16, 28, 0.75);
      backdrop-filter: blur(20px) saturate(180%);
      -webkit-backdrop-filter: blur(20px) saturate(180%);
      border: 1px solid rgba(0, 229, 255, 0.3);
      border-radius: 30px;
      padding: 6px 14px;
      display: flex;
      align-items: center;
      gap: 10px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 229, 255, 0.2);
      font-family: 'Outfit', 'Share Tech Mono', sans-serif;
      font-size: 0.78rem;
      color: #fff;
      transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
      user-select: none;
    `;

    widget.innerHTML = `
      <div style="display: flex; align-items: center; gap: 6px; cursor: pointer;" id="omniNatureToggleMenu" title="3D Digital Nature Settings">
        <span style="font-size: 1.1rem; display: inline-block; animation: natureIconFloat 3s infinite ease-in-out;">🌲</span>
        <span style="font-weight: 700; color: #00e5ff; letter-spacing: 0.5px;" id="natureActiveThemeLabel">${currentTheme.name}</span>
      </div>
      
      <div id="natureControlPanel" style="display: none; align-items: center; gap: 8px; border-left: 1px solid rgba(255,255,255,0.15); padding-left: 10px; margin-left: 4px;">
        <button id="btnThemeAurora" style="background: rgba(0,229,255,0.2); border: 1px solid #00e5ff; color: #fff; border-radius: 12px; padding: 3px 8px; font-size: 0.7rem; cursor: pointer;">Aurora</button>
        <button id="btnThemeBio" style="background: rgba(16,185,129,0.2); border: 1px solid #10b981; color: #fff; border-radius: 12px; padding: 3px 8px; font-size: 0.7rem; cursor: pointer;">Bio</button>
        <button id="btnThemeSunset" style="background: rgba(244,63,94,0.2); border: 1px solid #f43f5e; color: #fff; border-radius: 12px; padding: 3px 8px; font-size: 0.7rem; cursor: pointer;">Sunset</button>
        <button id="btnThemeDawn" style="background: rgba(245,158,11,0.2); border: 1px solid #f59e0b; color: #fff; border-radius: 12px; padding: 3px 8px; font-size: 0.7rem; cursor: pointer;">Dawn</button>
        
        <button id="btnNatureAudio" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.2); color: #fff; border-radius: 50%; width: 26px; height: 26px; display: flex; align-items: center; justify-content: center; cursor: pointer;" title="Toggle Ambient Audio">
          🔇
        </button>
      </div>
    `;

    document.body.appendChild(widget);

    // Style for floating animation
    const styleEl = document.createElement('style');
    styleEl.textContent = `
      @keyframes natureIconFloat {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-3px) rotate(4deg); }
      }
      #omni-nature-control-capsule:hover {
        border-color: rgba(0, 229, 255, 0.6);
        box-shadow: 0 12px 35px rgba(0, 229, 255, 0.35);
      }
    `;
    document.head.appendChild(styleEl);

    // Widget Event Listeners
    const toggleBtn = document.getElementById('omniNatureToggleMenu');
    const panel = document.getElementById('natureControlPanel');
    toggleBtn.addEventListener('click', () => {
      panel.style.display = panel.style.display === 'none' ? 'flex' : 'none';
    });

    document.getElementById('btnThemeAurora').addEventListener('click', () => setTheme('aurora'));
    document.getElementById('btnThemeBio').addEventListener('click', () => setTheme('bioluminescent'));
    document.getElementById('btnThemeSunset').addEventListener('click', () => setTheme('sunset'));
    document.getElementById('btnThemeDawn').addEventListener('click', () => setTheme('dawn'));

    const audioBtn = document.getElementById('btnNatureAudio');
    audioBtn.addEventListener('click', () => {
      initAudio();
      isMuted = !isMuted;
      audioBtn.textContent = isMuted ? '🔇' : '🔊';
      if (riverGainNode) {
        riverGainNode.gain.setTargetAtTime(isMuted ? 0 : 0.04, audioCtx.currentTime, 0.1);
      }
    });
  }

  function setTheme(key) {
    if (!THEMES[key]) return;
    currentThemeKey = key;
    currentTheme = THEMES[key];
    localStorage.setItem('omni_nature_theme', key);
    if (canvas) canvas.style.background = currentTheme.skyTop;
    const label = document.getElementById('natureActiveThemeLabel');
    if (label) label.textContent = currentTheme.name;
  }

  // Initialize Entities
  function initEntities() {
    stars = [];
    for (let i = 0; i < 120; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * (height * 0.65),
        radius: Math.random() * 1.5 + 0.4,
        alpha: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.03 + 0.01
      });
    }

    // 3D Mountains Layer
    mountains = [
      { points: generateMountainPoints(width, height * 0.55, 80, 7), color: 'rgba(6, 12, 28, 0.7)', parallax: 0.1 },
      { points: generateMountainPoints(width, height * 0.62, 130, 11), color: 'rgba(4, 9, 22, 0.85)', parallax: 0.25 }
    ];

    // Procedural Cyber Trees
    trees = [];
    const treeCount = 14;
    for (let i = 0; i < treeCount; i++) {
      const isLeft = Math.random() > 0.5;
      const xRange = isLeft ? Math.random() * (width * 0.32) : width - Math.random() * (width * 0.32);
      const groundY = height * 0.7 + Math.random() * (height * 0.26);
      const treeHeight = (height * 0.18 + Math.random() * (height * 0.14)) * (groundY / height);

      trees.push({
        x: xRange,
        y: groundY,
        height: treeHeight,
        branchCount: Math.floor(Math.random() * 3) + 4,
        type: Math.random() > 0.4 ? 'pine' : 'blossom',
        swayOffset: Math.random() * Math.PI * 2,
        scale: (groundY - height * 0.55) / (height * 0.45)
      });
    }
    trees.sort((a, b) => a.y - b.y);

    // Flocking Birds (Boids)
    birds = [];
    for (let i = 0; i < 8; i++) {
      birds.push({
        x: Math.random() * width,
        y: height * 0.15 + Math.random() * (height * 0.3),
        vx: Math.random() * 1.5 + 1.2,
        vy: (Math.random() - 0.5) * 0.4,
        wingPhase: Math.random() * Math.PI * 2,
        size: Math.random() * 4 + 7
      });
    }

    // River Swimming Koi Fish
    fishes = [];
    for (let i = 0; i < 6; i++) {
      fishes.push({
        t: Math.random(), // position along river (0=far, 1=near)
        offset: (Math.random() - 0.5) * 0.6, // lateral offset
        speed: Math.random() * 0.0015 + 0.001,
        tailPhase: Math.random() * Math.PI * 2,
        size: Math.random() * 5 + 8
      });
    }

    // Fireflies
    fireflies = [];
    for (let i = 0; i < 35; i++) {
      fireflies.push({
        x: Math.random() * width,
        y: height * 0.5 + Math.random() * (height * 0.45),
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        size: Math.random() * 2.2 + 1.2,
        pulse: Math.random() * Math.PI * 2
      });
    }

    // Digital Blossom Petals
    petals = [];
    for (let i = 0; i < 28; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: Math.random() * 1.2 + 0.4,
        vy: Math.random() * 0.8 + 0.5,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.05,
        size: Math.random() * 3 + 3
      });
    }

    // Riverbank Deer
    deer = {
      x: width * 0.28,
      y: height * 0.78,
      scale: 0.85,
      breath: 0
    };
  }

  function generateMountainPoints(w, baseHeight, variation, segments) {
    const pts = [{ x: 0, y: baseHeight }];
    const step = w / segments;
    for (let i = 1; i < segments; i++) {
      pts.push({
        x: i * step,
        y: baseHeight - Math.sin(i * 1.8) * variation - Math.random() * (variation * 0.4)
      });
    }
    pts.push({ x: w, y: baseHeight });
    return pts;
  }

  // Draw Dynamic Aurora Sky
  function drawAurora() {
    const horizonY = height * 0.65;
    
    // Sky Gradient
    const skyGrad = ctx.createLinearGradient(0, 0, 0, horizonY);
    skyGrad.addColorStop(0, currentTheme.skyTop);
    skyGrad.addColorStop(1, currentTheme.skyBottom);
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, width, height);

    // Stars
    ctx.fillStyle = "#fff";
    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];
      const alpha = s.alpha + Math.sin(time * s.twinkleSpeed * 50) * 0.3;
      ctx.globalAlpha = Math.max(0.1, Math.min(1, alpha));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    // Glowing Aurora Borealis Curtains
    for (let layer = 0; layer < 2; layer++) {
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, height * 0.15);

      const color = layer === 0 ? currentTheme.aurora1 : currentTheme.aurora2;
      const speed = layer === 0 ? 0.0008 : 0.0012;
      const waveFreq = layer === 0 ? 0.003 : 0.005;

      for (let x = 0; x <= width; x += 15) {
        const y = height * 0.28 +
          Math.sin(x * waveFreq + time * speed * 80) * 45 +
          Math.cos(x * 0.002 - time * speed * 50) * 30;
        ctx.lineTo(x, y);
      }

      ctx.lineTo(width, 0);
      ctx.lineTo(0, 0);
      ctx.closePath();

      ctx.fillStyle = color;
      ctx.filter = 'blur(35px)';
      ctx.fill();
      ctx.restore();
    }
  }

  // Draw 3D Distant Mountains
  function drawMountains() {
    const parallaxOffsetX = (mouse.x - width / 2) * 0.04;

    for (let m = 0; m < mountains.length; m++) {
      const mount = mountains[m];
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, height);

      for (let i = 0; i < mount.points.length; i++) {
        const p = mount.points[i];
        const px = p.x + parallaxOffsetX * (m + 1);
        const py = p.y + scrollY * 0.05;
        if (i === 0) ctx.lineTo(px, py);
        else ctx.lineTo(px, py);
      }

      ctx.lineTo(width, height);
      ctx.closePath();

      ctx.fillStyle = mount.color;
      ctx.fill();

      // Neon Wireframe Grid on Peaks
      ctx.strokeStyle = currentTheme.riverGlow;
      ctx.globalAlpha = 0.15;
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();
    }
  }

  // Draw Winding Flowing Neon Cyber River
  function drawRiver() {
    const startY = height * 0.62;
    const endY = height;
    const centerX = width * 0.5 + (mouse.x - width / 2) * 0.08;

    ctx.save();
    ctx.beginPath();

    // River Left Bank
    ctx.moveTo(centerX - 40, startY);
    ctx.bezierCurveTo(
      centerX - 140, startY + (endY - startY) * 0.35,
      centerX - 380, startY + (endY - startY) * 0.7,
      centerX - width * 0.42, endY
    );

    // River Right Bank
    ctx.lineTo(centerX + width * 0.42, endY);
    ctx.bezierCurveTo(
      centerX + 380, startY + (endY - startY) * 0.7,
      centerX + 140, startY + (endY - startY) * 0.35,
      centerX + 40, startY
    );
    ctx.closePath();

    // River Deep Water Gradient
    const riverGrad = ctx.createLinearGradient(0, startY, 0, endY);
    riverGrad.addColorStop(0, currentTheme.riverBase);
    riverGrad.addColorStop(0.5, currentTheme.riverBase);
    riverGrad.addColorStop(1, currentTheme.skyBottom);
    ctx.fillStyle = riverGrad;
    ctx.fill();

    // Flowing Neon Waves / Water Caustics
    const waveCount = 18;
    for (let w = 0; w < waveCount; w++) {
      const progress = ((time * 0.0006 + w / waveCount) % 1);
      const currentY = startY + progress * (endY - startY);
      const currentSpread = 40 + progress * (width * 0.38);
      const waveX = centerX + Math.sin(progress * 4 + time * 0.002) * 40;

      ctx.beginPath();
      ctx.moveTo(waveX - currentSpread, currentY);
      ctx.quadraticCurveTo(
        waveX, currentY + Math.sin(time * 0.003 + w) * (6 * progress),
        waveX + currentSpread, currentY
      );

      ctx.strokeStyle = currentTheme.riverGlow;
      ctx.globalAlpha = Math.sin(progress * Math.PI) * 0.35;
      ctx.lineWidth = 1.5 + progress * 2.5;
      ctx.shadowColor = currentTheme.riverGlow;
      ctx.shadowBlur = 10;
      ctx.stroke();
    }
    ctx.restore();
  }

  // Draw Bioluminescent Koi Swimming in River
  function drawFish() {
    const startY = height * 0.62;
    const endY = height;
    const centerX = width * 0.5;

    for (let i = 0; i < fishes.length; i++) {
      const f = fishes[i];
      f.t += f.speed;
      if (f.t > 1) f.t = 0;

      const currentY = startY + f.t * (endY - startY);
      const riverWidth = 40 + f.t * (width * 0.38);
      const currentX = centerX + f.offset * riverWidth + Math.sin(f.t * 4 + time * 0.002) * 40;
      const fishScale = 0.5 + f.t * 0.9;

      ctx.save();
      ctx.translate(currentX, currentY);
      ctx.rotate(-Math.PI / 2 + Math.sin(time * 0.005 + f.tailPhase) * 0.2);

      // Koi Body
      ctx.beginPath();
      ctx.ellipse(0, 0, f.size * fishScale * 1.8, f.size * fishScale * 0.6, 0, 0, Math.PI * 2);
      ctx.fillStyle = currentTheme.wildlifeGlow;
      ctx.globalAlpha = 0.65;
      ctx.shadowColor = currentTheme.wildlifeGlow;
      ctx.shadowBlur = 12;
      ctx.fill();

      // Tail Kinematics
      ctx.beginPath();
      const tailX = -f.size * fishScale * 1.5;
      const tailY = Math.sin(time * 0.008 + f.tailPhase) * (f.size * 0.8 * fishScale);
      ctx.moveTo(0, 0);
      ctx.lineTo(tailX - 6 * fishScale, tailY - 4 * fishScale);
      ctx.lineTo(tailX - 6 * fishScale, tailY + 4 * fishScale);
      ctx.closePath();
      ctx.fillStyle = currentTheme.wildlifeGlow;
      ctx.fill();

      ctx.restore();
    }
  }

  // Draw Procedural Cyber Trees with Swaying Wind Physics
  function drawTrees() {
    const wind = Math.sin(time * 0.0015) * 0.12;

    for (let i = 0; i < trees.length; i++) {
      const t = trees[i];
      const sway = Math.sin(time * 0.002 + t.swayOffset) * (0.05 + wind);

      ctx.save();
      ctx.translate(t.x, t.y);
      ctx.scale(t.scale, t.scale);

      // Tree Trunk (Low-poly digital)
      ctx.beginPath();
      ctx.moveTo(-t.height * 0.06, 0);
      ctx.lineTo(t.height * 0.06, 0);
      ctx.lineTo(t.height * 0.02 + sway * 25, -t.height);
      ctx.lineTo(-t.height * 0.02 + sway * 25, -t.height);
      ctx.closePath();
      ctx.fillStyle = currentTheme.treeTrunk;
      ctx.fill();
      ctx.strokeStyle = currentTheme.treeFoliage;
      ctx.globalAlpha = 0.25;
      ctx.lineWidth = 1;
      ctx.stroke();

      // Foliage Cones / Blossoms
      ctx.globalAlpha = 0.85;
      for (let b = 0; b < t.branchCount; b++) {
        const branchProgress = b / t.branchCount;
        const branchY = -t.height * (0.35 + branchProgress * 0.65) + sway * (b * 6);
        const branchWidth = t.height * (0.45 - branchProgress * 0.28);

        ctx.beginPath();
        if (t.type === 'pine') {
          // Low-poly Pine Tier
          ctx.moveTo(0 + sway * 15, branchY - t.height * 0.2);
          ctx.lineTo(branchWidth, branchY);
          ctx.lineTo(-branchWidth, branchY);
          ctx.closePath();
        } else {
          // Glowing Digital Blossom Orbs
          ctx.arc(sway * 15, branchY, branchWidth * 0.65, 0, Math.PI * 2);
        }

        ctx.fillStyle = currentTheme.treeFoliage;
        ctx.shadowColor = currentTheme.treeFoliage;
        ctx.shadowBlur = 10;
        ctx.fill();
      }

      ctx.restore();
    }
  }

  // Draw Flocking Holographic Birds
  function drawBirds() {
    for (let i = 0; i < birds.length; i++) {
      const b = birds[i];
      b.x += b.vx;
      b.y += b.vy + Math.sin(time * 0.002 + b.wingPhase) * 0.3;
      if (b.x > width + 40) b.x = -40;

      const wingY = Math.sin(time * 0.006 + b.wingPhase) * (b.size * 0.8);

      ctx.save();
      ctx.translate(b.x, b.y);
      ctx.beginPath();

      // Wing V-shape
      ctx.moveTo(-b.size, wingY);
      ctx.lineTo(0, 0);
      ctx.lineTo(b.size, wingY);

      ctx.strokeStyle = currentTheme.wildlifeGlow;
      ctx.lineWidth = 2;
      ctx.shadowColor = currentTheme.wildlifeGlow;
      ctx.shadowBlur = 8;
      ctx.stroke();
      ctx.restore();
    }
  }

  // Draw Floating Data Fireflies
  function drawFireflies() {
    for (let i = 0; i < fireflies.length; i++) {
      const f = fireflies[i];
      f.x += f.vx;
      f.y += f.vy;

      if (f.x < 0) f.x = width;
      if (f.x > width) f.x = 0;
      if (f.y < height * 0.45) f.y = height * 0.95;
      if (f.y > height) f.y = height * 0.5;

      const pulseAlpha = 0.3 + Math.sin(time * 0.004 + f.pulse) * 0.5;

      ctx.save();
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.size, 0, Math.PI * 2);
      ctx.fillStyle = currentTheme.wildlifeGlow;
      ctx.globalAlpha = Math.max(0.1, Math.min(0.9, pulseAlpha));
      ctx.shadowColor = currentTheme.wildlifeGlow;
      ctx.shadowBlur = 14;
      ctx.fill();
      ctx.restore();
    }
  }

  // Draw Falling Cyber Blossom Petals
  function drawPetals() {
    for (let i = 0; i < petals.length; i++) {
      const p = petals[i];
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.rotSpeed;

      if (p.x > width + 20) p.x = -20;
      if (p.y > height + 20) p.y = -20;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.beginPath();
      ctx.ellipse(0, 0, p.size, p.size * 0.5, 0, 0, Math.PI * 2);
      ctx.fillStyle = currentTheme.petalColor;
      ctx.globalAlpha = 0.6;
      ctx.fill();
      ctx.restore();
    }
  }

  // Draw Resting Cyber Deer on Riverbank
  function drawDeer() {
    deer.breath += 0.03;
    const breathY = Math.sin(deer.breath) * 1.5;

    ctx.save();
    ctx.translate(deer.x, deer.y + breathY);
    ctx.scale(deer.scale, deer.scale);

    ctx.fillStyle = currentTheme.treeTrunk;
    ctx.strokeStyle = currentTheme.deerGlow;
    ctx.lineWidth = 1.5;
    ctx.shadowColor = currentTheme.deerGlow;
    ctx.shadowBlur = 8;

    // Body Polygon
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(28, -6);
    ctx.lineTo(34, 10);
    ctx.lineTo(-6, 12);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Neck & Head
    ctx.beginPath();
    ctx.moveTo(24, -6);
    ctx.lineTo(32, -26);
    ctx.lineTo(40, -22);
    ctx.lineTo(30, -2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Glowing Antlers
    ctx.beginPath();
    ctx.moveTo(33, -26);
    ctx.lineTo(36, -38);
    ctx.lineTo(42, -44);
    ctx.moveTo(36, -38);
    ctx.lineTo(30, -44);
    ctx.moveTo(34, -32);
    ctx.lineTo(42, -34);
    ctx.strokeStyle = currentTheme.deerGlow;
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.restore();
  }

  // Main Render Loop (60 FPS with visibility throttling)
  function render(timestamp) {
    time = timestamp;

    // Smooth Mouse Interpolation
    mouse.x += (mouse.targetX - mouse.x) * 0.05;
    mouse.y += (mouse.targetY - mouse.y) * 0.05;

    ctx.clearRect(0, 0, width, height);

    drawAurora();
    drawMountains();
    drawRiver();
    drawFish();
    drawTrees();
    drawDeer();
    drawBirds();
    drawFireflies();
    drawPetals();

    animationFrameId = requestAnimationFrame(render);
  }

  // Window Resize & Mouse Listeners
  function handleResize() {
    width = window.innerWidth;
    height = window.innerHeight;
    dpr = Math.min(window.devicePixelRatio || 1, 2);

    if (canvas) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    }
    initEntities();
  }

  window.addEventListener('resize', handleResize);
  window.addEventListener('mousemove', (e) => {
    mouse.targetX = e.clientX;
    mouse.targetY = e.clientY;
  });
  window.addEventListener('scroll', () => {
    scrollY = window.scrollY || window.pageYOffset;
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(animationFrameId);
    } else {
      animationFrameId = requestAnimationFrame(render);
    }
  });

  // Auto-init on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      createNatureDOM();
      handleResize();
      animationFrameId = requestAnimationFrame(render);
    });
  } else {
    createNatureDOM();
    handleResize();
    animationFrameId = requestAnimationFrame(render);
  }

})();
