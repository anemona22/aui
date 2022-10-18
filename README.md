# Delight UI
Delightful Collection fo React UI libraries which build using tailwind css.

## Installation
```sh
// npm
npm i @delightui/core @delightui/delight tailwindcss --dev

// Yarn
yarn add @delightui/core @delightui/delight tailwindcss --dev
```

Then add the plugin to your `tailwind.config.js` file

```js
// tailwind.config.js
module.exports = {
  ...
  plugins: [
    // ...
    require(@delightui/core)
  ]
}
```
