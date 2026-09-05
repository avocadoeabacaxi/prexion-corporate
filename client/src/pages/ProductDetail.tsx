/**
 * Design philosophy: Precision in Motion — every product story progresses from hero-scale presence to measurable evidence.
 */

import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";
import { getProduct } from "@/data/products";

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);

  if (!product) {
    return <main className="empty-state"><p className="eyebrow">Product not found</p><h1>The requested system is not available.</h1><Link href="/product" className="button button--dark"><ArrowLeft size={18} /> Back to products</Link></main>;
  }

  return (
    <main className="inner-page product-detail-page">
      <section className="product-hero">
        <div className="product-hero__copy">
          <Link href="/product" className="back-link"><ArrowLeft size={16} /> All products</Link>
          <p className="eyebrow eyebrow--light">{product.family} / {product.modality}</p>
          <h1>{product.name}</h1>
          <p>{product.summary}</p>
          <Link href="/contact" className="button button--primary">Request a demo <ArrowRight size={18} /></Link>
        </div>
        <div className="product-hero__visual">
          <div className="product-orbit" aria-hidden="true" />
          <img src={product.image} alt={product.name} />
          <div className="product-hero__metric"><strong>{product.heroMetric}</strong><span>{product.heroMetricLabel}</span></div>
        </div>
      </section>

      <section className="metric-band">
        {product.metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
      </section>

      <section className="product-story section-light">
        <div className="product-story__heading"><p className="eyebrow">Why this system</p><h2>Designed around the<br /><em>clinical question.</em></h2></div>
        <div className="highlight-grid">
          {product.highlights.map((highlight, index) => (
            <article key={highlight.title}><span>0{index + 1}</span><h3>{highlight.title}</h3><p>{highlight.copy}</p></article>
          ))}
        </div>
      </section>

      <section className="applications-section section-dark">
        <div><p className="eyebrow eyebrow--light">Clinical applications</p><h2>One system.<br /><em>Multiple perspectives.</em></h2></div>
        <div className="application-list">
          {product.applications.map((item) => <div key={item}><Check size={17} /><span>{item}</span></div>)}
        </div>
      </section>

      {product.fovs && (
        <section className="fov-section section-light">
          <p className="eyebrow">Fields of view</p>
          <h2>Capture only what<br /><em>the diagnosis requires.</em></h2>
          <div className="fov-grid">{product.fovs.map((fov) => <div key={fov}><span>{fov}</span><small>cm</small></div>)}</div>
        </section>
      )}

      <section className="product-cta">
        <p className="eyebrow eyebrow--light">Experience true clarity</p>
        <h2>See {product.name}<br /><em>in your workflow.</em></h2>
        <Link href="/contact" className="button button--light">Schedule a demonstration <ArrowRight size={18} /></Link>
      </section>
    </main>
  );
}
