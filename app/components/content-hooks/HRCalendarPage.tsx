import { IndustryHooks } from "./IndustryHooks";
import { Watchlist } from "./Watchlist";
import calendarStyles from "./calendar.module.css";
import { Eyebrow } from "../Eyebrow";
import { SiteHeader } from "../SiteHeader";
import { email, emailHref } from "../../contact-links";
import { getHRCalendar, timeline, type HRAudience } from "./hr-calendar";
import styles from "./timeline.module.css";

const navigation = [
  { href: "#hooks", label: "Industry hooks" },
  { href: "#watchlist", label: "Watchlist" },
  { href: "#timeline", label: "At a glance" },
];

type CalendarHeroProps = {
  topic: string;
  eyebrow: string;
  description: string;
  pdfHref: string;
};

type HRCalendarPageProps = CalendarHeroProps & {
  audience: HRAudience;
};

export function HRCalendarPage({ audience, ...hero }: HRCalendarPageProps) {
  const { regions, watchlist } = getHRCalendar(audience);
  const subject = `${hero.topic} content hooks 2027`;
  const contactHref = `${emailHref}?subject=${encodeURIComponent(subject)}`;

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader
        brandHref="/"
        emailLink={contactHref}
        navigation={navigation}
        role="B2B technology copywriter"
      />

      <main id="main" tabIndex={-1}>
        <CalendarHero {...hero} />
        <IndustryHooks
          regions={regions}
          introduction="What’s changing for employers and the stories you can tell."
          impactLabel="Employer impact"
          relevanceLabel={audience === "services" ? "Service relevance" : "Technology relevance"}
        />
        <Watchlist entries={watchlist} />
        <CalendarTimeline />
      </main>

      <CalendarContact contactHref={contactHref} />
    </>
  );
}

function CalendarHero({ topic, eyebrow, description, pdfHref }: CalendarHeroProps) {
  return (
    <section id="top" className="hero" aria-labelledby="page-title">
      <div className="wrap hero-inner">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 id="page-title">
          {topic}<br className="hero-break" /> content hooks
          <span className="accent"> 2027<span className={calendarStyles.heroPeriod}>.</span></span>
        </h1>
        <p className="hero-description">{description}</p>
        <a className="button primary-button" href={pdfHref} download>
          Download as PDF
        </a>
      </div>
    </section>
  );
}

function CalendarTimeline() {
  return (
    <section id="timeline" className={`wrap ${styles.timeline}`} aria-labelledby="timeline-title">
      <div className="section-intro">
        <h2 id="timeline-title">2027 at a glance<span className="accent">.</span></h2>
      </div>
      <dl className={styles.periods}>
        {timeline.map(({ period, entries }) => (
          <div key={period} className={styles.period}>
            <dt>{period}</dt>
            <dd>
              <ul className={styles.entries}>
                {entries.map(({ id, region, title }) => (
                  <li key={id}>
                    <span className={styles.region}>{region}</span>
                    <a href={`#${id}`}>{title}</a>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function CalendarContact({ contactHref }: { contactHref: string }) {
  return (
    <footer id="contact" className="contact-section">
      <div className="wrap contact-inner">
        <h2>Want more engagement and leads from your 2027 content? Tie it to the industry agenda.</h2>
        <div className="contact-copy">
          <p>
            I&rsquo;m Chelsea, a B2B technology copywriter with over 15 years&rsquo; experience writing for
            global technology companies. I specialise in thought leadership, turning industry developments
            and technical expertise into articles, whitepapers, ebooks and campaign content.
          </p>
          <p>Email me to turn these hooks into campaigns that get results.</p>
          <a className="button contact-button" href={contactHref}>{email}</a>
        </div>
      </div>
    </footer>
  );
}
