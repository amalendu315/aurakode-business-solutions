import type { Metadata } from "next";
import Script from "next/script";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import "./globals.css";
import "./site-shell.css";
import "./info.css";

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
  title: "AuraKode | Branding, Websites & SEO Across India",
  description:
    "AuraKode helps businesses across India with distinctive branding, useful websites, business systems and search visibility. Based in Siliguri and open to international projects.",
  keywords: [
    "AuraKode Business Solutions",
    "website design India",
    "branding agency India",
    "SEO services India",
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
    title: "AuraKode | Branding, Websites & SEO Across India",
    description:
      "Brand identity, websites, business systems and search visibility across India. Based in Siliguri and open to international projects.",
    url: "https://aurakode.in",
    siteName: "AuraKode Business Solutions",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "AuraKode | Branding, Websites & SEO Across India",
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
        <SiteHeader />
        {children}
        <SiteFooter />
        <a className="site-whatsapp" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
          <MessageCircle size={22} aria-hidden="true" />
          <span>Chat on WhatsApp</span>
        </a>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KVBZ2BK4');
          `}
        </Script>
      </body>
    </html>
  );
}
