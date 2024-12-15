import React from 'react';
import { ArrowRight, Code, Database, Brain, Bot } from 'lucide-react';
import { translations } from '../translations';
import SplineScene from '../components/SplineScene';

export default function Home({ language }: { language: 'en' | 'gr' }) {
  const t = translations[language];

  return (
    <div>
      {/* Hero Section with Spline Background */}
      <div className="h-screen relative flex items-center justify-center overflow-hidden">
        {/* Spline Background */}
        <div className="absolute inset-0">
          <SplineScene url="https://prod.spline.design/MxMEk3eCV9rHmxXw/scene.splinecode" />
        </div>
        
        {/* Content Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-8 [text-shadow:_0_4px_12px_rgb(0_0_0_/_50%)]">
            {t.hero.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-10 [text-shadow:_0_2px_8px_rgb(0_0_0_/_50%)]">
            {t.hero.subtitle}
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white bg-blue-600/90 backdrop-blur-sm rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Services Preview */}
      <div className="py-16 sm:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12 sm:mb-16">
            {t.services.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl hover:scale-105 transition-all duration-300">
              <Code className="h-10 sm:h-12 w-10 sm:w-12 text-blue-500 mb-4 sm:mb-6" />
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{t.services.webDev}</h3>
              <p className="text-gray-400">{t.services.webDevDesc}</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl hover:scale-105 transition-all duration-300">
              <Database className="h-10 sm:h-12 w-10 sm:w-12 text-blue-500 mb-4 sm:mb-6" />
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{t.services.dataMgmt}</h3>
              <p className="text-gray-400">{t.services.dataMgmtDesc}</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl hover:scale-105 transition-all duration-300">
              <Brain className="h-10 sm:h-12 w-10 sm:w-12 text-blue-500 mb-4 sm:mb-6" />
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{t.services.techConsult}</h3>
              <p className="text-gray-400">{t.services.techConsultDesc}</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl hover:scale-105 transition-all duration-300">
              <Bot className="h-10 sm:h-12 w-10 sm:w-12 text-blue-500 mb-4 sm:mb-6" />
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{t.services.ai}</h3>
              <p className="text-gray-400">{t.services.aiDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}