import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { industries } from "../data/siteData";

export default function Industries() {
  return <section className="section section-soft" id="industries"><div className="container">
    <Reveal><SectionHeading compact eyebrow="WHO WE HELP" title="Built for ambitious <em>organizations.</em>" /></Reveal>
    <div className="industry-grid">{industries.map(i => <span key={i}>{i}</span>)}</div>
  </div></section>;
}