/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    extend: {
      colors: {
        // Premium Dark Theme Palette — Redesigned for Cyber-Feminine luxury
        background: '#020308',     // Deep midnight navy background
        surface: '#050713',        // Midnight navy panel
        surfaceElevated: '#0a0d20',// Elevated midnight panel
        textMain: '#F8FAFC',       // Slate-50 headings
        textBody: '#CBD5E1',       // Slate-300 body text
        textMuted: '#94A3B8',      // Slate-400 subtitle grey
        
        // Brand Accent Colors
        brandBlue: '#6366f1',      // Premium electric indigo
        brandOrange: '#fda4af',    // Premium rose gold
        accentCyan: '#c084fc',     // Neon lavender
        accentPurple: '#db2777',   // Soft magenta
        accentPeach: '#fed7aa',    // Subtle peach glow
        
        // Explicit color system names
        navyDeep: '#020308',
        electricIndigo: '#6366f1',
        neonLavender: '#c084fc',
        roseGold: '#fda4af',
        softMagenta: '#db2777',
        peachGradient: '#fed7aa',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Cormorant Garamond', 'Space Grotesk', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 24s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 1.5s infinite',
        'float-slow': 'float 8s ease-in-out 0.5s infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(var(--rotation, 0deg))' },
          '50%': { transform: 'translateY(-18px) rotate(calc(var(--rotation, 0deg) + 1.5deg))' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #6366f1 0%, #fda4af 100%)',
        'brand-gradient-soft': 'linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(253,164,175,0.15) 100%)',
        'hero-glow': 'radial-gradient(ellipse at 30% 40%, rgba(99,102,241,0.16) 0%, transparent 60%), radial-gradient(ellipse at 70% 60%, rgba(253,164,175,0.14) 0%, transparent 60%)',
      },
      boxShadow: {
        'brand': '0 0 35px rgba(99, 102, 241, 0.28)',
        'brand-orange': '0 0 35px rgba(253, 164, 175, 0.28)',
        'glow-cyan': '0 0 25px rgba(192, 132, 252, 0.25)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.45)',
        'glass-hover': '0 12px 40px 0 rgba(99, 102, 241, 0.2)',
        'glass-hover-orange': '0 12px 40px 0 rgba(253, 164, 175, 0.2)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}
