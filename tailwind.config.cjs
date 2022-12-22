/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['BPGArial'],
      },
      scale: {
        63: '0.63',
      },
      colors: {
        neutral: {
          850: '#232323',
        },
        cyan: {
          650: '#1289AE',
          750: '#208298',
        },
        white: {
          100: '#FFFFFF',
          150: '#EAEAEA',
        },
        lime: {
          350: '#D6D16E',
        },
        orange: {
          650: '#F15524',
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
        '0%': {
          left: '0',
          top: '220px',
          width: '35px',
          borderRadius: '%50',
          height: '35px',
          backgroundColor: '#DD3939',
        },
        '25%': { borderRadius: '0', backgroundColor: '#D6D16E' },
        '100%': { left: '127px', top: '140px', width: '622px', height: '75px' },
      },
      yellowRectangleBackward: {
        '0%': {
          left: '81px',
          top: '180px',
          width: '229px',
          height: '229px',
          borderRadius: '50%',
          backgroundColor: '#DD3939',
        },
        '20%': { borderRadius: '0', backgroundColor: '#D6D16E' },

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
      redCircleBackward: {
        '0%': { left: '227px', top: '60px', width: '75px', height: '75px' },
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
      redCircleStar: {
        '0%': {
          left: '0',
          top: '180px',
          width: '229px',
          height: '229px',
          borderRadius: '50%',
          backgroundColor: '#DD3939',
        },
        '50%': { borderRadius: '50%', backgroundColor: '#D6D16E' },
        '100%': {
          left: '150px',
          top: '60px',
          width: '25px',
          height: '25px',
        },
      },
      movingStar: {
        '0%': { left: '20px', top: '60px', opacity: 0.4 },
        '100%': { left: '32px', top: '0', opacity: 0.7 },
      },
      movingStarBackward: {
        '0%': { left: '32px', top: '0', opacity: 0 },
        '100%': { left: '32px', top: '0', opacity: 0.7 },
      },
      movingStarBackwardHeart: {
        '0%': { left: '96px', top: '88px', opacity: 0.7 },
        '100%': { left: '32px', top: '0', opacity: 0, transform: 'scale(1.5)' },
      },
      movingStarInHeart: {
        '0%': { left: '-40px', top: '10px', opacity: 0.7 },
        '100%': { left: '30px', top: '70px', opacity: 0 },
      },
      heartLargeOne: {
        '0%': { transform: 'scale(0)', opacity: 0 },
        '100%': { transform: 'scale(1)', opacity: 0.7 },
      },
      heartLargeTwo: {
        '0%': { transform: 'scale(1)', opacity: 1 },
        '100%': { transform: 'scale(10)', opacity: 0 },
      },
      heartBG: {
        '0%': { transform: 'scale(1)', opacity: 0 },
        '100%': { transform: 'scale(100)', opacity: 1 },
      },
      starOne: {
        '0%': { left: '80px', top: '20px', opacity: 1 },
        '100%': { left: '20px', top: '-40px', opacity: 1 },
      },
      starTwo: {
        '0%': { right: '80px', top: '0px', opacity: 1 },
        '100%': { right: '20px', top: '65px', opacity: 1 },
      },
    },
    animation: {
      'text-down': 'textToBottom 0.7s forwards',
      'shrink-image': 'shrinkingImage 0.7s forwards',
      'yellow-move': 'yellowRectangle 0.7s forwards',
      'yellow-bakcward': 'yellowRectangleBackward 0.7s forwards',
      'red-move': 'redCircle 0.7s forwards',
      'red-move-backward': 'redCircleBackward 0.7s forwards',
      'red-move-star': 'redCircleStar 0.4s forwards',
      'moving-star': 'movingStar 0.3s forwards',
      'moving-star-backward': 'movingStarBackward 1s forwards',
      'moving-star-backward-heart': 'movingStarBackwardHeart 1s forwards',
      'moving-star-in-heart': 'movingStarInHeart 0.3s forwards',
      'heart-large-one': 'heartLargeOne 0.4s forwards',
      'heart-large-two': 'heartLargeTwo 0.7s forwards',
      'heart-background': 'heartBG 0.7s forwards',
      'star-one': 'starOne 0.7s forwards',
      'star-two': 'starTwo 0.7s forwards',
    },
  },
  plugins: [require('tailwindcss-animation-delay')],
};
