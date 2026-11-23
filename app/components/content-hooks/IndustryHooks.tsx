import { Eyebrow } from "../Eyebrow";
import { SourceLink } from "./SourceLink";
import styles from "./calendar.module.css";

export type Hook = {
  id: string;
  date: string;
  status?: string;
  title: string;
  source: string;
  impact: string;
  relevance: string;
  opportunity: string;
};

export type HookRegion = {
  id: string;
  label: string;
  name: string;
  hooks: Hook[];
};

type IndustryHooksProps = {
  regions: HookRegion[];
  introduction: string;
  impactLabel: string;
  relevanceLabel?: string;
};

export function IndustryHooks({
  regions,
  introduction,
  impactLabel,
  relevanceLabel = "Technology relevance",
}: IndustryHooksProps) {
  return (
    <>
      <RegionNavigation regions={regions} />
      <section id="hooks" className={`wrap ${styles.hooksSection}`} aria-labelledby="hooks-title">
        <div className="section-intro">
          <Eyebrow>The industry agenda</Eyebrow>
          <h2 id="hooks-title">2027 content hooks<span className="accent">.</span></h2>
          <p>{introduction}</p>
        </div>
        {regions.map(({ id, name, hooks }) => (
          <section key={id} id={id} className={styles.regionSection} aria-labelledby={`${id}-title`}>
            <div className={styles.regionHeading}>
              <h3 id={`${id}-title`}>{name}</h3>
              <span className={styles.regionCount}>{hooks.length} content hooks</span>
            </div>
            <div className={styles.hookGrid}>
              {hooks.map((hook) => (
                <HookCard key={hook.id} hook={hook} impactLabel={impactLabel} relevanceLabel={relevanceLabel} />
              ))}
            </div>
          </section>
        ))}
      </section>
    </>
  );
}

function RegionNavigation({ regions }: { regions: HookRegion[] }) {
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

function HookCard({
  hook,
  impactLabel,
  relevanceLabel,
}: { hook: Hook; impactLabel: string; relevanceLabel: string }) {
  const { id, date, status, title, impact, relevance, opportunity, source } = hook;

  return (
    <article id={id} className={styles.hook} aria-labelledby={`${id}-title`}>
      <p className={styles.hookDate}>{date}</p>
      {status && <p className={styles.hookStatus}>{status}</p>}
      <h4 id={`${id}-title`}>{title}</h4>
      <dl className={styles.hookDetails}>
        <div>
          <dt>{impactLabel}</dt>
          <dd>{impact}</dd>
        </div>
        <div>
          <dt>{relevanceLabel}</dt>
          <dd>{relevance}</dd>
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
