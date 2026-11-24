"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";

const services = [
  "Brand identity",
  "Website or app",
  "Business systems",
  "Google Ads",
  "SEO",
  "Social media",
];
const budgetLabels: Record<string, string> = {
  "under-50k": "Under ₹50,000",
  "50k-1l": "₹50,000–₹1 lakh",
  "1l-3l": "₹1–3 lakh",
  "3l-plus": "₹3 lakh+",
  discuss: "Let's discuss",
};

export function LeadCapture() {
  const [selected, setSelected] = useState<string[]>([]);
  const [error, setError] = useState("");
  const toggle = (item: string) =>
    setSelected((previous) =>
      previous.includes(item)
        ? previous.filter((value) => value !== item)
        : [...previous, item],
    );

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const company = String(data.get("company") || "").trim();
    const message = String(data.get("message") || "").trim();
    const budget =
      budgetLabels[String(data.get("budget") || "")] || "Not specified";
    if (!name || !/^\S+@\S+\.\S+$/.test(email) || !message) {
      setError(
        "Please add your name, a valid email, and a short project note.",
      );
      return;
    }
    setError("");
    const inquiry = [
      "Hi AuraKode, I'd like a free growth audit.",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || "Not specified"}`,
      `Services: ${selected.length ? selected.join(", ") : "Not specified"}`,
      `Budget: ${budget}`,
      `Project: ${message}`,
    ].join("\n");
    window.open(whatsappUrl(inquiry), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="contact-layout">
        <div className="contact-copy">
          <span className="eyebrow">05 / LET&apos;S MAKE IT HAPPEN</span>
          <h2>
            Ready to build
            <br />
            <em>what&apos;s next?</em>
          </h2>
          <p>
            Tell us what you&apos;re working on. We&apos;ll start with a free
            growth audit and a practical conversation about where to go next.
          </p>
          <div className="contact-location">
            <span className="live-dot" />
            <div>
              <strong>Based in Siliguri</strong>
              <small>Working with ambitious businesses everywhere.</small>
            </div>
          </div>
          <a
            className="whatsapp-link"
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={20} /> Talk on WhatsApp <span>↗</span>
          </a>
        </div>
        <div className="contact-form-wrap">
          <form onSubmit={submit} noValidate>
            <span className="form-kicker">
              FREE GROWTH AUDIT / WHATSAPP ENQUIRY
            </span>
            <h3>Tell us about your project.</h3>
            <p className="form-setup-note">
              We&apos;ll prepare your message and open WhatsApp. Review it
              there, then press Send.
            </p>
            <div className="form-grid">
              <label>
                Your name{" "}
                <input
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  required
                />
              </label>
              <label>
                Work email{" "}
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  required
                />
              </label>
            </div>
            <label>
              Company{" "}
              <input
                name="company"
                type="text"
                autoComplete="organization"
                placeholder="Company or brand name"
              />
            </label>
            <fieldset>
              <legend>What can we help with?</legend>
              <div className="service-chips">
                {services.map((item) => (
                  <button
                    key={item}
                    type="button"
                    aria-pressed={selected.includes(item)}
                    className={selected.includes(item) ? "selected" : ""}
                    onClick={() => toggle(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </fieldset>
            <label>
              Estimated budget{" "}
              <select name="budget" defaultValue="">
                <option value="" disabled>
                  Select a range
                </option>
                <option value="under-50k">Under ₹50,000</option>
                <option value="50k-1l">₹50,000–₹1 lakh</option>
                <option value="1l-3l">₹1–3 lakh</option>
                <option value="3l-plus">₹3 lakh+</option>
                <option value="discuss">Let&apos;s discuss</option>
              </select>
            </label>
            <label>
              What are you looking to achieve?{" "}
              <textarea
                name="message"
                rows={4}
                placeholder="A little about your goals, timeline, or current challenge"
                required
              />
            </label>
            {error && (
              <p className="form-error" role="alert">
                {error}
              </p>
            )}
            <button className="button button-primary form-submit" type="submit">
              Continue to WhatsApp <span aria-hidden="true">↗</span>
            </button>
            <small className="form-footnote">
              Your enquiry is sent only after you press Send in WhatsApp.
            </small>
          </form>
        </div>
      </div>
    </section>
  );
}
