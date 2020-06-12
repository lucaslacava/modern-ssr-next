import React from "react";
import Thumbnail from "../Thumbnail";

const Cast = ({ cast }) => {
  const renderCast = () => {
    return cast.map((castItem, index) => {
      const { image, name } = castItem.person;
      return (
        <li key={index}>
          <Thumbnail imageUrl={image?.medium} caption={name} small />
        </li>
      );
    });
  };
  return (
    <div className="cast">
      <h3>Cast</h3>
      <ul className="cast__list">{renderCast()}</ul>
      <style jsx>
        {`
          .cast__list {
            display: flex;
            flex-wrap: wrap;
          }

          .cast__list :global(li) {
            padding: 4px;
          }
        `}
      </style>
    </div>
  );
};

export default Cast;
