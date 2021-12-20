import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import './_app.css';


// import type { AppProps } from 'next/app'

// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

// export default MyApp

export default function MyApp(props: any) {
  const { Component, pageProps } = props;

  return (
    <React.Fragment>
      <Head>
        {/* <title>My page</title> */}
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <title>{"PT Muamalah Menuju Izzah Tetap Ikhtiar- jaga izzah"}</title>
        <meta name="title" content={"PT Muamalah Menuju Izzah Tetap Ikhtiar- jaga izzah"} />
        <meta name="description" content={"description"} />
        <meta name="keywords" content={"keywords"} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,500;1,700;1,800&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"></link>
        <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
