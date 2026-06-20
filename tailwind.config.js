/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae6fd',
          500: '#2C5EAD', // Company Primary Blue
          600: '#2C5EAD',
          700: '#204580',
          800: '#152d54',
          900: '#0b162b',
        },
        accent: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          500: '#1591DC', // Company Secondary Blue
          600: '#0f7cbd',
          700: '#0b5f91',
          800: '#084366',
          900: '#04273b',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
