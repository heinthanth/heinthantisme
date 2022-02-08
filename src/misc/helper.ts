import { siteURL } from "./constants";

const absURL = (path: string): string => (path.startsWith("data:") ? path : `${siteURL}${path}`);

export { absURL };
