import { ArrowRight } from 'lucide-react';
import type { PortfolioLanguage } from '@/data/portfolio';

const flows = {
  'v2000-gyro-serial': {
    sv: ['Gyrosensor', 'RS232', 'MOXA-omvandlare', 'RS485', 'Schneider PLC', 'Parser', 'Riktning & statuslogik'],
    en: ['Gyro sensor', 'RS232', 'MOXA converter', 'RS485', 'Schneider PLC', 'Parser', 'Heading & status logic'],
  },
  'abb-safemove': {
    sv: ['Eventlogg', 'Motion pointer', 'RAPID-bana', 'SafeMove-villkor', 'Kontrollerad ändring', 'Onsite-test', 'PLC vänteläge'],
    en: ['Event log', 'Motion pointer', 'RAPID path', 'SafeMove conditions', 'Controlled change', 'Onsite test', 'PLC wait state'],
  },
  'machine-vision': {
    sv: ['Basler-kameror', 'Trigger & bildtagning', 'EA Vision / Cognex', 'Inspektion & offset', 'ABB-robot', 'PLC-sekvens', 'Verifieringspunkter'],
    en: ['Basler cameras', 'Trigger & acquisition', 'EA Vision / Cognex', 'Inspection & offset', 'ABB robot', 'PLC sequence', 'Verification checkpoints'],
  },
} as const;

export default function ProjectCaseDiagram({
  caseSlug,
  language,
}: {
  caseSlug: keyof typeof flows;
  language: PortfolioLanguage;
}) {
  const stages = flows[caseSlug][language];

  return (
    <div className="rounded-3xl border border-neutral-200 bg-[#0b1220] p-5 shadow-sm sm:p-7 dark:border-neutral-800">
      <div className="mb-5">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
          {language === 'sv' ? 'Anonymiserat tekniskt flöde' : 'Anonymized technical flow'}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-white/55">
          {language === 'sv'
            ? 'Konceptuell översikt för portfolio. Inte kundens exakta as-built-schema.'
            : 'Conceptual portfolio overview. Not the customer’s exact as-built drawing.'}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {stages.map((stage, index) => (
          <div key={stage} className="contents">
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3">
              <span className="font-mono text-xs font-medium text-white/90">{stage}</span>
            </div>
            {index < stages.length - 1 && (
              <ArrowRight className="h-4 w-4 shrink-0 text-sky-300/70" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
