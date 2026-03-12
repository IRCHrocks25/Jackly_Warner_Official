const rows = [
  {
    left: "Corrects behavior from the outside — managing symptoms without the root cause",
    right: "Regulates the nervous system so behavior naturally shifts from the inside",
  },
  {
    left: "Discipline, rewards, consequences — can't reach a nervous system in survival mode",
    right: "Gentle movement & sensory exercises — accesses the central nervous system directly",
  },
  {
    left: "Treats the child in isolation — ignores the family system",
    right: "Supports the whole family — because a child's calm is tied to their parents' energy",
  },
  {
    left: "Temporary relief — fades when external structure is removed",
    right: "Lasting resilience — nervous system integration that sustains beyond sessions",
  },
  {
    left: "Feels clinical and corrective — can increase shame and resistance",
    right: "Feels safe and playful — children engage naturally and without pressure",
  },
  {
    left: "Long timelines, unclear outcomes",
    right: "Noticeable shifts quickly — families often see change in the first few sessions",
  },
];

export function ComparisonSection() {
  return (
    <section id="ncf-comparison">
      <div className="ncf-comp-header ncf-reveal">
        <div
          className="ncf-eyebrow"
          style={{ justifyContent: "center", color: "var(--stone-light)" }}
        >
          <span style={{ background: "var(--stone-light)" }} />
          The Difference
        </div>
        <h2 className="ncf-stitle-editorial" style={{ textAlign: "center" }}>
          Traditional Approaches<br />vs. <em>NeuroChangeFamily</em>
        </h2>
        <p
          style={{
            fontSize: "1rem",
            color: "var(--stone-mid)",
            maxWidth: "460px",
            margin: "1.2rem auto 0",
            textAlign: "center",
            lineHeight: 1.75,
          }}
        >
          See why a nervous-system-first approach changes everything.
        </p>
      </div>

      <div className="ncf-comp-table ncf-reveal">
        <div className="ncf-comp-head">
          <div className="ncf-ch-l">Traditional Approaches</div>
          <div className="ncf-ch-r">NeuroChangeFamily</div>
        </div>
        {rows.map((row, i) => (
          <div key={i} className="ncf-cr">
            <div className="ncf-cr-l">{row.left}</div>
            <div className="ncf-cr-r">{row.right}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
