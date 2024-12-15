import React from 'react';
import { translations } from '../translations';
import { Toaster } from 'react-hot-toast';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import SocialLinks from '../components/SocialLinks';
import SplineScene from '../components/SplineScene';

export default function Contact({ language }: { language: 'en' | 'gr' }) {
  const t = translations[language];

  return (
    <div className="min-h-screen relative">
      <Toaster position="top-center" />
      
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <SplineScene
          url="https://prod.spline.design/HMYwhjJNzNDtub10/scene.splinecode"
        />
        
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-4">{t.contact.title}</h1>
            <div className="w-32 h-1 bg-blue-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/10 transform hover:scale-[1.02] transition-all duration-300">
              <ContactForm language={language} />
            </div>

            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/10 transform hover:scale-[1.02] transition-all duration-300">
              <div className="relative">
                <div className="absolute -top-12 -left-12 w-24 h-24 bg-blue-400/10 rounded-full blur-xl"></div>
                <div className="relative space-y-8">
                  <ContactInfo title={t.footer.locations.uk} />
                  <SocialLinks title={t.footer.followUs} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}