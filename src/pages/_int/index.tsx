import Link from "next/link";
import { Fragment } from "react";
import { Fade } from "react-awesome-reveal";
import { NextSeo } from "next-seo";
import cx from "classnames";
import common from "../../components/common.module.sass";

const IndexPage = () => (
  <Fragment>
    <NextSeo title="Home" />
    <Fade delay={400} className={cx("container flex items-center h-full", common.section)}>
      <div className="mt-[-100px]">
        <h1 className="text-5xl font-bold mb-8">Hello World!</h1>
        <p className="text-neutral-900 mb-2">
          This site is development version of&nbsp;
          <a
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-1 decoration-2 decoration-solid"
            href="https://heinthanth.com"
          >
            https://heinthanth.com
          </a>
        </p>
        <p className="text-neutral-900 mb-2">
          But see&nbsp;
          <Link href="/home">
            <a
              className="underline underline-offset-1 decoration-2 decoration-solid"
              aria-label="click here to view current development verison of https://heinthanth.com"
            >
              current development version
            </a>
          </Link>
          &nbsp;here.
        </p>
      </div>
    </Fade>
  </Fragment>
);

export default IndexPage;
