import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Check, ChevronDown, MapPin, Phone } from "lucide-react";
import FaqList from "@/components/FaqList";
import Portfolio from "@/components/Portfolio";
import { Breadcrumbs } from "@/components/seo";
import { WhatsAppIcon } from "@/components/icons";
import { Container, CtaBand } from "@/components/ui";
import { areaHref, getLocation, locations } from "@/content/locations";
import { services } from "@/content/services";
import { defaultOgImage, site, whatsappLink } from "@/content/site";

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

// Search phrases grouped by what people are looking for. Shown in a collapsed panel (visible on click).
const searchGroups = (name: string): { title: string; items: [string, string][] }[] => [
  {
    title: "Builders & construction",
    items: [
      [`Builders in ${name}`, "builders-developers"],
      [`Construction company in ${name}`, "construction-renovation"],
      [`House construction contractors near ${name}`, "construction-renovation"],
      [`Civil contractors in ${name}`, "construction-renovation"],
      [`Building contractors in ${name}`, "construction-renovation"],
      [`Independent house builders in ${name}`, "builders-developers"],
      [`Villa builders in ${name}`, "builders-developers"],
      [`Renovation contractors in ${name}`, "construction-renovation"],
      [`Site engineers & supervision in ${name}`, "construction-renovation"],
    ],
  },
  {
    title: "Architecture & engineering",
    items: [
      [`Architects in ${name}`, "architectural-design"],
      [`Civil engineers in ${name}`, "structural-engineering"],
      [`Structural engineer in ${name}`, "structural-engineering"],
      [`Building planners in ${name}`, "architectural-design"],
      [`House plans in ${name}`, "architectural-design"],
      [`Duplex house design in ${name}`, "architectural-design"],
      [`3D elevation design in ${name}`, "building-elevation-design"],
    ],
  },
  {
    title: "Vastu & interiors",
    items: [
      [`Vastu consultant in ${name}`, "vastu-consultation"],
      [`Vastu expert in ${name}`, "vastu-consultation"],
      [`Interior designers in ${name}`, "interior-design"],
      [`Home interiors in ${name}`, "interior-design"],
      [`Modular kitchen in ${name}`, "interior-design"],
    ],
  },
  {
    title: "Approvals, estimates & surveys",
    items: [
      [`Building permission in ${name}`, "building-permission-approvals"],
      [`GHMC plan approval in ${name}`, "building-permission-approvals"],
      [`Bank loan estimate in ${name}`, "estimates-valuations"],
      [`Property valuers in ${name}`, "estimates-valuations"],
      [`Land surveyors in ${name}`, "land-surveying-plot-development"],
      [`Plot surveyors in ${name}`, "land-surveying-plot-development"],
    ],
  },
];

const heroImageFor = (slug: string) => {
  // Rotate through the service photos so neighbouring area pages don't all look identical.
  const pool = services.map((s) => s.image);
  let h = 0;
  for (const c of slug) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return pool[h % pool.length];
};

