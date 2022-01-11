import { Fragment } from "react";
import Head from "../components/head";

const HomePage = () => (
  <Fragment>
    <Head title="HOME" />
    <div className="container flex items-center h-full">
      <h1 className="text-5xl font-bold">Hello World!</h1>
    </div>
    <div className="container flex items-center h-full">
      <h1 className="text-5xl font-bold">You Scrolled!</h1>
    </div>
  </Fragment>
);

export default HomePage;
