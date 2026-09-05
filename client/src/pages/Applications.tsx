/**
 * Design philosophy: Precision in Motion — clinical applications become focused diagnostic chapters, structured like imaging evidence rather than migrated prose.
 */

import { ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";

const specialties = [
  {
    index: "01",
    name: "Endodontics",
    statement: "Reveal anatomy that two-dimensional imaging can conceal.",
    copy: "High-resolution volumetric imaging supports confident evaluation of complex root morphology and helps clinicians investigate subtle conditions before treatment begins.",
    evidence: ["Vertical root fractures and retained root tips", "Apical radiolucency and periapical pathology", "Dentoalveolar trauma and resorption", "Clearer evidence to help reduce retreatment risk"],
    signal: "ROOT / UHD",
  },
  {
    index: "02",
    name: "Implant dentistry",
    statement: "Plan in three planes. Place with one-to-one confidence.",
    copy: "PreXion imaging makes it easier to orient anatomy, assess the available site and communicate a treatment plan grounded in measurable spatial information.",
    evidence: ["1:1 measurements without anatomical overlap", "Bone quality and quantity assessment", "Surgical guide planning and DICOM workflows", "Clear visual evidence for case presentation"],
    signal: "DICOM / 1:1",
  },
  {
    index: "03",
    name: "Prosthodontics",
    statement: "Connect diagnostic volume to the restorative workflow.",
    copy: "Detailed imaging and open data pathways support simulation, communication and more predictable planning for complex restorative and full-arch cases.",
    evidence: ["DICOM export to third-party CAD/CAM tools", "Integration with surgical planning software", "Precise simulation of complex implant cases", "Support for full-arch and All-on-4 planning"],
    signal: "CAD / CAM",
  },
  {
    index: "04",
    name: "Periodontics",
    statement: "See the structures that define regenerative decisions.",
    copy: "Movable 3D renderings and targeted fields of view help reveal periodontal relationships while supporting efficient acquisition and responsible exposure selection.",
    evidence: ["Furcation involvement and alveolar defects", "Periodontal ligament space evaluation", "Regenerative therapy assessment", "Bone graft planning and follow-up"],
    signal: "FOV / BONE",
  },
];

export default function Applications() {
  return (
    <main className="inner-page applications-page">
      <section className="applications-hero">
        <div className="applications-hero__copy">
          <p className="eyebrow eyebrow--light">Clinical applications</p>
          <h1>One imaging platform.<br /><em>Four focused perspectives.</em></h1>
          <p>From endodontic detail to complete restorative planning, PreXion technology helps clinicians match the field of view to the question in front of them.</p>
          <Link href="/product" className="button button--primary">Explore imaging systems <ArrowRight size={18} /></Link>
        </div>
        <div className="applications-reticle" aria-hidden="true">
          <span className="applications-reticle__ring applications-reticle__ring--1" />
          <span className="applications-reticle__ring applications-reticle__ring--2" />
          <span className="applications-reticle__ring applications-reticle__ring--3" />
          <span className="applications-reticle__axis applications-reticle__axis--x" />
          <span className="applications-reticle__axis applications-reticle__axis--y" />
          <strong>04</strong><small>clinical fields</small>
        </div>
      </section>

      <section className="application-intro section-light">
        <p className="eyebrow">Diagnostic versatility</p>
        <h2>Capture only what<br />the diagnosis requires.</h2>
        <p>PreXion systems combine selectable acquisition, high-detail reconstruction and open clinical workflows so each specialty can work from the evidence it needs.</p>
      </section>

      <section className="application-chapters section-light">
        {specialties.map((specialty) => (
          <article className="application-chapter" key={specialty.name}>
            <div className="application-chapter__index"><span>{specialty.index}</span><small>{specialty.signal}</small></div>
            <div className="application-chapter__body"><p className="eyebrow">{specialty.name}</p><h2>{specialty.statement}</h2><p>{specialty.copy}</p></div>
            <div className="application-chapter__evidence">{specialty.evidence.map((item) => <p key={item}><Check size={15} />{item}</p>)}</div>
          </article>
        ))}
      </section>

      <section className="application-cta section-dark">
        <div><p className="eyebrow eyebrow--light">Match technology to practice</p><h2>Build an imaging workflow<br /><em>around your clinical questions.</em></h2></div>
        <Link href="/contact" className="button button--light">Talk to a product specialist <ArrowRight size={18} /></Link>
      </section>
    </main>
  );
}
