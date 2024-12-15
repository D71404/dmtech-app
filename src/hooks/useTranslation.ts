import { serviceTranslations } from '../translations/services';
import type { Language } from '../types/translations';

export function useTranslation(language: Language) {
  return {
    services: serviceTranslations[language]
  };
}