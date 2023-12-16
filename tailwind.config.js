/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        red:"hsl(1, 90%, 64%)",
        blue:"hsl(219, 85%, 26%)",
        veryLightGrayishBlue:"hsl(210, 60%, 98%)",
        lightGrayishBlue1:"hsl(211, 68%, 94%)",
        lightGrayishBlue2:"hsl(205, 33%, 90%)",
        grayishBlue:"hsl(219, 14%, 63%)",
        darkGrayishBlue:"hsl(219, 12%, 42%)",
        veryDarkBlue:"hsl(224, 21%, 14%)"
      },
      fontFamily:{
        plusJakartaSans:["'Plus Jakarta Sans'", 'sans-serif']
      }
    },
  },
  plugins: [],
}