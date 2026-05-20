import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useScroll, useVelocity, useTransform, useSpring, useMotionValue } from 'framer-motion';
import SpotlightCard from './SpotlightCard';

const stats = [
  { n: 40,   suffix: '%', label: 'Reduced ad waste',          sub: 'By up to 40% through smarter tracking',        color: 'blue'   },
  { n: 3,    suffix: 'x', label: 'Conversion Rate Increase',  sub: 'Through smarter, high-intent funnels',          color: 'orange' },
  { n: 50,   suffix: '+', label: 'Brands Scaled',             sub: 'Across multiple industries and verticals',      color: 'blue'   },
  { n: 100,  suffix: '%', label: 'Budget Accountability',     sub: 'Every rupee tracked and optimised daily',       color: 'orange' },
];

function AnimatedCounter({ target, suffix, color, inView }) {
  const count = useMotionValue(0);
  const springValue = useSpring(count, { stiffness: 50, damping: 15 });
  const rounded = useTransform(springValue, (latest) => Math.round(latest));
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    if (inView) {
      count.set(target);
    }
  }, [inView, target, count]);

  useEffect(() => {
    return rounded.onChange((latest) => {
      setDisplayCount(latest);
    });
  }, [rounded]);

  return (
    <span className={`text-6xl md:text-7xl font-display font-light leading-none tracking-tight ${
      color === 'orange' 
        ? 'text-[#fda4af] [text-shadow:0_0_20px_rgba(253,164,175,0.3)]' 
        : 'text-[#6366f1] [text-shadow:0_0_20px_rgba(99,102,241,0.3)]'
    }`}>
      {displayCount}{suffix}
    </span>
  );
}

