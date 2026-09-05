import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://www.harmonia-centrum.pl",
  output: "static",
  adapter: vercel(),
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
    sourcemap: false,
  },
  vite: {
    build: {
      minify: "esbuild",
      sourcemap: false,
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
  },
  integrations: [tailwind({ applyBaseStyles: false })],
});
