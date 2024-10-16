/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#008542",
        secondary: "#d9a925",
      },
      fontFamily: {
        raleway: "Raleway",
      },
    },
  },
  plugins: [],
};
