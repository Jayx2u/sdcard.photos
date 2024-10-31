import type { Metadata } from "next";
import "./globals.css";

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
      <body>
        {children}
      </body>
    </html>
  );
}
