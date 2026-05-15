import SpotlightCard from './SpotlightCard';
import HorizontalScrollSection from './HorizontalScrollSection';

// SVG icon paths — no emojis
const services = [
  {
    title: 'AI-Powered Performance Marketing',
    desc: 'Ads that focus on profitability — not vanity metrics.',
    color: 'blue',
    stat: '12x ROAS',
    iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    title: 'SEO & Organic Growth',
    desc: 'Get discovered by the right audience consistently.',
    color: 'orange',
    stat: '#1 Rankings',
    iconPath: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
  },
  {
    title: 'Branding & Positioning',
    desc: 'Build a brand people trust, remember, and choose.',
    color: 'blue',
    stat: 'Premium Brand',
    iconPath: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
  },
  {
    title: 'Website Design & Conversion',
    desc: 'Beautiful websites designed to convert visitors into customers.',
    color: 'orange',
    stat: '3x Conversion',
    iconPath: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
  {
    title: 'AI Automation Systems',
    desc: 'Save time. Reduce manual work. Scale efficiently.',
    color: 'blue',
    stat: '80% Time Saved',
    iconPath: 'M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18',
  },
  {
    title: 'Social Media Strategy',
    desc: 'Content that builds authority and drives engagement.',
    color: 'orange',
    stat: '10x Reach',
    iconPath: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z',
  },
  {
    title: 'Funnel & Lead Generation',
    desc: 'Turn attention into predictable revenue.',
    color: 'blue',
    stat: 'Predictable ROI',
    iconPath: 'M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z',
  },
];

export default function Services() {
  return (
    <HorizontalScrollSection
      eyebrow="What We Do"
      title={<>Services Built for <span className="text-brand">Real Growth</span></>}
      className="section-white"
      id="services"
    >
      {services.map((svc, i) => {
        const stroke = svc.color === 'orange' ? '#F97316' : '#2563EB';
        const iconBg  = svc.color === 'orange'
          ? 'linear-gradient(135deg,#ffedd5,#fed7aa)'
          : 'linear-gradient(135deg,#dbeafe,#bfdbfe)';

        return (
          <SpotlightCard
            key={i}
            glowColor={svc.color === 'orange' ? 'rgba(249,115,22,0.22)' : 'rgba(37,99,235,0.22)'}
            tiltStrength={12}
            className="w-[340px] h-[420px] flex-shrink-0 flex flex-col justify-between bg-white border border-gray-100 rounded-2xl p-9 cursor-default group"
            style={{ boxShadow: '0 4px 24px rgba(15,23,42,0.07)' }}
          >
            {/* Index number */}
            <div className={`absolute top-6 right-6 text-xs font-black tracking-widest ${svc.color === 'orange' ? 'text-orange-200' : 'text-blue-100'}`}>
              {String(i + 1).padStart(2, '0')}
            </div>

            <div>
              {/* SVG Icon box */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-7 transition-transform duration-400 group-hover:scale-110"
                style={{ background: iconBg }}
              >
                <svg className="w-8 h-8" fill="none" stroke={stroke} strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={svc.iconPath} />
                </svg>
              </div>

              <h3 className="text-xl font-display font-bold text-textMain mb-3 leading-snug">{svc.title}</h3>
              <p className="text-textBody leading-relaxed text-sm">{svc.desc}</p>
            </div>

            {/* Bottom accent */}
            <div className="flex items-center justify-between">
              <div className={`h-[3px] flex-1 mr-4 rounded-full ${svc.color === 'orange' ? 'bg-gradient-to-r from-orange-400 to-orange-600' : 'bg-gradient-to-r from-blue-500 to-blue-700'}`} />
              <span className={`text-xs font-black px-3 py-1.5 rounded-full ${svc.color === 'orange' ? 'bg-orange-50 text-orange-600' : 'bg-blue-50 text-blue-700'}`}>
                {svc.stat}
              </span>
            </div>
          </SpotlightCard>
        );
      })}

      {/* Final "Get Started" card — SVG rocket instead of emoji */}
      <div className="w-[300px] h-[420px] flex-shrink-0 flex flex-col items-center justify-center text-center bg-gradient-to-br from-brandBlue to-brandOrange rounded-2xl p-9 cursor-pointer shadow-2xl">
        <div className="w-20 h-20 rounded-full bg-white/20 border-2 border-white/30 flex items-center justify-center mb-6 shadow-lg">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="text-2xl font-display font-black text-white mb-4">Ready to start?</h3>
        <p className="text-white/80 mb-8 text-sm leading-relaxed">Book a free strategy call today and let's build your growth engine.</p>
        <a href="#contact" className="bg-white text-brandBlue font-black px-8 py-3 rounded-xl text-sm hover:scale-105 transition-transform">
          Book Free Call →
        </a>
      </div>
    </HorizontalScrollSection>
  );
}
