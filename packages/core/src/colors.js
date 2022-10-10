const { blue, gray, green, red, amber, indigo } = require("../../colors");

module.exports = {
  primary: { ...blue },
  secondary: { ...gray },
  success: { ...green },
  danger: { ...red },
  warning: { ...amber },
  info: { ...indigo },
};
