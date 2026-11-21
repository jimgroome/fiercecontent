import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#top">
        Skip to content
      </a>
      <SiteHeader />

      <main id="top" tabIndex={-1}>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>

      <SiteFooter />
    </>
  );
}
