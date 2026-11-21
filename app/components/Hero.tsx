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
          I&rsquo;m Chelsea, a freelance B2B copywriter specialising in thought
          leadership for technology and professional services companies.
        </p>
        <p className="hero-description">
          I make complex subjects clear, working closely with your experts to
          give your business a stronger industry voice.
        </p>
        <p className="hero-description">
          From whitepapers and eBooks to blog articles and website copy, I write
          B2B content that gets your business noticed for its expertise and
          onto prospective customers&rsquo; shortlists.
        </p>
        <a className="button primary-button" href={emailHref}>
          Give me a roar
        </a>
      </div>
    </section>
  );
}
