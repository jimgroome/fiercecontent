import type { Metadata } from "next";
import { HRCalendarPage } from "../components/content-hooks/HRCalendarPage";

export const metadata: Metadata = {
  title: "HR and Recruitment Tech Content Hooks 2027 | Fierce Content",
  description:
    "A 2027 content planning guide for HR and recruitment tech marketers, with UK and EU industry hooks, a watchlist and a year-at-a-glance timeline.",
  alternates: { canonical: "/hrtechcontenthooks/" },
};

const description =
  "What will employers be dealing with in 2027? From changes to dismissal rights and flexible working " +
  "to EU pay transparency and recruitment AI, new requirements will affect how organisations recruit, " +
  "manage and support employees. These developments offer HR, recruitment and employee experience " +
  "technology companies specific topics to address in your 2027 content.";

export default function HRTechContentHooksPage() {
  return (
    <HRCalendarPage
      audience="tech"
      topic="HR and recruitment tech"
      eyebrow="The HR tech content calendar"
      description={description}
      pdfHref="/fierce-content-hr-tech-content-hooks-2027.pdf"
    />
  );
}
