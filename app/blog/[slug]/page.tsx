import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { JsonLd } from "@/components/seo";
import { Container, CtaBand } from "@/components/ui";
import { getPost, posts } from "@/content/blog";
import { SITE_URL } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getPost((await params).slug);
  if (!p) return {};
  const url = `/blog/${p.slug}`;
  return {
    title: `${p.title} | BBMC`,
    description: p.description,
    alternates: { canonical: url },
    openGraph: { type: "article", url, title: p.title, description: p.description, publishedTime: p.date, images: [p.image] },
  };
}

export default async function PostPage({ params }: Props) {
  const p = getPost((await params).slug);
  if (!p) notFound();

  return (
    <>
      <PageHero crumbs={[{ name: "Blog", href: "/blog" }, { name: p.title, href: `/blog/${p.slug}` }]} title={p.title}>
        <p>{p.description}</p>
        <time dateTime={p.date} className="mt-4 block text-sm text-ink-40">
          By BBMC · {new Date(p.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
        </time>
      </PageHero>
      <article className="py-16 lg:py-20">
        <Container className="max-w-3xl">
          <div className="relative mb-12 aspect-[16/9] overflow-hidden rounded-lg bg-mist">
            <Image src={p.image} alt={p.title} fill priority sizes="(min-width:768px) 48rem, 100vw" className="object-cover" />
          </div>
          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-ink prose-p:text-ink-80 prose-li:text-ink-80 prose-li:marker:text-brand-600">
            {p.sections.map((s) => (
              <section key={s.heading}>
                <h2>{s.heading}</h2>
                {s.body.map((b) => <p key={b}>{b}</p>)}
                {s.list && <ul>{s.list.map((li) => <li key={li}>{li}</li>)}</ul>}
              </section>
            ))}
          </div>
        </Container>
      </article>
      <CtaBand />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: p.title,
          description: p.description,
          image: `${SITE_URL}${p.image}`,
          datePublished: p.date,
          dateModified: p.date,
          mainEntityOfPage: `${SITE_URL}/blog/${p.slug}`,
          author: { "@id": `${SITE_URL}/#business` },
          publisher: { "@id": `${SITE_URL}/#business` },
        }}
      />
    </>
  );
}
