/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        eco: {
          light: '#F3F8F5',
          DEFAULT: '#0F7A4D',
          dark: '#0A5937',
          gold: '#D89F3C',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% - 1.5rem))' }, // Account for the gap between sets
        }
      },
      animation: {
        'scroll': 'scroll 30s linear infinite',
      }
    },
  },
  plugins: [],
}
