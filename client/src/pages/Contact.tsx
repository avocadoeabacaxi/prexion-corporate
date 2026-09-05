/**
 * Design philosophy: Precision in Motion — a direct conversion surface with confident contrast and no unnecessary friction.
 */

import { useState } from "react";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    toast.success("Your request has been prepared. A live CRM connection can be added before launch.");
  };

  return (
    <main className="inner-page contact-page">
      <section className="contact-layout">
        <div className="contact-copy">
          <p className="eyebrow eyebrow--light">Request a demonstration</p>
          <h1>Bring diagnostic clarity<br /><em>into your practice.</em></h1>
          <p>Tell us what you are looking for. A PreXion product specialist can help identify the imaging system and workflow that fit your clinical goals.</p>
          <div className="contact-details">
            <a href="tel:8557739466"><Phone size={18} /><span><small>Sales information</small>855-PREXION</span></a>
            <a href="tel:6502120314"><Phone size={18} /><span><small>Client support</small>(650) 212-0314</span></a>
            <div><MapPin size={18} /><span><small>PreXion Inc.</small>2077 Gateway Place, Suite 120<br />San Jose, CA 95110</span></div>
          </div>
        </div>

        <div className="contact-form-panel">
          {submitted ? (
            <div className="form-success"><CheckCircle2 size={40} /><p className="eyebrow">Request prepared</p><h2>Thank you for your interest.</h2><p>This preview demonstrates the complete form experience. Connect it to your CRM or preferred form service before production launch.</p><button className="text-link" onClick={() => setSubmitted(false)}>Send another request <ArrowRight size={17} /></button></div>
          ) : (
            <form onSubmit={submit} className="contact-form">
              <div className="form-heading"><span>01</span><h2>Tell us about your practice</h2></div>
              <div className="field-row"><label>First name<input name="firstName" required autoComplete="given-name" /></label><label>Last name<input name="lastName" required autoComplete="family-name" /></label></div>
              <label>Email address<input name="email" type="email" required autoComplete="email" /></label>
              <label>Phone number<input name="phone" type="tel" autoComplete="tel" /></label>
              <div className="field-row"><label>Specialty<select name="specialty" defaultValue=""><option value="" disabled>Select</option><option>Dentist</option><option>Radiologist</option><option>Clinic Manager</option><option>Investor</option></select></label><label>Interest<select name="interest" defaultValue=""><option value="" disabled>Select</option><option>CBCT</option><option>2D PAN / CEPH</option><option>Intraoral Workflow</option><option>Support</option></select></label></div>
              <label>How can we help?<textarea name="message" rows={4} /></label>
              <button type="submit" className="button button--dark">Submit request <ArrowRight size={18} /></button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
