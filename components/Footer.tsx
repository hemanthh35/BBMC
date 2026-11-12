import Image from "next/image";
import Link from "next/link";
import { services } from "@/content/services";
import { telanganaLocations } from "@/content/locations";
import { site } from "@/content/site";
import { FacebookIcon, GoogleIcon, InstagramIcon, YoutubeIcon } from "./icons";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/projects" },
  { label: "Why Us", href: "/about#why-us" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/#contact" },
];

export const socialLinks = [
  { label: "Facebook", href: site.social.facebook, Icon: FacebookIcon },
  { label: "Instagram", href: site.social.instagram, Icon: InstagramIcon },
  { label: "YouTube", href: site.social.youtube, Icon: YoutubeIcon },
  { label: "BBMC on Google", href: site.googleSearch, Icon: GoogleIcon },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <Image quality={90} src={site.logo} alt="BBMC Logo" width={896} height={670} sizes="120px" className="h-20 w-auto" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">{site.roles}</p>
          <address className="mt-6 not-italic text-sm leading-relaxed text-white/70">
            <strong className="block font-semibold text-white">{site.legalName}</strong>
            {site.address.lines.map((l) => (
              <span key={l} className="block">{l}</span>
            ))}
          </address>
          <ul className="mt-6 flex gap-2">
            {socialLinks.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors duration-200 hover:border-brand-500 hover:text-brand-500"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-white/50">Quick Links</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="link-underline text-white/75 hover:text-white">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-white/50">Services</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="link-underline text-white/75 hover:text-white">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-white/50">Contact Info</h2>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            {site.phones.map((p) => (
              <li key={p.tel}>
                <a href={`tel:${p.tel}`} className="link-underline hover:text-white">{p.display}</a>
              </li>
            ))}
            <li>
              <a href={`mailto:${site.email}`} className="link-underline hover:text-white">{site.email}</a>
            </li>
            <li>{site.hours.display}</li>
          </ul>
          <h2 className="mt-8 text-sm font-semibold uppercase tracking-widest text-white/50">Areas We Serve</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            All of Hyderabad &amp; Secunderabad, and{" "}
            {telanganaLocations.slice(0, 4).map((l, i) => (
              <span key={l.slug}>
                <Link href={`/${l.slug}`} className="link-underline hover:text-white">{l.area}</Link>
                {i < 3 ? ", " : ""}
              </span>
            ))}{" "}
            and across Telangana.
          </p>
          <Link href="/locations" className="link-underline mt-3 inline-block text-sm font-semibold text-brand-200 hover:text-white">All areas →</Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-white/50">Find BBMC online</h2>
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {site.listings.map((l) => (
              <li key={l.href}>
                <a href={l.href} target="_blank" rel="noopener noreferrer" className="link-underline text-white/75 hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-white/50 sm:flex-row sm:px-6 lg:px-8">
          <p>&copy; {new Date().getFullYear()} Balaji Benchmark Consultants (BBMC). All rights reserved.</p>
          <Link href="/privacy-policy" className="link-underline hover:text-white">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
