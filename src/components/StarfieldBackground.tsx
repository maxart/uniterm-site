import { useEffect, useRef } from 'react';

import { cn } from '@/lib/utils';

const BASE_STAR_COUNT = 160;
const STARS_PER_MEGAPIXEL = 280;
const Z_NEAR = 0.4;
const Z_FAR = 3.0;
const Z_MID = (Z_NEAR + Z_FAR) / 2;
const STAR_SPEED = 0.42;
const SPAWN_SPREAD = Z_FAR * 1.6;

interface Star {
  x: number;
  y: number;
  z: number;
  phase: number;
}

function seed(star: Star) {
  star.x = (Math.random() * 2 - 1) * SPAWN_SPREAD;
  star.y = (Math.random() * 2 - 1) * SPAWN_SPREAD;
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
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let stars: Star[] = [];

    const populate = () => {
      const megapixels =
        (canvas.clientWidth * canvas.clientHeight) / 1_000_000;
      const target = Math.round(
        BASE_STAR_COUNT + STARS_PER_MEGAPIXEL * megapixels
      );
      if (stars.length === target) return;
      if (stars.length < target) {
        for (let i = stars.length; i < target; i++) {
          const s: Star = { x: 0, y: 0, z: 0, phase: 0 };
          seed(s);
          stars.push(s);
        }
      } else {
        stars.length = target;
      }
    };

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
      populate();
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const draw = (timeSec: number) => {
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const scale = Math.min(width, height) / 2;

      for (const s of stars) {
        const inv = 1 / s.z;
        const px = cx + s.x * inv * scale;
        const py = cy + s.y * inv * scale;
        if (px < -6 || px > width + 6 || py < -6 || py > height + 6) continue;

        const twinkle = 0.9 + 0.1 * Math.sin(timeSec * 2.2 + s.phase);
        const depth = 1 - (s.z - Z_NEAR) / (Z_FAR - Z_NEAR);
        const isBright = s.z < Z_MID;

        const alpha = Math.min(1, (0.5 + 0.5 * depth) * twinkle);
        const radius =
          (0.55 + 1.35 * depth) * dpr * (isBright ? 1 : 0.85);

        ctx.globalAlpha = alpha;
        ctx.fillStyle = isBright ? '#ffffff' : '#c9d2e3';
        ctx.beginPath();
        ctx.arc(px, py, radius, 0, Math.PI * 2);
        ctx.fill();

        if (depth > 0.72) {
          ctx.globalAlpha = alpha * 0.22;
          ctx.beginPath();
          ctx.arc(px, py, radius * 2.4, 0, Math.PI * 2);
          ctx.fill();
        }
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
