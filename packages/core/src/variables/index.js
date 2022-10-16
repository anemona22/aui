const typography = require("./typography");
const chip = require("./chip");
const palette = require("./palette");

module.exports = (theme) => ({
  variables: {
    DEFAULT: {
      ...typography(theme),
      ...palette,
      ...chip,
    },
  },
  darkVariables: {
    body: {
      color: "var(--delight-palette-secondary-100)",
      background: "var(--delight-palette-secondary-900)"
    }
  },
});
