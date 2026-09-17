import { ArrowRight } from "lucide-react";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <div className={styles.splitGrid}>

          {/* VISUAL */}
          <div className={styles.aboutVisual}>
            <div className={styles.aboutPanel}>
              <div className={styles.panelTop}>
                <span>Our perspective</span>
                <span>01 / 04</span>
              </div>

              <div className={styles.quoteMark}>“</div>

              <h3>
                Good strategy is only valuable when people can execute it.
              </h3>

              <div className={styles.miniLine} />

              <p>
                We bridge the gap between boardroom thinking and measurable
                business action.
              </p>
            </div>

            <div className={styles.experienceBadge}>
              <strong>10+</strong>
              <span>
                Years of
                <br />
                experience
              </span>
            </div>
          </div>

          {/* CONTENT */}
          <div className={styles.aboutCopy}>
            <p className={styles.eyebrow}>
              ABOUT US
            </p>

            <h2>
              Clarity for today.{" "}
              <em>Momentum for tomorrow.</em>
            </h2>

            <p>
              TechZen Consulting partners with leaders who need more than
              advice. We bring structured thinking, commercial insight, and
              practical execution to the decisions that matter most.
            </p>

            <p>
              Our approach is deliberately collaborative: understand the
              real problem, align the people involved, build a focused
              strategy, and stay close enough to help make it work.
            </p>

            {/* VALUES */}
            <div className={styles.values}>
              {[
                [
                  "01",
                  "Practical",
                  "Recommendations built for real-world execution.",
                ],
                [
                  "02",
                  "Personal",
                  "Every engagement is shaped around your context.",
                ],
                [
                  "03",
                  "Measurable",
                  "Clear outcomes, milestones, and accountability.",
                ],
              ].map(([n, t, d]) => (
                <div className={styles.valueItem} key={n}>
                  <span>{n}</span>
                  <b>{t}</b>
                  <small>{d}</small>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              className={styles.textLink}
              href="#contact"
            >
              Start a conversation
              <ArrowRight size={16} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}