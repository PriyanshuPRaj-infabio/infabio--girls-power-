import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SpotlightCard from './SpotlightCard';

// SVG icon paths — no emojis
const industries = [
  {
    name: 'Startups',
    color: 'blue',
    iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
    desc: 'Early-stage brands scaling fast',
  },
  {
    name: 'D2C Brands',
    color: 'orange',
    iconPath: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
    desc: 'Direct-to-consumer growth systems',
  },
  {
    name: 'Coaches & Creators',
    color: 'blue',
    iconPath: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z',
    desc: 'Personal brands built to convert',
  },
  {
    name: 'Clinics & Wellness',
    color: 'orange',
    iconPath: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    desc: 'Trust-driven healthcare marketing',
  },
  {
    name: 'Fashion & Beauty',
    color: 'blue',
    iconPath: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
    desc: 'Aesthetic brands with real ROI',
  },
  {
    name: 'SaaS Companies',
    color: 'orange',
    iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    desc: 'B2B & B2C software growth marketing',
  },
  {
    name: 'Local Businesses',
    color: 'blue',
    iconPath: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
    desc: 'Hyperlocal digital domination',
  },
  {
    name: 'Women-Led Businesses',
    color: 'special',
    iconPath: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
    desc: 'Built with a special heart for you',
    highlight: true,
  },
];

export default function Industries() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  
  // Parallax transitions for columns
  const leftColumnY = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const rightColumnY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  // Divide industries into two balanced columns
  const leftIndustries = industries.filter((_, i) => i % 2 === 0);
  const rightIndustries = industries.filter((_, i) => i % 2 !== 0);

  return (
    <section ref={sectionRef} className="section-slate py-32 relative overflow-hidden" id="industries">
      {/* Background ambient atmospheres */}
      <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-950/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-15%] w-[450px] h-[450px] rounded-full bg-orange-950/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        
        {/* Dynamic Editorial Split Intro Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 space-y-4">
            <span className="eyebrow inline-block">Who We Work With</span>
            <h2 className="text-4xl md:text-6xl font-display font-black text-white leading-[1.08] tracking-tight">
              Open to all brands. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandBlue to-brandOrange animate-glow-pulse bg-[length:200%_auto]">
                Especially built
              </span> for founders who want smarter growth.
            </h2>
          </div>
          <div className="lg:col-span-5 relative">
            <SpotlightCard
              glowColor="rgba(59,130,246,0.18)"
              tiltStrength={6}
              className="bg-[#090D16]/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-left relative overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.4)]"
            >
              {/* Orange left accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-brandBlue to-brandOrange rounded-l-2xl" />
              <p className="pl-4 text-slate-300 text-base leading-relaxed">
                We prioritise <strong className="text-white">women entrepreneurs</strong> building bold ideas with limited resources — because we understand the value of every rupee invested.
              </p>
            </SpotlightCard>
          </div>
        </div>

        {/* Dual-Track Splitting Parallax Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
          
          {/* LEFT COLUMN: Slides UP */}
          <motion.div style={{ y: leftColumnY }} className="space-y-8 lg:space-y-12">
            {leftIndustries.map((ind, i) => {
              const iconColor = '#3b82f6';
              const iconBg = 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(59,130,246,0.03))';
              const glowColor = 'rgba(59,130,246,0.18)';

              return (
                <SpotlightCard
                  key={ind.name}
                  glowColor={glowColor}
                  tiltStrength={12}
                  className="bg-[#090D16]/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col gap-4 cursor-default group transition-all duration-300 hover:border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
                >
                  <div className="flex flex-col gap-4">
                    {/* Icon box */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/5"
                      style={{ background: iconBg }}
                    >
                      <svg className="w-6 h-6" fill="none" stroke={iconColor} strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d={ind.iconPath} />
                      </svg>
                    </div>

                    <div>
                      <h3 className="font-display font-black text-lg md:text-xl text-white tracking-wide">
                        {ind.name}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed mt-2">{ind.desc}</p>
                    </div>

                    <div className="h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-full bg-brandBlue shadow-[0_0_8px_#3b82f6]" />
                  </div>
                </SpotlightCard>
              );
            })}
          </motion.div>

          {/* RIGHT COLUMN: Slides DOWN */}
          <motion.div style={{ y: rightColumnY }} className="space-y-8 lg:space-y-12 md:mt-16">
            {rightIndustries.map((ind, i) => {
              const isSpecial = ind.highlight;
              const iconColor = isSpecial ? '#f97316' : '#f97316';
              const iconBg = isSpecial ? 'linear-gradient(135deg, rgba(249,115,22,0.15), rgba(249,115,22,0.03))' : 'linear-gradient(135deg, rgba(249,115,22,0.15), rgba(249,115,22,0.03))';
              const glowColor = isSpecial ? 'rgba(249,115,22,0.25)' : 'rgba(249,115,22,0.18)';

              return (
                <SpotlightCard
                  key={ind.name}
                  glowColor={glowColor}
                  tiltStrength={12}
                  className={`bg-[#090D16]/50 backdrop-blur-xl rounded-3xl p-8 flex flex-col gap-4 cursor-default group transition-all duration-300 hover:border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.35)] ${
                    isSpecial ? 'border-2 border-orange-500/40 shadow-[0_15px_40px_rgba(249,115,22,0.18)]' : 'border border-white/10'
                  }`}
                >
                  <div className="flex flex-col gap-4">
                    {/* Icon box */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/5"
                      style={{ background: iconBg }}
                    >
                      <svg className="w-6 h-6" fill="none" stroke={iconColor} strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d={ind.iconPath} />
                      </svg>
                    </div>

                    <div>
                      <h3 className={`font-display font-black text-lg md:text-xl tracking-wide ${isSpecial ? 'text-brandOrange' : 'text-white'}`}>
                        {ind.name}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed mt-2">{ind.desc}</p>
                    </div>

                    {isSpecial ? (
                      <span className="text-xs font-bold text-brandOrange bg-orange-950/40 border border-orange-900/40 px-3 py-1 rounded-full inline-block w-fit shadow-[0_0_10px_rgba(249,115,22,0.15)] mt-1">
                        Featured Target
                      </span>
                    ) : (
                      <div className="h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-full bg-brandOrange shadow-[0_0_8px_#f97316]" />
                    )}
                  </div>
                </SpotlightCard>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
