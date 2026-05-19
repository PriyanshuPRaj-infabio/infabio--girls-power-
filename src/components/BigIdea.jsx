import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SpotlightCard from './SpotlightCard';

const problems  = ['Chase impressions', 'Increase spend without strategy', 'Focus on reports instead of revenue'];
const solutions = ['Lower unnecessary spending', 'Improve customer acquisition', 'Increase conversion rates', 'Generate sustainable growth'];

export default function BigIdea() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  // Subtle left column parallax adjustments
  const stickyLeftY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <section ref={ref} className="section-slate py-32 relative overflow-hidden bg-transparent" id="big-idea">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-indigo-950/15 blur-[130px] pointer-events-none" />

      <div className="container mx-auto relative z-10 px-6">
        
        {/* DESKTOP SPLIT STORYTELLING (lg screens and above) */}
        <div className="hidden lg:grid grid-cols-12 gap-16 items-start">
          
          {/* LEFT COLUMN: Sticky Title Command Module — Spans 5 cols */}
          <div className="col-span-5 sticky top-32 self-start space-y-6 text-left">
            <motion.div style={{ y: stickyLeftY }} className="space-y-6">
              <span className="eyebrow inline-block">The Big Idea</span>
              <h2 className="text-5xl font-display font-light text-white leading-[1.08] tracking-tight">
                Most agencies spend your money. <br />
                <span className="text-transparent bg-clip-text bg-brand-gradient pr-4 italic font-normal">
                  We protect it.
                </span>
              </h2>
              
              <div className="h-[2px] w-24 bg-gradient-to-r from-[#6366f1] to-[#fda4af] rounded-full mt-8" />
              
              <p className="text-slate-300 text-sm leading-relaxed max-w-sm mt-8 font-sans font-light">
                Scroll to explore our methodology for protecting capital while maximizing commercial growth pipelines.
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Asymmetric tilted overlapping storytelling matrix — Spans 7 cols */}
          <div className="col-span-7 space-y-16 relative text-left">
            
            {/* Decorative Connection Laser Splitter behind cards */}
            <div className="absolute top-[20%] left-[-35px] bottom-[20%] w-[1.5px] bg-gradient-to-b from-[#db2777] via-transparent to-[#6366f1] hidden lg:block z-0 pointer-events-none opacity-40">
              <div className="absolute top-[30%] -left-1 w-2.5 h-2.5 rounded-full bg-pink-400 animate-ping" />
              <div className="absolute bottom-[30%] -left-1 w-2.5 h-2.5 rounded-full bg-indigo-500 animate-ping" />
            </div>

            {/* Panel 1: Problem Card — "The Drift" (Tilted slightly left, positioned back) */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: -4 }}
              whileInView={{ opacity: 1, y: 0, rotate: -2 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 transform-gpu hover:z-30 hover:-translate-y-2 hover:rotate-0 transition-all duration-500 ease-[0.16,1,0.3,1]"
            >
              <SpotlightCard
                glowColor="rgba(219,39,119,0.18)"
                tiltStrength={8}
                className="bg-[#050713]/40 backdrop-blur-2xl border border-pink-950/60 rounded-3xl p-12 shadow-[0_30px_70px_rgba(0,0,0,0.65)] cursor-default relative overflow-hidden"
              >
                {/* Visual watermark */}
                <div className="absolute top-1/2 right-4 -translate-y-1/2 text-[10rem] font-black text-pink-500/5 select-none pointer-events-none">
                  DRIFT
                </div>

                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-pink-950/50 border border-pink-900/30 flex items-center justify-center text-pink-400 font-bold shadow-[0_0_15px_rgba(219,39,119,0.15)]">✕</div>
                  <h3 className="text-lg font-display font-light text-pink-400 uppercase tracking-widest">The Standard Route</h3>
                </div>
                
                <ul className="space-y-6 relative z-10 font-sans font-light">
                  {problems.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="flex items-start gap-4 text-slate-300 font-medium text-lg"
                    >
                      <span className="text-pink-400 mt-1 flex-shrink-0 font-bold">✕</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </SpotlightCard>
            </motion.div>

            {/* Panel 2: Infabio Solution Card — "The Ascent" (Tilted slightly right, overlapping forward) */}
            <motion.div
              initial={{ opacity: 0, y: 60, rotate: 4 }}
              whileInView={{ opacity: 1, y: 0, rotate: 2 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-20 lg:-mt-10 lg:translate-x-6 transform-gpu hover:z-30 hover:-translate-y-2 hover:rotate-0 transition-all duration-500 ease-[0.16,1,0.3,1]"
            >
              <SpotlightCard
                glowColor="rgba(99,102,241,0.22)"
                tiltStrength={8}
                className="bg-[#050713]/65 backdrop-blur-2xl border border-indigo-950/60 rounded-3xl p-12 shadow-[0_30px_70px_rgba(99,102,241,0.15)] relative overflow-hidden cursor-default"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#6366f1] to-[#fda4af] rounded-t-3xl shadow-[0_2px_15px_rgba(99,102,241,0.3)]" />
                
                {/* Visual watermark */}
                <div className="absolute top-1/2 right-4 -translate-y-1/2 text-[10rem] font-black text-indigo-500/5 select-none pointer-events-none">
                  ARMOR
                </div>

                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-indigo-950/50 border border-indigo-900/30 flex items-center justify-center text-[#6366f1] font-bold shadow-[0_0_15px_rgba(99,102,241,0.15)]">✓</div>
                  <h3 className="text-lg font-display font-light text-[#6366f1] uppercase tracking-widest">Infabio Protection</h3>
                </div>

                <p className="text-white text-xl font-display font-light mb-8 leading-relaxed relative z-10">
                  We treat your marketing budget like our own.{' '} <br />
                  <span className="text-slate-400 font-sans font-light text-base mt-2 block">Every campaign is designed to:</span>
                </p>

                <ul className="space-y-6 relative z-10 font-sans font-light">
                  {solutions.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="flex items-start gap-4 text-slate-300 font-medium text-lg"
                    >
                      <span className="text-[#6366f1] mt-1 flex-shrink-0 font-black">✓</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </SpotlightCard>
            </motion.div>

            {/* Panel 3: Conclusion Panel (Tilted back center) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="bg-[#050713]/40 border border-white/5 p-10 rounded-3xl text-left relative z-10 lg:translate-x-3 backdrop-blur-2xl"
            >
              <p className="text-2xl md:text-3xl font-display font-light text-slate-400 leading-relaxed">
                Because growth without profitability{' '}
                <span className="text-white underline decoration-[#fda4af] underline-offset-8 decoration-2 block mt-2">
                  is not growth.
                </span>
              </p>
            </motion.div>

          </div>
        </div>

        {/* MOBILE FALLBACK (Standard Responsive layout for sm/md screen sizes) */}
        <div className="lg:hidden block space-y-12 text-left">
          
          <div className="text-left max-w-3xl mx-auto mb-16">
            <span className="eyebrow mb-4 inline-block">The Big Idea</span>
            <h2 className="text-4xl md:text-5xl font-display font-light text-white leading-tight mt-4">
              Most agencies spend your money.{' '}
              <span className="text-transparent bg-clip-text bg-brand-gradient pr-4 italic font-normal block mt-1">We protect it.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Problems */}
            <SpotlightCard
              glowColor="rgba(219,39,119,0.1)"
              tiltStrength={8}
              className="bg-[#050713]/50 border border-pink-950/50 rounded-2xl p-8 backdrop-blur-2xl shadow-md text-left"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-pink-950/50 flex items-center justify-center text-pink-500 font-bold">✕</div>
                <h3 className="text-lg font-display font-light text-pink-500 uppercase tracking-wider">Many agencies</h3>
              </div>
              <ul className="space-y-4 font-sans font-light">
                {problems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                    <span className="text-pink-400 mt-0.5 font-bold">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </SpotlightCard>

            {/* Solution */}
            <SpotlightCard
              glowColor="rgba(99,102,241,0.15)"
              tiltStrength={8}
              className="bg-[#050713]/60 border border-indigo-950/50 rounded-2xl p-8 backdrop-blur-2xl shadow-md text-left"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-950/50 flex items-center justify-center text-[#6366f1] font-bold">✓</div>
                <h3 className="text-lg font-display font-light text-[#6366f1] uppercase tracking-wider">At Infabio</h3>
              </div>
              <p className="text-white text-sm font-display font-light mb-4 leading-relaxed">
                We treat your marketing budget like our own.
              </p>
              <ul className="space-y-3 font-sans font-light">
                {solutions.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                    <span className="text-[#6366f1] mt-0.5 font-black">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </div>

          <div className="text-left pt-8">
            <p className="text-xl font-display font-light text-slate-400 max-w-xl mx-auto leading-relaxed">
              Because growth without profitability{' '}
              <span className="text-transparent bg-clip-text bg-brand-gradient pr-4 italic font-normal block mt-2 text-2xl">is not growth.</span>
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
