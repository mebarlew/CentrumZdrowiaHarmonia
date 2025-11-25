import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
    // Disable source maps in production for security
    sourcemap: false
  },
  vite: {
    build: {
      // Minify code in production
      minify: 'esbuild',
      // Disable source maps
      sourcemap: false,
      // Remove console logs in production
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    }
  },
  integrations: [tailwind()]
});