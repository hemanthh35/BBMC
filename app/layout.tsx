import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import RevealObserver from "@/components/RevealObserver";
import { JsonLd, businessSchema, websiteSchema } from "@/components/seo";
import { SITE_URL } from "@/content/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", weight: ["500", "600", "700"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Architects, Builders & Vastu Consultants in Hyderabad | BBMC",
    template: "%s",
  },
  description:
    "BBMC, since 1995: builders, architects, structural engineers, interior designers & vastu consultants in Hyderabad & Telangana. 500+ projects.",
  applicationName: "BBMC – Balaji Benchmark Consultants",
  authors: [{ name: "Balaji Benchmark Consultants (BBMC)" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "BBMC – Balaji Benchmark Consultants",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  // Add your Search Console token: verification: { google: "..." },
};

export const viewport: Viewport = {
  themeColor: "#00a8e0",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${montserrat.variable}`} suppressHydrationWarning>
      <head>
        {/* Enables scroll-reveal styles only when JS runs, so content is never hidden without JS */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="pb-14 md:pb-0">
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingActions />
        <RevealObserver />
        <JsonLd data={businessSchema()} />
        <JsonLd data={websiteSchema()} />
      </body>
    </html>
  );
}
