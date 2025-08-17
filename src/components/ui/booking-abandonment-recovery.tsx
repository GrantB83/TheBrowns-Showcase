import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  Heart, 
  Gift, 
  TrendingUp, 
  X, 
  Star,
  Phone,
  MessageCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

interface BookingSession {
  startTime: Date;
  checkIn?: string;
  checkOut?: string;
  guests?: string;
  roomId?: number;
  suiteName?: string;
  lastActivity: Date;
  abandoned: boolean;
}

interface BookingAbandonmentProps {
  onReEngage?: () => void;
  onDismiss?: () => void;
  className?: string;
}

// Simulated booking session tracking
class BookingSessionTracker {
  private static instance: BookingSessionTracker;
  private session: BookingSession | null = null;
  private abandonmentTimer: NodeJS.Timeout | null = null;
  private listeners: Array<(session: BookingSession | null) => void> = [];

  static getInstance() {
    if (!BookingSessionTracker.instance) {
      BookingSessionTracker.instance = new BookingSessionTracker();
    }
    return BookingSessionTracker.instance;
  }

  startSession(data: Partial<BookingSession>) {
    this.session = {
      startTime: new Date(),
      lastActivity: new Date(),
      abandoned: false,
      ...data
    };
    
    this.resetAbandonmentTimer();
    this.notifyListeners();
    
    // Track session start
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'booking_session_start', {
        event_category: 'engagement',
        event_label: 'booking_flow',
        value: 1
      });
    }
  }

  updateSession(data: Partial<BookingSession>) {
    if (!this.session) return;
    
    this.session = {
      ...this.session,
      ...data,
      lastActivity: new Date()
    };
    
    this.resetAbandonmentTimer();
    this.notifyListeners();
  }

  markAbandoned() {
    if (!this.session || this.session.abandoned) return;
    
    this.session.abandoned = true;
    this.notifyListeners();
    
    // Track abandonment
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'booking_abandonment', {
        event_category: 'conversion',
        event_label: 'timeout',
        value: this.getSessionDuration()
      });
    }
  }

  completeSession() {
    if (!this.session) return;
    
    const duration = this.getSessionDuration();
    
    // Track completion
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'booking_session_complete', {
        event_category: 'conversion',
        event_label: 'success',
        value: duration
      });
    }
    
    this.clearSession();
  }

  clearSession() {
    this.session = null;
    if (this.abandonmentTimer) {
      clearTimeout(this.abandonmentTimer);
      this.abandonmentTimer = null;
    }
    this.notifyListeners();
  }

  private resetAbandonmentTimer() {
    if (this.abandonmentTimer) {
      clearTimeout(this.abandonmentTimer);
    }
    
    // Mark as abandoned after 5 minutes of inactivity
    this.abandonmentTimer = setTimeout(() => {
      this.markAbandoned();
    }, 5 * 60 * 1000);
  }

  private getSessionDuration() {
    if (!this.session) return 0;
    return Math.floor((Date.now() - this.session.startTime.getTime()) / 1000);
  }

  getSession() {
    return this.session;
  }

  subscribe(listener: (session: BookingSession | null) => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notifyListeners() {
    this.listeners.forEach(listener => listener(this.session));
  }
}

export function BookingAbandonmentRecovery({ 
  onReEngage, 
  onDismiss, 
  className 
}: BookingAbandonmentProps) {
  const [session, setSession] = useState<BookingSession | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes

  const tracker = BookingSessionTracker.getInstance();

  useEffect(() => {
    const unsubscribe = tracker.subscribe((newSession) => {
      setSession(newSession);
      setIsVisible(newSession?.abandoned || false);
    });

    return unsubscribe;
  }, [tracker]);

  useEffect(() => {
    if (!isVisible || !session?.abandoned) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setIsVisible(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isVisible, session]);

  const handleReEngage = () => {
    onReEngage?.();
    setIsVisible(false);
    
    // Track re-engagement
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'booking_abandonment_recovery', {
        event_category: 'conversion',
        event_label: 'reengage',
        value: 1
      });
    }
  };

  const handleDismiss = () => {
    onDismiss?.();
    setIsVisible(false);
    tracker.clearSession();
  };

  const handleWhatsAppContact = () => {
    const message = session?.checkIn ? 
      `Hi! I was looking at booking for ${session.checkIn} to ${session.checkOut} for ${session.guests} guests${session.suiteName ? ` in the ${session.suiteName}` : ''}. Can you help me complete my booking?` :
      "Hi! I was looking at booking a room but had some questions. Can you help me?";
    
    const whatsappUrl = `https://wa.me/27000000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    handleReEngage();
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  if (!isVisible || !session) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <Card className={cn("border-orange-200 bg-orange-50 shadow-lg", className)}>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-orange-600" />
              <CardTitle className="text-lg text-orange-800">Don't Miss Out!</CardTitle>
            </div>
            <Button variant="ghost" size="sm" onClick={handleDismiss}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm text-orange-700">
              {session.suiteName ? 
                `Your ${session.suiteName} booking is waiting!` :
                "Your booking is waiting!"
              }
            </p>
            {session.checkIn && session.checkOut && (
              <div className="text-xs text-orange-600">
                <strong>Dates:</strong> {session.checkIn} to {session.checkOut}
                <br />
                <strong>Guests:</strong> {session.guests}
              </div>
            )}
          </div>

          <div className="bg-orange-100 rounded-lg p-3">
            <div className="flex items-center gap-2 text-orange-700 text-sm font-medium mb-2">
              <Gift className="h-4 w-4" />
              <span>Special Offer Expires Soon!</span>
            </div>
            <div className="text-xs text-orange-600">
              <Clock className="h-3 w-3 inline mr-1" />
              Time left: {formatTime(timeLeft)}
            </div>
          </div>

          <div className="space-y-2">
            <Button 
              className="w-full bg-orange-600 hover:bg-orange-700"
              onClick={handleReEngage}
            >
              <TrendingUp className="h-4 w-4 mr-2" />
              Complete Booking - Save 10%
            </Button>
            
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" size="sm" onClick={handleWhatsAppContact}>
                <MessageCircle className="h-3 w-3 mr-1" />
                WhatsApp
              </Button>
              <Button variant="outline" size="sm" onClick={() => window.open('tel:+27000000000', '_self')}>
                <Phone className="h-3 w-3 mr-1" />
                Call Now
              </Button>
            </div>
          </div>

          <div className="text-xs text-orange-600 text-center">
            Limited time offer • Best rate guarantee
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Export the tracker for use in other components
export { BookingSessionTracker };