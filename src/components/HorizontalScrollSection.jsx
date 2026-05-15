import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

/**
 * HorizontalScrollSection — a section where content scrolls horizontally
 * as the user scrolls vertically (pinned GSAP panel).
 */
export default function HorizontalScrollSection({ children, title, eyebrow, className = '' }) {
  const sectionRef = useRef(null);
  const trackRef   = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track   = trackRef.current;
    if (!section || !track) return;

    const getScrollAmount = () => -(track.scrollWidth - window.innerWidth);

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: getScrollAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start:   'top top',
          end:     () => `+=${Math.abs(getScrollAmount())}`,
          pin:     true,
          scrub:   1.2,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden will-change-transform ${className}`}
      style={{ height: '100vh' }}
    >
      {/* Heading stays fixed at the top while scrolling */}
      <div className="absolute top-0 left-0 right-0 z-20 pt-12 pb-6 bg-gradient-to-b from-white via-white/95 to-transparent pointer-events-none">
        <div className="container mx-auto">
          {eyebrow && <span className="eyebrow mb-3">{eyebrow}</span>}
          <h2 className="text-4xl md:text-6xl font-display font-black text-textMain mt-2 leading-tight">
            {title}
          </h2>
        </div>
      </div>

      {/* Horizontal track */}
      <div
        ref={trackRef}
        className="flex items-center gap-6 h-full px-[5vw] pt-32"
        style={{ width: 'max-content' }}
      >
        {children}
      </div>

      {/* Scroll hint arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-8 right-10 flex items-center gap-2 text-textMuted text-sm font-semibold z-20"
      >
        <span>Scroll to explore</span>
        <motion.div
          animate={{ x: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          →
        </motion.div>
      </motion.div>
    </section>
  );
}
