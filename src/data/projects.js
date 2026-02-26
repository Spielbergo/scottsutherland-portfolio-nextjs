export const projects = [
  /* ── FEATURED 6 (home page + top of portfolio index) ── */
  {
    id: 17,
    featured: true,
    category: 'javascript',
    thumb: '/assets/images/folio/webcheddar-nextjs/web-cheddar-hero-card.webp',
    alt: 'Web Cheddar Next.js agency website screenshot',
    github: null,
    live: 'https://webcheddar.ca',
    detailPage: '/project-pages/webcheddar-nextjs',
    slides: [
      {
        img:     '/assets/images/folio/webcheddar-nextjs/web-cheddar-hero-card.webp',
        caption: 'A production Next.js marketing site for Web Cheddar — component-driven architecture, CSS Modules, WordPress headless CMS, and a serverless Nodemailer contact form.',
        num:     '1 / 1',
      },
    ],
  },
  {
    id: 18,
    featured: true,
    category: 'javascript',
    thumb: '/assets/images/folio/clipifyit/clipifyit-card.webp',
    alt: 'ClipifyIt clipboard manager app screenshot',
    github: null,
    live: 'https://clipifyit.com',
    detailPage: '/project-pages/clipifyit',
    slides: [
      {
        img:     '/assets/images/folio/clipifyit/clipifyit-card.webp',
        caption: 'A Next.js clipboard manager — save URLs for offline reading, share from Android, persistent clipboard lists, compression tools, and optional Supabase, Stripe, and AWS Amplify integrations.',
        num:     '1 / 1',
      },
    ],
  },
  {
    id: 14,
    featured: true,
    category: 'javascript',
    thumb: '/assets/images/folio/scottsutherland/scottsutherland.jpg',
    alt: 'Scott Sutherland Next.js portfolio site screenshot',
    github: 'https://github.com/Spielbergo/portfolio',
    live: null,
    detailPage: '/project-pages/nextjs-portfolio',
    slides: [
      {
        img: '/assets/images/folio/scottsutherland/portfolio-item-01.jpg',
        caption:
          'A complete rebuild of the vanilla HTML/CSS/JS portfolio as a Next.js 16 App Router application — component-based, CSS Modules, no Tailwind.',
        num: '1 / 3',
      },
      {
        img: '/assets/images/folio/scottsutherland/portfolio-item-02.jpg',
        caption:
          'Each section is an isolated React component with its own CSS Module. AOS scroll animations, next/font, and next/image are used throughout.',
        num: '2 / 3',
      },
      {
        img: '/assets/images/folio/scottsutherland/portfolio-item-03.jpg',
        caption:
          'Individual project detail pages live under /project-pages/. Contact form sends email via Nodemailer through a Next.js API Route.',
        num: '3 / 3',
      },
    ],
  },
  {
    id: 16,
    featured: true,
    category: 'grid',
    thumb: '/assets/images/folio/designer-portfolio-demo/figma-portfolio-demo-card.webp',
    alt: 'Dezign designer portfolio website screenshot',
    github: 'https://github.com/Spielbergo/figma-portfolio-wp',
    live: null,
    detailPage: '/project-pages/dezign-portfolio',
    slides: [
      {
        img:     '/assets/images/folio/designer-portfolio-demo/figma-portfolio-demo-hero.webp',
        caption: 'A pixel-perfect Figma-to-HTML/CSS UI/UX designer portfolio demo. Zero dependencies — accessible, performance-optimised, with full favicon suite and JSON-LD structured data.',
        num:     '1 / 1',
      },
    ],
  },
  {
    id: 13,
    featured: true,
    category: 'javascript',
    thumb: '/assets/images/folio/aquarium-demo/aquarium-hero-card.webp',
    alt: 'Annerley Aquarium website screenshot',
    github: null,
    live: null,
    detailPage: '/project-pages/aquarium-demo',
    slides: [
      {
        img: '/assets/images/folio/aquarium-demo/aquarium-hero.webp',
        caption:
          'A pixel-perfect Figma-to-HTML/CSS build for Annerley Aquarium. Zero dependencies — semantic HTML5, vanilla CSS3, and vanilla JavaScript.',
        num: '1 / 1',
      },
    ],
  },
  {
    id: 15,
    featured: true,
    category: 'javascript',
    thumb: '/assets/images/folio/restaurant-demo/figma-restaurant-demo-card.webp',
    alt: 'Dine Restaurant website screenshot',
    github: 'https://github.com/Spielbergo/figma-restaurant-wp',
    live: null,
    detailPage: '/project-pages/dine-restaurant',
    slides: [
      {
        img: '/assets/images/folio/restaurant-demo/figma-restaurant-demo-hero.webp',
        caption:
          'A pixel-perfect Figma-to-HTML/CSS build for Dine Restaurant — fine Japanese cuisine and sushi bar. Zero dependencies, full SEO, responsive, and accessible.',
        num: '1 / 1',
      },
    ],
  },

  /* ── REMAINING PROJECTS ── */
  {
    id: 1,
    category: 'grid',
    thumb: '/assets/images/folio/scottsutherland/scottsutherland.jpg',
    alt: 'Scott Sutherland portfolio website screenshot',
    github: 'https://github.com/Spielbergo/portfolio',
    live: null,
    slides: [
      {
        img: '/assets/images/folio/scottsutherland/portfolio-item-01.jpg',
        caption:
          'This site was created by me. No templates used. I tried to create it using only HTML and CSS with a little JS. I also took all the photos. I did use some components found online such as the loader, marquee and portfolio filter.',
        num: '1 / 3',
      },
      {
        img: '/assets/images/folio/scottsutherland/portfolio-item-02.jpg',
        caption:
          'The portfolio section is a work in progress. I am creating a JSON file to simulate an API and will be using JS to render the section.',
        num: '2 / 3',
      },
      {
        img: '/assets/images/folio/scottsutherland/portfolio-item-03.jpg',
        caption:
          'PHPMailer was installed to send form data. A VERY basic recaptcha has been added and I will upgrade if needed.',
        num: '3 / 3',
      },
    ],
  },
  {
    id: 2,
    category: 'bootstrap',
    thumb: '/assets/images/folio/uoft/uoft.jpg',
    alt: 'U of T website screenshot',
    github: 'https://github.com/Spielbergo/uoft',
    live: 'https://medprint.webcheddar.ca',
    slides: [
      {
        img: '/assets/images/folio/uoft/portfolio-item-03.jpg',
        caption:
          'I was hired to create a site for the new 3D printing division at the University of Toronto MedStore. They had a Wix site so I used that as a base. With a Bootstrap template I built this site.',
        num: '1 / 3',
      },
      {
        video: '/assets/images/folio/uoft/portfolio-video-1.mp4',
        poster: '/assets/images/folio/uoft/portfolio-item-02.jpg',
        caption: 'I created this video using Sony Vegas and clips provided by the client.',
        num: '2 / 3',
      },
      {
        img: '/assets/images/folio/uoft/portfolio-item-02.jpg',
        caption: 'The client required a contact form that was able to allow LARGE file attachments.',
        num: '3 / 3',
      },
    ],
  },
  {
    id: 4,
    category: 'javascript',
    thumb: '/assets/images/folio/math-sprint-game/math-sprint-game.jpg',
    alt: 'Math Sprint Game screenshot',
    github: 'https://github.com/Spielbergo/math-sprint-game',
    live: 'https://www.scottsutherland.info/projects/math-sprint-game',
    slides: [
      {
        img: '/assets/images/folio/math-sprint-game/portfolio-item.jpg',
        caption:
          'This is a simple multiplication game created while learning JavaScript. Scores are saved in Local Storage.',
        num: '1 / 1',
      },
    ],
  },
  {
    id: 5,
    category: 'bootstrap',
    thumb: '/assets/images/folio/pva/pva.jpg',
    alt: 'PVA website screenshot',
    github: null,
    live: 'https://www.pva.ca',
    slides: [
      {
        img: '/assets/images/folio/pva/portfolio-item-01.jpg',
        caption:
          'This is the largest client I have had. They have around 60 pages in English and 60 in French. It was created using a Bootstrap template with many customizations.',
        num: '1 / 3',
      },
      {
        img: '/assets/images/folio/pva/portfolio-item-02.jpg',
        caption:
          'I have built a very strong relationship with this company and they continue to employ me to add new pages and updates.',
        num: '2 / 3',
      },
      {
        img: '/assets/images/folio/pva/portfolio-item-03.jpg',
        caption: 'Chart.js was used to help create many varied charts and graphs.',
        num: '3 / 3',
      },
    ],
  },
  {
    id: 6,
    category: 'bootstrap',
    thumb: '/assets/images/folio/rohutton/rohutton.jpg',
    alt: 'Rosemary Hutton website screenshot',
    github: 'https://github.com/Spielbergo/rohutton',
    live: 'https://www.rohutton.com',
    slides: [
      {
        img: '/assets/images/folio/rohutton/portfolio-item-01.jpg',
        caption:
          'This is a very simple site for a Canadian writer. All images were supplied by her and the site was created with a Bootstrap template.',
        num: '1 / 3',
      },
      {
        img: '/assets/images/folio/rohutton/portfolio-item-02.jpg',
        caption: 'The site has nice fades and is basically a fullscreen slideshow.',
        num: '2 / 3',
      },
      {
        img: '/assets/images/folio/rohutton/portfolio-item-03.jpg',
        caption: 'Simple contact form.',
        num: '3 / 3',
      },
    ],
  },
  {
    id: 7,
    category: 'bootstrap',
    thumb: '/assets/images/folio/webcheddar/webcheddar.jpg',
    alt: 'Web Cheddar website screenshot',
    github: 'https://github.com/Spielbergo/webcheddar',
    live: 'https://www.webcheddar.ca',
    slides: [
      {
        img: '/assets/images/folio/webcheddar/portfolio-item-01.jpg',
        caption:
          'This is the company I created to start taking freelance clients. It has served as a portfolio page in the past and has many of the same projects as this site.',
        num: '1 / 3',
      },
      {
        img: '/assets/images/folio/webcheddar/portfolio-item-02.jpg',
        caption: 'This site was created using a Bootstrap template.',
        num: '2 / 3',
      },
      {
        img: '/assets/images/folio/webcheddar/portfolio-item-03.jpg',
        caption: 'Standard contact form.',
        num: '3 / 3',
      },
    ],
  },
  {
    id: 8,
    category: 'bootstrap',
    thumb: '/assets/images/folio/smashpets/smashpets.jpg',
    alt: 'Smash Pets website screenshot',
    github: 'https://github.com/Spielbergo/smashpets',
    live: 'https://www.smashpets.ca',
    slides: [
      {
        img: '/assets/images/folio/smashpets/portfolio-item-01.jpg',
        caption: 'This is another one of my early sites. It was created with a Bootstrap template.',
        num: '1 / 3',
      },
      {
        img: '/assets/images/folio/smashpets/portfolio-item-02.jpg',
        caption: 'Subtle animations were added with animate.css.',
        num: '2 / 3',
      },
      {
        img: '/assets/images/folio/smashpets/portfolio-item-03.jpg',
        caption: 'Standard contact form. Forms are sent to the client\'s cellphone via SMS.',
        num: '3 / 3',
      },
    ],
  },
  {
    id: 9,
    category: 'javascript',
    thumb: '/assets/images/folio/nasaAPI/nasaAPI.jpg',
    alt: 'NASA API website screenshot',
    github: 'https://github.com/Spielbergo/nasa-apod',
    live: 'https://www.scottsutherland.info/projects/nasa-apod',
    slides: [
      {
        img: '/assets/images/folio/nasaAPI/portfolio-item.jpg',
        caption:
          'This site was created using the APOD API from NASA. Favourites and Likes are saved in Local Storage.',
        num: '1 / 1',
      },
    ],
  },
  {
    id: 10,
    category: 'javascript',
    thumb: '/assets/images/folio/paint-clone/paint-clone.jpg',
    alt: 'Paint Clone website screenshot',
    github: 'https://github.com/Spielbergo/paint-clone',
    live: 'https://www.scottsutherland.info/projects/paint-clone',
    slides: [
      {
        img: '/assets/images/folio/paint-clone/portfolio-item.jpg',
        caption: 'A basic MS Paint clone also created while learning JS and HTML Canvas.',
        num: '1 / 1',
      },
    ],
  },
  {
    id: 12,
    category: 'bootstrap',
    thumb: '/assets/images/folio/organizethis/organizethis.jpg',
    alt: 'Organize This website screenshot',
    github: 'https://github.com/Spielbergo/organizethis',
    live: 'https://www.organizethisto.ca/',
    slides: [
      {
        img: '/assets/images/folio/organizethis/portfolio-item-01.jpg',
        caption:
          'This was the third site I had done for a client. It was made using stock photos and a Bootstrap template.',
        num: '1 / 1',
      },
    ],
  },
];

export const filterCategories = [
  { id: 'all',        label: 'All' },
  { id: 'bootstrap',  label: 'Bootstrap' },
  { id: 'grid',       label: 'Flex/Grid' },
  { id: 'javascript', label: 'JS Projects' },
];
