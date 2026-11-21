import { email, emailHref } from "../contact-links";

export function Contact() {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="wrap contact-inner">
        <h2 id="contact-title">What gets me fired up?</h2>
        <div className="contact-copy">
          <p>Great work! Collaborating should be fun, energising and inspiring.</p>
          <p>
            Let&rsquo;s put some amazing ideas together... then get home to our families. It&rsquo;s all about balance.
          </p>
          <a className="button contact-button" href={emailHref}>
            {email}
          </a>
        </div>
      </div>
    </section>
  );
}
