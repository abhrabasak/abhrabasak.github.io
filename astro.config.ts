// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://abhra.in",
  srcDir: "source",
  outDir: "webapp",
  compressHTML: false,
  vite: {
    build: {
      assetsInlineLimit: 4,
    },
  },
  build: {
    format: "file",
    inlineStylesheets: "never",
  }
});
