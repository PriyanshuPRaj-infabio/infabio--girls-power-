import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import MagneticButton from './MagneticButton';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-background/70 backdrop-blur-2xl border-b border-indigo-500/10 py-2.5 shadow-[0_10px_30px_var(--glass-shadow)]"
        : "bg-transparent py-5"
        }`}
    >
      {/* Bottom glowing line inside the header container */}
      {scrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-indigo-500/20 via-pink-400/40 to-indigo-500/20" />
      )}

      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center group relative">
          <div className="relative">
            {/* Soft holographic ambient aura around the white-glass pill */}
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-indigo-500/25 via-purple-500/10 to-pink-500/25 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20 flex items-center justify-center transition-all duration-500 hover:bg-white shadow-[0_8px_30px_rgba(255,255,255,0.06)] hover:scale-[1.02]">
              <img
                src="/infabio-logo.png"
                alt="Infabio Logo"
                className="w-auto h-7 object-contain"
              />
            </div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-9 bg-surface/35 border border-indigo-500/5 rounded-full px-7 py-2.5 backdrop-blur-2xl shadow-[0_10px_30px_var(--glass-shadow)]">
          {['About', 'Services', 'Industries', 'Case Studies', 'Insights'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-[11px] font-bold text-slate-300 hover:text-slate-50 transition-colors relative py-1.5 group font-sans tracking-[0.14em] uppercase"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-brandBlue to-brandOrange group-hover:w-full transition-all duration-300 rounded-full shadow-[0_0_10px_#6366f1]" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <a href="#contact" className="hidden md:block text-xs font-bold uppercase tracking-[0.12em] text-slate-300 hover:text-brandOrange transition-colors">
            Contact
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full border border-indigo-500/10 bg-surface/40 hover:bg-surface/80 backdrop-blur-md shadow-md text-textMain hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer flex items-center justify-center outline-none"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? (
              <svg className="w-5 h-5 text-indigo-600 transition-transform duration-500 rotate-12 hover:rotate-45" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-amber-400 transition-transform duration-500 hover:rotate-90" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
            )}
          </button>

          <MagneticButton>
            <a
              href="#contact"
              className="hidden md:flex btn-primary text-[10px] font-black uppercase tracking-[0.12em] px-6 py-3 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.25)] hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]"
            >
              Connect Our Brains
            </a>
          </MagneticButton>
        </div>
      </div>
    </motion.header>
  );
}
