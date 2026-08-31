import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MetaPixel from "@/components/MetaPixel";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Richfeel Vadodara | Hair & Scalp Clinic – Expert Trichology Solutions",
  description:
    "Richfeel Vadodara – Vadodara's leading hair and scalp clinic. Advanced treatments for hair loss, hair fall control, scalp care, and hair transplant. Book your free consultation today.",
  keywords: [
    "hair clinic Vadodara",
    "scalp treatment Vadodara",
    "hair transplant Vadodara",
    "hair fall treatment",
    "trichology Vadodara",
    "Richfeel Vadodara",
    "richfeelvadodara.in",
  ],
  authors: [{ name: "Richfeel Vadodara" }],
  openGraph: {
    title: "Richfeel Vadodara | Hair & Scalp Clinic",
    description:
      "Advanced hair and scalp solutions by expert trichologists. Book your consultation today.",
    url: "https://richfeelvadodara.in",
    siteName: "Richfeel Vadodara",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Richfeel Vadodara | Hair & Scalp Clinic",
    description:
      "Advanced hair and scalp solutions by expert trichologists.",
  },
  metadataBase: new URL("https://richfeelvadodara.in"),
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="theme-color" content="#0A6EBD" />
      </head>
      <body className="font-sans">
        <MetaPixel />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}