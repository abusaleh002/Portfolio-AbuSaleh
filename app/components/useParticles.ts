'use client';
import { useEffect, useRef, useState } from 'react';

export default function useParticles() {
  const [canvasEl, setCanvasEl] = useState<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!canvasEl) return;
    const ctx = canvasEl.getContext('2d');
    if (!ctx) return;

    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      const w = canvasEl.clientWidth * DPR;
      const h = canvasEl.clientHeight * DPR;
      canvasEl.width = w;
      canvasEl.height = h;
      ctx.scale(DPR, DPR);
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 80 }).map(() => ({
      x: Math.random() * canvasEl.width,
      y: Math.random() * canvasEl.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 1.5 + 0.5,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
      ctx.fillStyle = '#9BE7FF';
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvasEl.width;
        if (p.y < 0) p.y = canvasEl.height;
        if (p.x > canvasEl.width) p.x = 0;
        if (p.y > canvasEl.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      rafRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [canvasEl]);

  return { canvasRefCallback: setCanvasEl };
}
