/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#1A1A1A',
        'brand-accent': '#C5A059',
        'brand-accent-light': '#D4B982',
        'brand-surface': '#F5F5F0',
        'brand-muted': '#71717A',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'heading': ['Ubuntu', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      }
    },
  },
  plugins: [],
}
