import { IndustryHooks } from "./IndustryHooks";
import { Watchlist } from "./Watchlist";
import calendarStyles from "./calendar.module.css";
import { Eyebrow } from "../Eyebrow";
import { SiteHeader } from "../SiteHeader";
import { email, emailHref } from "../../contact-links";
import { getHRCalendar, type HRAudience } from "./hr-calendar";

const navigation = [
  { href: "#hooks", label: "Industry hooks" },
  { href: "#watchlist", label: "Watchlist" },
];

type CalendarHeroProps = {
  topic: string;
  eyebrow: string;
  description: string;
  pdfHref: string;
};

type HRCalendarPageProps = CalendarHeroProps & {
  audience: HRAudience;
  contactBio: string;
};

export function HRCalendarPage({ audience, contactBio, ...hero }: HRCalendarPageProps) {
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
      </main>

      <CalendarContact contactBio={contactBio} contactHref={contactHref} />
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

function CalendarContact({ contactBio, contactHref }: { contactBio: string; contactHref: string }) {
  return (
    <footer id="contact" className="contact-section">
      <div className="wrap contact-inner">
        <h2>Want more engagement and leads from your 2027 content? Tie it to the industry agenda.</h2>
        <div className="contact-copy">
          <p>{contactBio}</p>
          <p>Email me to turn these hooks into campaigns that get results.</p>
          <a className="button contact-button" href={contactHref}>{email}</a>
        </div>
      </div>
    </footer>
  );
}
