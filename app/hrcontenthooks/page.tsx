import type { Metadata } from "next";
import { HRCalendarPage } from "../components/content-hooks/HRCalendarPage";

export const metadata: Metadata = {
  title: "HR and Employee Experience Content Hooks 2027 | Fierce Content",
  description:
    "A 2027 content planning guide for HR, recruitment and employee experience service providers, with UK and EU industry hooks, a watchlist and a year-at-a-glance timeline.",
  alternates: { canonical: "/hrcontenthooks/" },
};

const description =
  "What will employers be dealing with in 2027? From dismissal rights and flexible working to EU pay " +
  "transparency and recruitment AI, new requirements will affect how organisations recruit, manage " +
  "and support employees. For HR consultancies, outsourced HR providers, employee benefits and " +
  "experience specialists, recruitment businesses and training providers, these developments offer " +
  "opportunities to help clients prepare. Here are the strongest UK and EU hooks for your 2027 content marketing.";

export default function HRContentHooksPage() {
  return (
    <HRCalendarPage
      audience="services"
      topic="HR and employee experience"
      eyebrow="The HR content calendar"
      description={description}
      pdfHref="/fierce-content-hr-employee-experience-content-hooks-2027.pdf"
    />
  );
}
