/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['BPGArial'],
      },
      colors: {
        neutral: {
          850: '#232323',
        },
        white: {
          150: '#EAEAEA',
        },
        lime: {
          350: '#D6D16E',
        },
      },
    },
    margin: {
      25: '100px',
    },
    padding: {
      50: '200px',
    },
    keyframes: {
      textToBottom: {
        '0%': { top: '-80px', opacity: 1 },
        '100%': { top: 0, opacity: 1 },
      },
      shrinkingImage: {
        '0%': { transform: 'scale(100)' },
        '100%': { transform: 'scale(1)' },
      },
      yellowRectangle: {
        '0%': { left: '0', top: '220px', width: '100px', height: '35px' },
        '100%': { left: '127px', top: '140px', width: '622px', height: '75px' },
      },
      redCircle: {
        '0%': { left: '127px', top: '160px', width: '622px', height: '75px' },
        '50%': { borderRadius: '50%' },
        '100%': {
          left: '81px',
          top: '180px',
          width: '229px',
          height: '229px',
          borderRadius: '50%',
          backgroundColor: '#DD3939',
        },
      },
    },
    animation: {
      'text-down': 'textToBottom 0.7s forwards',
      'shrink-image': 'shrinkingImage 0.7s forwards',
      'yellow-move': 'yellowRectangle 0.7s forwards',
      'red-move': 'redCircle 0.7s forwards',
    },
  },
  plugins: [require('tailwindcss-animation-delay')],
};
