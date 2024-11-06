import type { Metadata } from "next";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "sdcard.photos",
  description: "A photo blog for a group of friends passionate about photography.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='bg-black'>
          {children}
          <Analytics />
      </body>
    </html>
);
}
