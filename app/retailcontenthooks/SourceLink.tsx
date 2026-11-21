import styles from "./calendar.module.css";

export function SourceLink({ url, label }: { url: string; label: string }) {
  const domain = new URL(url).hostname.replace(/^www\./, "");

  return <a className={styles.sourceLink} href={url}>{label} &middot; {domain}</a>;
}
