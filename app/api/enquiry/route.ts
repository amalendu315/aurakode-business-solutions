import { NextResponse } from "next/server";

export const runtime = "nodejs";

const allowedServices = new Set([
  "Brand & identity",
  "Website or web app",
  "Business systems",
  "Visibility & growth",
]);

type InquiryInput = {
  name?: unknown;
  phone?: unknown;
  company?: unknown;
  email?: unknown;
  services?: unknown;
  message?: unknown;
  website?: unknown;
};

function clean(value: unknown, maxLength: number) {
  return typeof value === "string"
    ? value.replace(/\s+/g, " ").trim().slice(0, maxLength)
    : "";
}

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json({ error: "Invalid request format." }, { status: 415 });
  }

  let input: InquiryInput;
  try {
    const body = await request.text();
    if (body.length > 8000) {
      return NextResponse.json({ error: "Enquiry is too long." }, { status: 413 });
    }
    input = JSON.parse(body) as InquiryInput;
  } catch {
    return NextResponse.json({ error: "Invalid enquiry details." }, { status: 400 });
  }
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return NextResponse.json({ error: "Invalid enquiry details." }, { status: 400 });
  }

  // A hidden field catches simple automated submissions without charging the messaging account.
  if (clean(input.website, 100)) {
    return NextResponse.json({ error: "Invalid enquiry details." }, { status: 400 });
  }

  const name = clean(input.name, 80);
  const phone = clean(input.phone, 24);
  const company = clean(input.company, 100);
  const email = clean(input.email, 254);
  const message = clean(input.message, 600);
  const services = Array.isArray(input.services)
    ? input.services.filter((item): item is string => typeof item === "string" && allowedServices.has(item)).slice(0, 4)
    : [];
  const digits = phone.replace(/\D/g, "");

  if (!name || !message || digits.length < 8 || digits.length > 15 || (email && !/^\S+@\S+\.\S+$/.test(email))) {
    return NextResponse.json(
      { error: "Add your name, a valid phone number, and a short project note." },
      { status: 400 },
    );
  }

  const token = process.env.WHATSAPP_CLOUD_API_TOKEN;
  const senderId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const recipient = process.env.WHATSAPP_ENQUIRY_RECIPIENT;
  const templateName = process.env.WHATSAPP_ENQUIRY_TEMPLATE_NAME;
  const language = process.env.WHATSAPP_ENQUIRY_TEMPLATE_LANGUAGE || "en_US";
  const apiVersion = process.env.WHATSAPP_GRAPH_API_VERSION || "v27.0";

  if (!token || !senderId || !recipient || !templateName || !/^v\d+\.\d+$/.test(apiVersion)) {
    return NextResponse.json(
      { error: "Online enquiries are temporarily unavailable. Please contact us directly." },
      { status: 503 },
    );
  }

  const parameters = [
    name,
    phone,
    company || "Not provided",
    email || "Not provided",
    services.join(", ") || "Not sure yet",
    message,
  ].map((text) => ({ type: "text", text }));

  try {
    const response = await fetch(`https://graph.facebook.com/${apiVersion}/${encodeURIComponent(senderId)}/messages`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: recipient,
        type: "template",
        template: {
          name: templateName,
          language: { code: language },
          components: [{ type: "body", parameters }],
        },
      }),
      signal: AbortSignal.timeout(12000),
      cache: "no-store",
    });
    const result = await response.json() as { messages?: Array<{ id?: string }> };
    if (!response.ok || !result.messages?.[0]?.id) {
      return NextResponse.json(
        { error: "We couldn't submit your enquiry. Please try again or contact us directly." },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "We couldn't submit your enquiry. Please try again or contact us directly." },
      { status: 502 },
    );
  }
}
