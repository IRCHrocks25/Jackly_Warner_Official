import leadImg from "../../../public/boy_kite.png";

export function LeadMagnet() {
  return (
    <section id="ncf-lead">
      <div className="ncf-lead-inner">
        <div className="ncf-lead-visual">
          <img
            src={leadImg}
            alt="Children playing with a kite in a sunny field"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
            }}
          />
        </div>

        <div className="ncf-lead-content ncf-reveal">
          <div className="ncf-lead-eyebrow">Free Mini Session</div>
          <h2 className="ncf-lead-title">
            Experience Calm in Minutes. Completely Free.
          </h2>
          <p className="ncf-lead-sub">
            See firsthand how gentle nervous system support can create immediate relief — for your
            child and your whole family. No commitment. No pressure. Just a calm, safe experience.
          </p>
          <div className="ncf-lead-cks">
            <div className="ncf-lck">Watch your child's stress shift in real time</div>
            <div className="ncf-lck">Take home a tool you can use today</div>
            <div className="ncf-lck">15–30 minutes, in person or Zoom</div>
            <div className="ncf-lck">No diagnosis, no judgment</div>
          </div>
          <a href="https://calendly.com/bouviermon/30min" className="ncf-btn-white" style={{ alignSelf: "flex-start" }} target="_blank" rel="noopener noreferrer">
            Book Your Free Mini Session →
          </a>
        </div>
      </div>
    </section>
  );
}