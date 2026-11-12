import { Star } from "lucide-react";
import { ratings } from "@/content/home";
import { GoogleIcon } from "./icons";

/** Google and Justdial rating badges, each linking to the full reviews. */
export default function RatingBadges({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap justify-center gap-3 ${className}`}>
      {ratings.map((r) => (
        <li key={r.platform}>
          <a
            href={r.href}
            target="_blank"
            rel="noopener noreferrer"
            className="lift inline-flex items-center gap-3 rounded-full border border-line bg-white py-2 pl-2 pr-5 hover:border-brand-200"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mist text-ink">
              {r.platform === "Google" ? <GoogleIcon className="h-5 w-5" /> : <span className="font-display text-sm font-bold text-brand-700">Jd</span>}
            </span>
            <span className="text-left leading-tight">
              <span className="flex items-center gap-1.5 font-display text-lg font-bold text-ink">
                {r.rating}
                <span className="flex text-brand-500" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                </span>
              </span>
              <span className="block text-xs text-ink-60">{r.count} {r.label}</span>
            </span>
            <span className="sr-only">{`Rated ${r.rating} out of 5 from ${r.count} ${r.label}`}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
