import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/index.ts", "src/script/index.ts"],
  outDir: "dist",
  format: ["cjs", "esm"],
  external: ["tailwindcss", "tailwindcss/plugin"],
  clean: true,
  dts: true,
})
