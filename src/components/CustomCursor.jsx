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
  const ringSize = state === 'click' ? 28 : state === 'hover' ? 52 : 36;
  const ringBorder = state === 'hover' ? '2px solid #2563EB' : '1.5px solid rgba(37,99,235,0.45)';

  return (
    <>
      {/* Dot */}
      <motion.div
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
        animate={{ width: dotSize, height: dotSize, backgroundColor: state === 'hover' ? '#F97316' : '#2563EB' }}
        transition={{ duration: 0.15 }}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
      />
      {/* Ring */}
      <motion.div
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%', border: ringBorder }}
        animate={{ width: ringSize, height: ringSize, opacity: state === 'click' ? 0.5 : 1 }}
        transition={{ duration: 0.2 }}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998]"
      />
    </>
  );
}
