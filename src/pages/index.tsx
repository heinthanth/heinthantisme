import { Fragment } from "react";
import { Fade } from "react-awesome-reveal";
import { NextSeo } from "next-seo";
import cx from "classnames";
import Image from "../components/image";
import homeCss from "./home.module.sass";

import uitOc0p5x from "../assets/images/home-page/ht-uit-oc@0.5x.webp";
import uitOc from "../assets/images/home-page/ht-uit-oc@1x.webp";
import uitOc2x from "../assets/images/home-page/ht-uit-oc@2x.webp";

const HomePage = () => (
  <Fragment>
    <NextSeo title="Home" />
    <div
      className={cx(
        homeCss.hero,
        "pt-[calc(80px+1rem)] min-h-[800px] md:max-h-[1000px] md:h-screen pb-4"
      )}
    >
      {/* FIXME: `.hero::before` wrong z position when using `div` instead of `Fade` */}
      <Fade className="lg:grid grid-cols-2 gap-x-4 h-full container">
        <Fragment>
          <div className="flex flex-col justify-center mb-8 lg:mt-[-100px]">
            <small className="block text-sm mb-4">Hi there, It&apos;s me,</small>
            <h1 className="text-5xl font-bold mb-4 ml-[-2px] select-none">HEIN HEIN.</h1>
            <p className="text-justify mb-5">
              Just a CS student, Full Stack Web Developer, Junior Flutter Developer, Junior DevOps,
              Linux and Open Source Enthusiastic.
            </p>
          </div>
          <div className="pr-0 lg:pl-2 xl:pl-32 flex flex-col justify-center mb-6 lg:mt-[-100px]">
            <Image
              className="ring-2 ring-[#333] w-full mb-4 lg:mt-16 pointer-events-none select-none"
              src={uitOc}
              srcSet={`${uitOc0p5x} 256w, ${uitOc} 512w, ${uitOc2x} 1024w`}
              placeholder={uitOc0p5x}
              alt="Hein Thant at UIT Open Campus 2018"
              width={512}
              height={512}
              loading="eager"
            />
            <small className="text-neutral-400 text-xs block select-none">
              they, both, are my friends and have asked their permission to use here.
            </small>
          </div>
        </Fragment>
      </Fade>
    </div>
  </Fragment>
);

export default HomePage;
