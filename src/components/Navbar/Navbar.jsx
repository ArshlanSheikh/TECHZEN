import { useEffect, useState } from "react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

import { company, projects, services } from "../../data/siteData";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    setMobileProjectsOpen(false);
    setMobileServicesOpen(false);
  };

  const homeLinks = [
    ["Home", "/#home"],
    ["About", "/#about"],
    ["Why Us", "/#why-us"],
    ["Process", "/#process"],
    ["Testimonials", "/#testimonials"],
    ["FAQ", "/#faq"],
  ];

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
            <Link
              className={styles.brand}
              to="/#home"
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
            </Link>

            {/* DESKTOP NAV */}
            <nav
              className={styles.desktopNav}
              aria-label="Primary navigation"
            >
              {/* HOME LINKS */}
              {homeLinks.slice(0, 2).map(([label, href]) => (
                <Link key={href} to={href}>
                  {label}
                </Link>
              ))}

              {/* SERVICES DROPDOWN */}
              <div className={styles.dropdown}>
                <button className={styles.dropdownTrigger}>
                  Services
                  <ChevronDown size={15} />
                </button>

                <div className={styles.dropdownMenu}>
                  {services.map((service, index) => {
                    const title = Array.isArray(service)
                      ? service[0]
                      : service.title;

                    return (
                      <Link
                        key={title}
                        to={`/#services`}
                        className={styles.dropdownItem}
                      >
                        <span className={styles.dropdownNumber}>
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span>{title}</span>

                        <ArrowRight
                          size={15}
                          className={styles.dropdownArrow}
                        />
                      </Link>
                    );
                  })}

                  <Link
                    to="/#services"
                    className={styles.dropdownFooter}
                  >
                    View all services
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              {/* WHY US */}
              <Link to="/#why-us">
                Why Us
              </Link>

              {/* PROCESS */}
              <Link to="/#process">
                Process
              </Link>

              {/* PROJECTS DROPDOWN */}
              <div className={styles.dropdown}>
                <button className={styles.dropdownTrigger}>
                  Projects
                  <ChevronDown size={15} />
                </button>

                <div className={styles.dropdownMenu}>
                  {projects.map((project, index) => (
                    <Link
                      key={project.id || project.title}
                      to={`/projects/${project.id}`}
                      className={styles.dropdownItem}
                    >
                      <span className={styles.dropdownNumber}>
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span>{project.title}</span>

                      <ArrowRight
                        size={15}
                        className={styles.dropdownArrow}
                      />
                    </Link>
                  ))}

                  <Link
                    to="/projects"
                    className={styles.dropdownFooter}
                  >
                    View all projects
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              {/* FAQ */}
              <Link to="/#faq">
                FAQ
              </Link>

              {/* CTA */}
              <Link
                className={styles.navCta}
                to="/#contact"
              >
                Book a Consultation
                <ArrowRight size={16} />
              </Link>
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

            {/* HOME */}
            <Link
              to="/#home"
              onClick={closeMenu}
            >
              <span>Home</span>
              <ArrowRight size={17} />
            </Link>

            {/* ABOUT */}
            <Link
              to="/#about"
              onClick={closeMenu}
            >
              <span>About</span>
              <ArrowRight size={17} />
            </Link>

            {/* SERVICES */}
            <div className={styles.mobileDropdown}>
              <button
                className={styles.mobileDropdownTrigger}
                onClick={() =>
                  setMobileServicesOpen(
                    !mobileServicesOpen
                  )
                }
              >
                <span>Services</span>

                <ChevronDown
                  size={18}
                  className={
                    mobileServicesOpen
                      ? styles.chevronOpen
                      : ""
                  }
                />
              </button>

              <div
                className={`${styles.mobileDropdownMenu} ${
                  mobileServicesOpen
                    ? styles.mobileDropdownOpen
                    : ""
                }`}
              >
                {services.map((service) => {
                  const title = Array.isArray(service)
                    ? service[0]
                    : service.title;

                  return (
                    <Link
                      key={title}
                      to="/#services"
                      onClick={closeMenu}
                    >
                      {title}
                      <ArrowRight size={15} />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* WHY US */}
            <Link
              to="/#why-us"
              onClick={closeMenu}
            >
              <span>Why Us</span>
              <ArrowRight size={17} />
            </Link>

            {/* PROCESS */}
            <Link
              to="/#process"
              onClick={closeMenu}
            >
              <span>Process</span>
              <ArrowRight size={17} />
            </Link>

            {/* PROJECTS */}
            <div className={styles.mobileDropdown}>
              <button
                className={styles.mobileDropdownTrigger}
                onClick={() =>
                  setMobileProjectsOpen(
                    !mobileProjectsOpen
                  )
                }
              >
                <span>Projects</span>

                <ChevronDown
                  size={18}
                  className={
                    mobileProjectsOpen
                      ? styles.chevronOpen
                      : ""
                  }
                />
              </button>

              <div
                className={`${styles.mobileDropdownMenu} ${
                  mobileProjectsOpen
                    ? styles.mobileDropdownOpen
                    : ""
                }`}
              >
                {projects.map((project) => (
                  <Link
                    key={project.id}
                    to={`/projects/${project.id}`}
                    onClick={closeMenu}
                  >
                    {project.title}
                    <ArrowRight size={15} />
                  </Link>
                ))}

                <Link
                  to="/projects"
                  onClick={closeMenu}
                >
                  View all projects
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* TESTIMONIALS */}
            <Link
              to="/#testimonials"
              onClick={closeMenu}
            >
              <span>Testimonials</span>
              <ArrowRight size={17} />
            </Link>

            {/* FAQ */}
            <Link
              to="/#faq"
              onClick={closeMenu}
            >
              <span>FAQ</span>
              <ArrowRight size={17} />
            </Link>

            {/* CTA */}
            <Link
              className={styles.mobileCta}
              to="/#contact"
              onClick={closeMenu}
            >
              Book a Consultation
              <ArrowRight size={17} />
            </Link>

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