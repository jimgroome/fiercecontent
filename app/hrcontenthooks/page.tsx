import type { Metadata } from "next";
import { HRCalendarPage } from "../components/content-hooks/HRCalendarPage";

export const metadata: Metadata = {
  title: "HR and Employee Experience Content Hooks 2027 | Fierce Content",
  description:
    "A 2027 content planning guide for HR, recruitment and employee experience service providers, with UK and EU industry hooks and a watchlist.",
  alternates: { canonical: "/hrcontenthooks/" },
};

const description =
  "What will employers be dealing with in 2027? From dismissal rights to flexible working, new legislation will " +
  "create opportunities for HR, recruitment and workplace specialists to help your clients prepare for the year ahead.";

const contactBio =
  "I'm Chelsea, a B2B copywriter with over 15 years' experience writing for professional services companies and " +
  "consultancies. I specialise in thought leadership, turning employment changes and expert knowledge into articles, " +
  "whitepapers and ebooks that help you win new clients.";

export default function HRContentHooksPage() {
  return (
    <HRCalendarPage
      audience="services"
      topic="HR and employee experience"
      eyebrow="The HR content calendar"
      description={description}
      contactBio={contactBio}
      pdfHref="/fierce-content-hr-employee-experience-content-hooks-2027.pdf"
    />
  );
}
