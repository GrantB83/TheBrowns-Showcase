import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Heart, 
  CreditCard, 
  RefreshCw, 
  MessageSquare, 
  X,
  Star,
  Phone,
  MessageCircle,
  Percent,
  CheckCircle,
  Clock
} from "lucide-react";
import { cn } from "@/lib/utils";

interface DirectBookingSession {
  startTime: Date;
  currentPage: string;
  viewedSuites: string[];
  checkIn?: string;
  checkOut?: string;
  guests?: string;
  roomId?: number;
  suiteName?: string;
  lastActivity: Date;
  dismissed?: boolean;
  dismissedUntil?: Date;
}

interface DirectBookingBenefitsProps {
  onBookingClick?: () => void;
  onDismiss?: () => void;
  className?: string;
}

// Enhanced session tracker for proactive engagement
class DirectBookingTracker {
  private static instance: DirectBookingTracker;
  private session: DirectBookingSession | null = null;
  private engagementTimer: NodeJS.Timeout | null = null;
  private listeners: Array<(session: DirectBookingSession | null) => void> = [];
  private storageKey = 'direct_booking_session';

  static getInstance() {
    if (!DirectBookingTracker.instance) {
      DirectBookingTracker.instance = new DirectBookingTracker();
    }
    return DirectBookingTracker.instance;
  }

  startSession(page: string = window.location.pathname) {
    // Check if dismissed recently (24 hours)
    const saved = this.getSavedSession();
    if (saved?.dismissedUntil && new Date() < new Date(saved.dismissedUntil)) {
      return;
    }

    this.session = {
      startTime: new Date(),
      currentPage: page,
      viewedSuites: [],
      lastActivity: new Date()
    };
    
    this.saveSession();
    this.startEngagementTimer();
    this.notifyListeners();
    
    // Track proactive engagement start
    this.trackEvent('direct_booking_popup_session_start', {
      page,
      timestamp: Date.now()
    });
  }

  updateSession(data: Partial<DirectBookingSession>) {
    if (!this.session) return;
    
    this.session = {
      ...this.session,
      ...data,
      lastActivity: new Date()
    };
    
    this.saveSession();
    this.notifyListeners();
  }

  addViewedSuite(suiteName: string) {
    if (!this.session) return;
    
    if (!this.session.viewedSuites.includes(suiteName)) {
      this.session.viewedSuites.push(suiteName);
      this.updateSession({ viewedSuites: this.session.viewedSuites });
    }
  }

  dismiss(duration: number = 24 * 60 * 60 * 1000) { // 24 hours default
    if (!this.session) return;
    
    const dismissedUntil = new Date(Date.now() + duration);
    this.session.dismissed = true;
    this.session.dismissedUntil = dismissedUntil;
    
    this.saveSession();
    this.clearEngagementTimer();
    this.notifyListeners();
    
    this.trackEvent('direct_booking_popup_dismissed', {
      duration_shown: this.getSessionDuration(),
      page: this.session.currentPage
    });
  }

  private startEngagementTimer() {
    if (this.engagementTimer) {
      clearTimeout(this.engagementTimer);
    }
    
    // Show popup after 45 seconds
    this.engagementTimer = setTimeout(() => {
      if (this.session && !this.session.dismissed) {
        this.trackEvent('direct_booking_popup_triggered', {
          trigger: 'timer_45s',
          page: this.session.currentPage,
          viewed_suites: this.session.viewedSuites.length
        });
        this.notifyListeners();
      }
    }, 45 * 1000);
  }

  private clearEngagementTimer() {
    if (this.engagementTimer) {
      clearTimeout(this.engagementTimer);
      this.engagementTimer = null;
    }
  }

  private getSessionDuration() {
    if (!this.session) return 0;
    return Math.floor((Date.now() - this.session.startTime.getTime()) / 1000);
  }

  private saveSession() {
    if (typeof window !== 'undefined' && this.session) {
      localStorage.setItem(this.storageKey, JSON.stringify(this.session));
    }
  }

  private getSavedSession(): DirectBookingSession | null {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          return {
            ...parsed,
            startTime: new Date(parsed.startTime),
            lastActivity: new Date(parsed.lastActivity),
            dismissedUntil: parsed.dismissedUntil ? new Date(parsed.dismissedUntil) : undefined
          };
        } catch (e) {
          localStorage.removeItem(this.storageKey);
        }
      }
    }
    return null;
  }

  trackEvent(eventName: string, data: any) {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, {
        event_category: 'direct_booking_benefits',
        ...data
      });
    }
  }

  getSession() {
    return this.session;
  }

  shouldShowPopup(): boolean {
    if (!this.session) return false;
    if (this.session.dismissed) return false;
    
    // Show if 45 seconds have passed
    const elapsed = Date.now() - this.session.startTime.getTime();
    return elapsed >= 45 * 1000;
  }

  subscribe(listener: (session: DirectBookingSession | null) => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notifyListeners() {
    this.listeners.forEach(listener => listener(this.session));
  }

  clearSession() {
    this.session = null;
    this.clearEngagementTimer();
    if (typeof window !== 'undefined') {
      localStorage.removeItem(this.storageKey);
    }
    this.notifyListeners();
  }
}

