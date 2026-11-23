import type { Metadata } from "next";
import { HRCalendarPage } from "../components/content-hooks/HRCalendarPage";

export const metadata: Metadata = {
  title: "HR and Recruitment Tech Content Hooks 2027 | Fierce Content",
  description:
    "A 2027 content planning guide for HR and recruitment tech marketers, with UK and EU industry hooks and a watchlist.",
  alternates: { canonical: "/hrtechcontenthooks/" },
};

const description =
  "What will employers face in 2027? Changes to dismissal rights, flexible working, EU pay transparency and " +
  "recruitment AI will affect workforce management. For HR, recruitment and employee experience technology " +
  "companies, these developments provide valuable content marketing opportunities.";

const contactBio =
  "I'm Chelsea, a B2B tech copywriter with over 15 years' experience writing for global software companies. " +
  "I specialise in thought leadership, turning legislation changes and technical expertise into articles, ebooks " +
  "and campaign content that resonates with employers.";

export default function HRTechContentHooksPage() {
  return (
    <HRCalendarPage
      audience="tech"
      topic="HR and recruitment tech"
      eyebrow="The HR tech content calendar"
      description={description}
      contactBio={contactBio}
      pdfHref="/fierce-content-hr-tech-content-hooks-2027.pdf"
    />
  );
}
