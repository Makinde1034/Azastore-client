/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        grey: "#A0A0A0",
        brandColor:"#F95D44"
      }
    },
  },
  plugins: [],
};
