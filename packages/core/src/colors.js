const colors = ["primary", "secondary", "success", "danger", "warning", "info"];
const variants = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

module.exports = {
  ...colors.reduce(
    (prevColors, color) => ({
      ...prevColors,
      [`${color}`]: {
        ...variants.reduce(
          (prevVariants, variant) => ({
            ...prevVariants,
            [`${variant}`]: `var(--delight-palette-${color}-${variant})`,
          }),
          {}
        ),
      },
    }),
    {}
  ),
};

// module.exports = {
//   primary: {
//     50: "var(--delight-palette-primary-50)",
//     100: "var(--delight-palette-primary-100)",
//     200: "var(--delight-palette-primary-200)",
//     300: "var(--delight-palette-primary-300)",
//     400: "var(--delight-palette-primary-400)",
//     500: "var(--delight-palette-primary-500)",
//     600: "var(--delight-palette-primary-600)",
//     700: "var(--delight-palette-primary-700)",
//     800: "var(--delight-palette-primary-800)",
//     900: "var(--delight-palette-primary-900)",
//   },
//   secondary: {
//     50: "var(--delight-palette-secondary-50)",
//     100: "var(--delight-palette-secondary-100)",
//     200: "var(--delight-palette-secondary-200)",
//     300: "var(--delight-palette-secondary-300)",
//     400: "var(--delight-palette-secondary-400)",
//     500: "var(--delight-palette-secondary-500)",
//     600: "var(--delight-palette-secondary-600)",
//     700: "var(--delight-palette-secondary-700)",
//     800: "var(--delight-palette-secondary-800)",
//     900: "var(--delight-palette-secondary-900)",
//   },
//   success: {
//     50: "var(--delight-palette-success-50)",
//     100: "var(--delight-palette-success-100)",
//     200: "var(--delight-palette-success-200)",
//     300: "var(--delight-palette-success-300)",
//     400: "var(--delight-palette-success-400)",
//     500: "var(--delight-palette-success-500)",
//     600: "var(--delight-palette-success-600)",
//     700: "var(--delight-palette-success-700)",
//     800: "var(--delight-palette-success-800)",
//     900: "var(--delight-palette-success-900)",
//   },
//   danger: {
//     50: "var(--delight-palette-danger-50)",
//     100: "var(--delight-palette-danger-100)",
//     200: "var(--delight-palette-danger-200)",
//     300: "var(--delight-palette-danger-300)",
//     400: "var(--delight-palette-danger-400)",
//     500: "var(--delight-palette-danger-500)",
//     600: "var(--delight-palette-danger-600)",
//     700: "var(--delight-palette-danger-700)",
//     800: "var(--delight-palette-danger-800)",
//     900: "var(--delight-palette-danger-900)",
//   },
//   warning: {
//     50: "var(--delight-palette-warning-50)",
//     100: "var(--delight-palette-warning-100)",
//     200: "var(--delight-palette-warning-200)",
//     300: "var(--delight-palette-warning-300)",
//     400: "var(--delight-palette-warning-400)",
//     500: "var(--delight-palette-warning-500)",
//     600: "var(--delight-palette-warning-600)",
//     700: "var(--delight-palette-warning-700)",
//     800: "var(--delight-palette-warning-800)",
//     900: "var(--delight-palette-warning-900)",
//   },
//   info: {
//     50: "var(--delight-palette-info-50)",
//     100: "var(--delight-palette-info-100)",
//     200: "var(--delight-palette-info-200)",
//     300: "var(--delight-palette-info-300)",
//     400: "var(--delight-palette-info-400)",
//     500: "var(--delight-palette-info-500)",
//     600: "var(--delight-palette-info-600)",
//     700: "var(--delight-palette-info-700)",
//     800: "var(--delight-palette-info-800)",
//     900: "var(--delight-palette-info-900)",
//   },
// };
