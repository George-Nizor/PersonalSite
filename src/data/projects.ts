export interface Project {
  title: string;
  subtitle: string;
  summary: string;
  period: string;
  tags: string[];
  links: { label: string; href: string }[];
}

export const projects: Project[] = [
  {
    title: 'Bonehead Labs',
    subtitle: 'Founder & Principal Engineer',
    summary:
      'Built a boutique software studio delivering analytics automation, AI copilots, and immersive data experiences for high-growth teams.',
    period: '2021 — Present',
    tags: ['Founder', 'Product Strategy', 'AI Engineering'],
    links: [
      { label: 'Visit site', href: 'https://boneheadlabs.org/' },
      { label: 'Org GitHub', href: 'https://github.com/Bonehead-Labs' }
    ]
  },
  {
    title: 'Fabric Insight Mesh',
    subtitle: 'Analytics Engineer at Microsoft Fabric',
    summary:
      'Architected reusable data models and DAX-powered semantic layers across Fabric, streamlining insights delivery for enterprise stakeholders.',
    period: '2023 — 2024',
    tags: ['Microsoft Fabric', 'Data Modeling', 'Power BI'],
    links: []
  },
  {
    title: 'Predictive Maintenance AI',
    subtitle: 'ML Engineering Engagement',
    summary:
      'Deployed Amazon SageMaker pipelines with feature stores, multi-stage validation, and explainability dashboards for industrial IoT telemetry.',
    period: '2022',
    tags: ['SageMaker', 'MLOps', 'Explainable AI'],
    links: []
  },
  {
    title: 'Narrative BI Copilot',
    subtitle: 'LangChain + Power BI',
    summary:
      'Combined LangChain agents with DAX-calculated metrics to auto-generate executive-ready commentary directly in Power BI workspaces.',
    period: '2023',
    tags: ['LangChain', 'Python', 'Generative AI'],
    links: []
  }
];
