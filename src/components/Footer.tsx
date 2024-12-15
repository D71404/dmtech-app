import React from 'react';
import { MapPin, Phone, Mail, Linkedin, Facebook, Instagram } from 'lucide-react';
import { translations } from '../translations';
import { SOCIAL_LINKS, CONTACT_INFO } from '../config/constants';
import Logo from './Logo';

interface FooterProps {
  language: 'en' | 'gr';
  className?: string;
}

export default function Footer({ language, className = '' }: FooterProps) {
  const t = translations[language];
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Logo />
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
              {t.footer.about}
            </p>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-4">{t.nav.services}</h3>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
              <li>{t.services.webDev}</li>
              <li>{t.services.dataMgmt}</li>
              <li>{t.services.techConsult}</li>
              <li>{t.services.ai}</li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-4">{t.contact.title}</h3>
            <div className="space-y-4 text-sm sm:text-base">
              <div>
                <h4 className="text-gray-900 dark:text-white font-medium mb-2">{t.footer.locations.uk}</h4>
                <div className="space-y-2">
                  <div className="flex items-start text-gray-600 dark:text-gray-400">
                    <MapPin className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                    <span>{CONTACT_INFO.uk.address.street}<br/>{CONTACT_INFO.uk.address.city}</span>
                  </div>
                  <div className="flex items-start text-gray-600 dark:text-gray-400">
                    <Phone className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                    <div className="flex flex-col">
                      {CONTACT_INFO.uk.phones.map((phone, index) => (
                        <span key={index}>{phone}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </div>
            </div>
          </div>
          
          {/* Social Links */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-4">{t.footer.followUs}</h3>
            <div className="flex flex-wrap gap-6">
              <a 
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a 
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
                <span className="text-sm">Facebook</span>
              </a>
              <a 
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
                <span className="text-sm">Instagram</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 sm:mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} DM TECHS. {t.footer.allRightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
}