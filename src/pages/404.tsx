import { NextSeo } from "next-seo";
import cx from "classnames";
import css from "./404.module.sass";
import heroBanner from "../assets/images/home-page/banner.png";
import heroBannerWebp from "../assets/images/home-page/banner.png?webp";
import Link from "next/link";

const Error404 = () => (
  <div className={cx("error-404-screen", css.screen)}>
    {/* prettier-ignore */}
    <style jsx>
        {`.error-404-screen { --bg: url(${heroBanner}), linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)); --bg-webp: url(${heroBannerWebp}), linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)); }`}
      </style>
    <div className="container">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4">OMG, it&apos;s 404!</h1>
      <p className="text-neutral-900 mb-6">
        I know that&apos;s hurt. But the URL u requested is no longer exists. But check again later!
      </p>
      <div className="flex space-x-4 text-[0.95rem]">
        <Link href="/contact">
          <a className="inline-block w-fit ring-black ring-2 py-2 px-3 hover:bg-black hover:text-white transition-[background-color,color] duration-300">
            Report Issue
          </a>
        </Link>
        <Link href="/">
          <a className="inline-block w-fit ring-black ring-2 py-2 px-3 bg-black text-white">
            Back to Home
          </a>
        </Link>
      </div>
    </div>
    <NextSeo title="Oops, it's 404!" />
  </div>
);

export default Error404;
