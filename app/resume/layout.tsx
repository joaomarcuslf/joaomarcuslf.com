import type { Metadata } from "next";

import site from "@/site";

import "@/public/css/vendors.scss";
import "@/public/css/style.scss";
import "@/public/css/resume.scss";

export const metadata: Metadata = {
  title: site.name,
  description: site.description,
  robots: "noindex,nofollow",
  twitter: {
    card: "summary",
    site: "@",
    creator: `@${site.username}`,
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
      <body className="vsc-initialized">
        <div id="main" role="main" className="main">
          {children}
        </div>
      </body>
    </html>
  );
}
