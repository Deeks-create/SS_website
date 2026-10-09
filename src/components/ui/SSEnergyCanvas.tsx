import React, { useEffect, useRef } from 'react';

interface SSEnergyCanvasProps {
  className?: string;
  densityMultiplier?: number;
  interactive?: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
  isTeal: boolean;
  isRed: boolean;
}

/**
 * SS Energy Canvas Component (Futuristic Cinematic Upgrade)
 * Lightweight, high-performance HTML5 Canvas background.
 * Drifting SS Red (#dc2626), Crisp White (#ffffff), Slate (#94a3b8), and Cyan/Teal (#06b6d4) particles.
 * Dual-color connecting energy lines representing student connections & collaboration.
 * Viewport fixed, pointer-events disabled, prefers-reduced-motion compliant.
 */
export const SSEnergyCanvas: React.FC<SSEnergyCanvasProps> = ({
  className = "fixed inset-0 pointer-events-none z-0",
  densityMultiplier = 1,
  interactive = true
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking for subtle interaction
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 150
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    let particles: Particle[] = [];

    const initParticles = () => {
      particles = [];
      const baseCount = width < 768 ? 32 : width < 1280 ? 60 : 85;
      const count = Math.floor(baseCount * densityMultiplier);

      const palette = [
        { color: '#dc2626', isRed: true, isTeal: false },  // SS Red
        { color: '#ef4444', isRed: true, isTeal: false },  // Vibrant Red
        { color: '#06b6d4', isRed: false, isTeal: true },  // Deep Cyan
        { color: '#14b8a6', isRed: false, isTeal: true },  // Teal Accent
        { color: '#ffffff', isRed: false, isTeal: false }, // White
        { color: '#94a3b8', isRed: false, isTeal: false }  // Muted Slate
      ];

      for (let i = 0; i < count; i++) {
        const item = palette[Math.floor(Math.random() * palette.length)];
        const isHighlight = item.isRed || item.isTeal;
        const alpha = isHighlight ? 0.45 + Math.random() * 0.45 : 0.25 + Math.random() * 0.35;

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: isHighlight ? 1.6 + Math.random() * 1.8 : 1.1 + Math.random() * 1.3,
          color: item.color,
          alpha,
          isRed: item.isRed,
          isTeal: item.isTeal
        });
      }
    };

    initParticles();

    const connectionDistance = width < 768 ? 100 : 145;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle ambient glow gradients in background
      const gradRed = ctx.createRadialGradient(width * 0.2, height * 0.3, 10, width * 0.2, height * 0.3, width * 0.4);
      gradRed.addColorStop(0, 'rgba(220, 38, 38, 0.06)');
      gradRed.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradRed;
      ctx.fillRect(0, 0, width, height);

      const gradCyan = ctx.createRadialGradient(width * 0.8, height * 0.7, 10, width * 0.8, height * 0.7, width * 0.45);
      gradCyan.addColorStop(0, 'rgba(6, 182, 212, 0.05)');
      gradCyan.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradCyan;
      ctx.fillRect(0, 0, width, height);

      // Update & Draw Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Soft mouse push interaction
        if (interactive && mouse.x > 0 && mouse.y > 0) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            p.x -= Math.cos(angle) * force * 1.8;
            p.y -= Math.sin(angle) * force * 1.8;
          }
        }

        // Particle Glow & Dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;

        if (p.isRed) {
          ctx.shadowBlur = 12;
          ctx.shadowColor = '#dc2626';
        } else if (p.isTeal) {
          ctx.shadowBlur = 12;
          ctx.shadowColor = '#06b6d4';
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fill();
        ctx.shadowBlur = 0;

        // Connecting Energy Lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const lineAlpha = (1 - dist / connectionDistance) * 0.25;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            
            let strokeColor = '#64748b';
            if (p.isRed || p2.isRed) {
              strokeColor = '#dc2626';
            } else if (p.isTeal || p2.isTeal) {
              strokeColor = '#06b6d4';
            }

            ctx.strokeStyle = strokeColor;
            ctx.globalAlpha = lineAlpha;
            ctx.lineWidth = (p.isRed || p.isTeal) ? 0.9 : 0.5;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    window.addEventListener('resize', handleResize);
    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [densityMultiplier, interactive]);

  return (
    <canvas 
      ref={canvasRef} 
      className={className}
      aria-hidden="true"
    />
  );
};
