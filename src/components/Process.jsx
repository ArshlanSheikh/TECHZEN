import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { processSteps } from "../data/siteData";

export default function Process() {
  return <section className="section" id="process"><div className="container">
    <Reveal><SectionHeading eyebrow="OUR PROCESS" title="A simple path from <em>question to action.</em>" description="Structured enough to create momentum. Flexible enough to fit the way your organization works." /></Reveal>
    <div className="process-grid">{processSteps.map(([n,t,d]) => <Reveal key={n}><div className="process-step"><span>{n}</span><h3>{t}</h3><p>{d}</p></div></Reveal>)}</div>
  </div></section>;
}