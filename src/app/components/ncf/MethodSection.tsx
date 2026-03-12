import methodImg from "../../../public/image_3.png";

const steps = [
  {
    num: "01",
    title: "Observe & Understand",
    body: "We identify nervous system signals and patterns, seeing what your child actually needs beneath the behavior. You gain clarity, relief from blame, and a new lens rooted in compassion.",
    tag: "Clarity for the Family",
  },
  {
    num: "02",
    title: "Regulate First",
    body: "Through gentle Cognomovement — including eye tracking, cross-body movement, and sensory exercises — we bypass cognitive processing and speak directly to the body's stress response. Calm arrives before we ask anything of behavior.",
    tag: "Immediate Shifts Toward Calm",
  },
  {
    num: "03",
    title: "Build Consistency",
    body: "One session creates relief. Consistent sessions create resilience. Through structured weekly practice, the nervous system integrates and stabilizes, building stronger neural pathways each time.",
    tag: "Sustainable Change",
  },
  {
    num: "04",
    title: "Integrate Into Daily Life",
    body: "We equip families and schools with simple tools for transitions, stress moments, and learning activities. Regulation transfers into morning routines, car rides, homework, and bedtime.",
    tag: "Empowerment at Home & School",
  },
  {
    num: "05",
    title: "Strengthen Resilience",
    body: "True resilience is recovering from stress more quickly. Through ongoing support, your child builds lasting adaptability, regulation, and readiness to learn — a foundation that sustains for years.",
    tag: "Long-Term Transformation",
  },
];

export function MethodSection() {
  return (
    <section id="ncf-method">
      <div className="ncf-method-layout">
        <div>
          <div className="ncf-reveal">
            <div className="ncf-eyebrow">The Method</div>
            <h2 className="ncf-stitle-editorial">
              Five Steps to<br /><em>Lasting Regulation</em>
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--stone-mid)",
                lineHeight: 1.8,
                marginBottom: "2.5rem",
                maxWidth: "480px",
              }}
            >
              A system that works when behavioral approaches don't — because we address the
              nervous system first, not last.
            </p>
          </div>

          <div className="ncf-steps ncf-reveal ncf-d1">
            {steps.map((step) => (
              <div key={step.num} className="ncf-step">
                <div className="ncf-step-num">{step.num}</div>
                <div className="ncf-step-c">
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                  <span className="ncf-step-tag">{step.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="ncf-method-visual ncf-reveal ncf-d2">
            <img src={methodImg} alt="Child joyfully jumping outdoors with parent" className="ncf-method-visual-img" />
            <div className="ncf-method-visual-overlay" />
            <div className="ncf-method-visual-circle" />
            <div className="ncf-method-visual-text">
              <div className="ncf-mvt-tag">The Foundation</div>
              <div className="ncf-mvt-quote">
                "Safety in the body must come before any expectation of behavior."
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}