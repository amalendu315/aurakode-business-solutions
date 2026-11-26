import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact AuraKode | Branding, Websites & SEO Across India",
  description: "Contact AuraKode about branding, websites, business systems or SEO. Based in Siliguri, serving clients across India and welcoming international projects.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact AuraKode Business Solutions", description: "Start a project with AuraKode from anywhere in India or abroad.", url: "/contact" },
};

export default function ContactPage() {
  return <main className="info-page" id="main-content">
    <section className="info-hero info-contact-hero"><div className="site-shell"><span className="info-eyebrow">CONTACT AURAKODE</span><h1>Let&apos;s talk about <em>what comes next.</em></h1><p>Based in Siliguri. Working across India and welcoming international projects. Tell us what you want to improve; a few sentences are enough.</p></div></section>
    <section className="info-section"><div className="site-shell info-contact-grid"><div className="info-contact-methods"><article><MessageCircle size={25} aria-hidden="true" /><h2>Chat on WhatsApp</h2><p>Open a conversation with a prefilled greeting. Review it and tap Send in WhatsApp when you are ready.</p><a className="info-button" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Open WhatsApp</a></article><article><Mail size={25} aria-hidden="true" /><h2>Email us</h2><p>Send your brief, website link or questions. We can discuss scope and next steps from there.</p><a href="mailto:admin@aurakode.in">admin@aurakode.in</a></article></div><div className="info-map-panel"><div className="info-map-heading"><MapPin size={23} aria-hidden="true" /><div><h2>Where we are based</h2><p>Siliguri, West Bengal, India</p></div></div><div className="info-map"><iframe title="Map showing AuraKode's base in Siliguri, West Bengal" src="https://www.google.com/maps?q=Siliguri%2C%20West%20Bengal%2C%20India&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div><p className="info-map-note">The map shows our base city, not the limit of our service. We work across India and welcome international projects. We do not list a customer-facing office or street address.</p><a href="https://www.google.com/maps/search/?api=1&query=Siliguri%2C%20West%20Bengal%2C%20India" target="_blank" rel="noopener noreferrer">View Siliguri in Google Maps</a></div></div></section>
  </main>;
}
