import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import keystatic from "@keystatic/astro";
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
    define: {
      "import.meta.env.KEYSTATIC_GITHUB_CLIENT_ID": JSON.stringify(
        process.env.KEYSTATIC_GITHUB_CLIENT_ID,
      ),
      "import.meta.env.KEYSTATIC_GITHUB_CLIENT_SECRET": JSON.stringify(
        process.env.KEYSTATIC_GITHUB_CLIENT_SECRET,
      ),
      "import.meta.env.KEYSTATIC_SECRET": JSON.stringify(
        process.env.KEYSTATIC_SECRET,
      ),
    },
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
  integrations: [tailwind(), react(), keystatic()],
});
