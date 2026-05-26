/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-base':      '#08080c',
        'brand-dark':      '#0e0e14',
        'brand-surface':   '#15151d',
        'brand-elevated':  '#1c1c26',
        'brand-border':    '#252530',
        'brand-accent':    '#6366f1',
        'brand-accent-bright': '#818cf8',
        'brand-accent-subtle':  '#3730a3',
        'brand-muted':     '#a1a1aa',
        'brand-dim':       '#888888',
        'brand-success':   '#22c55e',
        'brand-warning':   '#f59e0b',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'heading': ['Ubuntu', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
