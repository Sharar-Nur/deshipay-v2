/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        brand: "#00C52A",
        title: "#222222",
      },
      // fontFamily: {
      //   'balooDa': ['Baloo Da 2', 'cursive'],
      // },
    },
  },
  plugins: [],
}
