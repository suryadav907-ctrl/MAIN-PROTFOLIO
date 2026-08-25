'use client';

import React, { useEffect, useRef } from 'react';

const CODE_FRAGMENTS = [
  "GRB_ENERGY = 1e51_ERGS;",
  "vector<int> dp(n, 0);",
  "class BlackHoleEngine { void pull(); };",
  "def event_horizon(r_s = 2*G*M/c^2):",
  "01001101 01000001 01010100",
  "SELECT * FROM cosmic_singularity;",
  "O(N log N) // gravitational force",
  "std::cout << \"GAMMA RAY BURST\" << std::endl;",
  "photons.orbit(photon_ring);"
];

export const HeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking for gravitational singularity
    let mouse = {
      x: width * 0.75,
      y: height * 0.45,
      targetX: width * 0.75,
      targetY: height * 0.45
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Accretion disk particles
    const particleCount = Math.min(Math.floor(width / 14), 110);
    const particles: Array<{
      angle: number;
      distance: number;
      speed: number;
      size: number;
      color: string;
      alpha: number;
      fragment?: string;
    }> = [];

    const colors = [
      '#38bdf8', // Cyan
      '#818cf8', // Indigo
      '#c084fc', // Purple Nebula
      '#f43f5e', // Gamma Burst Red-Pink
      '#ffffff'  // Photon White
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        angle: Math.random() * Math.PI * 2,
        distance: 40 + Math.random() * (Math.min(width, height) * 0.45),
        speed: (0.002 + Math.random() * 0.008) * (Math.random() < 0.5 ? 1 : -1),
        size: Math.random() * 2.5 + 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.7 + 0.2,
        fragment: i % 7 === 0 ? CODE_FRAGMENTS[Math.floor(Math.random() * CODE_FRAGMENTS.length)] : undefined,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.015;

      // Smooth mouse lerp for Black Hole center
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      const bhX = mouse.x;
      const bhY = mouse.y;

      ctx.clearRect(0, 0, width, height);

      // --- 1. DEEP SPACE NEBULA CLOUDS ---
      const nebula1 = ctx.createRadialGradient(bhX, bhY, 10, bhX, bhY, Math.max(width, height) * 0.6);
      nebula1.addColorStop(0, 'rgba(88, 28, 135, 0.25)'); // Dark Violet Core
      nebula1.addColorStop(0.3, 'rgba(14, 116, 144, 0.18)'); // Cyan Gas
      nebula1.addColorStop(0.6, 'rgba(15, 23, 42, 0.2)'); // Deep Void Blue
      nebula1.addColorStop(1, 'rgba(8, 8, 10, 0)');

      ctx.fillStyle = nebula1;
      ctx.fillRect(0, 0, width, height);

      const nebula2 = ctx.createRadialGradient(
        bhX + Math.sin(time * 0.5) * 100,
        bhY + Math.cos(time * 0.5) * 80,
        50,
        bhX,
        bhY,
        Math.max(width, height) * 0.5
      );
      nebula2.addColorStop(0, 'rgba(225, 29, 72, 0.12)'); // Cosmic Gamma Glow
      nebula2.addColorStop(0.5, 'rgba(79, 70, 229, 0.1)');
      nebula2.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = nebula2;
      ctx.fillRect(0, 0, width, height);

      // --- 2. RELATIVISTIC GAMMA-RAY BURST (GRB) BEAMS ---
      const beamLength = Math.max(width, height) * 1.2;
      const beamWidth = 24 + Math.sin(time * 3) * 6;

      ctx.save();
      ctx.translate(bhX, bhY);
      ctx.rotate(-Math.PI / 4 + Math.sin(time * 0.2) * 0.05); // Diagonal burst angle

      // Top GRB Beam
      const topBeamGrad = ctx.createLinearGradient(0, 0, 0, -beamLength);
      topBeamGrad.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
      topBeamGrad.addColorStop(0.05, 'rgba(56, 189, 248, 0.8)');
      topBeamGrad.addColorStop(0.2, 'rgba(192, 132, 252, 0.5)');
      topBeamGrad.addColorStop(0.6, 'rgba(244, 63, 94, 0.2)');
      topBeamGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = topBeamGrad;
      ctx.beginPath();
      ctx.moveTo(-beamWidth / 2, 0);
      ctx.lineTo(beamWidth / 2, 0);
      ctx.lineTo(beamWidth * 4, -beamLength);
      ctx.lineTo(-beamWidth * 4, -beamLength);
      ctx.closePath();
      ctx.fill();

      // Bottom GRB Beam
      const bottomBeamGrad = ctx.createLinearGradient(0, 0, 0, beamLength);
      bottomBeamGrad.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
      bottomBeamGrad.addColorStop(0.05, 'rgba(56, 189, 248, 0.8)');
      bottomBeamGrad.addColorStop(0.2, 'rgba(192, 132, 252, 0.5)');
      bottomBeamGrad.addColorStop(0.6, 'rgba(244, 63, 94, 0.2)');
      bottomBeamGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = bottomBeamGrad;
      ctx.beginPath();
      ctx.moveTo(-beamWidth / 2, 0);
      ctx.lineTo(beamWidth / 2, 0);
      ctx.lineTo(beamWidth * 4, beamLength);
      ctx.lineTo(-beamWidth * 4, beamLength);
      ctx.closePath();
      ctx.fill();

      ctx.restore();

      // --- 3. ACCRETION DISK & GRAVITATIONAL PARTICLES ---
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.angle += p.speed;

        // Elliptical accretion distortion
        const rx = p.distance;
        const ry = p.distance * 0.35; // Tilted disk perspective

        const px = bhX + Math.cos(p.angle) * rx - Math.sin(p.angle) * ry * 0.4;
        const py = bhY + Math.sin(p.angle) * ry + Math.cos(p.angle) * rx * 0.2;

        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha * (0.5 + 0.5 * Math.sin(p.angle));
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Render code fragment if present
        if (p.fragment && p.alpha > 0.4) {
          ctx.font = '10px "JetBrains Mono", monospace';
          ctx.fillStyle = 'rgba(226, 232, 240, 0.6)';
          ctx.fillText(p.fragment, px + 8, py + 3);
        }
      }
      ctx.globalAlpha = 1;

      // --- 4. BLACK HOLE EVENT HORIZON & PHOTON RING ---
      const bhRadius = 38;

      // Photon Ring (Glow)
      const photonRing = ctx.createRadialGradient(bhX, bhY, bhRadius * 0.8, bhX, bhY, bhRadius * 2.2);
      photonRing.addColorStop(0, 'rgba(255, 255, 255, 1)');
      photonRing.addColorStop(0.2, 'rgba(56, 189, 248, 0.9)');
      photonRing.addColorStop(0.5, 'rgba(147, 51, 234, 0.4)');
      photonRing.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = photonRing;
      ctx.beginPath();
      ctx.arc(bhX, bhY, bhRadius * 2.2, 0, Math.PI * 2);
      ctx.fill();

      // Absolute Black Hole Singularity Core
      ctx.fillStyle = '#030305';
      ctx.beginPath();
      ctx.arc(bhX, bhY, bhRadius, 0, Math.PI * 2);
      ctx.fill();

      // Sharp Event Horizon Outline Ring
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.lineWidth = 2;
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-90 transition-opacity duration-1000"
    />
  );
};
