"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";
import { projects } from "@/lib/projects";

const services = [
  {
    title: "Brand & identity",
    eyebrow: "BE RECOGNIZED",
    summary: "A message and visual system your business can use everywhere.",
    href: "/services/branding-siliguri",
  },
  {
    title: "Websites & systems",
    eyebrow: "WORK BETTER",
    summary: "Fast websites, useful tools and journeys that make the next step easy.",
    href: "/services/website-design-siliguri",
  },
  {
    title: "SEO & growth",
    eyebrow: "GET FOUND",
    summary: "Focused pages and campaigns that connect the right people to your offer.",
    href: "/services/seo-siliguri",
  },
];

const questions = [
  {
    question: "Can we start with just one service?",
    answer: "Yes. A website, brand project, business tool or campaign can stand on its own. We scope what is useful now and what can wait.",
  },
  {
    question: "Where do you work?",
    answer: "We are based in Siliguri and work with businesses across India. International projects are welcome by enquiry.",
  },
  {
    question: "How do we get a price and timeline?",
    answer: "Tell us what you want to change. We review the scope, content and integrations, then share deliverables and milestones before work begins.",
  },
];

export function AgencyHomeCompact() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".ak-site");
    if (!root) return;
    const items = root.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!window.matchMedia("(prefers-reduced-motion: no-preference)").matches || !window.IntersectionObserver) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.08 });
    items.forEach((item) => observer.observe(item));
    root.classList.add("ak-motion-ready");
    return () => observer.disconnect();
  }, []);

  return (
    <div className="ak-site">
      <main id="main-content">
        <section className="ak-hero" id="top">
          <Image className="ak-hero-image" src="/ui-visuals/hero-architecture.jpg" alt="Sculptural glass and metal architecture connected by light" fill priority sizes="100vw" />
          <div className="ak-hero-shade" />
          <div className="ak-container ak-hero-layout">
            <div className="ak-hero-copy">
              <span className="ak-eyebrow ak-eyebrow-light">BASED IN SILIGURI · SERVING INDIA · OPEN TO GLOBAL WORK</span>
              <h1>Make your business <em>impossible to overlook.</em></h1>
              <p>Brand identity, websites and growth built to feel like one clear story. We turn a first impression into a better next step.</p>
              <div className="ak-hero-actions">
                <a className="ak-primary" href="#real-work">Explore our work <ArrowUpRight size={18} aria-hidden="true" /></a>
                <a className="ak-quiet-link" href="#contact">Tell us what you need</a>
              </div>
            </div>
            <div className="ak-hero-orbit" aria-hidden="true">
              <div className="ak-orbit-core">AK</div>
              <span className="ak-orbit-label ak-orbit-label-one">BRAND</span>
              <span className="ak-orbit-label ak-orbit-label-two">WEB</span>
              <span className="ak-orbit-label ak-orbit-label-three">GROWTH</span>
            </div>
          </div>
          <div className="ak-hero-bottom ak-container"><span>STRATEGY TO LAUNCH, WITHOUT THE DISCONNECT</span><a href="#real-work" aria-label="Scroll to selected work"><ArrowDown size={18} /></a></div>
        </section>

        <section className="ak-work ak-section" id="real-work">
          <div className="ak-container">
            <div className="ak-section-head" data-reveal>
              <div><span className="ak-eyebrow">SELECTED WORK</span><h2>See what we <em>make real.</em></h2></div>
              <p>Explore the work behind three live websites. ConEquiparts and Online Parts were freelance projects at Techno Imagine.</p>
            </div>
            <div className="ak-project-grid" aria-label="Selected websites">
              {projects.map((project) => <article className="ak-project" key={project.name} data-reveal>
                <Link href={`/projects/${project.slug}`} aria-label={`View ${project.name} project details`}>
                  <div className="ak-project-image">
                    <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 700px) 83vw, (max-width: 1100px) 45vw, 33vw" />
                    <span>{project.category}</span>
                  </div>
                  <div className="ak-project-body">
                    <div className="ak-project-title"><h3>{project.name}</h3><ArrowUpRight size={21} aria-hidden="true" /></div>
                    <p>{project.summary}</p>
                    <small>{project.role}</small>
                  </div>
                </Link>
              </article>)}
            </div>
            <p className="ak-swipe-hint">Swipe to explore the projects</p>
          </div>
        </section>

        <section className="ak-services ak-section" id="services">
          <div className="ak-container">
            <div className="ak-section-head" data-reveal>
              <div><span className="ak-eyebrow">WHAT WE DO</span><h2>The right pieces, <em>working together.</em></h2></div>
              <p>Start with one need or connect the whole experience. Each service has a focused page with the details.</p>
            </div>
            <div className="ak-service-grid">
              {services.map((service) => <Link className="ak-service" href={service.href} key={service.title} data-reveal>
                <span>{service.eyebrow}</span>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <span className="ak-service-link">Explore service <ArrowUpRight size={18} aria-hidden="true" /></span>
              </Link>)}
            </div>
          </div>
        </section>

        <section className="ak-finish ak-section" id="process">
          <div className="ak-container ak-finish-layout">
            <div data-reveal>
              <span className="ak-eyebrow ak-eyebrow-light">HOW WE WORK</span>
              <h2>Clear thinking. <em>Visible progress.</em></h2>
              <p>We understand the problem, shape a practical scope, then design and build in reviewable stages. You know what is being made and what happens next.</p>
            </div>
            <div className="ak-process-card" data-reveal>
              <div><Check size={19} aria-hidden="true" /><span>Discover the real need</span></div>
              <div><Check size={19} aria-hidden="true" /><span>Agree on scope and milestones</span></div>
              <div><Check size={19} aria-hidden="true" /><span>Build, review and launch</span></div>
            </div>
          </div>
          <div className="ak-container ak-contact" id="contact" data-reveal>
            <div><span className="ak-eyebrow ak-eyebrow-light">START A CONVERSATION</span><h2>Have a project in mind?</h2><p>A rough brief is enough. Tell us what you want to improve and we’ll find a sensible first step.</p></div>
            <div className="ak-contact-actions"><a className="ak-primary" href={whatsappUrl()} target="_blank" rel="noopener noreferrer"><MessageCircle size={19} aria-hidden="true" /> Chat on WhatsApp</a><a href="mailto:admin@aurakode.in">admin@aurakode.in</a></div>
          </div>
        </section>

        <section className="ak-faq ak-section" id="questions">
          <div className="ak-container ak-faq-layout">
            <div data-reveal><span className="ak-eyebrow">GOOD TO KNOW</span><h2>A few quick answers.</h2></div>
            <div className="ak-faq-list" data-reveal>{questions.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div>
          </div>
        </section>
      </main>
    </div>
  );
}
