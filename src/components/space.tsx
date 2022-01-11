import type { NextComponentType, NextPageContext } from "next";
import { connect } from "react-redux";
import type { AppState } from "../redux/states";
import type { ThemeState } from "../redux/states/theme";
import Head from "./head";
import Navbar from "./navbar";

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
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
      <link rel="manifest" href="/space.webmanifest" />
      <meta key="color-scheme" name="color-scheme" content={theme} />
      <meta key="theme-color" name="theme-color" content="#FFFFFF" />
    </Head>
    <div id="hh-app">
      <Navbar />
      <Component {...pageProps} />
    </div>
  </div>
);

export default connect(({ theme }: AppState) => ({ theme }))(HeinHeinSpace);
