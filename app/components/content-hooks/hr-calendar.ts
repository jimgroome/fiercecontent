import type { Hook, HookRegion } from "./IndustryHooks";

const employmentRightsTimeline =
  "https://www.gov.uk/government/publications/implementing-the-plan-to-make-work-pay-and-employment-rights-act/plan-to-make-work-pay-and-employment-rights-act-timeline-update";

export type HRAudience = "tech" | "services";

type AudienceCopy = Pick<Hook, "relevance" | "opportunity">;
type HRHook = Omit<Hook, keyof AudienceCopy> & Record<HRAudience, AudienceCopy>;
type HRRegion = Omit<HookRegion, "hooks"> & { hooks: HRHook[] };

const regions: HRRegion[] = [
  {
    id: "uk",
    label: "UK",
    name: "United Kingdom",
    hooks: [
      {
        id: "unfair-dismissal",
        date: "1 January 2027",
        title: "Unfair dismissal reforms",
        source: employmentRightsTimeline,
        impact: "The qualifying period for ordinary unfair dismissal falls to six months and the cap on compensatory awards is removed. Employers will need robust probation, performance and dismissal records.",
        tech: {
          relevance: "HRIS, onboarding, performance management and employee case management.",
          opportunity: "With unfair dismissal rights starting after six months, how can HR and recruitment tech help employers get hiring, onboarding and probation right first time?",
        },
        services: {
          relevance: "HR consultancy and outsourced HR advice on probation reviews, manager training, performance documentation and dismissal procedures.",
          opportunity: "How should employers rethink probation and performance management before the new dismissal rules?",
        },
      },
      {
        id: "collective-redundancy",
        date: "April 2027",
        status: "Scheduled",
        title: "Collective redundancy: organisation-wide threshold",
        source: employmentRightsTimeline,
        impact: "The government plans an organisation-wide threshold for collective consultation, affecting employers managing redundancies across multiple sites. The detailed threshold and commencement requirements should be checked as regulations are finalised.",
        tech: {
          relevance: "Workforce planning, HR analytics, organisational data and employee relations case management.",
          opportunity: "Can employers see their redundancy obligations across every site without joined-up workforce data?",
        },
        services: {
          relevance: "Workforce restructuring advice, consultation support, manager training and employee communications for multi-site employers.",
          opportunity: "Are multi-site employers ready for the new collective redundancy consultation rules?",
        },
      },
      {
        id: "flexible-working",
        date: "October 2027",
        status: "Scheduled",
        title: "Flexible working reforms",
        source: employmentRightsTimeline,
        impact: "Employers refusing a statutory flexible working request will need to explain why the refusal is reasonable, alongside identifying a permitted business reason. Consistent decisions and documented reasoning will be important.",
        tech: {
          relevance: "Employee self-service, workforce scheduling, HR case management and hybrid-work platforms.",
          opportunity: "Can HR systems help employers make better-evidenced flexible working decisions?",
        },
        services: {
          relevance: "HR policy reviews, flexible-working advisory services, line-manager training and employee experience programmes.",
          opportunity: "What will the new flexible working rules mean for managers handling employee requests?",
        },
      },
      {
        id: "equality-and-menopause",
        date: "March–April 2027",
        status: "Scheduled",
        title: "Gender equality and menopause action plans",
        source: employmentRightsTimeline,
        impact: "Mandatory action plans are scheduled for public authorities in March and private and voluntary-sector employers in April, following voluntary introduction in 2026. Scope and final requirements need checking.",
        tech: {
          relevance: "People analytics, employee surveys, HR reporting and employee experience.",
          opportunity: "How can people analytics turn gender pay and menopause data into measurable action?",
        },
        services: {
          relevance: "Gender equality consulting, menopause support, benefits reviews, employee listening and leadership training.",
          opportunity: "What should employers include in their gender equality and menopause action plans?",
        },
      },
      {
        id: "fire-and-rehire",
        date: "March 2027",
        status: "Scheduled",
        title: "Fire-and-rehire protections",
        source: employmentRightsTimeline,
        impact: "Stronger restrictions on dismissing and re-engaging staff on changed contractual terms will affect employers reviewing pay, contracts and working arrangements.",
        tech: {
          relevance: "HR case management, contract records, employee communications and workforce planning.",
          opportunity: "How can HR technology help employers manage contract changes under the new fire-and-rehire restrictions?",
        },
        services: {
          relevance: "Employee relations advice, consultation support, change communications and training for managers handling contractual changes.",
          opportunity: "How can employers change contractual terms without falling foul of fire-and-rehire restrictions?",
        },
      },
      {
        id: "pregnancy-and-maternity",
        date: "October 2027",
        status: "Scheduled",
        title: "Pregnancy and maternity dismissal protections",
        source: employmentRightsTimeline,
        impact: "Enhanced dismissal protections for pregnant employees and new mothers are scheduled to take effect, increasing the importance of consistent leave, return-to-work and redundancy records.",
        tech: {
          relevance: "HRIS, leave management, employee case management and manager self-service.",
          opportunity: "Can employers’ HR systems give a consistent record of leave, return-to-work and redundancy decisions?",
        },
        services: {
          relevance: "Family-friendly policy advice, maternity return-to-work support, employee benefits and manager training.",
          opportunity: "How should employers prepare managers for stronger pregnancy and maternity dismissal protections?",
        },
      },
      {
        id: "umbrella-companies",
        date: "December 2027",
        status: "Scheduled",
        title: "Umbrella company regulation",
        source: employmentRightsTimeline,
        impact: "Umbrella companies are due to come within the employment-agency regulatory framework, affecting recruitment agencies and employers using temporary labour.",
        tech: {
          relevance: "Recruitment agency systems, contractor onboarding, contingent workforce management and compliance.",
          opportunity: "How can recruitment and contingent workforce platforms help agencies check umbrella company compliance?",
        },
        services: {
          relevance: "Recruitment agency compliance, contractor due diligence, temporary staffing services and contingent workforce advisory.",
          opportunity: "What should recruitment agencies do now to prepare for umbrella company regulation?",
        },
      },
      {
        id: "bereavement-leave",
        date: "April 2027",
        status: "Scheduled",
        title: "Bereavement leave including pregnancy loss",
        source: employmentRightsTimeline,
        impact: "New statutory bereavement leave provisions are scheduled, requiring changes to absence policies, leave administration and manager guidance.",
        tech: {
          relevance: "Leave and absence management, HRIS and employee experience platforms.",
          opportunity: "How can absence management systems help employers handle bereavement leave with care and consistency?",
        },
        services: {
          relevance: "Bereavement and wellbeing support, employee assistance programmes, absence policy advice and manager training.",
          opportunity: "How can employers support staff after pregnancy loss while meeting new leave obligations?",
        },
      },
    ],
  },
  {
    id: "eu",
    label: "EU",
    name: "European Union",
    hooks: [
      {
        id: "pay-transparency",
        date: "7 June 2027",
        title: "First EU pay transparency reports",
        source: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex:32023L0970",
        impact: "Employers with 250 or more workers must report annually and employers with 150–249 workers every three years, with the first reports due by 7 June 2027 under the directive. National implementing laws govern local obligations.",
        tech: {
          relevance: "Payroll, compensation analytics, recruitment software, HRIS and workforce reporting.",
          opportunity: "Can employers’ payroll and compensation data explain their pay decisions when EU reporting begins?",
        },
        services: {
          relevance: "Pay and reward consulting, recruitment advisory, job evaluation, compensation benchmarking and HR analytics services.",
          opportunity: "Are employers ready to explain their pay differences under the EU transparency rules?",
        },
      },
      {
        id: "recruitment-ai",
        date: "2 December 2027",
        title: "EU AI Act: high-risk recruitment and employment systems",
        source: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai",
        impact: "High-risk AI obligations are due to apply to covered recruitment and employment systems, including certain tools used for hiring, promotion and worker management. Providers and deployers will need to meet their respective requirements.",
        tech: {
          relevance: "Recruitment AI, applicant tracking, talent assessment, performance management and workforce analytics.",
          opportunity: "What must recruitment technology vendors prove before the EU AI Act deadline?",
        },
        services: {
          relevance: "Recruitment process outsourcing, hiring advisory, assessment services, AI governance consulting and recruiter training.",
          opportunity: "What should employers ask recruitment partners about AI-assisted hiring decisions?",
        },
      },
      {
        id: "platform-work",
        date: "2027",
        status: "National implementation",
        title: "Platform Work Directive",
        source: "https://eur-lex.europa.eu/eli/dir/2024/2831/oj",
        impact: "Following the 2 December 2026 transposition deadline, national rules on platform-worker employment status and algorithmic management will affect digital labour platforms during 2027. Requirements will vary by member state.",
        tech: {
          relevance: "Gig-work platforms, contingent workforce management, scheduling and automated worker decision systems.",
          opportunity: "How will Europe’s platform work rules change the design of algorithmic workforce management tools?",
        },
        services: {
          relevance: "Contingent labour consulting, platform-work advisory, contractor engagement and workforce management services.",
          opportunity: "How will the EU Platform Work Directive affect businesses using platform-based labour?",
        },
      },
    ],
  },
];

