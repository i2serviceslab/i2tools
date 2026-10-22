import React, { useEffect, useRef } from 'react';

interface AmbientParticlesProps {
  active?: boolean;
  className?: string;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  alpha: number;
  pulseSpeed: number;
  pulseOffset: number;
  color: string;
}

export const AmbientParticles: React.FC<AmbientParticlesProps> = ({
  active = true,
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const colors = [
      'rgba(1, 187, 220, ',   // Brand cyan
      'rgba(56, 189, 248, ',   // Sky blue
      'rgba(113, 140, 193, ',  // Steel blue
      'rgba(240, 245, 250, '   // Crisp white
    ];

    const particleCount = 55;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      // Start distributed slightly more towards the center/middle, then drift outward
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * (Math.min(width, height) * 0.45);
      const cx = width / 2;
      const cy = height * 0.45;

      particles.push({
        x: cx + Math.cos(angle) * distance,
        y: cy + Math.sin(angle) * distance,
        vx: (Math.random() - 0.5) * 0.35 + Math.cos(angle) * 0.12,
        vy: (Math.random() - 0.5) * 0.35 + Math.sin(angle) * 0.08 - 0.05,
        radius: Math.random() * 2 + 1,
        baseAlpha: Math.random() * 0.4 + 0.3,
        alpha: Math.random() * 0.5 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulseOffset: Math.random() * Math.PI * 2,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    let tick = 0;

    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move particle slowly
        p.x += p.vx;
        p.y += p.vy;

        // Wrap gently around edges
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        // Gentle breathing pulse
        const currentAlpha = Math.max(
          0.05,
          Math.min(0.85, p.baseAlpha + Math.sin(tick * p.pulseSpeed + p.pulseOffset) * 0.2)
        );

        // Draw soft glowing particle
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 2.8);
        gradient.addColorStop(0, `${p.color}${currentAlpha})`);
        gradient.addColorStop(0.5, `${p.color}${currentAlpha * 0.4})`);
        gradient.addColorStop(1, `${p.color}0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 2.8, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Tiny crisp center dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${Math.min(1, currentAlpha * 1.4)})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${
        active ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    />
  );
};
