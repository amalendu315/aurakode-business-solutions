"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  ChevronDown,
  Compass,
  House,
  LayoutGrid,
  Menu,
  MessageCircle,
  Pause,
  Play,
  X,
} from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";
import { LeadCapture } from "@/components/sections/lead-capture";

const heroScenes = [
  {
    number: "01",
    label: "Idea",
    image: "/ui-visuals/hero-idea.jpg",
    alt: "A luminous idea begins to form as a sculptural silver ribbon",
    caption: "THE FIRST SPARK",
    headline: ["Start with", "an idea worth", "building."],
    description: "The strongest work begins with a clear reason to exist. We help you find the opportunity, audience, and message that give the idea direction.",
    primary: { label: "Find my starting point", href: "#work-with-us" },
    secondary: { label: "How we begin", href: "#process" },
  },
  {
    number: "02",
    label: "Identity",
    image: "/ui-visuals/hero-identity.jpg",
    alt: "Glass and metal forms assemble into a distinctive visual identity",
    caption: "A FORM PEOPLE REMEMBER",
    headline: ["Make the idea", "impossible to", "confuse."],
    description: "Turn that direction into a name, voice, and visual identity people recognize wherever they meet your business.",
    primary: { label: "Explore brand work", href: "#identity" },
    secondary: { label: "Discuss my brand", href: "#contact" },
  },
  {
    number: "03",
    label: "System",
    image: "/ui-visuals/hero-architecture.jpg",
    alt: "Sculptural architecture connected by a luminous system",
    caption: "BUILT TO WORK TOGETHER",
    headline: ["Make every", "interaction", "work."],
    description: "Connect the website customers use with the tools your team relies on, so the whole experience delivers on your promise.",
    primary: { label: "Explore digital systems", href: "#digital" },
    secondary: { label: "Plan a project", href: "#contact" },
  },
];

const appNavigation = [
  { id: "top", label: "Home", Icon: House },
  { id: "real-work", label: "Work", Icon: BriefcaseBusiness },
  { id: "services", label: "Services", Icon: LayoutGrid },
  { id: "work-with-us", label: "Start", Icon: Compass },
  { id: "contact", label: "Talk", Icon: MessageCircle },
];

const services = [
  {
    number: "01",
    id: "identity",
    href: "/services/branding-siliguri",
    eyebrow: "BRAND & IDENTITY",
    title: "Be impossible to confuse.",
    image: "/ui-visuals/identity-worktable.jpg",
    alt: "Art directed brand materials with paper, type blocks, and translucent blue acrylic",
    visualLabel: "POSITIONING / IDENTITY / APPLICATION",
    visualRoute: ["Positioning", "Brand system", "Launch toolkit"],
    description:
      "If your website, social posts, and sales material feel like different businesses, a new logo alone will not solve it. We clarify what you want to be known for, then build a voice and visual system your team can use consistently.",
    items: [
      "Positioning & key messages",
      "Logo & visual identity",
      "Brand guidelines & templates",
      "Art direction & campaign design",
    ],
    outcome:
      "A practical brand toolkit: the message, visual rules, and examples needed to show up consistently.",
    example:
      "A business entering a new market may need to explain its difference before it needs a new color palette. We start with that story, then design around it.",
  },
  {
    number: "02",
    id: "digital",
    href: "/services/website-design-siliguri",
    eyebrow: "WEB & BUSINESS SYSTEMS",
    title: "Make every interaction work.",
    image: "/ui-visuals/digital-systems.jpg",
    alt: "Desktop and mobile interfaces connected to a layered digital system",
    visualLabel: "CUSTOMER / TEAM / TOOLS",
    visualRoute: ["Site enquiry", "Lead context", "Team workflow"],
    description:
      "A useful website answers the visitor’s questions and gives them an obvious next step. Behind it, forms, dashboards, and workflows should help your team respond with context instead of creating more admin.",
    items: [
      "Marketing websites & landing pages",
      "Web apps & dashboards",
      "Custom business tools",
      "Automation & integrations",
    ],
    outcome:
      "A digital experience people can use, with a handoff your team can understand and maintain.",
    example:
      "If every inquiry arrives as just ‘Hi,’ a better form can capture the service, location, and project stage before your first conversation.",
  },
  {
    number: "03",
    id: "growth",
    href: "/services/seo-siliguri",
    eyebrow: "VISIBILITY & GROWTH",
    title: "Turn attention into momentum.",
    image: "/ui-visuals/growth-path.jpg",
    alt: "An illuminated path linking measured touchpoints to a destination",
    visualLabel: "DISCOVERY / RELEVANCE / ACTION",
    visualRoute: ["Search intent", "Focused page", "Enquiry"],
    description:
      "Traffic is only useful when the right person lands somewhere relevant. We connect the search or campaign promise to the page, the next action, and the signals that tell us what is working.",
    items: [
      "Search engine optimization",
      "Google Ads & paid campaigns",
      "Social media campaigns",
      "Landing pages & measurement",
    ],
    outcome:
      "A clearer route from discovery to inquiry, with the right pages and measures for the chosen channels.",
    example:
      "A search ad for one service should open a page about that service, answer likely objections, and make the next step easy to find.",
  },
];

