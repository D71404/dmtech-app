import React from 'react';
import { translations } from '../translations';
import SplineScene from '../components/SplineScene';
import TeamMemberCard from '../components/TeamMemberCard';
import LanguageSwitcher from '../components/LanguageSwitcher';
import type { Language } from '../types/translations';

interface TeamProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export default function Team({ language, setLanguage }: TeamProps) {
  const t = translations[language];

  const teamMembers = [
    {
      name: t.team.members.daniyal.name,
      role: t.team.members.daniyal.role,
      bio: t.team.members.daniyal.bio
    },
    {
      name: t.team.members.efstathious.name,
      role: t.team.members.efstathious.role,
      bio: t.team.members.efstathious.bio
    }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Spline Background */}
      <div className="fixed inset-0 z-0">
        <SplineScene 
          url="https://prod.spline.design/LjO5L8iGhP78Jk4m/scene.splinecode"
          className="w-full h-full"
        />
        
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-eurostile font-bold tracking-wide text-white mb-4">
              {t.team.title}
            </h1>
            <p className="text-xl font-eurostile tracking-wide text-gray-300 mb-8">
              {t.team.subtitle}
            </p>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
            
            <LanguageSwitcher language={language} setLanguage={setLanguage} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}