/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    colors: {
      orange: "#FF6A3D",
      white: "#fff",
      black: "#000",
      grey: "rgb(233, 238, 217)",
      greyLight: "rgb(233, 238, 217, 0.5)",
      greyVeryLight: "rgb(233, 238, 217, 0.3)",
      blue: "rgb(0, 55, 110)",
      lightBlue: "rgb(89, 129, 169)",
      red: "rgb(184, 9, 9)",
      blue2: "rgb(76, 181, 171)",
      skyBlue: "rgba(3, 155, 229, 0.05)",
      borderGrey: "rgb(231, 231, 231)",
      primaryBlue90: "#01344C",
      neutral60: "#5F5F5F",
      neutral5: "#E7E7E7",
      neutral20: '#CFCFCF',
      neutral30: "#B1B1B1",
      neutral80: "#2D2D2D",
      neutral60: '#5f5f5f',
      primaryBlue60: '#0381BF'
    },
    fontFamily: {
      outfit: ["Outfit", "sans-serif"],
    },
  },
  plugins: [require('tailwind-scrollbar'),],
};