const liveProjects = [
  {
    name: "ConEquiparts",
    url: "https://conequiparts.com/",
    image: "/client-work/conequiparts-hero.webp",
    alt: "Earthmoving equipment image used on the ConEquiparts website",
    category: "EARTHMOVING PARTS / GLOBAL ENQUIRIES",
    title: "A searchable parts site for a global buyer.",
    description:
      "A public catalog helps buyers find genuine, OEM, and aftermarket parts and send a detailed sales enquiry. We built the public website and its admin panel as one working system.",
    capabilities: ["Part search", "Product catalog", "Sales enquiries", "Admin panel"],
  },
  {
    name: "Online Parts",
    url: "https://onlineparts.shop/",
    image: "/client-work/online-parts-hero.webp",
    alt: "Backhoe loader image used on the Online Parts website",
    category: "JCB PARTS / ENQUIRY-LED COMMERCE",
    title: "Make the right spare part easier to find.",
    description:
      "The live site combines a parts finder, product browsing, and a direct enquiry route for buyers. A full admin panel supports the business behind the public experience.",
    capabilities: ["Parts finder", "Product browsing", "Enquiry flow", "Admin panel"],
  },
];

const faqs = [
  {
    question: "Can we start with one service?",
    answer:
      "Yes. A brand project, website, internal tool, or campaign can stand on its own. In the first conversation we will identify what has to connect to existing work, then scope only what is useful now.",
  },
  {
    question: "What if we already have a logo or website?",
    answer:
      "We will look at what still works before proposing a rebuild. Sometimes clearer copy, a better page structure, or a more consistent design system does more than starting from zero.",
  },
  {
    question: "How will pricing and timing be decided?",
    answer:
      "They depend on the scope, content, integrations, and review process. After we understand the brief, we can separate essential work from later phases and put deliverables and milestones in writing before work begins.",
  },
  {
    question: "Do we need all our content ready?",
    answer:
      "Bring what you have: current pages, brochures, notes, photos, or even a rough explanation. We can help organize the message and identify what is missing. The project scope will make clear who creates and approves each piece.",
  },
  {
    question: "Can you work with our current tools or team?",
    answer:
      "That is often the right starting point. We first map the tools and handoffs already in use, then decide what to keep, connect, improve, or replace based on the problem we are solving.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We plan for a handover and discuss what should be monitored or improved next. Any ongoing support or campaign work is scoped explicitly, so you know what is included.",
  },
  {
    question: "Do you work outside Siliguri?",
    answer:
      "Yes. AuraKode is based in Siliguri, West Bengal. We can work remotely with businesses elsewhere using shared reviews and clear milestones.",
  },
];

const studioStages = [
  {
    number: "01",
    name: "Identity",
    title: "Give the idea a voice.",
    detail:
      "A compact name, encouraging language, and energetic visual system make Motive feel welcoming rather than intimidating.",
    decision:
      "The mark, color, and tone can all travel from a studio sign to a phone screen without becoming a different brand.",
    deliverables: "POSITIONING / IDENTITY / ART DIRECTION",
  },
  {
    number: "02",
    name: "Experience",
    title: "Make the next step effortless.",
    detail:
      "The website puts class discovery and booking in plain sight, with enough context to help a first-time visitor choose.",
    decision:
      "The first screen answers ‘Is this for me?’ before asking someone to commit to a class.",
    deliverables: "WEBSITE / USER JOURNEY / BOOKING FLOW",
  },
  {
    number: "03",
    name: "Momentum",
    title: "Carry the story into the world.",
    detail:
      "The campaign uses the same promise and points toward a focused class page instead of a generic homepage.",
    decision:
      "One message continues from ad to landing page, so the visitor does not have to start over after clicking.",
    deliverables: "CAMPAIGN / LANDING PAGE / MEASUREMENT",
  },
];

