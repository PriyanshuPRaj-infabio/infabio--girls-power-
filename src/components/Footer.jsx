import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-[#030508] text-white pt-24 pb-8 relative overflow-hidden text-left" role="contentinfo">
      {/* Top Laser Border Gradient */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#6366f1] via-[#fda4af] to-[#6366f1] shadow-[0_1px_15px_rgba(99,102,241,0.25)]" />

      {/* Deep atmospheric backlights & rising horizon aurora */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-indigo-950/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-indigo-500/8 via-pink-500/4 to-transparent blur-[35px] pointer-events-none z-0" />

      <div className="container mx-auto relative z-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">

          {/* BRAND COLUMN — Spans 4 cols */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 flex items-center justify-center shadow-[0_4px_25px_rgba(255,255,255,0.06)]">
                <img src="/infabio-logo.png" alt="Infabio" className="h-6 w-auto object-contain" />
              </div>
              <span className="text-xl font-display font-light text-white tracking-tight">Marketing Defense</span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-sans font-light">
              AI-powered marketing defense system protecting brands from budget waste and maximizing ROI across three continents.
            </p>

            {/* Micro-Spring Social links */}
            <div className="flex gap-3 pt-2">
              {[
                {
                  name: 'linkedin',
                  url: 'https://www.linkedin.com/company/infabio/',
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                  )
                },
                {
                  name: 'x',
                  url: 'https://x.com/TheInfabio',
                  icon: (
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  )
                },
                {
                  name: 'instagram',
                  url: 'https://www.instagram.com/theinfabio',
                  icon: (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  )
                }
              ].map(s => (
                <motion.a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-slate-400 hover:bg-[#6366f1] hover:border-[#6366f1] hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                  aria-label={s.name}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* SERVICES — Spans 2 cols */}
          <div className="md:col-span-2">
            <h4 className="font-display font-light text-white mb-6 text-xs uppercase tracking-widest text-slate-400">
              Services
            </h4>
            <ul className="space-y-4 font-sans font-light">
              {[
                'AI Media Buying',
                'SEO & Search',
                'Conversion Optimization',
                'Social Media',
                'Email Marketing',
                'Brand Protection',
              ].map(item => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-sm text-slate-400 hover:text-white transition-colors relative group py-1 inline-block"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#6366f1] transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY — Spans 2 cols */}
          <div className="md:col-span-2">
            <h4 className="font-display font-light text-white mb-6 text-xs uppercase tracking-widest text-slate-400">
              Company
            </h4>
            <ul className="space-y-4 font-sans font-light">
              {[
                'About Us',
                'Case Studies',
                'Insights',
                'Careers',
                'Contact',
              ].map(item => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-slate-400 hover:text-white transition-colors relative group py-1 inline-block"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#fda4af] transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* GLOBAL PRESENCE — Spans 4 cols */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="font-display font-light text-white text-xs uppercase tracking-widest text-slate-400">
              Global Presence
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#6366f1] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-sm font-sans font-medium text-slate-300">Gurugram, India</p>
                  <p className="text-xs text-slate-500 font-sans font-light">Defense Command Center</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#fda4af] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-sm font-sans font-medium text-slate-300">Jaipur, India</p>
                  <p className="text-xs text-slate-500 font-sans font-light">Creative Division</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#6366f1] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-sm font-sans font-medium text-slate-300">New York, USA</p>
                  <p className="text-xs text-slate-500 font-sans font-light">Global Expansion HQ</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM METADATA & COPYRIGHT BAR */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-400">
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href="mailto:contact@marketingdefense.com" className="text-sm hover:text-white transition-colors font-sans font-light">
              contact@marketingdefense.com
            </a>
          </div>

          <p className="text-xs text-slate-500 font-sans font-light">
            © 2026 Marketing Defense. All rights reserved.
          </p>

          <div className="flex gap-6 text-xs text-slate-500 font-sans font-light">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
              <a key={item} href="#" className="hover:text-white transition-colors relative group">
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* JOINT VENTURE CREDENTIAL GLASS MODULE */}
      <div className="mt-8 flex justify-end container mx-auto pb-4 px-6 relative z-10">
        <div className="inline-flex items-center gap-3 rounded-2xl border border-white/5 bg-[#050713]/40 backdrop-blur-xl px-4 py-3 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20 shadow-[0_4px_25px_rgba(0,0,0,0.3)]">
          <a
            href="https://fabulousmedia.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-85 hover:opacity-100 transition-opacity flex items-center"
            aria-label="FabulousMedia"
          >
            <img
              src="/fabulous-logo.png"
              alt="FabulousMedia"
              className="h-3 w-auto object-contain"
            />
          </a>

          <span className="h-3 w-px bg-white/20" />

          <a
            href="https://gocommercially.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-85 hover:opacity-100 transition-opacity flex items-center"
            aria-label="GoCommercially"
          >
            <img
              src="/gocommercially-logo.png"
              alt="GoCommercially"
              className="h-3 w-auto object-contain"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
