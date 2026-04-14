/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#fdf8f9',
          100: '#fbf0f2',
          200: '#f6dce2',
          300: '#efbecc',
          400: '#e596ac',
          500: '#d76f8c',
          600: '#c24e6f',
          700: '#a33a55',
          800: '#883348',
          900: '#722e3f',
        },
        cream: {
          DEFAULT: '#FDFBF7',
          50: '#FFFFFF',
          100: '#FEFDFB',
          200: '#FDFBF7',
          300: '#F7F3E8',
          400: '#EBE3CF',
          500: '#DCCEA9',
          600: '#C9B687',
          700: '#B09A65',
          800: '#948053',
          900: '#7A6B46',
        },
        dark: {
          DEFAULT: '#2C2A29',
          accent: '#1F1E1D',
          muted: '#4A4745',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 10px 40px -4px rgba(0, 0, 0, 0.08)',
      },
      backgroundImage: {
        'gradient-romantic': 'linear-gradient(135deg, #FDFBF7 0%, #fbf0f2 100%)',
      }
    },
  },
  plugins: [],
}