const entryPoints = [
  {
    number: "01",
    title: "Starting something new",
    image: "/ui-visuals/starting-new.jpg",
    alt: "An open brand book and phone awaiting a new business identity",
    chapter: "THE LAUNCH",
    copy: "You need a name people can understand, a visual identity they can recognize, and a website that explains the offer from day one.",
    scope: "Brand direction · Website · Launch assets",
    questions: ["Who is it for?", "What must be ready at launch?"],
    prompt:
      "Hi AuraKode, I am starting something new and would like to discuss a brand and launch plan.",
  },
  {
    number: "02",
    title: "Ready for a stronger presence",
    image: "/ui-visuals/stronger-presence.jpg",
    alt: "Old materials beside a refreshed brand design system",
    chapter: "THE NEXT CHAPTER",
    copy: "The business has grown, but its site or brand still tells an older story. We can find what to keep and what needs to change.",
    scope: "Positioning · Redesign · Conversion path",
    questions: ["What still works?", "Where do prospects hesitate?"],
    prompt:
      "Hi AuraKode, I would like to improve my existing brand or website.",
  },
  {
    number: "03",
    title: "Growing past manual work",
    image: "/ui-visuals/connected-operations.jpg",
    alt: "A connected network of glass modules representing a clearer workflow",
    chapter: "THE SYSTEM",
    copy: "Inquiries, updates, and reporting are spread across too many places. Better digital tools can help your team move with less friction.",
    scope: "Digital products · Systems · Growth",
    questions: [
      "Which handoffs repeat?",
      "What needs to be visible in one place?",
    ],
    prompt:
      "Hi AuraKode, I would like to discuss better digital systems and growth.",
  },
];

const journeySteps = [
  {
    title: "An ad earns the visit",
    copy: "The promise and visual tone should give someone a reason to continue.",
  },
  {
    title: "The page answers the question",
    copy: "They need to understand the offer, see its relevance, and find a useful next step.",
  },
  {
    title: "The inquiry carries context",
    copy: "A short form or WhatsApp prompt should tell your team what the person actually needs.",
  },
  {
    title: "Your team can follow through",
    copy: "The right information reaches the right place, so the conversation can continue.",
  },
];

const processSteps = [
  {
    title: "Understand",
    copy: "We review your offer, audience, current website, channels, and tools. We ask where customers hesitate and where the team loses time.",
    output: "A shared problem statement and a short priority list.",
  },
  {
    title: "Shape the scope",
    copy: "We decide what must happen now, what can wait, and how the pieces connect. Content, pages, features, approvals, and dependencies become visible.",
    output: "A written scope with deliverables and milestones.",
  },
  {
    title: "Design and build",
    copy: "You see the direction in reviewable stages. We work through message, layout, interactions, and implementation with feedback at agreed checkpoints.",
    output: "Designs and working builds you can assess before launch.",
  },
  {
    title: "Launch and learn",
    copy: "We check the important journeys, prepare the handover, and identify what should be watched or improved once people start using the work.",
    output: "A live result, a clear handover, and sensible next questions.",
  },
];

function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 128 128"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        className="ak-letter-a"
        d="M12 101 40 27l28 74M26 74h28"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <path
        className="ak-letter-k"
        d="M81 27v74m1-37 33-37M82 64l34 37"
        stroke="var(--ak-accent,currentColor)"
        strokeWidth="10"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return <div className={className}>{children}</div>;
}

