import type { Metadata } from "next";
import { Eyebrow } from "../components/Eyebrow";
import { SiteHeader } from "../components/SiteHeader";
import { email, emailHref } from "../contact-links";
import { IndustryHooks } from "./IndustryHooks";
import { Watchlist } from "./Watchlist";
import styles from "./calendar.module.css";

export const metadata: Metadata = {
  title: "Retail Industry Content Hooks 2027 | Fierce Content",
  description:
    "A 2027 content planning guide for retail tech marketers, with industry developments across the UK, EU and USA, a watchlist and a month-by-month calendar.",
  alternates: { canonical: "/retailcontenthooks/" },
};

const contactHref = `${emailHref}?subject=${encodeURIComponent("Retail industry content hooks 2027")}`;
const navigation = [
  { href: "#hooks", label: "Industry hooks" },
  { href: "#watchlist", label: "Watchlist" },
];

export default function RetailContentHooksPage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader
        brandHref="/"
        emailLink={contactHref}
        navigation={navigation}
        role="Retail tech copywriter"
      />

      <main id="main" tabIndex={-1}>
        <CalendarHero />
        <IndustryHooks />
        <Watchlist />
      </main>

      <CalendarContact />
    </>
  );
}

function CalendarHero() {
  return (
    <section id="top" className="hero" aria-labelledby="page-title">
      <div className="wrap hero-inner">
        <Eyebrow>The retail tech content calendar</Eyebrow>
        <h1 id="page-title">
          Retail industry<br className="hero-break" /> content hooks
          <span className="accent"> 2027<span className={styles.heroPeriod}>.</span></span>
        </h1>
        <p className="hero-description">
          What&rsquo;s on the retail industry&rsquo;s agenda for 2027? From new consumer protection
          laws to changes in employment rights, there&rsquo;s plenty for retailers to prepare for
          &ndash; and retail technology companies to talk about.
        </p>
        <a className="button primary-button" href="/fierce-content-retail-industry-hooks-2027.pdf" download>
          Download as PDF
        </a>
      </div>
    </section>
  );
}

function CalendarContact() {
  return (
    <footer id="contact" className="contact-section">
      <div className="wrap contact-inner">
        <h2>Want more leads from your 2027 content? Tie it to the industry agenda.</h2>
        <div className="contact-copy">
          <p>
            I&rsquo;m Chelsea, a retail technology copywriter with over 15 years&rsquo; experience
            writing for global tech companies. I specialise in thought leadership, turning complex
            industry issues and technical expertise into articles, whitepapers, ebooks and campaign
            content that helps retail tech vendors engage prospects and generate leads.
          </p>
          <a className="button contact-button" href={contactHref}>{email}</a>
        </div>
      </div>
    </footer>
  );
}
