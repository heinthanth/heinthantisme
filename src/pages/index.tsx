import Link from "next/link";
import { Fragment } from "react";
import { Fade } from "react-awesome-reveal";
import Head from "../components/head";

const IndexPage = () => (
  <Fragment>
    <Head title="HOME" />
    <Fade delay={400} className="container hh-section flex items-center h-full">
      <div>
        <h1 className="text-5xl font-bold mb-2">Hello World!</h1>
        <p>
          This site is devel version of{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-1 decoration-2 decoration-solid"
            href="https://heinthanth.com"
          >
            https://heinthanth.com
          </a>
          , but&nbsp;
          <Link href="/home">
            <a className="underline underline-offset-1 decoration-2 decoration-solid">click here</a>
          </Link>
          &nbsp;to continue.
        </p>
      </div>
    </Fade>
  </Fragment>
);

export default IndexPage;
