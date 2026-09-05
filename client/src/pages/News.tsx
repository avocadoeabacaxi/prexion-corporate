/**
 * Design philosophy: Precision in Motion — news and event records use an editorial chronology with technical indexing.
 */

import { ArrowRight } from "lucide-react";
import { legacyPages } from "@/data/legacyPages";

export default function News({ eventsOnly = false }: { eventsOnly?: boolean }) {
  const items = Object.values(legacyPages).filter((page) => {
    if (eventsOnly) return page.type === "event" || /conference|meeting|dentistry-2026|midwinter/.test(page.route);
    return page.type === "event" || page.type === "article";
  });

  return (
    <main className="inner-page news-page">
      <section className="news-hero">
        <p className="eyebrow eyebrow--light">{eventsOnly ? "Events" : "News & events"}</p>
        <h1>{eventsOnly ? "Where PreXion meets" : "A global story,"}<br /><em>{eventsOnly ? "the dental community." : "still in motion."}</em></h1>
        <p>{eventsOnly ? "A preserved schedule of educational and industry events from the previous website." : "Company updates, international events and moments that document PreXion’s global presence."}</p>
      </section>
      <section className="news-list section-light">
        {items.map((page, index) => (
          <a href={page.route} key={page.route} className="news-row"><span>{String(index + 1).padStart(2, "0")}</span><div><small>{page.type}</small><h2>{page.title}</h2><p>{page.summary.slice(0, 260)}…</p></div><ArrowRight /></a>
        ))}
      </section>
    </main>
  );
}
