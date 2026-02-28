/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FAF6F0',
          dark: '#F0E9DD',
        },
        sage: {
          DEFAULT: '#5B7553',
          dark: '#3D5435',
          light: '#8BA583',
          muted: '#C8D5C2',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E8D5A0',
          dark: '#A68A3A',
        },
        charcoal: '#2A2A2A',
        stone: '#4A4A4A',
        pebble: '#6B6B6B',
        sand: '#D4CFC7',
        cloud: '#F5F2ED',
        error: {
          DEFAULT: '#C45C4A',
          light: '#FAE8E5',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 8px rgba(43,43,43,0.04), 0 1px 2px rgba(43,43,43,0.06)',
        medium: '0 4px 16px rgba(43,43,43,0.06), 0 2px 4px rgba(43,43,43,0.04)',
        large: '0 12px 40px rgba(43,43,43,0.08), 0 4px 12px rgba(43,43,43,0.04)',
        glass: '0 8px 32px rgba(43,43,43,0.08)',
        glow: '0 0 40px rgba(201,168,76,0.15)',
      },
      borderRadius: {
        xl: '16px',
        '2xl': '24px',
        '3xl': '32px',
      },
      backdropBlur: {
        glass: '20px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.sr-only': {
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: '0',
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          borderWidth: '0',
        },
        '.focus\\:not-sr-only:focus': {
          position: 'static',
          width: 'auto',
          height: 'auto',
          padding: 'inherit',
          margin: 'inherit',
          overflow: 'visible',
          clip: 'auto',
          whiteSpace: 'normal',
        },
      });
    },
  ],
};
