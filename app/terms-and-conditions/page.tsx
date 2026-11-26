import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | AuraKode Business Solutions",
  description: "Terms for using the AuraKode Business Solutions website and enquiring about our branding, website and growth services.",
  alternates: { canonical: "/terms-and-conditions" },
  openGraph: { title: "Terms & Conditions | AuraKode", url: "/terms-and-conditions" },
};

export default function TermsPage() {
  return <main className="info-page" id="main-content"><section className="info-hero info-document-hero"><div className="site-shell"><span className="info-eyebrow">SITE INFORMATION</span><h1>Terms &amp; conditions.</h1><p>Basic terms for using aurakode.in and contacting AuraKode Business Solutions.</p><small>Last updated: 27 November 2026</small></div></section><article className="site-shell info-document">
    <section><h2>Using this website</h2><p>You may use this website to learn about AuraKode Business Solutions, explore our services and portfolio, and contact us. Please do not misuse the site or attempt to interfere with its operation.</p></section>
    <section><h2>Information and project enquiries</h2><p>Website content describes our general services and approach. It is not a fixed offer, quotation or guarantee of a particular result. Sending an enquiry does not create a client relationship or obligation to undertake work. Any project scope, price, timeline, deliverables and terms will be agreed separately in writing.</p></section>
    <section><h2>Portfolio and external links</h2><p>Portfolio links lead to third-party websites that may change independently of this site. ConEquiparts and Online Parts are presented as freelance work at Techno Imagine. References to a project do not transfer ownership of that client&apos;s brand or website content to AuraKode.</p></section>
    <section><h2>Website content</h2><p>AuraKode&apos;s name, visual identity and original website content are presented for viewing and enquiry. Please ask before reusing them for another commercial purpose. Client names, logos and website content remain with their respective owners.</p></section>
    <section><h2>Updates and contact</h2><p>We may update this website and these terms. The date above shows when this version was published. For questions, email <a href="mailto:admin@aurakode.in">admin@aurakode.in</a>.</p></section>
  </article></main>;
}
