"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Check, ChevronDown, Menu, MessageCircle, X } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";

const services = [
  {
    number: "01", id: "identity", eyebrow: "BRAND & IDENTITY", title: "Be impossible to confuse.",
    description: "A brand is how people recognize you, understand you, and remember you. We shape the strategy and design system that makes every touchpoint unmistakably yours.",
    image: "/illustrations/identity.png", alt: "Interlocking chrome and blue glass ribbons representing a distinctive brand identity",
    items: ["Brand positioning & messaging", "Logo & visual identity", "Brand guidelines", "Art direction & campaign design"],
    outcome: "A clear, consistent identity for every place your business shows up.",
  },
  {
    number: "02", id: "digital", eyebrow: "WEB & BUSINESS SYSTEMS", title: "Make every interaction work.",
    description: "Your website and internal tools should feel effortless for customers and useful for your team. We design and build connected digital experiences around the way your business actually runs.",
    image: "/illustrations/systems.png", alt: "Connected translucent digital platforms linked through a central chrome system",
    items: ["Marketing websites", "Web apps & dashboards", "Custom business tools", "Automation & integrations"],
    outcome: "A smoother experience for customers and a clearer view for your team.",
  },
  {
    number: "03", id: "growth", eyebrow: "VISIBILITY & GROWTH", title: "Turn attention into momentum.",
    description: "The strongest presence is built to be discovered. We connect search, campaigns, content, and landing pages so the right people can find you and know what to do next.",
    image: "/illustrations/growth.png", alt: "Ascending blue glass and chrome spiral representing business momentum",
    items: ["Search engine optimization", "Google Ads & paid campaigns", "Social media campaigns", "Landing pages & measurement"],
    outcome: "A focused path from being found to starting a conversation.",
  },
];

const faqs = [
  { question: "Can you handle our brand, website, and marketing together?", answer: "Yes. AuraKode brings identity, digital experiences, and growth work into one plan. We can also focus on one part of your business if that is where you need help first." },
  { question: "What if we already have a logo or website?", answer: "We start by understanding what is working. From there, we can refine what you have, rebuild what is holding you back, or create the missing pieces around it." },
  { question: "Do you work with businesses outside Siliguri?", answer: "Yes. We are based in Siliguri, West Bengal and can work with businesses in other locations through a clear remote process." },
  { question: "How does a project begin?", answer: "Tell us about your business and what you want to change. We will discuss the challenge, define a useful scope, and outline a practical next step before work begins." },
];

const studioStages = [
  { number: "01", name: "Identity", title: "Give the idea a voice.", detail: "Positioning, a visual language, and a clear message that can travel across every channel.", deliverables: "POSITIONING / IDENTITY / ART DIRECTION" },
  { number: "02", name: "Experience", title: "Make the next step effortless.", detail: "A focused digital experience that turns interest into an action people actually want to take.", deliverables: "WEBSITE / USER JOURNEY / BOOKING FLOW" },
  { number: "03", name: "Momentum", title: "Carry the story into the world.", detail: "Campaign creative and landing pages that extend the same idea from first impression to inquiry.", deliverables: "CAMPAIGN / LANDING PAGE / MEASUREMENT" },
];

const entryPoints = [
  { number: "01", title: "Starting something new", copy: "You have an idea or business ready to launch. We can shape its identity, digital home, and first path to market.", scope: "Brand direction · Website · Launch assets", prompt: "Hi AuraKode, I am starting something new and would like to discuss a brand and launch plan." },
  { number: "02", title: "Ready for a stronger presence", copy: "Your business has grown, but its website or brand no longer reflects the quality of what you do.", scope: "Positioning · Redesign · Conversion path", prompt: "Hi AuraKode, I would like to improve my existing brand or website." },
  { number: "03", title: "Growing past manual work", copy: "Your team needs a clearer customer journey or better tools behind the scenes to support the next stage.", scope: "Digital products · Systems · Growth", prompt: "Hi AuraKode, I would like to discuss better digital systems and growth." },
];

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ duration: .78, delay, ease: [.16, 1, .3, 1] }}>{children}</motion.div>;
}

