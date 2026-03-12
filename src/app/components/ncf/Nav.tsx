import { useState, useEffect } from "react";
import navLogo from "../../../public/footer_logo.png";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className="ncf-nav"
        style={{ boxShadow: scrolled ? "0 2px 32px rgba(46,40,34,0.1)" : "none" }}
      >
        <a href="#" className="ncf-nav-logo" aria-label="NeuroChangeFamily home">
          <img
            src={navLogo}
            alt="NeuroChangeFamily"
            className="ncf-nav-logo-img"
          />
        </a>
        <ul className="ncf-nav-links">
          <li><a href="#ncf-pain">Why NCF</a></li>
          <li><a href="#ncf-method">The Method</a></li>
          <li><a href="#ncf-programs">Programs</a></li>
          <li><a href="#ncf-founder">Jacklyn</a></li>
          <li><a href="#ncf-science">The Science</a></li>
          <li><a href="#ncf-lead" className="ncf-nav-cta">Book Free Session</a></li>
        </ul>
        <button
          className={`ncf-nav-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
      <div className={`ncf-mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#ncf-pain" onClick={closeMenu}>Why NCF</a>
        <a href="#ncf-method" onClick={closeMenu}>The Method</a>
        <a href="#ncf-programs" onClick={closeMenu}>Programs</a>
        <a href="#ncf-founder" onClick={closeMenu}>Jacklyn</a>
        <a href="#ncf-science" onClick={closeMenu}>The Science</a>
        <a href="#ncf-lead" className="ncf-nav-cta" onClick={closeMenu}>Book Free Session</a>
      </div>
    </>
  );
}