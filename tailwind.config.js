/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.{html,js,vue}"],
  important: "#pro-translate",
  theme: {
    extend: {},
  },
  plugins: [],
};
