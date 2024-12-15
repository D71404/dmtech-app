import React from 'react';
import { LucideIcon } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import type { Language } from '../types/translations';
import type { ServiceKey } from '../types/services';

interface ServiceCardProps {
  serviceKey: ServiceKey;
  icon: LucideIcon;
  language: Language;
}

export default function ServiceCard({ serviceKey, icon: Icon, language }: ServiceCardProps) {
  const { services } = useTranslation(language);

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 border border-white/10 h-full">
      <div className="p-8">
        <div className="mb-6">
          <Icon className="h-12 w-12 text-blue-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">
          {services[serviceKey]}
        </h3>
        <p className="text-gray-200/80 mb-6">
          {services[`${serviceKey}Desc`]}
        </p>
        <ul className="space-y-2">
          {services.serviceFeatures[serviceKey].map((feature, index) => (
            <li key={index} className="text-gray-200/70 flex items-center">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}