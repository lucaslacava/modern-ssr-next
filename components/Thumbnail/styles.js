import css from "styled-jsx/css";

const ThumbnailStyles = css`
  .thumbnail {
    margin: 10px;
  }
  .thumbnail__image {
    border-radius: 8px;
    width: 100%;
  }
  .thumbnail__image:hover {
    box-shadow: 11px 7px 25px 2px rgba(143, 140, 143, 0.65);
  }
  .thumbnail__caption {
    font-size: 19px;
    color: #f7dfd4;
  }
  .thumbnail a {
    text-decoration: none;
  }
`;

export default ThumbnailStyles;
