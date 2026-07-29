import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Utility PO Powers LLC",
  description: "Utility PO Powers LLC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
