import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import SpotlightCard from './SpotlightCard';

// SVG icon paths for each bento card — no emojis
const items = [
  {
    title: 'Reduce Ad Waste',
    desc: 'We tune bids, audiences, and creative to squeeze every rupee for maximum performance.',
    color: 'blue',
    size: 'large',
    stat: '40% saved',
    iconPath: 'M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6',
    bgDecorPath: 'M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6',
  },
  {
    title: 'Improve Conversions',
    desc: 'Conversion systems built around clarity, trust, and measurable upgrades.',
    color: 'orange',
    size: 'medium',
    stat: '3x uplift',
    iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    title: 'Strong Brand Positioning',
    desc: 'Your message becomes the premium signal that attracts the right audience.',
    color: 'blue',
    size: 'small',
    stat: 'Brand authority',
    iconPath: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
  },
  {
    title: 'Deliver Measurable ROI',
    desc: 'Everything we do is designed for growth backed by extreme accountability.',
    color: 'orange',
    size: 'small',
    stat: 'Full transparency',
    iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  },
  {
    title: 'Scale Sustainably',
    desc: 'Build profitable systems first — then grow without burning the engine.',
    color: 'blue',
    size: 'medium',
    stat: 'Long-term growth',
    iconPath: 'M7 11l5-5m0 0l5 5m-5-5v12',
  },
];

// Helper to render an SVG icon box
function IconBox({ iconPath, color, size = 'md', bg }) {
  const dim  = size === 'lg' ? 'w-16 h-16' : 'w-12 h-12';
  const icon = size === 'lg' ? 'w-8 h-8'   : 'w-5 h-5';
  const stroke = color === 'orange' ? '#fda4af' : '#6366f1';
  const background = bg || (color === 'orange'
    ? 'linear-gradient(135deg, rgba(253, 164, 175, 0.15), rgba(253, 164, 175, 0.03))'
    : 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(99, 102, 241, 0.03))');
  return (
    <div 
      className={`${dim} rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/5 relative overflow-hidden`} 
      style={{ background }}
    >
      {/* Tiny central aura */}
      <div 
        className="absolute inset-0 blur-lg opacity-40" 
        style={{ background: color === 'orange' ? '#fda4af' : '#6366f1' }}
      />
      <svg className={`${icon} relative z-10`} fill="none" stroke={stroke} strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
      </svg>
    </div>
  );
}

function AnimatedWord({ word, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className="inline-block mr-[0.28em]"
    >
      {word}
    </motion.span>
  );
}

