import type { Config } from "tailwindcss"
import noscriptPlugin from "tailwindcss-noscript"

export default {
  content: ["./src/**/*.{astro,html}"],
  theme: {
    extend: {},
  },
  plugins: [noscriptPlugin],
} satisfies Config
