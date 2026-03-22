import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";

export const metadata: Metadata = {
  title: "Hair by Amoke | Luxury Hair Artistry — Lagos",
  description: "Bespoke protective hairstyling by Amoke. Knotless braids, Cornrows, Ghana Weaving, Locs, Nails, Wig Installation. Book your appointment in Lagos, Nigeria.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
