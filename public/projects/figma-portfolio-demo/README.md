# Dezign — UI/UX & Interaction Designer — Figma → HTML Portfolio

A hand-coded, accessible, and performance-minded static portfolio site built from a Figma concept. This repository is a demo project used in a portfolio to showcase UI/UX and interaction design work.

**Live Preview**
- Local: run a static server and open `http://localhost:5500`.

**Figma Source**
- Original Figma design (private/demo). If you supplied a Figma file, include a link here.

**What This Project Shows**
- Pixel-accurate layout and typography for a designer portfolio.
- Attention to accessibility (skip link, ARIA, focus-visible styles).
- Performance optimizations (non-blocking fonts and stylesheet preload, lazy-loaded images).
- Modern, lightweight frontend with no framework dependencies.

**Tech Stack**
- HTML5 — semantic markup and ARIA roles.
- CSS3 — custom properties, CSS Grid, Flexbox, responsive media queries.
- Vanilla JavaScript — mobile nav, smooth scroll, and minimal interaction code.
- Google Fonts — `Inter` and `Work Sans` (loaded non-blocking).
- SVG — logo and client marks.

**Sections Built**
- Header / Navigation (desktop + hamburger mobile menu)
- Hero with headline and scroll indicator
- Clients grid (Airbnb, Google, Microsoft, FedEx placeholders)
- Works grid — project cards with images, categories and CTAs
- About — short bio and image grid
- Contact / social links and footer

**Key Implementation Details**
- **Accessibility:** `skip to` link, meaningful `alt` text, `aria-*` attributes, keyboard focus styles.
- **Performance:** fonts and `styles.css` are preloaded then applied via `onload` to avoid render-blocking; images use `loading="lazy"` where appropriate.
- **Favicons:** full set included (`favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`, `favicon.svg`). A helper `generate_favicons.py` was used to create them.
- **Structured Data:** JSON-LD schema included in `index.html` for `WebSite`, `Person`, `WebPage`, `Organization`, and a `BreadcrumbList`. Note: the demo intentionally keeps `meta name="robots" content="noindex, nofollow"` so the site will not be indexed.

**Files of Note**
- `index.html` — main site markup
- `styles.css` — site styles and design tokens
- `script.js` — minimal interaction scripts (mobile nav toggle, etc.)
- `images/` — project and logo assets
- `favicon.svg`, `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`
- `generate_favicons.py` — (optional) Python script that uses Pillow to regenerate PNG/ICO assets

**Local Development**
No build step required — serve the folder with any static server. Example using Python:

```bash
# from repository root
python -m http.server 5500
# then open
# http://localhost:5500
```

To regenerate favicons (optional):

```bash
# ensure Pillow is installed
python -m pip install Pillow
python generate_favicons.py
```

**Testing & Validation**
- Schema / structured data: test your `index.html` with Google's Rich Results Test or the Schema Markup Validator.
- Performance: Lighthouse should show high scores; fonts and critical CSS are non-blocking.
- Accessibility: run an automated audit (Lighthouse) and manual keyboard checks.

**Folder Structure**
```
figma-portfolio-wp/
├── index.html
├── styles.css
├── script.js
├── README.md
├── generate_favicons.py
└── images/
    └── logos/
        └── (favicons + logo + client marks)
```

**About the Author**
I build pixel-perfect Figma → HTML/CSS conversions and lightweight interactive prototypes. This project is a demonstration of front-end craftsmanship: semantic markup, accessible interactions, and performance-minded delivery.

If you'd like this repo prepared for deployment (manifest, service worker, or social meta tuning), I can add that next.
