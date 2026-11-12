import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
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
  const name = l.area.split(" (")[0];
  const searches: [string, string][] = [
    [`Builders in ${name}`, "builders-developers"],
    [`Construction company in ${name}`, "construction-renovation"],
    [`House construction contractors near ${name}`, "construction-renovation"],
    [`Architects in ${name}`, "architectural-design"],
    [`House plans in ${name}`, "architectural-design"],
    [`Vastu consultant in ${name}`, "vastu-consultation"],
    [`Interior designers in ${name}`, "interior-design"],
    [`Civil engineers in ${name}`, "structural-engineering"],
    [`Structural engineer in ${name}`, "structural-engineering"],
    [`Civil contractors in ${name}`, "construction-renovation"],
    [`Building contractors in ${name}`, "construction-renovation"],
    [`Renovation contractors in ${name}`, "construction-renovation"],
    [`Independent house builders in ${name}`, "builders-developers"],
    [`Villa builders in ${name}`, "builders-developers"],
    [`Building planners in ${name}`, "architectural-design"],
    [`Duplex house design in ${name}`, "architectural-design"],
    [`Vastu expert in ${name}`, "vastu-consultation"],
    [`Home interiors in ${name}`, "interior-design"],
    [`Modular kitchen in ${name}`, "interior-design"],
    [`Property valuers in ${name}`, "estimates-valuations"],
    [`Plot surveyors in ${name}`, "land-surveying-plot-development"],
    [`GHMC plan approval in ${name}`, "building-permission-approvals"],
    [`Site engineers & supervision in ${name}`, "construction-renovation"],
    [`3D elevation design in ${name}`, "building-elevation-design"],
    [`Building permission in ${name}`, "building-permission-approvals"],
    [`Bank loan estimate in ${name}`, "estimates-valuations"],
    [`Land surveyors in ${name}`, "land-surveying-plot-development"],
  ];
  const nearby = locations.filter((x) => x.slug !== l.slug && l.nearby.includes(x.area));

  return (
    <>
      <PageHero crumbs={[{ name: "Locations", href: "/locations" }, { name: l.area, href: `/${l.slug}` }]} eyebrow={l.areas ? `${l.areas.length} neighbourhoods covered` : `Serving ${l.area}, ${l.region ?? "Hyderabad"}`} title={`Architects, Builders & Vastu Consultants in ${l.area}`}>
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
          <h2 className="text-2xl font-bold text-ink sm:text-3xl" data-reveal>Our services in {name}</h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <li key={s.slug} data-reveal style={{ ["--reveal-delay" as string]: `${(i % 3) * 80}ms` }}>
                <Link href={`/services/${s.slug}`} className="lift zoom group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white hover:border-brand-200">
                  <div className="relative aspect-[16/10] overflow-hidden bg-mist">
                    <Image quality={90} src={s.image} alt={`${s.title} in ${name}, Hyderabad by BBMC`} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 font-display text-xs font-semibold text-brand-700">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-semibold text-ink transition-colors duration-200 group-hover:text-brand-700">{s.title} in {name}</h3>
                    <p className="mt-2 flex-1 leading-relaxed text-ink-60">{s.short}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                      Learn more <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container>
          <h2 className="text-2xl font-bold text-ink sm:text-3xl" data-reveal>Popular searches in {name}</h2>
          <p className="mt-3 max-w-2xl text-ink-60" data-reveal>
            Looking for builders, architects or a construction company near {name}? BBMC covers all of these from one team.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2" data-reveal>
            {searches.map(([label, slug]) => (
              <li key={label}>
                <Link href={`/services/${slug}`} className="inline-block rounded-full border border-line px-4 py-2 text-sm text-ink-80 transition-colors duration-200 hover:border-brand-500 hover:text-brand-700">
                  {label}
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
