import plugin from "tailwindcss/plugin"

type Options = {
  variantPrefix?: string
}

const defaultOptions = {
  variantPrefix: "js",
} satisfies Options

export default plugin.withOptions<Options>((options = {}) => ({ addVariant }) => {
  const { variantPrefix } = { ...defaultOptions, ...options }

  // @ts-expect-error I'm sure this exists :(
  addVariant(variantPrefix, ({ modifySelectors }) => {
    modifySelectors(() => `:merge(.js) &`)
  })
})

declare const __script = "string"

export const script = __script
