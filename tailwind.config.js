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
        snowfall: {
          '0%': {
            transform: 'translateY(-10px) rotate(0deg)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(100vh) rotate(360deg)',
            opacity: '0.3',
          },
        },
        blossom: {
          '0%': {
            transform: 'translateY(-10px) rotate(0deg) translateX(0)',
            opacity: '1',
          },
          '50%': {
            transform: 'translateY(50vh) rotate(180deg) translateX(30px)',
            opacity: '0.8',
          },
          '100%': {
            transform: 'translateY(100vh) rotate(360deg) translateX(-20px)',
            opacity: '0.2',
          },
        },
        sparkle: {
          '0%, 100%': {
            opacity: '0.3',
            transform: 'scale(0.8)',
          },
          '50%': {
            opacity: '1',
            transform: 'scale(1.2)',
          },
        },
        leaf: {
          '0%': {
            transform: 'translateY(-10px) rotate(0deg) translateX(0)',
            opacity: '1',
          },
          '25%': {
            transform: 'translateY(25vh) rotate(90deg) translateX(40px)',
          },
          '50%': {
            transform: 'translateY(50vh) rotate(180deg) translateX(-30px)',
            opacity: '0.8',
          },
          '75%': {
            transform: 'translateY(75vh) rotate(270deg) translateX(20px)',
          },
          '100%': {
            transform: 'translateY(100vh) rotate(360deg) translateX(0)',
            opacity: '0.2',
          },
        },
        slideInFromLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        gradientShift: {
          '0%': {
            backgroundPosition: '0% center',
          },
          '25%': {
            backgroundPosition: '50% center',
          },
          '50%': {
            backgroundPosition: '100% center',
          },
          '75%': {
            backgroundPosition: '50% center',
          },
          '100%': {
            backgroundPosition: '0% center',
          },
        },
        blink: {
          '0%, 50%': {
            opacity: '1',
          },
          '51%, 100%': {
            opacity: '0',
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
        snowfall: 'snowfall linear infinite',
        blossom: 'blossom linear infinite',
        sparkle: 'sparkle ease-in-out infinite',
        leaf: 'leaf linear infinite',
        fadeInUp: 'fadeInUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInFromLeft 0.8s ease-out forwards',
        'gradient-shift': 'gradientShift 6s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
        'scroll-up': 'scroll-up 15s linear infinite',
        'scroll-down': 'scroll-down 15s linear infinite',
      }
    },
  },
  plugins: [],
}

