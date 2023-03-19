/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-green": "#4d773b",
        "light-green": "#aebea5",
        beige: "#d2b99d",
      },
      fontFamily: {
        test: "'Comfortaa', sans-serif",
      },
    },
  },
  plugins: [],
};
