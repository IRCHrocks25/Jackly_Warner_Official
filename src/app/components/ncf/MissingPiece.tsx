import missingImg from "../../../public/2nd_image.png";

export function MissingPiece() {
  return (
    <section id="ncf-missing">
      <div className="ncf-missing-visual ncf-reveal">
        <img
          src={missingImg}
          alt="Mother and child holding hands at sunset"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
          }}
        />
      </div>

      <div className="ncf-missing-content">
        <div className="ncf-reveal">
          <div className="ncf-eyebrow">Why Nothing Has Worked</div>
          <h2 className="ncf-stitle-editorial">
            Why Nothing<br /><em>Has Worked: Until Now</em>
          </h2>
        </div>

        <div className="ncf-missing-body ncf-reveal ncf-d1">
          <p>
            Traditional approaches try to fix behavior from the outside. But when the nervous
            system is stuck in survival mode, no amount of structure creates internal calm.
          </p>
          <p>
            Most behavioral approaches — including discipline, rewards, and talk therapy — assume
            the child can reason and self-regulate. But a nervous system in fight-or-flight can't
            process logic. The brain's survival circuitry has taken over.
          </p>
          <p>
            That's why behavior charts don't reduce anxiety. Consequences don't improve focus. And
            talk therapy can't reach a body locked in defense.
          </p>
          <p>
            <strong>
              You can't think your way out of dysregulation. The body has to feel safe first.
              That's where we begin.
            </strong>
          </p>
        </div>

        <div className="ncf-mp-list ncf-reveal ncf-d2">
          <div className="ncf-mp-item">
            <div className="ncf-mp-num">I</div>
            <div>
              <h4>Nervous System First</h4>
              <p>We regulate the body before we ask anything of behavior — because safety precedes everything.</p>
            </div>
          </div>
          <div className="ncf-mp-item">
            <div className="ncf-mp-num">II</div>
            <div>
              <h4>Gentle, Not Corrective</h4>
              <p>Cognomovement uses eye tracking and cross-body movement — it feels like play, but underneath it's rewiring stress responses.</p>
            </div>
          </div>
          <div className="ncf-mp-item">
            <div className="ncf-mp-num">III</div>
            <div>
              <h4>Whole Family Support</h4>
              <p>A child's regulation is tied to their parents' energy. We create a calm harbor for the entire family system.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}