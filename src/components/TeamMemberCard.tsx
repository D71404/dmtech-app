import React from 'react';
import { TeamMember } from '../types/team';

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 transform hover:scale-[1.02] transition-all duration-300">
      <div className="text-center max-w-2xl mx-auto">
        <h3 className="text-2xl font-eurostile font-bold tracking-wide text-white mb-2">
          {member.name}
        </h3>
        <p className="text-blue-300 mb-6 font-eurostile tracking-wide">{member.role}</p>
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-gray-300 font-['Open_Sans'] text-base leading-relaxed"
             style={{ 
               letterSpacing: '0.015em',
               fontWeight: 300,
               maxWidth: '65ch',
               margin: '0 auto',
               lineHeight: '1.8'
             }}
          >
            {member.bio}
          </p>
        </div>
      </div>
    </div>
  );
}