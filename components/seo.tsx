import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SITE_URL, site } from "@/content/site";
import { services } from "@/content/services";
import type { Faq } from "@/content/services";

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export const businessId = `${SITE_URL}/#business`;

export function businessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": businessId,
    name: site.legalName,
    alternateName: ["BBMC", "Balaji Benchmark Consultants", "BBMC Consultants"],
    description:
      "Architects, structural engineers, interior designers, Vaasthu (vastu) consultants, builders and developers in Hyderabad & Telangana since 1995.",
    url: SITE_URL,
    logo: `${SITE_URL}/icon.png`,
    image: `${SITE_URL}/images/services/architects-hyderabad-hero.webp`,
    telephone: site.phones[0].tel,
    email: site.email,
    foundingDate: String(site.foundingYear),
    founder: { "@type": "Person", name: site.founder.name, jobTitle: site.founder.role },
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: `${site.address.locality}, ${site.address.city}`,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    hasMap: site.mapsUrl,
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: site.hours.days, opens: site.hours.opens, closes: site.hours.closes },
    ],
    areaServed: site.areasServed.map((name) => ({ "@type": "Place", name })),
    knowsAbout: ["Architecture", "Structural engineering", "Interior design", "Vastu Shastra", "Construction", "Property valuation", "Land surveying"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "BBMC Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, url: `${SITE_URL}/services/${s.slug}` },
      })),
    },
    sameAs: [site.social.facebook, site.social.instagram, site.social.youtube, site.mapsUrl],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "BBMC – Balaji Benchmark Consultants",
    publisher: { "@id": businessId },
    inLanguage: "en-IN",
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}

export type Crumb = { name: string; href: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all = [{ name: "Home", href: "/" }, ...items];
  return (
    <>
      <nav aria-label="Breadcrumb" className="text-sm text-ink-60">
        <ol className="flex flex-wrap items-center gap-1.5">
          {all.map((c, i) => (
            <li key={c.href} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-ink-40" aria-hidden="true" />}
              {i === all.length - 1 ? (
                <span aria-current="page" className="text-ink">{c.name}</span>
              ) : (
                <Link href={c.href} className="link-underline hover:text-ink">{c.name}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.name,
            item: `${SITE_URL}${c.href === "/" ? "" : c.href}`,
          })),
        }}
      />
    </>
  );
}
