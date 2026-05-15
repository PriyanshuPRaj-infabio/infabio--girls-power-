import { useEffect, useRef } from 'react';

// Animated dot grid background — pure CSS/JS, no Three.js needed
export default function GridBackground({ className = '' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let mouse = { x: -9999, y: -9999 };

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const handleMouse = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    window.addEventListener('mousemove', handleMouse);

    const GAP = 36;
    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cols = Math.ceil(canvas.width  / GAP) + 1;
      const rows = Math.ceil(canvas.height / GAP) + 1;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * GAP;
          const y = r * GAP;
          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const proximity = Math.max(0, 1 - dist / 160);

          // Subtle wave offset
          const wave = Math.sin(t * 0.6 + c * 0.4 + r * 0.3) * 0.5 + 0.5;

          const baseAlpha = 0.07 + wave * 0.05;
          const hoverAlpha = baseAlpha + proximity * 0.55;
          const radius = 1.5 + proximity * 3.5;

          // Color: blue near mouse, gray otherwise
          const r_ = Math.round(37  + proximity * 200);
          const g_ = Math.round(99  + proximity * 30);
          const b_ = Math.round(235 - proximity * 20);

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r_},${g_},${b_},${hoverAlpha})`;
          ctx.fill();
        }
      }

      t += 0.016;
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
    />
  );
}
