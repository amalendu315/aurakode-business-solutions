"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navigation = [
  { label: "Work", href: "/#real-work" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const update = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      const progress = available > 0 ? Math.min(1, window.scrollY / available) : 0;
      document.querySelector<HTMLElement>(".site-progress")?.style.setProperty("--progress", String(progress));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [menuOpen]);

  return <header className="site-header">
    <a className="site-skip" href="#main-content">Skip to main content</a>
    <div className="site-header-inner">
      <Link className="site-logo" href="/" onClick={() => setMenuOpen(false)} aria-label="AuraKode home">
        <Image src="/brand/aurakode-lockup.svg" alt="AuraKode Business Solutions" width={190} height={45} priority />
      </Link>
      <nav className="site-desktop-nav" aria-label="Main navigation">
        {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
      </nav>
      <Link className="site-header-cta" href="/contact">Start a project</Link>
      <button className="site-menu-button" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="site-mobile-nav" onClick={() => setMenuOpen((open) => !open)}>
        {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
      </button>
    </div>
    <div className="site-progress" aria-hidden="true" />
    {menuOpen && <nav id="site-mobile-nav" className="site-mobile-nav" aria-label="Mobile navigation">
      {navigation.map((item) => <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</Link>)}
      <Link href="/privacy-policy" onClick={() => setMenuOpen(false)}>Privacy policy</Link>
      <Link href="/terms-and-conditions" onClick={() => setMenuOpen(false)}>Terms & conditions</Link>
    </nav>}
  </header>;
}

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="site-shell site-footer-main">
      <div className="site-footer-brand"><Link href="/" aria-label="AuraKode home"><Image src="/brand/aurakode-lockup.svg" alt="AuraKode Business Solutions" width={190} height={45} /></Link><p>Based in Siliguri. Building brands, websites and growth across India, and welcoming international projects.</p></div>
      <div><strong>Explore</strong><Link href="/#real-work">Our work</Link><Link href="/#services">Services</Link><Link href="/about">About us</Link><Link href="/contact">Contact us</Link></div>
      <div><strong>Services</strong><Link href="/services/branding-siliguri">Branding</Link><Link href="/services/website-design-siliguri">Websites</Link><Link href="/services/seo-siliguri">SEO</Link></div>
      <div><strong>Information</strong><Link href="/privacy-policy">Privacy policy</Link><Link href="/terms-and-conditions">Terms & conditions</Link><a href="mailto:admin@aurakode.in">admin@aurakode.in</a></div>
    </div>
    <div className="site-shell site-footer-bottom"><span>© {new Date().getFullYear()} AuraKode Business Solutions</span><span>Based in Siliguri · Serving India · Open to international projects</span></div>
  </footer>;
}
