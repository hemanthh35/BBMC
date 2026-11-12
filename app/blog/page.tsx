import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Container } from "@/components/ui";
import { posts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog: Vastu, House Plans & Construction Guides | BBMC",
  description: "Practical guides on Vastu, house plans, building permission, construction costs and bank loan estimates from BBMC architects in Hyderabad.",
  alternates: { canonical: "/blog" },
  openGraph: { url: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "Blog", href: "/blog" }]} eyebrow="Blog" title="Guides on Vastu, design and construction">
        <p>Straightforward advice from three decades of designing and building in Hyderabad.</p>
      </PageHero>
      <section className="py-20">
        <Container>
          <ul className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <li key={p.slug} data-reveal>
                <Link href={`/blog/${p.slug}`} className="zoom group block">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-mist">
                    <Image quality={90} src={p.image} alt="" fill sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw" className="object-cover" />
                  </div>
                  <time dateTime={p.date} className="mt-5 block text-sm text-ink-40">
                    {new Date(p.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                  </time>
                  <h2 className="mt-2 font-display text-xl font-bold leading-snug text-ink transition-colors group-hover:text-brand-700">{p.title}</h2>
                  <p className="mt-2 line-clamp-3 text-ink-60">{p.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
