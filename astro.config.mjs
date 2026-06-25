import { defineConfig } from 'astro/config';

export default defineConfig({
  build: {
    assetsPrefix: '/studio'
  },
  trailingSlash: 'never'
});
