# BBMC – Balaji Benchmark Consultants website

Next.js 16 rebuild of the BBMC site, built for local SEO in Boduppal, Uppal and Hyderabad. See [PLAN.md](PLAN.md) for the full SEO plan.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Configure

Copy `.env.example` to `.env.local`. `NEXT_PUBLIC_SITE_URL` defaults to https://balaji-benchmark-consultants-bbmc.onrender.com; set it if the domain changes. It drives canonical URLs, the sitemap and structured data.

## Where things live

| What | File |
|---|---|
| Business name, address, phones, hours, socials | `content/site.ts` |
| Home page text, projects, testimonials, FAQs | `content/home.ts` |
| Service pages | `content/services.ts` |
| Area pages (Boduppal, Uppal, …) | `content/locations.ts` |
| Blog posts | `content/blog.ts` |
| Images (WebP) | `public/img/` (regenerate with `npm run images -- <path-to-originals>`) |

## Before launch

- Replace the placeholder testimonials in `content/home.ts` with real Google reviews.
- Set `NEXT_PUBLIC_SITE_URL` and add the Google Search Console token in `app/layout.tsx`.
- Submit `/sitemap.xml` in Search Console and update the Google Business Profile website link.