const watchlist = [
  {
    id: "guaranteed-hours",
    title: "UK guaranteed-hours and shift-notice rights",
    tech: "Particularly relevant to workforce scheduling and contingent labour platforms. The government has not announced commencement dates.",
    services: "Relevant to outsourced HR, employment advisory, workforce planning and manager training. Commencement dates have not been announced.",
  },
  {
    id: "nda-restrictions",
    title: "UK workplace NDA restrictions",
    tech: "Scheduled for September 2027, addressing clauses that prevent disclosures of harassment or discrimination. Relevant to employee relations and HR case management.",
    services: "Scheduled for September 2027. Relevant to HR consultancies, employee relations advisers and workplace training providers.",
  },
  {
    id: "ai-blacklisting",
    title: "UK AI blacklisting protections",
    tech: "Scheduled for April 2027. A narrower but relevant angle for recruitment platforms using automated screening.",
    services: "Scheduled for April 2027. Relevant to recruitment consultancies, candidate assessment services and recruiter training.",
  },
  {
    id: "traineeships-reform",
    title: "EU traineeships reform",
    tech: "Proposed rules affecting traineeships and disguised employment relationships. No confirmed 2027 compliance deadline.",
    services: "Proposed rules affecting traineeships and disguised employment relationships. Relevant to recruitment, early-careers and training providers; no confirmed 2027 compliance deadline.",
  },
];

