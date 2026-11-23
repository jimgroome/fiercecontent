import { Eyebrow } from "../Eyebrow";
import { SourceLink } from "./SourceLink";
import styles from "./calendar.module.css";

type WatchlistEntry = {
  id: string;
  title: string;
  text: string;
  source?: string;
};

export function Watchlist({ entries }: { entries: WatchlistEntry[] }) {
  return (
    <section id="watchlist" className={styles.watchSection} aria-labelledby="watch-title">
      <div className={`wrap ${styles.watchInner}`}>
        <div className="section-intro">
          <Eyebrow>Keep an eye on</Eyebrow>
          <h2 id="watch-title">
            2027<br className={styles.watchBreak} /> watchlist<span className="accent">.</span>
          </h2>
          <p>Track proposals, planned milestones and changes already in effect.</p>
        </div>
        <ul className={styles.watchList}>
          {entries.map(({ id, title, text, source }) => (
            <li key={id} id={id}>
              <h3>{title}</h3>
              <p>{text}</p>
              {source && <SourceLink url={source} label="Follow" />}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
