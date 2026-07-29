// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    // Le projet utilise des noms de page d'un seul mot (index, about, contact),
    // ce qui est la convention de routage Nuxt.
    'vue/multi-word-component-names': 'off',
  },
})
