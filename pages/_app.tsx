import React from "react";
import { AppProps } from "next/dist/next-server/lib/router/router";
import NextHead from "next/head";
import { Global } from "@emotion/react";
import { globalStyles } from "src/globalStyles";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Global styles={globalStyles} />
      <NextHead>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Varela+Round:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </NextHead>
      <Component {...pageProps} />
    </>
  );
};

export default App;
