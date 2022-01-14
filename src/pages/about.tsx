import { NextSeo } from "next-seo";
import { Fragment } from "react";
import cx from "classnames";
import common from "../components/common.module.sass";
import { Fade } from "react-awesome-reveal";

const AboutPage = () => (
  <Fragment>
    <NextSeo title="Who Am I" />
    <div className={cx("container flex items-center h-full", common.section)}>
      <Fade delay={400}>
        <h1 className="text-5xl font-bold mb-2">It&apos;s who I am!</h1>
      </Fade>
    </div>
    <div className={cx("container flex items-center h-full", common.section)}>
      <Fade delay={400}>
        <h1 className="text-5xl font-bold mb-2">You Scrolled!</h1>
      </Fade>
    </div>
  </Fragment>
);

export default AboutPage;
