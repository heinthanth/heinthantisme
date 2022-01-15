import { NextSeo } from "next-seo";
import { Fragment } from "react";

const Error404 = () => (
  <Fragment>
    <NextSeo title="Oops, it's 404!" />
    <div className="fixed w-full h-full bg-white flex items-center">
      <div className="container">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4">OMG, it&apos;s 404!</h1>
        <p className="text-neutral-900 mb-4 lg:mb-2">
          I know that&apos;s hurt. But the URL u requested is no longer exists. But check again
          later!
        </p>
      </div>
    </div>
  </Fragment>
);

export default Error404;
