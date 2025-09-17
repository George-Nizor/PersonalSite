export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  summary: string;
  achievements: string[];
}

export interface EducationItem {
  course: string;
  provider: string;
  period: string;
  summary: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  period: string;
  link?: string;
}

export const experience: ExperienceItem[] = [
  {
    title: 'Founder & Director',
    company: 'Bonehead Labs',
    period: 'Sep 2025 — Present',
    summary:
      'Founder and director overseeing all development and company operations across games, tooling, and research.',
    achievements: [
      'Developed three playable game demos to validate core mechanics and direction.',
      'Built and launched the official company website.',
      'Implemented a project management system using Notion to streamline delivery.',
      'More to come.'
    ]
  },
  {
    title: 'Analytics Engineer',
    company: 'Service Stream',
    period: 'Jul 2025 — Present',
    summary:
      'End‑to‑end data solutions across ETL, curated lakehouses, and reporting. AI/ML engineering for analytics workflows and automation.',
    achievements: [
      'Delivered ETL pipelines and curated models/views powering executive reporting.',
      'Built LLM‑powered analytics tools; trained and deployed CNN/ML models.',
      'Shipped internal developer tools and automation scripts for analytics workflows.'
    ]
  },
  {
    title: 'Analytics and Insights Analyst',
    company: 'Service Stream',
    period: 'Sep 2023 — Jul 2025',
    summary:
      'Drove Power BI program uplift, standardized templates, and integrated ERP data for dynamic dashboards across multiple domains.',
    achievements: [
      'Delivered 20+ Power BI reports across finance, H&S, fleet, sustainability, legal, risk.',
      'Revamped UI/UX standards; developed team‑wide Power BI templates.',
      'Integrated ERP data within Fabric architecture for executive/ops dashboards.',
      'Modelled fleet telematics and cost to drive actionable insights.'
    ]
  },
  {
    title: 'Data Analyst',
    company: 'Wilson Security',
    period: 'Jul 2022 — Sep 2023',
    summary:
      'Built compelling dashboards and analyses for leadership and clients; managed company‑wide data provision.',
    achievements: [
      'Produced Power BI/Excel dashboards communicating complex data clearly.',
      'Presented insights to executives; recognized for communication and impact.',
      'Ensured timely, high‑quality data delivery to teams across the business.'
    ]
  },
  {
    title: 'Cash Management Analyst',
    company: 'Linfox Armaguard Pty Ltd',
    period: 'Sep 2020 — Jan 2022',
    summary:
      'Excel/SQL‑driven analysis and planning for 400+ cashpoints nationally; client operations optimization.',
    achievements: [
      'Performed advanced statistical analysis of cashpoint usage patterns.',
      'Implemented long‑term planning and scheduling strategies to reduce downtime.',
      'Managed stakeholder relationships with major banks and partners.'
    ]
  }
];

export const education: EducationItem[] = [
  {
    course: 'Graduate Certificate of Business Administration',
    provider: 'Monash University',
    period: 'Nov 2021 — Aug 2022',
    summary: 'Business administration fundamentals supporting data‑driven strategy and leadership.'
  },
  {
    course: 'Bachelor of Business, Finance (General)',
    provider: 'Swinburne University of Technology',
    period: '2016 — 2020',
    summary: 'Finance and business foundations applied to analytics and operational decision‑making.'
  }
];

export const certifications: CertificationItem[] = [
  { name: 'Data Engineer Career Path', issuer: 'Credential', period: '' },
  { name: 'The Power of Statistics', issuer: 'Credential', period: '' },
  { name: 'Data Visualization and Dashboards with Excel and Cognos', issuer: 'Credential', period: '' },
  { name: 'First Aid', issuer: 'Credential', period: '' },
  { name: 'Machine Learning/AI Engineer Career Path', issuer: 'Credential', period: '' }
];
