import { NextSeo } from "next-seo";
import cx from "classnames";
import css from "./error.module.sass";
import heroBanner from "../assets/images/home-page/banner.png";
import heroBannerWebp from "../assets/images/home-page/banner.png?webp";
import Link from "next/link";
import type { ReactNode } from "react";

const ErrorPageComp = ({ statusCode, children }: { statusCode: number; children: ReactNode }) => (
  <div className={cx("error-screen", css.screen)}>
    {/* prettier-ignore */}
    <style jsx>
        {`.error-screen { --bg: url(${heroBanner}), linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)); --bg-webp: url(${heroBannerWebp}), linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)); }`}
      </style>
    <div className="container">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4">OMG, it&apos;s {statusCode}!</h1>
      <p className="text-neutral-900 mb-6">{children}</p>
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
    <NextSeo title={`Oops, it's ${statusCode}!`} />
  </div>
);

export default ErrorPageComp;
