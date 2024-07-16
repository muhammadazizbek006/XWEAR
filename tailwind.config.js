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
        '1313px':'1313px',
        '1473':'1473px'
      },
      colors:{
        'labelcolor':'#999a9e',
      }
    },
  },
  plugins: [],
}