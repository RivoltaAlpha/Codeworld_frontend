/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        'secondary': '#003366',
        'cards':'#116696',
        'primary':'#7FC7D9',
        'gray-100': '#f5f5f5',
        'base': '#0D6D82', 
        'bg': '#000d1a',
         },
    },
  },
  plugins: [],
}