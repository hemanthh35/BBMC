import type { Metadata } from "next";
import { defaultOgImage } from "@/content/site";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import FaqList from "@/components/FaqList";
import { AboutSection, FounderSection, ProcessSection, ServicesSection, WhyChooseSection } from "@/components/sections";
import { ArrowLink, Container, SectionHeading } from "@/components/ui";
import { contactIntro, homeFaqs, testimonialsIntro } from "@/content/home";
import { hyderabadLocations, telanganaLocations, zoneLocations } from "@/content/locations";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Architects, Builders & Vastu Consultants in Hyderabad | BBMC",
  alternates: { canonical: "/" },
  openGraph: { url: "/", images: [defaultOgImage] },
};

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />

      <section id="portfolio" className="border-t border-line py-20 lg:py-28">
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
          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {zoneLocations.map((z) => (
              <li key={z.slug} data-reveal>
                <Link href={`/${z.slug}`} className="lift group flex h-full flex-col rounded-xl border border-line bg-white p-5 hover:border-brand-200">
                  <span className="font-display font-semibold text-ink transition-colors group-hover:text-brand-700">{z.area.split(" (")[0]}</span>
                  <span className="mt-1 text-sm text-ink-60">{z.area.match(/\((.*)\)/)?.[1]}</span>
                  <span className="mt-3 text-xs font-semibold text-brand-700">{z.areas?.length} neighbourhoods →</span>
                </Link>
              </li>
            ))}
            <li className="sm:col-span-2 text-sm text-ink-60" data-reveal>
              Also serving {telanganaLocations.slice(0, 5).map((t) => t.area).join(", ")} and more across Telangana. {hyderabadLocations.length > 0 && null}
            </li>
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
