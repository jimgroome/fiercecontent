import { Eyebrow } from "../components/Eyebrow";
import { regions, type Hook } from "./calendar";
import { SourceLink } from "./SourceLink";
import styles from "./calendar.module.css";

export function IndustryHooks() {
  return (
    <>
      <RegionNavigation />
      <section id="hooks" className={`wrap ${styles.hooksSection}`} aria-labelledby="hooks-title">
        <div className="section-intro">
          <Eyebrow>The industry agenda</Eyebrow>
          <h2 id="hooks-title">2027 content hooks<span className="accent">.</span></h2>
          <p>What&rsquo;s changing for retailers and the stories you can tell.</p>
        </div>
        {regions.map(({ id, name, hooks }) => (
          <section key={id} id={id} className={styles.regionSection} aria-labelledby={`${id}-title`}>
            <div className={styles.regionHeading}>
              <h3 id={`${id}-title`}>{name}</h3>
              <span className={styles.regionCount}>{hooks.length} content hooks</span>
            </div>
            <div className={styles.hookGrid}>
              {hooks.map((hook) => <HookCard key={hook.id} hook={hook} />)}
            </div>
          </section>
        ))}
      </section>
    </>
  );
}

function RegionNavigation() {
  return (
    <nav className={styles.regionNav} aria-label="Browse regions">
      <div className={`wrap ${styles.regionNavInner}`}>
        <span className="eyebrow">Browse by region</span>
        {regions.map(({ id, label, name }) => (
          <a key={id} href={`#${id}`} aria-label={name}>
            <span className={styles.regionCode}>{label}</span>
            <span className={styles.regionName}>{name}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}

function HookCard({ hook }: { hook: Hook }) {
  const { id, date, title, impact, technology, opportunity, source } = hook;

  return (
    <article id={id} className={styles.hook} aria-labelledby={`${id}-title`}>
      <p className={styles.hookDate}>{date}</p>
      <h4 id={`${id}-title`}>{title}</h4>
      <dl className={styles.hookDetails}>
        <div>
          <dt>Retail impact</dt>
          <dd>{impact}</dd>
        </div>
        <div>
          <dt>Technology relevance</dt>
          <dd>{technology}</dd>
        </div>
        <div className={styles.opportunity}>
          <dt>Content opportunity</dt>
          <dd>{opportunity}</dd>
        </div>
      </dl>
      <SourceLink url={source} label="Source" />
    </article>
  );
}
