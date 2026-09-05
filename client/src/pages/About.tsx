/**
 * Design philosophy: Precision in Motion — a restrained global timeline built as a brand manifesto, not a corporate chronology.
 */

import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

const timeline = [
  { year: "2007", place: "Japan", title: "A new standard begins", copy: "PreXion is founded as a spin-off of TeraRecon, carrying advanced medical imaging expertise into dental diagnostics." },
  { year: "USA", place: "Silicon Valley", title: "Technology meets practice", copy: "Product research, clinical collaboration and distribution expand across the United States and international markets." },
  { year: "2025", place: "Alliage", title: "A stronger global platform", copy: "PreXion joins one of the world’s leading dental health technology groups, expanding engineering and innovation capacity." },
  { year: "Now", place: "Brazil + World", title: "Global engineering, made visible", copy: "Manufacturing in Brazil combines industrial excellence with worldwide clinical insight, support and distribution." },
];

export default function About() {
  return (
    <main className="inner-page about-page">
      <section className="about-hero">
        <div className="about-hero__copy">
          <p className="eyebrow eyebrow--light">About PreXion</p>
          <h1>One vision.<br /><em>Three continents of innovation.</em></h1>
        </div>
        <div className="about-hero__image"><img src="/manus-storage/prexion-engineering-official_b947229f.webp" alt="PreXion global engineering" /></div>
      </section>

      <section className="about-intro section-light">
        <div className="section-index">Our origin / Our future</div>
        <h2>We were founded to make the invisible <em>clinically clear.</em></h2>
        <p>From advanced imaging research to a global dental technology platform, PreXion has always pursued the same outcome: give professionals the detail, confidence and support to move care forward.</p>
      </section>

      <section className="timeline section-dark">
        {timeline.map((item, index) => (
          <article key={item.year + item.place}>
            <span className="timeline__index">0{index + 1}</span>
            <div className="timeline__year"><strong>{item.year}</strong><span>{item.place}</span></div>
            <div><h3>{item.title}</h3><p>{item.copy}</p></div>
          </article>
        ))}
      </section>

      <section className="making-visible section-light">
        <p className="eyebrow">Our guiding principle</p>
        <h2>Making IT <em>Visible.</em></h2>
        <div><p>Visibility is more than resolution. It is the ability to reveal clinically relevant information, connect it to an efficient workflow and support the people who use it.</p><p>That principle shapes our imaging systems, our software, our education and every interaction with a PreXion customer.</p></div>
        <Link href="/products" className="button button--dark">Explore our technology <ArrowRight size={18} /></Link>
      </section>
    </main>
  );
}
