/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      // Custom width utilities
      width: {
        '65': '16.25rem',
      },
      // Custom height utilities
      height: {
        '18': '4.5rem',
      }
    },
  },
  plugins: [],
}