// Cookie Consent Component with Google Consent Mode v2 support
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Button } from './button';
import { Switch } from './switch';
import { Separator } from './separator';
import { analyticsService } from '@/lib/analytics-service';

interface ConsentPreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  personalization: boolean;
}

interface CookieConsentProps {
  onConsentChange?: (preferences: ConsentPreferences) => void;
}

export function CookieConsent({ onConsentChange }: CookieConsentProps) {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    necessary: true, // Always required
    analytics: false,
    marketing: false,
    personalization: false
  });

  useEffect(() => {
    // Check if consent has been given before
    const storedConsent = localStorage.getItem('cookie-consent');
    if (!storedConsent) {
      setShowBanner(true);
      // Initialize consent mode with denied state
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('consent', 'default', {
          analytics_storage: 'denied',
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied',
          functionality_storage: 'granted',
          security_storage: 'granted'
        });
      }
    } else {
      const savedPreferences = JSON.parse(storedConsent);
      setPreferences(savedPreferences);
      updateConsent(savedPreferences);
    }
  }, []);

  const updateConsent = (newPreferences: ConsentPreferences) => {
    // Update Google Consent Mode
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: newPreferences.analytics ? 'granted' : 'denied',
        ad_storage: newPreferences.marketing ? 'granted' : 'denied',
        ad_user_data: newPreferences.personalization ? 'granted' : 'denied',
        ad_personalization: newPreferences.personalization ? 'granted' : 'denied'
      });
    }

    // Update analytics service
    analyticsService.setConsent(newPreferences.analytics || newPreferences.marketing);

    // Update Meta Pixel consent
    if (typeof window !== 'undefined' && (window as any).fbq) {
      if (newPreferences.marketing) {
        (window as any).fbq('consent', 'grant');
      } else {
        (window as any).fbq('consent', 'revoke');
      }
    }

    // Store preferences
    localStorage.setItem('cookie-consent', JSON.stringify(newPreferences));
    
    // Notify parent component
    onConsentChange?.(newPreferences);
  };

  const handleAcceptAll = () => {
    const allAccepted: ConsentPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      personalization: true
    };
    setPreferences(allAccepted);
    updateConsent(allAccepted);
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const minimumConsent: ConsentPreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      personalization: false
    };
    setPreferences(minimumConsent);
    updateConsent(minimumConsent);
    setShowBanner(false);
  };

  const handleCustomize = () => {
    setShowPreferences(true);
  };

  const handleSavePreferences = () => {
    updateConsent(preferences);
    setShowBanner(false);
    setShowPreferences(false);
  };

  const updatePreference = (key: keyof ConsentPreferences, value: boolean) => {
    if (key === 'necessary') return; // Always required
    setPreferences(prev => ({ ...prev, [key]: value }));
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-end sm:items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md sm:max-w-lg bg-card border-border">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Cookie Preferences</CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {!showPreferences ? (
            <>
              <p className="text-sm text-muted-foreground">
                We use cookies to enhance your browsing experience, provide personalized content, 
                and analyze our traffic. Choose your preferences below.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-2">
                <Button onClick={handleAcceptAll} className="flex-1">
                  Accept All
                </Button>
                <Button onClick={handleRejectAll} variant="outline" className="flex-1">
                  Reject All
                </Button>
                <Button onClick={handleCustomize} variant="secondary" className="flex-1">
                  Customize
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Necessary Cookies</h4>
                    <p className="text-xs text-muted-foreground">
                      Required for basic site functionality
                    </p>
                  </div>
                  <Switch checked={true} disabled />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Analytics Cookies</h4>
                    <p className="text-xs text-muted-foreground">
                      Help us improve our website performance
                    </p>
                  </div>
                  <Switch 
                    checked={preferences.analytics}
                    onCheckedChange={(checked) => updatePreference('analytics', checked)}
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Marketing Cookies</h4>
                    <p className="text-xs text-muted-foreground">
                      Enable targeted advertising and remarketing
                    </p>
                  </div>
                  <Switch 
                    checked={preferences.marketing}
                    onCheckedChange={(checked) => updatePreference('marketing', checked)}
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Personalization</h4>
                    <p className="text-xs text-muted-foreground">
                      Customize content based on your preferences
                    </p>
                  </div>
                  <Switch 
                    checked={preferences.personalization}
                    onCheckedChange={(checked) => updatePreference('personalization', checked)}
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 pt-4">
                <Button onClick={handleSavePreferences} className="flex-1">
                  Save Preferences
                </Button>
                <Button 
                  onClick={() => setShowPreferences(false)} 
                  variant="outline" 
                  className="flex-1"
                >
                  Back
                </Button>
              </div>
            </>
          )}
          
          <p className="text-xs text-muted-foreground">
            For more information, please read our{' '}
            <a href="/privacy" className="underline hover:text-primary">
              Privacy Policy
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

// Hook for managing cookie consent state
export function useCookieConsent() {
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    personalization: false
  });

  useEffect(() => {
    const storedConsent = localStorage.getItem('cookie-consent');
    if (storedConsent) {
      setPreferences(JSON.parse(storedConsent));
    }
  }, []);

  const updateConsent = (newPreferences: ConsentPreferences) => {
    setPreferences(newPreferences);
    localStorage.setItem('cookie-consent', JSON.stringify(newPreferences));
  };

  const hasConsented = () => {
    return localStorage.getItem('cookie-consent') !== null;
  };

  const revokeConsent = () => {
    localStorage.removeItem('cookie-consent');
    const minimumConsent: ConsentPreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      personalization: false
    };
    setPreferences(minimumConsent);
    analyticsService.setConsent(false);
  };

  return {
    preferences,
    updateConsent,
    hasConsented,
    revokeConsent
  };
}

export type { ConsentPreferences };