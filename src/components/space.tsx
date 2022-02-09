import type { NextComponentType, NextPageContext } from "next";
import { connect } from "react-redux";
import type { AppState } from "../redux/states";
import type { ThemeState } from "../redux/states/theme";
import Navbar from "./navbar";
import cx from "classnames";
import { DefaultSeo as SEO } from "next-seo";
import Script from "next/script";
import defaultSEO from "../misc/seo.config";

const HeinHeinSpace = ({
  Component,
  pageProps,
  theme: { value: theme },
}: {
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
  theme: ThemeState;
}) => (
  <div id="hh-space" className={cx(theme, "font-mono")} data-theme={theme}>
    <SEO {...defaultSEO(theme)} />
    <Navbar />
    <main id="hh-main">
      <Component {...pageProps} />
    </main>
    <Script src="/_init/webp-detect.js" strategy="beforeInteractive" />
  </div>
);

export default connect(({ theme }: AppState) => ({ theme }))(HeinHeinSpace);
