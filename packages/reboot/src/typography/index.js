// const cssVar = (...args) => {}

const headingTags = [h1, h2, h3, h4, h5, h6];
const displays = [1, 2, 3, 4, 5, 6];

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

module.exports = typography = {
  ...headingTags.reduce(
    (prevHeadings, heading) => ({
      ...prevHeadings,
      [`${heading}`]: {
        ...headingBase,
        fontSize: `var(--delight-headings-font-size-${heading})`,
      },
    }),
    {}
  ),

  ...displays.reduce(
    (prevDisplays, display) => ({
      ...prevDisplays,
      [`display-${display}`]: {
        ...displayBase,
        fontSize: `var(--delight-display-font-size-${display})`,
      },
    }),
    {}
  ),
};
