import cr192 from "../assets/icons/android-chrome-192x192.png";
import cr512 from "../assets/icons/android-chrome-512x512.png";
import { absURL } from "./utils";
import * as k from "./constants";
import siteURL from "./siteURL.mjs";

// prettier-ignore
const manifest = (theme: string) => 
  `data:application/manifest+json;base64,${btoa(manifestString(theme))}`;

// prettier-ignore
const ldJson = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Person",
  name: k.creatorName,
  url: siteURL,
  sameAs: Object.values(k.socialLinks) });

// prettier-ignore
const manifestString = (_theme: string) => JSON.stringify({
  id: siteURL,
  start_url: siteURL,
  name: k.siteName,
  short_name: k.siteShortName,
  description: k.siteDescription,
  categories: ["developer", "computer", "tech", "education", "music"],
  lang: "en-US",
  orientation: "portrait-primary",
  theme_color: "#ffffff",
  background_color: "#ffffff",
  display: "standalone",
  icons: [
    { src: absURL(cr192), sizes: "192x192", type: "image/png", purpose: "any" },
    { src: absURL(cr512), sizes: "512x512", type: "image/png", purpose: "any" } ],
  $schema: "https://json.schemastore.org/web-manifest-combined.json" });

export { manifest, ldJson }