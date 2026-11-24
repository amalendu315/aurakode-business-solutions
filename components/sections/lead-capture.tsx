"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";

const services = ["Brand & identity", "Website or web app", "Business systems", "Visibility & growth"];

export function LeadCapture() {
  const [selected, setSelected] = useState<string[]>([]);
  const [error, setError] = useState("");

  const toggle = (service: string) => {
    setSelected((current) =>
      current.includes(service)
        ? current.filter((item) => item !== service)
        : [...current, service],
    );
  };

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const company = String(data.get("company") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !message || phone.replace(/\D/g, "").length < 8 || phone.replace(/\D/g, "").length > 15) {
      setError("Add your name, a valid phone number, and a short project note.");
      return;
    }
    if (email && !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Check your email address, or leave that field blank.");
      return;
    }

    setError("");
    const note = [
      "Hi AuraKode, I'd like to discuss a project.",
      `Name: ${name}`,
      `Phone: ${phone}`,
      company && `Business: ${company}`,
      email && `Email: ${email}`,
      selected.length && `Interested in: ${selected.join(", ")}`,
      `Project: ${message}`,
    ].filter(Boolean).join("\n");
    window.location.assign(whatsappUrl(note));
  };

  return (
    <form className="ah-contact-form" onSubmit={submit} noValidate>
      <div className="ah-form-head"><span>START A CONVERSATION</span><span>WHATSAPP ENQUIRY</span></div>
      <h3>Tell us what you&apos;re building.</h3>
      <p className="ah-form-intro">Tell us the essentials. We&apos;ll use your note to start a useful conversation.</p>
      <div className="ah-form-grid">
        <label>
          Your name <span aria-hidden="true">*</span>
          <input name="name" autoComplete="name" placeholder="Your name" required />
        </label>
        <label>
          Your phone number <span aria-hidden="true">*</span>
          <input name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="With country code" required />
        </label>
      </div>
      <label>
        Business name <small>optional</small>
        <input name="company" autoComplete="organization" placeholder="Your company or brand" />
      </label>
      <fieldset className="ah-service-picker">
        <legend>What might you need help with?</legend>
        <div className="ah-service-options">
          {services.map((service) => (
            <button key={service} type="button" aria-pressed={selected.includes(service)} onClick={() => toggle(service)}>
              {service}
            </button>
          ))}
        </div>
        <small>Choose any that fit, or leave this open.</small>
      </fieldset>
      <label>
        Your project in a few words <span aria-hidden="true">*</span>
        <textarea name="message" rows={4} placeholder="The goal, challenge, or idea on your mind" required />
      </label>
      <label>
        Work email <small>optional</small>
        <input name="email" type="email" autoComplete="email" placeholder="If email is easier for follow-up" />
      </label>
      {error && <p className="ah-form-error" role="alert">{error}</p>}
      <button type="submit" className="ah-button ah-button-dark">
        Continue to WhatsApp <MessageCircle size={18} />
      </button>
      <p className="ah-form-note">WhatsApp opens with your details filled in. Review the message and tap Send to contact us.</p>
      <p className="ah-form-alternative">Prefer to chat? <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Open WhatsApp directly</a></p>
    </form>
  );
}
