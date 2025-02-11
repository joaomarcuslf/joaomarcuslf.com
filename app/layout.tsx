import type { Metadata } from "next";

import site from "@/site";
import Navbar from "@/components/theme/navbar";
import Footer from "@/components/theme/footer";

import "@/public/css/vendors.scss";
import "@/public/css/style.scss";

export const metadata: Metadata = {
  title: site.name,
  description: site.description,
  robots: "index,follow",
  twitter: {
    card: "summary",
    site: `@${site.username}`,
    creator: `@${site.username}`,
  },
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [
      {
        url: "/images/logo-hex.webp",
        width: 500,
        height: 372,
        alt: site.name,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  keywords: site.keywords,
  abstract: site.abstract,
  authors: {
    name: site.author,
    url: site.url,
  },
  icons: {
    icon: {
      url: "/favicon.ico",
      sizes: "any",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="vsc-initialized has-navbar-fixed-top">
        <Navbar />

        <div id="main" role="main" className="main">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
