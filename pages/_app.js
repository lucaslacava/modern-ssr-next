import React from "react";
import App from "next/app";
import Header from "../components/Header";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,300&display=swap"
            rel="stylesheet"
          />
        </head>
        <body>
          <Header />
          <Component {...pageProps} />
          <style jsx>
            {`
              :global(ul) {
                padding: 0;
                margin: 0;
                list-style-type: none;
              }
              :global(body) {
                font-family: "Roboto", sans-serif;
                background-color: #32485c;
              }
              :global(form) {
                display: flex;
                width: 100%;
                flex-direction: column;
                text-align: center;
              }
              :global(input) {
                margin-bottom: 10px;
                padding: 10px;
                width: 100%;
                box-sizing: border-box;
              }
              :global(button) {
                padding: 10px;
                margin-bottom: 10px;
                border-radius: 8px;
                cursor: pointer;
                background-color: #f7dfd4;
                font-size: 1rem;
              }
              :global(.error) {
                color: red;
                padding-bottom: 10px;
              }
            `}
          </style>
        </body>
      </div>
    );
  }
}

export default MyApp;