export default function BrandPositioning() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const blobY  = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const blobY2 = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const headlineWords = ['Marketing', "doesn't", 'need', 'bigger', 'budgets.', 'It', 'needs', 'smarter', 'decisions.'];

  return (
    <section ref={sectionRef} className="section-slate py-28 relative overflow-hidden bg-transparent" id="brand-positioning">
      {/* Parallax glows */}
      <motion.div style={{ y: blobY  }} className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-indigo-950/15 blur-[140px] pointer-events-none" />
      <motion.div style={{ y: blobY2 }} className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-pink-950/10 blur-[130px] pointer-events-none" />

      <div className="container mx-auto relative z-10 px-6">

        {/* Word-by-word headline */}
        <div className="max-w-4xl mb-20 text-left">
          <span className="eyebrow mb-6 inline-block">Our Philosophy</span>
          <h2 className="text-5.5xl md:text-7xl font-display font-light text-white leading-tight mt-4 mb-6">
            {headlineWords.map((word, i) => {
              const isGradient = i >= 5;
              return (
                <AnimatedWord
                  key={i}
                  word={<span className={isGradient ? 'text-brand italic font-normal' : ''}>{word}</span>}
                  delay={i * 0.07}
                />
              );
            })}
          </h2>
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="h-[2px] w-48 rounded-full bg-gradient-to-r from-brandBlue to-brandOrange mb-8"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-3 text-lg text-slate-300 font-sans font-light"
          >
            <p>For years, businesses have been told: <em className="font-bold text-white not-italic">"Spend more to grow more."</em></p>
            <p className="font-semibold text-white">We disagree. At Infabio, we build growth systems that:</p>
          </motion.div>
        </div>

        {/* ── HIGHLY ASYMMETRIC CONSTELLATION NODE GRID ── */}
        <div className="relative min-h-[900px] mt-16">
          
          {/* Pulsing Connecting Laser Traces (Underlay) */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block overflow-visible z-0 opacity-60">
            <svg width="100%" height="100%" className="w-full h-full" style={{ filter: 'drop-shadow(0 0 10px rgba(99,102,241,0.4))' }}>
              <defs>
                <linearGradient id="trace-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#fda4af" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="trace-grad-2" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#fda4af" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              {/* Dynamic Connecting Laser Paths */}
              <motion.path
                d="M 350,300 L 750,180"
                stroke="url(#trace-grad-1)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="12 6"
                animate={{ strokeDashoffset: [-60, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <motion.path
                d="M 750,180 L 1050,450"
                stroke="url(#trace-grad-2)"
                strokeWidth="2.5"
                fill="none"
                strokeDasharray="16 8"
                animate={{ strokeDashoffset: [0, 60] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              <motion.path
                d="M 350,300 L 220,550"
                stroke="url(#trace-grad-2)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="10 5"
                animate={{ strokeDashoffset: [-50, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              />
              <motion.path
                d="M 220,550 L 700,750"
                stroke="url(#trace-grad-1)"
                strokeWidth="2.2"
                fill="none"
                strokeDasharray="14 7"
                animate={{ strokeDashoffset: [0, 78] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 relative z-10 items-stretch">
            
            {/* Card 1 — GIGANTIC FEATURED ANCHOR (Left, Spans 7 Cols) */}
            <motion.div
              className="lg:col-span-7"
              style={{ y: useTransform(scrollYProgress, [0, 1], [-40, 40]) }}
            >
              <SpotlightCard
                glowColor="rgba(99,102,241,0.22)"
                tiltStrength={4}
                className="bg-[#050713]/60 backdrop-blur-2xl border border-white/5 rounded-3xl p-10 min-h-[420px] flex flex-col justify-between group cursor-default relative overflow-hidden h-full shadow-[0_30px_70px_rgba(0,0,0,0.65)]"
              >
                <div className="absolute -bottom-10 -right-10 opacity-[0.03] pointer-events-none text-brandBlue">
                  <svg width="280" height="280" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={items[0].iconPath} />
                  </svg>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <IconBox iconPath={items[0].iconPath} color="blue" size="lg" />
                    <span className="bg-brandBlue/10 text-brandBlue font-black px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest border border-brandBlue/20 shadow-[0_0_15px_rgba(99,102,241,0.15)]">
                      Primary Pillar
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-display font-light text-white mb-5 leading-snug mt-8">
                    {items[0].title}
                  </h3>
                  <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-xl font-sans font-light">{items[0].desc}</p>
                </div>

                <div className="flex items-center justify-between mt-12 relative z-10">
                  <span className="bg-indigo-950/40 text-brandOrange font-black px-6 py-2.5 rounded-2xl text-sm border border-indigo-900/20 shadow-[0_0_15px_rgba(99,102,241,0.12)]">
                    {items[0].stat}
                  </span>
                  <div className="h-[2px] flex-1 mx-6 rounded-full bg-gradient-to-r from-indigo-500 to-pink-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <span className="text-brandBlue font-black text-2xl group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </SpotlightCard>
            </motion.div>

            {/* Card 2 — COMPACT STAGGERED TOP RIGHT (Spans 5 Cols) */}
            <motion.div
              className="lg:col-span-5 lg:translate-y-16"
              style={{ y: useTransform(scrollYProgress, [0, 1], [30, -30]) }}
            >
              <SpotlightCard
                glowColor="rgba(253,164,175,0.2)"
                tiltStrength={6}
                className="bg-[#050713]/60 backdrop-blur-2xl border border-white/5 rounded-3xl p-8 min-h-[300px] flex flex-col justify-between group cursor-default relative overflow-hidden h-full shadow-[0_25px_50px_rgba(0,0,0,0.55)]"
              >
                <div className="absolute -bottom-4 -right-4 opacity-[0.025] pointer-events-none text-brandOrange">
                  <svg width="120" height="120" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={items[1].iconPath} />
                  </svg>
                </div>
                <div>
                  <IconBox iconPath={items[1].iconPath} color="orange" />
                  <h3 className="text-2xl font-display font-light text-white mb-3 mt-6">{items[1].title}</h3>
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed font-sans font-light">{items[1].desc}</p>
                </div>
                <span className="mt-6 self-start bg-pink-950/30 text-brandOrange font-black px-4 py-1.5 rounded-full text-[10px] uppercase tracking-wider border border-pink-900/20 shadow-[0_0_15px_rgba(253,164,175,0.12)] animate-pulse">
                  {items[1].stat}
                </span>
              </SpotlightCard>
            </motion.div>

            {/* Card 3 — ASYMMETRIC STAGGERED MID LEFT (Spans 4 Cols) */}
            <motion.div
              className="lg:col-span-4 lg:translate-y-10"
              style={{ y: useTransform(scrollYProgress, [0, 1], [-20, 20]) }}
            >
              <SpotlightCard
                glowColor="rgba(99,102,241,0.18)"
                tiltStrength={6}
                className="bg-[#050713]/60 backdrop-blur-2xl border border-white/5 rounded-3xl p-8 min-h-[260px] flex flex-col justify-between group cursor-default relative overflow-hidden h-full shadow-[0_25px_50px_rgba(0,0,0,0.55)]"
              >
                <div className="absolute -bottom-4 -right-4 opacity-[0.025] pointer-events-none text-brandBlue">
                  <svg width="120" height="120" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={items[2].iconPath} />
                  </svg>
                </div>
                <div>
                  <IconBox iconPath={items[2].iconPath} color="blue" />
                  <h3 className="text-xl font-display font-light text-white mb-2 mt-5">{items[2].title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed font-sans font-light">{items[2].desc}</p>
                </div>
                <span className="mt-6 self-start bg-indigo-950/30 text-brandBlue font-bold px-4 py-1.5 rounded-full text-[10px] uppercase tracking-wider border border-indigo-900/20 shadow-[0_0_15px_rgba(99,102,241,0.12)]">
                  {items[2].stat}
                </span>
              </SpotlightCard>
            </motion.div>

            {/* Card 4 — STAGGERED CONTRAST WIDE RIGHT (Spans 5 Cols) */}
            <motion.div
              className="lg:col-span-5 lg:translate-y-28"
              style={{ y: useTransform(scrollYProgress, [0, 1], [60, -60]) }}
            >
              <SpotlightCard
                glowColor="rgba(253,164,175,0.22)"
                tiltStrength={5}
                className="rounded-3xl p-8 min-h-[300px] flex flex-col justify-between group cursor-default relative overflow-hidden backdrop-blur-2xl h-full shadow-[0_30px_70px_rgba(0,0,0,0.6)]"
                style={{
                  background: 'linear-gradient(135deg, rgba(253,164,175,0.05) 0%, rgba(5,7,19,0.7) 100%)',
                  border: '1px solid rgba(253,164,175,0.15)',
                }}
              >
                <div className="absolute -top-6 -right-6 opacity-[0.03] pointer-events-none text-brandOrange">
                  <svg width="140" height="140" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={items[3].iconPath} />
                  </svg>
                </div>
                <div>
                  <IconBox iconPath={items[3].iconPath} color="orange" bg="rgba(253,164,175,0.12)" />
                  <h3 className="text-2xl font-display font-light text-white mb-3 mt-6">{items[3].title}</h3>
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed font-sans font-light">{items[3].desc}</p>
                </div>
                <span className="mt-6 self-start bg-pink-950/30 text-brandOrange font-bold px-4 py-1.5 rounded-full text-[10px] uppercase tracking-wider border border-pink-900/20 shadow-[0_0_15px_rgba(253,164,175,0.12)]">
                  {items[3].stat}
                </span>
              </SpotlightCard>
            </motion.div>

            {/* Card 5 — DEEP SPACE SHIFTED ANCHOR (Spans 3 Cols) */}
            <motion.div
              className="lg:col-span-3 lg:translate-y-8"
              style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 10]) }}
            >
              <SpotlightCard
                glowColor="rgba(99,102,241,0.2)"
                tiltStrength={6}
                className="rounded-3xl p-6 min-h-[260px] flex flex-col justify-between group cursor-default relative overflow-hidden backdrop-blur-2xl h-full shadow-[0_30px_70px_rgba(0,0,0,0.6)]"
                style={{
                  background: 'linear-gradient(135deg, rgba(99,102,241,0.05) 0%, rgba(5,7,19,0.7) 100%)',
                  border: '1px solid rgba(99,102,241,0.15)',
                }}
              >
                <div className="absolute -top-4 -right-4 opacity-[0.03] pointer-events-none text-brandBlue">
                  <svg width="100" height="100" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={items[4].iconPath} />
                  </svg>
                </div>
                <div>
                  <IconBox iconPath={items[4].iconPath} color="blue" bg="rgba(99,102,241,0.12)" />
                  <h3 className="text-xl font-display font-light text-white mb-2 mt-5">{items[4].title}</h3>
                  <p className="text-slate-300 text-xs leading-relaxed font-sans font-light">{items[4].desc}</p>
                </div>
                <span className="mt-6 self-start bg-indigo-950/30 text-brandBlue font-bold px-4 py-1.5 rounded-full text-[10px] uppercase tracking-wider border border-indigo-900/20 shadow-[0_0_15px_rgba(99,102,241,0.12)]">
                  {items[4].stat}
                </span>
              </SpotlightCard>
            </motion.div>

          </div>
        </div>

        {/* Conclusion */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-center text-2xl md:text-3xl font-display font-light text-slate-400 mt-28 max-w-3xl mx-auto leading-relaxed px-6"
        >
          Because smart marketing isn't about spending the most.{' '}
          <span className="text-brand block mt-2 italic font-normal">
            It's about making every rupee work harder.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
