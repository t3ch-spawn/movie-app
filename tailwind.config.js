/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainRed: "#BE123C",
        movieGray: '#9CA3AF',
        favourite: 'rgba(243, 244, 246, 0.50)',
      },

      fontFamily:{
        'page2': 'Poppins',
        main: "DM Sans"
      },

      
      screens: {
        "-720": { max: "720px" },
        "-500": { max: "500px" },
      },
    },
  },
  plugins: [],
};
