import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark base
        'deep-black': '#0A0A0F',
        'charcoal': '#141419',
        'slate-dark': '#1C1C24',

        // Neon accents (used sparingly)
        'neon-green': '#00FF87',
        'neon-gold': '#FFD700',
        'neon-purple': '#B14EFF',
        'neon-cyan': '#00FFFF',

        // Daily Duppy split colors
        'duppy-yellow': '#FFE500',
        'duppy-black': '#0D0D0D',

        // Text
        'text-primary': '#FFFFFF',
        'text-secondary': '#A0A0B0',
        'text-dim': '#5A5A6A',
      },
      fontFamily: {
        'display': ['var(--font-display)', 'Impact', 'sans-serif'],
        'body': ['var(--font-body)', 'system-ui', 'sans-serif'],
        'mono': ['var(--font-mono)', 'monospace'],
        'dyslexia': ['OpenDyslexic', 'Comic Sans MS', 'sans-serif'],
      },
      fontSize: {
        'massive': ['8rem', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        'huge': ['5rem', { lineHeight: '1', letterSpacing: '-0.01em' }],
        'big': ['3rem', { lineHeight: '1.1', letterSpacing: '0' }],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
