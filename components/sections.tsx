import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { about, founder, servicesIntro, whyChoose } from "@/content/home";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { Container, SectionHeading } from "./ui";

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <Container className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SectionHeading eyebrow={about.eyebrow} title={about.title} />
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-60" data-reveal>
            {about.paragraphs.map((p) => <p key={p}>{p}</p>)}
          </div>
          <ul className="mt-8 flex flex-wrap gap-2" data-reveal>
            {about.tags.map((t) => (
              <li key={t} className="rounded-full border border-line px-4 py-1.5 text-sm text-ink-80">{t}</li>
            ))}
          </ul>
        </div>
        <dl className="grid grid-cols-2 self-center border-l border-t border-line lg:col-span-5">
          {site.stats.map((s, i) => (
            <div key={s.value} className="border-b border-r border-line p-6 sm:p-8" data-reveal style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}>
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block font-display text-2xl font-bold text-ink sm:text-3xl">{s.value}</span>
                <span className="mt-1 block text-sm text-ink-60">{s.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

export function ServicesSection({ heading = true }: { heading?: boolean }) {
  return (
    <section id="services" className="bg-mist py-20 lg:py-28">
      <Container>
        {heading && <SectionHeading eyebrow={servicesIntro.eyebrow} title={servicesIntro.title} text={servicesIntro.text} />}
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <li key={s.slug} data-reveal style={{ ["--reveal-delay" as string]: `${(i % 3) * 80}ms` }}>
              <Link
                href={`/services/${s.slug}`}
                className="lift zoom group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white hover:border-brand-200"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-mist">
                  <Image src={s.image} alt={s.imageAlt} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 font-display text-xs font-semibold text-brand-700">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-semibold text-ink transition-colors duration-200 group-hover:text-brand-700">{s.title}</h3>
                  <p className="mt-2 flex-1 leading-relaxed text-ink-60">{s.short}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                    Learn more
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function WhyChooseSection() {
  return (
    <section id="why-us" className="py-20 lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading eyebrow={whyChoose.eyebrow} title={whyChoose.title} text={whyChoose.text} />
          </div>
        </div>
        <ul className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
          {whyChoose.items.map((u, i) => (
            <li key={u.title} className="border-t border-line py-7" data-reveal style={{ ["--reveal-delay" as string]: `${(i % 2) * 80}ms` }}>
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                <h3 className="font-display text-lg font-semibold text-ink">{u.title}</h3>
              </div>
              <p className="mt-3 leading-relaxed text-ink-60">{u.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function FounderSection() {
  return (
    <section id="founder" className="bg-mist py-20 lg:py-28">
      <Container>
        <SectionHeading eyebrow={founder.eyebrow} title={founder.title} text={founder.text} />
        <div className="mt-12 grid items-start gap-12 lg:grid-cols-12">
          <figure className="lg:col-span-5" data-reveal>
            <div className="zoom relative aspect-[617/900] max-w-md overflow-hidden rounded-lg bg-white">
              <Image src={site.founder.image} alt="Er. Paspunoori Srinivas Gupta - Founder & MD of BBMC" fill sizes="(min-width:1024px) 28rem, 100vw" className="object-cover" />
            </div>
            <figcaption className="mt-5">
              <h3 className="font-display text-xl font-bold text-ink">{site.founder.name}</h3>
              <p className="mt-1 font-medium text-brand-700">{site.founder.role}</p>
              <p className="text-ink-60">{site.founder.subRole}</p>
            </figcaption>
          </figure>
          <div className="lg:col-span-7" data-reveal style={{ ["--reveal-delay" as string]: "120ms" }}>
            <blockquote className="border-l-2 border-brand-500 pl-6 font-display text-2xl font-medium italic leading-snug text-ink sm:text-3xl">
              &ldquo;{founder.quote}&rdquo;
            </blockquote>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-60">
              {founder.bio.map((p) => <p key={p}>{p}</p>)}
            </div>
            <ul className="mt-8 flex flex-wrap gap-2">
              {founder.badges.map((b) => (
                <li key={b} className="rounded-full border border-line bg-white px-4 py-1.5 text-sm text-ink-80">{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
