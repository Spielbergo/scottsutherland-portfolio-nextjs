import { notFound } from 'next/navigation';
import { projectPages, getProjectPage } from '@/data/projectPages';
import ProjectDetail from '@/components/ProjectDetail/ProjectDetail';

/** Tell Next.js which slugs to statically pre-render at build time */
export async function generateStaticParams() {
  return projectPages.map((p) => ({ slug: p.slug }));
}

/** Per-page metadata generated from the data file */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectPage(slug);
  if (!project) return {};
  return {
    title: project.meta.title,
    description: project.meta.description,
    robots: { index: false, follow: false },
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectPage(slug);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
