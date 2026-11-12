import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin } from "lucide-react";
import PageHero from "@/components/PageHero";
import FaqList from "@/components/FaqList";
import Portfolio from "@/components/Portfolio";
import { CallButton, Container, CtaBand, WhatsAppButton } from "@/components/ui";
import { areaHref, getLocation, locations } from "@/content/locations";
import { services } from "@/content/services";
import { defaultOgImage, site } from "@/content/site";

type Props = { params: Promise<{ location: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return locations.map((l) => ({ location: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const l = getLocation((await params).location);
  if (!l) return {};
  return {
    title: l.seoTitle,
    description: l.metaDescription,
    alternates: { canonical: `/${l.slug}` },
    openGraph: { url: `/${l.slug}`, title: l.seoTitle, description: l.metaDescription, images: [defaultOgImage] },
  };
}

export default async function LocationPage({ params }: Props) {
  const l = getLocation((await params).location);
  if (!l) notFound();
  const nearby = locations.filter((x) => x.slug !== l.slug && l.nearby.includes(x.area));

  return (
    <>
      <PageHero crumbs={[{ name: "Locations", href: "/locations" }, { name: l.area, href: `/${l.slug}` }]} eyebrow={l.areas ? `${l.areas.length} neighbourhoods covered` : `Serving ${l.area}, ${l.region ?? "Hyderabad"}`} title={`Architects, Engineers & Vastu Consultants in ${l.area}`}>
        <p>{site.roles}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <CallButton />
          <WhatsAppButton text={`Hi BBMC, I have a project in ${l.area}.`} className="text-ink hover:bg-ink hover:text-white" />
        </div>
      </PageHero>

      <section className="py-20 lg:py-24">
        <Container className="grid gap-14 lg:grid-cols-12">
          <div className="space-y-6 text-lg leading-relaxed text-ink-80 lg:col-span-7" data-reveal>
            {l.intro.map((p) => <p key={p}>{p}</p>)}
          </div>
          <aside className="lg:col-span-5" data-reveal>
            <h2 className="font-display text-xl font-bold text-ink">What we do most in {l.area}</h2>
            <ul className="mt-5 divide-y divide-line border-y border-line">
              {l.focus.map((f) => <li key={f} className="py-3 text-ink-80">{f}</li>)}
            </ul>
            <div className="mt-8 flex gap-3 rounded-lg bg-mist p-5 text-sm text-ink-60">
              <MapPin className="h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
              <address className="not-italic">
                <strong className="block text-ink">{site.legalName}</strong>
                {site.address.lines.join(" ")}
              </address>
            </div>
          </aside>
        </Container>
      </section>

      {l.areas && (
        <section className="border-t border-line py-20 lg:py-24">
          <Container>
            <h2 className="text-2xl font-bold text-ink sm:text-3xl" data-reveal>Areas we cover in {l.area}</h2>
            <ul className="mt-8 flex flex-wrap gap-2" data-reveal>
              {l.areas.map((a) => {
                const href = areaHref(a, l.slug);
                const own = href !== `/${l.slug}`;
                return (
                  <li key={a}>
                    {own ? (
                      <Link href={href} className="inline-block rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700 transition-colors duration-200 hover:border-brand-500">
                        {a}
                      </Link>
                    ) : (
                      <span className="inline-block rounded-full border border-line px-4 py-2 text-sm text-ink-80">{a}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </Container>
        </section>
      )}

      <section className="bg-mist py-20 lg:py-24">
        <Container>
          <h2 className="text-2xl font-bold text-ink sm:text-3xl" data-reveal>Our services in {l.area}</h2>
          <ul className="mt-8 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li key={s.slug} data-reveal>
                <Link href={`/services/${s.slug}`} className="group block border-b border-line py-4">
                  <span className="font-display font-semibold text-ink transition-colors group-hover:text-brand-700">{s.title}</span>
                  <span className="mt-1 block text-sm text-ink-60">{s.short}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20 lg:py-24"><Container><Portfolio /></Container></section>

      <section className="border-t border-line py-20 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-bold text-ink sm:text-3xl" data-reveal>{l.area}: FAQs</h2>
            {nearby.length > 0 && (
              <div className="mt-10" data-reveal>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-ink-40">Nearby areas</h3>
                <ul className="mt-4 space-y-2">
                  {nearby.map((n) => (
                    <li key={n.slug}><Link href={`/${n.slug}`} className="link-underline text-ink-80 hover:text-brand-700">Architects in {n.area}</Link></li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="lg:col-span-8"><FaqList faqs={l.faqs} /></div>
        </Container>
      </section>

      <CtaBand title={`Planning a project in ${l.area}?`} />
    </>
  );
}
