import { AppProps } from "next/app";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Sergei Chestakov | Portfolio</title>
        <meta name="og:title" content="Sergei Chestakov's homepage" />
        <meta
          name="og:description"
          content="Sergei Chestakov's personal website & portfolio"
        />
        <meta
          name="og:image"
          content="https://sergei.com/sergeichestakov.jpg"
        />
        <meta name="og:url" content="https://sergei.com" />
      </Head>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
