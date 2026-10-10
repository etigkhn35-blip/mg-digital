import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import CookieConsent from "../components/CookieConsent";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-main",
  display: "swap",
});

export const metadata: Metadata = {
  title: "M&G Digital — Hospitality & Lifestyle Growth Agency",
  description:
    "Independent creative growth agency for hospitality, lifestyle and culture. Bodrum · Istanbul · Lisbon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.variable}>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}