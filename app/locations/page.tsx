import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Container, CtaBand } from "@/components/ui";
import { hyderabadLocations, telanganaLocations, type Location } from "@/content/locations";

export const metadata: Metadata = {
  title: "Areas We Serve | Architects Across Hyderabad & Telangana | BBMC",
  description:
    "BBMC architects, engineers and vastu consultants serve all of Hyderabad and Secunderabad, plus Warangal, Karimnagar, Nizamabad, Khammam and towns across Telangana.",
  alternates: { canonical: "/locations" },
  openGraph: { url: "/locations" },
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
        <p>From our office in Boduppal, Hyderabad, we design, engineer and build for clients across Hyderabad, Secunderabad and Telangana.</p>
      </PageHero>
      <section className="py-20">
        <Container className="space-y-20">
          <div>
            <h2 className="text-2xl font-bold text-ink sm:text-3xl" data-reveal>Hyderabad &amp; Secunderabad</h2>
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
