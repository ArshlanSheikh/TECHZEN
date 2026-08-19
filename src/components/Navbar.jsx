// import { useEffect, useState } from "react";
// import { Menu, X } from "lucide-react";
// import { company } from "../data/siteData";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const links = [
//     ["Home", "#home"], ["About", "#about"], ["Services", "#services"], ["Why Us", "#why-us"],
//     ["Process", "#process"], ["Testimonials", "#testimonials"], ["FAQ", "#faq"]
//   ];

//   return (
//     <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
//       <div className="container nav-wrap">
//         <a className="brand" href="#home" aria-label={`${company.name} ${company.descriptor} home`}>
//           <span className="brand-mark">T</span>
//           <span>{company.name}<span className="brand-muted">{company.descriptor}</span></span>
//         </a>

//         <button className="nav-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="primaryNav" aria-label={open ? "Close navigation" : "Open navigation"}>
//           {open ? <X size={22} /> : <Menu size={22} />}
//         </button>

//         <nav className={`primary-nav ${open ? "open" : ""}`} id="primaryNav" aria-label="Primary navigation">
//           {links.map(([label, href]) => (
//             <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
//           ))}
//           <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Book a Consultation</a>
//         </nav>
//       </div>
//     </header>
//   );
// }


import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { company } from "../data/siteData";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Services", "#services"],
    ["Why Us", "#why-us"],
    ["Process", "#process"],
    ["Testimonials", "#testimonials"],
    ["FAQ", "#faq"],
  ];

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      {/* BACKDROP */}
      <div
        className={`${styles.backdrop} ${
          open ? styles.backdropVisible : ""
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <header
        className={`${styles.header} ${
          scrolled ? styles.scrolled : ""
        }`}
      >
        <div className={styles.container}>
          <div className={styles.navWrap}>

            {/* LOGO */}
            <a
              className={styles.brand}
              href="#home"
              onClick={closeMenu}
              aria-label={`${company.name} ${company.descriptor} home`}
            >
              <span className={styles.brandMark}>T</span>

              <span className={styles.brandText}>
                {company.name}
                <span className={styles.brandMuted}>
                  {company.descriptor}
                </span>
              </span>
            </a>


            {/* DESKTOP NAV */}
            <nav
              className={styles.desktopNav}
              aria-label="Primary navigation"
            >
              {links.map(([label, href]) => (
                <a key={href} href={href}>
                  {label}
                </a>
              ))}

              <a
                className={styles.navCta}
                href="#contact"
              >
                Book a Consultation
                <ArrowRight size={16} />
              </a>
            </nav>


            {/* MOBILE MENU BUTTON */}
            <button
              className={`${styles.menuButton} ${
                open ? styles.menuButtonOpen : ""
              }`}
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="mobileNav"
              aria-label={
                open
                  ? "Close navigation"
                  : "Open navigation"
              }
            >
              {open ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}
            </button>

          </div>
        </div>
      </header>


      {/* MOBILE SIDEBAR */}
      <aside
        id="mobileNav"
        className={`${styles.mobileSidebar} ${
          open ? styles.sidebarOpen : ""
        }`}
        aria-hidden={!open}
      >
        <div className={styles.sidebarInner}>

          <div className={styles.sidebarHeader}>
            <span>Navigation</span>

            <span className={styles.sidebarLine} />
          </div>


          <nav className={styles.mobileNav}>
            {links.map(([label, href], index) => (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                style={{
                  transitionDelay: open
                    ? `${index * 70 + 100}ms`
                    : "0ms",
                }}
              >
                {/* <span className={styles.mobileLinkNumber}>
                  0{index + 1}
                </span> */}

                <span>{label}</span>

                <ArrowRight
                  size={17}
                  className={styles.mobileArrow}
                />
              </a>
            ))}

            <a
              className={styles.mobileCta}
              href="#contact"
              onClick={closeMenu}
              style={{
                transitionDelay: open
                  ? `${links.length * 70 + 100}ms`
                  : "0ms",
              }}
            >
              Book a Consultation
              <ArrowRight size={17} />
            </a>
          </nav>


          <div className={styles.sidebarFooter}>
            <span>© {new Date().getFullYear()}</span>
            <span>{company.name}</span>
          </div>

        </div>
      </aside>
    </>
  );
}