# AuraKode Business Solutions

Official website for **AuraKode Business Solutions**, a brand, digital, and growth studio based in Siliguri, West Bengal.

The website presents AuraKode's integrated approach to brand identity, websites and business systems, SEO, paid media, and social campaigns. It is designed as a focused single-page experience that helps visitors understand AuraKode's services and start a project enquiry through WhatsApp.

## Overview

- Editorial, architectural, and high-contrast visual direction
- Responsive single-page studio website
- Brand, web, systems, and growth service presentation
- Concept showcase and project starting-point guidance
- Accessible mobile navigation and section-based FAQs
- Framer Motion and GSAP-enhanced interactions
- Browser-validated enquiry composer that opens a prefilled WhatsApp conversation
- Local SEO metadata and generated Open Graph image support

## Technology

| Area | Technology |
| --- | --- |
| Framework | Next.js 16, App Router |
| UI | React 19 |
| Language | Strict TypeScript |
| Styling | CSS, Tailwind CSS utilities, component styles |
| Animation | Framer Motion, GSAP |
| Icons | Lucide React |
| Fonts | Plus Jakarta Sans, Inter, JetBrains Mono |
| Package manager | npm |

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm

### Installation

```bash
git clone https://github.com/amalendu315/aurakode-business-solutions.git
cd aurakode-business-solutions
npm ci
```

### Development

```bash
npm run dev
```

Open `http://localhost:3000`.

### Production build

```bash
npm run build
npm run start
```

### Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Create a production build using webpack |
| `npm run start` | Run the production server |
| `npm run lint` | Run ESLint across the repository |

## Project Structure

```text
app/
  page.tsx                 Active route entry
  layout.tsx               Root layout, fonts, and metadata
  agency.css               Active Agency Home styles
  globals.css              Shared document styles
  opengraph-image.tsx      Generated social preview

brand/
  identity.md              Official brand and voice guide

components/
  agency-home.tsx          Active single-page implementation
  hero/                    Cinematic hero modules
  sections/                Reusable or alternate page sections

lib/
  whatsapp.ts              WhatsApp destination and URL builder

public/
  brand/                   Logo, mark, and lockup assets
  ui-visuals/              Section imagery
  illustrations/           Illustration assets
  audio/                   Hero voiceover
  hero-storyboard-frames/  Cinematic storyboard assets
```

The active website is rendered by `app/page.tsx` through `components/agency-home.tsx`. Other components in `components/` may represent supporting, reusable, or earlier implementations and are not all mounted in the current route.

## Active Page

The live page includes:

- Brand, web, and business systems hero
- Customer journey and connected-experience explanation
- Brand identity, digital systems, and growth services
- Concept-project showcase
- Project starting points
- Problem and solution patterns
- Project process
- Frequently asked questions
- WhatsApp project enquiry composer
- Responsive footer and navigation

## Enquiry Flow

The website does not send form data to a server or store it in a database.

1. The visitor enters their details and project requirements.
2. Browser-side validation checks the name, email address, and project note.
3. The website builds a prefilled WhatsApp message.
4. WhatsApp opens in a new tab for the visitor to review and send.

The destination number and URL builder are maintained in [`lib/whatsapp.ts`](lib/whatsapp.ts).

## Brand Guidelines

Use [`brand/identity.md`](brand/identity.md) for authoritative:

- Logo and lockup usage
- Brand palette
- Typography
- Brand voice
- Clear-space and presentation rules

Primary brand colours:

| Role | Hex |
| --- | --- |
| Night | `#0A1724` |
| Paper | `#F3F3EE` |
| Ice | `#F0FAFB` |
| Signal | `#73E7F5` |
| Deep blue | `#0B83AE` |

Brand assets are stored in [`public/brand/`](public/brand/). Keep the mark free of glows, bevels, and outlines.

## Development Guidelines

- Read [`context.md`](context.md) before using AI tools or starting an unfamiliar task.
- Read [`AGENTS.md`](AGENTS.md) for repository-specific agent instructions.
- Use the `@/` alias for imports rooted at the repository.
- Preserve the existing copy, visual system, and customer journey unless a change explicitly requires otherwise.
- Use Next.js `Image` for local imagery and provide meaningful `alt` text.
- Preserve landmarks, skip links, focus states, labels, and accessible menu behavior.
- Honour `prefers-reduced-motion` for animated interfaces.
- Test all responsive layouts and changed WhatsApp URLs.

## Verification

Before submitting or deploying a change:

```bash
npm run lint
npm run build
```

Then start the site and manually verify:

- Desktop and mobile layouts
- Navigation and mobile menu behavior
- Internal anchor links
- FAQ expansion
- Form validation
- WhatsApp message encoding
- Reduced-motion behavior
- Images and metadata

There is no dedicated test suite in the repository. Linting, production builds, and manual browser verification are the current quality gates.

## Deployment

The project can be deployed to any platform that supports Next.js 16, including Vercel.

Before deploying:

1. Run `npm run lint`.
2. Run `npm run build`.
3. Verify metadata and the Open Graph preview.
4. Test the WhatsApp flow on the production domain.
5. Confirm that public image and audio assets are available.

No environment variables or external services are required for the current implementation.

## Contributing

Contributions should be narrow and well verified.

1. Create a feature branch.
2. Follow the existing TypeScript and CSS conventions.
3. Keep changes scoped to the relevant active implementation.
4. Update directly related documentation or metadata.
5. Run lint and build checks.
6. Submit a pull request with a clear summary and testing notes.

## Repository Context

- [`context.md`](context.md) - shared project and AI handoff context
- [`brand/identity.md`](brand/identity.md) - brand system
- [`AGENTS.md`](AGENTS.md) - repository-specific instructions
- [GitHub repository](https://github.com/amalendu315/aurakode-business-solutions)