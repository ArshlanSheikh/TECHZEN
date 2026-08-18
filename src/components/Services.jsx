import { ArrowUpRight, BriefcaseBusiness, Compass, Cpu, Megaphone, WalletCards, UsersRound } from "lucide-react";
import { services } from "../data/siteData";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const icons = { business: BriefcaseBusiness, strategy: Compass, digital: Cpu, marketing: Megaphone, finance: WalletCards, management: UsersRound };

export default function Services() {
  return <section className="section section-soft" id="services"><div className="container">
    <Reveal><SectionHeading eyebrow="WHAT WE DO" title="Expertise built around <em>your next move.</em>" description="From strategic direction to operational improvement, we bring the right expertise to the problem in front of you." /></Reveal>
    <div className="services-grid">{services.map(s => {
      const Icon = icons[s.icon];
      return <Reveal key={s.number}><article className="service-card"><span className="service-num">{s.number}</span><div className="icon-box"><Icon size={23}/></div><h3>{s.title}</h3><p>{s.description}</p><a href="#contact" className="text-link">Discuss this service <ArrowUpRight size={16}/></a></article></Reveal>
    })}</div>
  </div></section>;
}