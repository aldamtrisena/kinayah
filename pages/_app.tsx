import React, { useEffect } from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import "./_app.css";
import TagManager from "react-gtm-module";

// import type { AppProps } from 'next/app'

// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

// export default MyApp

export default function MyApp(props: any) {
  const { Component, pageProps } = props;

  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-WXL7JWS" });
  }, []);

  return (
    <React.Fragment>
      <Head>
        {/* <title>My page</title> */}
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <title>{"Kinaya"}</title>
        <meta name="title" content={""} />
        <meta name="description" content={"description"} />
        {/* <meta name="keywords" content={"daftar izzah"} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Menuju Izzah Tetap Ikhtiar- jaga izzah" />
        <meta property="og:url" content="https://daftar.trizzah.co.id/" />
        <meta
          property="og:description"
          content="Di sini kita belajar, hijrah, dan scale up bersama dari pedagang ke pebisnis sesuai syariah."
        />
        <meta
          property="og:image"
          content="https://terampil-public.s3.ap-southeast-1.amazonaws.com/assets/images/image_izzah.jpeg"
        /> */}

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Display:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,700&display=swap"
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
