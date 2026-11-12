import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import FaqList from "@/components/FaqList";
import { AboutSection, FounderSection, ServicesSection, WhyChooseSection } from "@/components/sections";
import { ArrowLink, Container, SectionHeading } from "@/components/ui";
import { contactIntro, homeFaqs, testimonialsIntro } from "@/content/home";
import { hyderabadLocations, telanganaLocations, zoneLocations } from "@/content/locations";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Architects & Vastu Consultants in Hyderabad, Telangana | BBMC",
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
            <SectionHeading eyebrow="Areas We Serve" title="Architects across Hyderabad & Telangana" text="We serve homeowners, landowners and businesses in every part of Hyderabad and Secunderabad, and in towns and cities across Telangana." />
            <div className="mt-6" data-reveal><ArrowLink href="/locations">All areas</ArrowLink></div>
          </div>
          <div className="space-y-10 lg:col-span-8">
            {[
              { title: "Hyderabad zones", items: zoneLocations },
              { title: "Hyderabad & Secunderabad", items: hyderabadLocations },
              { title: "Telangana", items: telanganaLocations },
            ].map((g) => (
              <div key={g.title} data-reveal>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-ink-40">{g.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((l) => (
                    <li key={l.slug}>
                      <Link href={`/${l.slug}`} className="inline-block rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink-80 transition-colors duration-200 hover:border-brand-500 hover:text-brand-700">
                        {l.area}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
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
