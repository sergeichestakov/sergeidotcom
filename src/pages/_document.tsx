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
          <meta name="title" content="Sergei Chestakov's homepage" />
          <meta
            name="description"
            content="Sergei Chestakov's personal website & portfolio."
          />
          <meta name="image" content="https://sergei.com/sergeichestakov.jpg" />
          <meta name="url" content="https://sergei.com" />

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

          <meta name="twitter:title" content="Sergei Chestakov's homepage" />
          <meta name="twitter:creator" content="@sergeichestakov" />
          <meta name="twitter:site" content="@sergeichestakov" />
          <meta name="twitter:description" content="@sergeichestakov" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:image"
            content="https://sergei.com/sergeichestakov.jpg"
          />

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
