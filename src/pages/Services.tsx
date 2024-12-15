import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import ServiceCard from '../components/ServiceCard';
import SplineScene from '../components/SplineScene';
import { SERVICES_CONFIG } from '../config/services';
import type { Language } from '../types/translations';

interface ServicesProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export default function Services({ language, setLanguage }: ServicesProps) {
  const { services } = useTranslation(language);

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 z-0">
        <SplineScene url="https://prod.spline.design/U1OB8-PLvtwS6Cwq/scene.splinecode" />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-4">{services.title}</h1>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={() => setLanguage('en')}
                className={`px-4 py-2 rounded-lg ${
                  language === 'en'
                    ? 'bg-blue-400 text-white'
                    : 'bg-white/10 text-white hover:bg-white/20'
                } transition-colors`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('gr')}
                className={`px-4 py-2 rounded-lg ${
                  language === 'gr'
                    ? 'bg-blue-400 text-white'
                    : 'bg-white/10 text-white hover:bg-white/20'
                } transition-colors`}
              >
                GR
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {Object.entries(SERVICES_CONFIG).map(([key, config]) => (
              <ServiceCard
                key={key}
                serviceKey={key as keyof typeof SERVICES_CONFIG}
                icon={config.icon}
                language={language}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}