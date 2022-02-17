import { siteURL } from "./constants";

export const absURL = (path: string): string =>
  path.startsWith("data:") ? path : `${siteURL}${path}`;

export const sleep = (milliseconds: number) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));
