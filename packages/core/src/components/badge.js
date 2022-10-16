module.exports = Badge = (colors) => ({
  ".ideoui-badge": {
    "&.solid": {
      "": {},
      ...colors.reduce(
        (styles, color) => ({
          ...styles,
          "": {}
        }),
        {}
      )
    }
  }
});
