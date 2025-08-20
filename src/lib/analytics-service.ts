// TypeScript interfaces for better type safety
interface GtagFunction {
  (...args: unknown[]): void;
  q?: unknown[];
  l?: number;
}

interface FacebookPixelFunction {
  (...args: unknown[]): void;
  q?: unknown[];
  loaded?: boolean;
  version?: string;
  queue?: unknown[];
  push?: FacebookPixelFunction;
}

interface DataLayerItem {
  event?: string;
  [key: string]: unknown;
}

declare global {
  interface Window {
    gtag?: GtagFunction;
    fbq?: FacebookPixelFunction;
    _fbq?: FacebookPixelFunction;
    dataLayer?: DataLayerItem[];
  }
}

// Analytics Service - Centralized tracking for GA4, Google Ads, and Meta Pixel
// This service provides a single interface for all tracking needs

export interface AnalyticsConfig {
  gtmId?: string;
  ga4Id?: string;
  googleAdsId?: string;
  metaPixelId?: string;
  isProduction: boolean;
  debugMode?: boolean;
}

export interface EcommerceItem {
  item_id: string;
  item_name: string;
  item_category: string;
  item_variant?: string;
  price: number;
  quantity: number;
  currency: string;
  start_date?: string;
  end_date?: string;
  guests?: number;
}

export interface ConversionData {
  transaction_id: string;
  value: number;
  currency: string;
  items: EcommerceItem[];
  booking_source?: string;
  payment_method?: string;
  guest_type?: 'new' | 'returning';
}

export interface CustomEventData {
  event_category?: string;
  event_label?: string;
  value?: number;
  custom_parameters?: Record<string, unknown>;
}

class AnalyticsService {
  private config: AnalyticsConfig;
  private isInitialized = false;
  private consentGranted = false;

  constructor() {
    this.config = {
      isProduction: import.meta.env.PROD,
      debugMode: !import.meta.env.PROD
    };
  }

  // Initialize all tracking services
  async initialize(): Promise<void> {
    if (this.isInitialized || typeof window === 'undefined') return;

    try {
      // Load configuration (in production, these would come from secure environment)
      await this.loadConfiguration();
      
      // Initialize Google Tag Manager (primary tracking)
      if (this.config.gtmId) {
        this.initializeGTM();
      }

      // Initialize GA4 (fallback or additional tracking)
      if (this.config.ga4Id) {
        this.initializeGA4();
      }

      // Initialize Google Ads
      if (this.config.googleAdsId) {
        this.initializeGoogleAds();
      }

      // Initialize Meta Pixel
      if (this.config.metaPixelId) {
        this.initializeMetaPixel();
      }

      // Set up data layer
      this.initializeDataLayer();

      this.isInitialized = true;
      this.log('Analytics service initialized');
    } catch (error) {
      console.error('Failed to initialize analytics:', error);
    }
  }

  // Load configuration from environment or secure storage
  private async loadConfiguration(): Promise<void> {
    // In production, these would come from Supabase secrets or environment variables
    this.config = {
      ...this.config,
      gtmId: 'GTM-MSDSS25G',
      ga4Id: 'G-D77N80KFFH',
      googleAdsId: 'AW-822238420',
      metaPixelId: '770659805912273'
    };
  }

