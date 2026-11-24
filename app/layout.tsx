import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AuraKode | Brand, Digital & Growth Studio in Siliguri",
  description:
    "AuraKode designs brand identities, websites, and business systems that make every customer interaction clearer. Based in Siliguri, working with businesses everywhere.",
  keywords: [
    "AuraKode Business Solutions",
    "Siliguri web design",
    "Siliguri branding agency",
    "Google Ads Siliguri",
    "SEO Siliguri",
    "business systems",
  ],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
  },
  openGraph: {
    title: "AuraKode — Build the business they remember",
    description:
      "Brand identity, digital experiences, business systems, and growth from Siliguri, West Bengal.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "AuraKode — Build the business they remember",
    description: "Brand, digital experiences, and growth that work together.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} ${mono.variable}`}>
        {children}
      </body>
    </html>
  );
}
