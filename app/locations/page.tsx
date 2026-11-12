import type { Metadata } from "next";
import { defaultOgImage } from "@/content/site";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Container, CtaBand } from "@/components/ui";
import { areaHref, hotspots, hyderabadLocations, telanganaLocations, zoneLocations, type Location } from "@/content/locations";

export const metadata: Metadata = {
  title: "Areas We Serve | Architects Across Hyderabad & Telangana | BBMC",
  description:
    "BBMC architects & vastu consultants serve every zone of Hyderabad, from Kokapet and Tellapur to Kompally, Uppal and ECIL, plus towns across Telangana.",
  alternates: { canonical: "/locations" },
  openGraph: { url: "/locations", images: [defaultOgImage] },
};

function AreaList({ items }: { items: Location[] }) {
  return (
    <ul className="mt-8 grid gap-x-10 md:grid-cols-2">
      {items.map((l) => (
        <li key={l.slug} data-reveal>
          <Link href={`/${l.slug}`} className="group block border-b border-line py-6">
            <h3 className="font-display text-lg font-bold text-ink transition-colors group-hover:text-brand-700">Architects in {l.area}</h3>
            <p className="mt-2 line-clamp-2 text-ink-60">{l.intro[0]}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function LocationsPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "Locations", href: "/locations" }]} eyebrow="Areas We Serve" title="Architects & Vastu Consultants across Hyderabad & Telangana">
        <p>From our office in Boduppal, Hyderabad, we design, engineer and build for clients across every zone of Hyderabad and Secunderabad, and in towns across Telangana.</p>
      </PageHero>

      <section className="py-20">
        <Container className="space-y-20">
          <div>
            <h2 className="text-2xl font-bold text-ink sm:text-3xl" data-reveal>Hyderabad by zone</h2>
            <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {zoneLocations.map((z) => (
                <li key={z.slug} data-reveal>
                  <Link href={`/${z.slug}`} className="lift group flex h-full flex-col rounded-xl border border-line p-6 hover:border-brand-200">
                    <h3 className="font-display text-lg font-bold text-ink transition-colors group-hover:text-brand-700">{z.area}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-60">{z.areas?.slice(0, 8).join(" · ")} and more</p>
                    <span className="mt-4 text-sm font-semibold text-brand-700">{z.areas?.length} areas →</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-ink sm:text-3xl" data-reveal>Top construction hotspots in Hyderabad</h2>
            <div className="mt-8 grid gap-10 md:grid-cols-2">
              {hotspots.map((h) => (
                <div key={h.corridor} data-reveal>
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-ink-40">{h.corridor}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {h.areas.map((a) => (
                      <li key={a}>
                        <Link href={areaHref(a, h.zone)} className="inline-block rounded-full border border-line px-4 py-2 text-sm font-medium text-ink-80 transition-colors duration-200 hover:border-brand-500 hover:text-brand-700">
                          {a}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-ink sm:text-3xl" data-reveal>Hyderabad &amp; Secunderabad neighbourhoods</h2>
            <AreaList items={hyderabadLocations} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-ink sm:text-3xl" data-reveal>Across Telangana</h2>
            <AreaList items={telanganaLocations} />
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
