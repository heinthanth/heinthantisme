import { Fragment } from "react";
import { Fade } from "react-awesome-reveal";
import { NextSeo } from "next-seo";

const HomePage = () => (
  <Fragment>
    <NextSeo title="Home" />
    <div className="container hh-section flex items-center h-full">
      <Fade delay={400}>
        <h1 className="text-5xl font-bold mb-2">Hi, welcome to Home!</h1>
      </Fade>
    </div>
    <div className="container hh-section flex items-center h-full">
      <Fade delay={400}>
        <h1 className="text-5xl font-bold mb-2">You Scrolled!</h1>
      </Fade>
    </div>
  </Fragment>
);

export default HomePage;
