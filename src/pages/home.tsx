import { Fragment } from "react";
import { Fade } from "react-awesome-reveal";
import { NextSeo } from "next-seo";
import cx from "classnames";
import common from "../components/common.module.sass";
import Image from "next/image";
import uitOc from "../assets/images/ht-at-uit.png";

const HomePage = () => (
  <Fragment>
    <NextSeo title="Home" />
    {/* prettier-ignore */}
    <div className={cx("container h-full", common.section, "bg-[url('../assets/images/home-hero.png')] bg-cover bg-no-repeat bg-center")}>
      <Fade className="md:grid grid-cols-2 gap-x-4 h-full" delay={400}>
        <Fragment>
          <div className="flex flex-col justify-center mb-8 md:mt-[-100px]">
            <small className="block text-sm mb-3">Hello World, I&apos;m</small>
            <h1 className="text-5xl font-bold mb-3 ml-[-2px]">HEIN HEIN.</h1>
            <p>Pro Web Developer, Junior Flutter Developer, Junior DevOps</p>
          </div>
          <div className="pr-0 md:pl-32 lg:pl-32 flex items-center justify-center mb-6 md:mt-[-100px]">
            <div className="relative border-2 border-solid border-black w-full md:mt-16">
              <Image
                layout="responsive"
                src={uitOc}
                alt="Hein Thant at UIT Open Campus exploring others projects"
              />
            </div>
          </div>
        </Fragment>
      </Fade>
    </div>
  </Fragment>
);

export default HomePage;
