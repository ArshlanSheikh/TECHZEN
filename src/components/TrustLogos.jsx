import Reveal from "./Reveal";
export default function TrustLogos() {
  return <section className="logo-strip section-sm"><div className="container">
    <p className="center-label">TRUSTED BY TEAMS BUILDING WHAT'S NEXT</p>
    <Reveal><div className="logo-grid">{["NORTHSTAR","APEX","VERTEX","ORBIT","SUMMIT"].map(x => <span key={x}>{x}</span>)}</div></Reveal>
  </div></section>;
}