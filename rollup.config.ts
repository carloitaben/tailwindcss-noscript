import { defineConfig } from "rollup"
import typescript from "@rollup/plugin-typescript"
import replace from "@rollup/plugin-replace"

function encode(string: string) {
  return Buffer.from(string).toString("base64")
}

const script = `data:text/javascript;base64,${encode(`(function(){document.documentElement.classList.add("js");}())`)}`

export default defineConfig({
  input: ["src/index.ts"],
  output: {
    dir: "dist",
    format: "cjs",
    exports: "named",
  },
  external: ["tailwindcss", "tailwindcss/plugin"],
  plugins: [
    typescript({ include: ["./src/**/*"] }),
    replace({
      preventAssignment: true,
      values: {
        __script: `"${script}"`,
      },
    }),
  ],
})
