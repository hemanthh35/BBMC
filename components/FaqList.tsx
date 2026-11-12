import { Plus } from "lucide-react";
import type { Faq } from "@/content/services";
import { JsonLd, faqSchema } from "./seo";

export default function FaqList({ faqs, schema = true }: { faqs: Faq[]; schema?: boolean }) {
  return (
    <>
      <div className="divide-y divide-line border-y border-line">
        {faqs.map((f, i) => (
          <details key={f.q} className="group py-1" data-reveal style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}>
            <summary className="flex items-start justify-between gap-6 py-5 font-display text-lg font-semibold text-ink transition-colors duration-200 hover:text-brand-700">
              {f.q}
              <Plus className="faq-icon mt-1 h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
            </summary>
            <p className="pb-6 pr-10 leading-relaxed text-ink-60">{f.a}</p>
          </details>
        ))}
      </div>
      {schema && <JsonLd data={faqSchema(faqs)} />}
    </>
  );
}
