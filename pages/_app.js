import React from "react";
import App from "next/app";
import Header from "../components/Header";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,300&display=swap"
            rel="stylesheet"
          />
        </head>
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
          `}
        </style>
      </>
    );
  }
}

export default MyApp;
