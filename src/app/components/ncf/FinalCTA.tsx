export function FinalCTA() {
  return (
    <section id="ncf-final">
      <div className="ncf-final-circle ncf-final-circle--1" />
      <div className="ncf-final-circle ncf-final-circle--2" />
      <div className="ncf-final-circle ncf-final-circle--3" />
      <div className="ncf-final-circle ncf-final-circle--4" />

      <div className="ncf-final-inner">
        <div className="ncf-reveal">
          <div
            className="ncf-eyebrow"
            style={{ justifyContent: "center", color: "var(--stone-light)" }}
          >
            <span style={{ background: "var(--stone-light)" }} />
            Begin Your Journey
          </div>
          <h2
            className="ncf-stitle-editorial"
            style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 1.2rem" }}
          >
            Stop Surviving.<br /><em>Start Regulating.</em>
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--stone-mid)",
              maxWidth: "480px",
              margin: "0 auto 2.5rem",
              textAlign: "center",
              lineHeight: 1.8,
            }}
          >
            Your child isn't broken. You're not failing. The nervous system just needs support —
            and we know exactly how to provide it.
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <a href="#ncf-lead" className="ncf-btn-primary">
              Begin Your Family's Transformation →
            </a>
          </div>
        </div>

        <div className="ncf-final-q ncf-reveal">
          "When we support the nervous system first, everything else naturally follows."
          <cite className="ncf-final-attr">— NeuroChangeFamily</cite>
        </div>
      </div>
    </section>
  );
}