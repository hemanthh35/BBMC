import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import FaqList from "@/components/FaqList";
import { JsonLd } from "@/components/seo";
import { CallButton, Container, CtaBand, WhatsAppButton } from "@/components/ui";
import { getService, services } from "@/content/services";
import { locations } from "@/content/locations";
import { SITE_URL } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = getService((await params).slug);
  if (!s) return {};
  const url = `/services/${s.slug}`;
  return {
    title: s.seoTitle,
    description: s.metaDescription,
    alternates: { canonical: url },
    openGraph: { url, title: s.seoTitle, description: s.metaDescription, images: [{ url: s.image, alt: s.imageAlt }] },
  };
}

export default async function ServicePage({ params }: Props) {
  const s = getService((await params).slug);
  if (!s) notFound();
  const related = s.related.map((r) => services.find((x) => x.slug === r)!).filter(Boolean);

  return (
    <>
      <PageHero crumbs={[{ name: "Services", href: "/services" }, { name: s.title, href: `/services/${s.slug}` }]} eyebrow={s.title} title={s.h1}>
        <p>{s.short}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <CallButton />
          <WhatsAppButton text={`Hi BBMC, I would like to inquire about ${s.title}.`} className="text-ink hover:bg-ink hover:text-white" />
        </div>
      </PageHero>

      <section className="py-20 lg:py-24">
        <Container className="grid gap-14 lg:grid-cols-12">
          <div className="space-y-6 text-lg leading-relaxed text-ink-80 lg:col-span-7" data-reveal>
            {s.intro.map((p) => <p key={p}>{p}</p>)}
          </div>
          <div className="lg:col-span-5" data-reveal>
            <div className="zoom relative aspect-[4/3] overflow-hidden rounded-lg bg-mist">
              <Image src={s.image} alt={s.imageAlt} fill priority sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-mist py-20 lg:py-24">
        <Container className="grid gap-14 lg:grid-cols-2">
          <div data-reveal>
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">What&apos;s included</h2>
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {s.includes.map((x) => (
                <li key={x} className="flex gap-3 py-4 text-ink-80">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />{x}
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal>
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">How we work</h2>
            <ol className="mt-8 space-y-6">
              {s.process.map((p, i) => (
                <li key={p.step} className="grid grid-cols-[3rem_1fr] gap-2">
                  <span className="font-display text-sm font-semibold text-brand-600">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-display font-semibold text-ink">{p.step}</h3>
                    <p className="mt-1 text-ink-60">{p.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-bold text-ink sm:text-3xl" data-reveal>{s.title}: FAQs</h2>
          </div>
          <div className="lg:col-span-8"><FaqList faqs={s.faqs} /></div>
        </Container>
      </section>

      <section className="border-t border-line py-16">
        <Container className="grid gap-12 md:grid-cols-2">
          <div data-reveal>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-ink-40">Related services</h2>
            <ul className="mt-4 space-y-3">
              {related.map((r) => (
                <li key={r.slug}><Link href={`/services/${r.slug}`} className="link-underline font-display font-semibold text-ink hover:text-brand-700">{r.title}</Link></li>
              ))}
            </ul>
          </div>
          <div data-reveal>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-ink-40">Available in</h2>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
              {locations.map((l) => (
                <li key={l.slug}><Link href={`/${l.slug}`} className="link-underline text-ink-80 hover:text-brand-700">{l.area}</Link></li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <CtaBand title={`Talk to BBMC about ${s.title.toLowerCase()}`} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: s.title,
          serviceType: s.title,
          description: s.metaDescription,
          url: `${SITE_URL}/services/${s.slug}`,
          image: `${SITE_URL}${s.image}`,
          provider: { "@id": `${SITE_URL}/#business` },
          areaServed: [
            { "@type": "City", name: "Hyderabad" },
            { "@type": "City", name: "Secunderabad" },
            { "@type": "State", name: "Telangana" },
          ],
        }}
      />
    </>
  );
}
