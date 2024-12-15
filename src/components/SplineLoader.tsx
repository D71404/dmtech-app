import React from 'react';
import { Loader2 } from 'lucide-react';

export default function SplineLoader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="text-center">
        <Loader2 className="w-12 h-12 text-white/80 animate-spin mx-auto mb-4" />
        <p className="text-white/80 text-sm">Loading 3D Scene...</p>
      </div>
    </div>
  );
}