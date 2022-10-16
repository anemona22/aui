const { blue, gray, green, red, amber, indigo } = require("@ideoui/colors");

module.exports = palette = {
  palette: {
    primary: { ...blue },
    secondary: { ...gray },
    success: { ...green },
    danger: { ...red },
    warning: { ...amber },
    info: { ...indigo },
  },
};
