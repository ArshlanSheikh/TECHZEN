import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { company } from "../data/siteData";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["Home", "#home"], ["About", "#about"], ["Services", "#services"], ["Why Us", "#why-us"],
    ["Process", "#process"], ["Testimonials", "#testimonials"], ["FAQ", "#faq"]
  ];

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-wrap">
        <a className="brand" href="#home" aria-label={`${company.name} ${company.descriptor} home`}>
          <span className="brand-mark">T</span>
          <span>{company.name}<span className="brand-muted">{company.descriptor}</span></span>
        </a>

        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="primaryNav" aria-label={open ? "Close navigation" : "Open navigation"}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={`primary-nav ${open ? "open" : ""}`} id="primaryNav" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Book a Consultation</a>
        </nav>
      </div>
    </header>
  );
}