# tailwindcss-noscript

## 2.0.0

### Major Changes

- 46f3ba5: This release converts the package to an ES Module and brings breaking changes to its entry points.

  The new minor release of `tailwindcss` is finally bringing support for ESM and TypeScript configuration files. This plugin is now an ES Module and requires a minimum `tailwindcss` version of 3.3.0 in order to work.

  The exports for this plugin have changed and there is now a single entry point:

  ```ts
  import type { Config } from "tailwindcss";
  import noscriptPlugin from "tailwindcss-noscript";

  export default {
    // ...
    plugins: [
      // ...
      noscriptPlugin,
    ],
  } satisfies Config;
  ```

  ```tsx
  import { script } from "tailwindcss-noscript";

  <script src={script} />;
  ```

## 1.0.0

### Major Changes

- 3071787: Initial release

## 0.1.3

### Patch Changes

- Definitely works now

## 0.1.2

### Patch Changes

- Fixes issue with default export

## 0.1.1

### Patch Changes

- 0fc8670: Fixes invalid `package.json` entry point

## 0.1.0

### Minor Changes

- Initial release
