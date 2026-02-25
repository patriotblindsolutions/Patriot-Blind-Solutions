import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Patriot Blind Solutions | Houston, TX — Industrial Positive Isolation",
  description: "Patriot Blind Solutions, based in Houston, TX, is the nationwide leader in industrial Blinding Management Systems. Providing critical positive isolation support for large-scale refinery and chemical plant turnarounds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${roboto.variable} bg-white text-gray-900 font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
