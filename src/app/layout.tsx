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
  title: "Patriot Blind Solutions - Industrial Positive Isolation",
  description: "High-end B2B industrial landing page for Patriot Blind Solutions",
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
        className={`${inter.variable} ${roboto.variable} bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 font-body antialiased transition-colors duration-200`}
      >
        {children}
      </body>
    </html>
  );
}
