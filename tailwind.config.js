/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#051F20',
          900: '#0B2B26',
          800: '#163832',
          700: '#235347',
        },
        sage: '#8EB69B',
        mint: {
          100: '#E8F5EE',
          50: '#F4FAF6',
        },
        alert: {
          red: '#D64045',
          yellow: '#E8A838',
          green: '#3A9E5F',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}