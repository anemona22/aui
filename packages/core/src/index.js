import plugin from 'tailwindcss/plugin'

import colors from './colors'

const core = plugin.withOptions(
  function(options = {}) {
    return function({
      addComponents,
      addVariant,
      addBase,
      variants,
      e,
      theme,
      addUtilities
    }) {},
    function() {
      return {
        prefix: 'aui-',
        theme: {
          colors: {
            'black': '#000000',
            'white': '#ffffff',
            'blue': colors.blue,
            'indigo': colors.indigo,
            'violet': colors.violet,
            'purple': colors.purple,
            'magenta': colors.magenta,
            'red': colors.red,
            'pink': colors.pink,
            'orange': colors.orange,
            'reddish-orange': colors.reddishOrange,
            'amber': colors.amber,
            'yellow': colors.yellow,
            'green': colors.green,
            'lime': colors.lime,
            'teal': colors.teal,
            'brown': colors.brown,
            'slate': colors.slate,
            'gray': colors.gray,
          }
        }
      }
    }
  }
)