import { emailHref } from "../contact-links";
import { Eyebrow } from "./Eyebrow";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="page-title">
      <div className="wrap hero-inner">
        <Eyebrow>Fierce Content</Eyebrow>
        <h1 id="page-title">
          Strongly worded copy
          <br className="hero-break" />
          <span className="accent"> for your business.</span>
        </h1>
        <p className="hero-description">
          Does your tone of voice need more personality? Could your content use
          some sparkle? Are you simply lacking time to write all the assets you
          need?
        </p>
        <p className="hero-description">
          Whether you&rsquo;re a brand, a business or an overstretched agency, I&rsquo;ll
          bring 15+ years of B2B copywriting experience to your table. Let&rsquo;s get
          creative!
        </p>
        <a className="button primary-button" href={emailHref}>
          Give me a roar
        </a>
      </div>
    </section>
  );
}
