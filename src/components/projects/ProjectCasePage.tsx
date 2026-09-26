import ProjectCaseDiagram from '@/components/projects/ProjectCaseDiagram';
import {
  getProjectCasePath,
  localized,
  type PortfolioLanguage,
  type PortfolioProject,
} from '@/data/portfolio';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const labels = {
  sv: {
    badge: 'Utvalt industriprojekt',
    problem: 'Problem',
    diagnosis: 'Analys',
    action: 'Åtgärd',
    verification: 'Verifiering',
    technology: 'Teknik',
    evidence: 'Offentliga bevis & länkar',
    privacy: 'Integritet',
    privacyBody:
      'Kundnamn, interna PLC-adresser, projekt-ID, backupnamn och andra kundkänsliga detaljer är medvetet borttagna.',
    askAi: 'Fråga AI om det här caset',
    back: 'Till startsidan',
    language: 'English',
  },
  en: {
    badge: 'Featured industrial case',
    problem: 'Problem',
    diagnosis: 'Diagnosis',
    action: 'Action',
    verification: 'Verification',
    technology: 'Technologies',
    evidence: 'Public evidence & links',
    privacy: 'Privacy',
    privacyBody:
      'Customer names, internal PLC addresses, project IDs, backup names, and other customer-sensitive details are intentionally excluded.',
    askAi: 'Ask the AI about this case',
    back: 'Back to home',
    language: 'Svenska',
  },
} as const;

export default function ProjectCasePage({
  project,
  language,
}: {
  project: PortfolioProject;
  language: PortfolioLanguage;
}) {
  if (!project.caseSlug) return null;

  const t = labels[language];
  const homeHref = language === 'en' ? '/en' : '/';
  const otherLanguage: PortfolioLanguage = language === 'en' ? 'sv' : 'en';
  const otherLanguageHref = getProjectCasePath(project, otherLanguage) ?? homeHref;
  const aiQuestion =
    language === 'sv'
      ? `Berätta om projektet "${localized(project.title, language)}". Förklara problem, analys, åtgärd, verifiering och offentliga bevis.`
      : `Tell me about the project "${localized(project.title, language)}". Explain the problem, diagnosis, action, verification, and public evidence.`;

  return (
    <div className="min-h-screen bg-white text-neutral-950 dark:bg-neutral-950 dark:text-neutral-100">
      <header className="border-b border-neutral-200/80 dark:border-neutral-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href={homeHref} className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            {t.back}
          </Link>
          <Link href={otherLanguageHref} className="rounded-full border border-neutral-200 px-3 py-1.5 text-xs font-semibold dark:border-neutral-800">
            {t.language}
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
        <div className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
            <span>{t.badge}</span>
            <span aria-hidden="true">•</span>
            <span>{project.period}</span>
            <span aria-hidden="true">•</span>
            <span>{localized(project.category, language)}</span>
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            {localized(project.title, language)}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-300">
            {localized(project.summary, language)}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="rounded-full bg-neutral-100 px-3 py-1.5 text-xs font-medium text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <section className="mt-10">
          <ProjectCaseDiagram
            caseSlug={project.caseSlug as 'v2000-gyro-serial' | 'abb-safemove' | 'machine-vision'}
            language={language}
          />
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            [t.problem, localized(project.problem, language)],
            [t.diagnosis, localized(project.diagnosis, language)],
            [t.action, localized(project.action, language)],
            [t.verification, localized(project.verification, language)],
          ].map(([heading, body]) => (
            <article key={heading} className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900/60">
              <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-neutral-500">
                {heading}
              </h2>
              <p className="mt-3 text-sm leading-7 text-neutral-700 sm:text-base dark:text-neutral-300">{body}</p>
            </article>
          ))}
        </section>

        <section className="mt-8 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-3xl border border-neutral-200 p-6 dark:border-neutral-800">
            <h2 className="text-lg font-semibold">{t.evidence}</h2>
            {project.links?.length ? (
              <div className="mt-4 space-y-3">
                {project.links.map((item) => (
                  <a
                    key={item.url}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-2xl bg-neutral-50 p-4 text-sm font-medium transition-colors hover:bg-neutral-100 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                  >
                    <span>{localized(item.name, language)}</span>
                    <ExternalLink className="h-4 w-4 text-neutral-400" />
                  </a>
                ))}
              </div>
            ) : (
              <p className="mt-3 text-sm text-neutral-500">
                {language === 'sv'
                  ? 'Det här caset är anonymiserat och har ingen separat offentlig kundlänk.'
                  : 'This case is anonymized and does not have a separate public customer link.'}
              </p>
            )}
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-neutral-950 p-6 text-white dark:border-neutral-800">
            <h2 className="text-lg font-semibold">{t.privacy}</h2>
            <p className="mt-3 text-sm leading-6 text-white/65">{t.privacyBody}</p>
          </div>
        </section>

        <section className="mt-8">
          <Link
            href={`/chat?lang=${language}&query=${encodeURIComponent(aiQuestion)}`}
            className="group inline-flex items-center gap-2 rounded-full bg-[#0171E3] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-600"
          >
            {t.askAi}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </section>
      </main>
    </div>
  );
}
