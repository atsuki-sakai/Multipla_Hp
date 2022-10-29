/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        noto_sans: ['Noto Sans JP', "sans-serif"],
        press_start_2p: ['Press Start 2P', "cursive"]
      }
    },
  },
  plugins: [],
}
