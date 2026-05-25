/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      // Custom color palette with purple, blue, green, red, and orange variants
      colors: {
        'purple': {
          50: '#faf5ff',
          900: '#581c87'
        },
        'blue': {
          50: '#eff6ff',
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#1e3a8a'
        },
        'green': {
          50: '#f0fdf4',
          600: '#16a34a',
          700: '#15803d'
        },
        'red': {
          50: '#fef2f2',
          600: '#dc2626'
        },
        'orange': {
          50: '#fff7ed',
          600: '#ea580c'
        }
      },
      // Custom font family with Inter as primary
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif']
      },
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