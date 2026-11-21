import Image from "next/image";
import { email, emailHref } from "../contact-links";

const homeNavigation = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
];

type SiteHeaderProps = {
  brandHref?: string;
  emailLink?: string;
  navigation?: { href: string; label: string }[];
  role?: string;
};

export function SiteHeader({
  brandHref = "#top",
  emailLink = emailHref,
  navigation = homeNavigation,
  role = "Copywriter",
}: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <div className="brand">
          <a href={brandHref} className="brand-mark">
            <Image src="/fierce-content-mark.png" alt="Fierce Content" width={124} height={121} />
          </a>
          <div className="brand-details">
            <strong className="brand-name">Chelsea Groome</strong>
            <span className="brand-role">{role}</span>
            <a className="brand-email" href={emailLink}>
              {email}
            </a>
          </div>
        </div>
        <nav aria-label="Main navigation" className="main-nav">
          {navigation.map(({ href, label }) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
        <a className="button header-contact" href="#contact">
          Get in touch
        </a>
      </div>
    </header>
  );
}
