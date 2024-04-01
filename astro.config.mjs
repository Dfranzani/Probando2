import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://dfranzani.github.io',
  output: 'static',
  outDir: './docs',
  //output: "server",
  //adapter: vercel()
});
