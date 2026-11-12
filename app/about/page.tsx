import type { Metadata } from "next";
import { defaultOgImage } from "@/content/site";
import PageHero from "@/components/PageHero";
import { AboutSection, FounderSection, WhyChooseSection } from "@/components/sections";
import { CtaBand } from "@/components/ui";
import { JsonLd } from "@/components/seo";
import { SITE_URL, site } from "@/content/site";
import { founder } from "@/content/home";

export const metadata: Metadata = {
  title: "About BBMC | Architects & Engineers in Hyderabad Since 1995",
  description:
    "Balaji Benchmark Consultants (BBMC), founded in 1995 by Er. Paspunoori Srinivas Gupta: architects, engineers and Vaasthu consultants in Hyderabad, Telangana.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about", images: [defaultOgImage] },
};

export default function AboutPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "About", href: "/about" }]} eyebrow="About BBMC" title="Architects, Engineers & Vaasthu Consultants in Hyderabad since 1995">
        <p>Three decades of designing and building homes, campuses and commercial landmarks across Telangana, from our office in Boduppal.</p>
      </PageHero>
      <AboutSection />
      <WhyChooseSection />
      <FounderSection />
      <CtaBand />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: site.founder.name,
          jobTitle: site.founder.role,
          image: `${SITE_URL}${site.founder.image}`,
          worksFor: { "@id": `${SITE_URL}/#business` },
          description: founder.bio[0],
        }}
      />
    </>
  );
}
