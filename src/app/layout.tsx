import { headers } from "next/headers";
import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";

import CookieConsent from "../components/CookieConsent";
import "./globals.css";
import StructuredData from "../components/StructuredData";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-main",
  display: "swap",
});

const SITE_URL = "https://mgdigitalagency.com.tr";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "M&G Digital — Hospitality & Lifestyle Growth Agency",
    template: "%s | M&G Digital",
  },

  description:
    "Independent creative growth agency for hospitality, lifestyle and culture. Strategy, branding, creative, content, digital and growth from Bodrum, Istanbul and Lisbon.",

  applicationName: "M&G Digital",

  authors: [
    {
      name: "M&G Digital",
      url: SITE_URL,
    },
  ],

  creator: "M&G Digital",
  publisher: "M&G Digital",

  keywords: [
    "M&G Digital",
    "M&G Digital Agency",
    "digital agency",
    "creative agency",
    "growth agency",
    "hospitality marketing agency",
    "hospitality agency",
    "lifestyle marketing agency",
    "branding agency",
    "creative strategy",
    "digital marketing",
    "social media agency",
    "content production",
    "performance marketing",
    "Bodrum digital agency",
    "Istanbul digital agency",
    "Lisbon digital agency",
  ],

  category: "marketing",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    siteName: "M&G Digital",
    title: "M&G Digital — Hospitality & Lifestyle Growth Agency",
    description:
      "Independent creative growth agency for hospitality, lifestyle and culture. Bodrum · Istanbul · Lisbon.",
    url: SITE_URL,
    locale: "en_US",
    alternateLocale: ["tr_TR"],
  },

  twitter: {
    card: "summary_large_image",
    title: "M&G Digital — Hospitality & Lifestyle Growth Agency",
    description:
      "Independent creative growth agency for hospitality, lifestyle and culture. Bodrum · Istanbul · Lisbon.",
  },

  other: {
    "geo.region": "TR",
    "geo.placename": "Bodrum, Istanbul, Lisbon",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f2f2ec",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();

  const locale =
    headersList.get("x-mg-locale") === "tr"
      ? "tr"
      : "en";

  return (
    <html lang={locale}>
      <body className={manrope.variable}>
        <StructuredData />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}