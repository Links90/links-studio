import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  base: "/studio",
  output: "server",

  build: {
    assetsPrefix: "/studio",
  },

  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
    imageService: "passthrough",
  }),

  trailingSlash: "never",
});
