'use client';

import React from 'react';

const AboutMe = () => {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="mb-8">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
          About Me
        </h2>

        <p className="mt-4 leading-relaxed text-muted-foreground">
          I am a hands-on Service Engineer and Automation Technician who enjoys
          working in challenging environments and solving complex technical
          problems. I am naturally curious, detail-oriented, and driven by
          continuous learning.
        </p>

        <p className="mt-4 leading-relaxed text-muted-foreground">
          My background includes working with industrial automation systems,
          electrical installations, and troubleshooting production equipment
          under real-world conditions. I am comfortable taking responsibility,
          working under pressure, and collaborating closely with others to find
          reliable solutions.
        </p>

        <p className="mt-4 leading-relaxed text-muted-foreground">
          Outside of work, I value discipline, physical activity, and personal
          growth. These experiences shape the way I approach my professional
          life — staying calm in critical situations, focusing on safety and
          quality, and always aiming to improve.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
