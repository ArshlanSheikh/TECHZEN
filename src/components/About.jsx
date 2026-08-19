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



// export default function Hero() {
//   return (
//     <section className="hero section" id="home">
//       <div className="hero-grid container">
//         <Reveal>
//           <div className="hero-copy">
//             <p className="eyebrow">STRATEGY <span>•</span> CONSULTING <span>•</span> GROWTH</p>
//             <h1>Turn complex challenges into <em>confident growth.</em></h1>
//             <p className="hero-text">We help ambitious organizations clarify direction, improve performance, and turn high-value opportunities into practical action.</p>
//             <div className="hero-actions">
//               <a className="btn btn-primary" href="#contact">Book a Free Consultation <ArrowRight size={18} /></a>
//               <a className="btn btn-ghost" href="#services">Explore Our Services</a>
//             </div>
//             <div className="trust-row">
//               <div><strong>10+</strong><span>Years experience</span></div>
//               <div><strong>250+</strong><span>Clients served</span></div>
//               <div><strong>500+</strong><span>Projects delivered</span></div>
//             </div>
//           </div>
//         </Reveal>

//         <Reveal delay="reveal-delay">
//           <div className="hero-visual">
//             <div className="visual-glow" />
//             <div className="dashboard-card">
//               <div className="dash-top"><span>Growth outlook</span><span className="live-dot">● Live</span></div>
//               <div className="dash-number">+42.8%</div>
//               <div className="dash-label">Qualified opportunities</div>
//               <div className="chart" aria-label="Illustrative upward growth chart">
//                 {[26,34,30,49,55,68,82,96].map((h, i) => <span key={i} style={{ height: `${h}%` }} />)}
//               </div>
//               <div className="dash-bottom"><span>Strategy</span><span>Execution</span><span>Optimization</span></div>
//             </div>
//             <div className="floating-card floating-one"><span className="float-icon">↗</span><div><b>Smart growth</b><small>Strategy-led execution</small></div></div>
//             <div className="floating-card floating-two"><span className="float-icon"><CheckCircle2 size={18}/></span><div><b>95% satisfaction</b><small>Long-term partnerships</small></div></div>
//           </div>
//         </Reveal>
//       </div>
//     </section>
//   );
// }
