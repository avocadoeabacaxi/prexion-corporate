/**
 * Design philosophy: Precision in Motion — downloadable knowledge is organized as a technical library with complete source traceability.
 */

import { Download, ExternalLink } from "lucide-react";
import { legacyPages, type LegacyPage } from "@/data/legacyPages";

export default function Resources() {
  const resources = Array.from(
    new Map<string, { url: string; page: LegacyPage }>(
      Object.values(legacyPages).flatMap((page) => page.downloads.map((url) => [url, { url, page }] as const)),
    ).values(),
  );
  const resourcePages = Object.values(legacyPages).filter((page) => page.type === "resource" || page.route.includes("download"));
  const resourceName = (url: string, pageTitle: string) => {
    const raw = decodeURIComponent(url.split("/").pop()?.split("?")[0] || "");
    const noStorageHash = raw.replace(/^[a-f0-9]{12}-/i, "").replace(/_[a-f0-9]{8}(?=\.[a-z0-9]+$)/i, "");
    if (/^https?\b/i.test(noStorageHash) || noStorageHash.includes("wp-content")) return `${pageTitle.replace(/\s*\(LP.*?\)/i, "")} — external resource`;
    if (!/\.[a-z0-9]{2,5}$/i.test(noStorageHash) || noStorageHash.length < 8) return `${pageTitle.replace(/\s*\(LP.*?\)/i, "")} — reference file`;
    return noStorageHash.replace(/\.[a-z0-9]+$/i, "").replace(/[-_]+/g, " ").replace(/\b(prexion|pre)\b/gi, "").replace(/\s+/g, " ").trim();
  };

  return (
    <main className="inner-page resources-page">
      <section className="resource-hero">
        <div><p className="eyebrow eyebrow--light">PreXion knowledge library</p><h1>Every resource.<br /><em>One precise archive.</em></h1><p>Brochures, e-books, product guides and campaign resources preserved from the previous PreXion website.</p></div>
        <div className="resource-hero__count"><strong>{String(resources.length).padStart(2, "0")}</strong><span>download references</span></div>
      </section>

      <section className="download-library section-light">
        <div className="section-heading"><div><p className="eyebrow">Direct downloads</p><h2>Files worth<br /><em>keeping close.</em></h2></div><p>Each file remains linked to its original source. Availability depends on the source service and can be replaced with managed files before launch.</p></div>
        <div className="download-grid">
          {resources.map(({ url, page }, index) => (
            <a href={url} target="_blank" rel="noreferrer" key={url}>
              <span className="download-index">{String(index + 1).padStart(2, "0")}</span><span className="data-sheet-glyph" aria-hidden="true"><i /></span><div><small>{page.type} / {page.title.replace(/\s*\(LP.*?\)/i, "")}</small><h3>{resourceName(url, page.title)}</h3></div><Download size={20} />
            </a>
          ))}
        </div>
      </section>

      <section className="resource-pages section-dark">
        <p className="eyebrow eyebrow--light">Knowledge pathways</p>
        <div>{resourcePages.map((page) => <a href={page.route} key={page.route}><span>{page.title}</span><ExternalLink size={16} /></a>)}</div>
      </section>
    </main>
  );
}
