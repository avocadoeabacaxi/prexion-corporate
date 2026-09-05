/**
 * Design philosophy: Precision in Motion — legacy content is preserved in a clean editorial instrument panel without hiding historical context.
 */

import { ArrowRight, Download, ExternalLink, FileText, ScanLine } from "lucide-react";
import { Link, useLocation } from "wouter";
import { legacyPages } from "@/data/legacyPages";

const normalizePath = (path: string) => path === "/" ? "/" : path.replace(/\/$/, "");

const internalHref = (url: string) => {
  try {
    const parsed = new URL(url);
    if (parsed.hostname === "www.prexion.com" || parsed.hostname === "prexion.com") {
      return normalizePath(parsed.pathname) || "/";
    }
  } catch {
    return url;
  }
  return url;
};

const cleanLabel = (value: string) => value.replace(/^[-•]\s*/, "").trim();
const boilerplate = /^(request a demo|contact us|client support|subscribe today|stay on the cutting edge of dentistry\.?|what is the industry saying\??|experience true clarity\s*&\s*precision|schedule a demo today\.?|privacy policy|accessibility statement)$/i;

export default function LegacyPage({ sourcePath }: { sourcePath?: string }) {
  const [location] = useLocation();
  const path = normalizePath(sourcePath || location);
  const page = legacyPages[path];

  if (!page) {
    return (
      <main className="legacy-empty">
        <p className="eyebrow">Content index</p>
        <h1>This page is not in the migration archive.</h1>
        <p>Use the complete site index to find every page brought forward from the previous PreXion website.</p>
        <Link href="/site-map" className="button button--dark">Open complete site index <ArrowRight size={18} /></Link>
      </main>
    );
  }

  const uniqueBlocks = page.blocks.filter((block, index) => {
    const normalized = block.text.toLowerCase().replace(/[^a-z0-9]+/g, "");
    const title = page.title.toLowerCase().replace(/[^a-z0-9]+/g, "");
    return (index > 0 || normalized !== title) && !boilerplate.test(block.text.trim()) && !/^855[-\s]?prexion$/i.test(block.text.trim()) && !/^\(?650\)?\s*212[-–]0314$/.test(block.text.trim());
  });
  const canonicalIsDifferent = normalizePath(page.canonicalTarget) !== path;

  return (
    <main className="inner-page legacy-page">
      <section className="legacy-hero">
        <div className="legacy-hero__index"><ScanLine size={18} /><span>{page.type}</span><span>{page.relevance} relevance</span></div>
        <div className="legacy-hero__content">
          <p className="eyebrow eyebrow--light">PreXion knowledge record</p>
          <h1>{page.title}</h1>
          <p>{page.summary.slice(0, 380)}{page.summary.length > 380 ? "…" : ""}</p>
          <div className="legacy-hero__actions">
            {canonicalIsDifferent && <Link href={page.canonicalTarget} className="button button--primary">View current page <ArrowRight size={18} /></Link>}
          </div>
        </div>
        <div className="legacy-hero__telemetry" aria-hidden="true"><span>PX / ARC</span><strong>{String(uniqueBlocks.length).padStart(2, "0")}</strong><small>content blocks</small></div>
      </section>

      <section className="legacy-content section-light">
        <aside className="legacy-aside">
          <p className="eyebrow">Page record</p>
          <dl>
            <div><dt>Source type</dt><dd>{page.type}</dd></div>
            <div><dt>Content record</dt><dd>{String(uniqueBlocks.length).padStart(2, "0")} indexed blocks</dd></div>
            <div><dt>Reference files</dt><dd>{page.downloads.length}</dd></div>
            <div><dt>Connected sources</dt><dd>{page.externalLinks.length}</dd></div>
          </dl>
          <Link href="/site-map" className="text-link">All migrated pages <ArrowRight size={16} /></Link>
        </aside>

        <article className="legacy-article">
          {uniqueBlocks.map((block, index) => {
            if (block.kind === "heading") return <h2 key={`${index}-${block.text}`}>{block.text}</h2>;
            if (block.kind === "quote") return <blockquote key={`${index}-${block.text}`}>{block.text}</blockquote>;
            if (block.kind === "list") return <p className="legacy-list-item" key={`${index}-${block.text}`}>{block.text}</p>;
            return <p key={`${index}-${block.text}`}>{block.text}</p>;
          })}
        </article>
      </section>

      {page.images.length > 0 && (
        <section className="legacy-gallery">
          <div className="legacy-gallery__heading"><p className="eyebrow eyebrow--light">Clinical & product imagery</p><h2>Visual evidence,<br />kept in context.</h2></div>
          <div className="legacy-gallery__grid">
            {page.images.map((image, index) => (
              <figure key={`${image.url}-${index}`}><img src={image.url} alt={image.alt} loading="lazy" /><figcaption>{String(index + 1).padStart(2, "0")} / {image.alt}</figcaption></figure>
            ))}
          </div>
        </section>
      )}

      {(page.downloads.length > 0 || page.links.length > 0 || page.externalLinks.length > 0) && (
        <section className="legacy-resources section-dark">
          <div>
            <p className="eyebrow eyebrow--light">Preserved references</p>
            <h2>Downloads, tools<br />and connected resources.</h2>
          </div>
          <div className="legacy-resource-list">
            {page.downloads.map((url) => (
              <a href={url} key={url} target="_blank" rel="noreferrer"><Download size={17} /><span><small>Download</small>{url.split("/").pop()?.split("?")[0] || "Open file"}</span><ExternalLink size={15} /></a>
            ))}
            {page.links.slice(0, 20).map((item) => {
              const href = internalHref(item.url);
              const external = href.startsWith("http");
              return <a href={href} key={`${item.url}-${item.label}`} target={external ? "_blank" : undefined} rel="noreferrer"><FileText size={17} /><span><small>{external ? "External" : "Related page"}</small>{cleanLabel(item.label)}</span>{external ? <ExternalLink size={15} /> : <ArrowRight size={15} />}</a>;
            })}
          </div>
        </section>
      )}

    </main>
  );
}
