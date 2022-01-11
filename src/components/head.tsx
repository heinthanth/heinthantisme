import NextHead from "next/head";
import type { ReactNode } from "react";
import * as sc from "../misc/constants";

const Head = ({
  title,
  description,
  link,
  image,
  creator,
  searchWords = [],
  kind = "website",
  localeOthers = ["my_MM"],
  children,
  ...rest
}: {
  title?: string;
  description?: string;
  link?: string;
  image?: string;
  creator?: string;
  searchWords?: string[];
  kind?: string;
  canonical?: string;
  children?: ReactNode;
  locale?: string;
  localeOthers?: string[];
}) => (
  <NextHead>
    {children || null}
    <title key="pg-title">{title ? sc.titleGen(title) : sc.title}</title>
    <meta key="mt-title" name="title" content={title ? sc.titleGen(title) : sc.title} />
    <meta key="mt-description" name="description" content={description || sc.description} />
    <meta
      key="mt-keywords"
      name="keywords"
      content={[...sc.searchWords, ...searchWords].join(", ")}
    />
    <meta key="mt-author" name="author" content={creator || sc.creator} />
    <meta key="mt-creator" name="creator" content={creator || sc.creator} />
    <link key="mt-canonical" rel="canonical" href={rest.canonical || sc.siteURL} />
    <meta key="og-type" property="og:type" content={kind} />
    <meta key="og-url" property="og:url" content={link || sc.siteURL} />
    <meta key="og-title" property="og:title" content={title ? sc.titleGen(title) : sc.title} />
    <meta key="og-desc" property="og:description" content={description || sc.description} />
    <meta key="og-image" property="og:image" content={image || sc.coverLocation} />
    <meta key="og-locale" property="og:locale" content={rest.locale || "en_US"} />
    {localeOthers.map((locale, index) => (
      <meta key={`og-locale-alt-${index}`} property="og:locale:alternate" content={locale} />
    ))}
    <meta key="og-sitename" property="og:site_name" content={sc.siteName} />
    <meta key="tw-card" property="twitter:card" content="summary_large_image" />
    <meta key="tw-url" property="twitter:url" content={link || sc.siteURL} />
    <meta key="tw-title" property="twitter:title" content={title ? sc.titleGen(title) : sc.title} />
    <meta key="tw-desc" property="twitter:description" content={description || sc.description} />
    <meta key="tw-image" property="twitter:image" content={image || sc.coverLocation} />
  </NextHead>
);

export default Head;
