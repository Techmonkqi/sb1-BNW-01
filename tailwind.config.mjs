/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'bolt-primary': '#0066FF',
        'bolt-secondary': '#00CC99',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}