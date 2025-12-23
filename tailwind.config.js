/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'large': '1440px',
        'large-phone': '430px',
      },
      fontFamily: {
        sans: ['"Pretendard"', 'sans-serif'],
        tenada: ['"Tenada"', 'sans-serif'],
        poppins: ['"Poppins"', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'scroll-up': {
          '0%': {
            transform: 'translateY(0)',
          },
          '100%': {
            transform: 'translateY(-50%)',
          },
        },
        'scroll-down': {
          '0%': {
            transform: 'translateY(-50%)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.6s ease-out forwards',
        'scroll-up': 'scroll-up 15s linear infinite',
        'scroll-down': 'scroll-down 15s linear infinite',
      }
    },
  },
  plugins: [],
}