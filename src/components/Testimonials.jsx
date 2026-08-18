import { useEffect, useState } from "react";
import { testimonials } from "../data/siteData";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setCurrent(c => (c + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, [current]);

  return <section className="section section-soft" id="testimonials"><div className="container testimonial-wrap">
    <Reveal><SectionHeading eyebrow="CLIENT PERSPECTIVE" title="Trusted when the <em>stakes are high.</em>" /></Reveal>
    <Reveal><div className="testimonial-slider" aria-roledescription="carousel" aria-label="Testimonials">
      <div className="slides">{testimonials.map(([name,role,initials,quote], i) => <article className={`testimonial-slide ${i===current ? "active":""}`} key={name}>
        <div className="stars" aria-label="5 out of 5 stars">★★★★★</div><blockquote>“{quote}”</blockquote>
        <div className="person"><div className="avatar">{initials}</div><div><b>{name}</b><span>{role}</span></div></div>
      </article>)}</div>
      <div className="slider-controls"><button type="button" aria-label="Previous testimonial" onClick={() => setCurrent((current-1+testimonials.length)%testimonials.length)}>←</button>
        <div className="dots">{testimonials.map((_,i)=><button key={i} className={`dot ${i===current?"active":""}`} aria-label={`Show testimonial ${i+1}`} onClick={()=>setCurrent(i)} />)}</div>
        <button type="button" aria-label="Next testimonial" onClick={() => setCurrent((current+1)%testimonials.length)}>→</button>
      </div>
    </div></Reveal>
  </div></section>;
}