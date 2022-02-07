import { Fragment } from "react";
import { NextSeo } from "next-seo";
import Img from "react-optimized-image";
import homeCss from "./home.module.sass";
import uitOc from "../assets/images/home-page/ht-uit-oc.webp";
import Link from "next/link";

const HomePage = () => (
  <Fragment>
    <NextSeo title="Home" />
    <div
      className={homeCss.hero}
      // prettier-ignore
      style={{ backgroundImage: `url(${require("../assets/images/home-page/banner.webp")}), linear-gradient(rgba(255, 255, 255, .4),rgba(255, 255, 255, .4)` }}
    >
      <div className="grid lg:grid-cols-2 gap-x-4 gap-y-8 h-full container">
        <Fragment>
          <div className="flex flex-col justify-center lg:mt-[-80px]">
            <h1 className="text-[2.95rem] leading-none sm:text-5xl font-bold mb-4 ml-[-2px] select-none">
              HEIN THANT.
            </h1>
            <p className="text-justify text-[0.95rem] sm:text-base mb-6">
              Just a Computer Science student, Full Stack Web Developer, Junior Flutter Developer,
              Junior DevOps, Linux, Open Source Enthusiast and Beginner EDM Producer.
            </p>
            <div className="flex space-x-4 text-[0.95rem]">
              <Link href="#">
                <a className="inline-block w-fit ring ring-black ring-2 py-2 px-3 hover:bg-black hover:text-white transition-[background-color,color] duration-300">
                  creations
                </a>
              </Link>
              <Link href="#">
                <a className="inline-block w-fit ring ring-black ring-2 py-2 px-3 bg-black text-white">
                  curriculum vitae
                </a>
              </Link>
            </div>
          </div>
          <div className="pr-0 lg:pl-2 xl:pl-[8.5rem] flex flex-col justify-center lg:mt-[-80px]">
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
