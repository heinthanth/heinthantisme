import { Fragment } from "react";
import { Fade } from "react-awesome-reveal";
import Head from "../components/head";

const HomePage = () => (
  <Fragment>
    <Head title="HOME" />
    <Fade delay={400} className="container hh-section flex items-center h-full">
      <h1 className="text-5xl font-bold">Hello World!</h1>
    </Fade>
    <Fade delay={400} className="container hh-section flex items-center h-full">
      <h1 className="text-5xl font-bold">You Scrolled!</h1>
    </Fade>
  </Fragment>
);

export default HomePage;
