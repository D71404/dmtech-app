import React, { useState, useCallback, useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import SplineLoader from './SplineLoader';

interface SplineSceneProps {
  url: string;
  className?: string;
  onLoad?: () => void;
  preload?: boolean;
}

export default function SplineScene({ url, className = '', onLoad, preload = true }: SplineSceneProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const splineRef = useRef(null);

  useEffect(() => {
    if (preload) {
      const img = new Image();
      img.src = url;
    }
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('spline-container');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [url, preload]);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
    setHasError(false);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback((error: any) => {
    console.error('Spline loading error:', error);
    setIsLoading(false);
    setHasError(true);
  }, []);

  return (
    <div id="spline-container" className={`relative w-full h-full ${className}`}>
      {/* Fallback gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900" />

      {/* Spline scene */}
      {!hasError && isVisible && (
        <div 
          className={`absolute inset-0 transition-opacity duration-1000 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <Spline
            ref={splineRef}
            scene={url}
            onLoad={handleLoad}
            onError={handleError}
            style={{ width: '100%', height: '100%' }}
            renderOnDemand={true}
          />
        </div>
      )}

      {/* Loading indicator */}
      {(isLoading || !isVisible) && !hasError && <SplineLoader />}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white/80">
            <p>Failed to load 3D scene</p>
            <button 
              onClick={() => {
                setHasError(false);
                setIsLoading(true);
                if (splineRef.current) {
                  // @ts-ignore
                  splineRef.current.load(url);
                }
              }}
              className="mt-4 px-4 py-2 bg-blue-500/50 hover:bg-blue-500/70 rounded-lg transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      )}
    </div>
  );
}