import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SpotlightCard from './SpotlightCard';

const steps = [
  { number: '01', title: 'Understand', desc: 'We study your brand, audience, and business goals deeply.',                             color: 'blue'   },
  { number: '02', title: 'Strategize', desc: 'We create a data-backed growth plan tailored exclusively to your conversion metrics.', color: 'orange' },
  { number: '03', title: 'Execute',    desc: 'From ads to content to automation — we build everything with precision.',               color: 'blue'   },
  { number: '04', title: 'Optimize',   desc: 'We continuously improve campaigns to maximize ROI.',                                   color: 'orange' },
  { number: '05', title: 'Scale',      desc: 'Once profitable systems are working, we scale sustainably.',                           color: 'blue'   },
];

export default function Process() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  
  // High-performance scroll laser animations
  const lineH = useTransform(scrollYProgress, [0.15, 0.75], ['0%', '100%']);

  return (
    <section ref={sectionRef} className="section-white py-32 relative overflow-hidden bg-transparent" id="process">
      {/* Background ambient overlays */}
      <div className="absolute bottom-0 left-0 w-[550px] h-[550px] rounded-full bg-indigo-950/15 blur-[130px] pointer-events-none" />
      <div className="absolute top-10 right-0 w-[550px] h-[550px] rounded-full bg-pink-950/10 blur-[130px] pointer-events-none" />

      <div className="container mx-auto relative z-10 px-6">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-28">
          <span className="eyebrow inline-block mb-4">How We Work</span>
          <h2 className="text-5xl md:text-[4rem] font-display font-light text-white leading-tight">
            Our <span className="text-transparent bg-clip-text bg-brand-gradient italic font-normal pr-4">
              Growth Process
            </span>
          </h2>
        </div>

        {/* ── CENTRAL ALTERNATING TIMELINE (DESKTOP) ── */}
        <div className="relative max-w-5xl mx-auto hidden md:block">
          
          {/* Animated Center Laser Line */}
          <div className="absolute left-1/2 top-10 bottom-10 w-[2px] bg-white/5 -translate-x-1/2">
            <motion.div
              style={{ height: lineH, originY: 0 }}
              className="w-full rounded-full bg-gradient-to-b from-[#6366f1] via-[#fda4af] to-[#6366f1]"
            />
            {/* Scroll-tracked Glowing Laser Bullet Head */}
            <motion.div
              style={{ top: lineH }}
              className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white shadow-[0_0_15px_#6366f1,0_0_30px_#fda4af] z-20 -mt-2 animate-pulse"
            />
          </div>

          <div className="space-y-16">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              const xOffset = isEven ? -40 : 40;

              return (
                <div key={step.number} className="grid grid-cols-12 items-center gap-12 relative z-10">
                  
                  {/* Left Column — Step info if even index */}
                  <div className={`col-span-5 ${isEven ? 'text-right' : 'col-start-8 text-left'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: xOffset }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="group"
                    >
                      <SpotlightCard
                        glowColor={step.color === 'orange' ? 'rgba(253,164,175,0.22)' : 'rgba(99,102,241,0.22)'}
                        tiltStrength={6}
                        className="bg-[#050713]/40 backdrop-blur-2xl border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-all duration-300 shadow-[0_30px_60px_rgba(0,0,0,0.55)]"
                      >
                        <span className={`font-sans font-black text-[10px] uppercase tracking-widest ${step.color === 'orange' ? 'text-[#fda4af]' : 'text-[#c084fc]'}`}>
                          Phase {step.number}
                        </span>
                        <h3 className="text-2xl font-display font-light text-white mt-2 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-slate-300 text-sm leading-relaxed font-sans font-light">{step.desc}</p>
                        
                        <div className={`mt-6 h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-full ${
                          step.color === 'orange' 
                            ? 'bg-gradient-to-r from-pink-500 to-pink-300 shadow-[0_0_8px_#fda4af]' 
                            : 'bg-gradient-to-r from-indigo-500 to-indigo-300 shadow-[0_0_8px_#6366f1]'
                        }`} />
                      </SpotlightCard>
                    </motion.div>
                  </div>

                  {/* Center Node Column — Spans 2 cols (cols 6 & 7) */}
                  <div className="col-span-2 col-start-6 flex justify-center">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-display font-light text-sm text-white shadow-lg border border-white/10 relative z-20 cursor-default ${
                        step.color === 'orange'
                          ? 'bg-gradient-to-br from-pink-500 to-pink-700 shadow-[0_0_20px_rgba(253,164,175,0.35)]'
                          : 'bg-gradient-to-br from-indigo-500 to-indigo-700 shadow-[0_0_20px_rgba(99,102,241,0.35)]'
                      }`}
                    >
                      {step.number}
                      <span className={`absolute inset-0 rounded-full animate-ping opacity-25 ${step.color === 'orange' ? 'bg-pink-400' : 'bg-indigo-500'}`} style={{ animationDuration: '4s' }} />
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* ── MOBILE VERTICAL TIMELINE (sm screens) ── */}
        <div className="relative max-w-3xl mx-auto md:hidden block text-left">
          
          <div className="absolute left-[1.625rem] top-6 bottom-6 w-[2px] bg-white/5">
            <motion.div
              style={{ height: lineH, originY: 0 }}
              className="w-full rounded-full bg-gradient-to-b from-[#6366f1] via-[#fda4af] to-[#6366f1]"
            />
          </div>

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-light text-xs border border-white/10 relative z-10 flex-shrink-0 ${
                  step.color === 'orange' ? 'bg-pink-500 shadow-[0_0_15px_rgba(253,164,175,0.3)]' : 'bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.3)]'
                }`}>
                  {step.number}
                </div>

                <SpotlightCard
                  glowColor={step.color === 'orange' ? 'rgba(253,164,175,0.15)' : 'rgba(99,102,241,0.15)'}
                  tiltStrength={4}
                  className="bg-[#050713]/40 border border-white/5 rounded-2xl p-6 flex-1 backdrop-blur-2xl shadow-md"
                >
                  <h3 className="text-xl font-display font-light text-white mb-1">{step.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed font-sans font-light">{step.desc}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
