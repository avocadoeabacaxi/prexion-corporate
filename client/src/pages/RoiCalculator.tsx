/**
 * Design philosophy: Precision in Motion — financial assumptions are exposed as measurable inputs, never hidden behind marketing claims.
 */

import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

const procedures = ["3rd molar extraction", "Regular extraction / root resorption", "Endodontics", "Apicoectomy", "Bone graft", "Implant", "3D scan referred out", "2D panoramic image", "2D cephalometric image", "Sleep 3D scan & consult", "Sleep appliance"];

export default function RoiCalculator() {
  const [equipmentCost, setEquipmentCost] = useState(0);
  const [term, setTerm] = useState(60);
  const [values, setValues] = useState<Record<string, { fee: number; cases: number }>>({});
  const rate = 0.07 / 12;
  const monthlyRevenue = useMemo(() => procedures.reduce((sum, procedure) => sum + (values[procedure]?.fee || 0) * (values[procedure]?.cases || 0), 0), [values]);
  const monthlyPayment = equipmentCost > 0 ? equipmentCost * rate * Math.pow(1 + rate, term) / (Math.pow(1 + rate, term) - 1) : 0;
  const netMonthly = monthlyRevenue - monthlyPayment;
  const currency = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  const update = (procedure: string, field: "fee" | "cases", value: number) => setValues((current) => ({ ...current, [procedure]: { fee: current[procedure]?.fee || 0, cases: current[procedure]?.cases || 0, [field]: value } }));

  return (
    <main className="inner-page roi-page">
      <section className="roi-hero"><div><p className="eyebrow eyebrow--light">CBCT cost & ROI calculator</p><h1>Turn assumptions into<br /><em>a measurable outlook.</em></h1><p>Compare estimated monthly procedure revenue with an illustrative equipment payment across common financing terms.</p></div><div className="roi-trace" aria-hidden="true"><span>REV / COST</span><svg viewBox="0 0 240 120"><path d="M0 99H240M0 70H240M0 41H240M32 0V120M92 0V120M152 0V120M212 0V120" /><polyline points="4,100 38,91 69,94 102,61 137,68 176,34 207,42 236,15" /></svg><small>Projected diagnostic value</small></div></section>
      <section className="roi-workspace section-light">
        <div className="roi-inputs">
          <div className="roi-section-heading"><span>01</span><div><p className="eyebrow">Revenue assumptions</p><h2>Dental procedures</h2></div></div>
          <div className="procedure-table"><div className="procedure-row procedure-row--head"><span>Procedure</span><span>Fee</span><span>Monthly cases</span></div>{procedures.map((procedure) => <div className="procedure-row" key={procedure}><strong>{procedure}</strong><label>$<input type="number" min="0" value={values[procedure]?.fee || ""} onChange={(event) => update(procedure, "fee", Number(event.target.value))} aria-label={`${procedure} fee`} /></label><label><input type="number" min="0" value={values[procedure]?.cases || ""} onChange={(event) => update(procedure, "cases", Number(event.target.value))} aria-label={`${procedure} monthly cases`} /></label></div>)}</div>
        </div>
        <aside className="roi-results">
          <div className="roi-calibration" aria-hidden="true" />
          <p className="eyebrow eyebrow--light">02 / Equipment estimate</p>
          <label>Equipment cost<input type="number" min="0" value={equipmentCost || ""} onChange={(event) => setEquipmentCost(Number(event.target.value))} placeholder="$0" /></label>
          <label>Financing term<select value={term} onChange={(event) => setTerm(Number(event.target.value))}><option value={48}>48 months</option><option value={60}>60 months</option><option value={84}>84 months</option></select></label>
          <div className="roi-metric"><small>Estimated monthly revenue</small><strong>{currency.format(monthlyRevenue)}</strong></div>
          <div className="roi-metric"><small>Estimated monthly payment at 7.00%</small><strong>{currency.format(monthlyPayment)}</strong></div>
          <div className={`roi-metric roi-metric--net ${netMonthly < 0 ? "roi-metric--negative" : ""}`}><small>Estimated monthly net</small><strong>{currency.format(netMonthly)}</strong></div>
          <p className="roi-disclaimer">Illustrative estimate only. Actual fees, utilization, financing, taxes, maintenance and clinical economics vary.</p>
          <Link href="/contact" className="button button--light">Discuss your estimate <ArrowRight size={18} /></Link>
        </aside>
      </section>
    </main>
  );
}
