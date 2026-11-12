import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Container, CtaBand } from "@/components/ui";
import { locations } from "@/content/locations";

export const metadata: Metadata = {
  title: "Areas We Serve in Hyderabad | Boduppal, Uppal & More | BBMC",
  description:
    "BBMC architects, engineers and vastu consultants serve Boduppal, Uppal, Peerzadiguda, Nacharam, Habsiguda, Medipally, LB Nagar, Ghatkesar and all of Hyderabad.",
  alternates: { canonical: "/locations" },
  openGraph: { url: "/locations" },
};

export default function LocationsPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "Locations", href: "/locations" }]} eyebrow="Areas We Serve" title="Architects & Vastu Consultants across East Hyderabad">
        <p>Our office is in Boduppal. We design, engineer and build for clients across these areas and all of Hyderabad.</p>
      </PageHero>
      <section className="py-20">
        <Container>
          <ul className="grid gap-x-10 md:grid-cols-2">
            {locations.map((l) => (
              <li key={l.slug} data-reveal>
                <Link href={`/${l.slug}`} className="group block border-b border-line py-7">
                  <h2 className="font-display text-xl font-bold text-ink transition-colors group-hover:text-brand-700">Architects in {l.area}</h2>
                  <p className="mt-2 line-clamp-2 text-ink-60">{l.intro[0]}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
