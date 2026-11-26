import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About AuraKode | Branding, Websites & Growth Across India",
  description: "Meet AuraKode Business Solutions, based in Siliguri and working with businesses across India on brand identity, websites, business systems and visibility.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About AuraKode Business Solutions", description: "Based in Siliguri, serving businesses across India and welcoming international projects.", url: "/about" },
};

export default function AboutPage() {
  return <main className="info-page" id="main-content">
    <section className="info-hero">
      <div className="site-shell info-hero-grid">
        <div><span className="info-eyebrow">ABOUT AURAKODE</span><h1>Built around <em>what moves your business forward.</em></h1><p>AuraKode Business Solutions is based in Siliguri, West Bengal, and works with businesses across India. We bring brand identity, digital experiences and visibility into one clear direction, so customers understand your offer and know what to do next.</p><Link className="info-button" href="/contact">Start a conversation</Link></div>
        <div className="info-hero-image"><Image src="/ui-visuals/hero-identity.jpg" alt="Glass and metal forms illustrating a connected visual identity" fill priority sizes="(max-width: 800px) 100vw, 45vw" /></div>
      </div>
    </section>
    <section className="info-section">
      <div className="site-shell info-two-col"><div><span className="info-eyebrow">OUR APPROACH</span><h2>Good work should make the next step easier.</h2></div><div className="info-prose"><p>A brand has to be recognizable. A website has to answer real questions. The tools behind it have to help a team follow through. We consider those connections when deciding what to design and build.</p><p>Projects can begin with one focused need: a new identity, a better website, a useful workflow or a clearer route from search to enquiry. We agree on the scope and milestones before work begins.</p></div></div>
    </section>
    <section className="info-section info-soft">
      <div className="site-shell"><span className="info-eyebrow">SELECTED EXPERIENCE</span><h2>Work you can explore.</h2><div className="info-card-grid"><article><h3>ConEquiparts</h3><p>A public parts catalog and enquiry experience. Worked on as a freelancer at Techno Imagine.</p><Link href="/projects/conequiparts">View project</Link></article><article><h3>Online Parts</h3><p>Parts discovery and a direct enquiry path. Worked on as a freelancer at Techno Imagine.</p><Link href="/projects/online-parts">View project</Link></article><article><h3>Shift.Store</h3><p>A home and lifestyle storefront with search, cart and order tracking.</p><Link href="/projects/shift-store">View project</Link></article></div></div>
    </section>
    <section className="info-cta"><div className="site-shell"><span className="info-eyebrow">WHERE WE WORK</span><h2>Based in Siliguri. Working across India.</h2><p>We also welcome international projects. Tell us what you want to improve; a rough brief is enough to start a useful conversation.</p><Link className="info-button" href="/contact">Contact AuraKode</Link></div></section>
  </main>;
}
