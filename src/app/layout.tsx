import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Utility PO Powers LLC – Powering Smarter Energy Solutions",
  description:
    "We combine institutional engineering expertise with modern commissioning systems, our carbon footprint, and build infrastructure that lasts.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
