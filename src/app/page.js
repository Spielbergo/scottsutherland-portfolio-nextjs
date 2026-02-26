import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Resume from '@/components/Resume/Resume';
import Portfolio from '@/components/Portfolio/Portfolio';
import Contact from '@/components/Contact/Contact';

export const metadata = {
  title: 'Scott Sutherland | Front End Developer — Toronto',
  description:
    'Toronto-based Front End Developer specialising in HTML, CSS, JavaScript, React and Next.js. Available for freelance projects.',
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
    </main>
  );
}

