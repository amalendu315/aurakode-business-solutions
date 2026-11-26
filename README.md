<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="public/brand/aurakode-lockup.svg">
    <img src="public/brand/aurakode-lockup.svg" alt="AuraKode Business Solutions" width="340">
  </picture>

  <h1>Build the business they remember.</h1>
  <p>Brand identity · Websites · Business systems · Visibility & growth</p>
  <p>AuraKode Business Solutions is based in Siliguri, serves businesses across India, and welcomes international projects.</p>
</div>

![AuraKode's connected glass and metal visual system](public/ui-visuals/hero-architecture.jpg)

## About AuraKode

A customer might meet a business through an ad, visit its website, send an enquiry, and then speak with its team. Each step should feel like part of the same promise. AuraKode brings the identity, digital experience, and supporting systems into one considered direction.

This repository contains AuraKode's responsive business website. The concise homepage introduces the services, links to three project case studies, explains the process, and gives visitors direct contact options. A shared header and footer connect the homepage, project pages, three focused service pages, About, Contact, Privacy Policy, and Terms & Conditions.

## What the site covers

| Area | What a visitor can learn |
| --- | --- |
| Brand & identity | Positioning, messaging, visual identity, guidelines, and campaign direction |
| Web & business systems | Websites, web apps, dashboards, forms, workflows, and integrations |
| Visibility & growth | Search, paid campaigns, landing pages, and measurement |
| Selected work | Case studies for [ConEquiparts](https://aurakode.in/projects/conequiparts) and [Online Parts](https://aurakode.in/projects/online-parts), credited as freelance projects at Techno Imagine; [Shift.Store](https://aurakode.in/projects/shift-store), an AuraKode home and lifestyle storefront |
| Process & FAQs | Discovering the need, agreeing on scope, building in reviewable stages, pricing, and working remotely |
| About & Contact | AuraKode's approach, direct WhatsApp and email links, and a map of its Siliguri base with India-wide service clearly stated |
| Privacy & terms | How website enquiries and third-party services are handled, and the basic terms for using the site |

The homepage uses a glass visual system and measured scroll reveals. Project and service cards sit in compact rows on phones to reduce vertical scrolling. Motion respects reduced-motion preferences. A WhatsApp button stays available throughout the site.

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
  compact.css              Homepage layout, glass surfaces, and motion
  site-shell.css           Shared navigation and footer
  info.css                 About, Contact, Privacy, and Terms styles
  opengraph-image.tsx      Generated social preview image
  robots.ts                Robots rules and sitemap reference
  sitemap.ts               Canonical URLs for indexable pages
  services/[slug]/          Static service pages and shared styles
  projects/[slug]/          Static project case studies and shared styles
  about/ contact/           Company information and contact routes
  privacy-policy/           Privacy policy route
  terms-and-conditions/     Website terms route
components/
  agency-home-compact.tsx  Homepage content, navigation, and interactions
  site-shell.tsx           Shared header, mobile menu, and footer
lib/
  service-pages.ts         Service page content and FAQs
  projects.ts              Project descriptions, credits, and live links
  whatsapp.ts             WhatsApp number and prefilled-message URL
public/
  brand/                  Logo lockups and marks
  client-work/            Hero imagery from the linked live client websites
  ui-visuals/             Hero and service imagery
```

### Where to make changes

- **Homepage copy and project credits:** `components/agency-home-compact.tsx`
- **Project details and credits:** `lib/projects.ts`
- **Focused service pages:** `lib/service-pages.ts`
- **Shared navigation and footer:** `components/site-shell.tsx` and `app/site-shell.css`
- **Phone, tablet, and desktop styling:** `app/compact.css`, `app/info.css`, and `app/services/[slug]/service.css`
- **Logo files:** `public/brand/`; the homepage and service pages use `aurakode-lockup.svg`
- **Contact number and default message:** `lib/whatsapp.ts`
- **Page title, description, and social metadata:** `app/layout.tsx`, `app/services/[slug]/page.tsx`, and `app/opengraph-image.tsx`

## Design and interaction notes

- Images are served through `next/image` with responsive sizes. The hero image is prioritized; project imagery loads as needed.
- Glass surfaces, gentle image motion, and scroll reveals support the content. Reduced-motion preferences disable decorative animation and reveal transitions.
- The page has a skip link, semantic sections, keyboard-accessible navigation, and accessible FAQ controls. The same navigation appears on every route.
- Contact links open WhatsApp with a prefilled greeting or a new email to `admin@aurakode.in`. Enquiries are not stored in this repository.
- Homepage project cards open local case studies, which link to the public HTTPS websites. ConEquiparts and Online Parts are clearly credited as freelance projects at Techno Imagine. The local hero images came from those sites; they are not interface screenshots.
- The Shift.Store project card describes the public storefront without claiming live payment processing or performance results.
- The Contact page displays Siliguri as the base city while stating that AuraKode serves all of India and welcomes international projects. Its map does not claim a customer-facing office or street address.
- The Privacy Policy describes direct enquiries, hosting, Google Tag Manager and the embedded map. Review it when the configured tags or business practices change.

## Launch on aurakode.in

1. Deploy the production build to a host that supports Next.js, connect `aurakode.in`, and enable HTTPS. Redirect `www.aurakode.in` to `https://aurakode.in` so the canonical URL matches the live site. DNS and redirects must be configured with the chosen host and registrar.
2. Confirm the public WhatsApp number in `lib/whatsapp.ts`, the `admin@aurakode.in` inbox, the business name, operating base, and all business copy. Do not list an unstaffed address or invented opening hours.
3. Create or claim the Google Business Profile using the same business name and phone number, and configure only the service areas you actually support under Google's current rules. Once the site is live, add `https://aurakode.in/` as the profile's website URL. Complete the profile with accurate categories, services, photos and hours.
4. Verify `aurakode.in` as a Domain property in Google Search Console, preferably using the DNS record it provides. Submit `https://aurakode.in/sitemap.xml`, and inspect the homepage and three service URLs after deployment.
5. Review the three portfolio links and descriptions when client sites change. Add verified outcomes only when available.
6. Run `npm run build` and `npm run lint`, then review the shared mobile navigation, project rows, WhatsApp link, service pages, contact map, and legal pages on real devices.

The canonical domain, sitemap, robots file and structured data are configured for `https://aurakode.in`. They help search engines understand and crawl the site; they do not guarantee rankings. Run a fresh Lighthouse audit after deployment because scores can change with the design, hosting and real-user conditions.

## Contact

Have a project in mind? [Start a conversation with AuraKode on WhatsApp](https://wa.me/916378281761?text=Hi%20AuraKode%2C%20I%27d%20like%20to%20discuss%20a%20project.).

<sub>© AuraKode Business Solutions · Siliguri, West Bengal, India</sub>
