import PortfolioPage from '@/components/Portfolio/PortfolioPage';

export const metadata = {
  title: 'All Projects | Scott Sutherland — Front End Developer',
  description:
    'Full project index for Scott Sutherland — Bootstrap sites, Flex/Grid builds, and JavaScript applications built for clients across Toronto.',
  alternates: { canonical: '/portfolio' },
  openGraph: {
    title: 'All Projects | Scott Sutherland — Front End Developer',
    description:
      'Full project index for Scott Sutherland — Bootstrap sites, Flex/Grid builds, and JavaScript applications.',
    url: 'https://www.scottsutherland.info/portfolio',
    type: 'website',
  },
};

export default function PortfolioIndexPage() {
  return <PortfolioPage />;
}
