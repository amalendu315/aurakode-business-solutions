import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const display = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: "AuraKode | Brand, Digital & Growth Studio in Siliguri",
  description: "Build the business they remember. AuraKode connects brand identity, digital experiences, business systems, and growth for ambitious businesses in Siliguri and beyond.",
  keywords: ["AuraKode Business Solutions", "Siliguri web design", "Siliguri branding agency", "Google Ads Siliguri", "SEO Siliguri", "business systems"],
  icons: { icon: "/favicon.ico" },
  openGraph: { title: "AuraKode — Build the business they remember", description: "Brand identity, digital experiences, business systems, and growth from Siliguri, West Bengal.", type: "website", locale: "en_IN" },
  twitter: { card: "summary_large_image", title: "AuraKode — Build the business they remember", description: "Brand, digital experiences, and growth that work together." },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${body.variable} ${mono.variable}`}>{children}</body></html>;
}
