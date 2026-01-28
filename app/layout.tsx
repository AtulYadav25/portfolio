import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atul Yadav | Full Stack Developer",
  description:
    "I build web applications using TypeScript, React, Next.js and MongoDB. Full Stack Developer specializing in UI-focused products and blockchain/web3.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "MongoDB",
    "Web3",
  ],
  authors: [{ name: "Atul Yadav" }],
  openGraph: {
    title: "Atul Yadav | Full Stack Developer",
    description:
      "I build web applications using TypeScript, React, Next.js and MongoDB.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
