import { DefaultSeoProps } from "next-seo";
import { siteName, siteURL, description, coverLocation, creator, searchWords } from "./constants";
import defaultManifest from "./manifest.config";
import appleIcon from "../assets/images/icons/apple-touch-icon.png";
// @ts-ignore
import favicon from "../assets/images/icons/favicon.ico";
import favicon32 from "../assets/images/icons/favicon-32x32.png";
import favicon16 from "../assets/images/icons/favicon-16x16.png";
import { absURL } from "./helper";

const defaultSEO = (theme: string): DefaultSeoProps => ({
  defaultTitle: siteName,
  titleTemplate: `%s - ${siteName}`,
  description: description,
  canonical: siteURL,
  additionalMetaTags: [
    { name: "creator", content: creator },
    { name: "keywords", content: searchWords.join(",") },
    { name: "theme-color", content: "#FFFFFF" },
    { name: "color-scheme", content: theme },
    { name: "viewport", content: "width=device-width, initial-scale=1.0, shrink-to-fit=no" },
  ],
  additionalLinkTags: [
    { rel: "manifest", href: defaultManifest(theme) },
    { rel: "shortcut icon", href: favicon.toString() },
    { rel: "icon", type: "image/png", sizes: "32x32", href: favicon32.toString() },
    { rel: "icon", type: "image/png", sizes: "16x16", href: favicon16.toString() },
    { rel: "apple-touch-icon", sizes: "180x180", href: absURL(appleIcon.toString()) },
  ],
  twitter: { cardType: "summary_large_image", handle: "@heinthanth" },
  openGraph: { type: "website", site_name: siteName, images: [coverLocation] },
});

export default defaultSEO;
