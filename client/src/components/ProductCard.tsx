/**
 * Design philosophy: Precision in Motion — product cards read like technical editorial plates, not generic tiles.
 */

import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import type { Product } from "@/data/products";

export default function ProductCard({ product, index = 1 }: { product: Product; index?: number }) {
  return (
    <article className="product-card">
      <div className="product-card__meta">
        <span>{String(index).padStart(2, "0")}</span>
        <span>{product.family}</span>
        <span>{product.modality}</span>
      </div>
      <div className="product-card__visual">
        <div className="scan-line" />
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-card__content">
        <div>
          <p className="eyebrow">{product.eyebrow}</p>
          <h3>{product.name}</h3>
          <p>{product.summary}</p>
        </div>
        <Link href={`/product/${product.slug}`} className="circle-link" aria-label={`View ${product.name}`}>
          <ArrowUpRight size={22} />
        </Link>
      </div>
    </article>
  );
}
