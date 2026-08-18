import { ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-grid container">
        <Reveal>
          <div className="hero-copy">
            <p className="eyebrow">STRATEGY <span>•</span> CONSULTING <span>•</span> GROWTH</p>
            <h1>Turn complex challenges into <em>confident growth.</em></h1>
            <p className="hero-text">We help ambitious organizations clarify direction, improve performance, and turn high-value opportunities into practical action.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">Book a Free Consultation <ArrowRight size={18} /></a>
              <a className="btn btn-ghost" href="#services">Explore Our Services</a>
            </div>
            <div className="trust-row">
              <div><strong>10+</strong><span>Years experience</span></div>
              <div><strong>250+</strong><span>Clients served</span></div>
              <div><strong>500+</strong><span>Projects delivered</span></div>
            </div>
          </div>
        </Reveal>

        <Reveal delay="reveal-delay">
          <div className="hero-visual">
            <div className="visual-glow" />
            <div className="dashboard-card">
              <div className="dash-top"><span>Growth outlook</span><span className="live-dot">● Live</span></div>
              <div className="dash-number">+42.8%</div>
              <div className="dash-label">Qualified opportunities</div>
              <div className="chart" aria-label="Illustrative upward growth chart">
                {[26,34,30,49,55,68,82,96].map((h, i) => <span key={i} style={{ height: `${h}%` }} />)}
              </div>
              <div className="dash-bottom"><span>Strategy</span><span>Execution</span><span>Optimization</span></div>
            </div>
            <div className="floating-card floating-one"><span className="float-icon">↗</span><div><b>Smart growth</b><small>Strategy-led execution</small></div></div>
            <div className="floating-card floating-two"><span className="float-icon"><CheckCircle2 size={18}/></span><div><b>95% satisfaction</b><small>Long-term partnerships</small></div></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}