export default async function LocationPage({ params }: Props) {
  const l = getLocation((await params).location);
  if (!l) notFound();
  const name = l.area.split(" (")[0];
  const nearby = locations.filter((x) => x.slug !== l.slug && l.nearby.includes(x.area));
  const groups = searchGroups(name);
  const linkedAreas = l.areas?.filter((a) => areaHref(a, l.slug) !== `/${l.slug}`) ?? [];
  const otherAreas = l.areas?.filter((a) => !linkedAreas.includes(a)) ?? [];

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden bg-ink pt-18 text-white">
        <Image quality={90} src={heroImageFor(l.slug)} alt="" fill priority sizes="100vw" className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/40" aria-hidden="true" />
        <Container className="relative py-16 lg:py-24">
          <div className="[&_a]:text-white/70 [&_span]:text-white/70 [&_[aria-current]]:text-white">
            <Breadcrumbs items={[{ name: "Locations", href: "/locations" }, { name: name, href: `/${l.slug}` }]} />
          </div>
          <p className="mt-10 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-200 animate-fade-up">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {l.areas ? `${l.areas.length} neighbourhoods` : `${name}, ${l.region ?? "Hyderabad"}`}
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.1] sm:text-5xl animate-fade-up">
            Architects, Builders &amp; Vastu Consultants in {name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75 animate-fade-up" style={{ animationDelay: "100ms" }}>
            Design, engineering, Vaasthu, interiors and construction from one trusted team, serving {name} since 1995.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={`tel:${site.phones[0].tel}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-500 px-7 font-semibold text-white transition-colors duration-200 hover:bg-brand-600">
              <Phone className="h-5 w-5" aria-hidden="true" /> Call Now
            </a>
            <a href={whatsappLink(`Hi BBMC, I have a project in ${name}.`)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/40 px-7 font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-ink">
              <WhatsAppIcon className="h-5 w-5" /> WhatsApp
            </a>
          </div>
          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-white/15 pt-8">
            {[
              ["30+", "Years"],
              ["500+", "Projects"],
              ["3000+", "Clients"],
            ].map(([v, k]) => (
              <div key={k}>
                <dt className="sr-only">{k}</dt>
                <dd className="font-display text-3xl font-bold text-white">{v}</dd>
                <dd className="mt-1 text-sm text-white/60">{k}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* ---------- Intro ---------- */}
      <section className="py-20 lg:py-24">
        <Container className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7" data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">About {name}</p>
            <div className="mt-4 space-y-5 text-lg leading-relaxed text-ink-80">
              {l.intro.map((p) => <p key={p}>{p}</p>)}
            </div>
          </div>
          <aside className="lg:col-span-5" data-reveal>
            <div className="rounded-2xl border border-line p-7">
              <h2 className="font-display text-lg font-bold text-ink">What we do most in {name}</h2>
              <ul className="mt-5 space-y-3">
                {l.focus.map((f) => (
                  <li key={f} className="flex gap-3 text-ink-80">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                      <Check className="h-3 w-3" aria-hidden="true" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex gap-3 border-t border-line pt-6 text-sm text-ink-60">
                <MapPin className="h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
                <address className="not-italic">
                  <strong className="block text-ink">{site.legalName}</strong>
                  {site.address.lines.join(" ")}
                </address>
              </div>
            </div>
          </aside>
        </Container>
      </section>

      {/* ---------- Neighbourhoods (zone pages) ---------- */}
      {l.areas && (
        <section className="pb-20 lg:pb-24">
          <Container>
            <div className="rounded-2xl bg-mist p-7 sm:p-10" data-reveal>
              <h2 className="text-2xl font-bold text-ink sm:text-3xl">Neighbourhoods we cover</h2>
              {linkedAreas.length > 0 && (
                <ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {linkedAreas.map((a) => (
                    <li key={a}>
                      <Link href={areaHref(a, l.slug)} className="group flex items-center justify-between rounded-lg bg-white px-4 py-3 font-medium text-ink shadow-[0_1px_0_var(--color-line)] transition-colors hover:text-brand-700">
                        {a}
                        <ArrowRight className="h-4 w-4 text-ink-40 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-brand-600" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              <ul className="mt-7 columns-2 gap-x-8 text-sm text-ink-60 sm:columns-3 lg:columns-4">
                {otherAreas.map((a) => (
                  <li key={a} className="flex break-inside-avoid items-center gap-2 py-1.5">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>
      )}

      {/* ---------- Services ---------- */}
      <section className="bg-mist py-20 lg:py-24">
        <Container>
          <div className="max-w-2xl" data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">Our services</p>
            <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">Everything you need to build in {name}</h2>
          </div>
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

      <section className="py-20 lg:py-24"><Container><Portfolio /></Container></section>

      {/* ---------- FAQ ---------- */}
      <section className="border-t border-line py-20 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-bold text-ink sm:text-3xl" data-reveal>Questions about building in {name}</h2>
            {nearby.length > 0 && (
              <div className="mt-10" data-reveal>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-ink-40">Nearby areas</h3>
                <ul className="mt-4 space-y-2">
                  {nearby.map((n) => (
                    <li key={n.slug}><Link href={`/${n.slug}`} className="link-underline text-ink-80 hover:text-brand-700">{n.area}</Link></li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="lg:col-span-8"><FaqList faqs={l.faqs} /></div>
        </Container>
      </section>

      <CtaBand title={`Planning a project in ${name}?`} />

      {/* ---------- Related searches: collapsed by default, opens on click ---------- */}
      <section className="border-t border-line bg-mist">
        <Container className="py-6">
          <details className="group">
            <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-semibold text-ink-60 hover:text-ink">
              Related searches in {name}
              <ChevronDown className="h-4 w-4 transition-transform duration-300 group-open:rotate-180" aria-hidden="true" />
            </summary>
            <div className="mt-6 grid gap-8 pb-4 sm:grid-cols-2 lg:grid-cols-4">
              {groups.map((g) => (
                <div key={g.title}>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-ink-40">{g.title}</h3>
                  <ul className="mt-3 space-y-2 text-sm">
                    {g.items.map(([label, slug]) => (
                      <li key={label}>
                        <Link href={`/services/${slug}`} className="link-underline text-ink-60 hover:text-brand-700">{label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </details>
        </Container>
      </section>
    </>
  );
}
