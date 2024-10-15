import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const title = "Sergei Chestakov | Portfolio";
const description = "Sergei Chestakov's personal website and portfolio";
const name = "Sergei Chestakov";
const username = "@sergeichestakov";
const url = "https://sergei.com";
const image = `${url}/sergeichestakov.jpg`;

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name }],
  creator: name,
  twitter: {
    card: "summary_large_image",
    title,
    description,
    site: username,
    creator: username,
    images: [image],
  },
  openGraph: {
    title,
    description,
    url,
    siteName: "Sergei",
    images: [
      {
        url,
        width: 600,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
