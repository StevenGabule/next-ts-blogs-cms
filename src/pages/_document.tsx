/* eslint-disable @next/next/no-page-custom-font */
import { Head, Main, NextScript, Html } from 'next/document';
import React from 'react';

function MyDocument() {
  return (
    <html lang={'en'}>
      <Head nonce={'EDNnf03nceIOfn39fn3e9h3sdfa'}>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha256-pMhcV6/TBDtqH9E9PWKgS+P32PVguLG8IipkPyqMtfY="
          crossOrigin="anonymous"
        />
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <Html />
        <NextScript />
      </body>
      <style global jsx>
        {`
          body {
            font-family: 'Roboto', sans-serif;
          }
        `}
      </style>
    </html>
  );
}

export default MyDocument;
