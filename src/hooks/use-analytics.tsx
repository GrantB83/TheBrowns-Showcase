// Analytics Hook - Simplified interface for tracking events
import { useCallback, useEffect } from 'react';
import { analyticsService } from '@/lib/analytics-service';
import type { EcommerceItem, ConversionData, CustomEventData } from '@/lib/analytics-service';

export function useAnalytics() {
  // Initialize analytics service on mount
  useEffect(() => {
    analyticsService.initialize();
  }, []);

  // Track page views
  const trackPageView = useCallback((path?: string, title?: string) => {
    const currentPath = path || window.location.pathname;
    const currentTitle = title || document.title;
    analyticsService.trackPageView(currentPath, currentTitle);
  }, []);

  // Track custom events
  const trackEvent = useCallback((eventName: string, data?: CustomEventData) => {
    analyticsService.trackEvent(eventName, data);
  }, []);

  // Track booking-specific events
  const trackBookingEvent = useCallback((action: string, suiteData?: {
    suite_id?: string;
    suite_name?: string;
    suite_category?: string;
    check_in?: string;
    check_out?: string;
    guests?: number;
    value?: number;
  }) => {
    analyticsService.trackEvent(`booking_${action}`, {
      event_category: 'booking',
      event_label: action,
      custom_parameters: suiteData
    });
  }, []);

  // Track funnel progression
  const trackFunnelStep = useCallback((step: string, data?: Record<string, any>) => {
    analyticsService.trackFunnelStep(step, data);
  }, []);

  // Track completed booking conversion
  const trackBookingConversion = useCallback((conversionData: ConversionData) => {
    analyticsService.trackPurchase(conversionData);
  }, []);

  // Track user interactions
  const trackInteraction = useCallback((element: string, action: string, data?: Record<string, any>) => {
    analyticsService.trackEvent('user_interaction', {
      event_category: 'interaction',
      event_label: `${element}_${action}`,
      custom_parameters: { element, action, ...data }
    });
  }, []);

  // Track errors for debugging
  const trackError = useCallback((error: string, context?: Record<string, any>) => {
    analyticsService.trackEvent('error', {
      event_category: 'error',
      event_label: error,
      custom_parameters: context
    });
  }, []);

  // Check if analytics is ready
  const isReady = useCallback(() => {
    return analyticsService.isReady();
  }, []);

  return {
    trackPageView,
    trackEvent,
    trackBookingEvent,
    trackFunnelStep,
    trackBookingConversion,
    trackInteraction,
    trackError,
    isReady
  };
}

// Convenience hooks for specific tracking scenarios
export function useBookingTracking() {
  const { trackBookingEvent, trackFunnelStep, trackBookingConversion, trackEvent } = useAnalytics();

  const trackSuiteView = useCallback((suiteId: string, suiteName: string) => {
    trackFunnelStep('suite_view', { suite_id: suiteId, suite_name: suiteName });
    trackBookingEvent('suite_view', { suite_id: suiteId, suite_name: suiteName });
  }, [trackBookingEvent, trackFunnelStep]);

  const trackDateSelection = useCallback((checkIn: string, checkOut: string, guests: number) => {
    trackFunnelStep('date_selection', { check_in: checkIn, check_out: checkOut, guests });
    trackBookingEvent('date_selection', { check_in: checkIn, check_out: checkOut, guests });
  }, [trackBookingEvent, trackFunnelStep]);

  const trackBookingAttempt = useCallback((suiteData: {
    suite_id: string;
    suite_name: string;
    check_in: string;
    check_out: string;
    guests: number;
    value: number;
  }) => {
    trackFunnelStep('guest_details', suiteData);
    trackBookingEvent('attempt', suiteData);
  }, [trackBookingEvent, trackFunnelStep]);

  const trackBookingSuccess = useCallback((conversionData: ConversionData) => {
    trackFunnelStep('booking_confirmation', {
      transaction_id: conversionData.transaction_id,
      value: conversionData.value
    });
    trackBookingConversion(conversionData);
  }, [trackFunnelStep, trackBookingConversion]);

  const trackBookingAbandonment = useCallback((step: string, reason?: string) => {
    trackEvent('booking_abandonment', {
      event_category: 'booking',
      event_label: 'abandonment',
      custom_parameters: { abandoned_at: step, reason }
    });
  }, [trackEvent]);

  return {
    trackSuiteView,
    trackDateSelection,
    trackBookingAttempt,
    trackBookingSuccess,
    trackBookingAbandonment
  };
}

export function usePageTracking() {
  const { trackPageView, trackInteraction } = useAnalytics();

  // Track page view on mount
  useEffect(() => {
    trackPageView();
  }, [trackPageView]);

  const trackNavigation = useCallback((page: string, source?: string) => {
    trackInteraction('navigation', 'click', { page, source });
  }, [trackInteraction]);

  const trackSearch = useCallback((query: string, results?: number) => {
    trackInteraction('search', 'query', { query, results });
  }, [trackInteraction]);

  const trackCTAClick = useCallback((cta: string, location: string) => {
    trackInteraction('cta', 'click', { cta, location });
  }, [trackInteraction]);

  return {
    trackNavigation,
    trackSearch,
    trackCTAClick
  };
}

// Export types for component usage
export type { EcommerceItem, ConversionData, CustomEventData };