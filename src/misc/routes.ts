import type { ReactNode } from "react";

export const NavbarRoutes: {
  uri: string;
  label: ReactNode;
  ariaLabel?: string;
}[] = [
  { uri: "/", ariaLabel: "Go to website Home Page", label: "INDEX ZERO" },
  { uri: "/about", ariaLabel: "Read more about Hein Thant", label: "WHO AM I" },
  { uri: "/creations", ariaLabel: "Explore Hein Thant's creations", label: "CREATIONS" },
  { uri: "/articles", ariaLabel: "Read articles From Hein Thant", label: "ARTICLES" },
  { uri: "/contact", ariaLabel: "Get in touch with Hein Thant", label: "CONTACT ME" },
]; // nav routes
