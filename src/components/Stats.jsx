import Reveal from "./Reveal";
import useCountUp from "../hooks/useCountUp";

function Stat({ target, suffix, label }) {
  const [ref, value] = useCountUp(target);
  return <Reveal><div ref={ref} className="stat"><strong>{value}{suffix}</strong><span>{label}</span></div></Reveal>;
}
export default function Stats() {
  return <section className="stats-section"><div className="container stats-grid">
    <Stat target={250} suffix="+" label="Clients served" /><Stat target={500} suffix="+" label="Projects delivered" />
    <Stat target={10} suffix="+" label="Years experience" /><Stat target={95} suffix="%" label="Client satisfaction" />
  </div></section>;
}