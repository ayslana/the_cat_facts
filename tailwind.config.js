/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "Jost",
      },
      colors: {
        "purple-darker": "#22223B",
        "purple-medium": "#4A4E69",
        "purple-lighter": "#9A8C98",
        "rose-medium": "#C9ADA7",
        "rose-lighter": "#F2E9E4",
      },
    },
  },
  plugins: [],
};
