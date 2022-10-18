const rem = (px) => `${px / 16}rem`;

module.exports = typograghy = (theme) => ({
  font: {
    family: {
      base: "var(--delight-font-family-sans-serif)",
      code: "var(--delight-font-family-monospace)",
      "sans-serif": theme("fontFamily.sans"),
      monospace: theme("fontFamily.mono"),
      // "sans-serif": `system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
      // monospace: `SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
    },
    size: {
      root: null,
      base: rem(16),
      sm: rem(14),
      lg: rem(20),
    },
    weight: {
      base: "var(--delight-font-weight-normal)",
      ...theme("fontWeight"),
    },
  },
  line: {
    height: {
      base: rem(24),
      xs: rem(12),
      sm: rem(20),
      md: rem(24),
      lg: rem(32),
      xl: rem(40),
    },
  },
  body: {
    font: {
      family: "var(--delight-font-family-base)",
      size: "var(--delight-font-size-base)",
      weight: "var(--delight-font-weight-base)",
    },
    "line-height": "var(--delight-line-height-base)",
    "text-align": null,
    color: "var(--delight-palette-secondary-900)",
    background: theme("colors.white"),
  },
  headings: {
    "margin-bottom": theme("spacing.2"),
    font: {
      style: null,
      weight: "var(--delight-font-weight-bold)",
      size: {
        h1: rem(40),
        h2: rem(32),
        h3: rem(28),
        h4: rem(24),
        h5: rem(20),
        h6: rem(16),
      },
    },
    "line-height": 1.2,
    color: null,
  },
  lead: {
    font: {
      size: rem(20),
      weight: 300,
    },
  },
  display: {
    font: {
      weight: 300,
      size: {
        1: rem(80),
        2: rem(72),
        3: rem(64),
        4: rem(56),
        5: rem(48),
        6: rem(40)
      }
    },
    "line-height": "var(--delight-headings-line-height)",
  },
});
