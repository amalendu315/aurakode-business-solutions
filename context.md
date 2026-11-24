# AuraKode Project Context

Use this file as the shared handoff brief when working with another AI or starting a new AI session.

## Project Summary

AuraKode is a one-page marketing website for an Indian brand and digital studio based in Siliguri, West Bengal. The site presents AuraKode as a provider of:

- Brand strategy and visual identity
- Marketing websites and digital products
- Business systems and integrations
- SEO, Google Ads, social campaigns, and landing pages

The primary business goal is to turn visitors into qualified project enquiries. Enquiries are prepared in the website and sent through WhatsApp; there is no server-side form submission or CRM integration.

## Current Product State

- The deployed page is a single-route Next.js website at `/`.
- The active route is `app/page.tsx`, which renders `AgencyHome`.
- The active implementation is concentrated in `components/agency-home.tsx` and `app/agency.css`.
- The page includes hero, customer journey, services, a concept-project showcase, project entry points, problem patterns, process, FAQs, contact form, and footer.
- The contact flow validates a name, email, and project note, then opens WhatsApp with a prefilled enquiry.
- The WhatsApp destination is configured once in `lib/whatsapp.ts`.
- The public phone number currently used in the source is `916378281761`.

## Repository and Runtime

- Package: `aurakode-business-solutions`
- Framework: Next.js `16.4.6`
- UI: React `19.3.1`
- Language: strict TypeScript, with the `@/*` alias mapped to the repository root
- Styling: a mix of global CSS, Tailwind base/components/utilities, and component-specific CSS
- Motion: Framer Motion and GSAP
- Icons: Lucide React
- Fonts: Plus Jakarta Sans for display/wordmark, Inter for body text, and JetBrains Mono for annotations
- Package scripts:
  - `npm run dev` - start the development server
  - `npm run build` - create a production build using webpack
  - `npm run lint` - run ESLint
  - `npm run start` - run the production server

Install dependencies with `npm install` or `npm ci` if a lockfile is present.

## Important Files

### Active application

- `app/page.tsx` - route entry; renders `AgencyHome`
- `app/layout.tsx` - root layout, fonts, metadata, and global CSS
- `app/agency.css` - primary styles for the active Agency Home
- `app/globals.css` - shared document defaults and fallback utility styles
- `components/agency-home.tsx` - active page structure, content, and interaction logic
- `lib/whatsapp.ts` - WhatsApp phone number and URL builder

### Supporting implementation

- `app/opengraph-image.tsx` - generated Open Graph image
- `brand/identity.md` - official brand, palette, typography, and usage guidance
- `public/brand/` - official AuraKode marks and lockups
- `public/ui-visuals/` - art-directed photographs used by page sections
- `public/illustrations/` - illustration assets
- `public/audio/aurakode-hero-voiceover.mp3` - voiceover used by the cinematic hero implementation
- `public/hero-storyboard-frames/` - storyboard assets for the cinematic concept

### Present but not currently connected to the active route

The repository also contains `navbar.tsx`, `footer.tsx`, `whatsapp-cta.tsx`, `film-director.tsx`, `hero/`, and `sections/`. These are separate/earlier implementations or reusable sections, not all active in `app/page.tsx`. Before changing or replacing the active page, verify whether the task is meant for the active Agency Home or one of these alternate components.

Do not assume an unused component is safe to edit as a hidden part of the live page.

## Architecture and Conventions

- App Router is used.
- The active page is mostly a client component because it includes motion, menu state, FAQ details, and a composed enquiry form.
- Use Next.js `Image` for local images; prefer explicit `sizes` on non-inline images.
- Use the `@/` import alias for project-root imports.
- Keep copy, service data, FAQ data, and page-section data near their active component when they belong only to that page.
- Preserve accessible markup: landmarks, skip links, labels, visible focus states, `aria-expanded`, `aria-controls`, and descriptive image alt text.
- Navigation is section-based and uses anchor links.
- Mobile navigation must close after navigation and support Escape-key closing.
- Honour `prefers-reduced-motion` where motion exists.
- External WhatsApp links should use `target="_blank"` and `rel="noopener noreferrer"`.

## Brand Voice

The copy should be direct, specific, and practical. Name the deliverable or decision rather than relying on vague claims such as “digital transformation.”

Preferred phrases include:

