/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand': {
          'dark': '#0f172a',      // slate-900
          'darker': '#020617',    // slate-950
          'accent': '#c5a059',    // soft gold/brass
          'accent-light': '#d4b982',
          'stone': '#f8fafc',     // slate-50
        }
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      }
    },
  },
  plugins: [],
}
