import tailwind from "@astrojs/tailwind";
import remarkEmoji from "remark-emoji";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  server: {
    host: "0.0.0.0",
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  markdown: {
    remarkPlugins: [remarkEmoji],
  },
});