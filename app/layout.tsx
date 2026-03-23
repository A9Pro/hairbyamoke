import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";

export const metadata: Metadata = {
  title: "Hair by Amoke | Luxury Hair Artistry — Lagos",
  description:
    "Bespoke protective hairstyling by Amoke. Knotless braids, Cornrows, Ghana Weaving, Locs, Nails, Wig Installation. Book your appointment in Lagos, Nigeria.",
  keywords: [
    "hair braiding Lagos", "knotless braids Lagos", "Ghana weaving",
    "cornrows Lagos", "wig installation Lagos", "hairbyamoke",
    "natural hair Lagos", "protective styles Nigeria",
  ],
  authors:   [{ name: "Hair by Amoke" }],
  creator:   "Hair by Amoke",
  openGraph: {
    title:       "Hair by Amoke | Luxury Hair Artistry",
    description: "Bespoke hair artistry in Lagos, Nigeria.",
    type:        "website",
    locale:      "en_NG",
    siteName:    "Hair by Amoke",
  },
  twitter: {
    card:        "summary_large_image",
    title:       "Hair by Amoke",
    description: "Luxury hair artistry in Lagos, Nigeria.",
  },
  robots: {
    index:  true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect reduces font load latency significantly */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Single combined request — 1 network call for both fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        {/* DNS prefetch for external links */}
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://instagram.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#080808" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
