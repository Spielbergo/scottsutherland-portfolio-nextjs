# Scott Sutherland — Next.js Portfolio

Personal portfolio and project showcase for Scott Sutherland, a Brisbane-based web developer. This repository powers the live site at [scottsutherland.info](https://scottsutherland.info) and demonstrates production-ready Next.js patterns, component-driven architecture, and accessibility-first front-end development.

Live site: https://scottsutherland.info

Repository visibility: Public

---

## About this Project

This is a full rebuild of a vanilla HTML/CSS/JS portfolio into a Next.js 16 App Router application. The goal was pixel-perfect parity with the original — same look, same animations, same interactions — while gaining proper routing, reusable React components, scoped CSS Modules, and a server-side API route for the contact form.

The site is intentionally dependency-light: no Tailwind, no UI framework, no component library. Every style is hand-written using CSS Modules and custom properties.

---

## Key Sections

- **Navbar:** Sticky header with hamburger mobile drawer, scroll-aware highlight, and accessible focus states
- **Hero:** Full-bleed section with multi-layer CSS birds flight animation ported from vanilla CSS
- **About:** Two-column layout with an infinite-scroll logo marquee
- **Resume:** Animated timeline, skill bars, and testimonials carousel
- **Portfolio:** Client-side category filter with image/video modal slider and project detail pages
- **Contact:** Controlled form POSTing to a Next.js API route delivered via Nodemailer
- **Footer:** Semantic footer with dynamic copyright year and social links
- **Project Pages:** Dedicated detail routes under `/project-pages/[slug]` for each portfolio entry

---

## Tech Stack

- **Next.js 16** — App Router, static generation, API routes, `next/font`, `next/image`
- **React 19** — Server and Client Components, `useEffect`, `useContext`
- **JavaScript (ES2024)** — No TypeScript; plain JS modules throughout
- **CSS Modules** — Scoped per-component styles; `globals.css` for tokens and resets
- **Nodemailer 8** — SMTP email delivery from the contact API route
- **AOS** — Scroll-based animation library, dynamically imported to avoid SSR issues

The project is bootstrapped with `create-next-app` using `--app --js --no-tailwind --src-dir` flags and built section by section from the original vanilla source.

---

## Notable Implementation Details

- **Component-first structure** under `src/components/` — each section is an isolated React component with a co-located `.module.css` file.
- **CSS custom properties** for all colours, spacing, radii, and font sizes defined on `:root` in `globals.css`.
- **Birds animation** — multi-layer CSS keyframe flight animation migrated from vanilla CSS to CSS Modules; class name hashing is handled automatically by Next.js.
- **Logo marquee** — DOM cloning logic for seamless infinite scroll moved into a `useEffect` inside a dedicated `LogoSliderClient.js` component.
- **AOS** — browser-only; dynamically imported inside a `'use client'` component with `useEffect` to prevent SSR crashes.
- **Loader** — the `.loaded` class is applied to `<body>` via JS; the selector `.loaded .loader-wrapper` lives in `globals.css` (not a module) so the body-scoped rule resolves correctly.
- **Contact API** — `POST /api/contact` validates input and sends via Nodemailer; SMTP credentials are kept in `.env.local` and never committed.
- **Project detail pages** — dynamic routes under `/project-pages/[slug]` with data driven from `src/data/projectPages.js`; adding a new entry automatically creates a new page.
- **Static where possible** — the home page and all project detail pages are statically prerendered at build time.

---

## Project Structure

```
scottsutherland-portfolio-nextjs/
├── public/
│   ├── assets/
│   │   └── images/
│   │       └── folio/          # Project screenshot images
│   └── projects/               # Static demo project files
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.js    # Nodemailer contact API route
│   │   ├── project-pages/
│   │   │   └── [slug]/
│   │   │       └── page.js     # Dynamic project detail pages
│   │   ├── layout.js           # Root layout — fonts, GTM, AOS, global clients
│   │   └── page.js             # Home page
│   ├── components/
│   │   ├── home/               # Section components (Hero, About, Resume, Portfolio…)
│   │   ├── project-pages/      # Project detail page components
│   │   └── shared/             # Shared components (Navbar, Footer, Loader…)
│   ├── data/
│   │   ├── projects.js         # Portfolio grid data and featured flags
│   │   └── projectPages.js     # Project detail page content
│   └── styles/
│       └── globals.css         # CSS tokens, resets, and global styles
├── .env.local.example          # SMTP environment variable template
├── next.config.mjs
└── package.json
```

---

## Lighthouse & Performance

Built with performance in mind: statically prerendered pages, CSS Modules, minimal client-side JavaScript, lazy-loaded images, and `next/font` for optimised font loading. Target scores:

| Category       | Target |
|----------------|--------|
| Performance    | 95+    |
| Accessibility  | 100    |
| Best Practices | 100    |
| SEO            | 100    |

---

## Local Development

```bash
# Clone the repo
git clone https://github.com/Spielbergo/portfolio.git
cd scottsutherland-portfolio-nextjs

# Install dependencies
npm install

# Copy the environment variable template and add your SMTP credentials
cp .env.local.example .env.local

# Start the development server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

| Variable         | Description                        |
|------------------|------------------------------------|
| `SMTP_HOST`      | Your SMTP server hostname          |
| `SMTP_PORT`      | SMTP port (usually 465 or 587)     |
| `SMTP_USER`      | SMTP account username / email      |
| `SMTP_PASS`      | SMTP account password              |
| `CONTACT_TO`     | Address that receives form emails  |

---

## Deployment

The easiest deployment target is [Vercel](https://vercel.com) — zero config for Next.js App Router projects. Set your environment variables in the Vercel dashboard under **Settings → Environment Variables** before deploying.

```bash
npm run build   # Production build
npm run start   # Start production server locally
```

---

## Migration Notes

The original site was a single-page vanilla HTML/CSS/JS application with a PHP/PHPMailer contact backend. The migration approach:

1. Read all original HTML, CSS, and JS in full to map every dependency.
2. Map each `<section>` in `index.html` to a React component file.
3. Extract global styles (resets, tokens, loader, modal) into `globals.css`.
4. Move component-scoped styles into co-located `.module.css` files.
5. Replace vanilla DOM scripts with `useEffect` hooks inside `'use client'` components.
6. Replace PHPMailer with a Next.js API route backed by Nodemailer.
7. Add `/project-pages/` routing with the first entry: Annerley Aquarium.

---

## About / Contact

Built and maintained by **Scott Sutherland** — Brisbane-based web developer specialising in Next.js, React, and accessible front-end builds.

- Portfolio: [scottsutherland.info](https://scottsutherland.info)
- Web Studio: [webcheddar.ca](https://webcheddar.ca)
- GitHub: [@Spielbergo](https://github.com/Spielbergo)