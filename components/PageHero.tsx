import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "./seo";
import { Container } from "./ui";

export default function PageHero({ crumbs, eyebrow, title, children }: { crumbs: Crumb[]; eyebrow?: string; title: string; children?: ReactNode }) {
  return (
    <section className="border-b border-line bg-mist pb-14 pt-32 lg:pb-20 lg:pt-40">
      <Container>
        <Breadcrumbs items={crumbs} />
        {eyebrow && <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700 animate-fade-up">{eyebrow}</p>}
        <h1 className={`${eyebrow ? "mt-3" : "mt-8"} max-w-4xl text-4xl font-bold leading-[1.1] text-ink sm:text-5xl animate-fade-up`}>{title}</h1>
        {children && <div className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-60 animate-fade-up" style={{ animationDelay: "100ms" }}>{children}</div>}
      </Container>
    </section>
  );
}
