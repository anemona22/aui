const plugin = require("tailwindcss/plugin");
const _merge = require("lodash/merge");
const variablesApi = require("@mertasan/tailwindcss-variables/api");

const config = require("./config");
const reboot = require("./reboot");
const delightVariables = require("./variables");

// Base
// const Base = require("./base");

// Components
const Chip = require("./components/chip");
const components = [Chip];

const defaultColors = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
];

module.exports = plugin.withOptions(
  function (options = { colors: [], cssBase: true }) {
    return function ({
      addComponents,
      addVariant,
      addBase,
      variants,
      e,
      theme,
      config,
      addUtilities,
    }) {
      const optionColors = [...defaultColors, ...(options.colors || [])];
      const pluginOptions = {
        variablePrefix: "--delight",
        // darkSelector: null, // default: .dark
        // darkToRoot: false, // default: true ( :root.dark or .dark )
      };
      const allVariables = delightVariables(theme);
      const base = reboot(theme);
      // active({ addVariant, variants, e, theme, addUtilities });
      // selected({ addVariant, variants, e, theme, addUtilities });
      // disabled({ addVariant, variants, e, theme, addUtilities });

      addBase(base);

      addComponents(
        variablesApi.variables(
          _merge(allVariables.variables, theme("variables", {})),
          pluginOptions
        )
      );

      addComponents(
        variablesApi.darkVariables(
          _merge(allVariables.darkVariables, theme("darkVariables", {})),
          pluginOptions,
          config("darkMode")
        )
      );

      addComponents(
        components.map((component) => component(optionColors)),
        {
          respoectPrefix: false,
        }
      );

      //   if (options.cssBase) {
      //     addBase({
      //       html: {
      //         "@apply text-foreground antialiased border-secondary-200 dark:border-secondary-700 bg-base":
      //           {},
      //         lineHeight: "1.5",
      //         textRendering: "optimizeLegibility",
      //         textSizeAdjust: "100%",
      //         touchAction: "manipulation",
      //       },
      //       body: {
      //         position: "relative",
      //         minHeight: "100%",
      //         fontFeatureSettings: "'kern'",
      //       },
      //     });
      //   }
      // };
    };
  },
  () => config
  // function () {
  //   return config;
  // }
);
