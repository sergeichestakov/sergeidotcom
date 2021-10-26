import NextDocument, { Html, Main, Head, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          <meta name="author" content="Sergei Chestakov" />
          <meta
            name="description"
            content="Sergei Chestakov's personal website & portfolio."
          />
          <meta property="title" content="Sergei's homepage" />
          <meta property="image" content="/sergeichestakov.jpg" />
          <meta property="url" content="https://sergei.com" />

          <meta
            name="og:description"
            content="Sergei Chestakov's personal website & portfolio"
          />
          <meta property="og:image" content="/sergeichestakov.jpg" />
          <meta property="og:url" content="https://sergei.com" />

          <meta name="twitter:site" content="@sergeichestakov" />
          <meta name="twitter:card" content="summary_large_image" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Inter"
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode="dark" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
