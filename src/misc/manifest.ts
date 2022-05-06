import cr192 from "../../assets/icons/android-chrome-192x192.png";
import cr512 from "../../assets/icons/android-chrome-512x512.png";
import ht from "../../assets/pics/heinthant.png";
import { absURL } from "./utils";
import { Buffer as b } from "buffer";
import * as k from "./constants";
import siteURL from "./siteURL.mjs";

// prettier-ignore
const manifest = (theme: string) => 
  `data:application/manifest+json;base64,${
  b.from(_manifest(theme)).toString("base64")}`;

// prettier-ignore
const ldJson = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Person",
  name: k.creatorName,
  givenName: k.creatorFirstName,
  familyName: k.creatorLastName,
  image: absURL(ht),
  gender: "male",
  jobTitle: "Full-stack web developer, junior DevOps, beginner EDM producer",
  nationality: "Myanmar",
  url: siteURL,
  email: `hello@${new URL(siteURL).hostname}`,
  sameAs: Object.values(k.socialLinks) });

// prettier-ignore
const _manifest = (_theme: string) => JSON.stringify({
  categories: ["developer", "computer", "tech", "education", "music"],
  id: siteURL,
  start_url: siteURL,
  name: k.siteName,
  short_name: k.siteShortName,
  description: k.siteDescription,
  lang: "en-US",
  orientation: "portrait-primary",
  theme_color: "#ffffff",
  background_color: "#ffffff",
  display: "standalone",
  icons: [
    { src: absURL(cr192), sizes: "192x192",
      type: "image/png", purpose: "any maskable" },
    { src: absURL(cr512), sizes: "512x512",
      type: "image/png", purpose: "any maskable" } ],
  $schema: "https://json.schemastore.org/web-manifest-combined.json" });

export { manifest, ldJson };
