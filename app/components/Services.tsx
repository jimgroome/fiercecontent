import { emailHref } from "../contact-links";
import { Eyebrow } from "./Eyebrow";

type Service = {
  title: string;
  offerings: string[];
};

const services: Service[] = [
  {
    title: "Expert content",
    offerings: [
      "Thought leadership articles",
      "Whitepapers, reports & eBooks",
      "Executive opinion pieces",
      "Research-led content",
      "Expert interviews",
    ],
  },
  {
    title: "B2B content writing",
    offerings: [
      "Blog articles",
      "Website copy",
      "Case studies",
      "Email marketing campaigns",
      "LinkedIn content",
      "Brochures & sales copy",
    ],
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="wrap services-section"
      aria-labelledby="services-title"
    >
      <div className="section-intro">
        <Eyebrow>Services</Eyebrow>
        <h2 id="services-title">What are you looking for?</h2>
      </div>
      <div className="service-grid">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const { title, offerings } = service;

  return (
    <article className="service">
      <h3>{title}</h3>
      <ul className="offerings">
        {offerings.map((offering) => (
          <li key={offering}>{offering}</li>
        ))}
      </ul>
    </article>
  );
}
