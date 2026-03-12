const painCards = [
  {
    num: "01",
    q: '"Every morning feels like a battle."',
    body: "Getting dressed, leaving the house, arriving at school — each transition can spiral into a meltdown before the day has even started.",
  },
  {
    num: "02",
    q: '"I\'ve been told it\'s just behavior."',
    body: "You've tried reward charts, strict routines, consequences. But something deeper is going on, and you can feel it.",
  },
  {
    num: "03",
    q: '"My child can\'t settle, can\'t sleep, can\'t focus."',
    body: "The anxiety never fully lifts. You see them trying so hard. But their nervous system won't let them rest.",
  },
  {
    num: "04",
    q: '"I feel like I\'m failing."',
    body: "You're constantly managing crises instead of connecting with your child. The guilt is crushing.",
  },
  {
    num: "05",
    q: '"Therapies help, then we\'re back to square one."',
    body: "Time, money, and hope poured into approaches that never seem to address what's really happening underneath.",
  },
  {
    num: "06",
    q: '"I just want my child to feel safe in their own body."',
    body: "You're not asking for miracles. Just calm. Just ease. Just connection.",
  },
];

const delays = ["", "ncf-d1", "ncf-d2", "ncf-d3", "ncf-d1", "ncf-d2", "ncf-d3"];

export function PainSection() {
  return (
    <section id="ncf-pain">
      <div className="ncf-pain-header ncf-reveal">
        <div
          className="ncf-eyebrow"
          style={{ justifyContent: "center", color: "var(--blush-deep)" }}
        >
          <span style={{ background: "var(--blush-deep)" }} />
          You've Tried Everything
        </div>
        <h2 className="ncf-stitle-editorial" style={{ textAlign: "center" }}>
          You've Tried Everything<br /><em>Nothing Has Stuck.</em>
        </h2>
        <p
          style={{
            fontSize: "1rem",
            color: "var(--stone-mid)",
            maxWidth: "520px",
            margin: "1rem auto 0",
            textAlign: "center",
            lineHeight: 1.75,
          }}
        >
          If any of these sound familiar, you're in the right place — and you're not alone.
        </p>
      </div>

      <div className="ncf-pain-cards-wrap">
        <div className="ncf-pain-grid">
          {painCards.map((card, i) => (
            <div key={card.num} className={`ncf-pain-card ncf-reveal ${delays[i + 1]}`}>
              <span className="ncf-pain-num">{card.num}</span>
              <div className="ncf-pain-q">{card.q}</div>
              <p className="ncf-pain-b">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}