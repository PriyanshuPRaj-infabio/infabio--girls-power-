import { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

/**
 * SpotlightCard — premium card with:
 *  • 3D perspective tilt tracking mouse position
 *  • Moving spotlight glow that follows the cursor
 *  • Subtle border highlight on hover edge
 */
export default function SpotlightCard({
  children,
  className = '',
  glowColor = 'rgba(37,99,235,0.18)',
  tiltStrength = 14,
  as: Tag = 'div',
  ...props
}) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [spot, setSpot] = useState({ x: 50, y: 50, opacity: 0 });

  const onMouseMove = useCallback((e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;  // 0–1
    const py = (e.clientY - rect.top)  / rect.height; // 0–1
    setTilt({
      rx: (py - 0.5) * -tiltStrength,
      ry: (px - 0.5) *  tiltStrength,
    });
    setSpot({ x: px * 100, y: py * 100, opacity: 1 });
  }, [tiltStrength]);

  const onMouseLeave = useCallback(() => {
    setTilt({ rx: 0, ry: 0 });
    setSpot(s => ({ ...s, opacity: 0 }));
  }, []);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      animate={{ rotateX: tilt.rx, rotateY: tilt.ry }}
      transition={{ type: 'spring', stiffness: 260, damping: 24, mass: 0.6 }}
      style={{ transformStyle: 'preserve-3d', perspective: '800px' }}
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      {/* Spotlight glow */}
      <div
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: spot.opacity,
          background: `radial-gradient(260px circle at ${spot.x}% ${spot.y}%, ${glowColor}, transparent 70%)`,
        }}
      />
      {/* Border shimmer */}
      <div
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: spot.opacity * 0.6,
          background: `radial-gradient(180px circle at ${spot.x}% ${spot.y}%, rgba(255,255,255,0.4), transparent 70%)`,
        }}
      />
      {/* Content */}
      <div className="relative z-20">{children}</div>
    </motion.div>
  );
}
