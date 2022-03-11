import cover from "../assets/images/pics/cover.png";
import { absURL } from "./helper";

export const siteName = "Hein Thant's Space";
export const siteURL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
// prettier-ignore
export const searchWords =
  ["Hein Thant Maung Maung", "HIIIiN", "Hein Thanth", "heinthanth", "ဟိန်းသန့် မောင်မောင်", "ဟိန်းဟိန်း"];
export const description =
  "Just a CS student, Full-stack Web Developer, Junior Flutter Developer, Junior DevOps, Open Source Lover, and passionated Language hacker, and also, love to create EDM, too!";
export const coverLocation = { url: absURL(cover.toString()) };
export const creatorName = "Hein Thant Maung Maung";
export const creatorUsername = "heinthanth";
// prettier-ignore
export const socialLinks = {
  facebook: `https://facebook.com/${creatorUsername}`,
  instagram: `https://instagram.com/${creatorUsername}`,
  twitter: `https://twitter.com/${creatorUsername}`,
  linkedin: `https://linkedin.com/in/${creatorUsername}`,
  github: `https://github.com/${creatorUsername}`,
  soundcloud: `https://soundcloud.com/${creatorUsername}` };
