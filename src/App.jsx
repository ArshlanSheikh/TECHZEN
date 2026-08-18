import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustLogos from "./components/TrustLogos";
import About from "./components/About";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Process from "./components/Process";
import Industries from "./components/Industries";
import CaseStudies from "./components/CaseStudies";
import Testimonials from "./components/Testimonials";
import Stats from "./components/Stats";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  useEffect(() => {
    document.title = "TechZen Consulting | Strategy, Growth & Transformation";
  }, []);

  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <TrustLogos />
        <About />
        <Services />
        <WhyUs />
        <Process />
        <Industries />
        <CaseStudies />
        <Testimonials />
        <Stats />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}