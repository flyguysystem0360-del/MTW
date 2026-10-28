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

    // Particle pool
    const particleCount = mode === 'full' ? 45 : 20;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.5 + 0.8,
      speedY: -(Math.random() * 0.7 + 0.3),
      speedX: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.7 + 0.2,
      pulseSpeed: Math.random() * 0.03 + 0.01,
      color: Math.random() > 0.4 ? '#FED100' : Math.random() > 0.5 ? '#009B3A' : '#FFFFFF',
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.opacity += Math.sin(Date.now() * p.pulseSpeed) * 0.008;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(0.85, p.opacity));
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
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
      className="pointer-events-none fixed inset-0 z-10 overflow-hidden"
    >
      {/* Stage Truss Fixture Bar at Top */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-black via-zinc-950 to-transparent flex justify-around px-8 opacity-70">
        <div className="w-8 h-2 bg-zinc-800 rounded-b shadow-[0_4px_12px_rgba(0,155,58,0.8)] border-b border-[#009B3A]" />
        <div className="w-10 h-2 bg-zinc-800 rounded-b shadow-[0_4px_16px_rgba(254,209,0,0.9)] border-b border-[#FED100]" />
        <div className="w-12 h-2.5 bg-zinc-700 rounded-b shadow-[0_6px_20px_rgba(254,209,0,1)] border-b border-[#FED100]" />
        <div className="w-10 h-2 bg-zinc-800 rounded-b shadow-[0_4px_16px_rgba(200,16,46,0.8)] border-b border-[#C8102E]" />
        <div className="w-8 h-2 bg-zinc-800 rounded-b shadow-[0_4px_12px_rgba(1,33,105,0.8)] border-b border-[#012169]" />
      </div>

      {/* Volumetric Spotlights */}
      {/* 1. Jamaican Green Beam (Left Angle) */}
      <div
        className={`absolute -top-10 left-[12%] w-[180px] md:w-[320px] h-[95vh] origin-top blur-2xl opacity-40 mix-blend-screen pointer-events-none ${
          isFull ? 'animate-sweep-left' : 'rotate-[-16deg] opacity-25'
        }`}
        style={{
          background:
            'linear-gradient(175deg, rgba(0, 155, 58, 0.75) 0%, rgba(0, 155, 58, 0.35) 45%, rgba(0, 155, 58, 0.0) 85%)',
          clipPath: 'polygon(45% 0%, 55% 0%, 100% 100%, 0% 100%)',
        }}
      />

      {/* 2. Jamaican Radiant Gold Center-Left Beam */}
      <div
        className={`absolute -top-10 left-[28%] w-[240px] md:w-[420px] h-[100vh] origin-top blur-xl opacity-50 mix-blend-screen pointer-events-none ${
          isFull ? 'animate-sweep-gold' : 'rotate-[6deg] opacity-30'
        }`}
        style={{
          background:
            'linear-gradient(180deg, rgba(254, 209, 0, 0.85) 0%, rgba(254, 209, 0, 0.4) 50%, rgba(254, 209, 0, 0.0) 90%)',
          clipPath: 'polygon(46% 0%, 54% 0%, 100% 100%, 0% 100%)',
        }}
      />

      {/* 3. Stage Center Flare & Golden Haze Core */}
      <div
        className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[550px] md:w-[850px] h-[380px] rounded-full blur-[90px] opacity-25 pointer-events-none mix-blend-screen"
        style={{
          background:
            'radial-gradient(circle, rgba(254, 209, 0, 0.55) 0%, rgba(0, 155, 58, 0.25) 50%, rgba(200, 16, 46, 0.15) 75%, transparent 100%)',
        }}
      />

      {/* 4. British Red Beam (Center-Right Angle) */}
      <div
        className={`absolute -top-10 right-[24%] w-[220px] md:w-[380px] h-[95vh] origin-top blur-2xl opacity-45 mix-blend-screen pointer-events-none ${
          isFull ? 'animate-sweep-right' : 'rotate-[18deg] opacity-25'
        }`}
        style={{
          background:
            'linear-gradient(185deg, rgba(200, 16, 46, 0.8) 0%, rgba(200, 16, 46, 0.35) 45%, rgba(200, 16, 46, 0.0) 85%)',
          clipPath: 'polygon(45% 0%, 55% 0%, 100% 100%, 0% 100%)',
        }}
      />

      {/* 5. British Royal Blue Beam (Far Right Rim Wash) */}
      <div
        className="absolute -top-10 right-[8%] w-[160px] md:w-[280px] h-[90vh] origin-top rotate-[26deg] blur-2xl opacity-35 mix-blend-screen pointer-events-none"
        style={{
          background:
            'linear-gradient(185deg, rgba(1, 33, 105, 0.9) 0%, rgba(1, 33, 105, 0.4) 45%, rgba(1, 33, 105, 0.0) 85%)',
          clipPath: 'polygon(46% 0%, 54% 0%, 100% 100%, 0% 100%)',
        }}
      />

      {/* Soft Ambient Stage Smoke & Haze Clouds */}
      <div
        className={`absolute bottom-0 inset-x-0 h-[45vh] bg-gradient-to-t from-[#0c0d10] via-zinc-950/60 to-transparent pointer-events-none ${
          isFull ? 'animate-pulse-haze' : ''
        }`}
      />

      {/* Interactive Golden Sparkle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};
