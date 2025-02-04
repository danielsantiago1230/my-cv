// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        // Fade-in animation
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        // Float animation for decorative SVGs
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        // Pulse animation for the central circle
        pulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: 1 },
          '50%': { transform: 'scale(1.05)', opacity: 0.8 },
        },
        'soft-glitch': {
          '0%, 100%': { transform: 'translate(0)', clipPath: 'inset(0 0 0 0)' },
          '25%': { transform: 'translate(-1px, 1px)', clipPath: 'inset(2% 0 5% 0)' },
          '50%': { transform: 'translate(1px, -1px)', clipPath: 'inset(5% 0 2% 0)' },
          '75%': { transform: 'translate(0)', clipPath: 'inset(0 0 0 0)' }
        },
        'glitch-overlay': {
          '0%, 100%': { opacity: 0 },
          '25%': { opacity: 0.3, transform: 'translate(2px, -1px)' },
          '50%': { opacity: 0.15, transform: 'translate(-1px, 2px)' }
        },
        'fade-in-up': {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        glitch: {
          '0%': { clipPath: 'polygon(0 2%, 100% 2%, 100% 5%, 0 5%)' },
          '10%': { clipPath: 'polygon(0 15%, 100% 15%, 100% 15%, 0 15%)' },
          '20%': { clipPath: 'polygon(0 10%, 100% 10%, 100% 20%, 0 20%)' },
          '30%': { clipPath: 'polygon(0 1%, 100% 1%, 100% 2%, 0 2%)' },
          '40%': { clipPath: 'polygon(0 33%, 100% 33%, 100% 33%, 0 33%)' },
          '50%': { clipPath: 'polygon(0 44%, 100% 44%, 100% 44%, 0 44%)' },
          '60%': { clipPath: 'polygon(0 50%, 100% 50%, 100% 20%, 0 20%)' },
          '70%': { clipPath: 'polygon(0 70%, 100% 70%, 100% 70%, 0 70%)' },
          '80%': { clipPath: 'polygon(0 80%, 100% 80%, 100% 80%, 0 80%)' },
          '90%': { clipPath: 'polygon(0 50%, 100% 50%, 100% 55%, 0 55%)' },
          '100%': { clipPath: 'polygon(0 60%, 100% 60%, 100% 70%, 0 70%)' },
        },
        wave: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'button-shine': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'tech-float': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        'particle-float': {
          '0%': { transform: 'translateY(0) scale(1)', opacity: 0.8 },
          '50%': { transform: 'translateY(-50px) scale(0.8)', opacity: 0.4 },
          '100%': { transform: 'translateY(-100px) scale(0.5)', opacity: 0 },
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out forwards',
        float: 'float 3s ease-in-out infinite',
        pulse: 'pulse 4s ease-in-out infinite',
        glitch: 'glitch 2s infinite linear alternate',
        wave: 'wave 3s ease-in-out infinite',
        'button-shine': 'button-shine 2s infinite',
        'tech-float': 'tech-float 6s ease-in-out infinite',
        'particle-float': 'particle-float 4s linear infinite',
        'button-entrance': 'fadeIn 0.5s ease-out backwards, pulse 2s 0.5s infinite',
        'soft-glitch': 'soft-glitch 4s ease-in-out infinite',
        'glitch-overlay': 'glitch-overlay 4s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 1s ease-out forwards'
      },
      colors: {
        'brand-dark': '#010D00',
        'brand-primary': '#BF3C1F',
        'brand-primary-dark': '#A6351C',
        'brand-accent': '#732514',
        'brand-accent-dark': '#40100C',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
