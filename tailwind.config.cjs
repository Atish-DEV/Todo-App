/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#1c1917",
        secondary:"#292524",
        button_add_new:"#84cc16"
      },
      fontFamily: {
        logo:["Pacifico", "cursive"]
      },
      fontSize: {
        '2xl': '2.0rem',
      },
    },
  },
  plugins: [],
}