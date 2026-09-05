/**
 * Design philosophy: Precision in Motion — the migration index exposes complete coverage with searchable technical clarity.
 */

import { useMemo, useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { legacyPages } from "@/data/legacyPages";

export default function SiteMapPage() {
  const [query, setQuery] = useState("");
  const groups = useMemo(() => {
    const filtered = Object.values(legacyPages).filter((page) => `${page.title} ${page.type} ${page.route}`.toLowerCase().includes(query.toLowerCase()));
    return filtered.reduce<Record<string, typeof filtered>>((acc, page) => {
      (acc[page.type] ||= []).push(page);
      return acc;
    }, {});
  }, [query]);

  return (
    <main className="inner-page sitemap-page">
      <section className="sitemap-hero">
        <div><p className="eyebrow eyebrow--light">Complete content index</p><h1>Every topic.<br /><em>Precisely indexed.</em></h1><p>Explore every PreXion page, product record, clinical resource and company update through one searchable technical index.</p></div>
        <div className="sitemap-search"><Search size={19} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search all migrated pages" aria-label="Search migrated pages" /></div>
      </section>
      <section className="sitemap-groups section-light">
        {Object.entries(groups).sort(([a], [b]) => a.localeCompare(b)).map(([type, pages]) => (
          <div className="sitemap-group" key={type}><div className="sitemap-group__heading"><span>{String(pages.length).padStart(2, "0")}</span><h2>{type.replace("-", " ")}</h2></div><div>{pages.map((page) => <a href={page.route} key={page.route}><span><strong>{page.title}</strong><small>{page.route}</small></span><ArrowRight size={17} /></a>)}</div></div>
        ))}
      </section>
    </main>
  );
}
