import { AgencyHome } from "@/components/agency-home";
import "./agency.css";

export default function Home() {
  const business = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://aurakode.in/#business",
    name: "AuraKode Business Solutions",
    url: "https://aurakode.in/",
    logo: "https://aurakode.in/brand/aurakode-lockup.svg",
    image: "https://aurakode.in/opengraph-image",
    description: "Brand identity, website design, business systems and search visibility for businesses in Siliguri and beyond.",
    telephone: "+91 63782 81761",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Siliguri",
      addressRegion: "West Bengal",
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "City", name: "Siliguri" },
      { "@type": "Country", name: "India" },
    ],
    contactPoint: { "@type": "ContactPoint", telephone: "+91 63782 81761", contactType: "sales", availableLanguage: ["English", "Hindi"] },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AuraKode services",
      itemListElement: [
        { "@type": "OfferCatalog", name: "Website design and business systems", url: "https://aurakode.in/services/website-design-siliguri" },
        { "@type": "OfferCatalog", name: "Brand identity", url: "https://aurakode.in/services/branding-siliguri" },
        { "@type": "OfferCatalog", name: "SEO and search visibility", url: "https://aurakode.in/services/seo-siliguri" },
      ],
    },
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(business).replace(/</g, "\\u003c") }} />
    <AgencyHome />
  </>;
}
