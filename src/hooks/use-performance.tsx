import { useState, useEffect } from 'react';

// Performance monitoring hook
export function usePerformance() {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    renderTime: 0,
    interactionDelay: 0
  });

  useEffect(() => {
    // Measure page load time
    const loadTime = performance.now();
    setMetrics(prev => ({ ...prev, loadTime }));

    // Measure largest contentful paint
    if ('web-vitals' in window) {
      // Would implement Web Vitals here
    }

    // Performance observer for measuring render times
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'measure') {
            console.log(`${entry.name}: ${entry.duration}ms`);
          }
        });
      });

      observer.observe({ entryTypes: ['measure', 'navigation', 'paint'] });

      return () => observer.disconnect();
    }
  }, []);

  const measureRender = (componentName: string) => {
    performance.mark(`${componentName}-start`);
    
    return () => {
      performance.mark(`${componentName}-end`);
      performance.measure(
        `${componentName}-render`,
        `${componentName}-start`,
        `${componentName}-end`
      );
    };
  };

  return { metrics, measureRender };
}

// Image optimization hook
export function useImageOptimization() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const optimizeImageUrl = (url: string, width?: number, quality = 80) => {
    // For Unsplash images, add optimization parameters
    if (url.includes('unsplash.com')) {
      const params = new URLSearchParams();
      params.set('auto', 'format');
      params.set('fit', 'crop');
      params.set('q', quality.toString());
      if (width) params.set('w', width.toString());
      
      return `${url.split('?')[0]}?${params.toString()}`;
    }
    
    return url;
  };

  return {
    isLoading,
    hasError,
    handleImageLoad,
    handleImageError,
    optimizeImageUrl
  };
}