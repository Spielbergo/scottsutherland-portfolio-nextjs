/**
 * All project detail page data.
 * Add a new entry here to automatically generate a new /project-pages/[slug] route.
 *
 * Required fields: slug, meta, hero, overview, screenshots, sectionsTable, techStack, highlights
 * Optional fields: lighthouse, lighthouseImage, codeBlock, notesSection
 */
export const projectPages = [

  /* ========== ANNERLEY AQUARIUM ========== */
  {
    slug: 'aquarium-demo',

    meta: {
      title: 'Annerley Aquarium — Project Detail',
      description: 'A pixel-perfect Figma-to-HTML/CSS build for Annerley Aquarium. Semantic HTML5, vanilla CSS3, vanilla JavaScript — zero dependencies.',
    },

    hero: {
      bg:       '/assets/images/folio/aquarium-demo/aquarium-demo-hero.webp',
      title:    'Annerley Aquarium',
      subtitle: 'Figma to HTML/CSS Pixel-Perfect Build',
      badges:   ['HTML5', 'CSS3', 'Vanilla JS', 'Zero Dependencies', 'Figma-to-Code'],
      actions:  [
        {
          label: 'Figma Design',
          icon:  'fa fa-drafting-compass',
          href:  'https://www.figma.com/design/7U270r9r2DgDH0Ohrol7ha/Annerley-Aquarium--Community-?node-id=2002-55',
        },{
          label: 'Live Demo',
          icon:  'fa fa-external-link-alt',
          href:  '/projects/figma-aquarium-demo/index.html',
        },
      ],
    },

    overview: [
      'This project is a pixel-perfect recreation of a Figma design for Annerley Aquarium, a Brisbane-based family-owned aquarium specialist. Every section was built to match the Figma comps in layout, typography, colour, and spacing — without using any CSS frameworks or UI libraries.',
      'The goal: demonstrate the ability to take a Figma file and ship clean, accessible, production-quality front-end code — exactly the skill set required for Figma-to-website jobs.',
    ],

    screenshots: [
      {
        src:     '/assets/images/folio/aquarium-demo/aquarium-hero.webp',
        alt:     'Annerley Aquarium hero section',
        caption: 'Hero — Full-bleed image with headline and dual CTA buttons',
        eager:   true,
      },
      {
        src:     '/assets/images/folio/aquarium-demo/aquarium-nav.webp',
        alt:     'Navigation section',
        caption: 'Navigation — Sticky header with hamburger mobile drawer',
      },
      {
        src:     '/assets/images/folio/aquarium-demo/aquarium-fish-collection.webp',
        alt:     'Fish collection section',
        caption: 'Fish Collection — Search bar, feature image, and 4-card grid',
      },
      {
        src:     '/assets/images/folio/aquarium-demo/aquarium-products.webp',
        alt:     'Products section',
        caption: 'Products — Transparent cards with carousel navigation arrows',
      },
      {
        src:     '/assets/images/folio/aquarium-demo/aquarium-reviews.webp',
        alt:     'Reviews section',
        caption: 'Reviews — Lavender blob accents with rainbow gradient heading',
      },
      {
        src:     '/assets/images/folio/aquarium-demo/aquarium-contact-footer.webp',
        alt:     'Contact and footer sections',
        caption: 'Contact — 4-field form with validation and pink pill buttons',
      },
    ],

    sectionsTable: {
      heading:  'Sections Built',
      labelCol: 'Section',
      rows: [
        {
          number: 1,
          name:   'Navigation',
          notes:  'Sticky header, hamburger mobile drawer, smooth scroll',
        },
        {
          number: 2,
          name:   'Hero',
          notes:  'Full-bleed image, headline, dual CTA buttons',
        },
        {
          number: 3,
          name:   'About',
          notes:  'Two-column text + image layout',
        },
        {
          number: 4,
          name:   'Expert Aquarists',
          notes:  'Slanted quote card, brand gradient',
        },
        {
          number: 5,
          name:   'Fish Collection',
          notes:  'Search bar, feature image, 4-card grid',
        },
        {
          number: 6,
          name:   'Fish Care Tips',
          notes:  'Reusable section layout with styled blockquote',
        },
        {
          number: 7,
          name:   'Products',
          notes:  'Background splash, transparent cards, carousel nav arrows',
        },
        {
          number: 8,
          name:   'Exclusive Offer',
          notes:  'CSS Grid two-column, photo + deep blue panel',
        },
        {
          number: 9,
          name:   'Reviews',
          notes:  'Lavender blob accents, rainbow gradient heading, mixed card styles',
        },
        {
          number: 10,
          name:   'Contact',
          notes:  'Grid overlay bg, blobs, 4-field form with validation, pink pill buttons',
        },
        {
          number: 11,
          name:   'Footer',
          notes:  'SVG logo, 5-column nav, dynamic copyright year',
        },
      ],
    },

    techStack: [
      {
        icon:   'fab fa-html5',
        label:  'HTML5',
        detail: 'Semantic, accessible markup (ARIA roles, skip link)',
      },
      {
        icon:   'fab fa-css3',
        label:  'CSS3',
        detail: 'Custom properties, Grid, Flexbox, clamp(), media queries',
      },
      {
        icon:   'fab fa-js',
        label:  'JavaScript',
        detail: 'Mobile nav, product carousel, form validation, dynamic footer year',
      },
    ],

    highlights: [
      {
        icon:   'fa fa-ban',
        label:  'Zero Dependencies',
        detail: 'No Bootstrap, Tailwind, jQuery, or third-party CSS/JS',
      },
      {
        icon:   'fa fa-palette',
        label:  'Design Token System',
        detail: 'Full CSS custom properties for colours, spacing, radii, font sizes',
      },
      {
        icon:   'fa fa-text-height',
        label:  'Rainbow Gradient Text',
        detail: 'Via -webkit-background-clip: text, used consistently across headings',
      },
      {
        icon:   'fa fa-th',
        label:  'CSS Grid & Flexbox',
        detail: 'Used for Exclusive Offer, Reviews, Contact, and Footer layouts',
      },
      {
        icon:   'fa fa-mobile-alt',
        label:  'Responsive',
        detail: 'Mobile-first breakpoints at 480px, 768px, and 1024px',
      },
      {
        icon:   'fa fa-universal-access',
        label:  'Accessible',
        detail: 'Keyboard navigable, ARIA attributes, semantic HTML throughout',
      },
      {
        icon:   'fa fa-search',
        label:  'SEO Ready',
        detail: 'Title, meta description, Open Graph, Twitter Card, Schema.org JSON-LD',
      },
      {
        icon:   'fa fa-tachometer-alt',
        label:  'Lighthouse Scores',
        detail: '99 Performance, 100 Accessibility, 100 Best Practices, 100 SEO',
      },
    ],

    lighthouse: [
      { label: 'Performance',    score: 99  },
      { label: 'Accessibility',  score: 100 },
      { label: 'Best Practices', score: 100 },
      { label: 'SEO',            score: 100 },
    ],

    lighthouseImage: {
      src:     '/assets/images/folio/aquarium-demo/aquarium-lighthouse.webp',
      alt:     'Lighthouse scores screenshot',
      caption: 'Lighthouse — 99 Performance, 100 Accessibility, 100 Best Practices, 100 SEO',
    },

    codeBlock: {
      heading: 'Local Development',
      intro:   'No build step required — pure static HTML/CSS/JS.',
      code: `# Clone the repo
git clone https://github.com/Spielbergo/figma-aquarium-demo.git
cd figma-aquarium-demo

# Serve with Python (or any static server)
python -m http.server 5500`,
      outro: 'Then open http://localhost:5500 in your browser.',
    },
  },


  /* ========== NEXT.JS PORTFOLIO REBUILD ========== */
  {
    slug: 'nextjs-portfolio',

    meta: {
      title:       'Next.js Portfolio Rebuild — Project Detail',
      description: 'A full rebuild of a vanilla HTML/CSS/JS portfolio site into a Next.js 16 App Router application — React components, CSS Modules, no Tailwind, Nodemailer contact form.',
    },

    hero: {
      bg:       'https://placehold.co/1920x800/0a0a0a/ffffff?text=Next.js+Portfolio+Rebuild',
      title:    'Next.js Portfolio Rebuild',
      subtitle: 'A full rebuild of this very site — from vanilla HTML/CSS/JS to a Next.js 16 App Router application with React components, CSS Modules, and a Nodemailer contact API.',
      badges:   ['Next.js 16', 'React 19', 'CSS Modules', 'Nodemailer', 'App Router', 'No Tailwind'],
      actions:  [
        {
          label: 'View on GitHub',
          icon:  'fab fa-github',
          href:  'https://github.com/Spielbergo/portfolio',
        },
      ],
    },

    overview: [
      'The original portfolio site was a single-page vanilla HTML/CSS/JS application with a PHP/PHPMailer contact backend. While it worked well, maintaining and extending it meant editing monolithic HTML and CSS files. This rebuild migrates every section into isolated React components — preserving the exact look and feel — while gaining proper routing, reusable data structures, and a server-side API for the contact form.',
      'The project was bootstrapped with create-next-app@latest using the --app --js --no-tailwind --src-dir flags and then hand-built section by section, component by component. Every visual detail from the original — the birds animation, the logo marquee, the timeline, the portfolio modal slider — was recreated using the same underlying CSS concepts, just scoped inside CSS Modules.',
    ],

    screenshots: [
      {
        src:     'https://placehold.co/900x500/0a0a0a/ffffff?text=Home+Page',
        alt:     'Home page screenshot',
        caption: 'Home — full-page layout with all original sections preserved',
        eager:   true,
      },
      {
        src:     'https://placehold.co/900x500/1a1a2e/ffffff?text=Hero+%26+Birds+Animation',
        alt:     'Hero section screenshot',
        caption: 'Hero — birds CSS animation ported intact from vanilla CSS',
      },
      {
        src:     'https://placehold.co/900x500/16213e/ffffff?text=Portfolio+Section+%26+Modal',
        alt:     'Portfolio section screenshot',
        caption: 'Portfolio — client-side filter and image/video modal slider',
      },
      {
        src:     'https://placehold.co/900x500/0f3460/ffffff?text=Resume+Timeline',
        alt:     'Resume section screenshot',
        caption: 'Resume — animated timeline, skill bars, and testimonials',
      },
      {
        src:     'https://placehold.co/900x500/1a2a1a/ffffff?text=Contact+Form',
        alt:     'Contact form screenshot',
        caption: 'Contact — controlled form posting to Next.js Nodemailer API route',
      },
      {
        src:     'https://placehold.co/900x500/2a1a0a/ffffff?text=Aquarium+Project+Page',
        alt:     'Aquarium project detail page screenshot',
        caption: 'Project Pages — each project gets a dedicated detail route',
      },
    ],

    sectionsTable: {
      heading:  'Components & Routes Built',
      labelCol: 'Component / Route',
      rows: [
        {
          number: 1,
          name:   'Layout & Root',
          notes:  'App Router layout.js — fonts, GTM, Font Awesome, AOS, global client components',
        },
        {
          number: 2,
          name:   'Loader',
          notes:  'Animated page loader — adds body.loaded via useEffect on window load',
        },
        {
          number: 3,
          name:   'Navbar',
          notes:  'Sticky nav, hamburger mobile drawer, scroll highlight, context-aware links',
        },
        {
          number: 4,
          name:   'Hero',
          notes:  'Full-bleed hero with multi-layer CSS birds flight animation',
        },
        {
          number: 5,
          name:   'About',
          notes:  'Two-column layout with infinite-scroll logo marquee (dynamic DOM cloning)',
        },
        {
          number: 6,
          name:   'Resume',
          notes:  'Animated timeline, skill bars, testimonials carousel',
        },
        {
          number: 7,
          name:   'Portfolio',
          notes:  'Client-side category filter, image/video modal slider',
        },
        {
          number: 8,
          name:   'Contact',
          notes:  'Controlled form POSTing to Next.js API route; delivered via Nodemailer',
        },
        {
          number: 9,
          name:   'Footer',
          notes:  'Dynamic copyright year, social links',
        },
        {
          number: 10,
          name:   'Project Pages',
          notes:  'Dynamic detail pages under /project-pages/ — each project gets its own route',
        },
        {
          number: 11,
          name:   'API Route',
          notes:  'POST /api/contact — validates, sends SMTP email via Nodemailer 8',
        },
      ],
    },

    techStack: [
      {
        icon:   'fab fa-react',
        label:  'React 19',
        detail: 'Server and Client Components; App Router file-system routing',
      },
      {
        icon:   'fas fa-layer-group',
        label:  'Next.js 16',
        detail: 'App Router, static generation, API Routes, next/font, next/image',
      },
      {
        icon:   'fab fa-js',
        label:  'JavaScript',
        detail: 'No TypeScript — plain ES2024 modules throughout',
      },
      {
        icon:   'fas fa-file-code',
        label:  'CSS Modules',
        detail: 'Scoped styles per component; globals.css for tokens and resets',
      },
      {
        icon:   'fas fa-envelope',
        label:  'Nodemailer 8',
        detail: 'SMTP email delivery from the API route — zero third-party SaaS required',
      },
    ],

    highlights: [
      {
        icon:   'fa fa-ban',
        label:  'Zero Tailwind',
        detail: 'CSS Modules and custom properties only — same look, zero utility bloat',
      },
      {
        icon:   'fa fa-puzzle-piece',
        label:  'Component Architecture',
        detail: 'Each section is an isolated React component with its own .module.css',
      },
      {
        icon:   'fa fa-tint',
        label:  'Design Token System',
        detail: 'All colours, fonts, spacing, and radii live in CSS custom properties on :root',
      },
      {
        icon:   'fa fa-feather-alt',
        label:  'Birds Animation Ported',
        detail: 'Multi-layer keyframe bird flight animation migrated from vanilla CSS to CSS Modules',
      },
      {
        icon:   'fa fa-route',
        label:  'App Router',
        detail: 'File-based routing — project detail pages auto-route under /project-pages/',
      },
      {
        icon:   'fa fa-lock',
        label:  'ENV-Based Config',
        detail: 'SMTP credentials kept in .env.local — never committed, .env.local.example provided',
      },
      {
        icon:   'fa fa-mobile-alt',
        label:  'Fully Responsive',
        detail: 'All breakpoints preserved from the original vanilla build',
      },
      {
        icon:   'fa fa-shipping-fast',
        label:  'Static Where Possible',
        detail: 'Home page and all project detail pages are statically prerendered at build time',
      },
    ],

    notesSection: {
      heading:    'Migration Approach',
      paragraphs: [
        'The goal was pixel-perfect parity — the Next.js version should look identical to the original in a browser side-by-side. The migration was done section by section:',
      ],
      orderedList: [
        'Read all original HTML, CSS, and JS in full to understand every dependency.',
        'Map each <section> in index.html to a React component file.',
        'Extract global styles (resets, tokens, loader, modal) into globals.css.',
        'Move component-scoped styles into co-located .module.css files.',
        "Replace vanilla DOM scripts (script.js) with useEffect hooks inside 'use client' components.",
        'Replace PHPMailer with a Next.js API Route backed by Nodemailer.',
        'Add /project-pages/ routing — first entry: Annerley Aquarium detail page.',
      ],
      subHeading: 'Tricky Parts',
      bulletList: [
        'Birds animation: CSS keyframe names must be module-scoped — Next.js CSS Modules auto-hash class names, so the animation-name reference inside the same module resolves correctly.',
        'Logo marquee: The DOM cloning logic (duplicating list items for seamless looping) was moved into a useEffect inside a dedicated LogoSliderClient.js component.',
        'AOS: AOS is browser-only; it must be dynamically imported inside a "use client" component with useEffect to avoid SSR crashes.',
        'Loader: The .loaded class is applied to <body> via JS, and the CSS selector .loaded .loader-wrapper lives in globals.css (not a module) so the body-scoped selector works correctly.',
      ],
    },

    codeBlock: {
      heading: 'Local Development',
      intro:   null,
      code: `git clone https://github.com/Spielbergo/portfolio
cd scottsutherland-portfolio-nextjs
npm install

# Copy env template and fill in your SMTP credentials
cp .env.local.example .env.local

npm run dev   # → http://localhost:3000`,
      outro: null,
    },
  },


  /* ========== DINE RESTAURANT ========== */
  {
    slug: 'dine-restaurant',

    meta: {
      title:       'Dine Restaurant — Project Detail',
      description: 'A pixel-perfect Figma-to-HTML/CSS build for Dine Restaurant. Semantic HTML5, vanilla CSS3, vanilla JavaScript — zero dependencies, full SEO and accessibility.',
    },

    hero: {
      bg:       'https://placehold.co/1920x800/1a0a00/f5be32?text=Dine+Restaurant',
      title:    'Dine Restaurant',
      subtitle: 'Figma to HTML/CSS Pixel-Perfect Build — Fine Japanese Cuisine & Sushi Bar',
      badges:   ['HTML5', 'CSS3', 'Vanilla JS', 'Zero Dependencies', 'Figma-to-Code', 'Google Fonts'],
      actions:  [
        {
          label: 'Figma Design',
          icon:  'fa fa-drafting-compass',
          href:  'https://www.figma.com/design/ei3zWP52RjnbSy2as18pP9/Restaurant-Website--Community-?node-id=0-1&t=6YqTGbO1bZOIZq8d-1',
        },
      ],
    },

    overview: [
      'This project is a pixel-perfect recreation of a Figma design for Dine Restaurant, a fine Japanese cuisine and sushi bar experience. Every section was built to match the Figma comps in layout, typography, colour, and spacing — without using any CSS frameworks or UI libraries.',
      'The goal: demonstrate the ability to take a Figma file and ship clean, accessible, production-quality front-end code — exactly the skill set required for Figma-to-website jobs. The design features a rich dark palette with a gold accent colour system, layered CSS Grid layouts, and a fully interactive menu filter.',
    ],

    screenshots: [
      {
        src:     'https://placehold.co/900x500/1a0a00/f5be32?text=Hero+Section',
        alt:     'Dine Restaurant hero section',
        caption: 'Hero — Full-bleed dark background with headline and single CTA button',
        eager:   true,
      },
      {
        src:     'https://placehold.co/900x500/1a0a00/f5be32?text=Today%27s+Special',
        alt:     "Today's Special section",
        caption: "Today's Special — 3-card grid with star ratings and order buttons",
      },
      {
        src:     'https://placehold.co/900x500/1a0a00/f5be32?text=Our+Specialties',
        alt:     'Our Specialties section',
        caption: 'Our Specialties — 7 filter buttons, alternating image + content layout',
      },
      {
        src:     'https://placehold.co/900x500/1a0a00/f5be32?text=Dining+Events',
        alt:     'Dining Events section',
        caption: 'Dining Events — Private/Corporate toggle with 3 tiered packages',
      },
      {
        src:     'https://placehold.co/900x500/1a0a00/f5be32?text=Our+Story',
        alt:     'Our Story section',
        caption: 'Our Story — Two-column layout with stacked chef images and brand text',
      },
      {
        src:     'https://placehold.co/900x500/1a0a00/f5be32?text=Footer+%26+Contact',
        alt:     'Footer and contact section',
        caption: 'Footer — Full-bleed CTA, address, SVG icons, reservation button, social links',
      },
    ],

    sectionsTable: {
      heading:  'Sections Built',
      labelCol: 'Section',
      rows: [
        {
          number: 1,
          name:   'Navigation',
          notes:  'Sticky header with scroll-triggered background, hamburger mobile drawer, smooth scroll',
        },
        {
          number: 2,
          name:   'Hero',
          notes:  'Full-bleed dark background, headline, single CTA button',
        },
        {
          number: 3,
          name:   "Today's Special",
          notes:  '3-card grid (Tuna, Salmon, Fish Sushi) with star ratings and order buttons',
        },
        {
          number: 4,
          name:   'Restaurant Interior',
          notes:  'Full-width atmospheric image section',
        },
        {
          number: 5,
          name:   'Our Specialties',
          notes:  'Filter buttons (7 categories), alternating image + content layout for menu items',
        },
        {
          number: 6,
          name:   'Dining Events',
          notes:  'Private/Corporate toggle, 3 tiered packages (Fine, Gold, Royalty Dining)',
        },
        {
          number: 7,
          name:   'Our Story',
          notes:  'Two-column layout — three stacked chef images + brand story text',
        },
        {
          number: 8,
          name:   'Footer / Contact',
          notes:  'Full-bleed CTA, address + phone with SVG icons, reservation button, social links',
        },
      ],
    },

    techStack: [
      {
        icon:   'fab fa-html5',
        label:  'HTML5',
        detail: 'Semantic, accessible markup (ARIA roles, skip link, aria-label, role="navigation")',
      },
      {
        icon:   'fab fa-css3',
        label:  'CSS3',
        detail: 'Custom properties, CSS Grid, Flexbox, clamp(), media queries, gold accent colour system',
      },
      {
        icon:   'fab fa-js',
        label:  'Vanilla JavaScript',
        detail: 'Mobile nav drawer, scroll-triggered header, menu filter buttons, smooth scroll',
      },
      {
        icon:   'fab fa-google',
        label:  'Google Fonts',
        detail: 'Cinzel, Cormorant SC, DM Sans, DM Serif Display, Great Vibes',
      },
      {
        icon:   'fas fa-code',
        label:  'SVG',
        detail: 'Inline location pin and phone icons in the footer',
      },
    ],

    highlights: [
      {
        icon:   'fa fa-ban',
        label:  'Zero Dependencies',
        detail: 'No Bootstrap, Tailwind, jQuery, or third-party CSS/JS',
      },
      {
        icon:   'fa fa-palette',
        label:  'Gold Accent Palette',
        detail: '#F5BE32 and #F3D382 used consistently across headings, prices, and interactive elements',
      },
      {
        icon:   'fa fa-paint-brush',
        label:  'Design Token System',
        detail: 'Full CSS custom properties for --gold, --light-gold, --dark-bg, --card-bg, and font colours',
      },
      {
        icon:   'fa fa-th',
        label:  'CSS Grid & Flexbox',
        detail: 'Used for the specialties, events, story, and footer layouts',
      },
      {
        icon:   'fa fa-mobile-alt',
        label:  'Responsive',
        detail: 'Mobile-first with hamburger nav drawer injected via JavaScript',
      },
      {
        icon:   'fa fa-universal-access',
        label:  'Accessible',
        detail: 'Keyboard navigable, ARIA attributes, semantic HTML, skip-to-content link',
      },
      {
        icon:   'fa fa-search',
        label:  'SEO Ready',
        detail: 'Open Graph, Twitter Card, three Schema.org JSON-LD blocks (Restaurant, LocalBusiness, WebSite)',
      },
      {
        icon:   'fa fa-star',
        label:  'Full Favicon Suite',
        detail: 'favicon.ico, 16×16 & 32×32 PNG, Apple touch icon, Android Chrome 192×192 & 512×512, site.webmanifest',
      },
    ],

    codeBlock: {
      heading: 'Local Development',
      intro:   'No build step required — pure static HTML/CSS/JS.',
      code: `# Clone the repo
git clone https://github.com/Spielbergo/figma-restaurant-wp.git
cd figma-restaurant-wp

# Serve with Python (or any static server)
python -m http.server 5500`,
      outro: 'Then open http://localhost:5500 in your browser.',
    },
  },


  /* ========== DEZIGN — DESIGNER PORTFOLIO DEMO ========== */
  {
    slug: 'dezign-portfolio',

    meta: {
      title:       'Dezign — Designer Portfolio Demo — Project Detail',
      description: 'A pixel-perfect Figma-to-HTML/CSS designer portfolio demo. Semantic HTML5, vanilla CSS3, vanilla JavaScript — zero dependencies, full accessibility and performance optimisations.',
    },

    hero: {
      bg:       'https://placehold.co/1920x800/0a0a0a/9b59f7?text=Dezign+Portfolio',
      title:    'Dezign — Designer Portfolio',
      subtitle: 'A hand-coded, accessible, and performance-minded static portfolio site built from a Figma concept — showcasing UI/UX and interaction design work.',
      badges:   ['HTML5', 'CSS3', 'Vanilla JS', 'Zero Dependencies', 'Figma-to-Code', 'Google Fonts'],
      actions:  [],
    },

    overview: [
      'This project is a pixel-accurate layout and typography recreation of a UI/UX designer portfolio Figma concept. Every section was hand-coded to match the design in layout, colour, and spacing — without using any CSS frameworks or UI libraries.',
      'The build demonstrates pixel-perfect Figma-to-HTML/CSS delivery with a strong focus on accessibility (skip link, ARIA attributes, focus-visible styles) and performance (non-blocking font and stylesheet loading, lazy-loaded images). JSON-LD structured data and a full favicon suite are included.',
    ],

    screenshots: [
      {
        src:     'https://placehold.co/900x500/0a0a0a/9b59f7?text=Hero+Section',
        alt:     'Dezign hero section',
        caption: 'Hero — Dark background with headline and scroll indicator',
        eager:   true,
      },
      {
        src:     'https://placehold.co/900x500/0a0a0a/9b59f7?text=Clients+Grid',
        alt:     'Clients grid section',
        caption: 'Clients — Airbnb, Google, Microsoft, FedEx placeholder logos in a grid',
      },
      {
        src:     'https://placehold.co/900x500/0a0a0a/9b59f7?text=Works+Grid',
        alt:     'Works grid section',
        caption: 'Works — Project cards with images, categories, and CTAs',
      },
      {
        src:     'https://placehold.co/900x500/0a0a0a/9b59f7?text=About+Section',
        alt:     'About section',
        caption: 'About — Short bio and image grid layout',
      },
      {
        src:     'https://placehold.co/900x500/0a0a0a/9b59f7?text=Contact+%26+Footer',
        alt:     'Contact and footer section',
        caption: 'Contact — Social links, footer, and Get in Touch headline',
      },
    ],

    sectionsTable: {
      heading:  'Sections Built',
      labelCol: 'Section',
      rows: [
        {
          number: 1,
          name:   'Header / Navigation',
          notes:  'Desktop nav + hamburger mobile menu',
        },
        {
          number: 2,
          name:   'Hero',
          notes:  'Full-bleed dark background with headline and scroll indicator',
        },
        {
          number: 3,
          name:   'Clients Grid',
          notes:  'Airbnb, Google, Microsoft, FedEx placeholder SVG logos',
        },
        {
          number: 4,
          name:   'Works Grid',
          notes:  'Project cards with images, category labels, and View Work CTAs',
        },
        {
          number: 5,
          name:   'About',
          notes:  'Short bio and image grid',
        },
        {
          number: 6,
          name:   'Contact / Footer',
          notes:  'Get in Touch headline, social links, and footer',
        },
      ],
    },

    techStack: [
      {
        icon:   'fab fa-html5',
        label:  'HTML5',
        detail: 'Semantic markup, ARIA roles, and meaningful alt text throughout',
      },
      {
        icon:   'fab fa-css3',
        label:  'CSS3',
        detail: 'Custom properties, CSS Grid, Flexbox, responsive media queries',
      },
      {
        icon:   'fab fa-js',
        label:  'Vanilla JavaScript',
        detail: 'Mobile nav toggle, smooth scroll, and minimal interaction scripts',
      },
      {
        icon:   'fab fa-google',
        label:  'Google Fonts',
        detail: 'Inter and Work Sans — loaded non-blocking to avoid render-blocking',
      },
      {
        icon:   'fas fa-code',
        label:  'SVG',
        detail: 'Logo and client marks as inline/referenced SVG',
      },
    ],

    highlights: [
      {
        icon:   'fa fa-ban',
        label:  'Zero Dependencies',
        detail: 'No Bootstrap, Tailwind, jQuery, or any third-party CSS/JS',
      },
      {
        icon:   'fa fa-universal-access',
        label:  'Accessible',
        detail: 'Skip-to-content link, ARIA attributes, keyboard focus-visible styles throughout',
      },
      {
        icon:   'fa fa-tachometer-alt',
        label:  'Performance Optimised',
        detail: 'Fonts and styles.css preloaded then applied via onload to avoid render-blocking',
      },
      {
        icon:   'fa fa-images',
        label:  'Lazy-Loaded Images',
        detail: 'All below-fold images use loading="lazy" for faster initial page load',
      },
      {
        icon:   'fa fa-star',
        label:  'Full Favicon Suite',
        detail: 'favicon.ico, 16×16 & 32×32 PNG, Apple touch icon (180×180), and favicon.svg',
      },
      {
        icon:   'fa fa-search',
        label:  'Structured Data',
        detail: 'JSON-LD schema for WebSite, Person, WebPage, Organization, and BreadcrumbList',
      },
      {
        icon:   'fa fa-th',
        label:  'CSS Grid & Flexbox',
        detail: 'Used for the Clients, Works, and About section layouts',
      },
      {
        icon:   'fa fa-mobile-alt',
        label:  'Responsive',
        detail: 'Mobile-first layout with hamburger nav drawer',
      },
    ],

    codeBlock: {
      heading: 'Local Development',
      intro:   'No build step required — pure static HTML/CSS/JS.',
      code: `# Clone the repo
git clone https://github.com/Spielbergo/figma-portfolio-wp.git
cd figma-portfolio-wp

# Serve with Python (or any static server)
python -m http.server 5500`,
      outro: 'Then open http://localhost:5500 in your browser.',
    },
  },


  /* ========== WEB CHEDDAR — NEXT.JS ========== */
  {
    slug: 'webcheddar-nextjs',

    meta: {
      title:       'Web Cheddar — Next.js Agency Site',
      description: 'Production Next.js marketing site for Web Cheddar — component-driven architecture, CSS Modules, dynamic blog and service routes, Clients & Testimonials, Devtools, and a serverless Nodemailer contact form.',
    },

    hero: {
      bg:       '/assets/images/folio/webcheddar-nextjs/web-cheddar-hero-card.webp',
      title:    'Web Cheddar',
      subtitle: 'Production Next.js marketing site for a small web studio — modular components, CSS Modules, dynamic routing, and a serverless contact API.',
      badges:   ['Next.js', 'React', 'CSS Modules', 'Nodemailer', 'Dynamic Routes', 'App Router'],
      actions:  [
        {
          label: 'Live Site',
          icon:  'fa fa-external-link-alt',
          href:  'https://webcheddar.ca',
        },
      ],
    },

    overview: [
      'Web Cheddar is the official site for my freelance web studio. Built with Next.js and React, the site showcases services, a blog, client projects, and testimonials — all driven by a clean component-first architecture with CSS Modules for scoped, maintainable styling.',
      'The blog is powered by WordPress used as a headless CMS. Next.js fetches posts from the WordPress REST API at build time, delivering the editorial flexibility of WordPress with the performance and developer experience of a React front-end.',
      'The goal was a lightweight, SEO-friendly, and highly accessible production site that could also serve as a reusable template for future client projects. Pages are server-rendered, images are optimised, and the contact form routes through a serverless Nodemailer API endpoint.',
    ],

    screenshots: [
      {
        src:     '/assets/images/folio/webcheddar-nextjs/web-cheddar-hero-card.webp',
        alt:     'Web Cheddar hero section',
        caption: 'Hero — Full-bleed section with CTAs and optimised imagery',
        eager:   true,
      },
      {
        src:     '/assets/images/folio/webcheddar-nextjs/web-cheddar-nav.webp',
        alt:     'Web Cheddar navigation',
        caption: 'Navigation — Sticky header with responsive mobile nav and accessible focus states',
      },
      {
        src:     '/assets/images/folio/webcheddar-nextjs/web-cheddar-services.webp',
        alt:     'Web Cheddar services section',
        caption: 'Services — Service index with dynamic detail pages at /services/[slug]',
      },
      {
        src:     '/assets/images/folio/webcheddar-nextjs/web-cheddar-blog.webp',
        alt:     'Web Cheddar blog section',
        caption: 'Blog — Article listing and dynamic post pages at /blog/[slug]',
      },
      {
        src:     '/assets/images/folio/webcheddar-nextjs/web-cheddar-clients.webp',
        alt:     'Web Cheddar clients and testimonials section',
        caption: 'Clients & Testimonials — Client logo grid and testimonial carousel',
      },
      {
        src:     '/assets/images/folio/webcheddar-nextjs/web-cheddar-devtools.webp',
        alt:     'Web Cheddar devtools section',
        caption: 'Devtools — Colour palette & gradient generator utilities',
      },
      {
        src:     '/assets/images/folio/webcheddar-nextjs/web-cheddar-contact.webp',
        alt:     'Web Cheddar contact form',
        caption: 'Contact — 4-field form with serverless Nodemailer API route',
      },
      {
        src:     '/assets/images/folio/webcheddar-nextjs/web-cheddar-footer.webp',
        alt:     'Web Cheddar footer',
        caption: 'Footer — Semantic footer with dynamic copyright year and link columns',
      },
    ],

    sectionsTable: {
      heading:  'Sections & Pages',
      labelCol: 'Section',
      rows: [
        {
          number: 1,
          name:   'Navigation',
          notes:  'Sticky header, responsive mobile nav, accessible focus states',
        },
        {
          number: 2,
          name:   'Hero',
          notes:  'Full-bleed hero with CTAs and optimised images',
        },
        {
          number: 3,
          name:   'Services',
          notes:  'Service index and detail pages with dynamic routes at /services/[slug]',
        },
        {
          number: 4,
          name:   'Blog',
          notes:  'WordPress headless CMS — posts fetched via the REST API, rendered as dynamic Next.js pages at /blog/[slug]',
        },
        {
          number: 5,
          name:   'Clients & Testimonials',
          notes:  'Client logo grid and testimonial carousel/slider',
        },
        {
          number: 6,
          name:   'Devtools',
          notes:  'Small developer utilities — colour palette & gradient generator',
        },
        {
          number: 7,
          name:   'Contact',
          notes:  '4-field form wired to serverless API route (Nodemailer)',
        },
        {
          number: 8,
          name:   'Footer',
          notes:  'Semantic footer with dynamic copyright year and link columns',
        },
      ],
    },

    techStack: [
      {
        icon:   'fab fa-react',
        label:  'Next.js & React',
        detail: 'Server-side rendering, App Router, and reusable React components',
      },
      {
        icon:   'fab fa-css3',
        label:  'CSS Modules',
        detail: 'Scoped component styling — no utility frameworks, small bundle sizes',
      },
      {
        icon:   'fab fa-js',
        label:  'Modern CSS',
        detail: 'CSS Grid, Flexbox, custom properties, clamp() for fluid typography',
      },
      {
        icon:   'fas fa-envelope',
        label:  'Nodemailer',
        detail: 'Contact form submissions handled via a Next.js serverless API route',
      },
      {
        icon:   'fab fa-wordpress',
        label:  'WordPress (Headless CMS)',
        detail: 'WordPress powers the blog as a headless CMS — Next.js consumes the REST API to fetch and render posts',
      },
      {
        icon:   'fas fa-route',
        label:  'Dynamic Routing',
        detail: 'Blog posts and service pages generated from the WordPress REST API via /blog/[slug] and /services/[slug]',
      },
    ],

    highlights: [
      {
        icon:   'fa fa-cubes',
        label:  'Component-First',
        detail: 'All UI is broken into isolated, reusable components under components/ for easy maintenance',
      },
      {
        icon:   'fa fa-lock',
        label:  'CSS Modules',
        detail: 'Predictable scoping and minimal global styles prevent style conflicts across components',
      },
      {
        icon:   'fa fa-route',
        label:  'Dynamic Routes',
        detail: 'Blog and service detail pages are generated dynamically — add a data entry, get a new page',
      },
      {
        icon:   'fa fa-envelope',
        label:  'Serverless Contact API',
        detail: 'Two API routes (api/contact.js, api/form.js) — adaptable to any SMTP or serverless mail provider',
      },
      {
        icon:   'fa fa-universal-access',
        label:  'Accessibility',
        detail: 'Semantic HTML, ARIA attributes, and keyboard-navigable components throughout',
      },
      {
        icon:   'fa fa-tachometer-alt',
        label:  'Performance',
        detail: 'Server-rendered pages, lazy-loaded images, preloaded fonts, and minimal client-side JavaScript',
      },
      {
        icon:   'fa fa-mobile-alt',
        label:  'Responsive',
        detail: 'Mobile-first layouts built with CSS Grid, Flexbox, and responsive images',
      },
      {
        icon:   'fa fa-search',
        label:  'SEO-Friendly',
        detail: 'Server-rendered markup and semantic structure for strong crawlability and indexability',
      },
    ],

    codeBlock: {
      heading: 'Local Development',
      intro:   'Standard Next.js development workflow.',
      code: `# Clone the repo
git clone https://github.com/Spielbergo/webcheddar.git
cd webcheddar

# Install dependencies
npm install

# Start the dev server
npm run dev`,
      outro: 'Then open http://localhost:3000 in your browser.',
    },
  },


  /* ========== CLIPIFYIT ========== */
  {
    slug: 'clipifyit',

    meta: {
      title:       'ClipifyIt — Clipboard Manager App',
      description: 'A Next.js clipboard manager — save URLs for offline reading, share articles from Android, persistent clipboard lists, compression tools, auth flows, and optional Supabase, Stripe, and AWS Amplify integrations.',
    },

    hero: {
      bg:       '/assets/images/folio/clipifyit/clipifyit-card.webp',
      title:    'ClipifyIt',
      subtitle: 'A full-stack Next.js clipboard manager — save URLs to read offline, share articles straight from Android, compress and compare clipboard content, with user auth and optional cloud integrations.',
      badges:   ['Next.js', 'React', 'CSS Modules', 'PWA / Offline', 'Web Share Target', 'Supabase', 'Stripe', 'AWS Amplify', 'React Context', 'SEO'],
      actions:  [
        {
          label: 'Live Site',
          icon:  'fa fa-external-link-alt',
          href:  'https://clipifyit.com',
        },
      ],
    },

    overview: [
      'ClipifyIt is a web application for capturing, managing, compressing, and sharing clipboard content. Built with Next.js and React, it demonstrates real-world application architecture: modular components, authentication flows, React Context for global state, and integration-ready hooks for cloud services.',
      'A standout feature is offline-ready saved articles. Users can save any URL directly to their account and access the content later — no internet connection required. This makes ClipifyIt particularly useful when travelling, commuting, or during outages. On Android, users can share a link from any browser or app straight to ClipifyIt using the native share sheet, without ever opening the app manually.',
      'The project is built with extensibility in mind — optional integrations for Supabase (database & auth), Stripe (payments), and AWS Amplify (cloud infrastructure) can be enabled via environment variables, making it a practical showcase of how modern web apps are structured for production. Server-rendered pages and full SEO metadata ensure the public-facing content is crawlable and ranks well.',
    ],

    screenshots: [
      {
        src:     '/assets/images/folio/clipifyit/clipifyit-card.webp',
        alt:     'ClipifyIt app screenshot',
        caption: 'ClipifyIt — Clipboard manager dashboard',
        eager:   true,
      },
      {
        src:     '/assets/images/folio/clipifyit/clipifyit-clipboard.webp',
        alt:     'ClipifyIt clipboard list view',
        caption: 'Clipboard UI — Persistent lists with item controls',
      },
      {
        src:     '/assets/images/folio/clipifyit/clipifyit-compression.webp',
        alt:     'ClipifyIt compression tools',
        caption: 'Compression & Comparison — Tools to compress and diff clipboard content',
      },
      {
        src:     '/assets/images/folio/clipifyit/clipifyit-dashboard.webp',
        alt:     'ClipifyIt dashboard and controls',
        caption: 'Dashboard — User controls, saved articles, and clipboard history',
      },
      {
        src:     '/assets/images/folio/clipifyit/clipifyit-auth.webp',
        alt:     'ClipifyIt auth flow',
        caption: 'Auth — Authentication provider with user session context',
      },
    ],

    sectionsTable: {
      heading:  'Features Built',
      labelCol: 'Feature',
      rows: [
        {
          number: 1,
          name:   'Clipboard UI',
          notes:  'Persistent clipboard lists and per-item controls (ClipboardList, ClipboardItem components)',
        },
        {
          number: 2,
          name:   'Compression Tools',
          notes:  'Compress and compare clipboard content via CompressionControls and ComparisonTable components',
        },
        {
          number: 3,
          name:   'Saved Articles & Offline Reading',
          notes:  'Users save URLs to their account; content is cached for offline access — ideal for travel, commutes, and connectivity blackouts',
        },
        {
          number: 4,
          name:   'Android Share Target',
          notes:  'Via the Web Share Target API, any link shared from Chrome or another Android app is sent directly into ClipifyIt — no copy-paste required',
        },
        {
          number: 5,
          name:   'Dashboard & Controls',
          notes:  'User controls, dashboard views, and full saved-article management',
        },
        {
          number: 6,
          name:   'Authentication',
          notes:  'Auth provider and user session context via contexts/AuthContext.js',
        },
        {
          number: 7,
          name:   'SEO',
          notes:  'Server-rendered pages, Open Graph tags, Twitter Card meta, canonical URLs, and JSON-LD structured data',
        },
        {
          number: 8,
          name:   'Supabase Integration',
          notes:  'Optional Postgres database and auth backend — configured through environment variables',
        },
        {
          number: 9,
          name:   'Stripe Integration',
          notes:  'Optional payments integration — STRIPE_SECRET_KEY configured via .env.local',
        },
        {
          number: 10,
          name:   'AWS Amplify',
          notes:  'Optional cloud infrastructure layer via amplify/ config folder',
        },
      ],
    },

    techStack: [
      {
        icon:   'fab fa-react',
        label:  'Next.js & React',
        detail: 'App framework — server-rendered pages, API routes, and file-based routing',
      },
      {
        icon:   'fab fa-css3',
        label:  'CSS Modules',
        detail: 'Scoped per-component styles with global styles in styles/ for base resets',
      },
      {
        icon:   'fas fa-database',
        label:  'Supabase',
        detail: 'Optional Postgres database and auth backend — configured via NEXT_PUBLIC_SUPABASE_URL and anon key',
      },
      {
        icon:   'fas fa-credit-card',
        label:  'Stripe',
        detail: 'Optional payments integration — wired via STRIPE_SECRET_KEY environment variable',
      },
      {
        icon:   'fab fa-aws',
        label:  'AWS Amplify',
        detail: 'Optional cloud infrastructure — Amplify config lives in the amplify/ directory',
      },
      {
        icon:   'fas fa-layer-group',
        label:  'React Context',
        detail: 'Global auth and app state managed via contexts/AuthContext.js',
      },
      {
        icon:   'fas fa-wifi',
        label:  'PWA / Offline Caching',
        detail: 'Service worker caches saved article content so users can read without a connection',
      },
      {
        icon:   'fab fa-android',
        label:  'Web Share Target API',
        detail: 'Registered as a share target — Android users send URLs to ClipifyIt directly from the system share sheet',
      },
      {
        icon:   'fas fa-search',
        label:  'SEO',
        detail: 'Server-rendered pages with Open Graph, Twitter Card, canonical URLs, and JSON-LD structured data',
      },
    ],

    highlights: [
      {
        icon:   'fa fa-cubes',
        label:  'Modular Components',
        detail: 'Every UI piece is an isolated component — ClipboardList, ClipboardItem, CompressionControls, ComparisonTable, Controls',
      },
      {
        icon:   'fa fa-lock',
        label:  'Auth Flows',
        detail: 'Full authentication context with user session management — ready to wire to Supabase or any auth provider',
      },
      {
        icon:   'fa fa-compress-alt',
        label:  'Compression & Comparison',
        detail: 'Built-in tools to compress clipboard content and diff versions side-by-side',
      },
      {
        icon:   'fa fa-plug',
        label:  'Integration-Ready',
        detail: 'Supabase, Stripe, and AWS Amplify integrations are opt-in via environment variables — ship lean or fully-featured',
      },
      {
        icon:   'fa fa-bookmark',
        label:  'Save for Offline',
        detail: 'Users save article URLs to their account and read them any time — no signal needed. Perfect for travel, commutes, or internet outages',
      },
      {
        icon:   'fab fa-android',
        label:  'Android Share Integration',
        detail: 'Tap Share in any Android app and choose ClipifyIt — the URL lands straight in your saved list via the Web Share Target API',
      },
      {
        icon:   'fa fa-search',
        label:  'SEO-Optimised',
        detail: 'Server-rendered markup, Open Graph, Twitter Card meta, canonical URLs, and JSON-LD structured data for strong search visibility',
      },
      {
        icon:   'fa fa-tachometer-alt',
        label:  'Performance',
        detail: 'Optimised images, code-splitting, and Lighthouse best practices throughout',
      },
      {
        icon:   'fa fa-universal-access',
        label:  'Accessible',
        detail: 'Semantic HTML and keyboard-navigable components throughout',
      },
    ],

    codeBlock: {
      heading: 'Local Development',
      intro:   'Standard Next.js workflow with optional environment variables for cloud integrations.',
      code: `# Install dependencies
npm install

# Add environment variables
cp .env.example .env.local
# Fill in NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, STRIPE_SECRET_KEY as needed

# Start the dev server
npm run dev`,
      outro: 'Then open http://localhost:3000 in your browser.',
    },
  },

];
/** Look up a single project page by slug */
export function getProjectPage(slug) {
  return projectPages.find((p) => p.slug === slug) ?? null;
}