function StudioDemo() {
  const [active, setActive] = useState(0);
  const stage = studioStages[active];
  return (
    <section className="ah-demo" id="studio-demo">
      <div className="ah-wrap">
        <Reveal className="ah-demo-heading">
          <div>
            <span className="ah-section-label">A CONCEPT PROJECT</span>
            <h2>
              See the thinking
              <br />
              <em>take shape.</em>
            </h2>
          </div>
          <p>
            Meet Motive, a fictional movement studio. The screens are only part
            of the story; the useful part is the decision behind each one.
          </p>
        </Reveal>
        <Reveal className="ah-demo-brief">
          <div>
            <span>THE BRIEF</span>
            <p>
              Make a first class feel approachable to someone who wants to move
              more but does not know where to begin.
            </p>
          </div>
          <div>
            <span>THE AUDIENCE QUESTION</span>
            <p>
              “Will I feel comfortable here, and how do I choose the right
              class?”
            </p>
          </div>
          <div>
            <span>THE DESIGN RESPONSE</span>
            <p>
              An encouraging voice, energetic identity, and a short route from
              discovery to booking.
            </p>
          </div>
        </Reveal>
        <div className="ah-demo-shell">
          <div className="ah-demo-rail">
            <span className="ah-demo-disclaimer">
              MOTIVE / ORIGINAL CONCEPT BY AURAKODE
            </span>
            <div
              className="ah-demo-tabs"
              role="tablist"
              aria-label="Explore the studio demonstration"
            >
              {studioStages.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  role="tab"
                  id={`ah-demo-tab-${index}`}
                  aria-selected={active === index}
                  aria-controls="ah-demo-panel"
                  className={active === index ? "active" : ""}
                  onClick={() => setActive(index)}
                >
                  <span>{item.number}</span>
                  {item.name}
                  <i className="ah-tab-indicator" />
                </button>
              ))}
            </div>
            <div className="ah-demo-rail-copy">
              <span>THE IDEA</span>
              <strong>MOVE / WITH / PURPOSE</strong>
              <p>One message, expressed across three touchpoints.</p>
            </div>
          </div>
          <div
            className="ah-demo-stage"
            role="tabpanel"
            id="ah-demo-panel"
            aria-labelledby={`ah-demo-tab-${active}`}
          >
            <div
              key={active}
              className={`ah-demo-art ah-demo-art-${active}`}
            >
              {active === 0 && (
                <div className="ah-concept-brand">
                  <div className="ah-concept-top">
                    <span>STUDIO CONCEPT / 001</span>
                    <span>BRAND SYSTEM</span>
                  </div>
                  <div className="ah-concept-orb">
                    <span>M</span>
                  </div>
                  <div className="ah-concept-brand-bottom">
                    <strong>
                      motive<span>.</span>
                    </strong>
                    <p>
                      Movement for
                      <br />
                      the way you live.
                    </p>
                  </div>
                  <div className="ah-concept-colors">
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
              )}
              {active === 1 && (
                <div className="ah-concept-web">
                  <div className="ah-concept-browser">
                    <i />
                    <i />
                    <i />
                    <span>motive.studio / concept</span>
                  </div>
                  <div className="ah-concept-web-nav">
                    <strong>
                      motive<span>.</span>
                    </strong>
                    <span>THE STUDIO &nbsp; CLASSES &nbsp; ABOUT</span>
                    <b>BOOK A CLASS ↗</b>
                  </div>
                  <div className="ah-concept-web-body">
                    <Image
                      src="/ui-visuals/motive-studio.jpg"
                      alt="A welcoming movement studio concept with a person stretching"
                      fill
                      sizes="(max-width: 800px) 90vw, 55vw"
                      className="ah-motive-photo"
                    />
                    <div className="ah-concept-web-copy">
                      <span>MOVE / WITH / PURPOSE</span>
                      <h3>
                        Find your
                        <br />
                        <em>kind of move.</em>
                      </h3>
                      <p>
                        A space to get stronger, feel lighter, and make movement
                        your own.
                      </p>
                      <b>EXPLORE CLASSES &nbsp; ↗</b>
                    </div>
                  </div>
                  <div className="ah-concept-web-foot">
                    <span>01 / DISCOVER</span>
                    <span>02 / EXPLORE</span>
                    <span>03 / BOOK</span>
                  </div>
                </div>
              )}
              {active === 2 && (
                <div className="ah-concept-campaign">
                  <div className="ah-concept-campaign-left">
                    <span>CAMPAIGN / SOCIAL</span>
                    <div className="ah-concept-campaign-symbol">✳</div>
                    <strong>
                      MAKE
                      <br />
                      YOUR
                      <br />
                      <em>MOVE.</em>
                    </strong>
                    <small>MOTIVE STUDIO · A NEW WAY TO MOVE</small>
                  </div>
                  <div className="ah-concept-campaign-right">
                    <div className="ah-campaign-phone">
                      <div className="ah-campaign-phone-top">
                        motive<span>.</span> <small>↗</small>
                      </div>
                      <span>YOUR FIRST CLASS STARTS HERE</span>
                      <strong>
                        Move at
                        <br />
                        your pace.
                      </strong>
                      <p>Find the class that feels right for you.</p>
                      <b>FIND A CLASS ↗</b>
                    </div>
                    <span className="ah-campaign-flow">
                      CAMPAIGN → LANDING PAGE → ACTION
                    </span>
                  </div>
                </div>
              )}
            </div>
            <div className="ah-demo-stage-caption">
              <div>
                <span>
                  {stage.number} / {stage.name.toUpperCase()}
                </span>
                <h3>{stage.title}</h3>
                <p>{stage.detail}</p>
              </div>
              <small>{stage.deliverables}</small>
            </div>
            <div className="ah-demo-decision">
              <span>WHY THIS CHOICE</span>
              <p>{stage.decision}</p>
            </div>
          </div>
        </div>
        <p className="ah-demo-note">
          Motive is an original concept, shown here as a design demonstration
          rather than client work.
        </p>
      </div>
    </section>
  );
}

