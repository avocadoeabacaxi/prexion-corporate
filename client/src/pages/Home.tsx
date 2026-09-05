/**
 * Design philosophy: Precision in Motion — a cinematic institutional narrative where product, evidence and whitespace lead.
 */

import { ArrowDown, ArrowRight, ScanLine, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import { Link } from "wouter";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const featured = [products[0], products[2], products[5], products[6]];

export default function Home() {
  return (
    <main className="home-page">
      <section className="hero">
        <img className="hero__image" src="/manus-storage/prexion-hero_5d66a3d9.png" alt="Advanced PreXion dental imaging system in a precision studio" />
        <div className="hero__veil" />
        <div className="hero__grid" aria-hidden="true" />
        <div className="hero__content">
          <p className="eyebrow eyebrow--light hero-enter">Advanced dental imaging · Since 2007</p>
          <h1 className="hero-enter hero-enter--2">See beyond<br /><em>the image.</em></h1>
          <p className="hero__copy hero-enter hero-enter--3">
            Global engineering, clinically driven innovation and the clarity to make every diagnostic decision count.
          </p>
          <div className="hero__actions hero-enter hero-enter--4">
            <Link href="/product" className="button button--primary">Explore imaging systems <ArrowRight size={18} /></Link>
            <Link href="/contact" className="button button--ghost">Request a demo</Link>
          </div>
        </div>
        <div className="hero__rail">
          <span>CBCT</span><span>PAN</span><span>CEPH</span><span>INTRAORAL</span>
        </div>
        <a href="#proof" className="scroll-cue"><ArrowDown size={16} /> Scroll to discover</a>
      </section>

      <section id="proof" className="proof-strip">
        <div><strong>2007</strong><span>Technology origin</span></div>
        <div><strong>3</strong><span>Continents of innovation</span></div>
        <div><strong>360°</strong><span>Diagnostic perspective</span></div>
        <div><strong>1</strong><span>Commitment to clarity</span></div>
      </section>

      <section className="manifesto section-dark">
        <div className="section-index">01 / Our vision</div>
        <div className="manifesto__content">
          <p className="eyebrow eyebrow--light">Precision across borders</p>
          <h2>Built across continents.<br />Focused on <em>one outcome:</em> clarity.</h2>
          <div className="manifesto__body">
            <p>Born from advanced imaging research, shaped in the United States and strengthened by Alliage’s global engineering and manufacturing excellence in Brazil.</p>
            <p>PreXion translates technical rigor into images clinicians can trust — across endodontics, implantology, orthodontics and maxillofacial care.</p>
          </div>
          <Link href="/about" className="text-link">Discover our story <ArrowRight size={17} /></Link>
        </div>
        <figure className="manifesto__image">
          <img src="/manus-storage/prexion-engineering-official_b947229f.webp" alt="PreXion engineering center" />
          <figcaption><span>Global engineering</span><span>Continuous evolution</span></figcaption>
        </figure>
      </section>

      <section className="portfolio-section section-light">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / Imaging systems</p>
            <h2>One portfolio.<br /><em>Every level of vision.</em></h2>
          </div>
          <p>From ultra-high-resolution CBCT to fast intraoral acquisition, each system is designed around the clinical question it needs to answer.</p>
        </div>
        <div className="featured-grid">
          {featured.map((product, index) => <ProductCard key={product.slug} product={product} index={index + 1} />)}
        </div>
        <div className="center-action"><Link href="/product" className="button button--dark">View all products <ArrowRight size={18} /></Link></div>
      </section>

      <section className="technology-section section-dark">
        <div className="technology-visual">
          <img src="/manus-storage/prexion-diagnostic-official_d0f8cdb7.png" alt="High-detail dental diagnostic imaging" />
          <div className="technology-crosshair" aria-hidden="true"><span /><span /></div>
          <p>Diagnostic volume / reconstructed detail</p>
        </div>
        <div className="technology-copy">
          <p className="eyebrow eyebrow--light">03 / Technology</p>
          <h2><strong>Diagnostic evidence.</strong><br />Engineered, not inferred.</h2>
          <div className="tech-list">
            <div><span>01</span><ScanLine /><h3>Ultra HD acquisition</h3><p>Fine voxel resolution reveals structures that standard imaging can overlook.</p></div>
            <div><span>02</span><Workflow /><h3>PMC</h3><p>Patient Motion Correction preserves image quality and helps prevent unnecessary re-exposure.</p></div>
            <div><span>03</span><Sparkles /><h3>MAR</h3><p>Multi-level metal artifact reduction supports clearer interpretation around restorations and implants.</p></div>
            <div><span>04</span><ShieldCheck /><h3>Open workflow</h3><p>DICOM, STL and planning tools keep diagnosis connected to treatment.</p></div>
          </div>
        </div>
      </section>

      <section className="disciplines section-light">
        <div className="section-index">04 / Clinical applications</div>
        <div className="disciplines__intro">
          <p className="eyebrow">Made for demanding decisions</p>
          <h2>Clarity for every<br />clinical specialty.</h2>
        </div>
        <div className="discipline-list">
          {["Endodontics", "Implantology", "Orthodontics", "Periodontics", "Maxillofacial Surgery"].map((item, index) => (
            <Link href="/product" key={item}><span>0{index + 1}</span><strong>{item}</strong><ArrowRight /></Link>
          ))}
        </div>
      </section>

      <section className="support-preview">
        <div className="support-preview__image"><img src="/manus-storage/prexion-assembly-official_a540cc51.webp" alt="PreXion precision assembly" /></div>
        <div className="support-preview__content">
          <p className="eyebrow eyebrow--light">05 / Beyond the equipment</p>
          <h2>Technology performs better<br />when people feel supported.</h2>
          <p>Training, clinical education, remote assistance and product specialists are part of the PreXion experience from the first conversation forward.</p>
          <Link href="/support" className="button button--light">Explore education & support <ArrowRight size={18} /></Link>
        </div>
      </section>

      <section className="final-cta">
        <div className="final-cta__mark"><img src="/manus-storage/prexion-mark_46af8a5e.png" alt="" /></div>
        <p className="eyebrow">Ready to see the difference?</p>
        <h2>Precision belongs<br />in every decision.</h2>
        <Link href="/contact" className="button button--dark">Request a demonstration <ArrowRight size={18} /></Link>
      </section>
    </main>
  );
}
