export default function Hero() {
  return (
    <section className="hero container" id="top" aria-labelledby="hero-title">
      <div>
        <p className="eyebrow">New · v1.0</p>
        <h1 id="hero-title">Design it in Figma. Ship it in code.</h1>
        <p className="hero__lead">
          A clean, accessible starter that turns your design into a fast single-page site.
        </p>
        <div className="hero__actions">
          <a className="btn" href="#features">Explore</a>
          <a className="btn btn--ghost" href="#contact">Contact us</a>
        </div>
      </div>
      <div className="hero__visual" aria-hidden="true"></div>
    </section>
  );
}