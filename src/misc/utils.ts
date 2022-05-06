import siteURL from "./siteURL.mjs";

// helper to get absolute URL
export const absURL = (path: string): string =>
  path.startsWith("data:") ? path : `${siteURL}${path}`;

// sleep for given milliseconds
export const sleep = (milliseconds: number) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));
