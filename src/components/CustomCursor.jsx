import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const dotX   = useMotionValue(-100);
  const dotY   = useMotionValue(-100);
  const ringX  = useSpring(dotX, { stiffness: 120, damping: 20, mass: 0.5 });
  const ringY  = useSpring(dotY, { stiffness: 120, damping: 20, mass: 0.5 });

  const [state, setState] = useState('default'); // default | hover | click

  useEffect(() => {
    const onMove = (e) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    const onDown  = () => setState('click');
    const onUp    = () => setState('default');

    const onEnter = (e) => {
      const el = e.target;
      if (el.closest('a, button, [role="button"], .cursor-pointer')) setState('hover');
    };
    const onLeave = (e) => {
      const el = e.target;
      if (el.closest('a, button, [role="button"], .cursor-pointer')) setState('default');
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup',   onUp);
    document.addEventListener('mouseover',  onEnter);
    document.addEventListener('mouseout',   onLeave);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup',   onUp);
      document.removeEventListener('mouseover',  onEnter);
      document.removeEventListener('mouseout',   onLeave);
    };
  }, []);

  const dotSize  = state === 'click' ? 6  : state === 'hover' ? 10 : 8;
  const ringSize = state === 'click' ? 24 : state === 'hover' ? 56 : 38;
  const ringBorder = state === 'hover' ? '2px solid #fda4af' : '1.5px solid rgba(192, 132, 252, 0.5)';
  const glowShadow = state === 'hover' 
    ? '0 0 15px rgba(253, 164, 175, 0.6)' 
    : '0 0 12px rgba(192, 132, 252, 0.3)';

  return (
    <>
      {/* Dot */}
      <motion.div
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
        animate={{ 
          width: dotSize, 
          height: dotSize, 
          backgroundColor: state === 'hover' ? '#fda4af' : '#6366f1',
          boxShadow: state === 'hover' ? '0 0 12px #fda4af' : '0 0 8px #6366f1'
        }}
        transition={{ duration: 0.15 }}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
      />
      {/* Ring */}
      <motion.div
        style={{ 
          x: ringX, 
          y: ringY, 
          translateX: '-50%', 
          translateY: '-50%', 
          border: ringBorder,
          boxShadow: glowShadow
        }}
        animate={{ 
          width: ringSize, 
          height: ringSize, 
          opacity: state === 'click' ? 0.3 : 1 
        }}
        transition={{ duration: 0.18 }}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998]"
      />
    </>
  );
}
