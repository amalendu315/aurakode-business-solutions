export type ServicePage = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  intro: string;
  image: string;
  imageAlt: string;
  problems: string[];
  approach: { title: string; copy: string }[];
  deliverables: string[];
  result: string;
  proof: { title: string; copy: string; href?: string };
  faqs: { question: string; answer: string }[];
  whatsapp: string;
};

export const servicePages: ServicePage[] = [
  {
    slug: "website-design-siliguri",
    title: "Website design in Siliguri that helps people take the next step.",
    metaTitle: "Website Design in Siliguri | AuraKode Business Solutions",
    description: "AuraKode designs and builds websites, web apps and business systems in Siliguri. See our live work, process and what goes into a useful website.",
    eyebrow: "WEBSITE DESIGN & DEVELOPMENT",
    intro: "A website should explain your offer, earn trust and make it easy to enquire. We design the public experience and the practical tools behind it around the way your business actually works.",
    image: "/ui-visuals/digital-systems.jpg",
    imageAlt: "Desktop and mobile interfaces connected to a business system",
    problems: [
      "Visitors arrive but cannot quickly understand what you offer or who it is for.",
      "Pages look polished but bury the proof, pricing context or next action people need.",
      "Every enquiry starts from zero because the website collects no useful context.",
      "The public site and internal workflows are disconnected, creating manual work for your team.",
    ],
    approach: [
      { title: "Start with the visitor", copy: "We identify the questions a customer brings, the action each page should support, and the evidence needed before they reach out." },
      { title: "Design the journey", copy: "Navigation, copy, page structure and calls to action are shaped together. Mobile use, readability and accessibility are part of the design." },
      { title: "Build for real use", copy: "We implement the site, connect the agreed enquiry or business workflows, and check the key journeys before launch." },
    ],
    deliverables: ["Marketing websites and landing pages", "Product catalogs and search", "Web apps and dashboards", "Forms, enquiry flows and integrations", "Core technical SEO and launch checks"],
    result: "You get a website that makes the offer clearer to visitors and gives your team a practical way to respond. The exact features and handover are agreed in a written scope.",
    proof: { title: "A live catalog, search and enquiry flow", copy: "For ConEquiparts, we built a searchable parts catalog and a detailed enquiry path, supported by an admin panel. Open the live site to see the public experience.", href: "https://conequiparts.com/" },
    faqs: [
      { question: "Can you improve an existing website?", answer: "Yes. We first check what still works. A clearer structure, better copy or a focused landing page may be enough; a full rebuild is proposed only when the current foundation limits the work." },
      { question: "Will the site work on mobile?", answer: "Mobile layouts and touch interactions are part of the project. We also check loading behavior, readability and the main enquiry route across screen sizes." },
      { question: "Can the website connect to our current tools?", answer: "Often. We review the tools you already use and agree which integrations are useful and technically practical before scoping the build." },
    ],
    whatsapp: "Hi AuraKode, I would like to discuss a website or web app project.",
  },
  {
    slug: "branding-siliguri",
    title: "Brand identity in Siliguri, built around what makes you different.",
    metaTitle: "Branding & Identity Design in Siliguri | AuraKode",
    description: "AuraKode helps Siliguri businesses clarify their message and build a consistent visual identity. Explore positioning, logo design, guidelines and launch assets.",
    eyebrow: "BRAND STRATEGY & IDENTITY",
    intro: "When your website, social posts and sales material feel like different businesses, people have to work harder to recognize you. We connect a clear message with a visual system your team can actually use.",
    image: "/ui-visuals/identity-worktable.jpg",
    imageAlt: "Brand materials, type and translucent blue acrylic on a worktable",
    problems: [
      "The business has grown but the brand still tells an older story.",
      "Different channels use different words and visual styles.",
      "Prospects cannot quickly tell what makes your offer distinct.",
      "A logo exists, but the team lacks rules and examples for applying it.",
    ],
    approach: [
      { title: "Find the position", copy: "We look at the audience, offer, competitors and current material to decide what the brand should stand for and communicate first." },
      { title: "Shape the identity", copy: "We develop the voice and visual direction together, then test how it works across the touchpoints your business uses." },
      { title: "Make it usable", copy: "The final system includes clear rules and examples, so your team can create consistent material after the project ends." },
    ],
    deliverables: ["Positioning and key messages", "Logo and visual identity", "Typography, colors and image direction", "Brand guidelines and templates", "Campaign and launch assets"],
    result: "You leave with a shared story and a practical brand toolkit. We define the exact assets and applications with you before work begins.",
    proof: { title: "See a complete brand idea take shape", copy: "Our Motive studio concept shows how one message carries from identity to a website and campaign. It is clearly marked as a design concept, rather than client work.", href: "/#studio-demo" },
    faqs: [
      { question: "Do we need a new logo?", answer: "Not always. We assess what is already recognizable and useful before deciding whether to refine it, extend it or start again." },
      { question: "Can you work with our existing website?", answer: "Yes. A brand system can be designed to work with an existing site, or the site can be addressed as a separate phase." },
      { question: "What do brand guidelines include?", answer: "They describe how the agreed logo, color, type, imagery and tone should be used, with examples suited to the channels in the project scope." },
    ],
    whatsapp: "Hi AuraKode, I would like to discuss branding and identity for my business.",
  },
  {
    slug: "seo-siliguri",
    title: "SEO in Siliguri, focused on useful pages and relevant enquiries.",
    metaTitle: "SEO Services in Siliguri | AuraKode Business Solutions",
    description: "Improve how customers discover and understand your business. AuraKode connects technical SEO, page content, local visibility and measurement in Siliguri.",
    eyebrow: "SEARCH VISIBILITY & GROWTH",
    intro: "Being found is only the beginning. The page a person lands on needs to answer their question, show why you are relevant and offer a sensible next step. We approach search visibility as part of that full journey.",
    image: "/ui-visuals/growth-path.jpg",
    imageAlt: "An illuminated path connecting discovery, relevance and action",
    problems: [
      "The site has no clear page for an important service or customer question.",
      "Search visitors land on a generic page that does not match what they looked for.",
      "Technical issues make useful pages hard to crawl or slow to use.",
      "The business has a Google Business Profile but its website does not clearly support the same services and location.",
    ],
    approach: [
      { title: "Check the foundation", copy: "We review indexability, page structure, mobile experience, speed and the questions your customers actually ask." },
      { title: "Build useful pages", copy: "We prioritize pages that explain real services, show evidence and answer practical objections. Titles and structured data support the visible content." },
      { title: "Measure and improve", copy: "Search Console and relevant enquiry signals show what people find, where they drop off and what is worth improving next." },
    ],
    deliverables: ["Technical SEO review", "Service page structure and on-page SEO", "Local business information consistency", "Search Console and sitemap setup guidance", "Landing pages and measurement plans"],
    result: "The goal is a clearer, crawlable site that helps relevant visitors decide whether to contact you. Search rankings depend on competition, site history and ongoing work; no agency can guarantee a position.",
    proof: { title: "Search should lead somewhere useful", copy: "Our work on product discovery and enquiries for ConEquiparts and Online Parts illustrates the connection between finding the right page and taking a useful action.", href: "/#real-work" },
    faqs: [
      { question: "Can you guarantee a number-one Google ranking?", answer: "No. We can improve the site foundation and content, but Google decides rankings based on many signals outside any agency's control." },
      { question: "Does a Google Business Profile replace a website?", answer: "They work together. A complete Business Profile helps people find and contact you locally; a clear website gives them more detail about services, work and the next step." },
      { question: "How soon will SEO make a difference?", answer: "It depends on the starting point, competition and the work required. We set priorities and use Search Console and enquiry data to review progress over time." },
    ],
    whatsapp: "Hi AuraKode, I would like to discuss SEO and local search visibility.",
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
