import{defineConfig}from"astro/config";import svelte from"@astrojs/svelte";import sveltePreprocess from"svelte-preprocess";import sitemap from"@astrojs/sitemap";console.log(process.env);export default defineConfig({site:1==process.env.CF_PAGES_URL&&process.env.CF_PAGES_URL||"localhost:3000",build:{format:"file"},integrations:[svelte({preprocess:sveltePreprocess()}),sitemap()]});