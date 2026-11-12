# BBMC Website Rebuild: Next.js + SEO Plan

Goal: rank #1 for the brand name ("BBMC", "Balaji Benchmark Consultants") and top 5 for architecture, vastu, structural, interior, construction, approvals and surveying searches in Boduppal, Uppal and East Hyderabad.

Source of content and images: the existing repo (`PerfectLanding/`). No scraping is needed because all text and 32 images are already there.

---

## 1. Tech stack

| Area | Choice | Why |
|---|---|---|
| Framework | Next.js 15 (App Router), TypeScript | Server-rendered/static HTML that Google reads instantly |
| Rendering | Static generation (SSG) for every page | Fastest load, best Core Web Vitals |
| Styling | Tailwind CSS + shadcn/ui (reuse current design) | Same look, less work |
| Animation | framer-motion (lightweight use only) | Keep the premium feel without hurting speed |
| Images | `next/image`, all converted to WebP/AVIF | Current PNGs are ~2 MB each, which is the biggest speed problem |
| Content | TypeScript data files + MDX for blog | Easy to edit, no database needed |
| Forms | Server Action → email (Resend) + WhatsApp link | Lead capture without a backend |
| Hosting | Vercel (free tier) | No cold-start sleep like Render free tier |
| Domain | Custom domain, e.g. `bbmcconsultants.in` | Required for brand ranking and trust |
| Analytics | Google Search Console, GA4, Vercel Analytics | Track rankings, calls, WhatsApp clicks |

---

## 2. Site structure (URLs)

```
/                                   Home
/about                              About BBMC + founder
/services                           All services overview
  /services/architectural-design
  /services/vastu-consultation
  /services/structural-engineering
  /services/interior-design
  /services/construction-renovation
  /services/building-elevation-design
  /services/estimates-valuations        (bank loan estimates)
  /services/land-surveying-plot-development
  /services/building-permission-approvals   (GHMC / HMDA / DTCP)
/projects                           Portfolio (filter: architecture / interior)
  /projects/[slug]                  One page per project (12 + 8)
/locations
  /architects-in-boduppal
  /architects-in-uppal
  /architects-in-nacharam
  /architects-in-habsiguda
  /architects-in-medipally
  /architects-in-peerzadiguda
  /architects-in-lb-nagar
  /architects-in-ghatkesar
/house-plans                        30x40, 30x50, 40x60 vastu plans (lead magnet)
/blog                               Articles
  /blog/[slug]
/testimonials
/faq
/contact
/privacy-policy
```

Rules:
- One main keyword per page; no two pages target the same keyword.
- Location pages must have unique content (local landmarks, projects done in that area, travel time), never copy-paste.
- Every page links to Contact and to 2–3 related pages.

---

## 3. Keyword map (page → primary keyword)

| Page | Primary keyword | Secondary |
|---|---|---|
| Home | architects in Boduppal Uppal Hyderabad | BBMC, Balaji Benchmark Consultants, engineers and vastu consultants |
| Architectural design | house plan design Uppal | residential/commercial architects Hyderabad, duplex/G+1/G+2 design |
| Vastu | vastu consultant in Uppal / Hyderabad | vastu for home, plot, office; vastu correction without demolition |
| Structural | structural engineer Hyderabad | RCC design, stability certificate, structural audit |
| Interior | interior designers in Uppal | modular kitchen, 2BHK/3BHK interiors, office interiors |
| Construction | builders in Boduppal / Uppal | house construction cost per sq ft, turnkey construction |
| Elevation | 3D elevation design Hyderabad | front elevation designers |
| Estimates | bank loan estimate for house construction | property valuation Hyderabad |
| Surveying | land surveyors Hyderabad | plot development, layout planning |
| Approvals | GHMC building permission | HMDA / DTCP approval |
| Location pages | architects in {area} | vastu consultant in {area}, builders in {area} |
| House plans | 30x40 vastu house plan | east/west/north/south facing plans |

---

## 4. On-page SEO (every page)

