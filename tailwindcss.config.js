module.exports = {
  mode: 'jit',
  purge: ['./packages/*/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {},
  variants: {
    extends: {},
  },
  plugins: [require('./packages/core')({})],
};