export function getHRCalendar(audience: HRAudience) {
  return {
    regions: regions.map(({ hooks, ...region }) => ({
      ...region,
      hooks: hooks.map(({ tech, services, ...hook }) => ({
        ...hook,
        ...(audience === "tech" ? tech : services),
      })),
    })),
    watchlist: watchlist.map(({ id, title, [audience]: text }) => ({ id, title, text })),
  };
}

type TimelineGroup = {
  period: string;
  entries: { id: string; region: "UK" | "EU"; title: string }[];
};

export const timeline: TimelineGroup[] = [
  {
    period: "January",
    entries: [{ id: "unfair-dismissal", region: "UK", title: "Unfair dismissal reforms" }],
  },
  {
    period: "March",
    entries: [
      { id: "fire-and-rehire", region: "UK", title: "Fire-and-rehire protections" },
      { id: "equality-and-menopause", region: "UK", title: "Public-authority equality and menopause plans" },
    ],
  },
  {
    period: "April",
    entries: [
      { id: "collective-redundancy", region: "UK", title: "Collective redundancy threshold" },
      { id: "equality-and-menopause", region: "UK", title: "Private-sector action plans" },
      { id: "bereavement-leave", region: "UK", title: "Bereavement leave" },
      { id: "ai-blacklisting", region: "UK", title: "AI blacklisting protections" },
    ],
  },
  {
    period: "June",
    entries: [{ id: "pay-transparency", region: "EU", title: "Pay transparency first reports (7 June)" }],
  },
  {
    period: "September",
    entries: [{ id: "nda-restrictions", region: "UK", title: "Workplace NDA restrictions" }],
  },
  {
    period: "October",
    entries: [
      { id: "flexible-working", region: "UK", title: "Flexible working" },
      { id: "pregnancy-and-maternity", region: "UK", title: "Pregnancy and maternity dismissal protections" },
    ],
  },
  {
    period: "December",
    entries: [
      { id: "recruitment-ai", region: "EU", title: "Employment AI rules (2 December)" },
      { id: "umbrella-companies", region: "UK", title: "Umbrella company regulation" },
    ],
  },
  {
    period: "All year",
    entries: [{ id: "platform-work", region: "EU", title: "Platform Work Directive national implementation" }],
  },
  {
    period: "To be confirmed",
    entries: [{ id: "guaranteed-hours", region: "UK", title: "Guaranteed-hours and shift-notice rights" }],
  },
];
