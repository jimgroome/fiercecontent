export type Hook = {
  id: string;
  date: string;
  title: string;
  source: string;
  impact: string;
  technology: string;
  opportunity: string;
};

export const regions: { id: "uk" | "eu" | "usa"; label: string; name: string; hooks: Hook[] }[] = [
  {
    id: "uk",
    label: "UK",
    name: "United Kingdom",
    hooks: [
      {
        id: "employment-rights",
        date: "2027",
        title: "Employment Rights Act rollout",
        source: "https://www.gov.uk/government/publications/implementing-the-plan-to-make-work-pay-and-employment-rights-act/plan-to-make-work-to-pay-and-employment-rights-act-timeline-update",
        impact: "Unfair dismissal protections change in January. Further measures include mandatory equality and menopause action plans for qualifying employers in April and flexible working reforms in October. Guaranteed-hours measures have no confirmed start date.",
        technology: "Workforce management, HRIS, rota planning, payroll and employee records.",
        opportunity: "What the 2027 employment changes mean for multi-site retailers managing large hourly-paid workforces.",
      },
      {
        id: "subscription-contracts",
        date: "January 2027",
        title: "Consumer subscription contracts",
        source: "https://www.gov.uk/government/publications/subscription-contracts",
        impact: "New consumer subscription protections affect pre-contract information, renewal reminders, cancellation and cooling-off processes for covered contracts.",
        technology: "Subscription commerce, ecommerce checkout, recurring billing, CRM and customer communications.",
        opportunity: "How retailers can redesign subscription sign-up, renewal and cancellation journeys without creating unnecessary friction.",
      },
      {
        id: "marketplace-vat",
        date: "October 2027",
        title: "Online marketplace VAT",
        source: "https://www.gov.uk/government/publications/factsheet-on-extending-vat-online-marketplace-liability-rules/extending-vat-online-marketplace-liability-rules-factsheet",
        impact: "The government plans to extend VAT collection responsibilities to online marketplaces for specified UK-business sales from October 2027. Detailed implementation legislation remains to follow.",
        technology: "Marketplace platforms, seller onboarding, tax engines, settlement and finance.",
        opportunity: "How marketplaces can prepare seller data, tax calculations and settlement processes for the new liability model.",
      },
      {
        id: "packaging-epr",
        date: "2027 reporting year",
        title: "Packaging EPR and recyclability ratings",
        source: "https://www.gov.uk/government/publications/assess-packaging-recyclability-recyclability-assessment-methodology-ram-2027",
        impact: "RAM 2027 applies to packaging placed on the market during 2027. Recyclability influences modulated producer fees for obligated businesses.",
        technology: "Product information, packaging data, supplier systems and finance analytics.",
        opportunity: "How retailers can improve packaging data and assess the commercial implications of material choices.",
      },
      {
        id: "deposit-return",
        date: "1 October 2027",
        title: "Deposit Return Scheme",
        source: "https://www.gov.uk/guidance/deposit-return-scheme-drinks-producer-and-retailer-responsibilities",
        impact: "Covered drinks containers enter the deposit system in England, Scotland and Northern Ireland. Participating retailers will need return and refund processes. Wales is following a separate policy path.",
        technology: "POS, reverse vending, payments, store operations and stock reconciliation.",
        opportunity: "How retailers can handle deposits and returns without slowing checkout or adding avoidable store workload.",
      },
      {
        id: "tobacco",
        date: "January 2027",
        title: "Tobacco age-of-sale rules",
        source: "https://www.gov.uk/guidance/selling-tobacco-herbal-smoking-products-and-cigarette-papers",
        impact: "From 1 January, sales of tobacco and related covered products to anyone born on or after 1 January 2009 are prohibited.",
        technology: "POS, age verification, store operations and staff training.",
        opportunity: "How convenience retailers can implement a birth-date-based sales rule consistently across stores and checkouts.",
      },
    ],
  },
  {
    id: "eu",
    label: "EU",
    name: "European Union",
    hooks: [
      {
        id: "instant-payments",
        date: "January–July 2027",
        title: "Instant euro payments expansion",
        source: "https://www.ecb.europa.eu/paym/retail/instant_payments/html/instant_payments_regulation.en.html",
        impact: "Payment providers in non-euro EU countries face phased obligations to receive and send instant euro transfers and verify payees. The obligations fall primarily on payment service providers.",
        technology: "Payment acceptance, reconciliation, treasury and fraud prevention.",
        opportunity: "What faster account-to-account payments could mean for retailers operating across European markets.",
      },
      {
        id: "unsold-goods",
        date: "2 March 2027",
        title: "Unsold consumer goods disclosure format",
        source: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=OJ:L_202600002",
        impact: "The EU implementing regulation standardises disclosures about discarded unsold consumer products for businesses subject to the underlying reporting obligation.",
        technology: "Inventory analytics, returns, WMS and reporting.",
        opportunity: "How better returns and inventory data can help retailers reduce unsold stock and account for its disposal.",
      },
      {
        id: "battery-passports",
        date: "18 February 2027",
        title: "Battery digital passports",
        source: "https://single-market-economy.ec.europa.eu/single-market/digital-product-passport/batteries_en",
        impact: "Qualifying electric-vehicle, light-means-of-transport and industrial batteries placed on the EU market require digital passports.",
        technology: "Product data, PIM, traceability and supplier information.",
        opportunity: "What retailers of e-bikes and other battery-powered products need from suppliers to support product information requirements.",
      },
    ],
  },
  {
    id: "usa",
    label: "USA",
    name: "United States",
    hooks: [
      {
        id: "state-privacy",
        date: "1 January / 1 May 2027",
        title: "New state consumer privacy laws",
        source: "https://www.venable.com/insights/publications/2026/07/2026-mid-year-state-privacy-law-update",
        impact: "Louisiana and Oklahoma introduce comprehensive consumer privacy laws in January. Alabama follows in May. Applicability thresholds and obligations differ by state.",
        technology: "Customer data platforms, consent management, loyalty and marketing automation.",
        opportunity: "How retailers can manage customer-data rights across an increasingly fragmented US regulatory environment.",
      },
      {
        id: "surveillance-pricing",
        date: "1 July 2027",
        title: "Connecticut surveillance pricing",
        source: "https://www.cga.ct.gov/2026/rpt/pdf/2026-R-0081.pdf",
        impact: "Connecticut restricts surveillance pricing by retailers and third-party delivery services, with related online disclosure requirements for other covered businesses.",
        technology: "Retail pricing engines, personalisation, ecommerce and governance.",
        opportunity: "How retail pricing teams can use customer data responsibly as states place limits on surveillance pricing.",
      },
      {
        id: "grocery-pricing",
        date: "2027 · verify dates",
        title: "New Jersey personalised grocery pricing",
        source: "https://nj.gov/governor/news/2026/approved/20260723a.shtml",
        impact: "New Jersey enacted restrictions on using shoppers\u2019 personal information to charge different prices for identical grocery products. Retailers should verify operative dates and scope before publishing deadline-led guidance.",
        technology: "Grocery pricing, loyalty platforms and customer analytics.",
        opportunity: "How grocery retailers can distinguish legitimate promotions from personal-data-driven price discrimination.",
      },
    ],
  },
];

