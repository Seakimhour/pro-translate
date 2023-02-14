/* eslint-env node */
const defaultTheme = require("tailwindcss/defaultTheme");

function rem2px(input, fontSize = 16) {
  if (input == null) {
    return input;
  }
  switch (typeof input) {
    case "object":
      if (Array.isArray(input)) {
        return input.map((val) => rem2px(val, fontSize));
      } else {
        const ret = {};
        for (const key in input) {
          ret[key] = rem2px(input[key]);
        }
        return ret;
      }
    case "string":
      return input.replace(
        /(\d*\.?\d+)rem$/,
        (_, val) => parseFloat(val) * fontSize + "px"
      );
    default:
      return input;
  }
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.{html,js,vue}"],
  important: "#pro-translate",
  theme: {
    borderRadius: rem2px(defaultTheme.borderRadius),
    columns: rem2px(defaultTheme.columns),
    fontSize: rem2px(defaultTheme.fontSize),
    lineHeight: rem2px(defaultTheme.lineHeight),
    spacing: rem2px(defaultTheme.spacing),
    maxWidth: ({ theme, breakpoints }) => ({
      ...rem2px(defaultTheme.maxWidth({ theme, breakpoints })),
    }),
    minHeight: {
      ...rem2px(defaultTheme.minHeight),
      4: "16px",
      8: "32px",
    },
    extend: {
      colors: {
        primary: "#539E8A",
        secondary: "#F6C5BE",
      },
    },
  },
};
