/**
 * Design philosophy: Precision in Motion — operational support presented with the same clarity as product engineering.
 */

import { ArrowRight, BookOpen, CalendarDays, Headphones, PlayCircle } from "lucide-react";

const resources = [
  { icon: Headphones, title: "Remote support", copy: "Connect directly with trained technical support for product and software assistance.", action: "Call (650) 212-0314", href: "tel:6502120314" },
  { icon: PlayCircle, title: "Training videos", copy: "Build confidence in acquisition, software and clinical workflows through on-demand instruction.", action: "Visit video library", href: "https://www.prexion.com/training-videos/" },
  { icon: CalendarDays, title: "Events & education", copy: "Meet PreXion and clinical educators at focused courses, conferences and industry events.", action: "View upcoming events", href: "https://www.prexion.com/news-2/" },
  { icon: BookOpen, title: "Product documentation", copy: "Access brochures, specifications and resources for current PreXion imaging systems.", action: "Browse products", href: "/products" },
];

export default function Support() {
  return (
    <main className="inner-page support-page">
      <section className="support-hero">
        <div><p className="eyebrow eyebrow--light">Education & support</p><h1>Confidence should continue<br /><em>after installation.</em></h1><p>Clinical education, responsive assistance and practical resources help teams make the most of every PreXion system.</p></div>
        <div className="support-hero__signal" aria-hidden="true"><span /><span /><span /></div>
      </section>

      <section className="resource-grid section-light">
        {resources.map(({ icon: Icon, title, copy, action, href }, index) => (
          <a key={title} className="resource-card" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
            <span className="resource-card__index">0{index + 1}</span><Icon size={28} /><h2>{title}</h2><p>{copy}</p><strong>{action} <ArrowRight size={16} /></strong>
          </a>
        ))}
      </section>

      <section className="support-promise section-dark">
        <div><p className="eyebrow eyebrow--light">Direct. Trained. Dependable.</p><h2>Support built around<br /><em>your uptime.</em></h2></div>
        <p>PreXion connects customers with trained technical professionals who understand the equipment, software and urgency behind every support request.</p>
      </section>
    </main>
  );
}
