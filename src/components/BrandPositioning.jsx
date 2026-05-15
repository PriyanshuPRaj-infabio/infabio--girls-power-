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
  const stroke = color === 'orange' ? '#F97316' : '#2563EB';
  const background = bg || (color === 'orange'
    ? 'linear-gradient(135deg,#ffedd5,#fed7aa)'
    : 'linear-gradient(135deg,#dbeafe,#bfdbfe)');
  return (
    <div className={`${dim} rounded-2xl flex items-center justify-center flex-shrink-0`} style={{ background }}>
      <svg className={icon} fill="none" stroke={stroke} strokeWidth={2} viewBox="0 0 24 24">
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
    <section ref={sectionRef} className="section-slate py-28 relative overflow-hidden" id="brand-positioning">
      {/* Parallax blobs */}
      <motion.div style={{ y: blobY  }} className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-50/80 blur-[110px] pointer-events-none" />
      <motion.div style={{ y: blobY2 }} className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-orange-50/60 blur-[110px] pointer-events-none" />

      <div className="container mx-auto relative z-10">

        {/* Word-by-word headline */}
        <div className="max-w-4xl mb-20">
          <span className="eyebrow mb-6 inline-block">Our Philosophy</span>
          <h2 className="text-4xl md:text-6xl font-display font-black text-textMain leading-tight mt-4 mb-6">
            {headlineWords.map((word, i) => {
              const isGradient = i >= 5;
              return (
                <AnimatedWord
                  key={i}
                  word={<span className={isGradient ? 'text-brand' : ''}>{word}</span>}
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
            className="h-1 w-48 rounded-full bg-gradient-to-r from-brandBlue to-brandOrange mb-8"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-3 text-lg text-textBody"
          >
            <p>For years, businesses have been told: <em className="font-bold text-textMain not-italic">"Spend more to grow more."</em></p>
            <p className="font-medium text-textMain">We disagree. At Infabio, we build growth systems that:</p>
          </motion.div>
        </div>

        {/* ── BENTO GRID — no emojis ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-auto gap-5">

          {/* Card 1 — LARGE featured, 7 cols × 2 rows */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="md:col-span-7 md:row-span-2"
          >
            <SpotlightCard
              glowColor="rgba(37,99,235,0.22)"
              tiltStrength={8}
              className="bg-white border border-gray-100 rounded-3xl p-10 h-full min-h-[320px] flex flex-col justify-between group cursor-default relative overflow-hidden"
              style={{ boxShadow: '0 4px 30px rgba(37,99,235,0.10)' }}
            >
              {/* Large background SVG watermark */}
              <div className="absolute -bottom-6 -right-6 opacity-[0.05] pointer-events-none">
                <svg width="160" height="160" fill="none" stroke="#2563EB" strokeWidth={1.2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={items[0].iconPath} />
                </svg>
              </div>

              <div>
                <IconBox iconPath={items[0].iconPath} color="blue" size="lg" />
                <h3 className="text-3xl md:text-4xl font-display font-black text-textMain mb-4 leading-snug mt-6">
                  {items[0].title}
                </h3>
                <p className="text-textBody text-lg leading-relaxed max-w-sm">{items[0].desc}</p>
              </div>

              <div className="flex items-center justify-between mt-8">
                <span className="bg-blue-50 text-brandBlue font-black px-5 py-2 rounded-full text-sm border border-blue-100">
                  {items[0].stat}
                </span>
                <div className="h-[3px] flex-1 mx-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-300 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <span className="text-brandBlue font-black text-2xl">→</span>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 2 — 5 cols */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="md:col-span-5"
          >
            <SpotlightCard
              glowColor="rgba(249,115,22,0.22)"
              tiltStrength={11}
              className="bg-white border border-gray-100 rounded-3xl p-8 h-full min-h-[148px] flex flex-col justify-between group cursor-default relative overflow-hidden"
              style={{ boxShadow: '0 4px 24px rgba(249,115,22,0.08)' }}
            >
              <div className="absolute -bottom-4 -right-4 opacity-[0.05] pointer-events-none">
                <svg width="80" height="80" fill="none" stroke="#F97316" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={items[1].iconPath} />
                </svg>
              </div>
              <div className="flex items-start gap-5">
                <IconBox iconPath={items[1].iconPath} color="orange" />
                <div>
                  <h3 className="text-xl font-display font-black text-textMain mb-2">{items[1].title}</h3>
                  <p className="text-textBody text-sm leading-relaxed">{items[1].desc}</p>
                </div>
              </div>
              <span className="mt-4 self-start bg-orange-50 text-brandOrange font-bold px-4 py-1 rounded-full text-xs border border-orange-100">
                {items[1].stat}
              </span>
            </SpotlightCard>
          </motion.div>

          {/* Card 3 — 5 cols */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="md:col-span-5"
          >
            <SpotlightCard
              glowColor="rgba(37,99,235,0.20)"
              tiltStrength={11}
              className="bg-white border border-gray-100 rounded-3xl p-8 h-full min-h-[148px] flex flex-col justify-between group cursor-default relative overflow-hidden"
              style={{ boxShadow: '0 4px 24px rgba(37,99,235,0.07)' }}
            >
              <div className="absolute -bottom-4 -right-4 opacity-[0.05] pointer-events-none">
                <svg width="80" height="80" fill="none" stroke="#2563EB" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={items[2].iconPath} />
                </svg>
              </div>
              <div className="flex items-start gap-5">
                <IconBox iconPath={items[2].iconPath} color="blue" />
                <div>
                  <h3 className="text-xl font-display font-black text-textMain mb-2">{items[2].title}</h3>
                  <p className="text-textBody text-sm leading-relaxed">{items[2].desc}</p>
                </div>
              </div>
              <span className="mt-4 self-start bg-blue-50 text-brandBlue font-bold px-4 py-1 rounded-full text-xs border border-blue-100">
                {items[2].stat}
              </span>
            </SpotlightCard>
          </motion.div>

          {/* Card 4 — orange accent, 6 cols */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="md:col-span-6"
          >
            <SpotlightCard
              glowColor="rgba(249,115,22,0.25)"
              tiltStrength={10}
              className="rounded-3xl p-8 h-full min-h-[180px] flex flex-col justify-between group cursor-default relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)',
                border: '1px solid rgba(249,115,22,0.18)',
                boxShadow: '0 4px 30px rgba(249,115,22,0.10)',
              }}
            >
              <div className="absolute -top-6 -right-6 opacity-[0.08] pointer-events-none">
                <svg width="120" height="120" fill="none" stroke="#F97316" strokeWidth={1.2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={items[3].iconPath} />
                </svg>
              </div>
              <div>
                <IconBox iconPath={items[3].iconPath} color="orange" bg="rgba(249,115,22,0.12)" />
                <h3 className="text-2xl font-display font-black text-textMain mb-2 mt-5">{items[3].title}</h3>
                <p className="text-textBody text-sm leading-relaxed">{items[3].desc}</p>
              </div>
              <span className="mt-4 self-start bg-white/80 text-brandOrange font-bold px-4 py-1 rounded-full text-xs border border-orange-200">
                {items[3].stat}
              </span>
            </SpotlightCard>
          </motion.div>

          {/* Card 5 — blue accent, 6 cols */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.4 }}
            className="md:col-span-6"
          >
            <SpotlightCard
              glowColor="rgba(37,99,235,0.22)"
              tiltStrength={10}
              className="rounded-3xl p-8 h-full min-h-[180px] flex flex-col justify-between group cursor-default relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
                border: '1px solid rgba(37,99,235,0.15)',
                boxShadow: '0 4px 30px rgba(37,99,235,0.10)',
              }}
            >
              <div className="absolute -top-6 -right-6 opacity-[0.08] pointer-events-none">
                <svg width="120" height="120" fill="none" stroke="#2563EB" strokeWidth={1.2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={items[4].iconPath} />
                </svg>
              </div>
              <div>
                <IconBox iconPath={items[4].iconPath} color="blue" bg="rgba(37,99,235,0.12)" />
                <h3 className="text-2xl font-display font-black text-textMain mb-2 mt-5">{items[4].title}</h3>
                <p className="text-textBody text-sm leading-relaxed">{items[4].desc}</p>
              </div>
              <span className="mt-4 self-start bg-white/80 text-brandBlue font-bold px-4 py-1 rounded-full text-xs border border-blue-200">
                {items[4].stat}
              </span>
            </SpotlightCard>
          </motion.div>

        </div>

        {/* Conclusion */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-center text-2xl md:text-3xl font-display font-bold text-textMuted mt-20 max-w-3xl mx-auto"
        >
          Because smart marketing isn't about spending the most.{' '}
          <span className="text-brand">
            It's about making every rupee work harder.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
