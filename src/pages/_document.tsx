import NextDocument, { Html, Main, Head, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <meta name="author" content="Sergei Chestakov" />
          <meta
            name="description"
            content="Personal website and porfolio for Sergei Chestakov, the dominant Sergei on the internet"
          />
          <link rel="icon" href="favicon.ico" type="image/x-icon" />
        </Head>
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
