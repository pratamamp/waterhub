/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "#457B9D",
        secondary: "#97B2C2",
        white: colors.white,
        gray: colors.gray,
        blue: colors.blue,
        yellow: colors.yellow,
        sky: colors.sky,
        btncolor: "#3587A4",
        txtcolor: "#A8DADC",
        icocolor: "#81D2C7",
      },
    },
  },
  plugins: [],
};
