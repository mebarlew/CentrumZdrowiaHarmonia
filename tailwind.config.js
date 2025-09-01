/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4A90B8',
          dark: '#357098'
        },
        secondary: {
          DEFAULT: '#6B9B7A',
          dark: '#5A8A69'
        },
        accent: '#E8B444',
        text: {
          DEFAULT: '#333333',
          light: '#666666'
        },
        bg: {
          DEFAULT: '#FFFFFF',
          light: '#F5F5F5',
          lighter: '#FAFAFA'
        }
      },
      fontFamily: {
        'sans': ['Source Sans Pro', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'soft': '0 2px 4px rgba(0,0,0,0.1)',
        'medium': '0 4px 8px rgba(0,0,0,0.1)',
        'large': '0 8px 16px rgba(0,0,0,0.1)'
      }
    },
  },
  plugins: [],
}

