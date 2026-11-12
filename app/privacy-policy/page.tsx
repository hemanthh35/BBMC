import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Container } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy | BBMC",
  description: "How Balaji Benchmark Consultants (BBMC) handles information you share with us.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "Privacy Policy", href: "/privacy-policy" }]} title="Privacy Policy" />
      <section className="py-16">
        <Container className="prose max-w-3xl prose-headings:font-display">
          <p>This website does not store the details you enter in the enquiry form. When you submit it, your message opens in WhatsApp and is sent to BBMC only if you choose to send it.</p>
          <h2>Information you share</h2>
          <p>When you call, email or message us, we use your name, phone number and project details only to respond to your enquiry and provide our services. We do not sell or share your information with third parties for marketing.</p>
          <h2>Analytics</h2>
          <p>We may use privacy-respecting analytics to understand how visitors use the website. This data is aggregated and does not identify you personally.</p>
          <h2>Contact</h2>
          <p>Questions about this policy: <a href={`mailto:${site.email}`}>{site.email}</a> or {site.phones[0].display}.</p>
        </Container>
      </section>
    </>
  );
}
