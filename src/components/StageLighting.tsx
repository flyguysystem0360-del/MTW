import React, { useEffect, useRef } from 'react';
import type { LightingMode } from '../types';

interface StageLightingProps {
  mode: LightingMode['id'];
}

export const StageLighting: React.FC<StageLightingProps> = ({ mode }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Floating gold & amber sparkles particle system
  useEffect(() => {
    if (mode === 'off') return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle pool with gold, green, white, and amber sparkles
    const particleCount = mode === 'full' ? 55 : 24;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.8 + 0.8,
      speedY: -(Math.random() * 0.7 + 0.25),
      speedX: (Math.random() - 0.5) * 0.45,
      opacity: Math.random() * 0.7 + 0.2,
      pulseSpeed: Math.random() * 0.04 + 0.015,
      angle: Math.random() * Math.PI * 2,
      isStar: Math.random() > 0.65,
      color:
        Math.random() > 0.35
          ? '#FED100' // Jamaican Gold
          : Math.random() > 0.5
          ? '#009B3A' // Jamaican Green
          : Math.random() > 0.5
          ? '#FFFFFF' // British White sparkle
          : '#C8102E', // British Red ember
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.angle += 0.02;
        p.opacity += Math.sin(Date.now() * p.pulseSpeed) * 0.012;

        if (p.y < -15) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -15) p.x = width + 10;
        if (p.x > width + 15) p.x = -10;

        const currentOpacity = Math.max(0.1, Math.min(0.9, p.opacity));

        ctx.save();
        ctx.globalAlpha = currentOpacity;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;

        if (p.isStar) {
          // Draw a 4-point golden star sparkle
          const r = p.size * 1.8;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y - r);
          ctx.lineTo(p.x + r * 0.3, p.y - r * 0.3);
          ctx.lineTo(p.x + r, p.y);
          ctx.lineTo(p.x + r * 0.3, p.y + r * 0.3);
          ctx.lineTo(p.x, p.y + r);
          ctx.lineTo(p.x - r * 0.3, p.y + r * 0.3);
          ctx.lineTo(p.x - r, p.y);
          ctx.lineTo(p.x - r * 0.3, p.y - r * 0.3);
          ctx.closePath();
          ctx.fill();
        } else {
          // Standard radiant circle particle
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [mode]);

  if (mode === 'off') {
    return null;
  }

  const isFull = mode === 'full';

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden"
    >
      {/* Top Stage Rig & Lamp Fixtures with Visible Lenses */}
      <div className="absolute top-0 inset-x-0 h-6 bg-gradient-to-b from-black via-zinc-950/80 to-transparent flex justify-around items-start px-6 md:px-16 opacity-90">
        {/* Lamp 1: Jamaican Green Spotlight */}
        <div className="relative group">
          <div className="w-10 h-3 bg-zinc-800 rounded-b border-b-2 border-[#009B3A] shadow-[0_6px_20px_#009B3A]" />
          <div className="w-4 h-1.5 mx-auto bg-[#009B3A] rounded-full blur-[2px]" />
        </div>

        {/* Lamp 2: Jamaican Radiant Gold Spotlight */}
        <div className="relative group">
          <div className="w-12 h-3.5 bg-zinc-800 rounded-b border-b-2 border-[#FED100] shadow-[0_6px_25px_#FED100]" />
          <div className="w-6 h-2 mx-auto bg-[#FED100] rounded-full blur-[2px]" />
        </div>

        {/* Lamp 3: Center Gold High-Watt Flare */}
        <div className="relative group">
          <div className="w-14 h-4 bg-zinc-700 rounded-b border-b-2 border-[#FED100] shadow-[0_8px_30px_#FED100]" />
          <div className="w-8 h-2.5 mx-auto bg-white rounded-full blur-[2px]" />
        </div>

        {/* Lamp 4: British Red Spotlight */}
        <div className="relative group">
          <div className="w-12 h-3.5 bg-zinc-800 rounded-b border-b-2 border-[#C8102E] shadow-[0_6px_25px_#C8102E]" />
          <div className="w-6 h-2 mx-auto bg-[#C8102E] rounded-full blur-[2px]" />
        </div>

        {/* Lamp 5: British Royal Blue Wash */}
        <div className="relative group">
          <div className="w-10 h-3 bg-zinc-800 rounded-b border-b-2 border-[#012169] shadow-[0_6px_20px_#012169]" />
          <div className="w-4 h-1.5 mx-auto bg-blue-500 rounded-full blur-[2px]" />
        </div>
      </div>

      {/* Volumetric Spotlights (Cinematic Cones with mix-blend-screen) */}

      {/* 1. Jamaican Green Beam (Left Angle) */}
      <div
        className={`absolute -top-6 left-[8%] md:left-[12%] w-[220px] md:w-[380px] h-[95vh] origin-top blur-xl mix-blend-screen pointer-events-none transition-opacity duration-700 ${
          isFull ? 'animate-sweep-left opacity-45' : 'rotate-[-16deg] opacity-25'
        }`}
        style={{
          background:
            'linear-gradient(175deg, rgba(0, 155, 58, 0.85) 0%, rgba(0, 155, 58, 0.4) 40%, rgba(0, 155, 58, 0.0) 80%)',
          clipPath: 'polygon(45% 0%, 55% 0%, 100% 100%, 0% 100%)',
        }}
      />

      {/* 2. Jamaican Radiant Gold Center-Left Beam */}
      <div
        className={`absolute -top-6 left-[24%] md:left-[28%] w-[260px] md:w-[460px] h-[100vh] origin-top blur-lg mix-blend-screen pointer-events-none transition-opacity duration-700 ${
          isFull ? 'animate-sweep-gold opacity-55' : 'rotate-[6deg] opacity-30'
        }`}
        style={{
          background:
            'linear-gradient(180deg, rgba(254, 209, 0, 0.95) 0%, rgba(254, 209, 0, 0.45) 45%, rgba(254, 209, 0, 0.0) 85%)',
          clipPath: 'polygon(46% 0%, 54% 0%, 100% 100%, 0% 100%)',
        }}
      />

      {/* 3. Stage Center Golden Lens Flare & Atmosphere Haze */}
      <div
        className="absolute top-[4%] left-1/2 -translate-x-1/2 w-[600px] md:w-[950px] h-[400px] rounded-full blur-[100px] opacity-30 pointer-events-none mix-blend-screen"
        style={{
          background:
            'radial-gradient(circle, rgba(254, 209, 0, 0.65) 0%, rgba(0, 155, 58, 0.3) 45%, rgba(200, 16, 46, 0.2) 70%, transparent 100%)',
        }}
      />

      {/* 4. British Red Beam (Center-Right Angle) */}
      <div
        className={`absolute -top-6 right-[20%] md:right-[24%] w-[240px] md:w-[420px] h-[95vh] origin-top blur-xl mix-blend-screen pointer-events-none transition-opacity duration-700 ${
          isFull ? 'animate-sweep-right opacity-50' : 'rotate-[18deg] opacity-25'
        }`}
        style={{
          background:
            'linear-gradient(185deg, rgba(200, 16, 46, 0.85) 0%, rgba(200, 16, 46, 0.4) 40%, rgba(200, 16, 46, 0.0) 80%)',
          clipPath: 'polygon(45% 0%, 55% 0%, 100% 100%, 0% 100%)',
        }}
      />

      {/* 5. British Royal Blue Beam (Far Right Rim Wash) */}
      <div
        className="absolute -top-6 right-[6%] md:right-[8%] w-[180px] md:w-[320px] h-[90vh] origin-top rotate-[24deg] blur-2xl opacity-40 mix-blend-screen pointer-events-none"
        style={{
          background:
            'linear-gradient(185deg, rgba(1, 33, 105, 0.95) 0%, rgba(1, 33, 105, 0.45) 45%, rgba(1, 33, 105, 0.0) 85%)',
          clipPath: 'polygon(46% 0%, 54% 0%, 100% 100%, 0% 100%)',
        }}
      />

      {/* Soft Animated Stage Haze Layer */}
      <div
        className={`absolute bottom-0 inset-x-0 h-[40vh] bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none ${
          isFull ? 'animate-pulse-haze' : ''
        }`}
      />

      {/* Canvas for Golden Sparkles and Star Twinkles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};
