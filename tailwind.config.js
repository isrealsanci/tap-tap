/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0B1D31',
        'brand-blue': '#58D1FF',
        'brand-red': '#FA4760',
        'brand-green': '#00FF6B', 
        'brand-dark-faded': 'rgba(11, 29, 49, 0.9)',
      },
     
      keyframes: {
        beating: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        anmtdBG: {
          '0%': { backgroundPosition: 'center 0.5em' },
          '100%': { backgroundPosition: 'center 1.5em' },
        },
        
        grow: {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(2)' },
          '100%': { transform: 'scale(1)' },
        },
        burst: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '50%': { transform: 'scale(5)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        switchColors: {
          '0%': { backgroundColor: '#FA4760' }, // brand-red
          '100%': { backgroundColor: '#58D1FF' }, // brand-blue
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0', display: 'none' },
        },
      },
      
      animation: {
        beating: 'beating 1.5s infinite ease-in-out',
        anmtdBG: 'anmtdBG 0.5s alternate infinite cubic-bezier(0.4, 0, 0.2, 1)',
        grow: 'grow .2s ease-in-out forwards',
        burst: 'burst 0.25s ease-in-out',
        switchColors: 'switchColors 0.2s ease-in-out infinite alternate',
        fadeOut: 'fadeOut 0.5s 1s ease-in-out forwards',
      },
     
      boxShadow: {
        'circle-blue': 'inset 0 0 0 17px #58D1FF',
        'circle-red': 'inset 0 0 0 17px #FA4760',
        'circle-white': 'inset 0 0 0 17px #FFFFFF',
        'circle-blue-pulse': 'inset 0 0 0 2px #58D1FF',
        'circle-red-pulse': 'inset 0 0 0 2px #FA4760',
        'circle-white-pulse': 'inset 0 0 0 2px #FFFFFF',
      },
    },
  },
  plugins: [],
}