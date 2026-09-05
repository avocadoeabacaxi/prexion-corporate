/**
 * Design philosophy: Precision in Motion — discreet navigation that becomes an opaque instrument panel on scroll.
 */

import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const navItems = [
  ["Products", "/products"],
  ["About", "/about"],
  ["Education & Support", "/support"],
  ["Contact", "/contact"],
] as const;

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <header className={`site-header ${scrolled || location !== "/" ? "site-header--solid" : ""}`}>
      <Link href="/" className="brand-link" aria-label="PreXion home">
        <img className="brand-logo" src="/manus-storage/prexion-logo_cd28b2e0.webp" alt="PreXion" />
      </Link>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map(([label, href]) => (
          <Link key={href} href={href} className={location === href ? "nav-link nav-link--active" : "nav-link"}>
            {label}
          </Link>
        ))}
      </nav>

      <div className="header-actions">
        <Link href="/contact" className="button button--compact button--light">
          Request a demo
        </Link>
        <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map(([label, href], index) => (
            <Link key={href} href={href} className="mobile-nav-link">
              <span>0{index + 1}</span>{label}
            </Link>
          ))}
          <a className="mobile-contact" href="tel:8557739466">855-PREXION</a>
        </nav>
      )}
    </header>
  );
}
