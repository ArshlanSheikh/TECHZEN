import { useState } from "react";
import { ArrowRight, Plus } from "lucide-react";
import Reveal from "./Reveal";
import { faqs } from "../data/siteData";

export default function FAQ() {
  const [open, setOpen] = useState(null);
  return <section className="section" id="faq"><div className="container faq-grid">
    <Reveal><div className="section-heading faq-heading"><div><p className="eyebrow">FAQ</p><h2>Questions, answered <em>clearly.</em></h2></div><p>Still have a question? Send us a message and we'll be happy to discuss your situation.</p><a className="text-link" href="#contact">Ask us directly <ArrowRight size={16}/></a></div></Reveal>
    <Reveal><div className="faq-list">{faqs.map(([q,a],i) => <div className={`faq-item ${open===i?"open":""}`} key={q}>
      <button type="button" aria-expanded={open===i} onClick={()=>setOpen(open===i?null:i)}>{q}<Plus size={20}/></button>
      <div className="faq-answer" style={{maxHeight:open===i?"200px":"0"}}><p>{a}</p></div>
    </div>)}</div></Reveal>
  </div></section>;
}