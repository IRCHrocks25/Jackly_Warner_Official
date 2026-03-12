import footerLogo from "../../../public/footer_logo.png";

export function Footer() {
  return (
    <footer className="ncf-footer">
      <div className="ncf-ftop">
        <div className="ncf-fb">
          <a href="#" className="ncf-nav-logo" aria-label="NeuroChangeFamily home">
            <img
              src={footerLogo}
              alt="NeuroChangeFamily"
              style={{ height: '42px', width: 'auto', objectFit: 'contain', opacity: 0.9 }}
            />
          </a>
          <p>
            Serving families in Naples–Fort Myers, Florida and virtually via Zoom. Led by Jacklyn
            Warner, RN | Certified Cognomovement Practitioner | 33 Years Clinical Experience |
            Featured on New Life Perspectives UK
          </p>
          <div className="ncf-floc">📍 Naples–Fort Myers, Florida · Virtual via Zoom</div>
        </div>

        <div className="ncf-fcol">
          <h5>Navigate</h5>
          <ul>
            <li><a href="#ncf-pain">Why NCF</a></li>
            <li><a href="#ncf-missing">The Approach</a></li>
            <li><a href="#ncf-method">The Method</a></li>
            <li><a href="#ncf-testimonials">Family Stories</a></li>
            <li><a href="#ncf-founder">Meet Jacklyn</a></li>
          </ul>
        </div>

        <div className="ncf-fcol">
          <h5>Programs</h5>
          <ul>
            <li><a href="#ncf-programs">Free Mini Session</a></li>
            <li><a href="#ncf-programs">Regulation Foundations</a></li>
            <li><a href="#ncf-programs">Regulation & Resilience</a></li>
            <li><a href="#ncf-science">The Science</a></li>
          </ul>
        </div>

        <div className="ncf-fcol">
          <h5>Connect</h5>
          <ul>
            <li><a href="#ncf-lead">Book Free Session</a></li>
            <li><a href="#ncf-final">Family Inquiry</a></li>
            <li><a href="#">School Partnerships</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>

      <div className="ncf-fbot">
        <span>© 2025 NeuroChangeFamily. All rights reserved.</span>
        <span>Made by KATALYST</span>
      </div>
    </footer>
  );
}