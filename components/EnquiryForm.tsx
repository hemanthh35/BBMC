"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { services } from "@/content/services";
import { whatsappLink } from "@/content/site";

/** Sends the enquiry to BBMC's WhatsApp (no backend needed). */
export default function EnquiryForm() {
  const [error, setError] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") ?? "").trim();
    const phone = String(f.get("phone") ?? "").trim();
    if (!name || !/^[0-9+\s-]{10,15}$/.test(phone)) {
      setError("Please enter your name and a valid phone number.");
      return;
    }
    setError("");
    const msg = [
      "Hi BBMC, I would like to inquire about your services.",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Service: ${f.get("service")}`,
      f.get("location") ? `Location: ${f.get("location")}` : "",
      f.get("message") ? `Details: ${f.get("message")}` : "",
    ].filter(Boolean).join("\n");
    window.open(whatsappLink(msg), "_blank", "noopener");
  };

  const field = "mt-1.5 w-full rounded-md border border-line bg-white px-3.5 py-3 text-ink placeholder:text-ink-40 transition-colors duration-200 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100";

  return (
    <form onSubmit={onSubmit} className="rounded-lg border border-line p-6 sm:p-8" noValidate aria-labelledby="enquiry-title">
      <h3 id="enquiry-title" className="text-xl font-bold text-ink">Get a Consultation</h3>
      <p className="mt-1 text-sm text-ink-60">Send your details and we&apos;ll reply on WhatsApp.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-ink">Name<input name="name" required autoComplete="name" className={field} /></label>
        <label className="text-sm font-medium text-ink">Phone<input name="phone" type="tel" required autoComplete="tel" inputMode="tel" className={field} /></label>
        <label className="text-sm font-medium text-ink">Service
          <select name="service" className={field} defaultValue={services[0].title}>
            {services.map((s) => <option key={s.slug}>{s.title}</option>)}
          </select>
        </label>
        <label className="text-sm font-medium text-ink">Plot location<input name="location" placeholder="e.g. Boduppal" className={field} /></label>
        <label className="text-sm font-medium text-ink sm:col-span-2">Message<textarea name="message" rows={3} placeholder="Plot size, facing, requirements…" className={field} /></label>
      </div>
      {error && <p role="alert" className="mt-4 text-sm font-medium text-ink">{error}</p>}
      <button type="submit" className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-ink px-7 font-semibold text-white transition-colors duration-200 hover:bg-brand-600 sm:w-auto">
        <Send className="h-4 w-4" aria-hidden="true" /> Send Enquiry
      </button>
    </form>
  );
}
