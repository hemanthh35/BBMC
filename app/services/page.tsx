import type { Metadata } from "next";
import { defaultOgImage } from "@/content/site";
import PageHero from "@/components/PageHero";
import { ServicesSection } from "@/components/sections";
import { CtaBand, ProseSection } from "@/components/ui";
import { servicesIntro } from "@/content/home";

export const metadata: Metadata = {
  title: "Architecture, Vastu, Interior & Construction Services | BBMC",
  description:
    "BBMC services across Hyderabad & Telangana: architecture, structural engineering, interiors, Vaasthu, construction, estimates, surveying and approvals.",
  alternates: { canonical: "/services" },
  openGraph: { url: "/services", images: [defaultOgImage] },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "Services", href: "/services" }]} eyebrow={servicesIntro.eyebrow} title={servicesIntro.title}>
        <p>{servicesIntro.text}</p>
      </PageHero>
      <ServicesSection heading={false} />
      <ProseSection
        title="One firm for design, engineering and construction"
        paragraphs={[
          "Most building projects involve an architect, a structural engineer, a Vaasthu consultant, an interior designer and a contractor, often from different firms. Every handover between them is a chance for mistakes, delays and extra cost. At BBMC all of these work together under one roof, led by Er. Paspunoori Srinivas Gupta, who founded the firm in 1995.",
          "You can engage us for the complete project, from plot selection and plans to construction and interiors, or for a single service such as a Vaasthu review, an elevation, a bank estimate or structural drawings. Either way, you work with one team that understands the whole building.",
        ]}
        list={[
          "Homes: independent houses, duplexes, villas and G+1 to G+5 buildings",
          "Commercial: shops, offices, showrooms, complexes and convention halls",
          "Institutional and industrial buildings",
          "Interiors for homes, offices, cafes and restaurants",
        ]}
      />
      <ProseSection
        muted
        title="Serving Hyderabad and Telangana"
        paragraphs={[
          "From our office in Boduppal we serve clients across Hyderabad and Secunderabad, from Gachibowli, Kokapet and Tellapur in the west to Kompally in the north, Uppal and Ghatkesar in the east and Shamshabad in the south, as well as towns across Telangana such as Warangal, Karimnagar and Nizamabad. Call or WhatsApp us to discuss your project and arrange a site visit.",
        ]}
      />
      <CtaBand />
    </>
  );
}
