/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@apideck/components/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        "basier-circle": ["Basier Circle", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray: colors.slate,
        primary: {
          50: "#f6f7fe",
          100: "#f2f3fd",
          200: "#e0e1fa",
          300: "#c9c8f4",
          400: "#aba4ea",
          500: "#9182de",
          600: "#775ad8",
          700: "#6434d5",
          800: "#5922b9",
          900: "#5a1aa8",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
