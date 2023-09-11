/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainRed: "#BE123C",
        movieGray: '#9CA3AF'
      },

      fontFamily:{
        main: 'Poppins'
      }
    },
  },
  plugins: [],
};
