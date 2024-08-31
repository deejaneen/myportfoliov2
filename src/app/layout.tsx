import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import GoogleAnalytics from "./GoogleAnalytics";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Djanine Tara Tomelden Portfolio",
  description: "Portfolio website of Djanine Tara Tomelden",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <GoogleAnalytics />
      <body className={clsx(jakartaSans.className, "antialiased")}>
        {children}
      </body>
    </html>
  );
}