export const watchlist = [
  {
    id: "digital-fairness",
    title: "EU Digital Fairness Act",
    text: "Follow legislative progress on consumer protection proposals covering online sales practices, subscription journeys and potentially manipulative design.",
    source: "https://commission.europa.eu/law/law-topic/consumer-protection-law_en",
  },
  {
    id: "environmental-claims",
    title: "EU environmental claims and product information",
    text: "Consumer information and green-claims rules began applying in September 2026. In 2027, retailers can refine product listings, evidence and marketing approvals.",
    source: "https://eur-lex.europa.eu/eli/dir/2024/825/oj",
  },
  {
    id: "marketplace-safety",
    title: "UK marketplace product safety reform",
    text: "Monitor government proposals on online marketplace responsibilities and unsafe product listings. These are still proposals.",
    source: "https://www.gov.uk/government/consultations/product-safety-review",
  },
  {
    id: "right-to-repair",
    title: "EU right to repair",
    text: "Consumer repair rights began applying in 2026. The EU repair platform is planned for July 2027, creating an opening to examine repair and after-sales models.",
    source: "https://commission.europa.eu/news-and-media/news/right-repair-new-consumer-rights-easy-and-attractive-repairs-2026-07-31_en",
  },
  {
    id: "textile-passports",
    title: "EU textiles digital product passports",
    text: "The EU plans to adopt product-specific ecodesign rules for textiles in late 2027. The requirement for retail products to carry passports will follow a separate timeline.",
    source: "https://single-market-economy.ec.europa.eu/single-market/digital-product-passport_en",
  },
];
