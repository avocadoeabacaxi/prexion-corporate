/**
 * Design philosophy: Precision in Motion — a quiet technical footer with clear operational contact paths.
 */

import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-orbit" aria-hidden="true" />
      <div className="footer-grid">
        <div className="footer-brand">
          <img src="/manus-storage/prexion-logo_cd28b2e0.webp" alt="PreXion" />
          <p>Advanced dental imaging engineered for diagnostic clarity.</p>
        </div>
        <div>
          <p className="footer-label">Explore</p>
          <Link href="/products">Imaging systems</Link>
          <Link href="/about">Our story</Link>
          <Link href="/support">Education & support</Link>
        </div>
        <div>
          <p className="footer-label">Connect</p>
          <a href="tel:8557739466">855-PREXION</a>
          <a href="tel:6502120314">Support: (650) 212-0314</a>
          <Link href="/contact">Find a specialist</Link>
        </div>
        <div className="footer-cta">
          <p className="footer-label">Start a conversation</p>
          <Link href="/contact">Request a demo <ArrowUpRight size={18} /></Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 PreXion Inc.</span>
        <span>Making IT Visible</span>
        <span>San Jose · Global engineering</span>
      </div>
    </footer>
  );
}
