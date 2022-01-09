import type { NextComponentType, NextPageContext } from "next";
import { connect } from "react-redux";
import type { AppState } from "../redux/states";
import type { ThemeState } from "../redux/states/theme";
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
    <div id="hh-app" className="dark:bg-black">
      <Navbar />
      <Component {...pageProps} />
    </div>
  </div>
);

export default connect(({ theme }: AppState) => ({ theme }))(HeinHeinSpace);