function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const move = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - .5;
    const y = (event.clientY - rect.top) / rect.height - .5;
    ref.current.style.setProperty("--visual-x", `${(x * 12).toFixed(2)}px`);
    ref.current.style.setProperty("--visual-y", `${(y * 12).toFixed(2)}px`);
  };
  const reset = () => { ref.current?.style.setProperty("--visual-x", "0px"); ref.current?.style.setProperty("--visual-y", "0px"); };
  return <div className="ah-hero-visual" ref={ref} onPointerMove={move} onPointerLeave={reset}>
    <div className="ah-visual-grid"/><div className="ah-visual-orbit orbit-one"/><div className="ah-visual-orbit orbit-two"/>
    <Image src="/illustrations/systems.png" alt="Three connected digital platforms representing brand, systems, and growth working together" width={1254} height={1254} priority className="ah-hero-sculpture"/>
    <div className="ah-orbit-label label-top"><span>01</span> IDENTITY</div><div className="ah-orbit-label label-right"><span>02</span> SYSTEMS</div><div className="ah-orbit-label label-bottom"><span>03</span> GROWTH</div>
    <div className="ah-visual-caption"><i/> DIFFERENT DISCIPLINES. ONE DIRECTION.</div>
  </div>;
}

function StudioDemo() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const stage = studioStages[active];
  return <section className="ah-demo" id="studio-demo"><div className="ah-wrap">
    <Reveal className="ah-demo-heading"><div><span className="ah-section-label">THE IDEA, MADE TANGIBLE</span><h2>See the thinking<br/><em>take shape.</em></h2></div><p>One idea should feel unmistakable wherever someone meets it. Explore this fictional movement studio concept to see how we connect identity, experience, and growth.</p></Reveal>
    <div className="ah-demo-shell"><div className="ah-demo-rail"><span className="ah-demo-disclaimer">AURAKODE STUDIO EXERCISE · FICTIONAL CONCEPT</span><div className="ah-demo-tabs" role="tablist" aria-label="Explore the studio demonstration">{studioStages.map((item,index)=><button key={item.name} type="button" role="tab" id={`ah-demo-tab-${index}`} aria-selected={active===index} aria-controls="ah-demo-panel" className={active===index?"active":""} onClick={()=>setActive(index)}><span>{item.number}</span>{item.name}<ArrowUpRight size={17}/></button>)}</div><div className="ah-demo-rail-copy"><span>THE CONNECTED IDEA</span><strong>MOVE / WITH / PURPOSE</strong><p>One message. Many meaningful moments.</p></div></div>
      <div className="ah-demo-stage" role="tabpanel" id="ah-demo-panel" aria-labelledby={`ah-demo-tab-${active}`}><motion.div key={active} className={`ah-demo-art ah-demo-art-${active}`} initial={reduced?false:{opacity:0,scale:.965,y:12}} animate={{opacity:1,scale:1,y:0}} transition={{duration:reduced?0:.5,ease:[.16,1,.3,1]}}>
        {active===0&&<div className="ah-concept-brand"><div className="ah-concept-top"><span>STUDIO CONCEPT / 001</span><span>BRAND SYSTEM</span></div><div className="ah-concept-orb"><span>M</span></div><div className="ah-concept-brand-bottom"><strong>motive<span>.</span></strong><p>Movement for<br/>the way you live.</p></div><div className="ah-concept-colors"><i/><i/><i/><i/></div></div>}
        {active===1&&<div className="ah-concept-web"><div className="ah-concept-browser"><i/><i/><i/><span>motive.studio / concept</span></div><div className="ah-concept-web-nav"><strong>motive<span>.</span></strong><span>THE STUDIO &nbsp; CLASSES &nbsp; ABOUT</span><b>BOOK A CLASS ↗</b></div><div className="ah-concept-web-body"><div><span>MOVE / WITH / PURPOSE</span><h3>Find your<br/><em>kind of move.</em></h3><p>A space to get stronger, feel lighter, and make movement your own.</p><b>EXPLORE CLASSES &nbsp; ↗</b></div><div className="ah-concept-web-shape"><i/></div></div><div className="ah-concept-web-foot"><span>01 / DISCOVER</span><span>02 / EXPLORE</span><span>03 / BOOK</span></div></div>}
        {active===2&&<div className="ah-concept-campaign"><div className="ah-concept-campaign-left"><span>CAMPAIGN / SOCIAL</span><div className="ah-concept-campaign-symbol">✳</div><strong>MAKE<br/>YOUR<br/><em>MOVE.</em></strong><small>MOTIVE STUDIO · A NEW WAY TO MOVE</small></div><div className="ah-concept-campaign-right"><div className="ah-campaign-phone"><div className="ah-campaign-phone-top">motive<span>.</span> <small>↗</small></div><span>YOUR FIRST CLASS STARTS HERE</span><strong>Move at<br/>your pace.</strong><p>Find the class that feels right for you.</p><b>FIND A CLASS ↗</b></div><span className="ah-campaign-flow">CAMPAIGN → LANDING PAGE → ACTION</span></div></div>}
      </motion.div><div className="ah-demo-stage-caption"><div><span>{stage.number} / {stage.name.toUpperCase()}</span><h3>{stage.title}</h3><p>{stage.detail}</p></div><small>{stage.deliverables}</small></div></div></div>
    <p className="ah-demo-note">This is a fictional studio exercise showing our approach. It is not presented as client work or a performance claim.</p>
  </div></section>;
}

