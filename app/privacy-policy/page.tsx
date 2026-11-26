import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | AuraKode Business Solutions",
  description: "How AuraKode Business Solutions handles information shared through its website, email, WhatsApp and third-party website services.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: { title: "Privacy Policy | AuraKode", url: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return <main className="info-page" id="main-content"><section className="info-hero info-document-hero"><div className="site-shell"><span className="info-eyebrow">SITE INFORMATION</span><h1>Privacy policy.</h1><p>How information is handled when you visit aurakode.in or contact AuraKode Business Solutions.</p><small>Last updated: 27 November 2026</small></div></section><article className="site-shell info-document">
    <section><h2>Who we are</h2><p>AuraKode Business Solutions is based in Siliguri, West Bengal, India. For questions about this policy or information you have shared with us, email <a href="mailto:admin@aurakode.in">admin@aurakode.in</a>.</p></section>
    <section><h2>Information you choose to share</h2><p>If you email or message us on WhatsApp, we receive the information you choose to send, such as your name, contact details, business details and project brief. We use it to respond to you, discuss your enquiry and, if you decide to proceed, work with you on the project.</p><p>The website does not submit a contact form or store an enquiry in its own database. Sending a WhatsApp message or email takes you to that service, where its own privacy practices also apply.</p></section>
    <section><h2>Website data and third-party services</h2><p>Our hosting provider may process technical information such as your IP address and request logs to deliver and secure the website. The site loads Google Tag Manager, which can run measurement or advertising tags configured for this website. Those tags may use cookies or similar technologies depending on their configuration. Our Contact page also embeds a Google Map of Siliguri, which is loaded when that section is viewed.</p><p>You can manage cookies through your browser settings. You can also contact us to ask about the information we hold from your direct enquiry.</p></section>
    <section><h2>Sharing and retention</h2><p>We use service providers where needed for website hosting, email, messaging and measurement. We do not sell the project details you send us. We keep correspondence for as long as it is reasonably needed to handle your enquiry or project, meet applicable obligations, or resolve issues. You can ask us to review, correct or delete information you sent directly to us by emailing <a href="mailto:admin@aurakode.in">admin@aurakode.in</a>.</p></section>
    <section><h2>Changes to this policy</h2><p>We may update this page when our website tools or practices change. The date above shows when this version was published.</p></section>
  </article></main>;
}
