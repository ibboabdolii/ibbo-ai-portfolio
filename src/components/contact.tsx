'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';

export function Contact() {
  const contactInfo = {
    name: 'Ibbo Abdoli',
    email: 'ibbo.abdoli@elektroautomatik.se',
    handle: '@ibboabdoli',
    socials: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/ibbo-abdoli',
      },
      {
        name: 'Website',
        url: 'https://ibboabdoli.com',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/ibboabdolii',
      },
      // اگر نمی‌خوای، این مورد رو حذف کن
      {
        name: 'Instagram',
        url: 'https://www.instagram.com',
      },
    ],
  };

  const openLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="mx-auto mt-8 w-full">
      <div className="bg-accent w-full overflow-hidden rounded-3xl px-6 py-8 font-sans sm:px-10 md:px-16 md:py-12">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
            Contact
          </h2>
          <span className="mt-2 sm:mt-0">{contactInfo.handle}</span>
        </div>

        {/* Email + Socials */}
        <div className="mt-8 flex flex-col md:mt-10">
          {/* Email */}
          <a
            href={`mailto:${contactInfo.email}`}
            className="group mb-5 inline-flex items-center gap-1 cursor-pointer"
          >
            <span className="text-base font-medium text-blue-500 hover:underline sm:text-lg">
              {contactInfo.email}
            </span>
            <ChevronRight className="h-5 w-5 text-blue-500 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          {/* Social Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-5 sm:gap-x-8">
            {contactInfo.socials.map((social) => (
              <button
                key={social.name}
                type="button"
                className="text-muted-foreground hover:text-foreground cursor-pointer text-sm transition-colors"
                onClick={() => openLink(social.url)}
                title={social.name}
              >
                {social.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
