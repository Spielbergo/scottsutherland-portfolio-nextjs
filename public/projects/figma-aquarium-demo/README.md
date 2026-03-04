# Annerley Aquarium — Figma to HTML/CSS Pixel-Perfect Build

A fully hand-coded, pixel-perfect conversion of a Figma design into a production-ready static website — built with semantic HTML5, vanilla CSS3, and vanilla JavaScript. No frameworks, no libraries, no shortcuts.

---

## Live Preview

> _Deployed link coming soon_

---

## Figma Design Source

<a href="https://www.figma.com/design/7U270r9r2DgDH0Ohrol7ha/Annerley-Aquarium--Community-?node-id=2002-55" target="_blank" rel="noopener noreferrer">View the original Figma file →</a>

---

## About the Project

This project is a pixel-perfect recreation of a Figma design for **Annerley Aquarium**, a Brisbane-based family-owned aquarium specialist. Every section was built to match the Figma comps in layout, typography, colour, and spacing — without using any CSS frameworks or UI libraries.

The goal: demonstrate the ability to take a Figma file and ship clean, accessible, production-quality front-end code — exactly the skill set required for Figma-to-website jobs.

---

## Sections Built

| # | Section | Notes |
|---|---------|-------|
| 1 | **Navigation** | Sticky header, hamburger mobile drawer, smooth scroll |
| 2 | **Hero** | Full-bleed image, headline, dual CTA buttons |
| 3 | **About** | Two-column text + image layout |
| 4 | **Expert Aquarists** | Slanted quote card, brand gradient |
| 5 | **Fish Collection** | Search bar, feature image, 4-card grid |
| 6 | **Fish Care Tips** | Reusable section layout with styled blockquote |
| 7 | **Products** | Background splash, transparent cards, carousel nav arrows |
| 8 | **Exclusive Offer** | CSS Grid two-column, photo + deep blue panel |
| 9 | **Reviews** | Lavender blob accents, rainbow gradient heading, mixed card styles |
| 10 | **Contact** | Grid overlay bg, blobs, 4-field form with validation, pink pill buttons |
| 11 | **Footer** | SVG logo, 5-column nav, dynamic copyright year |

---

## Tech Stack

- **HTML5** — semantic, accessible markup (ARIA roles, skip link, `aria-label`, `role="list"` etc.)
- **CSS3** — custom properties, CSS Grid, Flexbox, `clamp()`, media queries, gradient text
- **Vanilla JavaScript** — mobile nav drawer, product carousel, form validation, active nav highlighting, dynamic footer year
- **Google Fonts** — DM Sans
- **SVG** — inline rainbow-gradient logo mark, arrow icons

---

## Key Implementation Details

- **Zero dependencies** — no Bootstrap, Tailwind, jQuery, or any third-party CSS/JS
- **CSS custom properties** for the full design token system (colours, spacing, radii, font sizes, font weights)
- **Rainbow gradient text** via `-webkit-background-clip: text` — used consistently across headings
- **CSS Grid** for the Exclusive Offer, Reviews, Contact, and Footer layouts
- **Responsive** — mobile-first breakpoints at `480px`, `768px`, and `1024px`
- **Accessible** — keyboard navigable, ARIA attributes, semantic HTML throughout
- **SEO ready** — `<title>`, meta description, Open Graph, Twitter Card, Schema.org JSON-LD, canonical URL

---

## Lighthouse & Performance

- **Optimised for high Lighthouse scores:** this build preloads fonts and the main stylesheet, uses responsive `picture` sources, native lazy-loading for images, and reduces layout thrash in JavaScript. These optimisations target LCP, FCP, and overall performance.
- **Can reach 100/100:** with a couple of optional steps (inline critical CSS and self-hosted font files) this project is ready to achieve perfect Lighthouse scores for Performance, Accessibility, Best Practices, and SEO. I am currently at 99 for Performance and 100 for the other categories, with the main opportunity for improvement being font loading optimisations.


![Lighthouse local report](assets/lighthouse-local.webp)

---

## Local Development

No build step required — it's pure static HTML/CSS/JS.

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/aquarium-website.git
cd aquarium-website

# Serve with Python (or any static server)
python -m http.server 5500
```

Then open [http://localhost:5500](http://localhost:5500) in your browser.

---

## Folder Structure

```
aquarium-website/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   └── (all section images)
└── assets/
    └── favicon.svg
```

---

## About Me

I'm a front-end developer specialising in pixel-perfect Figma-to-HTML/CSS builds as well as WordPress, React and Next.js. I take Figma designs and translate them into clean, semantic, accessible, production-ready code — fast. I have experience working with agencies, freelancers, and directly with clients to bring their Figma designs to life on the web. My focus is on writing maintainable code that matches the design comps exactly, while also ensuring good performance and accessibility.
---

_Built with care — every pixel intentional._