function ContactComposer() {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim() || !message.trim()) { setError("Add your name and a short project note to continue."); return; }
    setError("");
    const inquiry = [`Hi AuraKode, I'd like to discuss a project.`, "", `Name: ${name.trim()}`, `Service: ${service || "Not sure yet"}`, `Project: ${message.trim()}`].join("\n");
    window.open(whatsappUrl(inquiry), "_blank", "noopener,noreferrer");
  };
  return <form className="ah-contact-form" onSubmit={submit} noValidate>
    <div className="ah-form-head"><span>START A CONVERSATION</span><span>DIRECT ENQUIRY</span></div>
    <h3>Tell us what you&apos;re building.</h3>
    <label>Your name<input value={name} onChange={e=>setName(e.target.value)} name="name" autoComplete="name" placeholder="What should we call you?" required/></label>
    <label>What do you need help with?<select value={service} onChange={e=>setService(e.target.value)} name="service"><option value="">Choose a starting point</option><option>Brand & identity</option><option>Website or web app</option><option>Business systems</option><option>Visibility & growth</option><option>A bit of everything</option></select></label>
    <label>Your project in a few words<textarea value={message} onChange={e=>setMessage(e.target.value)} name="message" rows={4} placeholder="The goal, challenge, or idea on your mind" required/></label>
    {error&&<p className="ah-form-error" role="alert">{error}</p>}
    <button type="submit" className="ah-button ah-button-dark">Continue to WhatsApp <MessageCircle size={18}/></button>
    <p className="ah-form-note">We&apos;ll prepare your message. You can review it before sending in WhatsApp.</p>
  </form>;
}

