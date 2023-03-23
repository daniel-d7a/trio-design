/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-green": "#4d773b",
        "light-green": "#f0faeb",
        beige: "#e8d0a2",
      },
      fontFamily: {
        test: "'Comfortaa', sans-serif",
      },
    },
  },
  plugins: [],
};
