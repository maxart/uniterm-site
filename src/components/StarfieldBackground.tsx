import { useEffect, useRef } from 'react';

import { cn } from '@/lib/utils';

const STAR_COUNT = 220;
const Z_NEAR = 0.4;
const Z_FAR = 3.0;
const STAR_SPEED = 0.45;

interface Star {
  x: number;
  y: number;
  z: number;
  phase: number;
}

function seed(star: Star) {
  star.x = (Math.random() * 2 - 1) * Z_FAR;
  star.y = (Math.random() * 2 - 1) * Z_FAR;
  star.z = Z_NEAR + Math.random() * (Z_FAR - Z_NEAR);
  star.phase = Math.random() * Math.PI * 2;
}

interface Props {
  className?: string;
}

export function StarfieldBackground({ className }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const stars: Star[] = Array.from({ length: STAR_COUNT }, () => {
      const s: Star = { x: 0, y: 0, z: 0, phase: 0 };
      seed(s);
      return s;
    });

    let width = 0;
    let height = 0;
    let dpr = 1;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth || 1;
      const h = canvas.clientHeight || 1;
      width = Math.round(w * dpr);
      height = Math.round(h * dpr);
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const draw = (timeSec: number) => {
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const scale = Math.min(width, height) / 2;

      for (const s of stars) {
        const inv = 1 / s.z;
        const px = cx + s.x * inv * scale;
        const py = cy + s.y * inv * scale;
        if (px < -4 || px > width + 4 || py < -4 || py > height + 4) continue;

        const twinkle = 0.85 + 0.15 * Math.sin(timeSec * 2 + s.phase);
        const bright = Math.min(1, 0.6 * inv * twinkle);
        const radius = Math.min(2.2, 1.0 * inv * twinkle) * dpr;

        ctx.globalAlpha = bright * 0.55;
        ctx.beginPath();
        ctx.arc(px, py, radius, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    if (reducedMotion) {
      draw(0);
      return () => {
        ro.disconnect();
      };
    }

    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;
      for (const s of stars) {
        s.z -= STAR_SPEED * dt;
        if (s.z < Z_NEAR) seed(s);
      }
      draw(now / 1000);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={cn('pointer-events-none h-full w-full', className)}
    />
  );
}