export function AgencyHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => { if (!menuOpen) return; const close = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); }; window.addEventListener("keydown", close); return () => window.removeEventListener("keydown", close); }, [menuOpen]);
  const closeMenu = () => setMenuOpen(false);
  return <div className="agency-home">
    <a className="ah-skip" href="#main-content">Skip to main content</a>
    <header className="ah-header"><div className="ah-nav"><a href="#top" className="ah-logo" aria-label="AuraKode home" onClick={closeMenu}><span className="ah-logo-mark">AK</span><span>AuraKode<small>BUSINESS SOLUTIONS</small></span></a><nav className="ah-nav-links" aria-label="Main navigation"><a href="#services">Services</a><a href="#studio-demo">Our thinking</a><a href="#work-with-us">Start here</a><a href="#process">Process</a></nav><a className="ah-nav-cta" href="#contact">Let&apos;s talk <ArrowUpRight size={16}/></a><button type="button" className="ah-menu-toggle" aria-expanded={menuOpen} aria-controls="ah-mobile-menu" aria-label={menuOpen?"Close menu":"Open menu"} onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X/>:<Menu/>}</button></div>{menuOpen&&<nav id="ah-mobile-menu" className="ah-mobile-menu" aria-label="Mobile navigation"><a href="#services" onClick={closeMenu}>Services</a><a href="#studio-demo" onClick={closeMenu}>Our thinking</a><a href="#work-with-us" onClick={closeMenu}>Start here</a><a href="#process" onClick={closeMenu}>Process</a><a href="#questions" onClick={closeMenu}>FAQs</a><a href="#contact" onClick={closeMenu}>Let&apos;s talk</a></nav>}</header>
    <main id="main-content">
      <section className="ah-hero" id="top"><div className="ah-hero-glow"/><div className="ah-hero-inner"><div className="ah-hero-copy"><div className="ah-kicker"><span className="ah-pulse"/> BRAND. DIGITAL. GROWTH. <span className="ah-kicker-line"/> SILIGURI, INDIA</div><h1>Build the<br/>business they<br/><em>remember.</em></h1><p>We bring brand identity, digital experiences, and growth together so your business looks sharper, works better, and moves forward with purpose.</p><div className="ah-hero-actions"><a className="ah-button ah-button-cyan" href="#contact">Discuss your project <MessageCircle size={18}/></a><a className="ah-text-link" href="#services">Explore our services <ArrowDown size={16}/></a></div></div><HeroVisual/></div><div className="ah-hero-foot"><span>ONE PARTNER / THE WHOLE PICTURE</span><span>SCROLL TO EXPLORE <ArrowDown size={14}/></span></div></section>

      <section className="ah-statement" id="advantage"><div className="ah-wrap"><Reveal className="ah-statement-grid"><div><span className="ah-section-label">WHY AURAKODE</span><h2>Everything feels stronger when it <em>works together.</em></h2></div><div className="ah-statement-side"><p>Customers experience your business as one whole. Your identity, website, daily systems, and visibility should tell the same story.</p><p>AuraKode connects those pieces with strategy, design, and engineering under one roof.</p><div className="ah-statement-points"><span><Check size={16}/> Built around your business</span><span><Check size={16}/> Consistent across touchpoints</span><span><Check size={16}/> Designed to keep evolving</span></div></div></Reveal></div></section>

      <section className="ah-services" id="services"><div className="ah-wrap"><Reveal className="ah-services-intro"><div><span className="ah-section-label">WHAT WE DO</span><h2>Three disciplines.<br/><em>One clear direction.</em></h2></div><p>Whether you need a sharper first impression, a better digital foundation, or more qualified attention, we build the pieces to work together.</p></Reveal><div className="ah-services-list">{services.map((service)=><Reveal className={`ah-service ah-service-${service.id}`} key={service.id}><div className="ah-service-visual"><div className="ah-service-visual-grid"/><span className="ah-service-visual-index">{service.number} / 03</span><Image src={service.image} alt={service.alt} width={1254} height={1254} className="ah-service-image" sizes="(max-width: 800px) 90vw, 45vw" loading="lazy"/><span className="ah-service-visual-word">{service.id.toUpperCase()}</span></div><div className="ah-service-content"><div className="ah-service-top"><span>{service.eyebrow}</span><span>{service.number} / 03</span></div><h3>{service.title}</h3><p>{service.description}</p><div className="ah-service-list-title">WHAT WE CAN BUILD</div><ul>{service.items.map(item=><li key={item}>{item}</li>)}</ul><div className="ah-service-outcome"><span>THE RESULT</span><strong>{service.outcome}</strong></div></div></Reveal>)}</div></div></section>

      <StudioDemo/>

      <section className="ah-entry" id="work-with-us"><div className="ah-wrap"><Reveal className="ah-entry-head"><span className="ah-section-label">WHERE TO BEGIN</span><h2>Find your<br/><em>starting point.</em></h2><p>You do not need to arrive with a perfect brief. Tell us where your business is now, and we can define the right first move together.</p></Reveal><div className="ah-entry-grid">{entryPoints.map((item,index)=><Reveal className="ah-entry-card" key={item.number} delay={index*.08}><span className="ah-entry-number">{item.number} / 03</span><div className="ah-entry-card-orb"/><h3>{item.title}</h3><p>{item.copy}</p><small>{item.scope}</small><a href={whatsappUrl(item.prompt)} target="_blank" rel="noopener noreferrer" aria-label={`Discuss ${item.title.toLowerCase()} on WhatsApp`}>Discuss this direction <ArrowUpRight size={18}/></a></Reveal>)}</div></div></section>

      <section className="ah-connection"><div className="ah-wrap"><Reveal className="ah-connection-intro"><span className="ah-section-label">THE CONNECTED ADVANTAGE</span><h2>A brand people notice.<br/>An experience they trust.<br/><em>A path to grow.</em></h2><p>Each discipline has its own job. Together, they make the next step easier for your customers and your team.</p></Reveal><div className="ah-connection-flow"><div><span>01 / RECOGNITION</span><strong>Identity</strong><p>Give people a reason to remember you.</p></div><i/><div><span>02 / EXPERIENCE</span><strong>Digital</strong><p>Make every interaction feel considered.</p></div><i/><div><span>03 / MOMENTUM</span><strong>Growth</strong><p>Help the right people find their way in.</p></div></div></div></section>

      <section className="ah-process" id="process"><div className="ah-wrap"><Reveal className="ah-process-head"><div><span className="ah-section-label">HOW WE WORK</span><h2>Clear from the<br/><em>first conversation.</em></h2></div><p>Good work starts by understanding your business. Our process keeps every decision tied to what you need the project to do.</p></Reveal><div className="ah-process-steps">{[["Discover","We learn your audience, goals, current tools, and the gap you want to close."],["Define","We align on direction, scope, and priorities before design or development begins."],["Create","We design, build, and refine the experience with clear reviews along the way."],["Evolve","We launch, observe what happens, and improve what matters next."]].map(([title,copy],index)=><Reveal className="ah-step" key={title} delay={index*.07}><span>0{index+1}</span><div><h3>{title}</h3><p>{copy}</p></div><div className="ah-step-mark">✳</div></Reveal>)}</div></div></section>

      <section className="ah-questions" id="questions"><div className="ah-wrap ah-questions-grid"><Reveal><span className="ah-section-label">BEFORE WE BEGIN</span><h2>Good questions<br/><em>deserve clear answers.</em></h2><p>Here are a few things clients often want to know before starting a project.</p></Reveal><div className="ah-faq-list">{faqs.map((item,index)=><details key={item.question}><summary><span>0{index+1}</span>{item.question}<ChevronDown size={18}/></summary><p>{item.answer}</p></details>)}</div></div></section>

      <section className="ah-contact" id="contact"><div className="ah-wrap ah-contact-grid"><Reveal className="ah-contact-copy"><span className="ah-section-label">LET'S BUILD WHAT'S NEXT</span><h2>Your next move<br/>starts <em>here.</em></h2><p>Tell us what you&apos;re trying to build or change. We&apos;ll start with a practical conversation and find the right way forward.</p><a className="ah-contact-direct" href={whatsappUrl()} target="_blank" rel="noopener noreferrer"><MessageCircle size={20}/> Chat with us on WhatsApp <ArrowUpRight size={18}/></a><div className="ah-location"><span className="ah-pulse"/> BASED IN SILIGURI, WEST BENGAL · WORKING EVERYWHERE</div></Reveal><Reveal delay={.12}><ContactComposer/></Reveal></div></section>
    </main>
    <footer className="ah-footer"><div className="ah-wrap"><div className="ah-footer-top"><div><a href="#top" className="ah-footer-logo">AuraKode<span>®</span></a><p>Brand identity, digital experiences,<br/>and growth that work together.</p></div><div className="ah-footer-links"><div><strong>EXPLORE</strong><a href="#services">Services</a><a href="#studio-demo">Our thinking</a><a href="#work-with-us">Start here</a><a href="#process">Process</a><a href="#questions">FAQs</a></div><div><strong>CONNECT</strong><a href="#contact">Start a project</a><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">WhatsApp</a><span>Siliguri, India</span></div></div></div><div className="ah-footer-bottom"><span>© {new Date().getFullYear()} AuraKode Business Solutions</span><span>BUILT TO CONNECT · DESIGNED TO GROW</span><a href="#top">Back to top</a></div></div></footer>
  </div>;
}
