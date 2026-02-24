export interface ContactFormData {
  name: string;
  company: string;
  role: string;
  email: string;
  useCase: string;
  expectedMAU: string;
}

export type MaturityLevel = "L1" | "L2" | "L3" | "L4" | "L5";

export interface RoadmapItem {
  level: MaturityLevel;
  title: string;
  features: string[];
  current?: boolean;
}

export interface UseCaseCard {
  title: string;
  description: string;
  bullets: string[];
}

export interface ComparisonRow {
  feature: string;
  auth0: string;
  okta: string;
  zentra: string;
}
