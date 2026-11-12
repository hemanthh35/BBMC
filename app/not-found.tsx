import Link from "next/link";
import { services } from "@/content/services";
import { Container } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="pb-24 pt-40">
      <Container className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">404</p>
        <h1 className="mt-3 text-4xl font-bold text-ink">Page not found</h1>
        <p className="mt-4 text-lg text-ink-60">The page you&apos;re looking for doesn&apos;t exist. Try one of our services:</p>
        <ul className="mt-8 divide-y divide-line border-y border-line">
          {services.map((s) => (
            <li key={s.slug}><Link href={`/services/${s.slug}`} className="block py-3 font-semibold text-ink hover:text-brand-700">{s.title}</Link></li>
          ))}
        </ul>
        <Link href="/" className="mt-8 inline-block font-semibold text-brand-700">← Back to home</Link>
      </Container>
    </section>
  );
}
