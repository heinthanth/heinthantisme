import { Blob as nodeBlob } from "buffer";
import { URL as nodeURL } from "url";
import { siteURL } from "./constants";
import chrome192 from "../assets/images/icons/android-chrome-192x192.png";
import chrome512 from "../assets/images/icons/android-chrome-512x512.png";
import { absURL } from "./helper";

// prettier-ignore
const manifestString = (_theme: string) => JSON.stringify({
  $schema: "https://json.schemastore.org/web-manifest-combined.json",
  id: siteURL,
  start_url: siteURL,
  name: "Hein Thant's Space",
  short_name: "Hein's Space",
  description: "Just a space to explore Hein Thant's creations",
  categories: ["developer", "computer", "tech", "education", "music"],
  icons: [
    { src: absURL(chrome192.toString()), sizes: "192x192", type: "image/png", purpose: "any" },
    { src: absURL(chrome512.toString()), sizes: "512x512", type: "image/png", purpose: "any" },
  ],
  lang: "en-US",
  orientation: "portrait-primary",
  theme_color: "#ffffff",
  background_color: "#ffffff",
  display: "standalone" });

// prettier-ignore
const defaultManifest = (theme: string) => typeof window === "undefined"
  ? nodeURL.createObjectURL(new nodeBlob([manifestString(theme)], { type: "application/json" }))
  : URL.createObjectURL(new Blob([manifestString(theme)], { type: "application/json" }));

export default defaultManifest;
