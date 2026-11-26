import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServicePage, servicePages } from "@/lib/service-pages";
import { whatsappUrl } from "@/lib/whatsapp";
import "./service.css";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return servicePages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) return {};
  const path = `/services/${slug}`;
  return {
    title: service.metaTitle,
    description: service.description,
    alternates: { canonical: path },
    openGraph: { title: service.metaTitle, description: service.description, url: path, type: "website", siteName: "AuraKode Business Solutions", locale: "en_IN" },
    twitter: { card: "summary_large_image", title: service.metaTitle, description: service.description },
  };
}

export default async function ServiceDetail({ params }: Props) {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.metaTitle.split(" | ")[0],
    description: service.description,
    url: `https://aurakode.in/services/${slug}`,
    provider: { "@id": "https://aurakode.in/#business" },
    areaServed: { "@type": "Country", name: "India" },
  };

  return (
    <div className="service-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <main id="main-content">
        <section className="service-hero">
          <div className="service-shell service-hero-grid">
            <div>
              <nav className="service-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/#services">Services</Link><span>/</span><span>{service.eyebrow}</span></nav>
              <span className="service-eyebrow">{service.eyebrow} · ACROSS INDIA</span>
              <h1>{service.title}</h1>
              <p>{service.intro}</p>
              <div className="service-actions"><a className="service-primary" href={whatsappUrl(service.whatsapp)} target="_blank" rel="noopener noreferrer">Discuss your project</a><a className="service-secondary" href="#how-we-work">See how we work</a></div>
            </div>
            <div className="service-hero-image"><Image src={service.image} alt={service.imageAlt} fill priority sizes="(max-width: 800px) 100vw, 48vw" /></div>
          </div>
        </section>
        <section className="service-section service-problems">
          <div className="service-shell service-two-col"><div><span className="service-eyebrow">WHEN THIS WORK HELPS</span><h2>Does any of this sound familiar?</h2></div><ul>{service.problems.map((problem) => <li key={problem}>{problem}</li>)}</ul></div>
        </section>
        <section className="service-section service-approach" id="how-we-work">
          <div className="service-shell"><span className="service-eyebrow">OUR APPROACH</span><h2>From the problem to a useful result.</h2><div className="service-approach-grid">{service.approach.map((step, index) => <article key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.copy}</p></article>)}</div></div>
        </section>
        <section className="service-section service-deliverables">
          <div className="service-shell service-two-col"><div><span className="service-eyebrow">WHAT WE CAN DO</span><h2>A practical scope for your business.</h2><p>{service.result}</p></div><ul>{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></div>
        </section>
        <section className="service-section service-proof">
          <div className="service-shell service-two-col"><div><span className="service-eyebrow">SEE THE THINKING</span><h2>{service.proof.title}</h2></div><div><p>{service.proof.copy}</p>{service.proof.href && <a href={service.proof.href} target={service.proof.href.startsWith("http") ? "_blank" : undefined} rel={service.proof.href.startsWith("http") ? "noopener noreferrer" : undefined}>Explore the example</a>}</div></div>
        </section>
        <section className="service-section service-faq">
          <div className="service-shell service-two-col"><div><span className="service-eyebrow">COMMON QUESTIONS</span><h2>Before we begin.</h2></div><div>{service.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></div>
        </section>
        <section className="service-close"><div className="service-shell"><span className="service-eyebrow">START A CONVERSATION</span><h2>Tell us where you are now.</h2><p>A rough brief is enough. We will help find a sensible first step and agree on scope before work begins.</p><a className="service-primary" href={whatsappUrl(service.whatsapp)} target="_blank" rel="noopener noreferrer">Chat with AuraKode on WhatsApp</a></div></section>
      </main>
    </div>
  );
}
