import type { LucideIcon } from 'lucide-react';

export interface ServiceFeature {
  title: string;
  description: string;
  image?: string;
}

export interface ServiceDetail {
  title: string;
  description: string;
  features: ServiceFeature[];
}

export interface ServiceConfig {
  [key: string]: {
    icon: LucideIcon;
    imageUrl: string;
  };
}

export type ServiceKey = 
  | 'webDev' 
  | 'seo' 
  | 'graphicDesign' 
  | 'dataMgmt' 
  | 'techConsult' 
  | 'mobileApp' 
  | 'ai'
  | 'contentMgmt';

export interface ServiceDetails {
  [key: string]: {
    [key: string]: ServiceDetail;
  };
}