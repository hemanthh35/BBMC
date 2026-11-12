import type { Metadata } from "next";
import { defaultOgImage } from "@/content/site";
import PageHero from "@/components/PageHero";
import Portfolio from "@/components/Portfolio";
import { JsonLd } from "@/components/seo";
import { Container, CtaBand, ProseSection } from "@/components/ui";
import { interiors, projects } from "@/content/home";
import { SITE_URL } from "@/content/site";

export const metadata: Metadata = {
  title: "Projects & Portfolio | Architecture & Interiors | BBMC",
  description:
    "BBMC portfolio: residential towers, villas, apartments, commercial complexes, convention halls and interior designs across Hyderabad and Telangana.",
  alternates: { canonical: "/projects" },
  openGraph: { url: "/projects", images: [defaultOgImage] },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "Projects", href: "/projects" }]} eyebrow="Portfolio" title="Our Projects & Interior Designs">
        <p>500+ projects delivered since 1995, from independent homes and villas to residential towers, commercial complexes and convention halls.</p>
      </PageHero>
      <section className="py-20"><Container><Portfolio showAll /></Container></section>
      <ProseSection
        muted
        title="Three decades of building across Telangana"
        paragraphs={[
          "Since 1995 BBMC has designed and built more than 500 projects for over 3,000 clients. The work shown here is a selection: residential towers and apartment complexes, independent houses and duplex villas, mixed-use and commercial buildings, a convention hall, and interiors for homes, cafes and restaurants.",
          "Every project is designed in-house by our architects and structural engineers, with Vaasthu built into the plan from the start. Many of our clients come to us for one service and return for the next: a house plan, then interiors, then a second building.",
        ]}
        list={[
          "Residential: independent houses, duplex villas, apartments and residential towers",
          "Commercial: retail complexes, offices and mixed-use buildings",
          "Hospitality and events: convention halls, cafes and restaurants",
          "Interiors: living rooms, kitchens, bedrooms, staircases and foyers",
        ]}
      />
      <CtaBand />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          name: "BBMC Projects",
          url: `${SITE_URL}/projects`,
          author: { "@id": `${SITE_URL}/#business` },
          image: [...projects, ...interiors].map((p) => ({ "@type": "ImageObject", contentUrl: `${SITE_URL}${p.image}`, name: p.title, description: p.alt })),
        }}
      />
    </>
  );
}
