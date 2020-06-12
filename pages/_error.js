import Error from "next/error";

const CustomError = ({ statusCode }) => {
  if (statusCode === 404) {
    return (
      <Error statusCode={statusCode} title="Oops! There was a problem here" />
    );
  }

  return <Error statusCode={statusCode} title="Internal server error" />;
};

CustomError.getInitialProps = ({ err, res }) => {
  return {
    statusCode: res ? res.statusCode : err ? err.statusCode : 404,
  };
};

export default CustomError;
