import ErrorPageComp from "../components/error";

const Error404 = () => (
  <ErrorPageComp statusCode={404}>
    I know that&apos;s hurt. But the URL u requested is no longer exists. But check again later!
  </ErrorPageComp>
);

export default Error404;
