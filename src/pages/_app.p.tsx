import type { AppProps } from "next/app";
import { createElement } from "react";
import HeinHeinSpace from "../components/space";
import { ReduxWrapper } from "../redux";
import "./_app.sass";

const CustomApp = ({ Component, pageProps }: AppProps) =>
  createElement(HeinHeinSpace, { Component, pageProps });

export default ReduxWrapper.withRedux(CustomApp);
