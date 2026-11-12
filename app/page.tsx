import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import FaqList from "@/components/FaqList";
import { AboutSection, FounderSection, ServicesSection, WhyChooseSection } from "@/components/sections";
import { ArrowLink, Container, SectionHeading } from "@/components/ui";
import { contactIntro, homeFaqs, testimonialsIntro } from "@/content/home";
import { locations } from "@/content/locations";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Architects & Vastu Consultants in Boduppal, Uppal | BBMC",
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />

      <section id="portfolio" className="py-20 lg:py-28">
        <Container>
          <Portfolio />
          <div className="mt-10"><ArrowLink href="/projects">View all projects</ArrowLink></div>
        </Container>
      </section>

      <WhyChooseSection />
      <FounderSection />

      <section id="testimonials" className="py-20 lg:py-28">
        <Container>
          <SectionHeading align="center" eyebrow={testimonialsIntro.eyebrow} title={testimonialsIntro.title} text={testimonialsIntro.text} />
          <div className="mt-14"><Testimonials /></div>
        </Container>
      </section>

      <section className="bg-mist py-20 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Areas We Serve" title="Architects near you in East Hyderabad" text="From our office in Boduppal we serve homeowners, landowners and businesses across East Hyderabad." />
          </div>
          <ul className="grid content-start gap-x-8 sm:grid-cols-2 lg:col-span-8">
            {locations.map((l) => (
              <li key={l.slug} data-reveal>
                <Link href={`/${l.slug}`} className="group flex items-center justify-between border-b border-line py-4 font-display font-semibold text-ink transition-colors hover:text-brand-700">
                  Architects in {l.area}
                  <span className="text-ink-40 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
            <div className="mt-6" data-reveal><ArrowLink href="/faq">All FAQs</ArrowLink></div>
          </div>
          <div className="lg:col-span-8"><FaqList faqs={homeFaqs} /></div>
        </Container>
      </section>

      <section id="contact" className="border-t border-line py-20 lg:py-28">
        <Container>
          <SectionHeading eyebrow={contactIntro.eyebrow} title={contactIntro.title} text={contactIntro.text} />
          <div className="mt-12"><Contact /></div>
        </Container>
      </section>
    </>
  );
}
