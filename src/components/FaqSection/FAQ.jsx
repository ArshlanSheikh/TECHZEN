
import { useState } from "react";
import { ArrowRight, Plus } from "lucide-react";
import { faqs } from "../../data/siteData";
import styles from "./FAQ.module.css";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        <div className={styles.faqGrid}>
          {/* FAQ HEADING */}
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>FAQ</p>

              <h2>
                Questions, answered <em>clearly.</em>
              </h2>
            </div>

            <p>
              Still have a question? Send us a message and
              we'll be happy to discuss your situation.
            </p>

            <a className={styles.textLink} href="#contact">
              Ask us directly
              <ArrowRight size={16} />
            </a>
          </div>

          {/* FAQ LIST */}
          <div className={styles.faqList}>
            {faqs.map(([q, a], i) => {
              const isOpen = open === i;

              return (
                <div
                  className={`${styles.faqItem} ${
                    isOpen ? styles.open : ""
                  }`}
                  key={q}
                >
                  <button
                    type="button"
                    className={styles.faqQuestion}
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpen(isOpen ? null : i)
                    }
                  >
                    <span>{q}</span>

                    <Plus
                      size={20}
                      className={styles.plusIcon}
                    />
                  </button>

                  <div
                    className={styles.faqAnswer}
                    style={{
                      maxHeight: isOpen ? "200px" : "0px",
                    }}
                  >
                    <p>{a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}