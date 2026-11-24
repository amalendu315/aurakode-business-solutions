"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, ChevronDown, Menu, MessageCircle, X } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";

const services = [
  {
    number: "01", id: "identity", eyebrow: "BRAND & IDENTITY", title: "Be impossible to confuse.",
    image: "/ui-visuals/identity-worktable.jpg", alt: "Art directed brand materials with paper, type blocks, and translucent blue acrylic", visualLabel: "POSITIONING / IDENTITY / APPLICATION",
    description: "If your website, social posts, and sales material feel like different businesses, a new logo alone will not solve it. We clarify what you want to be known for, then build a voice and visual system your team can use consistently.",
    items: ["Positioning & key messages", "Logo & visual identity", "Brand guidelines & templates", "Art direction & campaign design"],
    outcome: "A practical brand toolkit: the message, visual rules, and examples needed to show up consistently.",
    example: "A business entering a new market may need to explain its difference before it needs a new color palette. We start with that story, then design around it.",
  },
  {
    number: "02", id: "digital", eyebrow: "WEB & BUSINESS SYSTEMS", title: "Make every interaction work.",
    image: "/ui-visuals/digital-systems.jpg", alt: "Desktop and mobile interfaces connected to a layered digital system", visualLabel: "CUSTOMER / TEAM / TOOLS",
    description: "A useful website answers the visitor’s questions and gives them an obvious next step. Behind it, forms, dashboards, and workflows should help your team respond with context instead of creating more admin.",
    items: ["Marketing websites & landing pages", "Web apps & dashboards", "Custom business tools", "Automation & integrations"],
    outcome: "A digital experience people can use, with a handoff your team can understand and maintain.",
    example: "If every inquiry arrives as just ‘Hi,’ a better form can capture the service, location, and project stage before your first conversation.",
  },
  {
    number: "03", id: "growth", eyebrow: "VISIBILITY & GROWTH", title: "Turn attention into momentum.",
    image: "/ui-visuals/growth-path.jpg", alt: "An illuminated path linking measured touchpoints to a destination", visualLabel: "DISCOVERY / RELEVANCE / ACTION",
    description: "Traffic is only useful when the right person lands somewhere relevant. We connect the search or campaign promise to the page, the next action, and the signals that tell us what is working.",
    items: ["Search engine optimization", "Google Ads & paid campaigns", "Social media campaigns", "Landing pages & measurement"],
    outcome: "A clearer route from discovery to inquiry, with the right pages and measures for the chosen channels.",
    example: "A search ad for one service should open a page about that service, answer likely objections, and make the next step easy to find.",
  },
];

const faqs = [
  { question: "Can we start with one service?", answer: "Yes. A brand project, website, internal tool, or campaign can stand on its own. In the first conversation we will identify what has to connect to existing work, then scope only what is useful now." },
  { question: "What if we already have a logo or website?", answer: "We will look at what still works before proposing a rebuild. Sometimes clearer copy, a better page structure, or a more consistent design system does more than starting from zero." },
  { question: "How will pricing and timing be decided?", answer: "They depend on the scope, content, integrations, and review process. After we understand the brief, we can separate essential work from later phases and put deliverables and milestones in writing before work begins." },
  { question: "Do we need all our content ready?", answer: "Bring what you have: current pages, brochures, notes, photos, or even a rough explanation. We can help organize the message and identify what is missing. The project scope will make clear who creates and approves each piece." },
  { question: "Can you work with our current tools or team?", answer: "That is often the right starting point. We first map the tools and handoffs already in use, then decide what to keep, connect, improve, or replace based on the problem we are solving." },
  { question: "What happens after launch?", answer: "We plan for a handover and discuss what should be monitored or improved next. Any ongoing support or campaign work is scoped explicitly, so you know what is included." },
  { question: "Do you work outside Siliguri?", answer: "Yes. AuraKode is based in Siliguri, West Bengal. We can work remotely with businesses elsewhere using shared reviews and clear milestones." },
];

