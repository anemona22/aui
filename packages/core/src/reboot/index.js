/**
 * Reboot
 *
 * Normalization of HTML elements, manually forked from Normalize.css to remove
 * styles targeting irrelevant browsers while applying new styles.
 *
 * Normalize is licensed MIT. https://github.com/necolas/normalize.css
 */

// const cssVar = (...args) => {}
const typography = require("./typography")
// const headings = [h1, h2, h3, h4, h5, h6];

const headingBase = {
  "@apply mt-0": {},
  marginBottom: "var(--delight-headings-margin-bottom)",
  fontStyle: "var(--delight-headings-font-style)",
  fontWeight: "var(--delight-headings-font-weight)",
  lineHeight: "var(--delight-headings-line-height)",
  color: "var(--delight-headings-color)",
};

const displayBase = {
  fontWeight: "var(--delight-display-font-weight)",
  lineHeight: "var(--delight-display-line-height)",
};

module.exports = reboot = (theme) => ({
  "*, *::before, *::after": {
    boxSizing: "border-box",
  },

  ":root": {
    fontSize: "var(--delight-font-size-root)",
  },

  body: {
    "@apply m-0": {},
    fontFamily: "var(--delight-body-font-family)",
    fontSize: "var(--delight-body-font-size)",
    fontWeight: "var(--delight-body-font-weight)",
    lineHeight: "var(--delight-body-line-height)",
    textAlign: "var(--delight-body-text-align)",
    color: "var(--delight-body-color)",
    backgroundColor: "var(--delight-body-background)",
    "--webkit-text-size-adjust": "100%",
    "--webkit-tap-highlight-color": "transparent",
  },

  ...typography,

  // h1: { ...headingBase, fontSize: "var(--delight-headings-font-size-h1)" },
  // h2: { ...headingBase, fontSize: "var(--delight-headings-font-size-h2)" },
  // h3: { ...headingBase, fontSize: "var(--delight-headings-font-size-h3)" },
  // h4: { ...headingBase, fontSize: "var(--delight-headings-font-size-h4)" },
  // h5: { ...headingBase, fontSize: "var(--delight-headings-font-size-h5)" },
  // h6: { ...headingBase, fontSize: "var(--delight-headings-font-size-h6)" },

  ".display-1": {
    ...displayBase,
    fontSize: "var(--delight-display-font-size-1)",
  },
  ".display-2": {
    ...displayBase,
    fontSize: "var(--delight-display-font-size-2)",
  },
  ".display-3": {
    ...displayBase,
    fontSize: "var(--delight-display-font-size-3)",
  },
  ".display-4": {
    ...displayBase,
    fontSize: "var(--delight-display-font-size-4)",
  },
  ".display-5": {
    ...displayBase,
    fontSize: "var(--delight-display-font-size-5)",
  },
  ".display-6": {
    ...displayBase,
    fontSize: "var(--delight-display-font-size-6)",
  },

  p: { "@apply mt-0 mb-4": {} },

  ".lead": {
    fontSize: "var(--delight-lead-font-size)",
    fontWeight: "var(--delight-lead-font-weight)",
  },

  "abbr[title]": {
    textDecoration: "underline dotted",
    cursor: theme("cursor.help"),
    textDecorationSkipInk: "none",
  },

  address: { "@apply mb-4 not-italic": {}, lineHeight: "inherit" },
});
