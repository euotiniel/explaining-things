import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { rootMetadata } from "./metadata";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const departureMono = localFont({
  src: [
    {
      path: "../public/fonts/DepartureMono-1.500/DepartureMono-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-departure-mono",
});

export const metadata: Metadata = rootMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${departureMono.variable} ${geistMono.variable} ${geistSans.variable} antialiased`}
      >
        <div className="flex justify-center px-5 py-16">
          <div className="flex w-full max-w-[1100px] flex-col">{children}</div>
        </div>
      </body>
    </html>
  );
}