const studioStages = [
  { number: "01", name: "Identity", title: "Give the idea a voice.", detail: "A compact name, encouraging language, and energetic visual system make Motive feel welcoming rather than intimidating.", decision: "The mark, color, and tone can all travel from a studio sign to a phone screen without becoming a different brand.", deliverables: "POSITIONING / IDENTITY / ART DIRECTION" },
  { number: "02", name: "Experience", title: "Make the next step effortless.", detail: "The website puts class discovery and booking in plain sight, with enough context to help a first-time visitor choose.", decision: "The first screen answers ‘Is this for me?’ before asking someone to commit to a class.", deliverables: "WEBSITE / USER JOURNEY / BOOKING FLOW" },
  { number: "03", name: "Momentum", title: "Carry the story into the world.", detail: "The campaign uses the same promise and points toward a focused class page instead of a generic homepage.", decision: "One message continues from ad to landing page, so the visitor does not have to start over after clicking.", deliverables: "CAMPAIGN / LANDING PAGE / MEASUREMENT" },
];

const entryPoints = [
  { number: "01", title: "Starting something new", image: "/ui-visuals/starting-new.jpg", alt: "An open brand book and phone awaiting a new business identity", chapter: "THE LAUNCH", copy: "You need a name people can understand, a visual identity they can recognize, and a website that explains the offer from day one.", scope: "Brand direction · Website · Launch assets", questions: ["Who is it for?", "What must be ready at launch?"], prompt: "Hi AuraKode, I am starting something new and would like to discuss a brand and launch plan." },
  { number: "02", title: "Ready for a stronger presence", image: "/ui-visuals/stronger-presence.jpg", alt: "Old materials beside a refreshed brand design system", chapter: "THE NEXT CHAPTER", copy: "The business has grown, but its site or brand still tells an older story. We can find what to keep and what needs to change.", scope: "Positioning · Redesign · Conversion path", questions: ["What still works?", "Where do prospects hesitate?"], prompt: "Hi AuraKode, I would like to improve my existing brand or website." },
  { number: "03", title: "Growing past manual work", image: "/ui-visuals/connected-operations.jpg", alt: "A connected network of glass modules representing a clearer workflow", chapter: "THE SYSTEM", copy: "Inquiries, updates, and reporting are spread across too many places. Better digital tools can help your team move with less friction.", scope: "Digital products · Systems · Growth", questions: ["Which handoffs repeat?", "What needs to be visible in one place?"], prompt: "Hi AuraKode, I would like to discuss better digital systems and growth." },
];

const journeySteps = [
  { title: "An ad earns the visit", copy: "The promise and visual tone should give someone a reason to continue." },
  { title: "The page answers the question", copy: "They need to understand the offer, see its relevance, and find a useful next step." },
  { title: "The inquiry carries context", copy: "A short form or WhatsApp prompt should tell your team what the person actually needs." },
  { title: "Your team can follow through", copy: "The right information reaches the right place, so the conversation can continue." },
];

const problemPatterns = [
  { request: "“Our brand feels inconsistent.”", look: "We compare the website, social posts, proposals, and customer language. The gap may be in the message, the visual system, or the way people apply it.", response: "A shared message and usable brand rules usually come before more campaign artwork." },
  { request: "“Our website isn’t converting.”", look: "We check what the page says first, how it behaves on a phone, where evidence appears, and whether the next action fits the visitor’s question.", response: "The fix might be page structure, better copy, a clearer offer, or a more useful inquiry flow." },
  { request: "“We need more leads.”", look: "We look at the audience, search intent, campaign promise, landing page, and what is being measured before recommending more spend.", response: "A more relevant path can be a better first move than sending more traffic to the same page." },
];

