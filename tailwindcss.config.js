module.exports = {
  content: [
    "./packages/*/**/*.{js,jsx,ts,tsx}",
    "./docs/pages/**/*.{js,ts,jsx,tsx}",
    "./docs/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("./packages/core/src/index.js")({ cssBase: true })],
};
