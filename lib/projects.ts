export type Project = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  intro: string;
  role: string;
  liveUrl: string;
  image: string;
  imageAlt: string;
  focus: string;
  details: { number: string; title: string; copy: string }[];
};

export const projects: Project[] = [
  {
    slug: "conequiparts",
    name: "ConEquiparts",
    category: "PARTS CATALOG & ENQUIRIES",
    summary: "Helping earthmoving parts buyers find the right product and make a more useful enquiry.",
    intro: "ConEquiparts connects buyers with construction and earthmoving equipment parts. The website brings product discovery and enquiry into one clearer journey, so a visitor can move from looking for a part to asking about it.",
    role: "Freelance project at Techno Imagine",
    liveUrl: "https://conequiparts.com/",
    image: "/client-work/conequiparts-hero.webp",
    imageAlt: "Earthmoving equipment featured on the ConEquiparts website",
    focus: "A catalog experience shaped around finding parts and starting a conversation.",
    details: [
      { number: "01", title: "Find a part", copy: "A searchable catalog gives buyers a direct way into the product range instead of making them start with a generic contact request." },
      { number: "02", title: "Understand the product", copy: "Product information gives each item context and helps a buyer decide what to ask next." },
      { number: "03", title: "Enquire with context", copy: "The enquiry path connects interest in a part with a conversation, helping the team respond to a more specific request." },
    ],
  },
  {
    slug: "online-parts",
    name: "Online Parts",
    category: "PARTS DISCOVERY & ENQUIRIES",
    summary: "A clearer route from JCB spare-part search to a relevant enquiry.",
    intro: "Online Parts serves buyers looking for genuine, OEM and aftermarket JCB spare parts. Its public experience brings together part search, product browsing and an enquiry flow that can carry the part or machine a visitor has selected.",
    role: "Freelance project at Techno Imagine",
    liveUrl: "https://onlineparts.shop/",
    image: "/client-work/online-parts-hero.webp",
    imageAlt: "Backhoe loader featured on the Online Parts website",
    focus: "Helping buyers arrive with a part in mind and leave a useful request.",
    details: [
      { number: "01", title: "Search in familiar terms", copy: "Visitors can start with a part number, part name or machine model, matching the way they already look for spares." },
      { number: "02", title: "Explore the range", copy: "Genuine, OEM and aftermarket routes make the catalog easier to scan before a buyer chooses a specific item." },
      { number: "03", title: "Keep enquiry context", copy: "Selecting a part can carry its details into the enquiry form, reducing the need to repeat the same information." },
    ],
  },
  {
    slug: "shift-store",
    name: "Shift.Store",
    category: "ECOMMERCE EXPERIENCE",
    summary: "A considered storefront with discovery, checkout and private order tracking.",
    intro: "Shift.Store pairs a warm home-and-lifestyle shopping experience with the practical systems behind an online store. The project covers product discovery, a guest checkout flow, order tracking and a separate merchant workspace.",
    role: "AuraKode project",
    liveUrl: "https://shiftstore.in/",
    image: "/client-work/shiftstore-interior.webp",
    imageAlt: "Home interior image featured on the Shift.Store website",
    focus: "An editorial storefront with a practical path from discovery to order support.",
    details: [
      { number: "01", title: "Discover the collection", copy: "Category browsing, search, filters and product galleries help shoppers explore without losing the calm visual feel of the store." },
      { number: "02", title: "Checkout as a guest", copy: "Customers can place an order without creating an account, with the order handled by the store's backend." },
      { number: "03", title: "Follow through", copy: "Private order tracking and a merchant workspace support the experience after someone places an order." },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
