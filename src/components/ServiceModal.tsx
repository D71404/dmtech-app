import React from 'react';
import { X } from 'lucide-react';
import { ServiceDetail } from '../types/services';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: ServiceDetail | null;
  language: 'en' | 'gr';
}

export default function ServiceModal({ isOpen, onClose, service, language }: ServiceModalProps) {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white dark:bg-gray-900 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="p-4 sm:p-6 lg:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8">{service.description}</p>

            <div className="space-y-8 sm:space-y-12">
              {service.features.map((feature, index) => (
                <div key={index} className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                  <div className={`space-y-4 ${index % 2 === 1 ? 'sm:order-2' : ''}`}>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">{feature.description}</p>
                  </div>
                  {feature.image && (
                    <div className={`${index % 2 === 1 ? 'sm:order-1' : ''}`}>
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="rounded-lg w-full h-48 sm:h-64 object-cover"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}