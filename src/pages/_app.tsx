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
// import Loading from "../components/loading";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";

const CustomApp = ({ Component, pageProps, theme }: AppProps & AppState) => {
  // const [loading, setLoading] = useState(false);
  // const router = useRouter();

  // useEffect(() => {
  //   setLoading(true);
  //   const handleStart = (url: string) =>
  //     url !== router.pathname ? setLoading(true) : setLoading(false);
  //   const handleComplete = () => setLoading(false);
  //   router.events.on("routeChangeStart", handleStart);
  //   router.events.on("routeChangeComplete", handleComplete);
  //   router.events.on("routeChangeError", handleComplete);
  //   setLoading(false);
  // }, [router]);

  return (
    <div id="hh-space" className={cx(theme.value, "font-mono")} data-theme={theme.value}>
      <SEO {...defaultSEO(theme.value)} />
      <Navbar />
      <main id="hh-main">{false ? <Loading /> : <Component {...pageProps} />}</main>
      <Script src="/_init/webp-detect.js" strategy="beforeInteractive" />
    </div>
  );
};

export default ReduxWrapper.withRedux(connect(({ theme }: AppState) => ({ theme }))(CustomApp));
