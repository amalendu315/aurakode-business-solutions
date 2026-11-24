"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";

const services = ["Brand & identity", "Website or web app", "Business systems", "Visibility & growth"];

export function LeadCapture() {
  const [selected, setSelected] = useState<string[]>([]);
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  useEffect(() => {
    if (status !== "sent") return;
    const timer = window.setTimeout(() => setStatus("idle"), 8000);
    return () => window.clearTimeout(timer);
  }, [status]);

  const toggle = (service: string) => {
    setSelected((current) =>
      current.includes(service)
        ? current.filter((item) => item !== service)
        : [...current, service],
    );
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;
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
    setStatus("sending");
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, company, email, services: selected, message, website: data.get("website") }),
      });
      const result = await response.json() as { ok?: boolean; error?: string };
      if (!response.ok || !result.ok) {
        throw new Error(result.error || "We couldn't submit your enquiry. Please try again.");
      }
      form.reset();
      setSelected([]);
      setStatus("sent");
    } catch (reason) {
      setStatus("idle");
      setError(reason instanceof Error ? reason.message : "We couldn't submit your enquiry. Please try again.");
    }
  };

  return (
    <form className="ah-contact-form" onSubmit={submit} noValidate>
      <div className="ah-form-head"><span>START A CONVERSATION</span><span>DIRECT ENQUIRY</span></div>
      <h3>Tell us what you&apos;re building.</h3>
      <p className="ah-form-intro">A few details help us start with the right questions.</p>
      <div className="ah-form-grid">
        <label>
          Your name <span aria-hidden="true">*</span>
          <input name="name" autoComplete="name" placeholder="What should we call you?" required />
        </label>
        <label>
          Your phone number <span aria-hidden="true">*</span>
          <input name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="Include your country code" required />
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
      <div className="ah-form-honeypot" aria-hidden="true">
        <label>Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      {error && <p className="ah-form-error" role="alert">{error}</p>}
      <button type="submit" className="ah-button ah-button-dark" disabled={status === "sending"}>
        {status === "sending" ? "Submitting enquiry…" : "Send enquiry"} <MessageCircle size={18} />
      </button>
      <p className="ah-form-note">Your details are sent to AuraKode through WhatsApp so we can follow up. You won&apos;t leave this page.</p>
      <p className="ah-form-alternative">Prefer to chat? <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Open WhatsApp directly</a></p>
      {status === "sent" && (
        <div className="ah-enquiry-toast" role="status">
          <strong>Enquiry submitted</strong>
          <span>Thanks for reaching out. We&apos;ll be in touch soon.</span>
        </div>
      )}
    </form>
  );
}