export default function Results() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  // Track global scroll velocity and progress
  const { scrollY, scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const scrollVelocity = useVelocity(scrollY);

  // Map scroll velocity to kinetic card shearing angle
  const skewX = useTransform(scrollVelocity, [-2000, 2000], [-4, 4]);
  const skewY = useTransform(scrollVelocity, [-2000, 2000], [-2, 2]);
  
  // Apply spring physics to velocity shearing so transitions are ultra-smooth
  const springSkewX = useSpring(skewX, { stiffness: 100, damping: 22 });
  const springSkewY = useSpring(skewY, { stiffness: 100, damping: 22 });

  return (
    <section ref={sectionRef} className="section-white py-32 relative overflow-hidden bg-transparent" id="results">
      {/* Dynamic atmospheric background overlay */}
      <div className="absolute top-1/2 right-0 w-[550px] h-[550px] -translate-y-1/2 rounded-full bg-indigo-950/15 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-10%] w-[450px] h-[450px] rounded-full bg-pink-950/10 blur-[130px] pointer-events-none" />

      <div className="container mx-auto relative z-10 px-6">
        
        {/* Title Heading */}
        <div className="text-center max-w-2xl mx-auto mb-24">
          <span className="eyebrow inline-block mb-4">Social Proof</span>
          <h2 className="text-5xl md:text-[4rem] font-display font-light text-white leading-tight">
            Real Growth. <br />
            <span className="text-transparent bg-clip-text bg-brand-gradient pr-4 italic font-normal">
              Real Impact.
            </span>
          </h2>
          <motion.div
            initial={{ scaleX: 0, originX: 0.5 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-24 rounded-full bg-gradient-to-r from-[#6366f1] to-[#fda4af] mx-auto mt-6 shadow-[0_2px_12px_rgba(99,102,241,0.3)]"
          />
        </div>

        {/* ── HIGHLY ASYMMETRIC STAGGERED HONEYCOMB DASHBOARD ── */}
        <div className="relative min-h-[600px] mb-32">
          
          {/* Staggered Pulsing Telemetry Connections (Underlay) */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block overflow-visible z-0 opacity-40">
            <svg width="100%" height="100%" className="w-full h-full" style={{ filter: 'drop-shadow(0 0 8px rgba(253,164,175,0.25))' }}>
              <defs>
                <linearGradient id="results-trace-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.75" />
                  <stop offset="50%" stopColor="#fda4af" stopOpacity="0.75" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.75" />
                </linearGradient>
              </defs>
              <motion.path
                d="M 280,120 L 780,180 L 520,440 L 1020,480"
                stroke="url(#results-trace-grad)"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="14 7"
                animate={{ strokeDashoffset: [-84, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 relative z-10 items-stretch">
            
            {/* Card 1 — Spans 5 Cols, Shifted UP */}
            <motion.div
              style={{ skewX: springSkewX, skewY: springSkewY, y: useTransform(scrollYProgress, [0, 1], [-25, 25]) }}
              className="lg:col-span-5 relative z-10 lg:translate-y-[-16px] will-change-transform"
            >
              <SpotlightCard
                glowColor="rgba(99,102,241,0.22)"
                tiltStrength={10}
                className="bg-[#050713]/40 backdrop-blur-2xl border border-white/5 rounded-3xl p-10 flex flex-col justify-between cursor-default hover:border-white/10 transition-all duration-300 relative overflow-hidden h-full shadow-[0_30px_70px_rgba(0,0,0,0.65)] text-left"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] rounded-t-3xl bg-gradient-to-r from-indigo-500 to-indigo-300 shadow-[0_1px_8px_#6366f1]" />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65 }}
                  className="flex flex-col h-full justify-between"
                >
                  <div className="mt-4 mb-6">
                    <AnimatedCounter target={stats[0].n} suffix={stats[0].suffix} color={stats[0].color} inView={inView} />
                  </div>
                  <div className="space-y-3 mt-8">
                    <div className="font-display font-light text-white text-lg uppercase tracking-wider leading-snug">
                      {stats[0].label}
                    </div>
                    <div className="text-slate-300 text-sm leading-relaxed font-sans font-light">
                      {stats[0].sub}
                    </div>
                  </div>
                </motion.div>
              </SpotlightCard>
            </motion.div>

            {/* Card 2 — Spans 7 Cols, Shifted DOWN */}
            <motion.div
              style={{ skewX: springSkewX, skewY: springSkewY, y: useTransform(scrollYProgress, [0, 1], [40, -40]) }}
              className="lg:col-span-7 relative z-10 lg:translate-y-[28px] will-change-transform"
            >
              <SpotlightCard
                glowColor="rgba(253,164,175,0.22)"
                tiltStrength={10}
                className="bg-[#050713]/40 backdrop-blur-2xl border border-white/5 rounded-3xl p-10 flex flex-col justify-between cursor-default hover:border-white/10 transition-all duration-300 relative overflow-hidden h-full shadow-[0_30px_70px_rgba(0,0,0,0.65)] text-left"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] rounded-t-3xl bg-gradient-to-r from-pink-500 to-pink-300 shadow-[0_1px_8px_#fda4af]" />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: 0.1 }}
                  className="flex flex-col h-full justify-between"
                >
                  <div className="mt-4 mb-6">
                    <AnimatedCounter target={stats[1].n} suffix={stats[1].suffix} color={stats[1].color} inView={inView} />
                  </div>
                  <div className="space-y-3 mt-8">
                    <div className="font-display font-light text-white text-lg uppercase tracking-wider leading-snug">
                      {stats[1].label}
                    </div>
                    <div className="text-slate-300 text-sm leading-relaxed font-sans font-light">
                      {stats[1].sub}
                    </div>
                  </div>
                </motion.div>
              </SpotlightCard>
            </motion.div>

            {/* Card 3 — Spans 7 Cols, Shifted UP */}
            <motion.div
              style={{ skewX: springSkewX, skewY: springSkewY, y: useTransform(scrollYProgress, [0, 1], [-30, 30]) }}
              className="lg:col-span-7 relative z-10 lg:translate-y-[-12px] will-change-transform"
            >
              <SpotlightCard
                glowColor="rgba(99,102,241,0.22)"
                tiltStrength={10}
                className="bg-[#050713]/40 backdrop-blur-2xl border border-white/5 rounded-3xl p-10 flex flex-col justify-between cursor-default hover:border-white/10 transition-all duration-300 relative overflow-hidden h-full shadow-[0_30px_70px_rgba(0,0,0,0.65)] text-left"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] rounded-t-3xl bg-gradient-to-r from-indigo-500 to-indigo-300 shadow-[0_1px_8px_#6366f1]" />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: 0.2 }}
                  className="flex flex-col h-full justify-between"
                >
                  <div className="mt-4 mb-6">
                    <AnimatedCounter target={stats[2].n} suffix={stats[2].suffix} color={stats[2].color} inView={inView} />
                  </div>
                  <div className="space-y-3 mt-8">
                    <div className="font-display font-light text-white text-lg uppercase tracking-wider leading-snug">
                      {stats[2].label}
                    </div>
                    <div className="text-slate-300 text-sm leading-relaxed font-sans font-light">
                      {stats[2].sub}
                    </div>
                  </div>
                </motion.div>
              </SpotlightCard>
            </motion.div>

            {/* Card 4 — Spans 5 Cols, Shifted DOWN */}
            <motion.div
              style={{ skewX: springSkewX, skewY: springSkewY, y: useTransform(scrollYProgress, [0, 1], [35, -35]) }}
              className="lg:col-span-5 relative z-10 lg:translate-y-[32px] will-change-transform"
            >
              <SpotlightCard
                glowColor="rgba(253,164,175,0.22)"
                tiltStrength={10}
                className="bg-[#050713]/40 backdrop-blur-2xl border border-white/5 rounded-3xl p-10 flex flex-col justify-between cursor-default hover:border-white/10 transition-all duration-300 relative overflow-hidden h-full shadow-[0_30px_70px_rgba(0,0,0,0.65)] text-left"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] rounded-t-3xl bg-gradient-to-r from-pink-500 to-pink-300 shadow-[0_1px_8px_#fda4af]" />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: 0.3 }}
                  className="flex flex-col h-full justify-between"
                >
                  <div className="mt-4 mb-6">
                    <AnimatedCounter target={stats[3].n} suffix={stats[3].suffix} color={stats[3].color} inView={inView} />
                  </div>
                  <div className="space-y-3 mt-8">
                    <div className="font-display font-light text-white text-lg uppercase tracking-wider leading-snug">
                      {stats[3].label}
                    </div>
                    <div className="text-slate-300 text-sm leading-relaxed font-sans font-light">
                      {stats[3].sub}
                    </div>
                  </div>
                </motion.div>
              </SpotlightCard>
            </motion.div>

          </div>
        </div>

        {/* Supporting proof list and conclusion quotes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16 text-left">
            {[
              'Reduced ad waste by up to 40%',
              'Increased conversion rates through smarter funnels',
              'Helped brands scale with sustainable acquisition systems',
              'Built long-term growth strategies instead of short-term hacks',
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-[#050713]/40 border border-white/5 hover:border-indigo-500/10 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
              >
                <span className="text-[#6366f1] font-black text-lg flex-shrink-0 mt-0.5">✓</span>
                <span className="text-slate-300 font-medium text-sm leading-relaxed font-sans font-light">{item}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center bg-[#050713]/40 border border-white/5 p-8 rounded-3xl backdrop-blur-2xl">
            <p className="text-xl md:text-2xl font-display font-light text-slate-400 italic">"We don't promise viral."</p>
            <p className="text-2xl md:text-3xl font-display font-light text-white mt-3">
              We promise strategic growth that lasts.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
