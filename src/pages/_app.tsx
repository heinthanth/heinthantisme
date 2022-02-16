import type { AppProps } from "next/app";
import { ReduxWrapper } from "../redux";
import { connect } from "react-redux";
import type { AppState } from "../redux/states";
import Navbar from "../components/navbar";
import cx from "classnames";
import { DefaultSeo as SEO } from "next-seo";
import Script from "next/script";
import defaultSEO from "../misc/seo.config";
import "./_app.sass";
import { useEffect, useState } from "react";
import Loading from "../components/loading";
import { AnimatePresence } from "framer-motion";

const CustomApp = ({ Component, pageProps, theme }: AppProps & AppState) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const windowOnLoad = () =>
      new Promise((resolve) => setTimeout(resolve, 1000)).then(() => setLoading(false));
    window.addEventListener("load", windowOnLoad);
    return () => window.removeEventListener("load", windowOnLoad);
  }, []);

  return (
    <div id="hh-space" className={cx(theme.value, "font-mono")}>
      <SEO {...defaultSEO(theme.value)} />
      <Navbar />
      <main id="hh-main">
        <Component {...pageProps} />
      </main>
      <Script src="/_init/webp-detect.js" strategy="beforeInteractive" />
      <AnimatePresence>{loading && <Loading />}</AnimatePresence>
    </div>
  );
};

export default ReduxWrapper.withRedux(connect(({ theme }: AppState) => ({ theme }))(CustomApp));
