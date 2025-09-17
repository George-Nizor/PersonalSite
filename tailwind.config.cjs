/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        // Remapped to a classic dark theme palette
        ink: '#0a0a0a',
        coral: '#ffffff',
        sand: '#f5f5f5',
        dusk: '#0b0b0c',
        accent: '#ffffff'
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui'],
        body: ['"Inter"', 'system-ui']
      },
      boxShadow: {
        glow: '0 20px 45px rgba(255, 255, 255, 0.12)'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
