import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FaqList from "@/components/FaqList";
import { faqSchema, JsonLd } from "@/components/seo";
import { Container, CtaBand } from "@/components/ui";
import { homeFaqs } from "@/content/home";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "FAQ | Architects, Vastu & Construction Questions | BBMC",
  description: "Answers to common questions about BBMC's architecture, Vaasthu, structural, interior, construction and approval services across Hyderabad & Telangana.",
  alternates: { canonical: "/faq" },
  openGraph: { url: "/faq" },
};

export default function FaqPage() {
  const all = [...homeFaqs, ...services.flatMap((s) => s.faqs)];
  return (
    <>
      <PageHero crumbs={[{ name: "FAQ", href: "/faq" }]} eyebrow="FAQ" title="Frequently asked questions" />
      <section className="py-20">
        <Container className="max-w-4xl space-y-16">
          <div>
            <h2 className="mb-6 text-2xl font-bold text-ink">About BBMC</h2>
            <FaqList faqs={homeFaqs} schema={false} />
          </div>
          {services.map((s) => (
            <div key={s.slug}>
              <h2 className="mb-6 text-2xl font-bold text-ink">{s.title}</h2>
              <FaqList faqs={s.faqs} schema={false} />
            </div>
          ))}
        </Container>
      </section>
      <CtaBand />
      <JsonLd data={faqSchema(all)} />
    </>
  );
}
