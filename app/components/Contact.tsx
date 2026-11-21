import { email, emailHref } from "../contact-links";

export function Contact() {
  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-title"
    >
      <div className="wrap contact-inner contact-inner-stacked">
        <h2 id="contact-title">Got something worth saying?</h2>
        <div className="contact-copy">
          <p>I&rsquo;ll help you say it better ;-)</p>
          <p>
            <strong>Let&rsquo;s talk:</strong> <a href={emailHref}>{email}</a>
          </p>
        </div>
      </div>
    </section>
  );
}
