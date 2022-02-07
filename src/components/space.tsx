import type { NextComponentType, NextPageContext } from "next";
import { connect } from "react-redux";
import Head from "next/head";
import type { AppState } from "../redux/states";
import type { ThemeState } from "../redux/states/theme";
import Navbar from "./navbar";
// import SettingButton from "./settingbtn";
import { DefaultSeo as SEO } from "next-seo";
import { siteName, siteURL, description, coverLocation, creator } from "../misc/constants";

const HeinHeinSpace = ({
  Component,
  pageProps,
  theme: { value: theme },
}: {
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
  theme: ThemeState;
}) => (
  <div id="hh-space" className={theme} data-theme={theme}>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.webp" />
      <link rel="icon" type="image/webp" sizes="32x32" href="/icons/favicon-32x32.webp" />
      <link rel="icon" type="image/webp" sizes="16x16" href="/icons/favicon-16x16.webp" />
      <link rel="manifest" href="/space.webmanifest" />
      <meta key="color-scheme" name="color-scheme" content={theme} />
      <meta key="theme-color" name="theme-color" content="#FFFFFF" />
      <meta name="creator" content={creator} />
    </Head>
    <SEO
      defaultTitle={siteName}
      titleTemplate={`%s - ${siteName}`}
      description={description}
      canonical={siteURL}
      twitter={{ cardType: "summary_large_image", handle: "@heinthanth" }}
      openGraph={{ type: "website", site_name: siteName, images: [coverLocation] }}
    />
    <Navbar />
    <main id="hh-main">
      <Component {...pageProps} />
    </main>
  </div>
);

export default connect(({ theme }: AppState) => ({ theme }))(HeinHeinSpace);
