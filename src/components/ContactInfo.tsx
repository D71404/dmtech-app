import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../config/constants';

interface ContactInfoProps {
  title: string;
}

export default function ContactInfo({ title }: ContactInfoProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-medium text-white">{title}</h3>
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 bg-white/10 p-3 rounded-lg">
          <MapPin className="h-6 w-6 text-blue-300" />
        </div>
        <div>
          <p className="text-gray-300/70">
            {CONTACT_INFO.uk.address.street}<br />
            {CONTACT_INFO.uk.address.city}
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 bg-white/10 p-3 rounded-lg">
          <Phone className="h-6 w-6 text-blue-300" />
        </div>
        <div className="flex flex-col justify-center text-gray-300/70">
          {CONTACT_INFO.uk.phones.map((phone, index) => (
            <span key={index}>{phone}</span>
          ))}
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0 bg-white/10 p-3 rounded-lg">
          <Mail className="h-6 w-6 text-blue-300" />
        </div>
        <div className="text-gray-300/70">
          <a 
            href={`mailto:${CONTACT_INFO.email}`}
            className="hover:text-white transition-colors"
          >
            {CONTACT_INFO.email}
          </a>
        </div>
      </div>
    </div>
  );
}