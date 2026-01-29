import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://atulyadav.vercel.app"),
  title: "Atul Yadav | Full Stack Web Developer",
  description:
    "I build web applications using TypeScript, React, Next.js and MongoDB. Full Stack Developer specializing in UI-focused products and Web3.",

  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "MongoDB",
    "Web3 Developer",
  ],

  authors: [{ name: "Atul Yadav" }],

  openGraph: {
    title: "Atul Yadav | Full Stack Developer",
    description:
      "Full Stack Developer building modern UI-focused web applications using React, Next.js, TypeScript, and Web3.",
    url: "https://atulyadav.vercel.app",
    siteName: "Atul Yadav Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 758,
        height: 758,
        alt: "Atul Yadav - Full Stack Web Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Atul Yadav | Full Stack Web Developer",
    description:
      "I build web applications using TypeScript, React, Next.js, MongoDB, and Web3.",
    images: ["/og-image.png"],
    creator: "@atulcode",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
