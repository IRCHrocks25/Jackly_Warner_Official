import testimonial1 from "../../../public/testimonial/1.png";
import boyPlayingImg from "../../../public/boy_playing.png";
import testimonial2 from "../../../public/testimonial/2.png";
import testimonial3 from "../../../public/testimonial/3.png";

const testimonials = [
  {
    photo: testimonial1,
    photoAlt: "Child playing joyfully outdoors in golden light",
    before: '"Our mornings were chaotic. My child couldn\'t transition without a complete meltdown. I felt like I was failing."',
    after: '"Working with Jacklyn was a turning point for our family. Her calm presence and gentle approach helped our child feel more regulated and confident."',
    highlight: "Simple tools they could actually use — changes felt natural and lasting",
    source: "— Parent of a child on the autism spectrum",
  },
  {
    photo: testimonial2,
    photoAlt: "Boy concentrating on wooden blocks with parent nearby",
    before: '"John struggled with clarity and engagement. We\'ve tried so many approaches with minimal change."',
    after: '"Noticeable improvements in John\'s clarity, engagement, and overall calmness following his sessions. The whole family could see the difference."',
    highlight: "Real shifts in focus and emotional regulation, visible to the whole family",
    source: "— Parent of a child on the autism spectrum",
  },
  {
    photo: testimonial3,
    photoAlt: "Mother and daughter playing together at home",
    before: '"I didn\'t think anything could help my child feel truly calm."',
    after: '"After just one session, I saw my child relax in a way I hadn\'t seen in years. Jacklyn\'s approach is gentle, effective, and rooted in real understanding."',
    highlight: "Hope restored, and practical tools that actually work",
    source: "— Parent seeking nervous system support",
  },
];

const delays = ["ncf-d1", "ncf-d2", "ncf-d3"];

export function Testimonials() {
  return (
    <section id="ncf-testimonials">
      <div className="ncf-testi-header ncf-reveal">
        <div
          className="ncf-eyebrow"
          style={{ justifyContent: "center", color: "var(--blush-deep)" }}
        >
          <span style={{ background: "var(--blush-deep)" }} />
          Family Stories
        </div>
        <h2 className="ncf-stitle-editorial" style={{ textAlign: "center" }}>
          Real Families.<br /><em>Real Regulation.</em> Real Relief.
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
          Hear from parents who finally found what works.
        </p>
      </div>

      <div className="ncf-tgrid">
        {testimonials.map((t, i) => (
          <div key={i} className={`ncf-tcard ncf-reveal ${delays[i]}`}>
            <div className={`ncf-tcard-img ${t.photo ? '' : (t as any).imgClass}`}
              style={t.photo ? { padding: 0 } : undefined}
            >
              {t.photo ? (
                <img
                  src={t.photo}
                  alt={t.photoAlt}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                />
              ) : (
                <>
                  <div className="ncf-tcard-img-shape" />
                  <span className="ncf-tcard-img-label">Family Story</span>
                </>
              )}
            </div>
            <div className="ncf-tcard-body">
              <div className="ncf-tba">
                <div className="ncf-tbefore">
                  <span className="ncf-t-bl">Before</span>
                  {t.before}
                </div>
                <div className="ncf-tafter">
                  <span className="ncf-t-al">After</span>
                  {t.after}
                </div>
              </div>
              <div className="ncf-thighlight">{t.highlight}</div>
              <div className="ncf-tsource">{t.source}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="ncf-testi-full ncf-reveal">
        <div className="ncf-testi-full-content">
          <blockquote>
            To the child, it feels like we are just playing catch with a ball. But underneath that
            play, we are crossing the midline and balancing the brain, quieting the fight-or-flight
            response so they can finally feel safe enough to connect.
          </blockquote>
          <cite>— Jacklyn Warner, RN</cite>
        </div>
        <div className="ncf-testi-full-visual">
          <img
            src={boyPlayingImg}
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
      </div>
    </section>
  );
}