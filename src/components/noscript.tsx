import { NextSeo } from "next-seo";
import type { ReactNode } from "react";
import backgroundBanner from "../assets/images/home-page/banner.png";

const NoScriptWrapper = ({ shouldWrap, children }: { shouldWrap: boolean; children: ReactNode }) =>
  shouldWrap ? <noscript>{children}</noscript> : <>{children}</>;

const NoScriptPageComp = ({ isNoScript = true }: { isNoScript?: boolean }) => (
  <NoScriptWrapper shouldWrap={isNoScript}>
    <NextSeo title="Oops, need JavaScript!" />
    <div
      className="fixed w-full h-full flex items-center z-50 bg-cover bg-center"
      // prettier-ignore
      style={{ backgroundImage: `url(${backgroundBanner}), linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 1))`, backgroundBlendMode: "multiply" }}
    >
      <div className="container">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-8">Well, I Need JavaScript!</h1>
        <p className="text-neutral-900 mb-4 lg:mb-2">
          I know u r aware o&apos; malicious JavaScript scripts. But this site won&apos;t work
          without JavaScript.
        </p>
        <p className="text-neutral-900 mb-8 lg:w-3/4">
          So, please enable Javascript.
          <span className="hidden">
            {" "}
            In case, u want to use <b>without JavaScript</b>, please go to non-JS version o&apos;
            this site at&nbsp;
            <a
              className="text-neutral-800 underline underline-offset-1 decoration-2 decoration-solid"
              href="#"
            >
              this link
            </a>
            {"."}
          </span>
          &nbsp;SORRY, NOT SORRY FOR INCONVENIENT 🤪.
        </p>
      </div>
    </div>
  </NoScriptWrapper>
);

export default NoScriptPageComp;
