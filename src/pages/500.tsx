import ErrorPageComp from "../components/error";

const Error500 = () => (
  <ErrorPageComp statusCode={500}>
    I know that&apos;s hurt. Something went wrong with this website. But check again later!
  </ErrorPageComp>
);

export default Error500;
