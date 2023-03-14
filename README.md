# TailwindCSS `<noscript>`

Apply Tailwind styles only when JavaScript is enabled.

## Why

When animating an element above the fold with JavaScript, the default styles of the element may be briefly visible before JavaScript loads and applies the initial animation styles. Something as simple as fading-in the opacity of an element requires to either…

- Settle with an ugly flash of opaque content (🤢)
- Make the initial animation styles the default ones and disappoint your non-JavaScript-using visitors (😕)
- Go with the previous option and manually reset the styles with a `noscript` tag (🤮)

Going with the `noscript` approach with `tailwindcss` can be quite cumbersome. This plugin can be used as an alternative method to maintain ergonomics in exchange for a minuscule amount of render-blocking JavaScript.

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
    require("tailwindcss-noscript"),
  ],
}
```

You now need to add a `script` tag to your `head` with the following content:

```tsx
import script from "tailwindcss-noscript/script"

<script src={script} />
```

That's it. You can now add JS-only styles using the `js` variant prefix:

```tsx
<div src="js:opacity-0 js:translate-y-1/2 md:js:translate-y-full" />
```

> **Note**
> When applying multiple variants, place the `js` prefix in the last place.

## Acknowledgements

- [`next-themes`](https://github.com/pacocoursey/next-themes)  
  The mechanism to prevent CLS was inspired by [`next-themes`](https://github.com/pacocoursey/next-themes). I also took the idea of compressing the script with base64 from [`next-real-viewport`](https://github.com/basementstudio/next-real-viewport) (the folks at Basement Studio make lovely things 💖).
