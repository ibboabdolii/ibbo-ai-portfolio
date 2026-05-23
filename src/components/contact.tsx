'use client';

import React, { useState } from 'react';
import { ChevronRight, Copy, Mail } from 'lucide-react';

const PERSONAL_EMAIL = 'ibbo.abdoli@gmail.com';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const contactInfo = {
    name: 'Ibbo Abdoli',
    email: PERSONAL_EMAIL,
    handle: '@ibboabdoli',
    socials: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ibbo-abdoli' },
      { name: 'Website', url: 'https://ibboabdoli.com' },
      { name: 'GitHub', url: 'https://github.com/ibboabdolii' },
    ],
  };

  const openLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const openGmailCompose = () => {
    const to = encodeURIComponent(PERSONAL_EMAIL);
    openLink(`https://mail.google.com/mail/?view=cm&fs=1&to=${to}`);
  };

  // Outlook Web (works everywhere)
  const openOutlookWebCompose = () => {
    const to = encodeURIComponent(PERSONAL_EMAIL);
    openLink(`https://outlook.office.com/mail/deeplink/compose?to=${to}`);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = PERSONAL_EMAIL;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    }
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

        {/* Email + Actions + Socials */}
        <div className="mt-8 flex flex-col gap-4 md:mt-10">
          {/* Email row */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <a
              href={`mailto:${PERSONAL_EMAIL}`}
              className="group inline-flex cursor-pointer items-center gap-2"
              title="Open default email app"
            >
              <Mail className="h-4 w-4 text-blue-500" />
              <span className="text-base font-medium text-blue-500 hover:underline sm:text-lg">
                {PERSONAL_EMAIL}
              </span>
              <ChevronRight className="h-5 w-5 text-blue-500 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {/* Actions */}
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={openGmailCompose}
                className="rounded-xl bg-black/10 px-3 py-2 text-sm hover:bg-black/15 dark:bg-white/10 dark:hover:bg-white/15"
                title="Compose in Gmail"
              >
                Open Gmail
              </button>

              <button
                type="button"
                onClick={openOutlookWebCompose}
                className="rounded-xl bg-black/10 px-3 py-2 text-sm hover:bg-black/15 dark:bg-white/10 dark:hover:bg-white/15"
                title="Compose in Outlook Web"
              >
                Open Outlook
              </button>

              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-xl bg-black/10 px-3 py-2 text-sm hover:bg-black/15 dark:bg-white/10 dark:hover:bg-white/15"
                title="Copy email"
              >
                <Copy className="h-4 w-4" />
                Copy
              </button>
            </div>
          </div>

          <p className="text-xs text-muted-foreground">
            If mailto doesn’t open on your device, use <b>Open Gmail</b> or <b>Open Outlook</b>, or copy the email.
          </p>

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

          {/* Toast */}
          {copied && (
            <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-2xl bg-black px-4 py-2 text-sm text-white shadow-lg">
              Email copied ✅
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
