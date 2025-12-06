/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Pretendard"', 'sans-serif'],
        tenada: ['"Tenada"', 'sans-serif'],
        presentation: ['"Presentation"', 'sans-serif'],
        binggrae: ['"Binggrae"', 'sans-serif'],
        waguri: ['"Waguri"', 'sans-serif'],
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-2px) rotate(-1deg)' },
          '50%': { transform: 'translateY(0) rotate(0deg)' },
          '75%': { transform: 'translateY(2px) rotate(1deg)' },
        },
        pop: {
          '0%': { transform: 'scale(0.8)', opacity: '0.5' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(2.5rem)' },
          '50%': { transform: 'translateY(2.4rem)' },
        },
        jelly: {
          '0%, 100%': { transform: 'scale(1, 1)' },
          '25%': { transform: 'scale(0.95, 1.05)' },
          '50%': { transform: 'scale(1.05, 0.95)' },
          '75%': { transform: 'scale(0.98, 1.02)' },
        },
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
        glow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 20px rgba(239, 136, 200, 0.3))' },
          '50%': { filter: 'drop-shadow(0 0 40px rgba(239, 136, 200, 0.6))' },
        },
        tilt: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        aurora: {
          '0%': {
            transform: 'rotate(0deg) scale(1)',
            filter: 'blur(50px) hue-rotate(0deg)',
            borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
          },
          '50%': {
            transform: 'rotate(180deg) scale(1.1)',
            filter: 'blur(50px) hue-rotate(45deg)',
            borderRadius: '60% 40% 30% 70% / 60% 50% 40% 50%',
          },
          '100%': {
            transform: 'rotate(360deg) scale(1)',
            filter: 'blur(50px) hue-rotate(0deg)',
            borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
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
      },
      animation: {
        shake: 'shake 0.1s infinite',
        pop: 'pop 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        float: 'float 6s ease-in-out infinite',
        aurora: 'aurora 12s ease-in-out infinite alternate',
        snowfall: 'snowfall linear infinite',
        blossom: 'blossom linear infinite',
        sparkle: 'sparkle ease-in-out infinite',
        leaf: 'leaf linear infinite',
        jelly: 'jelly 2s ease-in-out infinite',
        fadeInUp: 'fadeInUp 0.6s ease-out forwards',
        glow: 'glow 3s ease-in-out infinite',
        tilt: 'tilt 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

