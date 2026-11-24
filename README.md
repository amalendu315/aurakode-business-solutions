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

This repository contains our responsive business website. It links to two live client sites, presents the Shift.Store ecommerce project in testing, shows our approach through an explicitly fictional concept project, answers common project questions, and gives visitors a direct path to start a conversation.

## What the site covers

| Area | What a visitor can learn |
| --- | --- |
| Brand & identity | Positioning, messaging, visual identity, guidelines, and campaign direction |
| Web & business systems | Websites, web apps, dashboards, forms, workflows, and integrations |
| Visibility & growth | Search, paid campaigns, landing pages, and measurement |
| Live client work | ConEquiparts and Online Parts: public parts websites with product discovery, enquiry journeys, and admin panels |
| Shift.Store | A client project in testing, spanning an ad landing journey, Cashfree and cash on delivery checkout, order tracking, and an admin panel; the system map is illustrative |
| Motive concept | How one brief could become an identity, website, and campaign; **Motive is fictional, not a client project** |
| Starting points | Three ways a project can begin: launch, stronger presence, or clearer operations |
| Process & FAQs | Review checkpoints, scope, content, timing, handover, and working remotely |

The hero follows an **Idea → Identity → System** sequence. Each scene has its own image, message, and next step. Visitors can select a scene directly or pause the automatic sequence; choosing a scene pauses it for reading. The sequence does not advance when a device requests reduced motion. The page uses a cinematic layout on desktop and phones, a framed editorial layout on tablet, and a bottom navigation dock on phones.

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
components/
  agency-home.tsx          Page content, hero sequence, navigation, and interactions
  sections/lead-capture.tsx  Enquiry form and WhatsApp handoff
lib/
  whatsapp.ts             WhatsApp number and prefilled-message URL
public/
  brand/                  Logo lockups and marks
  client-work/            Hero imagery from the linked live client websites
  ui-visuals/             Hero, service, concept, and starting-point imagery
```

### Where to make changes

- **Business copy and service details:** `components/agency-home.tsx`
- **Hero scenes and their order:** `heroScenes` in `components/agency-home.tsx`, with images in `public/ui-visuals/`
- **Phone, tablet, and desktop styling:** `app/agency.css`
- **Enquiry form fields and choices:** `components/sections/lead-capture.tsx`
- **Logo files:** `public/brand/`; the inline mark used in the page is the `BrandMark` component
- **Contact number and default message:** `lib/whatsapp.ts`
- **Page title, description, and social metadata:** `app/layout.tsx` and `app/opengraph-image.tsx`

## Design and interaction notes

- Images are served through `next/image` with responsive sizes. The primary hero frame is prioritized; supporting imagery is deferred or sized for its section.
- The hero controls are buttons with pressed states. The automatic sequence can be paused and stops for visitors who request reduced motion.
- The page has a skip link, semantic sections, keyboard-accessible navigation, and accessible FAQ controls.
- The contact form asks for a name, phone number, and project note, with optional business name, email, and service choices. It validates the details, then opens WhatsApp with a prefilled message. The visitor reviews it and taps **Send** there. The site does not claim the message was delivered before that step.
- Enquiries are not stored in this repository. This handoff needs no Meta API credentials.
- ConEquiparts and Online Parts link to their live HTTPS sites. The local project images are hero assets served by those websites; the cards are not interface screenshots.
- The Shift.Store summary describes work supplied by the business owner and clearly says the project is in testing. Its system map is explicitly illustrative; no performance figures or interface screenshots are claimed.
- The Motive screens and photographs illustrate a design direction. They are labeled as a concept rather than presented as completed client work.

## Before publishing

1. Confirm the public WhatsApp number in `lib/whatsapp.ts` and all business copy. Submit a test enquiry and check the prefilled message before sending.
2. Add the final production domain to metadata configuration so social image URLs resolve to the live site. The build otherwise falls back to localhost for those URLs.
3. Confirm the Shift.Store name and details can be published. Add approved screenshots, a live link, and factual outcomes when supplied.
4. Run `npm run build` and `npm run lint`, then review the hero controls, mobile dock, enquiry form, and key sections on real devices.

## Contact

Have a project in mind? [Start a conversation with AuraKode on WhatsApp](https://wa.me/916378281761?text=Hi%20AuraKode%2C%20I%27d%20like%20to%20discuss%20a%20project.).

<sub>© AuraKode Business Solutions · Siliguri, West Bengal, India</sub>
