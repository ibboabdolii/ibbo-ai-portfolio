import React from 'react';

const AboutMe = () => {
  return (
    <section className="mx-auto w-full max-w-3xl">
      <div className="mb-8">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
          About Me
        </h2>

        <p className="mt-4 leading-relaxed text-muted-foreground">
          I’m Ibbo Abdoli — a hands-on Service Engineer and Automation Technician
          based in Sweden. I work in the field with industrial automation and
          electrical systems, helping customers keep production running through
          fast troubleshooting, safe interventions, and clear documentation.
        </p>

        <p className="mt-4 leading-relaxed text-muted-foreground">
          My daily work includes fault diagnostics on PLC-driven equipment,
          ABB robot cells, sensors/IO, and electrical panels — from on-site
          commissioning to root-cause analysis and long-term improvements. I also
          work with electrical inspections aligned with Swedish practices and
          safety standards.
        </p>

        <ul className="mt-5 space-y-2 text-muted-foreground">
          <li>• Troubleshooting & downtime reduction in real production environments</li>
          <li>• PLC / automation systems, IO, sensors, and electrical installations</li>
          <li>• Structured approach: safety first, diagnostics, fix, verification, documentation</li>
          <li>• Calm under pressure, team-oriented, and focused on continuous improvement</li>
        </ul>

        <p className="mt-5 leading-relaxed text-muted-foreground">
          Outside of work, I stay active and enjoy personal growth. That mindset
          carries into my engineering approach — disciplined, detail-focused, and
          always aiming to improve quality and reliability.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
