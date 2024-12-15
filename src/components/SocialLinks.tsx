import React from 'react';
import { Linkedin, Facebook, Instagram } from 'lucide-react';
import { SOCIAL_LINKS } from '../config/constants';

interface SocialLinksProps {
  title: string;
}

export default function SocialLinks({ title }: SocialLinksProps) {
  return (
    <div className="pt-6 border-t border-white/10">
      <h3 className="text-xl font-medium text-white mb-4">{title}</h3>
      <div className="flex flex-wrap gap-4">
        <a 
          href={SOCIAL_LINKS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-gray-300/70 hover:text-white"
        >
          <Linkedin className="h-5 w-5" />
          <span>LinkedIn</span>
        </a>
        <a 
          href={SOCIAL_LINKS.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-gray-300/70 hover:text-white"
        >
          <Facebook className="h-5 w-5" />
          <span>Facebook</span>
        </a>
        <a 
          href={SOCIAL_LINKS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-gray-300/70 hover:text-white"
        >
          <Instagram className="h-5 w-5" />
          <span>Instagram</span>
        </a>
      </div>
    </div>
  );
}