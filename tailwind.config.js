/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        "sm":"376px",
        "md":"450px",
        "lg":"600px",
        "xl":"768px",
        "2xl":"900px",
        "3xl":"1024px",
        "4xl":"1400px"
      }
    },
  },
  plugins: [],
}

