/**
 * Design philosophy: Precision in Motion — product cards read like technical editorial plates, not generic tiles.
 */

import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import type { Product } from "@/data/products";

export default function ProductCard({ product, index = 1 }: { product: Product; index?: number }) {
  return (
    <Link href={`/product/${product.slug}`} className="product-card" aria-label={`View ${product.name}`}>
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
        <span className="circle-link" aria-hidden="true">
          <ArrowUpRight size={22} />
        </span>
      </div>
    </Link>
  );
}
