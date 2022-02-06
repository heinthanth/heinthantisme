import { Html, Head, Main, NextScript } from "next/document";
import NoScript from "../components/noscript";

const Document = () => (
  <Html lang="en">
    <Head />
    <body className="font-mono">
      <NoScript />
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
