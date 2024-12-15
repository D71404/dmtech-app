import React, { useState, useEffect } from 'react';
import SplineScene from './SplineScene';

interface SplineBackgroundProps {
  url: string;
}

export default function SplineBackground({ url }: SplineBackgroundProps) {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Delay loading the Spline scene to prioritize initial page render
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute inset-0">
      {shouldLoad ? (
        <SplineScene
          url={url}
          preload={true}
          className="w-full h-full"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900" />
      )}
    </div>
  );
}