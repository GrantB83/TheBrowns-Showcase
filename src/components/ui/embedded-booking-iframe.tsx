import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Loader2, ExternalLink, X, Maximize2, Minimize2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface EmbeddedBookingIframeProps {
  roomId?: number;
  checkIn?: string;
  checkOut?: string;
  guests?: string;
  suite?: string;
  className?: string;
  onClose?: () => void;
  fullscreen?: boolean;
}

export function EmbeddedBookingIframe({
  roomId,
  checkIn,
  checkOut,
  guests,
  suite,
  className,
  onClose,
  fullscreen = false
}: EmbeddedBookingIframeProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(fullscreen);

  const buildBookingUrl = () => {
    const baseUrl = "https://book.nightsbridge.com/00000";
    const urlParams = new URLSearchParams();
    
    if (roomId) urlParams.append('rtid', roomId.toString());
    if (checkIn) urlParams.append('checkin', checkIn);
    if (checkOut) urlParams.append('checkout', checkOut);
    if (guests && guests !== "2") urlParams.append('guests', guests);
    if (suite) urlParams.append('suite', suite);
    
    // Add iframe-specific parameters
    urlParams.append('embed', '1');
    urlParams.append('theme', 'minimal');
    
    return urlParams.toString() ? `${baseUrl}?${urlParams.toString()}` : baseUrl;
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const handleExternalBooking = () => {
    window.open(buildBookingUrl().replace('&embed=1&theme=minimal', ''), '_blank', 'noopener,noreferrer');
    
    // Track fallback to external booking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'booking_external_fallback', {
        event_category: 'conversion',
        event_label: 'iframe_error',
        value: 1
      });
    }
  };

  useEffect(() => {
    // Track embedded booking widget load
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'embedded_booking_load', {
        event_category: 'engagement',
        event_label: 'iframe_widget',
        value: 1
      });
    }
  }, []);

  if (hasError) {
    return (
      <Card className={cn("border-destructive/20", className)}>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg text-destructive">Booking System Unavailable</CardTitle>
            {onClose && (
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            We're experiencing technical difficulties with our booking system. 
            You can still make your reservation using the external booking link.
          </p>
          <div className="flex gap-2">
            <Button onClick={handleExternalBooking} className="flex-1">
              <ExternalLink className="h-4 w-4 mr-2" />
              Open Booking Page
            </Button>
            <Button variant="outline" onClick={() => setHasError(false)}>
              Try Again
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={cn(
      "border-primary/20 overflow-hidden",
      isFullscreen && "fixed inset-4 z-50 shadow-2xl",
      className
    )}>
      <CardHeader className="pb-1 sm:pb-2 px-3 sm:px-6 py-2 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 sm:gap-2">
            <CardTitle className="text-sm sm:text-lg">Secure Booking</CardTitle>
            <Badge className="bg-green-100 text-green-700 text-xs hidden sm:inline-flex">
              SSL Protected
            </Badge>
          </div>
          <div className="flex items-center gap-1">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="h-6 w-6 sm:h-8 sm:w-8 p-0"
            >
              {isFullscreen ? 
                <Minimize2 className="h-3 w-3 sm:h-4 sm:w-4" /> : 
                <Maximize2 className="h-3 w-3 sm:h-4 sm:w-4" />
              }
            </Button>
            {onClose && (
              <Button variant="ghost" size="sm" onClick={onClose} className="h-6 w-6 sm:h-8 sm:w-8 p-0">
                <X className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0 relative">
        {isLoading && (
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-10 flex items-center justify-center">
            <div className="text-center space-y-2">
              <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
              <p className="text-sm text-muted-foreground">Loading booking system...</p>
            </div>
          </div>
        )}
        
        <iframe
          src={buildBookingUrl()}
          className={cn(
            "w-full border-0 bg-white",
            isFullscreen ? "h-[calc(100vh-6rem)] sm:h-[calc(100vh-8rem)]" : "h-[400px] sm:h-[500px] md:h-[600px]"
          )}
          onLoad={handleIframeLoad}
          onError={handleIframeError}
          title="Secure Booking System"
          allow="payment; geolocation"
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-top-navigation"
        />
        
        {/* Fallback overlay for mobile */}
        <div className="md:hidden absolute top-2 right-2 z-20">
          <Button 
            variant="secondary" 
            size="sm" 
            onClick={handleExternalBooking}
            className="text-xs"
          >
            <ExternalLink className="h-3 w-3 mr-1" />
            Open Full Page
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}