export function AgencyHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);
  const [heroPaused, setHeroPaused] = useState(true);
  const [activeSection, setActiveSection] = useState("top");
  useEffect(() => {
    if (heroPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(
      () => setHeroIndex((current) => (current + 1) % heroScenes.length),
      5500,
    );
    return () => window.clearInterval(timer);
  }, [heroIndex, heroPaused]);
  useEffect(() => {
    const updateSection = () => {
      let current = "top";
      for (const item of appNavigation) {
        const section = document.getElementById(item.id);
        if (section && section.getBoundingClientRect().top <= window.innerHeight * 0.42) {
          current = item.id;
        }
      }
      setActiveSection(current);
    };
    updateSection();
    window.addEventListener("scroll", updateSection, { passive: true });
    window.addEventListener("resize", updateSection);
    return () => {
      window.removeEventListener("scroll", updateSection);
      window.removeEventListener("resize", updateSection);
    };
  }, []);
  useEffect(() => {
    if (!menuOpen) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [menuOpen]);
  const closeMenu = () => setMenuOpen(false);
  return (
    <div className="agency-home">
      <a className="ah-skip" href="#main-content">
        Skip to main content
      </a>
      <header className="ah-header">
        <div className="ah-nav">
          <a
            href="#top"
            className="ah-logo"
            onClick={closeMenu}
          >
            <BrandMark className="ah-logo-mark" />
            <span>
              AuraKode<small>BUSINESS SOLUTIONS</small>
            </span>
          </a>
          <nav className="ah-nav-links" aria-label="Main navigation">
            <a href="#real-work">Our work</a>
            <a href="#services">Services</a>
            <a href="#work-with-us">Start here</a>
            <a href="#process">Process</a>
          </nav>
          <a className="ah-nav-cta" href="#contact">
            Let&apos;s talk
          </a>
          <button
            type="button"
            className="ah-menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="ah-mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav
            id="ah-mobile-menu"
            className="ah-mobile-menu"
            aria-label="Mobile navigation"
          >
            <a href="#real-work" onClick={closeMenu}>
              Our work
            </a>
            <a href="#services" onClick={closeMenu}>
              Services
            </a>
            <a href="#work-with-us" onClick={closeMenu}>
              Start here
            </a>
            <a href="#process" onClick={closeMenu}>
              Process
            </a>
            <a href="#questions" onClick={closeMenu}>
              FAQs
            </a>
            <a href="#contact" onClick={closeMenu}>
              Let&apos;s talk
            </a>
          </nav>
        )}
      </header>
      <main id="main-content">
        <section className="ah-hero" id="top" data-paused={heroPaused ? "true" : "false"}>
          <div className="ah-hero-scene" aria-live="off">
            <Image
              key={heroScenes[heroIndex].number}
              src={heroScenes[heroIndex].image}
              alt={heroScenes[heroIndex].alt}
              fill
              priority={heroIndex === 0}
              sizes="(max-width: 600px) 100vw, (max-width: 1024px) 48vw, 100vw"
              className="ah-hero-frame is-active"
            />
          </div>
          <div className="ah-hero-inner">
            <div className="ah-hero-copy" key={heroScenes[heroIndex].number} aria-live="off">
              <div className="ah-kicker">
                <span>{heroScenes[heroIndex].number} / {heroScenes[heroIndex].label.toUpperCase()}</span>
                <span className="ah-kicker-line" />
                <span>BRAND, WEB &amp; BUSINESS SYSTEMS</span>
              </div>
              <h1>
                {heroScenes[heroIndex].headline[0]}
                <br />
                {heroScenes[heroIndex].headline[1]}
                <br />
                <em>{heroScenes[heroIndex].headline[2]}</em>
              </h1>
              <p>{heroScenes[heroIndex].description}</p>
              <div className="ah-hero-actions">
                <a className="ah-button ah-button-cyan" href={heroScenes[heroIndex].primary.href}>
                  {heroScenes[heroIndex].primary.label} <ArrowUpRight size={18} />
                </a>
                <a className="ah-text-link" href={heroScenes[heroIndex].secondary.href}>
                  {heroScenes[heroIndex].secondary.label}
                </a>
              </div>
            </div>
            <div className="ah-hero-art-note" role="group" aria-label="Hero scenes">
              {heroScenes.map((scene, index) => (
                <button
                  key={scene.number}
                  type="button"
                  className={heroIndex === index ? "is-active" : ""}
                  aria-pressed={heroIndex === index}
                  onClick={() => {
                    setHeroIndex(index);
                    setHeroPaused(true);
                  }}
                >
                  <span>{scene.number} / {scene.label.toUpperCase()}</span>
                  <i aria-hidden="true" />
                </button>
              ))}
              <button
                type="button"
                className="ah-hero-pause"
                aria-pressed={heroPaused}
                onClick={() => setHeroPaused((paused) => !paused)}
              >
                {heroPaused ? <Play size={13} aria-hidden="true" /> : <Pause size={13} aria-hidden="true" />}
                <span>{heroPaused ? "PLAY SCENES" : "PAUSE SCENES"}</span>
              </button>
            </div>
          </div>
          <div className="ah-hero-foot">
            <span>{heroScenes[heroIndex].caption}</span>
            <span>
              EXPLORE THE STUDIO <ArrowDown size={14} />
            </span>
          </div>
        </section>

        <section className="ah-statement" id="advantage">
          <div className="ah-wrap">
            <Reveal className="ah-statement-grid">
              <div>
                <span className="ah-section-label">THE CUSTOMER JOURNEY</span>
                <h2>
                  A first impression has to survive <em>the next click.</em>
                </h2>
              </div>
              <div className="ah-statement-side">
                <p>
                  A person sees your reel or ad, opens the site, checks the
                  offer, then decides whether to start a conversation. That
                  sequence can happen in less time than it takes to explain your
                  business in a meeting.
                </p>
                <p>
                  We think about the whole handoff, including what your team
                  receives after someone reaches out.
                </p>
              </div>
            </Reveal>
            <div className="ah-journey">
              {journeySteps.map((step, index) => (
                <Reveal
                  className="ah-journey-step"
                  key={step.title}
                  delay={index * 0.06}
                >
                  <span>0{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="ah-proof" id="real-work">
          <div className="ah-wrap">
            <Reveal className="ah-proof-live-head">
              <span className="ah-section-label">LIVE CLIENT WEBSITES</span>
              <h2>Work you can <em>open and explore.</em></h2>
              <p>These are public websites we built for two earthmoving parts businesses. Each connects product discovery with a sales enquiry path and an admin panel behind the scenes.</p>
            </Reveal>
            <div className="ah-proof-live-grid">
              {liveProjects.map((project) => (
                <Reveal key={project.name} className="ah-proof-live-card">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <div className="ah-proof-live-image">
                      <Image src={project.image} alt={project.alt} fill sizes="(max-width: 800px) 100vw, 50vw" />
                      <span>LIVE WEBSITE</span>
                      <strong>{project.name}</strong>
                    </div>
                    <div className="ah-proof-live-body">
                      <span>{project.category}</span>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="ah-proof-live-tags">
                        {project.capabilities.map((item) => <small key={item}>{item}</small>)}
                      </div>
                      <b>Visit live website <ArrowUpRight size={17} aria-hidden="true" /></b>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="ah-wrap ah-proof-grid">
            <Reveal className="ah-proof-copy">
              <span className="ah-section-label">CLIENT PROJECT · IN TESTING</span>
              <h2>From an ad to <em>a completed order.</em></h2>
              <p>
                Shift.Store is a home decor ecommerce project currently in client
                testing. We built it for the full buying journey: a customer can arrive from a campaign,
                find a product, choose Cashfree online payment or cash on
                delivery, and use their order ID to track what happens next.
              </p>
              <p>
                Behind that journey, we also built an admin panel to manage
                the website. The work connects the storefront, checkout, order
                tracking, and day-to-day operations in one system.
              </p>
              <div className="ah-proof-actions">
                <a href="#digital">Explore web and systems</a>
                <a href="#studio-demo">See our design concept</a>
              </div>
            </Reveal>
            <Reveal className="ah-proof-diagram" delay={0.08}>
              <div className="ah-proof-diagram-head">
                <span>SHIFT.STORE / IN TESTING</span>
                <span>ILLUSTRATIVE SYSTEM MAP</span>
              </div>
              <div className="ah-proof-flow">
                <span>Campaign visit</span>
                <span>Product choice</span>
                <span>Cashfree or COD</span>
                <span>Order ID</span>
                <span>Order tracking</span>
              </div>
              <div className="ah-proof-system">
                <div><small>STOREFRONT</small><strong>Discover → buy → track</strong></div>
                <div><small>ADMIN PANEL</small><strong>Manage the store</strong></div>
              </div>
              <p>This diagram explains the delivered journey; it is not a screenshot of the live interface.</p>
            </Reveal>
          </div>
        </section>

        <StudioDemo />

        <section className="ah-services" id="services">
          <div className="ah-wrap">
            <Reveal className="ah-services-intro">
              <div>
                <span className="ah-section-label">WHAT WE DO</span>
                <h2>
                  From first impression
                  <br />
                  <em>to daily operation.</em>
                </h2>
              </div>
              <p>
                Each service can be a focused project or part of a larger plan.
                Here is what the work involves, and the kinds of decisions that
                make it useful.
              </p>
            </Reveal>
            <div className="ah-services-list">
              {services.map((service) => (
                <Reveal
                  className={`ah-service ah-service-${service.id}`}
                  key={service.id}
                >
                  <div className="ah-service-visual">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(max-width: 850px) 100vw, 50vw"
                      className="ah-service-photo"
                    />
                    <div className="ah-service-visual-route" aria-label="Example workflow">
                      <span>ONE POSSIBLE PATH</span>
                      {service.visualRoute.map((step, index) => (
                        <div key={step}><small>{String(index + 1).padStart(2, "0")}</small>{step}</div>
                      ))}
                    </div>
                    <div className="ah-service-visual-meta">
                      <span>{service.number} / AURAKODE</span>
                      <strong>{service.visualLabel}</strong>
                    </div>
                  </div>
                  <div className="ah-service-content">
                    <div className="ah-service-top">
                      <span>{service.eyebrow}</span>
                      <span>{service.number} / 03</span>
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <div className="ah-service-list-title">
                      WHAT WE CAN BUILD
                    </div>
                    <ul>
                      {service.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <div className="ah-service-example">
                      <span>FOR EXAMPLE</span>
                      <p>{service.example}</p>
                    </div>
                    <div className="ah-service-outcome">
                      <span>WHAT YOU WALK AWAY WITH</span>
                      <strong>{service.outcome}</strong>
                    </div>
                    <Link className="ah-service-detail-link" href={service.href}>
                      Explore {service.eyebrow.toLowerCase()} in Siliguri
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="ah-entry" id="work-with-us">
          <div className="ah-wrap">
            <Reveal className="ah-entry-head">
              <div>
                <span className="ah-section-label">WHERE TO BEGIN</span>
                <h2>
                  Find your
                  <br />
                  <em>starting point.</em>
                </h2>
              </div>
              <p>
                You do not need to arrive with a perfect brief. Pick the
                situation closest to yours; we will shape the scope together.
              </p>
            </Reveal>
            <div className="ah-entry-grid">
              {entryPoints.map((item, index) => (
                <Reveal
                  className="ah-entry-card"
                  key={item.number}
                  delay={index * 0.08}
                >
                  <div className="ah-entry-image">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 800px) 100vw, 42vw"
                    />
                    <span>{item.chapter}</span>
                  </div>
                  <div className="ah-entry-body">
                    <div className="ah-entry-topline">
                      <span className="ah-entry-number">
                        {item.number} / 03
                      </span>
                      <span>{item.scope}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                    <div className="ah-entry-bottom">
                      <div className="ah-entry-questions">
                        <strong>THE FIRST QUESTIONS</strong>
                        {item.questions.map((question) => (
                          <span key={question}>{question}</span>
                        ))}
                      </div>
                      <a
                        href={whatsappUrl(item.prompt)}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Start here: discuss ${item.title.toLowerCase()} on WhatsApp`}
                      >
                        Start here <ArrowUpRight size={18} />
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="ah-process" id="process">
          <div className="ah-wrap">
            <Reveal className="ah-process-head">
              <div>
                <span className="ah-section-label">HOW A PROJECT MOVES</span>
                <h2>
                  Clear decisions,
                  <br />
                  <em>visible work.</em>
                </h2>
              </div>
              <p>
                The exact scope changes from project to project. These
                checkpoints make the work reviewable and keep everyone clear on
                what comes next.
              </p>
            </Reveal>
            <div className="ah-process-steps">
              {processSteps.map((step, index) => (
                <Reveal
                  className="ah-step"
                  key={step.title}
                  delay={index * 0.07}
                >
                  <span>0{index + 1}</span>
                  <div className="ah-step-body">
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.copy}</p>
                    </div>
                    <div className="ah-step-output">
                      <strong>WHAT YOU SEE</strong>
                      <p>{step.output}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="ah-questions" id="questions">
          <div className="ah-wrap ah-questions-grid">
            <Reveal>
              <span className="ah-section-label">PRACTICAL DETAILS</span>
              <h2>
                Before we
                <br />
                <em>get started.</em>
              </h2>
              <p>
                Scope, timing, content, handover, and whether you need
                everything figured out before calling.
              </p>
            </Reveal>
            <div className="ah-faq-list">
              {faqs.map((item, index) => (
                <details key={item.question}>
                  <summary>
                    <span>0{index + 1}</span>
                    {item.question}
                    <ChevronDown size={18} />
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="ah-contact" id="contact">
          <div className="ah-wrap ah-contact-grid">
            <Reveal className="ah-contact-copy">
              <span className="ah-section-label">LET&apos;S TALK</span>
              <h2>
                Tell us the
                <br />
                <em>messy version.</em>
              </h2>
              <p>
                You can start with a rough idea, an outdated website, or a
                problem you cannot quite name yet. We&apos;ll help find a useful
                first step.
              </p>
              <p className="ah-contact-tip">
                Useful context: what the business does, what feels stuck, a
                current site if you have one, and when the change matters. A few
                sentences are enough.
              </p>
              <p className="ah-contact-expectation">
                We&apos;ll review your note and reply with a suggested first step.
                If a project makes sense, we&apos;ll agree on scope, timing, and
                price before any work begins.
              </p>
              <a
                className="ah-contact-direct"
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={20} /> Chat with us on WhatsApp
              </a>
              <div className="ah-location">
                BASED IN SILIGURI, WEST BENGAL · WORKING EVERYWHERE
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <LeadCapture />
            </Reveal>
          </div>
        </section>
      </main>
      <nav className="ah-app-nav" aria-label="Quick navigation">
        {appNavigation.map(({ id, label, Icon }) => (
          <a
            key={id}
            href={`#${id}`}
            aria-current={activeSection === id ? "page" : undefined}
            onClick={closeMenu}
          >
            <Icon size={20} strokeWidth={activeSection === id ? 2.3 : 1.8} />
            <span>{label}</span>
          </a>
        ))}
      </nav>
      <footer className="ah-footer">
        <div className="ah-wrap">
          <div className="ah-footer-top">
            <div>
              <a href="#top" className="ah-footer-logo">
                <BrandMark />
                AuraKode
              </a>
              <p>
                Brand identity, websites, and business systems
                <br />
                shaped around the way you actually work.
              </p>
            </div>
            <div className="ah-footer-links">
              <div>
                <strong>EXPLORE</strong>
                <a href="#services">Services</a>
                <a href="#real-work">Our work</a>
                <a href="#studio-demo">Design concept</a>
                <a href="#work-with-us">Start here</a>
                <a href="#process">Process</a>
                <a href="#questions">FAQs</a>
                <Link href="/services/website-design-siliguri">Website design in Siliguri</Link>
                <Link href="/services/branding-siliguri">Brand identity in Siliguri</Link>
                <Link href="/services/seo-siliguri">SEO in Siliguri</Link>
              </div>
              <div>
                <strong>CONNECT</strong>
                <a href="#contact">Start a project</a>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
                <span>Siliguri, West Bengal</span>
              </div>
            </div>
          </div>
          <div className="ah-footer-bottom">
            <span>
              © {new Date().getFullYear()} AuraKode Business Solutions
            </span>
            <span>Siliguri, India</span>
            <a href="#top">Back to top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
