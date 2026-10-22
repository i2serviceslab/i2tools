export type Language = 'en' | 'es';

export interface NavItem {
  id: string;
  label: { en: string; es: string };
}

export interface MetricItem {
  number: string;
  label: { en: string; es: string };
  detail: { en: string; es: string };
  highlight?: boolean;
}

export interface PracticeArea {
  id: string;
  title: { en: string; es: string };
  tagline: { en: string; es: string };
  icon: string;
  items: { en: string; es: string }[];
}

export interface ServicePackage {
  id: string;
  badge: { en: string; es: string };
  name: { en: string; es: string };
  target: { en: string; es: string };
  deliverables: { en: string; es: string }[];
  featured?: boolean;
}
