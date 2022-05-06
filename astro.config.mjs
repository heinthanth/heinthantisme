import{defineConfig}from"astro/config";import svelte from"@astrojs/svelte";import sveltePreprocess from"svelte-preprocess";import sitemap from"@astrojs/sitemap";import siteURL from"./src/misc/siteURL.mjs";import turboLinks from"@astrojs/turbolinks";import{createHash}from"crypto";export default defineConfig({site:siteURL,build:{format:"file"},integrations:[svelte({preprocess:sveltePreprocess()}),sitemap(),turboLinks()],vite:{css:{modules:{generateScopedName:(e,s,t)=>{const r=t.indexOf(`.${e}`),o=t.substring(0,r).split(/[\r\n]/).length;return createHash("sha1").update(`.${e}@${s}${o}=>${t}`).digest("base64").slice(0,11).replace(/[\+\/\=]/g,"_").replace(/^(\d|-)/,"_$1").slice(0,10)}}}}});