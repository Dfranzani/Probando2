import { defineConfig } from 'astro/config';
import { adapter as staticAdapter } from '@astrojs/adapter-static';

export default defineConfig({
  site: 'https://dfranzani.github.io',
  output: "dist",
  adapter: staticAdapter({
    pages: 'dist'
  })
});