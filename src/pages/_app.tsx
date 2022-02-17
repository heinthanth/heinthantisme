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
import PreLoader from "../components/preloader";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { sleep } from "../misc/helper";

const CustomApp = ({ Component, pageProps, theme }: AppProps & AppState) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const onResourceLoaded = () => sleep(1000).then(() => setLoading(false));
    // prettier-ignore
    (async () => {
      while (true) {
        if (document.readyState === "complete") {
          onResourceLoaded(); break; }
        await sleep(2000); }
    })(); // not good but safari :(
  }, []);

  useEffect(() => {
    const handleStart = (url: string) => url !== router.pathname && setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router.pathname, router.events]);

  return (
    <div id="hh-space" className={cx(theme.value, "font-mono")}>
      <SEO {...defaultSEO(theme.value)} />
      <Navbar />
      <main id="hh-main">
        <Component {...pageProps} />
      </main>
      <PreLoader visible={loading} />
      <Script src="/_init/webp-detect.js" strategy="beforeInteractive" />
    </div>
  );
};

export default ReduxWrapper.withRedux(connect(({ theme }: AppState) => ({ theme }))(CustomApp));
