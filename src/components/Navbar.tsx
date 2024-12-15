import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { translations } from '../translations';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  language: 'en' | 'gr';
  setLanguage: (lang: 'en' | 'gr') => void;
}

export default function Navbar({ language, setLanguage }: NavbarProps) {
  const t = translations[language];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 px-4 py-2">
      <div className="max-w-7xl mx-auto">
        {/* Desktop & Mobile Header */}
        <div className={`${isMenuOpen ? 'bg-white/95 dark:bg-black/95' : 'bg-white/30 dark:bg-black/30'} backdrop-blur-md rounded-full md:rounded-full px-4 sm:px-6 py-3 transition-all duration-300`}>
          <div className="flex items-center justify-between">
            <Logo />
            
            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-900 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-6">
                <Link 
                  to="/" 
                  className="text-gray-900 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white transition-colors font-medium"
                >
                  {t.nav.home}
                </Link>
                <Link 
                  to="/services" 
                  className="text-gray-900 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white transition-colors font-medium"
                >
                  {t.nav.services}
                </Link>
                <Link 
                  to="/about-us" 
                  className="text-gray-900 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white transition-colors font-medium"
                >
                  {t.nav.aboutUs}
                </Link>
                <Link 
                  to="/contact" 
                  className="text-gray-900 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white transition-colors font-medium"
                >
                  {t.nav.contact}
                </Link>
              </div>

              <div className="flex items-center space-x-4">
                <ThemeToggle />
                <div className="flex items-center space-x-1">
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                      language === 'en'
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-900 dark:text-gray-300 hover:bg-gray-200/50 dark:hover:bg-gray-700/50'
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setLanguage('gr')}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                      language === 'gr'
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-900 dark:text-gray-300 hover:bg-gray-200/50 dark:hover:bg-gray-700/50'
                    }`}
                  >
                    GR
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-2">
            <div className="bg-white/95 dark:bg-black/95 backdrop-blur-md rounded-2xl px-4 py-6 shadow-lg border border-gray-200/20 dark:border-gray-700/20">
              <div className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-900 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white transition-colors font-medium px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50"
                >
                  {t.nav.home}
                </Link>
                <Link 
                  to="/services" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-900 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white transition-colors font-medium px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50"
                >
                  {t.nav.services}
                </Link>
                <Link 
                  to="/about-us" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-900 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white transition-colors font-medium px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50"
                >
                  {t.nav.aboutUs}
                </Link>
                <Link 
                  to="/contact" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-900 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white transition-colors font-medium px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50"
                >
                  {t.nav.contact}
                </Link>
                <div className="flex items-center justify-between pt-4 mt-2 border-t border-gray-200 dark:border-gray-700">
                  <ThemeToggle />
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setLanguage('en')}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        language === 'en'
                          ? 'bg-blue-500 text-white'
                          : 'text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50'
                      }`}
                    >
                      EN
                    </button>
                    <button
                      onClick={() => setLanguage('gr')}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        language === 'gr'
                          ? 'bg-blue-500 text-white'
                          : 'text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50'
                      }`}
                    >
                      GR
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}