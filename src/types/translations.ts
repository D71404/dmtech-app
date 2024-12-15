export type Language = 'en' | 'gr';

export interface Translation {
  nav: {
    home: string;
    services: string;
    aboutUs: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
  };
  services: {
    title: string;
    webDev: string;
    webDevDesc: string;
    dataMgmt: string;
    dataMgmtDesc: string;
    techConsult: string;
    techConsultDesc: string;
    seo: string;
    seoDesc: string;
    graphicDesign: string;
    graphicDesignDesc: string;
    mobileApp: string;
    mobileAppDesc: string;
    ai: string;
    aiDesc: string;
    learnMore: string;
  };
  contact: {
    title: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      send: string;
      sending: string;
    };
  };
  team: {
    title: string;
    subtitle: string;
    members: {
      daniyal: {
        name: string;
        role: string;
        bio: string;
      };
      efstathious: {
        name: string;
        role: string;
        bio: string;
      };
    };
  };
  footer: {
    about: string;
    followUs: string;
    allRightsReserved: string;
    locations: {
      uk: string;
    };
  };
}

export interface Translations {
  en: Translation;
  gr: Translation;
}