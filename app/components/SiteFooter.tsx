import { linkedin, twitter } from "../contact-links";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div>
          <p>© 2019 Fierce Content</p>
          <p>Fierce Content Ltd is registered in England and Wales under company number 15364059.</p>
          <p>Registered office address: 3 Greenway, Cranbrook, Kent, England, TN17 3LL.</p>
        </div>
        <nav aria-label="Social media" className="footer-links">
          <a href={linkedin}>LinkedIn</a>
          <a href={twitter}>Twitter</a>
        </nav>
      </div>
    </footer>
  );
}
