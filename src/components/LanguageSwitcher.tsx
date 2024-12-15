import React from 'react';
import { Language } from '../types/translations';

interface LanguageSwitcherProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export default function LanguageSwitcher({ language, setLanguage }: LanguageSwitcherProps) {
  return (
    <div className="flex items-center justify-center space-x-4">
      <button
        onClick={() => setLanguage('en')}
        className={`px-4 py-2 rounded-lg font-eurostile tracking-wide ${
          language === 'en'
            ? 'bg-blue-400 text-white'
            : 'bg-white/10 text-white hover:bg-white/20'
        } transition-colors`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('gr')}
        className={`px-4 py-2 rounded-lg font-eurostile tracking-wide ${
          language === 'gr'
            ? 'bg-blue-400 text-white'
            : 'bg-white/10 text-white hover:bg-white/20'
        } transition-colors`}
      >
        GR
      </button>
    </div>
  );
}