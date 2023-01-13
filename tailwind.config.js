/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.{html,js,vue}"],
  important: "#pro-translate",
  theme: {
    extend: {
      colors: {
        primary: "#539E8A",
        secondary: "#F6C5BE",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
