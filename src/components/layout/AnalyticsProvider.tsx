// Analytics Provider - Global analytics initialization and management
import React, { createContext, useContext, useEffect, useState } from 'react';
import { analyticsService } from '@/lib/analytics-service';
import { CookieConsent, useCookieConsent } from '@/components/ui/cookie-consent';
import { useAnalytics } from '@/hooks/use-analytics';

interface AnalyticsContextType {
  isInitialized: boolean;
  hasConsent: boolean;
  trackPageView: (path?: string, title?: string) => void;
  trackEvent: (eventName: string, data?: any) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  const [isInitialized, setIsInitialized] = useState(false);
  const { preferences, hasConsented } = useCookieConsent();
  const { trackPageView, trackEvent } = useAnalytics();

  // Initialize analytics service
  useEffect(() => {
    const initializeAnalytics = async () => {
      try {
        await analyticsService.initialize();
        setIsInitialized(true);
        if (process.env.NODE_ENV === 'development') {
          console.log('[Analytics] Service initialized successfully');
        }
      } catch (error) {
        console.error('[Analytics] Failed to initialize:', error);
      }
    };

    initializeAnalytics();
  }, []);

  // Update consent when preferences change
  useEffect(() => {
    if (isInitialized && hasConsented()) {
      const hasAnalyticsConsent = preferences.analytics || preferences.marketing;
      analyticsService.setConsent(hasAnalyticsConsent);
    }
  }, [isInitialized, preferences, hasConsented]);

  // Track page view on route changes
  useEffect(() => {
    if (isInitialized && (preferences.analytics || preferences.marketing)) {
      trackPageView();
    }
  }, [isInitialized, preferences.analytics, preferences.marketing, trackPageView]);

  const contextValue: AnalyticsContextType = {
    isInitialized,
    hasConsent: preferences.analytics || preferences.marketing,
    trackPageView,
    trackEvent
  };

  return (
    <AnalyticsContext.Provider value={contextValue}>
      {children}
      <CookieConsent />
    </AnalyticsContext.Provider>
  );
}

export function useAnalyticsContext() {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalyticsContext must be used within an AnalyticsProvider');
  }
  return context;
}

// Page tracking component for route-specific analytics
export function PageTracker({ pageName, pageCategory }: { pageName: string; pageCategory?: string }) {
  const { trackEvent, hasConsent } = useAnalyticsContext();

  useEffect(() => {
    if (hasConsent) {
      trackEvent('page_visit', {
        event_category: pageCategory || 'navigation',
        event_label: pageName,
        custom_parameters: {
          page_name: pageName,
          page_category: pageCategory,
          timestamp: new Date().toISOString()
        }
      });
    }
  }, [hasConsent, pageName, pageCategory, trackEvent]);

  return null;
}