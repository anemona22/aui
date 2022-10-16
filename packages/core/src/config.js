const colors = require("./colors");

module.exports = config = {
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors,
      spacing: {
        base: "1rem"
      }
    },
  },
};
