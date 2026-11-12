import type { Metadata } from "next";
import { defaultOgImage } from "@/content/site";
import PageHero from "@/components/PageHero";
import Portfolio from "@/components/Portfolio";
import { JsonLd } from "@/components/seo";
import { Container, CtaBand } from "@/components/ui";
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
