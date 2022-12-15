/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["BPGArial"],
      },
      colors: {
        neutral: {
          850: "#232323",
        },
        white: {
          150: "#EAEAEA",
        },
      },
    },
    margin: {
      25: "100px",
    },

    keyframes: {
      textToBottom: {
        "0%": { top: "-80px", opacity: 1 },
        "100%": { top: 0, opacity: 1 },
      },
      shrinkingImage: {
        "0%": { transform: "scale(100)" },
        "100%": { transform: "scale(1)" },
      },
    },
    animation: {
      "text-down": "textToBottom 0.7s forwards",
      "shrink-image": "shrinkingImage 0.7s forwards",
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
