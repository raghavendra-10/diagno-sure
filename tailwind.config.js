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
    },
    fontFamily: {
      outfit: ["Outfit", "sans-serif"],
    },
  },
  plugins: [],
};
