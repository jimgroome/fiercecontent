import { emailHref } from "../contact-links";
import { Eyebrow } from "./Eyebrow";

type Service = {
  title: string;
  description: string;
  offerings: string[];
};

const services: Service[] = [
  {
    title: "A really good copywriter",
    description:
      "Got writers\u2019 block? I\u2019ve written over 5.2 million words in my career, so I know the good ones by now! Let\u2019s put them to work across:",
    offerings: [
      "Blogs & social media posts",
      "Brochures, leaflets & flyers",
      "Case studies",
      "Direct mail & email",
      "Ebooks, reports & whitepapers",
      "Editorial and advertorial features",
      "Video scripts",
    ],
  },
  {
    title: "Kick-arse creative ideas",
    description:
      "Stuck in a rut? I can shake the cobwebs away and come up with creative campaign ideas that will catch your prospects\u2019 eye. Let\u2019s find a spark:",
    offerings: [
      "Brainstorming sessions",
      "Concept development",
      "Content analysis",
      "Idea review & refinement",
      "Outsourced content marketing",
      "Team building & training",
      "Workshopping campaigns",
    ],
  },
  {
    title: "Content marketing strategy",
    description:
      "Not sure where to start? I can clarify the bigger picture and define how you represent yourself in the public space. Let\u2019s talk shop:",
    offerings: [
      "Brand & tone of voice guides",
      "Content marketing plans",
      "Company presentations",
      "Go-to-market messaging",
      "Sales decks & pitches",
      "Value propositions",
      "Website content",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="wrap services-section" aria-labelledby="services-title">
      <div className="section-intro">
        <Eyebrow>Services</Eyebrow>
        <h2 id="services-title">
          What are you looking for<span className="accent">?</span>
        </h2>
      </div>
      <div className="service-grid">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
      <a className="button secondary-button" href={emailHref}>
        Let&rsquo;s talk shop
      </a>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const { title, description, offerings } = service;

  return (
    <article className="service">
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className="offerings">
        {offerings.map((offering) => (
          <li key={offering}>{offering}</li>
        ))}
      </ul>
    </article>
  );
}
