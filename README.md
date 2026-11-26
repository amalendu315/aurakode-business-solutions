<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="public/brand/aurakode-lockup.svg">
    <img src="public/brand/aurakode-lockup.svg" alt="AuraKode Business Solutions" width="340">
  </picture>

  <h1>Build the business they remember.</h1>
  <p>Brand identity · Websites · Business systems · Visibility & growth</p>
  <p>AuraKode Business Solutions is based in Siliguri, West Bengal, and works with businesses wherever they are.</p>
</div>

![AuraKode's connected glass and metal visual system](public/ui-visuals/hero-architecture.jpg)

## About AuraKode

A customer might meet a business through an ad, visit its website, send an enquiry, and then speak with its team. Each step should feel like part of the same promise. AuraKode brings the identity, digital experience, and supporting systems into one considered direction.

This repository contains our responsive business website. It links to three public client sites, shows our approach through an explicitly fictional concept project, answers common project questions, and gives visitors a direct path to start a conversation. Three focused service pages explain website design, branding, and SEO in Siliguri.

## What the site covers

| Area | What a visitor can learn |
| --- | --- |
| Brand & identity | Positioning, messaging, visual identity, guidelines, and campaign direction |
| Web & business systems | Websites, web apps, dashboards, forms, workflows, and integrations |
| Visibility & growth | Search, paid campaigns, landing pages, and measurement |
| Live client work | [ConEquiparts](https://conequiparts.com/) and [Online Parts](https://onlineparts.shop/): public parts websites; [Shift.Store](https://shiftstore.in/): a public home and lifestyle storefront with shopping and order tracking |
| Shift.Store feature | The storefront, payment choice, order tracking, and admin panel are explained in an illustrative system map; online payments on the public store are currently labelled test mode |
| Motive concept | How one brief could become an identity, website, and campaign; **Motive is fictional, not a client project** |
| Starting points | Three ways a project can begin: launch, stronger presence, or clearer operations |
| Process & FAQs | Review checkpoints, scope, content, timing, handover, and working remotely |

The hero follows an **Idea → Identity → System** sequence. Each scene has its own image, message, and next step. The sequence starts paused for reading; visitors can select a scene or choose to play it. The sequence does not advance when a device requests reduced motion. The page uses a cinematic layout on desktop and phones, a framed editorial layout on tablet, and a bottom navigation dock on phones. A WhatsApp button stays available throughout the site.

## Run locally

You need **Node.js 20.9 or newer** and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # Production build
npm start       # Serve the production build
npm run lint    # ESLint
```

The production build currently uses Webpack (`next build --webpack`). The development command uses the Next.js dev server configured by the installed version.

## Project map

```text
app/
  page.tsx                 Active homepage route
  layout.tsx               Fonts, metadata, and document shell
  globals.css              Document reset and shared defaults
  agency.css               Active homepage and responsive visual system
  opengraph-image.tsx      Generated social preview image
  robots.ts                Robots rules and sitemap reference
  sitemap.ts               Canonical URLs for indexable pages
  services/[slug]/          Static service pages and shared styles
components/
  agency-home.tsx          Page content, hero sequence, navigation, and interactions
  sections/lead-capture.tsx  Enquiry form and WhatsApp handoff
lib/
  service-pages.ts         Service page content and FAQs
  whatsapp.ts             WhatsApp number and prefilled-message URL
public/
  brand/                  Logo lockups and marks
  client-work/            Hero imagery from the linked live client websites
  ui-visuals/             Hero, service, concept, and starting-point imagery
```

### Where to make changes

- **Homepage copy and service summary:** `components/agency-home.tsx`
- **Focused service pages:** `lib/service-pages.ts`
- **Hero scenes and their order:** `heroScenes` in `components/agency-home.tsx`, with images in `public/ui-visuals/`
- **Phone, tablet, and desktop styling:** `app/agency.css`
- **Enquiry form fields and choices:** `components/sections/lead-capture.tsx`
- **Logo files:** `public/brand/`; the inline mark used in the page is the `BrandMark` component
- **Contact number and default message:** `lib/whatsapp.ts`
- **Page title, description, and social metadata:** `app/layout.tsx`, `app/services/[slug]/page.tsx`, and `app/opengraph-image.tsx`

## Design and interaction notes

- Images are served through `next/image` with responsive sizes. The primary hero frame is prioritized; supporting imagery is deferred or sized for its section.
- The hero controls are buttons with pressed states. The sequence starts paused and stays paused on devices that request reduced motion.
- The page has a skip link, semantic sections, keyboard-accessible navigation, and accessible FAQ controls.
- The contact form asks for a name, phone number, and project note, with optional business name, email, and service choices. It validates the details, then opens WhatsApp with a prefilled message. The visitor reviews it and taps **Send** there. The site does not claim the message was delivered before that step.
- Enquiries are not stored in this repository. This handoff needs no Meta API credentials.
- ConEquiparts, Online Parts, and Shift.Store link to their public HTTPS sites. The local project images are assets served by those websites; the cards are not interface screenshots.
- The Shift.Store summary describes work supplied by the business owner and notes that online payments are labelled test mode on the public store. Its system map is explicitly illustrative; no performance figures or interface screenshots are claimed.
- The Motive screens and photographs illustrate a design direction. They are labeled as a concept rather than presented as completed client work.

## Launch on aurakode.in

1. Deploy the production build to a host that supports Next.js, connect `aurakode.in`, and enable HTTPS. Redirect `www.aurakode.in` to `https://aurakode.in` so the canonical URL matches the live site. DNS and redirects must be configured with the chosen host and registrar.
2. Confirm the public WhatsApp number in `lib/whatsapp.ts`, the business name, service area, and all business copy. Submit a test enquiry and review the prefilled message before sending. Do not list an unstaffed address or invented opening hours.
3. Create or claim the Google Business Profile using the same business name, phone number and service area. Once the site is live, add `https://aurakode.in/` as the profile's website URL. Complete the profile with accurate categories, services, photos and hours.
4. Verify `aurakode.in` as a Domain property in Google Search Console, preferably using the DNS record it provides. Submit `https://aurakode.in/sitemap.xml`, and inspect the homepage and three service URLs after deployment.
5. Review the three portfolio links and descriptions when client sites change. Add verified outcomes only when available.
6. Run `npm run build` and `npm run lint`, then review the hero controls, mobile dock, WhatsApp links, service pages, and enquiry form on real devices.

The canonical domain, sitemap, robots file and structured data are already configured for `https://aurakode.in`. They help search engines understand and crawl the site; they do not guarantee rankings. The local production Lighthouse audit reached 100 for Performance, Accessibility, Best Practices and SEO on the homepage and website-design service page. Scores can differ after deployment or with real-user conditions.

## Contact

Have a project in mind? [Start a conversation with AuraKode on WhatsApp](https://wa.me/916378281761?text=Hi%20AuraKode%2C%20I%27d%20like%20to%20discuss%20a%20project.).

<sub>© AuraKode Business Solutions · Siliguri, West Bengal, India</sub>
