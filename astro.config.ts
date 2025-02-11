// @ts-check
import { defineConfig } from "astro/config";
import yaml from '@rollup/plugin-yaml';
import sitemap from "@astrojs/sitemap";

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
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          silenceDeprecations: ['import', 'global-builtin']
        }
      }
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
  },
  integrations: [sitemap({
    lastmod: new Date(),
    priority: 0.8,
    serialize(item) {
      if (/\/$/.test(item.url)) {
        item.priority = 1.0;
      }
      return item;
    },
  })]
});
