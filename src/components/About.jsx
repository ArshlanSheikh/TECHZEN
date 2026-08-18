import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function About() {
  return <section className="section" id="about"><div className="container split-grid">
    <Reveal><div className="about-visual"><div className="about-panel">
      <div className="panel-top"><span>Our perspective</span><span>01 / 04</span></div>
      <div className="quote-mark">“</div><h3>Good strategy is only valuable when people can execute it.</h3>
      <div className="mini-line" /><p>We bridge the gap between boardroom thinking and measurable business action.</p>
    </div><div className="experience-badge"><strong>10+</strong><span>Years of<br/>experience</span></div></div></Reveal>
    <Reveal><div className="about-copy"><p className="eyebrow">ABOUT US</p><h2>Clarity for today. <em>Momentum for tomorrow.</em></h2>
      <p>TechZen Consulting partners with leaders who need more than advice. We bring structured thinking, commercial insight, and practical execution to the decisions that matter most.</p>
      <p>Our approach is deliberately collaborative: understand the real problem, align the people involved, build a focused strategy, and stay close enough to help make it work.</p>
      <div className="values">{[
        ["01","Practical","Recommendations built for real-world execution."],
        ["02","Personal","Every engagement is shaped around your context."],
        ["03","Measurable","Clear outcomes, milestones, and accountability."]
      ].map(([n,t,d]) => <div key={n}><span>{n}</span><b>{t}</b><small>{d}</small></div>)}</div>
      <a className="text-link" href="#contact">Start a conversation <ArrowRight size={16}/></a>
    </div></Reveal>
  </div></section>;
}