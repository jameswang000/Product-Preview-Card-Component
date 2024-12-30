/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark_cyan: "#3c8067",
        very_dark_cyan: "#1a4031",
        cream: "#f2eae2",
        very_dark_blue: "#1c232b",
        dark_gray_blue: "#6b7189",
      },
      fontFamily: {
        montserrat: ["Montserrat, serif"],
        fraunces: ["Fraunces, serif"],
      },
    },
  },
  plugins: [],
};