  // Initialize Google Tag Manager
  private initializeGTM(): void {
    if (!this.config.gtmId) return;

    // GTM script injection
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${this.config.gtmId}`;
    
    script.onload = () => {
      this.log('GTM loaded successfully');
    };

    // GTM data layer initialization
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    });

    document.head.appendChild(script);
  }

  // Initialize GA4 (as fallback or additional tracking)
  private initializeGA4(): void {
    if (!this.config.ga4Id) return;

    // GA4 script injection
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${this.config.ga4Id}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.gtag = window.gtag || function(...args: unknown[]) {
      (window.gtag!.q = window.gtag!.q || []).push(args);
    } as GtagFunction;
    (window.gtag as GtagFunction & { l: number }).l = +new Date();

    // Configure GA4
    window.gtag('config', this.config.ga4Id, {
      page_title: document.title,
      page_location: window.location.href,
      send_page_view: true,
      // Enhanced ecommerce enabled
      enhanced_ecommerce: true,
      // Custom parameters for luxury hospitality
      custom_map: {
        custom_1: 'booking_source',
        custom_2: 'guest_type',
        custom_3: 'suite_category'
      }
    });

    this.log('GA4 initialized');
  }

  // Initialize Google Ads conversion tracking
  private initializeGoogleAds(): void {
    if (!this.config.googleAdsId) return;

    // Google Ads conversion linker
    window.gtag = window.gtag || function(...args: unknown[]) {
      (window.gtag!.q = window.gtag!.q || []).push(args);
    } as GtagFunction;

    window.gtag('config', this.config.googleAdsId, {
      conversion_linker: true,
      enhanced_conversions: true
    });

    this.log('Google Ads tracking initialized');
  }

  // Initialize Meta Pixel
  private initializeMetaPixel(): void {
    if (!this.config.metaPixelId) return;

    // Meta Pixel implementation
    window.fbq = window.fbq || function(...args: unknown[]) {
      (window.fbq!.q = window.fbq!.q || []).push(args);
    } as FacebookPixelFunction;

    if (!window._fbq) window._fbq = window.fbq;
    window.fbq.push = window.fbq;
    window.fbq.loaded = true;
    window.fbq.version = '2.0';
    window.fbq.queue = [];

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.appendChild(script);

    window.fbq!('init', this.config.metaPixelId);
    window.fbq!('track', 'PageView');

    this.log('Meta Pixel initialized');
  }

  // Initialize data layer for GTM
  private initializeDataLayer(): void {
    window.dataLayer = window.dataLayer || [];
    
    // Push initial data
    this.pushToDataLayer({
      event: 'analytics_initialized',
      site_type: 'luxury_hospitality',
      property_name: 'The Browns',
      location: 'Dullstroom, Mpumalanga'
    });
  }

  // Set consent status (GDPR compliance)
  setConsent(granted: boolean): void {
    this.consentGranted = granted;

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: granted ? 'granted' : 'denied',
        ad_storage: granted ? 'granted' : 'denied',
        ad_user_data: granted ? 'granted' : 'denied',
        ad_personalization: granted ? 'granted' : 'denied'
      });
    }

    // Update Meta Pixel consent
    if (window.fbq && granted) {
      window.fbq('consent', 'grant');
    } else if (window.fbq) {
      window.fbq('consent', 'revoke');
    }

    this.log(`Consent ${granted ? 'granted' : 'revoked'}`);
  }

  // Track page views
  trackPageView(path: string, title?: string): void {
    if (!this.isInitialized || !this.consentGranted) return;

    const data = {
      page_path: path,
      page_title: title || document.title,
      page_location: typeof window !== 'undefined' ? window.location.href : ''
    };

    // GTM
    this.pushToDataLayer({
      event: 'page_view',
      ...data
    });

    // GA4
    if (window.gtag) {
      window.gtag('event', 'page_view', data);
    }

    // Meta Pixel
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }

    this.log('Page view tracked', data);
  }

  // Track custom events
  trackEvent(eventName: string, data: CustomEventData = {}): void {
    if (!this.isInitialized || !this.consentGranted) return;

    const eventData = {
      event_category: data.event_category || 'engagement',
      event_label: data.event_label,
      value: data.value,
      ...data.custom_parameters
    };

    // GTM
    this.pushToDataLayer({
      event: eventName,
      ...eventData
    });

    // GA4
    if (window.gtag) {
      window.gtag('event', eventName, eventData);
    }

    this.log('Event tracked', { eventName, ...eventData });
  }

  // Track ecommerce purchase
  trackPurchase(conversionData: ConversionData): void {
    if (!this.isInitialized || !this.consentGranted) return;

    const purchaseData = {
      transaction_id: conversionData.transaction_id,
      value: conversionData.value,
      currency: conversionData.currency,
      items: conversionData.items,
      booking_source: conversionData.booking_source,
      payment_method: conversionData.payment_method,
      guest_type: conversionData.guest_type
    };

    // GTM Enhanced Ecommerce
    this.pushToDataLayer({
      event: 'purchase',
      ecommerce: {
        transaction_id: purchaseData.transaction_id,
        value: purchaseData.value,
        currency: purchaseData.currency,
        items: purchaseData.items
      },
      ...purchaseData
    });

    // GA4 Enhanced Ecommerce
    if (window.gtag) {
      window.gtag('event', 'purchase', {
        transaction_id: purchaseData.transaction_id,
        value: purchaseData.value,
        currency: purchaseData.currency,
        items: purchaseData.items
      });
    }

    // Google Ads Conversion
    if (window.gtag && this.config.googleAdsId) {
      window.gtag('event', 'conversion', {
        send_to: `${this.config.googleAdsId}/booking-conversion`,
        value: purchaseData.value,
        currency: purchaseData.currency,
        transaction_id: purchaseData.transaction_id
      });
    }

    // Meta Pixel Purchase
    if (window.fbq) {
      window.fbq('track', 'Purchase', {
        value: purchaseData.value,
        currency: purchaseData.currency,
        content_ids: purchaseData.items.map(item => item.item_id),
        content_type: 'product'
      });
    }

    this.log('Purchase tracked', purchaseData);
  }

  // Track booking funnel steps
  trackFunnelStep(step: string, data: Record<string, unknown> = {}): void {
    if (!this.isInitialized || !this.consentGranted) return;

    const stepData = {
      funnel_step: step,
      step_number: this.getFunnelStepNumber(step),
      ...data
    };

    this.trackEvent('funnel_step', {
      event_category: 'booking_funnel',
      event_label: step,
      custom_parameters: stepData
    });

    // Meta Pixel funnel events
    if (window.fbq) {
      const fbEventName = this.mapToFacebookEvent(step);
      if (fbEventName) {
        window.fbq('track', fbEventName, data);
      }
    }
  }

  // Helper: Push data to GTM data layer
  private pushToDataLayer(data: DataLayerItem): void {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push(data);
    }
  }

  // Helper: Get funnel step number for analytics
  private getFunnelStepNumber(step: string): number {
    const stepMap: Record<string, number> = {
      'suite_view': 1,
      'date_selection': 2,
      'guest_details': 3,
      'payment_info': 4,
      'booking_confirmation': 5
    };
    return stepMap[step] || 0;
  }

  // Helper: Map internal events to Facebook events
  private mapToFacebookEvent(step: string): string | null {
    const eventMap: Record<string, string> = {
      'suite_view': 'ViewContent',
      'date_selection': 'InitiateCheckout',
      'guest_details': 'AddPaymentInfo',
      'booking_confirmation': 'Purchase'
    };
    return eventMap[step] || null;
  }

  // Debug logging
  private log(message: string, data?: unknown): void {
    if (this.config.debugMode && process.env.NODE_ENV === 'development') {
      console.log(`[Analytics] ${message}`, data || '');
    }
  }

  // Get current configuration (for debugging)
  getConfig(): AnalyticsConfig {
    return { ...this.config };
  }

  // Check if service is properly initialized
  isReady(): boolean {
    return this.isInitialized && this.consentGranted;
  }
}

// Export singleton instance
export const analyticsService = new AnalyticsService();