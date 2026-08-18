import { company } from "../data/siteData";
export default function Footer() {
  const year = new Date().getFullYear();
  return <footer className="site-footer"><div className="container footer-grid">
    <div><a className="brand footer-brand" href="#home"><span className="brand-mark">T</span><span>{company.name}<span className="brand-muted">{company.descriptor}</span></span></a><p>Strategy, transformation, and practical growth support for ambitious organizations.</p></div>
    <div><h4>Explore</h4><a href="#about">About</a><a href="#services">Services</a><a href="#process">Process</a><a href="#faq">FAQ</a></div>
    <div><h4>Services</h4><a href="#services">Strategy</a><a href="#services">Digital Transformation</a><a href="#services">Marketing</a><a href="#services">Management</a></div>
    <div><h4>Connect</h4><a href={`mailto:${company.email}`}>{company.email}</a><a href={`tel:${company.phone.replace(/\s/g,"")}`}>{company.phone}</a><a href="#contact">Book a Consultation</a></div>
  </div><div className="container footer-bottom"><span>© {year} {company.name} {company.descriptor}. All rights reserved.</span><div><a href="/privacy">Privacy Policy</a><a href="/terms">Terms &amp; Conditions</a></div></div></footer>;
}