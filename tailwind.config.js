/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366f1',
          dark: '#6366f1',
          light: '#ec4899',
        },
        secondary: {
          DEFAULT: '#ec4899',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #6366f1, #ec4899)',
        'gradient-vertical': 'linear-gradient(to bottom, #6366f1, #ec4899)',
      },
    },
  },
  plugins: [],
}

