import { Html, Head, Main, NextScript } from "next/document";
import NoScriptPageComp from "./noscript";

const Document = () => (
  <Html lang="en">
    <Head>
      <meta charSet="utf-8" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <body>
      <NoScriptPageComp />
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
