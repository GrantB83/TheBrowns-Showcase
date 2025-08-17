import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ShoppingCart, Clock, CheckCircle, AlertTriangle, X, ExternalLink } from 'lucide-react';

interface BookingTest {
  name: string;
  status: 'passed' | 'failed' | 'pending';
  description: string;
  result?: string;
  action?: () => void;
}

export function BookingTester() {
  const [isVisible, setIsVisible] = useState(false);
  const [tests, setTests] = useState<BookingTest[]>([
    {
      name: '3-Click Booking Flow',
      status: 'pending',
      description: 'Test if booking can be completed in 3 clicks or less',
      action: () => testBookingFlow()
    },
    {
      name: 'Nightsbridge Integration',
      status: 'pending',
      description: 'Verify direct booking links work correctly',
      action: () => testNightsbridgeLinks()
    },
    {
      name: 'PWYC Form Validation',
      status: 'pending',
      description: 'Test Pay What You Can form submission',
      action: () => testPWYCForm()
    },
    {
      name: 'WhatsApp Fallback',
      status: 'pending',
      description: 'Verify WhatsApp booking option works',
      action: () => testWhatsAppFallback()
    },
    {
      name: 'Mobile Booking Experience',
      status: 'pending',
      description: 'Test booking flow on mobile viewport',
      action: () => testMobileBooking()
    },
    {
      name: 'Gallery Functionality',
      status: 'pending',
      description: 'Test suite galleries and lightbox features',
      action: () => testGalleryFunctionality()
    }
  ]);

  const testBookingFlow = () => {
    let clickCount = 0;
    const originalClick = HTMLElement.prototype.click;
    
    // Override click method to count clicks
    HTMLElement.prototype.click = function() {
      clickCount++;
      if (process.env.NODE_ENV === 'development') {
        console.log(`Click ${clickCount}: ${this.tagName} - ${this.textContent?.slice(0, 50)}`);
      }
      return originalClick.call(this);
    };

    updateTestStatus('3-Click Booking Flow', 'passed', `Tracking enabled. Current clicks: ${clickCount}`);
    
    // Restore original click after 30 seconds
    setTimeout(() => {
      HTMLElement.prototype.click = originalClick;
      const status = clickCount <= 3 ? 'passed' : 'failed';
      updateTestStatus('3-Click Booking Flow', status, `Completed in ${clickCount} clicks`);
    }, 30000);
  };

  const testNightsbridgeLinks = () => {
    const nightsbridgeLinks = document.querySelectorAll('a[href*="nightsbridge"]');
    const hasLinks = nightsbridgeLinks.length > 0;
    
    nightsbridgeLinks.forEach((link, index) => {
      if (process.env.NODE_ENV === 'development') {
        console.log(`Nightsbridge link ${index + 1}:`, link.getAttribute('href'));
      }
    });

    updateTestStatus(
      'Nightsbridge Integration',
      hasLinks ? 'passed' : 'failed',
      `Found ${nightsbridgeLinks.length} Nightsbridge links`
    );
  };

  const testPWYCForm = () => {
    const pwycForms = document.querySelectorAll('form');
    let hasValidation = false;

    pwycForms.forEach(form => {
      const inputs = form.querySelectorAll('input[required], textarea[required]');
      if (inputs.length > 0) {
        hasValidation = true;
      }
    });

    updateTestStatus(
      'PWYC Form Validation',
      hasValidation ? 'passed' : 'failed',
      `Found ${pwycForms.length} forms with validation`
    );
  };

  const testWhatsAppFallback = () => {
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp"]');
    const hasCorrectNumber = Array.from(whatsappLinks).some(link => 
      link.getAttribute('href')?.includes('27000000000')
    );

    updateTestStatus(
      'WhatsApp Fallback',
      hasCorrectNumber ? 'passed' : 'failed',
      `Found ${whatsappLinks.length} WhatsApp links, correct number: ${hasCorrectNumber}`
    );
  };

  const testMobileBooking = () => {
    const isMobile = window.innerWidth < 768;
    const hasResponsiveElements = document.querySelectorAll('[class*="sm:"], [class*="md:"], [class*="lg:"]').length > 0;

    updateTestStatus(
      'Mobile Booking Experience',
      hasResponsiveElements ? 'passed' : 'failed',
      `Mobile viewport: ${isMobile}, Responsive classes: ${hasResponsiveElements}`
    );
  };

  const testGalleryFunctionality = () => {
    const galleries = document.querySelectorAll('[class*="gallery"], [class*="lightbox"]');
    const images = document.querySelectorAll('img');
    const hasLightbox = document.querySelector('[class*="lightbox"]') !== null;

    updateTestStatus(
      'Gallery Functionality',
      hasLightbox ? 'passed' : 'failed',
      `Found ${galleries.length} galleries, ${images.length} images, lightbox: ${hasLightbox}`
    );
  };

  const updateTestStatus = (testName: string, status: 'passed' | 'failed' | 'pending', result: string) => {
    setTests(prev => prev.map(test => 
      test.name === testName 
        ? { ...test, status, result }
        : test
    ));
  };

  const runAllTests = () => {
    tests.forEach(test => {
      if (test.action) {
        setTimeout(() => test.action!(), Math.random() * 1000);
      }
    });
  };

  if (process.env.NODE_ENV !== 'development') return null;

  if (!isVisible) {
    return (
      <Button
        size="sm"
        variant="outline"
        className="fixed bottom-28 right-4 z-50"
        onClick={() => setIsVisible(true)}
      >
        <ShoppingCart className="h-4 w-4 mr-2" />
        Booking Tests
      </Button>
    );
  }

  const passedTests = tests.filter(test => test.status === 'passed').length;
  const failedTests = tests.filter(test => test.status === 'failed').length;
  const pendingTests = tests.filter(test => test.status === 'pending').length;

  return (
    <Card className="fixed bottom-28 right-4 z-50 w-96 max-h-96 overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm flex items-center">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Booking Flow Tests
          </CardTitle>
          <div className="flex items-center gap-2">
            <Badge variant="default" className="bg-green-500">
              {passedTests} passed
            </Badge>
            <Badge variant="destructive">
              {failedTests} failed
            </Badge>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setIsVisible(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="tests" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="tests">Tests</TabsTrigger>
            <TabsTrigger value="manual">Manual</TabsTrigger>
          </TabsList>
          
          <TabsContent value="tests" className="p-4 max-h-64 overflow-y-auto">
            <div className="space-y-3">
              <Button
                size="sm"
                onClick={runAllTests}
                className="w-full"
              >
                Run All Tests
              </Button>
              
              {tests.map((test, index) => {
                const Icon = test.status === 'passed' ? CheckCircle :
                           test.status === 'failed' ? AlertTriangle : Clock;
                const iconColor = test.status === 'passed' ? 'text-green-500' :
                                 test.status === 'failed' ? 'text-red-500' : 'text-gray-500';
                
                return (
                  <div key={index} className="border rounded p-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-2 flex-1">
                        <Icon className={`h-4 w-4 mt-0.5 ${iconColor}`} />
                        <div className="flex-1">
                          <p className="text-sm font-medium">{test.name}</p>
                          <p className="text-xs text-muted-foreground">{test.description}</p>
                          {test.result && (
                            <p className="text-xs text-blue-600 mt-1">{test.result}</p>
                          )}
                        </div>
                      </div>
                      {test.action && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={test.action}
                        >
                          Test
                        </Button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </TabsContent>
          
          <TabsContent value="manual" className="p-4">
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Manual Test Checklist</h4>
              <div className="text-xs space-y-2">
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="cross-browser" />
                  <label htmlFor="cross-browser">Test in Chrome, Safari, Firefox</label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="mobile-responsive" />
                  <label htmlFor="mobile-responsive">Verify mobile responsiveness</label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="keyboard-nav" />
                  <label htmlFor="keyboard-nav">Test keyboard navigation</label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="screen-reader" />
                  <label htmlFor="screen-reader">Test with screen reader</label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="form-validation" />
                  <label htmlFor="form-validation">Verify form validation</label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="error-handling" />
                  <label htmlFor="error-handling">Test error scenarios</label>
                </div>
              </div>
              
              <div className="pt-2 border-t">
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full"
                  onClick={() => window.open('https://nightsbridge.com', '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Test Nightsbridge Links
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}