- Unique `<title>` (≤ 60 chars) and meta description (≤ 160 chars) via Next.js `generateMetadata`.
- One H1 containing the primary keyword; H2/H3 for sections.
- Canonical URL on every page.
- Open Graph + Twitter card with a page-specific image (auto-generated with `next/og`).
- Breadcrumbs (visible + schema) on all inner pages.
- Spelling: "Vastu" as primary, "Vaasthu" mentioned once as an alternate.
- Mention Boduppal / Uppal naturally in home intro, footer, contact and service pages.
- Descriptive alt text on all images, e.g. "G+2 vastu-compliant residence in Boduppal by BBMC".
- FAQ block (4–8 questions) at the bottom of each service and location page.
- Clear CTAs: Call, WhatsApp, Get Consultation, above the fold and at the end.

Home page draft:
- Title: `Architects & Vastu Consultants in Boduppal, Uppal | BBMC`
- Description: `BBMC, since 1995: architects, structural engineers, interior designers and vastu consultants in Boduppal & Uppal, Hyderabad. 500+ projects. Free consultation.`
- H1: `Architects, Engineers & Vastu Consultants in Boduppal, Uppal – Hyderabad`

---

## 5. Structured data (JSON-LD)

| Schema | Where |
|---|---|
| `Organization` + `ProfessionalService` / `Architect` (LocalBusiness) | Site-wide: name, logo, address (Boduppal 500092), phones, hours, geo, `areaServed`, `sameAs` (Facebook, Instagram, YouTube, Google Maps) |
| `Person` | Founder (Er. Paspunoori Srinivas Gupta) |
| `Service` | Each service page |
| `FAQPage` | Pages with FAQs |
| `BreadcrumbList` | All inner pages |
| `CreativeWork` / `ImageGallery` | Project pages |
| `Article` / `BlogPosting` | Blog posts |
| `Review` / `AggregateRating` | Only with real, verifiable Google reviews |

Validate with Google Rich Results Test before launch.

---

## 6. Technical SEO

- `app/sitemap.ts` → auto-generated `sitemap.xml` covering all pages, projects and posts.
- `app/robots.ts` → `robots.txt` allowing all and pointing to the sitemap.
- Static generation for all routes; no client-only content that Google can't see.
- Custom 404 page with links back to services.
- 301 redirect from the old `onrender.com` site to the new domain (or point the old app to the new domain).
- Trailing-slash and `www` vs non-`www` consistency (pick one, redirect the other).
- HTTPS (automatic on Vercel).
- `lang="en-IN"`; consider a Telugu version later (`hreflang`).
- Clean, lowercase, hyphenated URLs.

---

## 7. Performance (Core Web Vitals targets)

Targets: LCP < 2.0s, INP < 200ms, CLS < 0.1, Lighthouse 95+ on mobile.

- Convert all 32 images (≈30 MB total) to WebP/AVIF with `sharp`, max 1920px wide. Expected total < 4 MB.
- `next/image` with correct `sizes`, lazy loading below the fold, `priority` only on the hero image.
- Hero: one static image first, carousel loads after (avoid heavy LCP).
- Fonts via `next/font` (self-hosted, no layout shift).
- Google Map loaded only on click or when scrolled into view (facade).
- Minimal client JavaScript: server components by default, `"use client"` only for carousel, filters, and forms.
- Remove unused Replit plugins and shadcn components.

---

## 8. Content plan

**Existing content to migrate:** hero text, about, 9 services, 12 architecture + 8 interior projects, 6 USPs, founder bio, 5 testimonials, contact details.

**Content to write (new):**
- 9 service pages, about 700–1,000 words each: what it is, process, deliverables, price range, FAQs, related projects.
- 8 location pages, about 500–700 words each, all unique.
- 20 project pages: location, plot size, built-up area, floors, facing, vastu notes, scope, photos.
- 10 launch blog posts, then 4 per month. Starting topics:
  1. House construction cost per sq ft in Hyderabad (2026)
  2. GHMC building permission process, step by step
  3. Vastu tips for east-facing houses
  4. Vastu for north, west and south-facing plots
  5. 30x40 vastu house plans with layouts
  6. How bank loan estimates work for house construction
  7. G+1 vs G+2 house: cost and design guide
  8. Vastu correction without demolition
  9. Choosing a structural engineer: what to check
  10. Plot buying checklist in Boduppal / Uppal

**Content that needs real info from BBMC (please collect):**
- COA / engineer registration numbers and certifications.
- Actual project locations, sizes and years.
- Real Google review links (current testimonials must match real reviews).
- Confirm working hours (site says Mon–Sun 9 AM–10 PM).
- Price ranges they are comfortable publishing.
- Logo in SVG/high-res PNG.

