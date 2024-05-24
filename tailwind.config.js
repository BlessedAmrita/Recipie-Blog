/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}","./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        darkbrown:"#240B00",
        peach:{
          light:"#ebbab9",
          dark:"#B98F8A"
        },
        orange:"#C54D25"
      },
      fontFamily:{
        comforta: "Comfortaa"
      }
    },
  },
  plugins: [],
}