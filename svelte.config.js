const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  preprocess: sveltePreprocess({
    scss: {
      prependData: `@import 'src/theme.scss';`,
    },
  }),
  hotReload: true,
};
