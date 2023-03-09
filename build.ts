import * as esbuild from "esbuild"

function encode(string: string) {
  return Buffer.from(string).toString("base64")
}

const script = `data:text/javascript;base64,${encode(`(function(){document.documentElement.classList.add("js");}())`)}`

esbuild.build({
  entryPoints: ["./src/index.ts"],
  outdir: "./dist",
  format: "cjs",
  define: {
    __script: `"${script}"`,
  },
  bundle: false,
  platform: "node",
})
