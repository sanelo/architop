import { ReactNode } from 'react';

export interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  colSpan?: 'col-span-1' | 'col-span-2' | 'col-span-3';
  delay?: number;
}

export interface StepProps {
  number: string;
  title: string;
  description: string;
}
