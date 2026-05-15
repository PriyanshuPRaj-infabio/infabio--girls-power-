import { motion } from 'framer-motion';
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
  return (
    <section className="section-slate py-28 relative overflow-hidden" id="industries">
      <div className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full bg-blue-50/80 blur-[100px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="eyebrow mb-5 inline-block">Who We Work With</span>
          <h2 className="text-4xl md:text-6xl font-display font-black text-textMain mt-4 mb-8 leading-tight">
            Open to all brands.{' '}
            <span className="text-brand">Especially built</span> for founders who want smarter growth.
          </h2>

          {/* Intro card — clean, no icon */}
          <SpotlightCard
            glowColor="rgba(37,99,235,0.15)"
            tiltStrength={6}
            className="bg-white border border-gray-100 rounded-2xl p-8 text-left mx-auto relative overflow-hidden"
            style={{ boxShadow: '0 4px 24px rgba(15,23,42,0.06)' }}
          >
            {/* Orange left accent bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brandBlue to-brandOrange rounded-l-2xl" />
            <p className="pl-6 text-textBody text-lg leading-relaxed">
              We prioritise <strong className="text-textMain">women entrepreneurs</strong> building bold ideas with limited resources — because we understand the value of every rupee invested.
            </p>
          </SpotlightCard>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((ind, i) => {
            const isSpecial = ind.highlight;
            const iconColor = isSpecial ? '#F97316' : ind.color === 'orange' ? '#F97316' : '#2563EB';
            const iconBg    = isSpecial ? 'linear-gradient(135deg, #ffedd5, #fed7aa)'
              : ind.color === 'orange'  ? 'linear-gradient(135deg, #ffedd5, #fed7aa)'
              : 'linear-gradient(135deg, #dbeafe, #bfdbfe)';
            const glowColor = isSpecial
              ? 'rgba(249,115,22,0.22)'
              : ind.color === 'orange' ? 'rgba(249,115,22,0.18)' : 'rgba(37,99,235,0.18)';

            return (
              <SpotlightCard
                key={ind.name}
                glowColor={glowColor}
                tiltStrength={14}
                className={`bg-white rounded-2xl p-6 flex flex-col gap-3 cursor-default group ${isSpecial ? 'border border-orange-200' : 'border border-gray-100'}`}
                style={{ boxShadow: isSpecial ? '0 4px 24px rgba(249,115,22,0.10)' : '0 2px 12px rgba(15,23,42,0.06)' }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="flex flex-col gap-3"
                >
                  {/* Icon box */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ background: iconBg }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke={iconColor} strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={ind.iconPath} />
                    </svg>
                  </div>

                  {/* Name */}
                  <h3 className={`font-display font-bold text-base leading-snug ${isSpecial ? 'text-brandOrange' : 'text-textMain'}`}>
                    {ind.name}
                  </h3>

                  {/* Short desc */}
                  <p className="text-textMuted text-xs leading-snug">{ind.desc}</p>

                  {/* Special badge */}
                  {isSpecial && (
                    <span className="text-xs font-bold text-brandOrange bg-orange-50 border border-orange-200 px-2 py-0.5 rounded-full inline-block w-fit">
                      Featured
                    </span>
                  )}

                  {/* Hover underline */}
                  {!isSpecial && (
                    <div className={`h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-full ${ind.color === 'orange' ? 'bg-brandOrange' : 'bg-brandBlue'}`} />
                  )}
                </motion.div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
