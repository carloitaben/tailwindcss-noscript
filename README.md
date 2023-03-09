Conditionally apply Tailwind styles when JavaScript is enabled.

## Why

When animating an element above the fold, there will always be a flash of their default styles before the JavaScript animation library of your choice loads and applies the initial animation CSS. Something as simple as fading in the opacity of an element requires to either…

- Settle with a flash of opaque content (🤢)
- Manually add the initial animation styles to your element and worsen your site for users without JS (😕)
- The previous option, and manually resetting the styles with a `noscript` tag (🤮)

Doing the `noscript` tag thingie with `tailwindcss` is a pain in the ass, and so this library was born.

## Installation

```sh
npm i tailwindcss-noscript
# OR
yarn add tailwindcss-noscript
# OR
pnpm i tailwindcss-noscript
```

## Usage

Add the plugin to the plugins array in your `tailwindcss` configuration file:

```js
module.exports = {
  // ...
  plugins: [
    // ...
    require("tailwindcss-noscript")(),
  ],
}
```

You now need to add a tiny (less than 150 bytes) script to your `head` element:

```tsx
import { script } from "tailwindcss-noscript"

<script src={script} />
```

that's it. You can now add JS-only styles with the `js` variant:

```tsx
<div src="js:opacity-0 js:translate-y-1/2 md:js:translate-y-full" />
```

> **Note**
> When applying multiple variants, place the `js` prefix in the last place.

## Options

```ts
require("tailwindcss-noscript")({
  // Defaults to `js`
  variantPrefix: "javascript",
})
```
