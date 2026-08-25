'use client';

import React, { useEffect, useRef } from 'react';

const COSMIC_CODE_FRAGMENTS = [
  "GRB_ENERGY = 1e51_ERGS;",
  "vector<int> dp(n, 0);",
  "class BlackHoleEngine { void pull(); };",
  "def event_horizon(r_s = 2*G*M/c^2):",
  "01001101 01000001 01010100",
  "SELECT * FROM cosmic_singularity;",
  "O(N log N) // gravitational force",
  "std::cout << \"GARGANTUA GRB\" << std::endl;",
  "photons.orbit(photon_ring);",
  "r_isco = 3 * r_s; // ISCO limit",
  "doppler_shift = sqrt((1+v/c)/(1-v/c));",
  "kerr_metric.spin_parameter(a=0.99);"
];

export const CosmicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking for gravitational center
    let mouse = {
      x: width * 0.72,
      y: height * 0.42,
      targetX: width * 0.72,
      targetY: height * 0.42
    };

    let scrollY = window.scrollY;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // High density Keplerian particles
    const particleCount = Math.min(Math.floor(width / 6), 280);
    const particles: Array<{
      angle: number;
      distance: number;
      speed: number;
      size: number;
      alpha: number;
      tempHue: number; // 0 to 360 temperature
      fragment?: string;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      const distPercent = Math.random();
      particles.push({
        angle: Math.random() * Math.PI * 2,
        distance: 52 + Math.pow(distPercent, 1.5) * (Math.min(width, height) * 0.45),
        speed: (0.004 + (1 - distPercent) * 0.015) * (Math.random() < 0.85 ? 1 : -1),
        size: Math.random() * 2.6 + 0.5,
        alpha: Math.random() * 0.9 + 0.1,
        tempHue: 195 + (1 - distPercent) * 155, // Blue-white ISCO core to deep crimson outer edge
        fragment: i % 12 === 0 ? COSMIC_CODE_FRAGMENTS[Math.floor(Math.random() * COSMIC_CODE_FRAGMENTS.length)] : undefined,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.02;

      // Mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      const bhX = mouse.x;
      const bhY = mouse.y + (scrollY * 0.05) % (height * 0.35);
      const bhRadius = 48;

      ctx.clearRect(0, 0, width, height);

      // --- 1. PITCH BLACK VOID & SUBTLE AMBIENT COSMIC NEBULA ---
      ctx.fillStyle = '#010103';
      ctx.fillRect(0, 0, width, height);

      const subtleGlow = ctx.createRadialGradient(bhX, bhY, 10, bhX, bhY, Math.max(width, height) * 0.75);
      subtleGlow.addColorStop(0, 'rgba(30, 27, 75, 0.35)'); // Dark Deep Violet
      subtleGlow.addColorStop(0.3, 'rgba(14, 116, 144, 0.1)'); // Dark Cyan
      subtleGlow.addColorStop(0.8, 'rgba(0, 0, 0, 0.85)');
      subtleGlow.addColorStop(1, 'rgba(0, 0, 0, 1)');

      ctx.fillStyle = subtleGlow;
      ctx.fillRect(0, 0, width, height);

      // --- 2. ULTRA-FOCUSED RELATIVISTIC POLAR JETS ---
      const jetLength = Math.max(width, height) * 1.5;
      const jetWidth = 16 + Math.sin(time * 4) * 4;

      ctx.save();
      ctx.translate(bhX, bhY);
      ctx.rotate(-Math.PI / 4 + Math.sin(time * 0.1) * 0.03);

      // Top Jet
      const topJet = ctx.createLinearGradient(0, 0, 0, -jetLength);
      topJet.addColorStop(0, 'rgba(255, 255, 255, 1)');
      topJet.addColorStop(0.015, 'rgba(56, 189, 248, 0.95)');
      topJet.addColorStop(0.1, 'rgba(168, 85, 247, 0.7)');
      topJet.addColorStop(0.35, 'rgba(244, 63, 94, 0.2)');
      topJet.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = topJet;
      ctx.beginPath();
      ctx.moveTo(-jetWidth / 2, 0);
      ctx.lineTo(jetWidth / 2, 0);
      ctx.lineTo(jetWidth * 3.5, -jetLength);
      ctx.lineTo(-jetWidth * 3.5, -jetLength);
      ctx.closePath();
      ctx.fill();

      // Bottom Jet
      const bottomJet = ctx.createLinearGradient(0, 0, 0, jetLength);
      bottomJet.addColorStop(0, 'rgba(255, 255, 255, 1)');
      bottomJet.addColorStop(0.015, 'rgba(56, 189, 248, 0.95)');
      bottomJet.addColorStop(0.1, 'rgba(168, 85, 247, 0.7)');
      bottomJet.addColorStop(0.35, 'rgba(244, 63, 94, 0.2)');
      bottomJet.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = bottomJet;
      ctx.beginPath();
      ctx.moveTo(-jetWidth / 2, 0);
      ctx.lineTo(jetWidth / 2, 0);
      ctx.lineTo(jetWidth * 3.5, jetLength);
      ctx.lineTo(-jetWidth * 3.5, jetLength);
      ctx.closePath();
      ctx.fill();

      ctx.restore();

      // --- 3. 3D GRAVITATIONAL LENSING HALO ARCHES (INTERSTELLAR GARGANTUA LENSING) ---
      ctx.save();
      ctx.translate(bhX, bhY);

      // Top Lensed Arch (Light curved over event horizon)
      ctx.save();
      ctx.scale(1, 0.55);
      const topArch = ctx.createRadialGradient(0, -bhRadius * 0.7, bhRadius * 0.4, 0, -bhRadius * 0.7, bhRadius * 2.8);
      topArch.addColorStop(0, 'rgba(255, 255, 255, 0.98)');
      topArch.addColorStop(0.15, 'rgba(56, 189, 248, 0.9)');
      topArch.addColorStop(0.45, 'rgba(234, 88, 12, 0.6)'); // Amber Redshift
      topArch.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = topArch;
      ctx.beginPath();
      ctx.arc(0, -bhRadius * 0.35, bhRadius * 2.3, Math.PI, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Bottom Lensed Arch (Light curved under event horizon)
      ctx.save();
      ctx.scale(1, 0.55);
      const bottomArch = ctx.createRadialGradient(0, bhRadius * 0.7, bhRadius * 0.4, 0, bhRadius * 0.7, bhRadius * 2.8);
      bottomArch.addColorStop(0, 'rgba(255, 255, 255, 0.85)');
      bottomArch.addColorStop(0.2, 'rgba(168, 85, 247, 0.7)');
      bottomArch.addColorStop(0.55, 'rgba(234, 88, 12, 0.35)');
      bottomArch.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = bottomArch;
      ctx.beginPath();
      ctx.arc(0, bhRadius * 0.35, bhRadius * 2.1, 0, Math.PI);
      ctx.fill();
      ctx.restore();

      ctx.restore();

      // --- 4. RELATIVISTIC ACCRETION DISK WITH DOPPLER BEAMING ---
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.angle += p.speed;

        const rx = p.distance;
        const ry = p.distance * 0.26;

        const px = bhX + Math.cos(p.angle) * rx;
        const py = bhY + Math.sin(p.angle) * ry;

        // Doppler Beaming Effect
        const doppler = Math.cos(p.angle); // -1 (moving away) to +1 (approaching)
        const dopplerIntensity = 0.4 + 0.6 * (-doppler); // Left side approaches, gets blindingly bright

        const alpha = p.alpha * (0.25 + 0.75 * dopplerIntensity);
        const particleSize = p.size * (0.75 + 0.45 * dopplerIntensity);

        ctx.fillStyle = `hsla(${p.tempHue - doppler * 35}, 95%, ${60 + doppler * 25}%, ${alpha})`;
        ctx.beginPath();
        ctx.arc(px, py, particleSize, 0, Math.PI * 2);
        ctx.fill();

        // Render code fragment if present
        if (p.fragment && alpha > 0.55) {
          ctx.font = '10px "JetBrains Mono", monospace';
          ctx.fillStyle = `rgba(248, 250, 252, ${alpha * 0.85})`;
          ctx.fillText(p.fragment, px + 8, py + 3);
        }
      }

      // --- 5. ISCO PHOTON SPHERE RING & PITCH BLACK EVENT HORIZON ---
      // Ultra-blinding Photon Ring (r = 1.5 r_s)
      const photonRing = ctx.createRadialGradient(bhX, bhY, bhRadius * 0.9, bhX, bhY, bhRadius * 1.5);
      photonRing.addColorStop(0, 'rgba(255, 255, 255, 1)');
      photonRing.addColorStop(0.25, 'rgba(56, 189, 248, 0.95)');
      photonRing.addColorStop(0.65, 'rgba(244, 63, 94, 0.4)');
      photonRing.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = photonRing;
      ctx.beginPath();
      ctx.arc(bhX, bhY, bhRadius * 1.55, 0, Math.PI * 2);
      ctx.fill();

      // Pitch Black Event Horizon Core Shadow
      ctx.fillStyle = '#000000';
      ctx.beginPath();
      ctx.arc(bhX, bhY, bhRadius, 0, Math.PI * 2);
      ctx.fill();

      // Sharp Photon Ring Boundary
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.98)';
      ctx.lineWidth = 2.5;
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-100 transition-opacity duration-1000"
    />
  );
};
