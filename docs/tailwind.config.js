/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // variables: {
    //   DEFAULT: {
    //     chip: {
    //       minHeight: "1.5rem",
    //     },
    //   },
    // },
  },
  plugins: [
    require("@ideoui/core"),
    // require("@mertasan/tailwindcss-variables")({ variablePrefix: "delight" }),
  ],
};
