"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [{ label: "Systems", href: "#systems" }, { label: "Services", href: "#services" }, { label: "Process", href: "#process" }, { label: "Work", href: "#work" }];
export function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><a className="skip-link" href="#main-content">Skip to main content</a><nav className="nav-shell" aria-label="Main navigation"><a href="#top" className="logo" aria-label="AuraKode Business Solutions home"><span className="logo-mark">a<span>·</span>k</span><span className="logo-name">AURAKODE<small>BUSINESS SOLUTIONS</small></span></a><div className="desktop-nav">{links.map(link=><a key={link.href} href={link.href}>{link.label}</a>)}</div><a href="#contact" className="nav-cta">Free Growth Audit</a><button className="menu-toggle" type="button" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>{open ? <X/> : <Menu/>}</button></nav>{open && <div id="mobile-menu" className="mobile-menu">{links.map(link=><a key={link.href} href={link.href} onClick={()=>setOpen(false)}>{link.label}</a>)}<a href="#contact" onClick={()=>setOpen(false)}>Free Growth Audit</a></div>}</header>;
}
