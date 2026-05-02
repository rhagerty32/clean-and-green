# Uintah Home Services website

Next.js 15 (App Router) marketing site for [uintahhomeservice.com](https://uintahhomeservice.com).

## Stack

- Next.js 15 + React 19, TypeScript, Tailwind v4
- shadcn/ui (`new-york` style) + lucide-react
- React Hook Form + Zod for form handling
- Resend for transactional email (quote + contact form leads)

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

> Builds use **Turbopack** (`next build --turbopack`) because webpack has a compatibility issue with the current versions of `@radix-ui/react-select` ESM modules and zod v4. Turbopack handles them correctly.

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

```env
# Server-only secret. Do NOT prefix with NEXT_PUBLIC_.
RESEND_API_KEY=re_xxx
```

The form submissions in `/quote` and `/contact` send email to `orson@uintahhomeservice.com` via Resend. If `RESEND_API_KEY` is missing the action falls back gracefully and logs the submission to the server console (so the form still appears to succeed during local development without a real key).

### Setting up Resend (one-time)

1. Create a Resend account at [resend.com](https://resend.com).
2. Add the domain `uintahhomeservice.com` and add the SPF, DKIM, and DMARC DNS records Resend provides. Wait for verification (usually within an hour).
3. Create an API key and put it in `.env.local` as `RESEND_API_KEY`.
4. The `from` address for outgoing email is `quotes@uintahhomeservice.com` \u2014 once the domain is verified that address works automatically.

## Project layout

```
src/
  app/
    actions/send-lead.ts          \u2014 server action that emails leads via Resend
    services/[trade]/page.tsx     \u2014 dynamic per-trade landing pages
    sitemap.ts, robots.ts          \u2014 SEO baseline
    icon.tsx, apple-icon.tsx,
    opengraph-image.tsx            \u2014 generated favicon + OG image
  components/
    Header.tsx, Footer.tsx
    ui/                            \u2014 shadcn components
  lib/
    site.ts                        \u2014 brand strings, contact info, hours, areas
    services.ts                    \u2014 the 4 trades + their copy/sub-services/FAQs
    site-images.ts                 \u2014 Unsplash registry per trade
public/
  logo-full.svg, logo-logo.svg
```

### Editing content

- **Brand strings, contact info, hours, areas:** [`src/lib/site.ts`](src/lib/site.ts)
- **Services + copy + FAQs:** [`src/lib/services.ts`](src/lib/services.ts)
- **Photography:** [`src/lib/site-images.ts`](src/lib/site-images.ts) \u2014 swap any Unsplash URL for a real Orson-team photo, then push.

## Deploy

The repo is set up to deploy on Vercel without further config. After the first deploy, set the `RESEND_API_KEY` environment variable in the Vercel project settings.
