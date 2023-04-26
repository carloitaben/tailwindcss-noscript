# TailwindCSS `<noscript>`

Apply Tailwind styles only when JavaScript is enabled.

## Project Structure

This project uses `pnpm` workspaces to develop the `tailwindcss-noscript` package, alongside a `demo` Astro site for testing and demonstration purposes.

| Package                | Source                                  |
| ---------------------- | --------------------------------------- |
| `tailwindcss-noscript` | [Source](packages/tailwindcss-noscript) |
| `demo`                 | [Source](apps/demo)                     |

## Commands

| Command                                    | Description                      |
| ------------------------------------------ | -------------------------------- |
| `pnpm --filter tailwindcss-noscript test`  | Runs all package tests           |
| `pnpm --filter tailwindcss-noscript build` | Builds the package               |
| `pnpm --filter tailwindcss-noscript watch` | Builds the package in watch mode |
| `pnpm --filter demo dev`                   | Opens the `demo` site            |
