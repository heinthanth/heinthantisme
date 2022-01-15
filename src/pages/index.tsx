import { Fragment } from "react";
import { Fade } from "react-awesome-reveal";
import { NextSeo } from "next-seo";
import cx from "classnames";
import commonCss from "../components/common.module.sass";
import homeCss from "./home.module.sass";
import uitOc from "../assets/images/ht-at-uit.png";

const HomePage = () => (
  <Fragment>
    <NextSeo title="Home" />
    <div className={cx(commonCss.section, homeCss.hero)}>
      <Fade className="lg:grid grid-cols-2 gap-x-4 h-full container" delay={400}>
        <Fragment>
          <div className="flex flex-col justify-center mb-8 lg:mt-[-100px]">
            <small className="block text-sm mb-3">Hi there, It&apos;s me,</small>
            <h1 className="text-5xl font-bold mb-3 ml-[-2px]">HEIN HEIN.</h1>
            <p className="text-justify">
              Just a CS student, Full Stack Web Developer, Junior Flutter Developer, Junior DevOps,
              Linux and Open Source Enthusiastic.
            </p>
          </div>
          <div className="pr-0 lg:pl-16 flex flex-col justify-center mb-6 lg:mt-[-100px]">
            <img
              className="border-2 border-solid border-black w-full mb-2 lg:mt-16"
              src={uitOc}
              alt="Hein Thant at UIT Open Campus exploring others projects"
            />
            <small className="text-neutral-600 text-xs block">
              they, both, are my friends and have asked their permission.
            </small>
          </div>
        </Fragment>
      </Fade>
    </div>
  </Fragment>
);

export default HomePage;
