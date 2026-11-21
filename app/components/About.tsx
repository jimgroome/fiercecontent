import Image from "next/image";
import { linkedin } from "../contact-links";
import { Eyebrow } from "./Eyebrow";

const clients = [
  { file: "verifone", name: "Verifone", width: 1000, height: 191 },
  { file: "doddle", name: "Doddle", width: 750, height: 400 },
  { file: "intel", name: "Intel", width: 2000, height: 1327 },
  { file: "microsoft", name: "Microsoft", width: 2000, height: 427 },
  { file: "mercedes", name: "Mercedes", width: 700, height: 192 },
  { file: "msv", name: "MotorSport Vision", width: 553, height: 244 },
  { file: "sap", name: "SAP", width: 1719, height: 851 },
  { file: "shoppertrak", name: "ShopperTrak", width: 476, height: 84 },
  {
    file: "autosport-international",
    name: "Autosport International",
    width: 2048,
    height: 573,
  },
];

export function About() {
  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <div className="wrap about-inner">
        <div className="section-intro">
          <Eyebrow>About</Eyebrow>
          <h2 id="about-title">
            Who am I<span className="accent">?</span>
          </h2>
          <p>
            Chelsea Groome, Fierce Content founder and experienced B2B &amp; B2C
            copywriter.
          </p>
        </div>
        <div className="about-details">
          <p>
            I&rsquo;ve created content for big-name blue chips and ambitious start-up
            brands alike, and partnered with many agencies along the way. After
            15+ years in the business, I know that everybody has a story to
            tell. It&rsquo;s my job to get the words right.
          </p>
          <ClientLogos />
          <a className="text-link" href={linkedin}>
            Fierce Content on LinkedIn
          </a>
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
