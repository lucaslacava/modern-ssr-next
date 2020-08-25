import React from "react";
import Thumbnail from "../Thumbnail";

const Cast = ({ cast }) => {
  const renderCast = () => {
    return cast.map((castItem, index) => {
      const { image, name, id } = castItem.person;
      return (
        <li key={index}>
          <Thumbnail
            imageUrl={image?.medium}
            caption={name}
            small
            href={`/cast?personId=${id}`}
            as={`/cast/${id}`}
          />
        </li>
      );
    });
  };
  return (
    <div className="cast">
      <h1>Cast</h1>
      <ul className="cast__list">{renderCast()}</ul>
      <style jsx>
        {`
          .cast {
            color: #f7dfd4;
            text-align: center;
          }
          .cast h1 {
            padding-top: 10px;
            margin: 15px;
            color: #e2b091;
          }
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
