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
  useEffect(() => {
    const t = setInterval(() => setTaglineIdx(p => (p + 1) % taglines.length), 3400);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="section-white py-28 relative overflow-hidden" id="difference">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] -translate-y-1/2 rounded-full bg-orange-50/60 blur-[120px] pointer-events-none" />

      <div className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
          >
            <span className="eyebrow mb-5 inline-block">The Difference</span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-textMain leading-tight mt-4 mb-6">
              Why Women-Powered,{' '}
              <span className="text-brand">Open for All</span>
            </h2>
            <p className="text-textBody text-lg leading-relaxed mb-3">
              We hire skills and don't differentiate basis gender, age, or background — but our motto is{' '}
              <strong className="text-brandOrange font-black text-xl">GO - GIRLS</strong>
            </p>
            <p className="text-textMuted leading-relaxed mb-10">
              The same mindset that manages homes, budgets, and families with efficiency — now powers your business growth.
            </p>
          </motion.div>

          {/* Animated rotating tagline */}
          <div className="min-h-[90px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={taglineIdx}
                initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -16, filter: 'blur(4px)' }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="text-xl md:text-2xl font-display font-bold text-textMain border-l-4 border-brandOrange pl-5 italic"
              >
                "{taglines[taglineIdx]}"
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT: Feature grid — no emojis */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {features.map((feat, i) => (
            <SpotlightCard
              key={feat.label}
              glowColor={feat.color === 'blue' ? 'rgba(37,99,235,0.20)' : 'rgba(249,115,22,0.20)'}
              tiltStrength={12}
              className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col gap-3 cursor-default group"
              style={{ boxShadow: '0 2px 12px rgba(15,23,42,0.06)' }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="flex flex-col gap-3"
              >
                {/* Icon box */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: feat.color === 'blue'
                      ? 'linear-gradient(135deg, #dbeafe, #bfdbfe)'
                      : 'linear-gradient(135deg, #ffedd5, #fed7aa)',
                  }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke={feat.color === 'blue' ? '#2563EB' : '#F97316'}
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={feat.iconPath} />
                  </svg>
                </div>

                {/* Label */}
                <span className="font-display font-bold text-sm text-textMain leading-tight">{feat.label}</span>

                {/* Hover underline */}
                <div
                  className={`h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-full ${feat.color === 'blue' ? 'bg-brandBlue' : 'bg-brandOrange'}`}
                />
              </motion.div>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
}
