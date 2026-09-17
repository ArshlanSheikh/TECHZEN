// import { ArrowUpRight, BriefcaseBusiness, Compass, Cpu, Megaphone, WalletCards, UsersRound } from "lucide-react";
// import { services } from "../data/siteData";
// import Reveal from "./Reveal";
// import SectionHeading from "./SectionHeading";

// const icons = { business: BriefcaseBusiness, strategy: Compass, digital: Cpu, marketing: Megaphone, finance: WalletCards, management: UsersRound };

// export default function Services() {
//   return <section className="section section-soft" id="services"><div className="container">
//     <Reveal><SectionHeading eyebrow="WHAT WE DO" title="Expertise built around <em>your next move.</em>" description="From strategic direction to operational improvement, we bring the right expertise to the problem in front of you." /></Reveal>
//     <div className="services-grid">{services.map(s => {
//       const Icon = icons[s.icon];
//       return <Reveal key={s.number}><article className="service-card"><span className="service-num">{s.number}</span><div className="icon-box"><Icon size={23}/></div><h3>{s.title}</h3><p>{s.description}</p><a href="#contact" className="text-link">Discuss this service <ArrowUpRight size={16}/></a></article></Reveal>
//     })}</div>
//   </div></section>;
// }








import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  LineChart,
  Megaphone,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import styles from "./Services.module.css";

const services = [
  {
    title: "Business Strategy",
    description:
      "Build a clear roadmap that turns ambitious business goals into measurable and sustainable growth.",
    icon: BriefcaseBusiness,
    color: "#2563eb",
    features: [
      "Growth planning",
      "Market analysis",
      "Strategic roadmap",
    ],
  },
  {
    title: "AI & Automation",
    description:
      "Use intelligent automation to reduce repetitive work and create smarter, faster operations.",
    icon: BrainCircuit,
    color: "#7c3aed",
    features: [
      "AI solutions",
      "Workflow automation",
      "Smart systems",
    ],
  },
  {
    title: "Digital Transformation",
    description:
      "Modernize your digital infrastructure and create experiences built for the future.",
    icon: Code2,
    color: "#0891b2",
    features: [
      "Digital strategy",
      "Technology planning",
      "Process redesign",
    ],
  },
  {
    title: "Growth Consulting",
    description:
      "Identify high-value opportunities and turn them into sustainable revenue and business growth.",
    icon: LineChart,
    color: "#059669",
    features: [
      "Revenue growth",
      "Performance analysis",
      "Optimization",
    ],
  },
  {
    title: "Marketing Strategy",
    description:
      "Create focused marketing systems that attract the right audience and convert demand.",
    icon: Megaphone,
    color: "#ea580c",
    features: [
      "Brand strategy",
      "Campaign planning",
      "Customer acquisition",
    ],
  },
  {
    title: "Performance Analytics",
    description:
      "Turn complex business data into clear insights that support confident business decisions.",
    icon: BarChart3,
    color: "#db2777",
    features: [
      "Data analysis",
      "KPI dashboards",
      "Business insights",
    ],
  },
  {
    title: "Risk & Compliance",
    description:
      "Protect your organization with practical risk management and compliance frameworks.",
    icon: ShieldCheck,
    color: "#475569",
    features: [
      "Risk assessment",
      "Compliance",
      "Process controls",
    ],
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  /*
    Automatically rotate every 2.2 seconds
  */
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setActive((current) => (current + 1) % services.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [paused]);

  /*
    Move to previous card
  */
  const previous = () => {
    setActive(
      (current) =>
        (current - 1 + services.length) % services.length
    );
  };

  /*
    Move to next card
  */
  const next = () => {
    setActive(
      (current) =>
        (current + 1) % services.length
    );
  };

  /*
    Calculate where each card should appear.

    - center
    - left-1
    - left-2
    - right-1
    - right-2
    - hidden
  */
  const getPosition = (index) => {
    let difference = index - active;

    if (difference > services.length / 2) {
      difference -= services.length;
    }

    if (difference < -services.length / 2) {
      difference += services.length;
    }

    if (difference === 0) return "center";

    if (difference === -1) return "leftOne";

    if (difference === -2) return "leftTwo";

    if (difference === 1) return "rightOne";

    if (difference === 2) return "rightTwo";

    return "hidden";
  };

  return (
    <section
      className={styles.services}
      id="services"
    >
      <div className={styles.container}>

        {/* ================================
            SECTION HEADER
        ================================= */}

        <div className={styles.sectionHeader}>

          <div className={styles.headingBlock}>
            <span className={styles.eyebrow}>
              WHAT WE DO
            </span>

            <h2>
              Solutions built for
              <span> meaningful growth.</span>
            </h2>
          </div>

          {/* <p className={styles.sectionIntro}>
            From strategy to execution, we help ambitious
            organizations solve complex problems and turn
            opportunities into measurable results.
          </p> */}

        </div>


        {/* ================================
            3D CAROUSEL
        ================================= */}

        <div
          className={styles.stage}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >

          {/* Background glow */}
          <div className={styles.glow} />

          {/* Decorative rings */}
          <div className={styles.ring } />
          <div className={styles.ring} />
          <div className={styles.ring } />


          <div className={styles.carousel}>

            {services.map((service, index) => {
              const Icon = service.icon;

              const position = getPosition(index);

              return (
                <article
                  key={service.title}
                  className={`${styles.card} ${
                    styles[position]
                  }`}
                  style={{
                    "--accent": service.color,
                  }}
                  onClick={() => setActive(index)}
                >

                  {/* Card top */}

                  <div className={styles.cardTop}>

                    <div className={styles.iconBox}>
                      <Icon
                        size={24}
                        strokeWidth={1.8}
                      />
                    </div>

                    <span className={styles.cardNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                  </div>


                  {/* Card content */}

                  <div className={styles.cardContent}>

                    <h3>
                      {service.title}
                    </h3>

                    <p>
                      {service.description}
                    </p>


                    <div className={styles.features}>

                      {service.features.map(
                        (feature) => (
                          <span key={feature}>
                            <CheckCircle2
                              size={14}
                            />

                            {feature}
                          </span>
                        )
                      )}

                    </div>

                  </div>


                  {/* Card bottom */}

                  <div className={styles.cardBottom}>

                    <span>
                      Explore service
                    </span>

                    <div className={styles.arrow}>
                      <ArrowUpRight size={18} />
                    </div>

                  </div>

                </article>
              );
            })}

          </div>


          {/* ================================
              ARROWS
          ================================= */}

          <button
            className={`${styles.carouselButton} ${styles.previousButton}`}
            onClick={previous}
            aria-label="Previous service"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            className={`${styles.carouselButton} ${styles.nextButton}`}
            onClick={next}
            aria-label="Next service"
          >
            <ChevronRight size={20} />
          </button>

        </div>


        {/* ================================
            CONTROLS
        ================================= */}

        <div className={styles.controls}>

          <div className={styles.counter}>

            <span className={styles.currentNumber}>
              {String(active + 1).padStart(2, "0")}
            </span>

            <div className={styles.progress}>
              <span
                style={{
                  width: `${
                    ((active + 1) /
                      services.length) *
                    100
                  }%`,
                }}
              />
            </div>

            <span className={styles.totalNumber}>
              {String(services.length).padStart(2, "0")}
            </span>

          </div>


          <div className={styles.currentService}>
            {services[active].title}
          </div>


          <button
            className={styles.pauseButton}
            onClick={() =>
              setPaused((value) => !value)
            }
          >
            {paused
              ? "Resume rotation"
              : "Pause rotation"}
          </button>

        </div>

      </div>
    </section>
  );
}

