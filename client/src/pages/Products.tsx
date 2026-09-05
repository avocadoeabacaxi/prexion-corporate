/**
 * Design philosophy: Precision in Motion — an editorial product index with immediate, low-friction filtering.
 */

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const filters = ["All", "CBCT", "2D", "Intraoral"] as const;

export default function Products() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible = active === "All" ? products : products.filter((product) => product.category === active);

  return (
    <main className="inner-page products-page">
      <section className="inner-hero inner-hero--products">
        <div className="inner-hero__content">
          <p className="eyebrow eyebrow--light">PreXion imaging systems</p>
          <h1>Technology for every<br /><em>diagnostic ambition.</em></h1>
          <p>Explore a portfolio spanning advanced CBCT, panoramic and cephalometric imaging, digital intraoral scanning and efficient radiography.</p>
        </div>
        <div className="inner-hero__metric"><span>09</span><p>systems across<br />three product families</p></div>
      </section>

      <section className="catalog section-light">
        <div className="catalog-toolbar">
          <div><p className="eyebrow">Select by modality</p><h2>Imaging systems</h2></div>
          <div className="filter-group" role="group" aria-label="Filter products">
            {filters.map((filter) => (
              <button key={filter} className={active === filter ? "filter-button filter-button--active" : "filter-button"} onClick={() => setActive(filter)}>
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div className="catalog-grid">
          {visible.map((product, index) => <ProductCard key={product.slug} product={product} index={index + 1} />)}
        </div>
      </section>
    </main>
  );
}
