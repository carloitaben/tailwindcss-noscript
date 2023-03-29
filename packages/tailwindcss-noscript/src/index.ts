import plugin from "tailwindcss/plugin"

export default plugin(({ addVariant }) => {
  // @ts-expect-error This definitely exists but it's missing in Tailwind types
  addVariant("js", ({ modifySelectors }) => {
    modifySelectors(() => `:merge(.js) &`)
  })
})

declare const __script: string

export const script = __script