---

## 9. Trust and conversion

- Sticky call + WhatsApp buttons on mobile.
- Consultation form: name, phone, service, plot size, location. Sends email + WhatsApp.
- "Since 1995 · 500+ projects · 3000+ clients" bar near the top.
- Founder photo and credentials.
- Embedded Google reviews link ("See all reviews on Google").
- Downloadable vastu plan PDFs in exchange for phone number (lead magnet).
- Track call, WhatsApp and form clicks as GA4 conversions.

---

## 10. Off-site SEO (runs in parallel; decides map ranking)

1. **Google Business Profile:** verify, primary category "Architect", extra categories (Vastu consultant, Structural engineer, Interior designer, Construction company, Land surveyor). Add services, 25+ photos, weekly posts, website link to new domain.
2. **Reviews:** target 50+ genuine Google reviews in 2–3 months; reply to all.
3. **Citations (same Name, Address, Phone everywhere):** Justdial, Sulekha, IndiaMART, Houzz, 99acres, Magicbricks, NoBroker, Bing Places, Apple Business Connect.
4. **Social:** YouTube project walkthroughs and vastu tips; Instagram reels; website link in all bios and descriptions.
5. **Backlinks:** builder/developer partners, local news, Hyderabad directories, guest posts on home/real-estate blogs.

---

## 11. Project folder structure

```
bbmc-next/
  app/
    layout.tsx            site-wide metadata, fonts, Organization schema
    page.tsx              home
    about/ services/ projects/ locations/ blog/ faq/ contact/ ...
    sitemap.ts  robots.ts  opengraph-image.tsx  not-found.tsx
  components/             header, footer, hero, cards, CTA, FAQ, breadcrumbs, schema
  content/
    site.ts               business info (NAP, hours, socials) – single source of truth
    services.ts  locations.ts  projects.ts  testimonials.ts  faqs.ts
    blog/*.mdx
  public/images/          optimized WebP images
  scripts/optimize-images.mjs
```

All business details live in `content/site.ts` so the name, address and phone are identical on every page and in every schema.

---

## 12. Build phases

| Phase | Work | Output |
|---|---|---|
| 1. Setup | Create Next.js app, Tailwind, shadcn, fonts, `site.ts` | Running skeleton |
| 2. Images | Copy + compress all images to WebP, rename with SEO filenames | `public/images/` |
| 3. Core pages | Home, About, Services overview, Contact, Projects, FAQ, 404 | Feature parity with current site |
| 4. SEO layer | Metadata, schema, sitemap, robots, OG images, breadcrumbs | Rich-result-ready |
| 5. Service pages | 9 pages with full content + FAQs | Keyword coverage |
| 6. Location + project pages | 8 locations, 20 projects | Local coverage |
| 7. Blog | MDX setup + 10 posts | Long-tail traffic |
| 8. Forms + tracking | Consultation form, GA4, conversion events | Lead tracking |
| 9. QA | Lighthouse, Rich Results Test, mobile check, broken links | 95+ scores |
| 10. Launch | Deploy to Vercel, connect domain, redirect old site, submit sitemap | Live |

---

## 13. Timeline to results

- **Week 1–2:** build + launch; brand name ranks #1 within a few weeks of indexing.
- **Month 1–3:** Google profile, reviews, citations, blog → top 5 for Boduppal terms.
- **Month 3–6:** top 5 in the Uppal map pack and for service + area terms.
- **Month 6–12:** competitive "Hyderabad" terms. No one can guarantee #1 for broad terms; consistent content and reviews are what move it.

---

## 14. Launch checklist

- [ ] All pages return 200, no broken links
- [ ] Unique title/description on every page
- [ ] Schema valid in Rich Results Test
- [ ] sitemap.xml and robots.txt live
- [ ] Lighthouse mobile ≥ 95 (Performance, SEO, Accessibility, Best Practices)
- [ ] Custom domain + HTTPS + www redirect
- [ ] Old Render site redirects to new domain
- [ ] Search Console verified, sitemap submitted
- [ ] GA4 installed with call/WhatsApp/form conversions
- [ ] Google Business Profile website link updated
- [ ] NAP identical on site, Google profile and all directories
