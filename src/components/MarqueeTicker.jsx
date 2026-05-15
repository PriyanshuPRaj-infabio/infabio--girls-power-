import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Marquee ticker strip with logos/text
export default function MarqueeTicker({ items, speed = 40, className = '' }) {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const totalWidth = track.scrollWidth / 2;
    const tl = gsap.to(track, {
      x: `-${totalWidth}px`,
      duration: totalWidth / speed,
      ease: 'none',
      repeat: -1,
    });

    return () => tl.kill();
  }, [speed]);

  const doubled = [...items, ...items];

  return (
    <div className={`overflow-hidden select-none ${className}`}>
      <div ref={trackRef} className="flex gap-12 w-max">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-3 flex-shrink-0 text-textMuted font-semibold text-sm uppercase tracking-widest whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-brandBlue flex-shrink-0" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
