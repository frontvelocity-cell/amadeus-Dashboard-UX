/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      width: {
        '65': '16.25rem',
      },
      height: {
        '18': '4.5rem',
      }
    },
  },
  plugins: [],
}