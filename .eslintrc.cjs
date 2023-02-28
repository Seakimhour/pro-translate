/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
    "plugin:tailwindcss/recommended",
  ],
  rules: {
    "vue/multi-word-component-names": 0,
    "tailwindcss/no-custom-classname": 0,
  },
  parserOptions: {
    ecmaVersion: "latest",
  },
  overrides: [
    {
      excludedFiles: "*.cy.js",
    }
  ]
};
