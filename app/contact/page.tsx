import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import { Container } from "@/components/ui";
import { contactIntro } from "@/content/home";

export const metadata: Metadata = {
  title: "Contact BBMC | Architects in Boduppal, Hyderabad | +91 93910 36765",
  description:
    "Contact Balaji Benchmark Consultants (BBMC), Srinagar Colony, Boduppal, Hyderabad – 500092. Call +91 93910 36765 or WhatsApp for a free consultation.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "Contact", href: "/contact" }]} eyebrow={contactIntro.eyebrow} title={contactIntro.title}>
        <p>{contactIntro.text}</p>
      </PageHero>
      <section className="py-20"><Container><Contact /></Container></section>
    </>
  );
}
