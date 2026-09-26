'use client';

import { usePortfolioLanguage } from '@/hooks/use-portfolio-language';

export default function AboutMe() {
  const language = usePortfolioLanguage();

  return (
    <section className="mx-auto w-full max-w-3xl">
      <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
        {language === 'sv' ? 'Arbetssätt & mindset' : 'Working Style & Mindset'}
      </h2>
      <p className="text-muted-foreground mt-4 leading-relaxed">
        {language === 'sv'
          ? 'Jag arbetar lugnt och strukturerat även när produktionen står still. Säkerhet först, sedan fakta: larm, signaler, sekvens och det som faktiskt går att verifiera.'
          : 'I work calmly and systematically even when production is down. Safety first, then facts: alarms, signals, sequence state, and what can actually be verified.'}
      </p>
      <p className="text-muted-foreground mt-4 leading-relaxed">
        {language === 'sv'
          ? 'Jag försöker undvika stora ändringar tidigt i felsökningen. Jag tar backup, isolerar ett felområde, gör en kontrollerad ändring och verifierar resultatet innan nästa steg.'
          : 'I avoid large changes early in troubleshooting. I take a backup, isolate one fault area, make a controlled change, and verify the result before moving on.'}
      </p>
    </section>
  );
}
