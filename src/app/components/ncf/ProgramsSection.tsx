import prog1 from "../../../public/programs/1.1.png";
import prog2 from "../../../public/programs/2.2.png";
import prog3 from "../../../public/programs/3.3.png";

export function ProgramsSection() {
  return (
    <section id="ncf-programs">
      <div className="ncf-prog-header ncf-reveal">
        <div
          className="ncf-eyebrow"
          style={{ justifyContent: "center", color: "var(--sage-deep)" }}
        >
          <span style={{ background: "var(--sage-deep)" }} />
          Programs
        </div>
        <h2 className="ncf-stitle-editorial" style={{ textAlign: "center" }}>
          Support Designed<br />Around <em>Your Family</em>
        </h2>
        <p
          style={{
            fontSize: "1rem",
            color: "var(--stone-mid)",
            maxWidth: "420px",
            margin: "1.2rem auto 0",
            textAlign: "center",
            lineHeight: 1.75,
          }}
        >
          Start with a free session. Stay for lasting transformation.
        </p>
      </div>

      <div className="ncf-pgrid">
        {/* Card 1 */}
        <div className="ncf-pcard ncf-reveal ncf-d1">
          <div className="ncf-pcard-top ncf-pcard-top-1">
            <img src={prog1} alt="Calm water ripples" style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", objectPosition:"center" }} />
            <div className="ncf-pcard-top-circle" />
            <span className="ncf-pcard-badge">Start Here</span>
          </div>
          <div className="ncf-pcard-body">
            <div className="ncf-ptitle">Complimentary Mini Session</div>
            <p className="ncf-pdesc">Experience the approach. Feel immediate relief. No commitment.</p>
            <ul className="ncf-pfeat">
              <li>15–30 min | In person or Zoom</li>
              <li>Intro to Cognomovement</li>
              <li>Watch nervous system shift</li>
              <li>Take home one tool</li>
            </ul>
            <div className="ncf-ppr">
              <div className="ncf-pprice">Free</div>
            </div>
            <a href="#ncf-lead" className="ncf-pbtn ncf-pbtn-sage">Book Free Session</a>
          </div>
        </div>

        {/* Card 2 — Popular */}
        <div className="ncf-pcard ncf-popular ncf-reveal ncf-d2">
          <div className="ncf-pcard-top ncf-pcard-top-2">
            <img src={prog2} alt="Mother and child at the beach" style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", objectPosition:"center" }} />
            <div className="ncf-pcard-top-circle" />
            <span className="ncf-pcard-badge">Most Popular</span>
          </div>
          <div className="ncf-pcard-body">
            <div className="ncf-ptitle">Regulation Foundations</div>
            <p className="ncf-pdesc">3 months of consistent nervous system support. Build calm that lasts.</p>
            <ul className="ncf-pfeat">
              <li>12 weeks | In person or Zoom</li>
              <li>Weekly 90-min group sessions</li>
              <li>Caregiver & educator guidance</li>
              <li>Strategies for daily use</li>
            </ul>
            <div className="ncf-ppr">
              <div className="ncf-pprice" style={{ fontSize: "1.6rem", lineHeight: 1.3 }}>Contact for Pricing</div>
            </div>
            <a href="#ncf-lead" className="ncf-pbtn ncf-pbtn-white">Start Building Regulation</a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="ncf-pcard ncf-reveal ncf-d3">
          <div className="ncf-pcard-top ncf-pcard-top-3">
            <img src={prog3} alt="Dandelion macro" style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", objectPosition:"center" }} />
            <div className="ncf-pcard-top-circle" />
            <span className="ncf-pcard-badge">Deep Transformation</span>
          </div>
          <div className="ncf-pcard-body">
            <div className="ncf-ptitle">Regulation & Resilience</div>
            <p className="ncf-pdesc">6 months of comprehensive support. From surviving to thriving.</p>
            <ul className="ncf-pfeat">
              <li>6 months | In person or Zoom</li>
              <li>Twice-weekly 90-min sessions</li>
              <li>Nervous system education</li>
              <li>Option for 1:1 sessions</li>
            </ul>
            <div className="ncf-ppr">
              <div className="ncf-pprice" style={{ fontSize: "1.6rem", lineHeight: 1.3 }}>Contact for Pricing</div>
            </div>
            <a href="#ncf-lead" className="ncf-pbtn ncf-pbtn-blush">Discover Full Program</a>
          </div>
        </div>
      </div>
    </section>
  );
}