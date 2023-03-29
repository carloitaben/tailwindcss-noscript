---
"tailwindcss-noscript": major
---

This release converts the package to an ES Module and brings breaking changes to its entry points.

The new minor release of `tailwindcss` is finally bringing support for ESM and TypeScript configuration files. This plugin is now an ES Module and requires a minimum `tailwindcss` version of 3.3.0 in order to work.

The exports for this plugin have changed and there is now a single entry point:

```ts
import type { Config } from "tailwindcss"
import noscriptPlugin from "tailwindcss-noscript"

export default {
  // ...
  plugins: [
    // ...
    noscriptPlugin,
  ]
} satisfies Config
```

```tsx
import { script } from "tailwindcss-noscript"

<script src={script} />
```
