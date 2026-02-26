import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const barlowSans = Barlow({
  variable: "--font-barlow-sans",
  subsets: ["latin"],
  weight: ["400"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "FEM Project Tracking Intro Component | lilKriT",
  description: "Created by lilKriT using Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlowSans.variable} ${barlowCondensed.variable} antialiased`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
