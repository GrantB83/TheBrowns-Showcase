import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Wine, Clock, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface AugustWinePromotionProps {
  className?: string;
  variant?: "banner" | "badge" | "card";
  dismissible?: boolean;
  showCountdown?: boolean;
}

export function AugustWinePromotion({ 
  className, 
  variant = "banner", 
  dismissible = false,
  showCountdown = true 
}: AugustWinePromotionProps) {
  const [isDismissed, setIsDismissed] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    // Check if dismissed in localStorage
    if (dismissible && localStorage.getItem('august-wine-promotion-dismissed')) {
      setIsDismissed(true);
      return;
    }

    // Update countdown every minute
    const updateCountdown = () => {
      const now = new Date();
      const endDate = new Date('2025-08-31T23:59:59');
      
      // If promotion has ended, don't show
      if (now > endDate) {
        setIsDismissed(true);
        return;
      }

      const difference = endDate.getTime() - now.getTime();
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

      setTimeLeft({ days, hours, minutes });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [dismissible]);

  const handleDismiss = () => {
    setIsDismissed(true);
    if (dismissible) {
      localStorage.setItem('august-wine-promotion-dismissed', 'true');
    }

    // Track dismissal
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'august_wine_promotion_dismissed', {
        event_category: 'promotion',
        event_label: 'august_wine_2025'
      });
    }
  };

  const handleClick = () => {
    // Track promotion click
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'august_wine_promotion_clicked', {
        event_category: 'promotion',
        event_label: 'august_wine_2025',
        value: 1
      });
    }
  };

  // Don't render if dismissed or promotion has ended
  if (isDismissed) return null;

  // Badge variant for inline use
  if (variant === "badge") {
    return (
      <Badge 
        className={cn(
          "bg-red-100 text-red-700 border-red-200 hover:bg-red-200 transition-colors cursor-pointer",
          className
        )}
        onClick={handleClick}
      >
        <Wine className="h-3 w-3 mr-1" />
        August Special: Complimentary wine for 2+ nights
      </Badge>
    );
  }

  // Card variant for embedding in other components
  if (variant === "card") {
    return (
      <Card className={cn("border-red-200 bg-gradient-to-r from-red-50 to-rose-50", className)}>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Wine className="h-5 w-5 text-red-600" />
              <div>
                <p className="font-medium text-red-800 text-sm">
                  August Special Offer
                </p>
                <p className="text-xs text-red-600">
                  Book direct for 2+ nights and receive a complimentary bottle of premium red wine as our welcome gift
                </p>
              </div>
            </div>
            {dismissible && (
              <Button variant="ghost" size="sm" onClick={handleDismiss}>
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
          {showCountdown && timeLeft.days > 0 && (
            <div className="mt-2 flex items-center gap-1 text-xs text-red-600">
              <Clock className="h-3 w-3" />
              <span>{timeLeft.days} days left</span>
            </div>
          )}
        </CardContent>
      </Card>
    );
  }

  // Default banner variant
  return (
    <div className={cn(
      "bg-gradient-to-r from-red-600 to-rose-600 text-white py-3 px-4 relative",
      className
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 flex-1">
          <div className="flex items-center gap-2">
            <Wine className="h-5 w-5" />
            <Sparkles className="h-4 w-4 animate-pulse" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-sm sm:text-base">
              August Special Offer: Book direct for 2+ nights and receive a complimentary bottle of premium red wine as our welcome gift
            </p>
            {showCountdown && timeLeft.days > 0 && (
              <p className="text-red-100 text-xs mt-1">
                <Clock className="h-3 w-3 inline mr-1" />
                {timeLeft.days} days, {timeLeft.hours} hours remaining
              </p>
            )}
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button 
            variant="secondary" 
            size="sm" 
            onClick={handleClick}
            className="bg-white/20 text-white border-white/30 hover:bg-white/30 text-xs"
          >
            Book Now
          </Button>
          {dismissible && (
            <Button variant="ghost" size="sm" onClick={handleDismiss} className="text-white hover:bg-white/20">
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}