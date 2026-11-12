import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { site, whatsappLink } from "@/content/site";
import { WhatsAppIcon } from "./icons";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  as: Tag = "h2",
  id,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  id?: string;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} data-reveal>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">{eyebrow}</p>
      )}
      <Tag id={id} className="text-3xl font-bold leading-tight text-ink sm:text-4xl">
        {title}
      </Tag>
      {text && <p className="mt-4 text-lg leading-relaxed text-ink-60">{text}</p>}
    </div>
  );
}

export function CallButton({ className = "", label = "Call Now" }: { className?: string; label?: string }) {
  return (
    <a
      href={`tel:${site.phones[0].tel}`}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-500 px-7 font-semibold text-white transition-colors duration-200 hover:bg-brand-600 ${className}`}
    >
      <Phone className="h-5 w-5" aria-hidden="true" />
      {label}
    </a>
  );
}

export function WhatsAppButton({ className = "", text }: { className?: string; text?: string }) {
  return (
    <a
      href={whatsappLink(text)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-current px-7 font-semibold transition-colors duration-200 ${className}`}
    >
      <WhatsAppIcon className="h-5 w-5" />
      WhatsApp
    </a>
  );
}

export function ArrowLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link href={href} className={`group inline-flex items-center gap-2 font-semibold text-brand-700 ${className}`}>
      <span className="link-underline">{children}</span>
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
    </Link>
  );
}

export function CtaBand({ title, text }: { title?: string; text?: string }) {
  return (
    <section className="bg-ink text-white">
      <Container className="flex flex-col items-start justify-between gap-8 py-16 lg:flex-row lg:items-center">
        <div className="max-w-2xl" data-reveal>
          <h2 className="text-2xl font-bold sm:text-3xl">{title ?? "Ready to start your project?"}</h2>
          <p className="mt-3 text-white/70">
            {text ?? "Reach out to us for a free consultation and let's build your dream together."}
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row" data-reveal>
          <CallButton />
          <WhatsAppButton className="text-white hover:bg-white hover:text-ink" />
        </div>
      </Container>
    </section>
  );
}

/** Simple long-form text block used to add explanatory content to list pages. */
export function ProseSection({ title, paragraphs, list, muted = false }: { title: string; paragraphs: string[]; list?: string[]; muted?: boolean }) {
  return (
    <section className={`py-16 lg:py-20 ${muted ? "bg-mist" : ""}`}>
      <Container className="max-w-3xl" >
        <div data-reveal>
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">{title}</h2>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink-80">
            {paragraphs.map((p) => <p key={p}>{p}</p>)}
          </div>
          {list && (
            <ul className="mt-5 list-disc space-y-2 pl-6 text-ink-80 marker:text-brand-600">
              {list.map((l) => <li key={l}>{l}</li>)}
            </ul>
          )}
        </div>
      </Container>
    </section>
  );
}
