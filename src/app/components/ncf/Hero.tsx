import heroImg from "../../../public/hero.png";

export function Hero() {
  return (
    <section className="ncf-hero">
      <div className="ncf-hero-bg" style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
        backgroundRepeat: 'no-repeat',
      }} />
      <div className="ncf-hero-overlay" />

      <div className="ncf-hero-content ncf-hero-content--left">
        <div className="ncf-hero-eyebrow">Nervous System Support for Families</div>
        <h1 className="ncf-hero-title ncf-hero-title--sm">
          Your Child Isn't Broken.<br />
          <em>Their Body Is Asking for Help.</em>
        </h1>
        <p className="ncf-hero-sub">
          Meltdowns aren't bad behavior. They're a nervous system in distress. We use gentle,
          movement-based practices to create the calm, focus, and connection your child deserves —
          often within the very first session.
        </p>
        <div className="ncf-hero-actions ncf-hero-actions--left">
          <a href="https://calendly.com/bouviermon/30min" className="ncf-btn-primary" target="_blank" rel="noopener noreferrer">Book Your Free Mini Session</a>
          <a
            href="#ncf-method"
            className="ncf-btn-outline"
            style={{
              color: "rgba(255,255,255,0.9)",
              borderColor: "rgba(255,255,255,0.5)",
            }}
          >
            See How It Works
          </a>
        </div>
        <div className="ncf-hero-trust">
          <strong>Jacklyn Warner, RN</strong> · 33 years clinical nursing experience ·
          Certified Cognomovement Practitioner · Featured on New Life Perspectives UK
        </div>
      </div>
    </section>
  );
}