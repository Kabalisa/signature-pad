/** @type {import('tailwindcss').Config} */
const colors = require("./src/config/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors,
    extend: {
      height: {
        "sp-60": "60px",
      },
    },
  },
  plugins: [],
};
