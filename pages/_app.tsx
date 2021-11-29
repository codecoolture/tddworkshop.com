import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { Toaster } from "react-hot-toast";
import { useFathom } from "../hooks";
import "../styles/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  useFathom();

  return (
    <React.Fragment>
      {/*
          Adding <meta name="viewport" ...> in pages/_document.tsx will lead to unexpected results
          since it cannot be deduped. The viewport tag should be handled by next/head in pages/_app.tsx.

          https://nextjs.org/docs/messages/no-document-viewport-meta
      */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Component {...pageProps} />

      <Toaster />
    </React.Fragment>
  );
}
