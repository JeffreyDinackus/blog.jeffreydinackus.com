/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class', // or 'media' if you prefer system-level dark mode

  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      transitionProperty: {
        'bg': 'background-color', // Enable background color transition
        'colors': 'color, background-color', // Enable transition for text and background
      },
    },
  },

  plugins: [],
}