export function DirectBookingBenefitsPopup({ 
  onBookingClick, 
  onDismiss, 
  className 
}: DirectBookingBenefitsProps) {
  const [session, setSession] = useState<DirectBookingSession | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const tracker = DirectBookingTracker.getInstance();

  useEffect(() => {
    // Start session on mount
    tracker.startSession();
    
    const unsubscribe = tracker.subscribe((newSession) => {
      setSession(newSession);
      setIsVisible(newSession ? tracker.shouldShowPopup() : false);
    });

    return unsubscribe;
  }, [tracker]);

  const handleBookingClick = () => {
    onBookingClick?.();
    setIsVisible(false);
    
    tracker.trackEvent('direct_booking_popup_book_clicked', {
      conversion: true,
      page: session?.currentPage,
      viewed_suites: session?.viewedSuites?.length || 0
    });
  };

  const handleDismiss = () => {
    onDismiss?.();
    setIsVisible(false);
    tracker.dismiss();
  };

  const handleWhatsAppContact = () => {
    const contextMessage = session?.viewedSuites.length ? 
      `Hi! I'm interested in your ${session.viewedSuites.join(' and ')} suite${session.viewedSuites.length > 1 ? 's' : ''}${session.checkIn ? ` for ${session.checkIn} to ${session.checkOut}` : ''}. I'd like to book direct for the best rates!` :
      "Hi! I'm interested in booking directly with you to get the best rates and benefits. Can you help me?";
    
    const whatsappUrl = `https://wa.me/27000000000?text=${encodeURIComponent(contextMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    tracker.trackEvent('direct_booking_popup_whatsapp_clicked', {
      conversion: true,
      page: session?.currentPage,
      viewed_suites: session?.viewedSuites?.length || 0
    });
    
    handleBookingClick();
  };

  const benefits = [
    {
      icon: Percent,
      title: "5% Price Beat Guarantee",
      description: "Find a lower rate? We'll beat it by 5%"
    },
    {
      icon: CreditCard,
      title: "No Booking Fees",
      description: "Save money with zero hidden charges"
    },
    {
      icon: Shield,
      title: "Best Rate Promise",
      description: "Guaranteed lowest prices when you book direct"
    },
    {
      icon: RefreshCw,
      title: "Flexible Cancellation",
      description: "Free cancellation up to 48 hours before"
    },
    {
      icon: MessageSquare,
      title: "Direct Communication",
      description: "Speak directly with our hosts for personalized service"
    }
  ];

  if (!isVisible || !session) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm animate-fade-in animate-scale-in">
      <Card className={cn(
        "border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 shadow-xl backdrop-blur-sm", 
        "md:max-w-sm", // Desktop width
        "max-w-[calc(100vw-2rem)] w-full", // Mobile responsive
        className
      )}>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg text-primary">Book Direct & Save More</CardTitle>
            </div>
            <Button variant="ghost" size="sm" onClick={handleDismiss}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <Badge variant="secondary" className="w-fit">
            <Star className="h-3 w-3 mr-1" />
            Exclusive Direct Booking Benefits
          </Badge>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Skip the middleman and enjoy these exclusive benefits when you book directly with us:
          </p>

          <div className="space-y-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-0.5">
                  <benefit.icon className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-foreground">{benefit.title}</div>
                  <div className="text-xs text-muted-foreground">{benefit.description}</div>
                </div>
              </div>
            ))}
          </div>

          {session.viewedSuites.length > 0 && (
            <div className="bg-accent/20 rounded-lg p-3 border border-accent/30">
              <div className="text-xs text-accent-foreground font-medium">
                <CheckCircle className="h-3 w-3 inline mr-1" />
                You've viewed: {session.viewedSuites.join(', ')}
              </div>
            </div>
          )}

          <div className="space-y-2 pt-2">
            <Button 
              className="w-full bg-green-600 hover:bg-green-700 text-white hidden md:block"
              onClick={handleWhatsAppContact}
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Book via WhatsApp - Best Rates
            </Button>
            
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" size="sm" onClick={handleBookingClick}>
                <Shield className="h-3 w-3 mr-1" />
                Book Online
              </Button>
              <Button variant="outline" size="sm" onClick={() => window.open('tel:+27000000000', '_self')}>
                <Phone className="h-3 w-3 mr-1" />
                Call Direct
              </Button>
            </div>
          </div>

          <div className="text-xs text-muted-foreground text-center border-t pt-3">
            <Clock className="h-3 w-3 inline mr-1" />
            These benefits are only available when booking direct
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Export the tracker for use in other components
export { DirectBookingTracker };