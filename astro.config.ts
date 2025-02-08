// @ts-check
import { defineConfig } from "astro/config";
import yaml from '@rollup/plugin-yaml';

// https://astro.build/config
export default defineConfig({
  site: "https://abhra.in",
  srcDir: "source",
  outDir: "webapp",
  compressHTML: false,
  vite: {
    plugins: [yaml()],
    build: {
      assetsInlineLimit: 4,
    },
    resolve: {
      alias: {
        $styles: "../../assets/styles",
        $images: "../../assets/images",
        $data: "../../data",
      },
    },
  },
  build: {
    format: "file",
    inlineStylesheets: "never",
  }
});
