import { useEffect, useRef } from 'react';

interface PawPrint {
  x: number;
  y: number;
  rotation: number;
  opacity: number;
  createdAt: number;
}

const FADE_DURATION = 1500;
const MIN_DISTANCE = 40;
const PAW_SIZE = 12;
const OFFSET = 8;

function drawPaw(ctx: CanvasRenderingContext2D, x: number, y: number, rotation: number, opacity: number, dpr: number, pawColor: string) {
  ctx.save();
  ctx.globalAlpha = opacity * 0.25;
  ctx.translate(x * dpr, y * dpr);
  ctx.rotate(rotation);
  const s = PAW_SIZE * dpr;

  ctx.fillStyle = pawColor;

  // Main pad
  ctx.beginPath();
  ctx.ellipse(0, s * 0.3, s * 0.35, s * 0.3, 0, 0, Math.PI * 2);
  ctx.fill();

  // Three toe beans
  const toes = [
    { x: -s * 0.25, y: -s * 0.15 },
    { x: 0, y: -s * 0.3 },
    { x: s * 0.25, y: -s * 0.15 },
  ];
  for (const toe of toes) {
    ctx.beginPath();
    ctx.arc(toe.x, toe.y, s * 0.13, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.restore();
}

export const PawCursorTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const printsRef = useRef<PawPrint[]>([]);
  const lastPosRef = useRef({ x: 0, y: 0 });
  const stepRef = useRef(0);
  const rafRef = useRef(0);

  useEffect(() => {
    if ('ontouchstart' in window) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const pawColor = getComputedStyle(document.documentElement).getPropertyValue('--raw-cat-orange').trim() || '#F97316';

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    }
    resize();
    window.addEventListener('resize', resize);

    function onMouseMove(e: MouseEvent) {
      const dx = e.clientX - lastPosRef.current.x;
      const dy = e.clientY - lastPosRef.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < MIN_DISTANCE) return;

      const angle = Math.atan2(dy, dx);
      const side = stepRef.current % 2 === 0 ? 1 : -1;
      const offsetX = Math.cos(angle + Math.PI / 2) * OFFSET * side;
      const offsetY = Math.sin(angle + Math.PI / 2) * OFFSET * side;

      printsRef.current.push({
        x: e.clientX + offsetX,
        y: e.clientY + offsetY,
        rotation: angle + (Math.random() - 0.5) * 0.3,
        opacity: 1,
        createdAt: Date.now(),
      });

      lastPosRef.current = { x: e.clientX, y: e.clientY };
      stepRef.current++;
    }

    window.addEventListener('mousemove', onMouseMove);

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const now = Date.now();
      printsRef.current = printsRef.current.filter((p) => {
        const elapsed = now - p.createdAt;
        if (elapsed > FADE_DURATION) return false;
        p.opacity = 1 - elapsed / FADE_DURATION;
        drawPaw(ctx, p.x, p.y, p.rotation, p.opacity, dpr, pawColor);
        return true;
      });

      rafRef.current = requestAnimationFrame(animate);
    }
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-45 pointer-events-none"
    />
  );
};
