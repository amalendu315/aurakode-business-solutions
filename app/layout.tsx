import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const display = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: "AuraKode Business Solutions | Branding, Websites & Growth in Siliguri",
  description: "AuraKode Business Solutions helps ambitious businesses in Siliguri build a distinct brand, connected digital systems, and visibility through websites, SEO, Google Ads, and social media.",
  keywords: ["AuraKode Business Solutions", "Siliguri web design", "Siliguri branding agency", "Google Ads Siliguri", "SEO Siliguri", "business systems"],
  icons: { icon: "/favicon.ico" },
  openGraph: { title: "AuraKode Business Solutions — Make your brand work harder", description: "Brand identity, business systems, websites and growth marketing from Siliguri, West Bengal.", type: "website", locale: "en_IN" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${body.variable} ${mono.variable}`}>{children}</body></html>;
}
