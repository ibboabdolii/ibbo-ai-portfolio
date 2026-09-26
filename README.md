# Ibbo AI Portfolio

Interactive bilingual portfolio for **Ibbo Abdoli**, Service Engineer / Automation Technician in Sweden.

Production: https://ai.ibboabdoli.com  
Main portfolio: https://www.ibboabdoli.com

## Stack

- Next.js App Router
- React + TypeScript
- Vercel AI SDK + OpenAI
- Tailwind CSS
- Vercel Analytics

## Portfolio data

Professional content has one source of truth:

`src/data/portfolio.ts`

It contains the current profile, technical skills, selected projects, contact links and CV paths. UI cards and AI tools read from the same data to avoid drift.

Industrial case studies intentionally anonymize customer-sensitive details. Verified results are kept separate from work that is still under test or follow-up.

## Local setup

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Environment:

```env
OPENAI_API_KEY=...
OPENAI_MODEL=gpt-5.6-luna
```

`OPENAI_MODEL` is configurable. The default is `gpt-5.6-luna`, chosen for a cost-sensitive public portfolio workload; a different compatible model can be tested without changing source code.

## Chat safeguards

The public chat route includes:

- portfolio-only system rules
- centralized tool data
- request-size validation
- bounded recent conversation context
- client-side pruning of completed chat history
- rejection of client-supplied system/tool roles
- basic per-instance rate limiting
- baseline browser security headers
- no private customer or credential data in the portfolio source

For stronger distributed abuse protection, add a shared rate-limit store or platform firewall rule.

## Dependencies

The repository targets **Next.js 15.5.26** and **eslint-config-next 15.5.26**. The matching dependency graph is committed in `pnpm-lock.yaml`, so local, CI, and Vercel installs use `--frozen-lockfile`.

## Release workflow

Do not edit `main` directly for substantial changes.

1. Create a work branch from the current production commit.
2. Make content/code changes.
3. Verify the Vercel preview.
4. Review the PR.
5. Merge only after the preview and checks are green.

Current 2026 refresh branch:

`work/portfolio-2026-refresh`
