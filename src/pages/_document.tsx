import { Html, Head, Main, NextScript } from "next/document";
import NoScript from "../components/noscript";

const Document = () => (
  <Html lang="en">
    <Head />
    <body>
      <NoScript />
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
