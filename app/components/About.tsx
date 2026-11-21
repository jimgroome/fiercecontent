import Image from "next/image";
import { linkedin } from "../contact-links";
import { Eyebrow } from "./Eyebrow";

const clients = [
  { file: "fujitsu", name: "Fujitsu", width: 280, height: 95 },
  { file: "sap", name: "SAP", width: 1719, height: 851 },
  { file: "microsoft", name: "Microsoft", width: 2000, height: 427 },
  { file: "aptean", name: "Aptean", width: 360, height: 113 },
  { file: "verifone", name: "Verifone", width: 1000, height: 191 },
  { file: "eleco", name: "Eleco", width: 360, height: 360 },
  { file: "resideo", name: "Resideo", width: 578, height: 225 },
  { file: "hso", name: "HSO", width: 360, height: 195 },
  { file: "docuware", name: "DocuWare", width: 402, height: 90 },
  { file: "onestock", name: "OneStock", width: 360, height: 56 },
  { file: "hooley-brown", name: "Hooley Brown", width: 300, height: 169 },
  { file: "whosoff", name: "WhosOff", width: 170, height: 97 },
];

export function About() {
  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <div className="wrap about-inner">
        <div className="section-intro">
          <Eyebrow>About</Eyebrow>
          <h2 id="about-title">I&rsquo;ve written a thing or two</h2>
        </div>
        <div className="about-details">
          <div className="about-copy">
            <p>
              I&rsquo;ve spent over 15 years writing B2B content for some of the
              world&rsquo;s biggest technology companies.
            </p>
            <p>
              My experience covers everything from enterprise software and AI to
              retail technology, manufacturing and financial services.
              I&rsquo;ve also written extensively about telecoms, HR, supply
              chain and logistics, construction and the food industry.
            </p>
            <p>
              I work with technology and professional services companies across
              the UK and internationally, getting to grips with specialist
              subjects and interviewing the people who understand them best.
            </p>
            <a className="button primary-button" href={linkedin}>
              Connect with me on LinkedIn
            </a>
          </div>
          <div>
            <ClientLogos />
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientLogos() {
  return (
    <ul className="client-list" aria-label="Clients">
      {clients.map(({ file, name, width, height }) => (
        <li key={file}>
          <Image
            src={`/carousel/${file}.png`}
            alt={name}
            width={width}
            height={height}
          />
        </li>
      ))}
    </ul>
  );
}
