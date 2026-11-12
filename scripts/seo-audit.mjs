// Crawls every URL in the sitemap of a running site and reports common SEO problems.
// Usage: node scripts/seo-audit.mjs http://localhost:3000
const base = (process.argv[2] ?? "http://localhost:3000").replace(/\/$/, "");
const SITE = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://balaji-benchmark-consultants-bbmc.onrender.com").replace(/\/$/, "");

const xml = await (await fetch(`${base}/sitemap.xml`)).text();
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(SITE, base));
const robots = await (await fetch(`${base}/robots.txt`)).text();

const strip = (s) => s.replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').trim();
const issues = [];
const titles = new Map();
const descs = new Map();
const internalLinks = new Set();
let totalWords = 0;
const thin = [];

for (const url of urls) {
  const res = await fetch(url);
  const path = url.replace(base, "") || "/";
  if (res.status !== 200) { issues.push([path, `HTTP ${res.status}`]); continue; }
  const html = await res.text();
  const title = strip(html.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? "");
  const desc = strip(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "");
  const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1] ?? "";
  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => strip(m[1]));
  const ogImage = /property="og:image"/.test(html);
  const lds = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  const imgsNoAlt = [...html.matchAll(/<img(?![^>]*\balt=)[^>]*>/g)].length;
  const body = strip(html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<header[\s\S]*?<\/header>|<footer[\s\S]*?<\/footer>/g, " "));
  const words = body.split(/\s+/).filter(Boolean).length;
  totalWords += words;

  if (!title) issues.push([path, "missing <title>"]);
  else if (title.length > 65) issues.push([path, `title ${title.length} chars (>65): ${title}`]);
  if (!desc) issues.push([path, "missing meta description"]);
  else if (desc.length > 165) issues.push([path, `description ${desc.length} chars (>165)`]);
  else if (desc.length < 70) issues.push([path, `description only ${desc.length} chars`]);
  if (h1s.length !== 1) issues.push([path, `${h1s.length} <h1> tags`]);
  if (!canonical) issues.push([path, "missing canonical"]);
  else if (canonical.replace(SITE, "") !== (path === "/" ? "" : path) && canonical !== `${SITE}/`) issues.push([path, `canonical points elsewhere: ${canonical}`]);
  if (!ogImage) issues.push([path, "no og:image"]);
  if (imgsNoAlt) issues.push([path, `${imgsNoAlt} <img> without alt`]);
  for (const [, j] of lds) { try { JSON.parse(j); } catch { issues.push([path, "invalid JSON-LD"]); } }
  if (words < 300 && !/privacy|faq/.test(path)) thin.push(`${path} (${words} words)`);

  titles.set(title, [...(titles.get(title) ?? []), path]);
  descs.set(desc, [...(descs.get(desc) ?? []), path]);
  for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) if (!m[1].startsWith("/_next") && !/\.(png|webp|ico|xml|txt)$/.test(m[1])) internalLinks.add(m[1]);
}

for (const [t, p] of titles) if (p.length > 1) issues.push([p.join(", "), `duplicate title: ${t}`]);
for (const [d, p] of descs) if (d && p.length > 1) issues.push([p.join(", "), "duplicate meta description"]);

const broken = [];
for (const l of internalLinks) { const r = await fetch(base + l); if (r.status !== 200) broken.push(`${l} -> ${r.status}`); }
const notInSitemap = [...internalLinks].filter((l) => !urls.some((u) => u.replace(base, "") === l || (l === "/" && u === `${base}/`)));

console.log(`Pages in sitemap: ${urls.length}`);
console.log(`robots.txt: ${robots.includes("Sitemap:") ? "OK, references sitemap" : "does NOT reference sitemap"}; ${/Disallow: \/\s*$/m.test(robots) ? "BLOCKS ALL" : "allows crawling"}`);
console.log(`Internal links checked: ${internalLinks.size}, broken: ${broken.length}`);
broken.forEach((b) => console.log("  BROKEN", b));
if (notInSitemap.length) console.log("Linked but not in sitemap:", notInSitemap.join(" "));
console.log(`Average words per page (main content): ${Math.round(totalWords / urls.length)}`);
if (thin.length) console.log(`Thin pages (<300 words): ${thin.length}\n  ${thin.join("\n  ")}`);
console.log(`\nIssues: ${issues.length}`);
for (const [p, i] of issues) console.log(`  ${p}: ${i}`);
