import { useEffect, useState } from 'react';

// Performance monitoring for mobile optimization
export function usePerformanceMonitoring() {
  const [metrics, setMetrics] = useState({
    fcp: 0, // First Contentful Paint
    lcp: 0, // Largest Contentful Paint
    fid: 0, // First Input Delay
    cls: 0, // Cumulative Layout Shift
    ttfb: 0 // Time to First Byte
  });

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    const reportMetric = (name: string, value: number) => {
      setMetrics(prev => ({ ...prev, [name]: value }));
      
      // Log performance issues for mobile optimization
      if (name === 'lcp' && value > 2500) {
        console.warn('LCP exceeds 2.5s - consider image optimization');
      }
      if (name === 'fid' && value > 100) {
        console.warn('FID exceeds 100ms - consider reducing JavaScript');
      }
      if (name === 'cls' && value > 0.1) {
        console.warn('CLS exceeds 0.1 - check layout shifts');
      }
    };

    // Observer for Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        switch (entry.entryType) {
          case 'paint':
            if (entry.name === 'first-contentful-paint') {
              reportMetric('fcp', entry.startTime);
            }
            break;
          case 'largest-contentful-paint':
            reportMetric('lcp', entry.startTime);
            break;
          case 'first-input':
            reportMetric('fid', (entry as any).processingStart - entry.startTime);
            break;
          case 'layout-shift':
            if (!(entry as any).hadRecentInput) {
              reportMetric('cls', (entry as any).value);
            }
            break;
          case 'navigation':
            reportMetric('ttfb', (entry as any).responseStart);
            break;
        }
      });
    });

    // Observe different entry types
    try {
      observer.observe({ type: 'paint', buffered: true });
      observer.observe({ type: 'largest-contentful-paint', buffered: true });
      observer.observe({ type: 'first-input', buffered: true });
      observer.observe({ type: 'layout-shift', buffered: true });
      observer.observe({ type: 'navigation', buffered: true });
    } catch (e) {
      // Fallback for browsers that don't support all entry types
      console.log('Some performance metrics not supported');
    }

    return () => observer.disconnect();
  }, []);

  return metrics;
}

// Mobile-specific viewport and device detection
export function useMobileDetection() {
  const [deviceInfo, setDeviceInfo] = useState({
    isMobile: false,
    isTablet: false,
    isTouch: false,
    orientation: 'portrait' as 'portrait' | 'landscape',
    viewportWidth: 0,
    viewportHeight: 0,
    pixelRatio: 1
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateDeviceInfo = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setDeviceInfo({
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isTouch: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
        orientation: width > height ? 'landscape' : 'portrait',
        viewportWidth: width,
        viewportHeight: height,
        pixelRatio: window.devicePixelRatio || 1
      });
    };

    updateDeviceInfo();
    
    window.addEventListener('resize', updateDeviceInfo);
    window.addEventListener('orientationchange', updateDeviceInfo);

    return () => {
      window.removeEventListener('resize', updateDeviceInfo);
      window.removeEventListener('orientationchange', updateDeviceInfo);
    };
  }, []);

  return deviceInfo;
}

// Network quality monitoring for asset optimization
export function useNetworkQuality() {
  const [networkInfo, setNetworkInfo] = useState({
    effectiveType: '4g',
    downlink: 10,
    rtt: 100,
    saveData: false
  });

  useEffect(() => {
    if (typeof navigator === 'undefined' || !('connection' in navigator)) return;

    const connection = (navigator as any).connection;
    
    const updateNetworkInfo = () => {
      setNetworkInfo({
        effectiveType: connection.effectiveType || '4g',
        downlink: connection.downlink || 10,
        rtt: connection.rtt || 100,
        saveData: connection.saveData || false
      });
    };

    updateNetworkInfo();
    connection.addEventListener('change', updateNetworkInfo);

    return () => {
      connection.removeEventListener('change', updateNetworkInfo);
    };
  }, []);

  return networkInfo;
}