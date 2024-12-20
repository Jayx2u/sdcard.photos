import type { Metadata } from "next";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "sdcard.photos",
  description: "A photo blog for a group of friends passionate about photography.",
  openGraph: {
    type: "website",
    url: "https://sdcard.photos",
    title: "sdcard.photos",
    description: "A photo blog for a group of friends passionate about photography.",
    images: [
      {
        url: "https://cloud-mgro5i2t6-hack-club-bot.vercel.app/0og-image.png",
        width: 1200,
        height: 600,
      },
    ],
  },
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
