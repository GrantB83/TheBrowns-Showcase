// Google Ads Conversion Tracking Utility
interface GtagFunction {
  (...args: unknown[]): void;
  q?: unknown[];
  l?: number;
}

declare global {
  interface Window {
    gtag?: GtagFunction;
  }
}

export interface ConversionEvent {
  send_to: string;
  transaction_id?: string;
  value?: number;
  currency?: string;
  [key: string]: any;
}

/**
 * Track Google Ads conversion event
 * @param eventName - The name of the conversion event
 * @param parameters - Conversion parameters
 */
export function trackConversion(eventName: string, parameters: ConversionEvent): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
}

/**
 * Track Nightsbridge booking conversion
 * @param transactionId - Optional transaction ID
 * @param value - Optional conversion value
 * @param currency - Optional currency (default: 'ZAR')
 */
export function trackNightsbridgeBooking(
  transactionId?: string,
  value?: number,
  currency: string = 'ZAR'
): void {
  const parameters: ConversionEvent = {
    send_to: 'AW-822238420/vWyHCIT80YobENS5iYgD',
    transaction_id: transactionId || '',
    value: value,
    currency: currency
  };

  trackConversion('conversion', parameters);
}

/**
 * Track booking widget interaction
 * @param source - Where the booking was initiated from
 * @param checkIn - Check-in date
 * @param checkOut - Check-out date
 * @param guests - Number of guests
 */
export function trackBookingWidgetInteraction(
  source: string,
  checkIn?: string,
  checkOut?: string,
  guests?: string
): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'booking_widget_interaction', {
      event_category: 'engagement',
      event_label: source,
      custom_parameters: {
        checkin_date: checkIn,
        checkout_date: checkOut,
        guest_count: guests
      }
    });
  }
}

/**
 * Track suite booking card click
 * @param suiteName - Name of the suite
 * @param source - Where the click originated from
 */
export function trackSuiteBookingClick(suiteName: string, source: string): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'suite_booking_click', {
      event_category: 'engagement',
      event_label: suiteName,
      custom_parameters: {
        suite_name: suiteName,
        source: source
      }
    });
  }
}

/**
 * Track WhatsApp booking interaction
 * @param source - Where the WhatsApp booking was initiated from
 */
export function trackWhatsAppBooking(source: string): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'whatsapp_booking', {
      event_category: 'engagement',
      event_label: source
    });
  }
}