const processSteps = [
  { title: "Understand", copy: "We review your offer, audience, current website, channels, and tools. We ask where customers hesitate and where the team loses time.", output: "A shared problem statement and a short priority list." },
  { title: "Shape the scope", copy: "We decide what must happen now, what can wait, and how the pieces connect. Content, pages, features, approvals, and dependencies become visible.", output: "A written scope with deliverables and milestones." },
  { title: "Design and build", copy: "You see the direction in reviewable stages. We work through message, layout, interactions, and implementation with feedback at agreed checkpoints.", output: "Designs and working builds you can assess before launch." },
  { title: "Launch and learn", copy: "We check the important journeys, prepare the handover, and identify what should be watched or improved once people start using the work.", output: "A live result, a clear handover, and sensible next questions." },
];

function BrandMark({ className = "" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 128 128" fill="none" aria-hidden="true" focusable="false">
    <path className="ak-letter-a" d="M12 101 40 27l28 74M26 74h28" stroke="currentColor" strokeWidth="10" strokeLinecap="square" strokeLinejoin="miter"/>
    <path className="ak-letter-k" d="M81 27v74m1-37 33-37M82 64l34 37" stroke="var(--ak-accent,currentColor)" strokeWidth="10" strokeLinecap="square" strokeLinejoin="miter"/>
  </svg>;
}

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 1, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ duration: .78, delay, ease: [.16, 1, .3, 1] }}>{children}</motion.div>;
}

