import { company } from "../../data/siteData";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.siteFooter}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>

          {/* BRAND */}
          <div className={styles.footerAbout}>
            <a className={styles.brand} href="#home">
              <span className={styles.brandMark}>T</span>

              <span className={styles.brandText}>
                {company.name}
                <span className={styles.brandMuted}>
                  {company.descriptor}
                </span>
              </span>
            </a>

            <p>
              Strategy, transformation, and practical growth support
              for ambitious organizations.
            </p>
          </div>

          {/* EXPLORE */}
          <div className={styles.footerColumn}>
            <h4>Explore</h4>

            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#faq">FAQ</a>
          </div>

          {/* SERVICES */}
          <div className={styles.footerColumn}>
            <h4>Services</h4>

            <a href="#services">Strategy</a>
            <a href="#services">Digital Transformation</a>
            <a href="#services">Marketing</a>
            <a href="#services">Management</a>
          </div>

          {/* CONNECT */}
          <div className={styles.footerColumn}>
            <h4>Connect</h4>

            <a href={`mailto:${company.email}`}>
              {company.email}
            </a>

            <a
              href={`tel:${company.phone.replace(/\s/g, "")}`}
            >
              {company.phone}
            </a>

            <a href="#contact">
              Book a Consultation
            </a>
          </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className={styles.footerBottomWrapper}>
        <div className={`${styles.container} ${styles.footerBottom}`}>

          <span>
            © {year} {company.name} {company.descriptor}.
            All rights reserved.
          </span>

          <div className={styles.legalLinks}>
            <a href="/privacy">
              Privacy Policy
            </a>

            <a href="/terms">
              Terms &amp; Conditions
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}