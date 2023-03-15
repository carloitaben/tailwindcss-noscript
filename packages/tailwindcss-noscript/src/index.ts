import plugin from "tailwindcss/plugin"

export = plugin(({ addVariant }) => {
  // @ts-expect-error This definitely exists
  addVariant("js", ({ modifySelectors }) => {
    modifySelectors(() => `:merge(.js) &`)
  })
})
