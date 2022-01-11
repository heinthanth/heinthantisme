import type { ReactNode } from "react";

const NoScriptWrapper = ({ shouldWrap, children }: { shouldWrap: boolean; children: ReactNode }) =>
  shouldWrap ? <noscript>{children}</noscript> : <>{children}</>;

const NoScriptPageComp = ({ isNoScript = true }: { isNoScript?: boolean }) => (
  <NoScriptWrapper shouldWrap={isNoScript}>
    <div className="fixed w-full h-full bg-white flex items-center z-50">
      <div className="container">
        <h1 className="text-3xl sm:text-4xl md:text-5xl mb-8">Well, I Need JavaScript!</h1>
        <p className="text-neutral-900 mb-4 md:mb-2 lg:w-3/4">
          I know u r aware o&apos; malicious JavaScript scripts. But this site won&apos;t work
          without JavaScript.
        </p>
        <p className="text-neutral-900 mb-8 lg:w-3/4">
          So, please enable Javascript. In case, u want to use <b>without JavaScript</b>, please go
          to non-JS version o&apos; this site at&nbsp;
          <a
            className="text-neutral-800 underline underline-offset-1 decoration-2 decoration-solid"
            href="#"
          >
            this link
          </a>
          .&nbsp;SORRY, NOT SORRY FOR INCONVENIENT 🤪.
        </p>
      </div>
    </div>
  </NoScriptWrapper>
);

export default NoScriptPageComp;
