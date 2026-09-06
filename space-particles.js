// ==========================================================================
// Cosmic Particle Starfield - Interactive 3D Space Fly-Through Backdrop
// ==========================================================================

(function() {
  const canvas = document.createElement("canvas");
  canvas.id = "cosmicStarfieldCanvas";
  
  // Style the canvas to sit behind everything
  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.width = "100vw";
  canvas.style.height = "100vh";
  canvas.style.zIndex = "-1"; // Sits behind content, above default background gradient
  canvas.style.pointerEvents = "none";
  canvas.style.display = "block";
  document.body.prepend(canvas);

  const ctx = canvas.getContext("2d");
  let width = window.innerWidth;
  let height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;

  // Projection center variables (target and current for smooth interpolation)
  let targetCenterX = width / 2;
  let targetCenterY = height / 2;
  let centerX = width / 2;
  let centerY = height / 2;

  // Starfield parameters
  const numStars = 180;
  const maxDepth = 1000;
  const fov = 260;
  const stars = [];

  // Speeds: base speed, current speed, and streak length factors
  const baseSpeed = 0.6;
  let currentSpeed = baseSpeed;
  let targetSpeed = baseSpeed;

  // OMNI HSL Hues for cosmic color palette consistency
  const colors = [
    "185, 100%, 75%",  // Neon Cyan
    "329, 100%, 75%",  // Neon Pink
    "275, 100%, 75%",  // Neon Purple
    "215, 100%, 75%",  // Neon Blue
    "40, 100%, 75%"    // Neon Gold
  ];

  // Initialize stars
  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: (Math.random() - 0.5) * width * 2,
      y: (Math.random() - 0.5) * height * 2,
      z: Math.random() * maxDepth,
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  // Handle Resize
  window.addEventListener("resize", () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    targetCenterX = width / 2;
    targetCenterY = height / 2;
  });

  // Track Mouse for Sway Parallax
  window.addEventListener("mousemove", (e) => {
    const rx = (e.clientX - width / 2) / (width / 2); // -1 to 1
    const ry = (e.clientY - height / 2) / (height / 2); // -1 to 1
    
    // Move the projection center up to 10% of screen size in the opposite direction
    targetCenterX = (width / 2) - (rx * width * 0.08);
    targetCenterY = (height / 2) - (ry * height * 0.08);
  });

  // Add event listeners to detect interactive element hovering for the Warp Acceleration
  function setupHoverListeners() {
    const selectors = "button, a, input, select, .liquid-glass-card, .gemini-interactive-card, .cyber-card, .dao-card, .stats-card";
    
    document.addEventListener("mouseover", (e) => {
      if (e.target && e.target.closest(selectors)) {
        targetSpeed = 4.2; // Warp speed!
      }
    });

    document.addEventListener("mouseout", (e) => {
      if (e.target && e.target.closest(selectors)) {
        targetSpeed = baseSpeed; // Decay back
      }
    });

    // Tap/Click surge
    document.addEventListener("mousedown", () => {
      targetSpeed = 8.5; // Short warp flash!
      setTimeout(() => {
        targetSpeed = baseSpeed;
      }, 350);
    });
  }

  // Run initial hover setups
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupHoverListeners);
  } else {
    setupHoverListeners();
  }

  // Main Animation Loop
  function tick() {
    // Clear canvas with a slightly transparent overlay to make trails look smoother
    ctx.fillStyle = "rgba(8, 5, 18, 0.25)";
    ctx.fillRect(0, 0, width, height);

    // Interpolate center coordinates smoothly (lerp)
    centerX += (targetCenterX - centerX) * 0.08;
    centerY += (targetCenterY - centerY) * 0.08;

    // Interpolate speed smoothly
    currentSpeed += (targetSpeed - currentSpeed) * 0.05;

    for (let i = 0; i < numStars; i++) {
      const star = stars[i];

      // Store previous projected coordinate for drawing warp streaks
      const prevZ = star.z;
      
      // Move closer
      star.z -= currentSpeed;

      // Reset star if it passes the viewer
      if (star.z <= 0) {
        star.z = maxDepth;
        star.x = (Math.random() - 0.5) * width * 2;
        star.y = (Math.random() - 0.5) * height * 2;
        continue;
      }

      // Project 3D coordinate to 2D
      const px = (star.x / star.z) * fov + centerX;
      const py = (star.y / star.z) * fov + centerY;

      // Skip drawing if outside viewport boundaries
      if (px < 0 || px > width || py < 0 || py > height) {
        continue;
      }

      // Calculate previous projected coordinate
      const prevPx = (star.x / prevZ) * fov + centerX;
      const prevPy = (star.y / prevZ) * fov + centerY;

      // Alpha fade based on depth
      const alpha = Math.min((1 - star.z / maxDepth) * 0.85, 0.85);
      
      // Draw star particle. If speed is high, draw as a streak line.
      ctx.strokeStyle = `hsla(${star.color}, ${alpha})`;
      ctx.lineWidth = Math.max((1 - star.z / maxDepth) * 2.5, 0.75);
      
      ctx.beginPath();
      if (currentSpeed > baseSpeed + 0.5) {
        // Draw warp streak line from prev projection to current projection
        ctx.moveTo(prevPx, prevPy);
        ctx.lineTo(px, py);
      } else {
        // Draw tiny circle dot
        ctx.moveTo(px, py);
        ctx.lineTo(px + 1, py + 1);
      }
      ctx.stroke();
    }

    requestAnimationFrame(tick);
  }

  // Start Loop
  requestAnimationFrame(tick);
})();
