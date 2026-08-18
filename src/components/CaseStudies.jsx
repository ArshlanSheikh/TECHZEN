import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { cases } from "../data/siteData";

export default function CaseStudies() {
  return <section className="section" id="results"><div className="container">
    <Reveal><SectionHeading eyebrow="SELECTED WORK" title="Outcomes that create <em>business momentum.</em>" description="Illustrative case studies below are placeholders. Replace them with verified client work and approved performance metrics." /></Reveal>
    <div className="case-grid">{cases.map(([type,n,title,challenge,solution,result,label]) => <Reveal key={n}><article className="case-card">
      <div className="case-meta"><span>{type}</span><span>{n}</span></div><h3>{title}</h3><p><b>Challenge:</b> {challenge}</p><p><b>Solution:</b> {solution}</p>
      <div className="case-result"><strong>{result}</strong><span>{label}</span></div>
    </article></Reveal>)}</div>
  </div></section>;
}