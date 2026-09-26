import ProjectCasePage from '@/components/projects/ProjectCasePage';
import { getProjectByCaseSlug, localized, portfolioProjects } from '@/data/portfolio';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return portfolioProjects
    .filter((project) => project.caseSlug)
    .map((project) => ({ slug: project.caseSlug! }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectByCaseSlug(slug);
  if (!project) return {};

  return {
    title: localized(project.title, 'en'),
    description: localized(project.summary, 'en'),
    alternates: {
      canonical: `/en/projects/${slug}`,
      languages: {
        sv: `/projects/${slug}`,
        en: `/en/projects/${slug}`,
      },
    },
    openGraph: {
      title: localized(project.title, 'en'),
      description: localized(project.summary, 'en'),
      url: `/en/projects/${slug}`,
      locale: 'en_US',
      type: 'article',
    },
  };
}

export default async function EnglishProjectCase({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectByCaseSlug(slug);
  if (!project) notFound();

  return <ProjectCasePage project={project} language="en" />;
}