function StudioDemo() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const stage = studioStages[active];
  return <section className="ah-demo" id="studio-demo"><div className="ah-wrap">
    <Reveal className="ah-demo-heading"><div><span className="ah-section-label">A CONCEPT PROJECT</span><h2>See the thinking<br/><em>take shape.</em></h2></div><p>Meet Motive, a fictional movement studio. The screens are only part of the story; the useful part is the decision behind each one.</p></Reveal>
    <Reveal className="ah-demo-brief"><div><span>THE BRIEF</span><p>Make a first class feel approachable to someone who wants to move more but does not know where to begin.</p></div><div><span>THE AUDIENCE QUESTION</span><p>“Will I feel comfortable here, and how do I choose the right class?”</p></div><div><span>THE DESIGN RESPONSE</span><p>An encouraging voice, energetic identity, and a short route from discovery to booking.</p></div></Reveal>
    <div className="ah-demo-shell"><div className="ah-demo-rail"><span className="ah-demo-disclaimer">MOTIVE / ORIGINAL CONCEPT BY AURAKODE</span><div className="ah-demo-tabs" role="tablist" aria-label="Explore the studio demonstration">{studioStages.map((item,index)=><button key={item.name} type="button" role="tab" id={`ah-demo-tab-${index}`} aria-selected={active===index} aria-controls="ah-demo-panel" className={active===index?"active":""} onClick={()=>setActive(index)}><span>{item.number}</span>{item.name}<i className="ah-tab-indicator"/></button>)}</div><div className="ah-demo-rail-copy"><span>THE IDEA</span><strong>MOVE / WITH / PURPOSE</strong><p>One message, expressed across three touchpoints.</p></div></div>
      <div className="ah-demo-stage" role="tabpanel" id="ah-demo-panel" aria-labelledby={`ah-demo-tab-${active}`}><motion.div key={active} className={`ah-demo-art ah-demo-art-${active}`} initial={reduced?false:{opacity:1,scale:.965,y:12}} animate={{opacity:1,scale:1,y:0}} transition={{duration:reduced?0:.5,ease:[.16,1,.3,1]}}>
        {active===0&&<div className="ah-concept-brand"><div className="ah-concept-top"><span>STUDIO CONCEPT / 001</span><span>BRAND SYSTEM</span></div><div className="ah-concept-orb"><span>M</span></div><div className="ah-concept-brand-bottom"><strong>motive<span>.</span></strong><p>Movement for<br/>the way you live.</p></div><div className="ah-concept-colors"><i/><i/><i/><i/></div></div>}
        {active===1&&<div className="ah-concept-web"><div className="ah-concept-browser"><i/><i/><i/><span>motive.studio / concept</span></div><div className="ah-concept-web-nav"><strong>motive<span>.</span></strong><span>THE STUDIO &nbsp; CLASSES &nbsp; ABOUT</span><b>BOOK A CLASS ↗</b></div><div className="ah-concept-web-body"><Image src="/ui-visuals/motive-studio.jpg" alt="A welcoming movement studio concept with a person stretching" fill sizes="(max-width: 800px) 90vw, 55vw" className="ah-motive-photo"/><div className="ah-concept-web-copy"><span>MOVE / WITH / PURPOSE</span><h3>Find your<br/><em>kind of move.</em></h3><p>A space to get stronger, feel lighter, and make movement your own.</p><b>EXPLORE CLASSES &nbsp; ↗</b></div></div><div className="ah-concept-web-foot"><span>01 / DISCOVER</span><span>02 / EXPLORE</span><span>03 / BOOK</span></div></div>}
        {active===2&&<div className="ah-concept-campaign"><div className="ah-concept-campaign-left"><span>CAMPAIGN / SOCIAL</span><div className="ah-concept-campaign-symbol">✳</div><strong>MAKE<br/>YOUR<br/><em>MOVE.</em></strong><small>MOTIVE STUDIO · A NEW WAY TO MOVE</small></div><div className="ah-concept-campaign-right"><div className="ah-campaign-phone"><div className="ah-campaign-phone-top">motive<span>.</span> <small>↗</small></div><span>YOUR FIRST CLASS STARTS HERE</span><strong>Move at<br/>your pace.</strong><p>Find the class that feels right for you.</p><b>FIND A CLASS ↗</b></div><span className="ah-campaign-flow">CAMPAIGN → LANDING PAGE → ACTION</span></div></div>}
      </motion.div><div className="ah-demo-stage-caption"><div><span>{stage.number} / {stage.name.toUpperCase()}</span><h3>{stage.title}</h3><p>{stage.detail}</p></div><small>{stage.deliverables}</small></div><div className="ah-demo-decision"><span>WHY THIS CHOICE</span><p>{stage.decision}</p></div></div></div>
    <p className="ah-demo-note">Motive is an original concept, shown here as a design demonstration rather than client work.</p>
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
    <header className="ah-header"><div className="ah-nav"><a href="#top" className="ah-logo" aria-label="AuraKode home" onClick={closeMenu}><BrandMark className="ah-logo-mark"/><span>AuraKode<small>BUSINESS SOLUTIONS</small></span></a><nav className="ah-nav-links" aria-label="Main navigation"><a href="#services">Services</a><a href="#studio-demo">Our thinking</a><a href="#work-with-us">Start here</a><a href="#process">Process</a></nav><a className="ah-nav-cta" href="#contact">Let&apos;s talk</a><button type="button" className="ah-menu-toggle" aria-expanded={menuOpen} aria-controls="ah-mobile-menu" aria-label={menuOpen?"Close menu":"Open menu"} onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X/>:<Menu/>}</button></div>{menuOpen&&<nav id="ah-mobile-menu" className="ah-mobile-menu" aria-label="Mobile navigation"><a href="#services" onClick={closeMenu}>Services</a><a href="#studio-demo" onClick={closeMenu}>Our thinking</a><a href="#work-with-us" onClick={closeMenu}>Start here</a><a href="#process" onClick={closeMenu}>Process</a><a href="#questions" onClick={closeMenu}>FAQs</a><a href="#contact" onClick={closeMenu}>Let&apos;s talk</a></nav>}</header>
    <main id="main-content">
      <section className="ah-hero" id="top"><div className="ah-hero-scene"><Image src="/ui-visuals/hero-architecture.jpg" alt="Sculptural glass and metal architecture connected by a luminous line" fill priority sizes="100vw"/></div><div className="ah-hero-inner"><div className="ah-hero-copy"><div className="ah-kicker"><span>BRAND, WEB &amp; BUSINESS SYSTEMS</span><span className="ah-kicker-line"/><span>SILIGURI, INDIA</span></div><h1>Build the<br/>business they<br/><em>remember.</em></h1><p>We design the identity people see, the website they use, and the systems that help you deliver on the promise.</p><div className="ah-hero-actions"><a className="ah-button ah-button-cyan" href="#contact">Tell us what you&apos;re building <MessageCircle size={18}/></a><a className="ah-text-link" href="#services">See what we do</a></div></div><div className="ah-hero-art-note" aria-hidden="true"><span>01 / IDEA</span><span>02 / IDENTITY</span><span>03 / SYSTEM</span></div></div><div className="ah-hero-foot"><span>DESIGNED WITH INTENT · BUILT TO WORK</span><span>EXPLORE THE STUDIO <ArrowDown size={14}/></span></div></section>

      <section className="ah-statement" id="advantage"><div className="ah-wrap"><Reveal className="ah-statement-grid"><div><span className="ah-section-label">THE CUSTOMER JOURNEY</span><h2>A first impression has to survive <em>the next click.</em></h2></div><div className="ah-statement-side"><p>A person sees your reel or ad, opens the site, checks the offer, then decides whether to start a conversation. That sequence can happen in less time than it takes to explain your business in a meeting.</p><p>We think about the whole handoff, including what your team receives after someone reaches out.</p></div></Reveal><div className="ah-journey">{journeySteps.map((step,index)=><Reveal className="ah-journey-step" key={step.title} delay={index*.06}><span>0{index+1}</span><h3>{step.title}</h3><p>{step.copy}</p></Reveal>)}</div></div></section>

      <section className="ah-services" id="services"><div className="ah-wrap"><Reveal className="ah-services-intro"><div><span className="ah-section-label">WHAT WE DO</span><h2>From first impression<br/><em>to daily operation.</em></h2></div><p>Each service can be a focused project or part of a larger plan. Here is what the work involves, and the kinds of decisions that make it useful.</p></Reveal><div className="ah-services-list">{services.map((service)=><Reveal className={`ah-service ah-service-${service.id}`} key={service.id}><div className="ah-service-visual"><Image src={service.image} alt={service.alt} fill sizes="(max-width: 850px) 100vw, 50vw" className="ah-service-photo"/><div className="ah-service-visual-meta"><span>{service.number} / AURAKODE</span><strong>{service.visualLabel}</strong></div></div><div className="ah-service-content"><div className="ah-service-top"><span>{service.eyebrow}</span><span>{service.number} / 03</span></div><h3>{service.title}</h3><p>{service.description}</p><div className="ah-service-list-title">WHAT WE CAN BUILD</div><ul>{service.items.map(item=><li key={item}>{item}</li>)}</ul><div className="ah-service-example"><span>FOR EXAMPLE</span><p>{service.example}</p></div><div className="ah-service-outcome"><span>WHAT YOU WALK AWAY WITH</span><strong>{service.outcome}</strong></div></div></Reveal>)}</div></div></section>

      <StudioDemo/>

      <section className="ah-entry" id="work-with-us"><div className="ah-wrap"><Reveal className="ah-entry-head"><div><span className="ah-section-label">WHERE TO BEGIN</span><h2>Find your<br/><em>starting point.</em></h2></div><p>You do not need to arrive with a perfect brief. Pick the situation closest to yours; we will shape the scope together.</p></Reveal><div className="ah-entry-grid">{entryPoints.map((item,index)=><Reveal className="ah-entry-card" key={item.number} delay={index*.08}><div className="ah-entry-image"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 800px) 100vw, 42vw"/><span>{item.chapter}</span></div><div className="ah-entry-body"><div className="ah-entry-topline"><span className="ah-entry-number">{item.number} / 03</span><span>{item.scope}</span></div><h3>{item.title}</h3><p>{item.copy}</p><div className="ah-entry-bottom"><div className="ah-entry-questions"><strong>THE FIRST QUESTIONS</strong>{item.questions.map(question=><span key={question}>{question}</span>)}</div><a href={whatsappUrl(item.prompt)} target="_blank" rel="noopener noreferrer" aria-label={`Discuss ${item.title.toLowerCase()} on WhatsApp`}>Start here <ArrowUpRight size={18}/></a></div></div></Reveal>)}</div></div></section>

      <section className="ah-connection"><div className="ah-wrap"><Reveal className="ah-connection-intro"><span className="ah-section-label">BEHIND THE BRIEF</span><h2>Find the problem<br/><em>worth solving.</em></h2><p>Clients usually arrive with a request. A useful project starts by checking what is causing the friction underneath it.</p></Reveal><div className="ah-connection-flow ah-questions-flow">{problemPatterns.map(pattern=><div key={pattern.request}><span>WHAT WE HEAR</span><strong>{pattern.request}</strong><p>{pattern.look}</p><div className="ah-pattern-response"><small>WHERE WE MIGHT START</small><p>{pattern.response}</p></div></div>)}</div></div></section>

      <section className="ah-process" id="process"><div className="ah-wrap"><Reveal className="ah-process-head"><div><span className="ah-section-label">HOW A PROJECT MOVES</span><h2>Clear decisions,<br/><em>visible work.</em></h2></div><p>The exact scope changes from project to project. These checkpoints make the work reviewable and keep everyone clear on what comes next.</p></Reveal><div className="ah-process-steps">{processSteps.map((step,index)=><Reveal className="ah-step" key={step.title} delay={index*.07}><span>0{index+1}</span><div className="ah-step-body"><div><h3>{step.title}</h3><p>{step.copy}</p></div><div className="ah-step-output"><strong>WHAT YOU SEE</strong><p>{step.output}</p></div></div></Reveal>)}</div></div></section>

      <section className="ah-questions" id="questions"><div className="ah-wrap ah-questions-grid"><Reveal><span className="ah-section-label">PRACTICAL DETAILS</span><h2>Before we<br/><em>get started.</em></h2><p>Scope, timing, content, handover, and whether you need everything figured out before calling.</p></Reveal><div className="ah-faq-list">{faqs.map((item,index)=><details key={item.question}><summary><span>0{index+1}</span>{item.question}<ChevronDown size={18}/></summary><p>{item.answer}</p></details>)}</div></div></section>

      <section className="ah-contact" id="contact"><div className="ah-wrap ah-contact-grid"><Reveal className="ah-contact-copy"><span className="ah-section-label">LET'S TALK</span><h2>Tell us the<br/><em>messy version.</em></h2><p>You can start with a rough idea, an outdated website, or a problem you cannot quite name yet. We&apos;ll help find a useful first step.</p><p className="ah-contact-tip">Useful context: what the business does, what feels stuck, a current site if you have one, and when the change matters. A few sentences are enough.</p><a className="ah-contact-direct" href={whatsappUrl()} target="_blank" rel="noopener noreferrer"><MessageCircle size={20}/> Chat with us on WhatsApp</a><div className="ah-location">BASED IN SILIGURI, WEST BENGAL · WORKING EVERYWHERE</div></Reveal><Reveal delay={.12}><ContactComposer/></Reveal></div></section>
    </main>
    <footer className="ah-footer"><div className="ah-wrap"><div className="ah-footer-top"><div><a href="#top" className="ah-footer-logo"><BrandMark/>AuraKode</a><p>Brand identity, websites, and business systems<br/>shaped around the way you actually work.</p></div><div className="ah-footer-links"><div><strong>EXPLORE</strong><a href="#services">Services</a><a href="#studio-demo">Our thinking</a><a href="#work-with-us">Start here</a><a href="#process">Process</a><a href="#questions">FAQs</a></div><div><strong>CONNECT</strong><a href="#contact">Start a project</a><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">WhatsApp</a><span>Siliguri, West Bengal</span></div></div></div><div className="ah-footer-bottom"><span>© {new Date().getFullYear()} AuraKode Business Solutions</span><span>Siliguri, India</span><a href="#top">Back to top</a></div></div></footer>
  </div>;
}
