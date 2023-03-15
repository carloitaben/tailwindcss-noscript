import { defineConfig } from "tsup"
import path from "path"
import fs from "fs/promises"

function encode(string: string) {
  return Buffer.from(string).toString("base64")
}

const regexp = /(?<=data:text\/javascript;base64,)(.*?)(?=">)/gm
const source = encode(`(function(){document.documentElement.classList.add("js");}())`)
const script = `data:text/javascript;base64,${source}`

async function updateReadme() {
  const readme = path.resolve(__dirname, "../../README.md")
  const buffer = await fs.readFile(readme)
  const content = buffer.toString()
  await fs.writeFile(readme, content.replace(regexp, source))
}

export default defineConfig({
  entry: ["src/index.ts", "src/script/index.ts"],
  outDir: "dist",
  format: ["cjs", "esm"],
  external: ["tailwindcss", "tailwindcss/plugin"],
  clean: true,
  dts: true,
  define: {
    __script: `"${script}"`,
  },
  onSuccess: updateReadme,
})
