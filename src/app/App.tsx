import { useEffect } from "react";
import { Nav } from "./components/ncf/Nav";
import { Hero } from "./components/ncf/Hero";
import { TrustBar } from "./components/ncf/TrustBar";
import { PainSection } from "./components/ncf/PainSection";
import { MissingPiece } from "./components/ncf/MissingPiece";
import { StatsBand } from "./components/ncf/StatsBand";
import { MethodSection } from "./components/ncf/MethodSection";
import { Testimonials } from "./components/ncf/Testimonials";
import { FounderSection } from "./components/ncf/FounderSection";
import { ComparisonSection } from "./components/ncf/ComparisonSection";
import { ProgramsSection } from "./components/ncf/ProgramsSection";
import { ScienceSection } from "./components/ncf/ScienceSection";
import { LeadMagnet } from "./components/ncf/LeadMagnet";
import { FinalCTA } from "./components/ncf/FinalCTA";
import { Footer } from "./components/ncf/Footer";

export default function App() {
  useEffect(() => {
    // Apply body class for NCF styles
    document.body.classList.add("ncf-body");

    // Intersection Observer for scroll reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("ncf-visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.07, rootMargin: "0px 0px -40px 0px" }
    );

    const setupObserver = () => {
      document.querySelectorAll(".ncf-reveal").forEach((el) => {
        observer.observe(el);
      });
    };

    setupObserver();

    // Re-run after a short delay to catch all rendered elements
    const timer = setTimeout(setupObserver, 300);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
      document.body.classList.remove("ncf-body");
    };
  }, []);

  return (
    <div style={{ fontFamily: "var(--ff-sans)", overflowX: "hidden" }}>
      <Nav />
      <Hero />
      <TrustBar />
      <PainSection />
      <MissingPiece />
      <StatsBand />
      <MethodSection />
      <Testimonials />
      <FounderSection />
      <ComparisonSection />
      <ProgramsSection />
      <ScienceSection />
      <LeadMagnet />
      <FinalCTA />
      <Footer />
    </div>
  );
}
