import ballImg from "../../../public/bacll.png";

const scienceCards = [
  {
    stat: "71%",
    label: "Reduced Mental Agitation",
    body: "Theta/Beta ratio normalized — substantial decrease in agitation and improved brain functioning.",
  },
  {
    stat: "79%",
    label: "Reduced Cognitive Load",
    body: "Audio P300 voltage dropped from 11.1 to 2.3 μV — clear improvement in cognitive function.",
  },
  {
    stat: "32%",
    label: "Better Brain Coordination",
    body: "Trail Making Test A improved by 32%, indicating enhanced coordination between brain regions.",
  },
  {
    stat: "↓",
    label: "Stress Responses Normalized",
    body: "Theta hyperactivity associated with subconscious disturbances normalized after one session.",
  },
  {
    stat: "↑",
    label: "Cognitive Processing Enhanced",
    body: "Alpha power ratio improved from below to above normal — better decision-making capacity.",
  },
  {
    stat: '"Marked Overall Improvement"',
    label: "Independent Research Findings",
    body: "Independent researchers reported being impressed by the clear, measurable effects in brain function.",
  },
];

const delays = ["ncf-d1", "ncf-d2", "ncf-d3", "ncf-d1", "ncf-d2", "ncf-d3"];

export function ScienceSection() {
  return (
    <section id="ncf-science">
      <div className="ncf-sci-header">
        <div className="ncf-reveal">
          <div className="ncf-eyebrow">The Science</div>
          <h2 className="ncf-stitle-editorial">
            Independent Brain<br />Mapping <em>Validates</em><br />the Results
          </h2>
        </div>
        <div className="ncf-reveal ncf-d1">
          <img
            src={ballImg}
            alt="Cognomovement Ball"
            style={{ width: "110px", height: "110px", objectFit: "cover", borderRadius: "50%", marginBottom: "1.2rem", display: "block" }}
          />
          <p
            style={{
              fontSize: "1rem",
              color: "var(--stone-mid)",
              lineHeight: 1.8,
              marginBottom: "1.5rem",
            }}
          >
            P300 QEEG research shows measurable improvements from a single 40-minute
            Cognomovement session.
          </p>
          <a href="#ncf-lead" className="ncf-btn-text">See the full research →</a>
        </div>
      </div>

      <div className="ncf-sgrid">
        {scienceCards.map((card, i) => (
          <div key={i} className={`ncf-scard ncf-reveal ${delays[i]}`}>
            <div className="ncf-sstat">{card.stat}</div>
            <div className="ncf-slabel">{card.label}</div>
            <p className="ncf-sbody">{card.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}