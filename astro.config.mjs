import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  image: {
    responsiveStyles: true,
    domains: ["cdn.jsdelivr.net", "images.unsplash.com"],
  },
  compressHTML: true,
  markdown: {
    shikiConfig: {
      theme: "vesper",
      wrap: true,
    },
  },
  build: {
    inlineStylesheets: "always",
  },
});
