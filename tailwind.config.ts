import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0F1E",
        foreground: "#F8FAFC",
        'papa-gold': {
          DEFAULT: '#FBBF24',
          400: '#FCD34D',
          500: '#F59E0B',
          600: '#D97706',
        },
        'papa-blue': {
          DEFAULT: '#1E3A8A',
          light: '#2563EB',
        },
        'papa-card': '#1E293B',
        'papa-card-glass': 'rgba(30, 41, 59, 0.7)',
      },
      fontFamily: {
        heading: ['var(--font-russo-one)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-gold': '0 0 20px rgba(251, 191, 36, 0.3)',
        'glow-gold-lg': '0 0 30px rgba(251, 191, 36, 0.4)',
        'inner-glow': 'inset 0 0 20px rgba(251, 191, 36, 0.1)',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 10px #FBBF24' },
          '50%': { opacity: '.5', boxShadow: '0 0 20px #FBBF24' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      }
    },
  },
  plugins: [],
};
export default config;
