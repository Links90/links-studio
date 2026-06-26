import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

const assetsPrefix = process.env.ASSETS_PREFIX || process.env.BASE_URL || '/studio';

export default defineConfig({
  adapter: cloudflare({
    imageService: 'passthrough',
    workerEntryPoint: {
      path: './src/worker.js'
    }
  }),
  output: 'server',
  build: {
    assetsPrefix
  },
  trailingSlash: 'never'
});