- clear
- practical
- useful
- consistent
- visible
- shaped around how the business works
- first impression
- next step
- handoff
- system

Avoid inflated guarantees, unsupported claims, stock-tech language, and generic agency clichés.

## Visual System

The active Agency Home uses an editorial, architectural, high-contrast style.

Primary palette:

- Night/ink: `#080e1a`, `#0b1220`
- Paper: `#f3f3ee`
- Cyan signal: `#73e7f5`
- Deep blue: `#0b83ae`

There is also a dark utility palette in `app/globals.css`:

- Background: `#080d10`
- Panel: `#111a1e`
- Lime accent: `#b8ff60`
- Mint: `#7ff0d5`

Brand assets and rules in `brand/identity.md` are authoritative. Use the `aurakode-mark-light.svg` or cyan treatment on dark backgrounds and the deep-blue marks on light surfaces. Do not add glows, bevels, outlines, or stock-style effects to the official logo.

## SEO and Metadata

The active metadata in `app/layout.tsx` identifies AuraKode as a brand, digital, and growth studio in Siliguri. It includes:

- Relevant Indian/local SEO keywords
- Open Graph metadata
- Twitter card metadata
- Robots index/follow settings
- SVG and ICO favicon references

If a task changes the page title, description, route, or visual preview, update metadata and the Open Graph implementation consistently.

## Responsive and Accessibility Requirements

- Preserve the mobile, tablet, and desktop layouts.
- The active page has fixed navigation and internal section anchors.
- Check keyboard navigation, focus visibility, menu state, form labels, form errors, and reduced-motion behavior.
- Keep text contrast and button states readable.
- Do not replace semantic controls with decorative-only markup.
- Test the final layout at narrow mobile widths and wide desktop widths.

## Form and WhatsApp Behavior

`LeadCapture`/`ContactComposer` behavior should remain privacy-transparent:

- Validate name, email, and project note in the browser.
- Do not claim the enquiry was sent by the website.
- Prepare the message and open WhatsApp.
- Let the visitor review and press Send inside WhatsApp.

When modifying the phone number or message format, update `lib/whatsapp.ts` or the active composer carefully and test URL encoding for names, company names, multiline text, and special characters.

## Working With Assets

- Prefer existing assets before introducing new ones.
- Store static public assets under `public/`.
- Use descriptive alt text; decorative-only visuals should use `alt=""`.
- Keep large media optimized and do not load a second copy unnecessarily.
- Motion scenes and image sources are implemented in the active page or its supporting hero modules.

## Validation Checklist

Before finishing a code change:

1. Inspect the relevant active file and confirm it is in the live route.
2. Run `npm run lint`.
3. Run `npm run build`.
4. Start `npm run dev` and verify desktop and mobile behavior.
5. Test every changed anchor, menu state, motion state, image, and WhatsApp link.
6. Preserve existing copy and behavior unless the task explicitly requests a change.
7. Do not commit secrets or production credentials.

## Known Constraints

- No database, authentication, API route, or server-side lead storage is currently implemented.
- No external analytics or CRM provider is configured in source.
- The lead form intentionally relies on WhatsApp.
- The phone number is public-facing and business-specific.
- There may be alternate or legacy components that are not mounted by the active route.
- The repository has no dedicated test suite at present; use lint, build, and manual browser verification.

## Instructions for a New AI

Before making changes, do the following:

1. Read this file, `AGENTS.md`, `brand/identity.md`, and the relevant source files.
2. Identify the active route/component versus unused or alternate implementations.
3. Summarize the intended change and affected files.
4. Make focused changes that preserve established copy, layout, and brand rules.
5. Update directly related documentation or metadata.
6. Run the smallest useful validation, then broaden to lint/build if needed.
7. Report what changed, what was verified, and any remaining uncertainty.

## Prompt Template

Ask the next AI to work in this repository with:

```text
Read /context.md, /AGENTS.md, and /brand/identity.md.
Work only on the active live implementation unless I explicitly ask to edit unused components.
The project is the AuraKode business website: a Next.js 16/React 19 single-page marketing site.
Preserve the existing brand voice, visual system, responsive behavior, accessibility, and WhatsApp lead flow.
Before editing, identify the files you expect to change and explain the implementation approach.
After editing, run npm run lint and npm run build, then verify the relevant browser behavior.
Do not alter unrelated files or revert existing uncommitted work.
```
