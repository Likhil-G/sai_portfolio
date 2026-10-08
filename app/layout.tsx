import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

const SITE_URL = "https://saikiran-edits.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Muthannagari Sai Kiran — Video Editor",
  description:
    "Video editor portfolio of Muthannagari Sai Kiran — long-form & short-form YouTube edits, social reels, and event highlight films. Premiere Pro, After Effects, DaVinci Resolve.",
  keywords: [
    "video editor",
    "video editing portfolio",
    "YouTube editor",
    "reels editor",
    "event video editor",
    "Muthannagari Sai Kiran",
    "Premiere Pro editor",
    "DaVinci Resolve editor",
  ],
  openGraph: {
    title: "Muthannagari Sai Kiran — Video Editor",
    description:
      "Long-form & short-form YouTube edits, social reels, and event highlight films.",
    url: SITE_URL,
    siteName: "Sai Kiran — Video Editor",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muthannagari Sai Kiran — Video Editor",
    description:
      "Long-form & short-form YouTube edits, social reels, and event highlight films.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="grain bg-base text-ink font-body antialiased">
        {children}
      </body>
    </html>
  );
}
