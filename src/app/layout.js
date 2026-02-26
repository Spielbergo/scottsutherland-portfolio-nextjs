import { Work_Sans, Nothing_You_Could_Do } from 'next/font/google';
import './globals.css';
import Loader from '@/components/Loader/Loader';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import AOSInit from '@/components/AOSInit/AOSInit';
import Script from 'next/script';

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '900'],
  style: ['normal', 'italic'],
  variable: '--font-work-sans',
  display: 'swap',
});

const nothingYouCouldDo = Nothing_You_Could_Do({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-cursive',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://www.scottsutherland.info'),
  title: {
    default: 'Scott Sutherland | Front End Developer — Toronto',
    template: '%s | Scott Sutherland',
  },
  description:
    'Toronto-based Front End Developer specialising in HTML, CSS, JavaScript, React and Next.js. Available for freelance projects.',
  keywords: [
    'front end developer',
    'web developer',
    'toronto',
    'react',
    'next.js',
    'javascript',
    'freelance',
  ],
  authors: [{ name: 'Scott Sutherland', url: 'https://www.scottsutherland.info' }],
  creator: 'Scott Sutherland',
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Scott Sutherland | Front End Developer — Toronto',
    description:
      'Toronto-based Front End Developer specialising in HTML, CSS, JavaScript, React and Next.js. Available for freelance projects.',
    url: 'https://www.scottsutherland.info',
    siteName: 'Scott Sutherland Portfolio',
    images: [
      {
        url: '/assets/images/header-img-old.jpg',
        width: 1920,
        height: 1080,
        alt: 'Scott Sutherland — Front End Developer',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scott Sutherland | Front End Developer — Toronto',
    description:
      'Toronto-based Front End Developer specialising in HTML, CSS, JavaScript, React and Next.js.',
    images: ['/assets/images/header-img-old.jpg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Scott Sutherland',
  jobTitle: 'Front End Developer',
  url: 'https://www.scottsutherland.info',
  email: 'scott@webcheddar.ca',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Toronto',
    addressRegion: 'Ontario',
    addressCountry: 'CA',
  },
  sameAs: [
    'https://github.com/Spielbergo',
    'https://www.linkedin.com/in/scott-sutherland-7745045a/',
    'https://www.webcheddar.ca',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${workSans.variable} ${nothingYouCouldDo.variable}`}>
      <head>
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TG4ZBQS');
        `}</Script>
        {/* Font Awesome 5 */}
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
          integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
          crossOrigin="anonymous"
        />
        {/* AOS CSS */}
        <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css" />
      </head>
      <body>
        {/* Skip to main content — keyboard / screen reader navigation */}
        <a href="#main-content" className="skip-link">Skip to main content</a>

        {/* GTM noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TG4ZBQS"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Loader />
        <Navbar />
        {children}
        <Footer />
        <AOSInit />
      </body>
    </html>
  );
}
