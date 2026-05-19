import { useState } from 'react';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';
import SpotlightCard from './SpotlightCard';

const deck = [
  {
    title: 'Grow Confidently',
    desc: 'Launch campaigns backed by data, not guesswork, to capture and retain organic market attention.',
    color: 'blue',
    rotation: -10,
    hoverRotation: -16,
    xOffset: -40,
  },
  {
    title: 'Scale Sustainably',
    desc: 'Construct self-funding client acquisition cycles that compound value with every single rupee.',
    color: 'orange',
    rotation: -3,
    hoverRotation: -6,
    xOffset: -10,
  },
  {
    title: 'Build Authority',
    desc: 'Position your brand as the obvious, unforgettable segment leader through high-end narrative design.',
    color: 'blue',
    rotation: 4,
    hoverRotation: 6,
    xOffset: 20,
  },
  {
    title: 'Compete Smarter',
    desc: 'Outmaneuver heavy spenders using micro-targeted, high-efficiency digital funnel infrastructure.',
    color: 'orange',
    rotation: 11,
    hoverRotation: 18,
    xOffset: 50,
  },
];

export default function Founders() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="section-slate py-32 relative overflow-hidden bg-transparent" id="founders">
      {/* Soft atmospheric background lights */}
      <div className="absolute top-1/4 right-[-10%] w-[550px] h-[550px] rounded-full bg-pink-950/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[450px] h-[450px] rounded-full bg-indigo-950/15 blur-[120px] pointer-events-none" />

      <div className="container mx-auto relative z-10 px-6">
        <div className="bg-[#050713]/40 backdrop-blur-2xl border border-white/5 rounded-3xl p-12 lg:p-20 shadow-[0_30px_70px_rgba(0,0,0,0.65)] max-w-6xl mx-auto relative overflow-hidden">
          
          {/* Top Gradient Laser Edge */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#6366f1] via-[#fda4af] to-[#6366f1] shadow-[0_2px_15px_rgba(99,102,241,0.3)]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* LEFT COLUMN: Editorial Context — Spans 6 cols */}
            <div className="lg:col-span-6 space-y-8 text-left">
              <span className="eyebrow">For Women Founders</span>
              <h2 className="text-5xl md:text-[4rem] font-display font-light text-white leading-[1.05] tracking-tight mt-4">
                Built for ambitious <br />
                <span className="text-transparent bg-clip-text bg-brand-gradient pr-4 italic font-normal">
                  women founders.
                </span>
              </h2>

              <div className="space-y-4 text-slate-300 text-base leading-relaxed max-w-md font-sans font-light">
                <p>Starting and scaling a business is hard. Especially when every rupee matters.</p>
                <p>That's why we create marketing systems that help women-led brands scale sustainably.</p>
              </div>

              <div className="border-l-[3px] border-pink-300 pl-6 py-2 my-8">
                <p className="text-xl font-display font-light text-white leading-relaxed">
                  "You focus on your vision.{' '}
                  <span className="text-indigo-400 italic">We'll handle the growth engine."</span>
                </p>
              </div>

              <div className="pt-4">
                <MagneticButton className="btn-primary text-sm px-8 py-4 rounded-xl uppercase tracking-wider font-bold shadow-[0_0_20px_rgba(99,102,241,0.25)]">
                  Let's Build Together →
                </MagneticButton>
              </div>
            </div>

            {/* RIGHT COLUMN: Interactive 3D Fanned Card Deck — Spans 6 cols */}
            <div
              className="lg:col-span-6 flex justify-center items-center min-h-[460px] relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative w-[300px] h-[340px] flex items-center justify-center">
                
                {deck.map((card, i) => {
                  const strokeColor = card.color === 'orange' ? 'rgba(253,164,175,0.3)' : 'rgba(99,102,241,0.3)';
                  const activeGlow = card.color === 'orange' ? 'rgba(253,164,175,0.1)' : 'rgba(99,102,241,0.1)';

                  return (
                    <motion.div
                      key={card.title}
                      className="absolute w-full h-full cursor-pointer will-change-transform text-left"
                      animate={{
                        x: isHovered ? card.xOffset : 0,
                        y: isHovered ? -15 : 0,
                        rotate: isHovered ? card.hoverRotation : card.rotation,
                        zIndex: 10 + i,
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 70,
                        damping: 15,
                        mass: 0.8,
                      }}
                    >
                      <SpotlightCard
                        glowColor={card.color === 'orange' ? 'rgba(253,164,175,0.22)' : 'rgba(99,102,241,0.22)'}
                        tiltStrength={6}
                        className="w-full h-full bg-[#050713]/90 backdrop-blur-2xl rounded-3xl p-8 flex flex-col justify-between select-none relative"
                        style={{
                          border: `1px solid ${isHovered ? strokeColor : 'rgba(255,255,255,0.06)'}`,
                          boxShadow: isHovered
                            ? `0 15px 35px ${activeGlow}, 0 20px 45px rgba(0,0,0,0.5)`
                            : '0 8px 30px rgba(0,0,0,0.4)',
                        }}
                      >
                        <div>
                          {/* Colored corner tag */}
                          <div className={`w-3 h-3 rounded-full mb-6 ${
                            card.color === 'orange'
                              ? 'bg-[#fda4af] shadow-[0_0_8px_#fda4af]'
                              : 'bg-[#6366f1] shadow-[0_0_8px_#6366f1]'
                          }`} />
                          
                          <h3 className="text-xl font-display font-light text-white leading-snug">
                            {card.title}
                          </h3>
                        </div>

                        <p className="text-slate-400 text-xs leading-relaxed mt-4 font-sans font-light">
                          {card.desc}
                        </p>

                        <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/5">
                          <span className={`text-[10px] font-sans font-black uppercase tracking-widest ${
                            card.color === 'orange' ? 'text-[#fda4af]' : 'text-[#c084fc]'
                          }`}>
                            Pillar {String(i + 1).padStart(2, '0')}
                          </span>
                          <span className="text-white/20 font-black text-sm">→</span>
                        </div>
                      </SpotlightCard>
                    </motion.div>
                  );
                })}

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
