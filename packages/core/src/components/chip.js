module.exports = Chip = (colors) => ({
  ".iui-chip": {
    "@apply inline-flex items-center justify-center align-middle rounded-full": {},
    minHeight: "var(--delight-chip-minHeight)",

    // "&.solid": {
    //   "@apply text-white bg-secondary-500 border border-transparent": {},
    //   "@apply dark:text-secondary-100 dark:bg-secondary-700": {},

    //   ...colors.reduce(
    //     (styles, color) => ({
    //       ...styles,
    //       [`&[data-color="${color}"]`]: {
    //         [`@apply bg-${color}-500`]: {},
    //         [`@apply hover:bg-${color}-600`]: {},
    //         [`@apply dark:text-${color}-700 dark:border-${color}-400 dark:bg-${color}-400`]:
    //           {},
    //         [`@apply hover:dark:text-${color}-700 hover:dark:border-${color}-500 hover:dark:bg-${color}-500`]:
    //           {},
    //         "@apply dark:bg-opacity-15": {},
    //         "@apply dark:border-opacity-40": {},
    //       },
    //     }),
    //     {}
    //   ),
    // },

    // "&.soft": {
    //   "@apply text-secondary-600 bg-secondary-200 border border-transparent":
    //     {},

    //   ...colors.reduce(
    //     (styles, color) => ({
    //       ...styles,
    //       [`&[data-color="${color}]"`]: {
    //         [`@apply text-${color}-600 bg-${color}-200 border-${color}-200`]:
    //           {},
    //         // TODO: Add soft dark variant style.
    //       },
    //     }),
    //     {}
    //   ),
    // },

    // "&.outlined": {
    //   "@apply text-secondary-500 bg-inherit border border-secondary-300": {},

    //   ...colors.reduce(
    //     (styles, color) => ({
    //       ...styles,
    //       [`&[data-color="${color}"]`]: {
    //         [`@apply text-${color}-500 border-${color}-500`]: {},
    //         [`@apply dark:text-${color}-400 dark:border-${color}-200`]: {},
    //       },
    //     }),
    //     {}
    //   ),
    // },

    // "&.plain": {
    //   "@apply text-secondary-500 bg-inherit border border-transparent": {},

    //   ...colors.reduce(
    //     (styles, color) => ({
    //       ...styles,
    //       [`&[data-color="${color}"]`]: {
    //         [`@apply text-${color}-600`]: {},
    //         [`@apply dark:text-${color}-300`]: {},
    //       },
    //     }),
    //     {}
    //   ),
    // },

    // "&.sm": {
    //   minWidth: "36px",
    //   height: "14px",
    //   padding: 0,
    //   lineHeight: "12px",
    // },

    // "&.md": {
    //   "@apply px-1.5 py-0": {},
    //   "--delight-chip-minHeight": "2rem",
    //   height: "20px",
    //   lineHeight: "18px",
    // },

    // "&.shadow": {
    //   "@apply ring-1 ring-white": {},
    //   "@apply dark:ring-black": {},
    // },
  },
});
