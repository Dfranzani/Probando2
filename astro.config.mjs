import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dfranzani.github.io',
  publicPath: process.env.NODE_ENV === 'production' ? '/probando2/' : '/',
});