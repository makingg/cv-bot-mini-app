import antfu from '@antfu/eslint-config';

export default antfu({
  javascript: true,
  typescript: true,
  vue: true,
  jsonc: true,
  stylistic: {
    semi: true,
    indent: 2,
    quotes: 'single',
    jsx: false,
  },

  // Disabled.
  gitignore: false,
  jsx: false,
  test: false,
  yaml: false,
  toml: false,
  markdown: false,
  react: false,
  svelte: false,
  unocss: false,
});
