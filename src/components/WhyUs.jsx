import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { benefits } from "../data/siteData";

export default function WhyUs() {
  return <section className="section dark-section" id="why-us"><div className="container">
    <Reveal><SectionHeading light eyebrow="WHY TECHZEN" title="Advice is easy. <em>Progress is the point.</em>" description="We measure our value by what changes after the engagement—not by the number of slides we produce." /></Reveal>
    <div className="benefits-grid">{benefits.map(([n,t,d]) => <Reveal key={n}><div className="benefit"><span>{n}</span><h3>{t}</h3><p>{d}</p></div></Reveal>)}</div>
  </div></section>;
}