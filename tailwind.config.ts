import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class', '[data-theme-mode="dark"]'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    './i18n/**/*.{ts,tsx}',
    './messages/**/*.json',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        brand: {
          50: 'hsl(var(--brand-50) / <alpha-value>)',
          100: 'hsl(var(--brand-100) / <alpha-value>)',
          200: 'hsl(var(--brand-200) / <alpha-value>)',
          300: 'hsl(var(--brand-300) / <alpha-value>)',
          400: 'hsl(var(--brand-400) / <alpha-value>)',
          500: 'hsl(var(--brand-500) / <alpha-value>)',
          600: 'hsl(var(--brand-600) / <alpha-value>)',
          700: 'hsl(var(--brand-700) / <alpha-value>)',
          800: 'hsl(var(--brand-800) / <alpha-value>)',
          900: 'hsl(var(--brand-900) / <alpha-value>)',
          950: 'hsl(var(--brand-950) / <alpha-value>)',
        },
        gold: {
          50: '#fdf9ed',
          100: '#fbf0c8',
          200: '#f7df8d',
          300: '#f3c94f',
          400: '#efb527',
          500: '#e09a13',
          600: '#c17812',
          700: '#9b5914',
          800: '#7d4817',
          900: '#673c18',
        },
        ink: {
          50: '#f7f7f8',
          100: '#eeeef0',
          200: '#d9d9de',
          300: '#b8b9c1',
          400: '#8d8f9b',
          500: '#6c6e7c',
          600: '#555763',
          700: '#454651',
          800: '#3a3b44',
          900: '#33343b',
          950: '#1d1e22',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      borderRadius: {
        lg: '1rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        soft: '0 4px 24px -8px rgba(31, 41, 55, 0.08)',
        elevated: '0 12px 32px -12px rgba(31, 41, 55, 0.15)',
        ring: '0 0 0 1px rgba(63, 163, 77, 0.2)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.3s ease-out',
        'accordion-up': 'accordion-up 0.3s ease-out',
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.8s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;