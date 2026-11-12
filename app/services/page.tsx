import type { Metadata } from "next";
import { defaultOgImage } from "@/content/site";
import PageHero from "@/components/PageHero";
import { ServicesSection } from "@/components/sections";
import { CtaBand } from "@/components/ui";
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
      <CtaBand />
    </>
  );
}
