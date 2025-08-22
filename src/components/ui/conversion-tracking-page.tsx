import { useEffect } from 'react';
import { trackNightsbridgeBooking } from '@/lib/conversion-tracking';

interface ConversionTrackingPageProps {
  pageType: 'booking' | 'accommodation' | 'contact' | 'gallery' | 'blog';
  transactionId?: string;
  value?: number;
  currency?: string;
}

/**
 * Component to automatically track conversions when users land on specific pages
 * This is particularly useful for tracking conversions from Google Ads campaigns
 */
export function ConversionTrackingPage({ 
  pageType, 
  transactionId, 
  value, 
  currency = 'ZAR' 
}: ConversionTrackingPageProps) {
  useEffect(() => {
    // Track conversion based on page type
    switch (pageType) {
      case 'booking':
        // Track Nightsbridge booking conversion
        trackNightsbridgeBooking(transactionId, value, currency);
        break;
      case 'accommodation':
        // Track accommodation page view as potential conversion
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'page_view', {
            event_category: 'engagement',
            event_label: 'accommodation_page',
            custom_parameters: {
              page_type: 'accommodation'
            }
          });
        }
        break;
      case 'contact':
        // Track contact page view as potential conversion
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'page_view', {
            event_category: 'engagement',
            event_label: 'contact_page',
            custom_parameters: {
              page_type: 'contact'
            }
          });
        }
        break;
      case 'gallery':
        // Track gallery page view as potential conversion
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'page_view', {
            event_category: 'engagement',
            event_label: 'gallery_page',
            custom_parameters: {
              page_type: 'gallery'
            }
          });
        }
        break;
      case 'blog':
        // Track blog page view as potential conversion
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'page_view', {
            event_category: 'engagement',
            event_label: 'blog_page',
            custom_parameters: {
              page_type: 'blog'
            }
          });
        }
        break;
    }
  }, [pageType, transactionId, value, currency]);

  // This component doesn't render anything
  return null;
}
