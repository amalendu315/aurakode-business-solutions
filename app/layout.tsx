import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";
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
  metadataBase: new URL("https://aurakode.in"),
  title: "AuraKode | Website Design, Branding & SEO in Siliguri",
  description:
    "AuraKode helps businesses in Siliguri and beyond with distinctive branding, useful websites, business systems and search visibility. Explore our work and start a project.",
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
  alternates: { canonical: "/" },
  openGraph: {
    title: "AuraKode | Website Design, Branding & SEO in Siliguri",
    description:
      "Brand identity, websites, business systems and search visibility from Siliguri, West Bengal.",
    url: "https://aurakode.in",
    siteName: "AuraKode Business Solutions",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "AuraKode | Website Design, Branding & SEO in Siliguri",
    description: "Brand, websites and business systems that work together.",
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
        <a className="site-whatsapp" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
          <MessageCircle size={22} aria-hidden="true" />
          <span>Chat on WhatsApp</span>
        </a>
      </body>
    </html>
  );
}
