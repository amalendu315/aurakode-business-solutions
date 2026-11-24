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

This repository contains our responsive business website. It introduces the work, shows our approach through an explicitly fictional concept project, answers common project questions, and gives visitors a direct path to start a conversation.

## What the site covers

| Area | What a visitor can learn |
| --- | --- |
| Brand & identity | Positioning, messaging, visual identity, guidelines, and campaign direction |
| Web & business systems | Websites, web apps, dashboards, forms, workflows, and integrations |
| Visibility & growth | Search, paid campaigns, landing pages, and measurement |
| Motive concept | How one brief could become an identity, website, and campaign; **Motive is fictional, not a client project** |
| Starting points | Three ways a project can begin: launch, stronger presence, or clearer operations |
| Process & FAQs | Review checkpoints, scope, content, timing, handover, and working remotely |

The hero follows an **Idea → Identity → System** sequence. Each scene has its own image, message, and next step. Visitors can select a scene directly; the sequence advances automatically unless their device requests reduced motion. The page uses a cinematic layout on desktop, a framed editorial layout on tablet, and an app-inspired layout with a bottom navigation dock on phones.

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
  api/enquiry/route.ts      Server-side WhatsApp notification endpoint
  opengraph-image.tsx      Generated social preview image
components/
  agency-home.tsx          Page content, hero sequence, navigation, and interactions
  sections/lead-capture.tsx  Enquiry form and WhatsApp handoff
lib/
  whatsapp.ts             WhatsApp number and prefilled-message URL
public/
  brand/                  Logo lockups and marks
  ui-visuals/             Hero, service, concept, and starting-point imagery
```

### Where to make changes

- **Business copy and service details:** `components/agency-home.tsx`
- **Hero scenes and their order:** `heroScenes` in `components/agency-home.tsx`, with images in `public/ui-visuals/`
- **Phone, tablet, and desktop styling:** `app/agency.css`
- **Enquiry form fields and choices:** `components/sections/lead-capture.tsx`
- **WhatsApp API settings:** `.env.example` and `app/api/enquiry/route.ts`
- **Logo files:** `public/brand/`; the inline mark used in the page is the `BrandMark` component
- **Contact number and default message:** `lib/whatsapp.ts`
- **Page title, description, and social metadata:** `app/layout.tsx` and `app/opengraph-image.tsx`

## Design and interaction notes

- Images are served through `next/image` with responsive sizes. The primary hero frame is prioritized; supporting imagery is deferred or sized for its section.
- The hero controls are buttons with pressed states. The automatic sequence stops for visitors who request reduced motion.
- The page has a skip link, semantic sections, keyboard-accessible navigation, and accessible FAQ controls.
- The contact form asks for a name, phone number, and project note, with optional business name, email, and service choices. It submits in place to the server, which sends an enquiry notification to AuraKode through Meta's WhatsApp Business Platform. The visitor sees a confirmation toast after Meta accepts the message; no WhatsApp redirect is involved.
- Enquiries are not stored in this repository. If the server is not configured or Meta rejects a message, the form shows an error and offers a direct chat link.
- The Motive screens and photographs illustrate a design direction. They are labeled as a concept rather than presented as completed client work.

## Before publishing

1. Configure the WhatsApp enquiry integration below and test an actual message to the intended recipient.
2. Confirm the public WhatsApp number in `lib/whatsapp.ts` and all business copy.
3. Add the final production domain to metadata configuration so social image URLs resolve to the live site. The build otherwise falls back to localhost for those URLs.
4. Replace or supplement concept work with approved, factual client projects and results when available.
5. Add production-grade abuse protection or persistent rate limiting to the public enquiry endpoint before using a paid messaging account at scale.
6. Run `npm run build` and `npm run lint`, then review the hero controls, mobile dock, enquiry form, and key sections on real devices.

## WhatsApp enquiry setup

The form uses a server-side [WhatsApp Business Platform](https://developers.facebook.com/documentation/business-messaging/whatsapp/overview/) account. A normal `wa.me` link cannot send a message without the visitor opening WhatsApp. Meta requires an [approved message template](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview) for this server-initiated notification.

1. Set up a WhatsApp Business Platform sender and obtain its **phone number ID** and server-side access token with messaging permission.
2. Create and get approval for a template named `website_enquiry_alert` (or set your own name in the environment). Use language `en_US` and six positional body variables in this order:

   ```text
   New AuraKode website enquiry
   Name: {{1}}
   Phone: {{2}}
   Business: {{3}}
   Email: {{4}}
   Services: {{5}}
   Project: {{6}}
   Please follow up with this contact.
   ```

3. Copy `.env.example` to `.env.local` and set the token, sender phone number ID, and `WHATSAPP_ENQUIRY_RECIPIENT` in international format without spaces. Set the recipient to a WhatsApp number **different from the API sender number** that can receive template messages. Keep the token out of Git and do not prefix it with `NEXT_PUBLIC_`.
4. Add the same variables to your server-hosting provider. The deployment must support Next.js Route Handlers; a static-file-only host cannot run the enquiry endpoint.
5. Submit a test enquiry and confirm it arrives on the recipient's WhatsApp. The toast means Meta accepted the send request; final delivery can still fail later, so configure Meta delivery webhooks if delivery tracking is needed.

## Contact

Have a project in mind? [Start a conversation with AuraKode on WhatsApp](https://wa.me/916378281761?text=Hi%20AuraKode%2C%20I%27d%20like%20to%20discuss%20a%20project.).

<sub>© AuraKode Business Solutions · Siliguri, West Bengal, India</sub>
