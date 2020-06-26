import React from "react";
import axios from "axios";
import parse from "html-react-parser";
import Cast from "../../components/Cast";
import { withAuthorization } from "../../utils/withAuthorization";
import CustomError from "../_error";

const ShowDetails = ({ show = {}, statusCode }) => {
  const { name, image, summary, _embedded } = show;
  if (statusCode) {
    return (
      <CustomError
        statusCode={statusCode}
        title="Oops! There was a problem here"
      />
    );
  }
  return (
    <div className="show-details">
      <div
        className="show-details__poster"
        style={{
          backgroundImage: `url(${image.original})`,
          backgroundSize: "cover",
          height: `300px`,
        }}
      />
      <h1>{name}</h1>
      {parse(summary)}
      {_embedded.cast.length > 0 && <Cast cast={_embedded.cast} />}
      <style jsx>
        {`
          .show-details {
            color: #f7dfd4;
          }
          .show-details h1 {
            text-align: center;
            color: #e2b091;
          }
          :global(p) {
            padding: 10px;
          }
        `}
      </style>
    </div>
  );
};

ShowDetails.getInitialProps = async ({ query }) => {
  try {
    const { showId } = query;
    const response = await axios.get(
      `https://api.tvmaze.com/shows/${showId}?embed=cast`
    );
    return {
      show: response.data,
    };
  } catch (error) {
    return {
      statusCode: error.response?.status || 500,
    };
  }
};

export default withAuthorization(ShowDetails);
