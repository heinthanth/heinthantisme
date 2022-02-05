import { Fragment } from "react";
import { NextSeo } from "next-seo";
import Img from "react-optimized-image";
import homeCss from "./home.module.sass";
import uitOc from "../assets/images/home-page/ht-uit-oc.webp";

const HomePage = () => (
  <Fragment>
    <NextSeo title="Home" />
    <div
      className={homeCss.hero}
      style={{ backgroundImage: `url(${require("../assets/images/home-page/banner.webp")})` }}
    >
      <div className="lg:grid grid-cols-2 gap-x-4 h-full container">
        <Fragment>
          <div className="flex flex-col justify-center mb-4 lg:mt-[-80px]">
            <small className="block text-sm mb-4">Hi there, It&apos;s me,</small>
            <h1 className="text-5xl font-bold mb-4 ml-[-2px] select-none">HEIN HEIN.</h1>
            <p className="text-justify mb-5 break-all [hyphens:auto]">
              Just a Computer Science student, Full Stack Web Developer, Junior Flutter Developer,
              Junior DevOps, Linux, Open Source Enthusiast and Beginner EDM Producer.
            </p>
          </div>
          <div className="pr-0 lg:pl-2 xl:pl-[8.5rem] flex flex-col justify-center mb-6 lg:mt-[-80px]">
            <div className="relative ring-2 ring-[#333] w-full mb-4 lg:mt-16 pointer-events-none select-none">
              <Img
                src={uitOc}
                width={1024}
                height={1024}
                alt="Hein Thant at UIT Open Campus 2018"
              />
            </div>
            <small className="text-neutral-400 text-xs block select-none">
              they, both, are my friends and have asked their permission to use here.
            </small>
          </div>
        </Fragment>
      </div>
    </div>
  </Fragment>
);

export default HomePage;
