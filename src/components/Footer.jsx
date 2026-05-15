export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white pt-20 pb-8 relative overflow-hidden">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-brandBlue via-brandOrange to-brandBlue" />
      {/* Subtle glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-blue-900/20 blur-[120px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-lg p-1.5">
                <img src="/infabio-logo.png" alt="Infabio" className="h-8 w-auto object-contain" />
              </div>
              <span className="font-display font-black text-white text-xl">Infabio</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              India's First Women-Powered Growth Agency.<br />
              Marketing that respects your budget.
            </p>
            <p className="text-gray-500 text-xs font-medium uppercase tracking-widest">
              Built by women. Powered by strategy.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {['in', 'tw', 'ig'].map(s => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brandBlue hover:text-white transition-all duration-300 text-xs font-bold uppercase"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-white mb-6 text-sm uppercase tracking-widest">Services</h4>
            <ul className="space-y-3">
              {[
                'Performance Marketing',
                'SEO & Organic',
                'Branding',
                'Website Design',
                'AI Automation',
                'Social Media',
                'Lead Generation',
              ].map(item => (
                <li key={item}>
                  <a href="#services" className="text-sm text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-white mb-6 text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Our Process', 'Industries', 'Results', 'Contact'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white mb-6 text-sm uppercase tracking-widest">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-brandOrange flex-shrink-0 mt-0.5">✉️</span>
                <a href="mailto:hello@infabio.com" className="text-sm text-gray-400 hover:text-white transition-colors">
                  hello@infabio.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brandBlue flex-shrink-0 mt-0.5">📍</span>
                <div>
                  <p className="text-sm font-bold text-gray-300">Gurugram, India</p>
                  <p className="text-xs text-gray-500">Growth HQ</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brandOrange flex-shrink-0 mt-0.5">📍</span>
                <div>
                  <p className="text-sm font-bold text-gray-300">Jaipur, India</p>
                  <p className="text-xs text-gray-500">Creative Hub</p>
                </div>
              </li>
            </ul>

            <a href="mailto:hello@infabio.com" className="mt-8 btn-primary text-sm px-6 py-3 inline-block">
              Book Free Strategy Call
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © 2026 Infabio. India's First Women-Powered Growth Agency. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            {['Privacy Policy', 'Terms of Service'].map(item => (
              <a key={item} href="#" className="hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
