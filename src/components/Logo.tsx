import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = '', showText = true }: LogoProps) {
  return (
    <Link to="/" className={`flex items-center space-x-3 ${className}`}>
      <svg viewBox="0 0 200 200" className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500 dark:text-blue-400">
        <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="8"/>
        <path 
          d="M100 40 L140 65 L140 115 L100 140 L60 115 L60 65 Z" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="8" 
          strokeLinejoin="round"
        />
        <line x1="100" y1="40" x2="100" y2="140" stroke="currentColor" strokeWidth="8"/>
      </svg>
      {showText && (
        <span className="text-gray-900 dark:text-white font-bold text-lg sm:text-xl tracking-wider">
          DM TECHS
        </span>
      )}
    </Link>
  );
}