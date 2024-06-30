/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      screens:{
        '500':'500px',
        '1313px':'1313px'
      }
    },
  },
  plugins: [],
}