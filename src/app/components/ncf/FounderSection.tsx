import founderPhoto from "../../../public/Jacklyn_Warner.png";

export function FounderSection() {
  return (
    <section id="ncf-founder">
      <div className="ncf-fp-left ncf-reveal">
        <div className="ncf-fp-circle" />
        <div className="ncf-fp-circle2" />
        <div className="ncf-fp-photo-wrap">
          <img src={founderPhoto} alt="Jacklyn Warner, RN" className="ncf-fp-photo" />
        </div>
      </div>

      <div className="ncf-fp-right">
        <div className="ncf-reveal">
          <div className="ncf-eyebrow">Meet Your Practitioner</div>
          <h2 className="ncf-stitle-editorial">
            I Built This Because<br /><em>I Lived This</em>
          </h2>
          <div className="ncf-fp-role">
            Jacklyn Warner, RN · Registered Nurse · Cognomovement Practitioner · 33 Years Clinical Care
          </div>
        </div>

        <div className="ncf-reveal ncf-d1">
          <p>
            For 30 years, I cared for the tiniest, most fragile lives in the Neonatal Intensive
            Care Unit. I understood the body, the nervous system, and the delicate balance between
            life and crisis at the deepest level.
          </p>
          <p>
            But I kept watching children and families move through the system — managed, medicated,
            monitored — but rarely healed. Behavior was corrected. Symptoms were controlled. But the
            deeper need for a nervous system crying out for safety was almost always missed.
          </p>
          <p>
            Everything changed when I introduced Cognomovement to autistic children in their homes.
            Children who couldn't transition without meltdowns became calmer. Kids who couldn't focus
            suddenly engaged. It wasn't magic — it was neurology. And I knew I'd found what I'd been
            searching for.
          </p>
        </div>

        <div className="ncf-fvals ncf-reveal ncf-d2">
          <div className="ncf-fv">
            <h4>The Body Tells the Truth</h4>
            <p>Behavior is communication from the nervous system, not defiance.</p>
          </div>
          <div className="ncf-fv">
            <h4>Regulate First</h4>
            <p>Safety in the body must come before any expectation of behavior.</p>
          </div>
          <div className="ncf-fv">
            <h4>Change Can Be Gentle</h4>
            <p>The most powerful shifts come from play, safety, and support.</p>
          </div>
          <div className="ncf-fv">
            <h4>Families Need Both</h4>
            <p>Clinical expertise and heart-centered compassion together.</p>
          </div>
        </div>
      </div>
    </section>
  );
}