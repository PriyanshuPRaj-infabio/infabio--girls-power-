import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SpotlightCard from './SpotlightCard';

// SVG icon paths for each feature — no emojis
const features = [
  {
    label: 'Attention to Detail',
    color: 'blue',
    iconPath: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7',
    desc: 'Every campaign element is reviewed meticulously.',
  },
  {
    label: 'Long-Term Thinking',
    color: 'orange',
    iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    desc: 'We build systems that compound over time.',
  },
  {
    label: 'Resource Optimization',
    color: 'blue',
    iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    desc: 'Maximum output from every rupee invested.',
  },
  {
    label: 'Emotional Intelligence',
    color: 'orange',
    iconPath: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    desc: 'We understand brands and audiences at a deeper level.',
  },
  {
    label: 'Consistency',
    color: 'blue',
    iconPath: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
    desc: 'Reliable execution, month after month.',
  },
  {
    label: 'Strategic Planning',
    color: 'orange',
    iconPath: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
    desc: 'Every move is calculated before it\'s made.',
  },
];

const taglines = [
  'Smart marketing with feminine precision.',
  'Built with empathy. Driven by performance.',
  'Strategy first. Execution always.',
  'Built with care. Driven by results.',
];

export default function Difference() {
  const [taglineIdx, setTaglineIdx] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  useEffect(() => {
    const t = setInterval(() => setTaglineIdx(p => (p + 1) % taglines.length), 3400);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="section-white py-32 relative overflow-hidden bg-transparent" id="difference">
      {/* Background radial atmosphere overlay */}
      <div className="absolute top-1/2 left-[-10%] w-[50%] h-[50%] -translate-y-1/2 rounded-full bg-pink-950/8 blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-[-10%] w-[45%] h-[45%] rounded-full bg-indigo-950/10 blur-[130px] pointer-events-none" />

      <div className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center px-6">

        {/* LEFT: Editorial Heading Stack — Spans 5 cols */}
        <div className="lg:col-span-5 space-y-8 text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <span className="eyebrow inline-block">The Difference</span>
            <h2 className="text-5xl md:text-[4rem] font-display font-light text-white leading-[1.05] tracking-tight">
              Why Women-Powered, <br />
              <span className="text-transparent bg-clip-text bg-brand-gradient italic font-normal pr-4">
                Open for All
              </span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed font-sans font-light">
              We hire skills and don't differentiate basis gender, age, or background — but our motto is{' '}
              <strong className="text-brandOrange font-black text-xl tracking-wider ml-1">
                GO - GIRLS
              </strong>
            </p>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base font-sans font-light">
              The same mindset that manages homes, budgets, and families with efficiency — now powers your business growth.
            </p>
          </motion.div>

          {/* Animated rotating tagline */}
          <div className="min-h-[105px] flex items-center bg-[#050713]/40 border border-white/5 p-6 rounded-2xl backdrop-blur-2xl relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
            <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-gradient-to-b from-[#fda4af] to-[#6366f1]" />
            <AnimatePresence mode="wait">
              <motion.p
                key={taglineIdx}
                initial={{ opacity: 0, y: 12, filter: 'blur(3px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -12, filter: 'blur(3px)' }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg md:text-xl font-display font-light text-white pl-4 italic leading-relaxed"
              >
                "{taglines[taglineIdx]}"
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT: Expandable Modular list panels — Spans 7 cols */}
        <div className="lg:col-span-7 space-y-4">
          {features.map((feat, i) => {
            const isHovered = hoveredIdx === i;
            const glowColor = feat.color === 'blue' ? 'rgba(99,102,241,0.18)' : 'rgba(253,164,175,0.18)';
            const glowBorder = feat.color === 'blue' ? 'rgba(192, 132, 252, 0.35)' : 'rgba(253, 164, 175, 0.35)';

            return (
              <motion.div
                key={feat.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <div
                  className="bg-[#050713]/40 backdrop-blur-2xl border border-white/5 rounded-2xl p-6 transition-all duration-500 cursor-pointer relative overflow-hidden"
                  style={{
                    boxShadow: isHovered ? `0 15px 35px ${glowColor}` : '0 4px 20px rgba(0,0,0,0.2)',
                    borderColor: isHovered ? glowBorder : 'rgba(255,255,255,0.05)',
                    transform: isHovered ? 'translateY(-2px)' : 'none',
                  }}
                >
                  {/* Subtle inner linear neon glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 10% 20%, ${glowColor}, transparent 50%)`,
                    }}
                  />

                  <div className="flex items-center gap-6 relative z-10 text-left">
                    {/* SVG Icon sphere */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/5 transition-transform duration-300 shadow-md"
                      style={{
                        background: feat.color === 'blue'
                          ? 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(99,102,241,0.03))'
                          : 'linear-gradient(135deg, rgba(253,164,175,0.15), rgba(253,164,175,0.03))',
                        transform: isHovered ? 'scale(1.08)' : 'none',
                      }}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke={feat.color === 'blue' ? '#6366f1' : '#fda4af'}
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d={feat.iconPath} />
                      </svg>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-display font-light text-lg md:text-xl text-white tracking-wide">
                          {feat.label}
                        </span>
                        <span
                          className="text-[10px] font-black uppercase tracking-widest transition-opacity duration-300 font-sans"
                          style={{
                            color: feat.color === 'blue' ? '#c084fc' : '#fda4af',
                            opacity: isHovered ? 1 : 0.4,
                          }}
                        >
                          {feat.color === 'blue' ? 'Precision Detail' : 'Empathy Detail'}
                        </span>
                      </div>

                      {/* Smooth expanding description panel */}
                      <motion.div
                        initial={false}
                        animate={{
                          height: isHovered ? 'auto' : 0,
                          opacity: isHovered ? 1 : 0,
                          marginTop: isHovered ? 8 : 0,
                        }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden pr-6"
                      >
                        <p className="text-slate-300 text-sm leading-relaxed font-sans font-light">
                          {feat.desc}
                        </p>
                      </motion.div>
                    </div>
                  </div>

                  {/* Laser line runner bottom accent */}
                  <div
                    className="absolute bottom-0 left-0 h-[2px] transition-all duration-700"
                    style={{
                      width: isHovered ? '100%' : '0%',
                      background: feat.color === 'blue'
                        ? 'linear-gradient(90deg, #6366f1, #c084fc, transparent)'
                        : 'linear-gradient(90deg, #fda4af, #db2777, transparent)',
                    }}
                  />

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
