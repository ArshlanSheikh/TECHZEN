import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import Reveal from "./Reveal";
import { company, services } from "../data/siteData";

const initial = { name:"", email:"", phone:"", company:"", service:"", budget:"", contactMethod:"Email", message:"", consent:false, website:"", startedAt:Date.now() };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type:"", text:"" });
  const [loading, setLoading] = useState(false);

  const update = e => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === "checkbox" ? checked : value }));
    setErrors(e2 => ({ ...e2, [name]: "" }));
  };

  const validate = () => {
    const e = {};
    if (form.name.trim().length < 2) e.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Please enter a valid email address.";
    if (form.phone && !/^[0-9+()\-\s]{7,30}$/.test(form.phone.trim())) e.phone = "Please enter a valid phone number.";
    if (!form.service) e.service = "Please select a service.";
    if (form.message.trim().length < 20) e.message = "Please provide at least 20 characters.";
    if (!form.consent) e.consent = "Please accept the consent statement.";
    return e;
  };

  const submit = async e => {
    e.preventDefault();
    setStatus({type:"",text:""});
    const validation = validate();
    if (Object.keys(validation).length) { setErrors(validation); return; }
    if (form.website) return;
    if (Date.now() - form.startedAt < 1200) { setStatus({type:"error",text:"Please wait a moment and try again."}); return; }

    setLoading(true);
    const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;

    try {
      if (!endpoint) {
        await new Promise(r => setTimeout(r, 700));
        setStatus({type:"success",text:"Demo submission successful. Add VITE_CONTACT_ENDPOINT to .env to send real inquiries."});
      } else {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 15000);
        const response = await fetch(endpoint, {
          method:"POST",
          headers:{"Content-Type":"application/json","Accept":"application/json"},
          body:JSON.stringify({...form, website:undefined, submittedAt:new Date().toISOString()}),
          signal:controller.signal
        });
        clearTimeout(timeout);
        if (!response.ok) throw new Error(`Server returned ${response.status}`);
        setStatus({type:"success",text:"Thank you! Your inquiry has been received. We'll get back to you shortly."});
      }
      setForm({...initial, startedAt:Date.now()});
    } catch (err) {
      setStatus({type:"error",text:err.name==="AbortError"?"The request timed out. Please try again or contact us directly.":"Something went wrong while sending your inquiry. Please try again or contact us directly."});
    } finally { setLoading(false); }
  };

  return <section className="cta-section" id="contact"><div className="container contact-grid">
    <Reveal><div className="contact-copy"><p className="eyebrow">LET'S TALK</p><h2>Ready to build a <em>smarter path forward?</em></h2>
      <p>Tell us what you're working through. We'll listen, ask the right questions, and help you identify the most useful next step.</p>
      <div className="contact-details"><a href={`mailto:${company.email}`}><Mail size={18}/> {company.email}</a><a href={`tel:${company.phone.replace(/\s/g,"")}`}><Phone size={18}/> {company.phone}</a><span><MapPin size={18}/> {company.location}</span></div><small>Business hours: {company.hours}</small>
    </div></Reveal>

    <Reveal><form className="contact-form" onSubmit={submit} noValidate>
      <div className="form-header"><h3>Start a conversation</h3><p>Tell us a little about what you need.</p></div>
      <div className="honeypot" aria-hidden="true"><label>Website<input name="website" value={form.website} onChange={update} tabIndex="-1" autoComplete="off"/></label></div>
      <div className="form-row">
        <Field label="Full Name" name="name" value={form.name} onChange={update} error={errors.name} required autoComplete="name"/>
        <Field label="Email" name="email" type="email" value={form.email} onChange={update} error={errors.email} required autoComplete="email"/>
      </div>
      <div className="form-row"><Field label="Phone" name="phone" value={form.phone} onChange={update} error={errors.phone} autoComplete="tel"/><Field label="Company" name="company" value={form.company} onChange={update} autoComplete="organization"/></div>
      <div className="form-row">
        <SelectField label="Service Required" name="service" value={form.service} onChange={update} error={errors.service} required options={["Select a service",...services.map(s=>s.title),"Other"]}/>
        <SelectField label="Budget Range" name="budget" value={form.budget} onChange={update} options={["Select a range","Under ₹50,000","₹50,000 – ₹2,00,000","₹2,00,000 – ₹5,00,000","₹5,00,000+","Prefer to discuss"]}/>
      </div>
      <SelectField label="Preferred Contact Method" name="contactMethod" value={form.contactMethod} onChange={update} options={["Email","Phone","WhatsApp","Video call"]}/>
      <div className="field"><label htmlFor="message">Tell us about your needs <span>*</span></label><textarea id="message" name="message" rows="5" minLength="20" maxLength="3000" value={form.message} onChange={update} placeholder="What are you trying to achieve, and what challenge are you facing?" aria-invalid={!!errors.message}/><div className="field-meta"><small className="field-error">{errors.message}</small><small>{form.message.length}/3000</small></div></div>
      <label className="consent"><input type="checkbox" name="consent" checked={form.consent} onChange={update}/><span>I agree to the Privacy Policy and consent to being contacted regarding my inquiry.</span></label>
      <small className="field-error">{errors.consent}</small>
      <button className="btn btn-primary submit-btn" disabled={loading} aria-busy={loading}>{loading ? <span className="button-loader"/> : "Send Inquiry"}</button>
      {status.text && <div className={`form-status show ${status.type}`} role="status" aria-live="polite">{status.text}</div>}
      <p className="form-note">Never put private API keys, SMTP passwords, or database credentials in frontend React code.</p>
    </form></Reveal>
  </div></section>;
}

function Field({label,name,value,onChange,error,required=false,type="text",...props}) {
  return <div className="field"><label htmlFor={name}>{label} {required&&<span>*</span>}</label><input id={name} name={name} type={type} value={value} onChange={onChange} required={required} maxLength={name==="message"?3000:160} aria-invalid={!!error} {...props}/><small className="field-error">{error}</small></div>;
}
function SelectField({label,name,value,onChange,options,error,required=false}) {
  return <div className="field"><label htmlFor={name}>{label} {required&&<span>*</span>}</label><select id={name} name={name} value={value} onChange={onChange} required={required} aria-invalid={!!error}>{options.map((o,i)=><option value={i===0&&options[0].toLowerCase().startsWith("select")?"":o} key={o}>{o}</option>)}</select><small className="field-error">{error}</small></div>;
}