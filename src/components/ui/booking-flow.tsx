import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Calendar, 
  Users, 
  CreditCard, 
  CheckCircle, 
  Clock, 
  Shield, 
  Gift,
  Phone,
  MessageCircle,
  ExternalLink,
  Star,
  AlertCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

interface BookingFlowProps {
  currentStep?: number;
  totalSteps?: number;
  className?: string;
  urgencyMessage?: string;
  showTrustBadges?: boolean;
}

const steps = [
  {
    id: 1,
    title: "Select Dates",
    description: "Choose your arrival and departure",
    icon: Calendar,
    status: "active"
  },
  {
    id: 2,
    title: "Choose Suite",
    description: "Select your perfect accommodation",
    icon: Users,
    status: "pending"
  },
  {
    id: 3,
    title: "Guest Details",
    description: "Provide booking information",
    icon: CreditCard,
    status: "pending"
  },
  {
    id: 4,
    title: "Confirmation",
    description: "Secure your reservation",
    icon: CheckCircle,
    status: "pending"
  }
];

const trustElements = [
  {
    icon: Shield,
    text: "SSL Secured",
    description: "Your data is protected"
  },
  {
    icon: Star,
    text: "4.9/5 Rating",
    description: "200+ verified reviews"
  },
  {
    icon: Clock,
    text: "Instant Confirmation",
    description: "Immediate booking confirmation"
  },
  {
    icon: Gift,
    text: "Direct Benefits",
    description: "Exclusive perks included"
  }
];

export function BookingFlow({ 
  currentStep = 1, 
  totalSteps = 4, 
  className,
  urgencyMessage = "Highland luxury accommodation",
  showTrustBadges = true 
}: BookingFlowProps) {
  const [selectedDates, setSelectedDates] = useState<string>("");
  const [guestCount, setGuestCount] = useState(2);
  
  const progressPercentage = (currentStep / totalSteps) * 100;

  const handleDirectBooking = () => {
    window.open('https://book.nightsbridge.com/00000', '_blank', 'noopener,noreferrer');
    
    // Track booking start for analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'booking_start', {
        event_category: 'conversion',
        event_label: 'direct_booking_flow',
        value: currentStep
      });
    }
  };

  const handleWhatsAppInquiry = () => {
    const message = `Hi! I'm interested in booking a stay at The Browns. Can you help me with availability and rates?`;
    const whatsappUrl = `https://wa.me/27000000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Track WhatsApp inquiry
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_inquiry', {
        event_category: 'engagement',
        event_label: 'booking_support'
      });
    }
  };

  return (
    <div className={cn("space-y-6", className)}>
      {/* Urgency Banner */}
      {urgencyMessage && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center justify-center gap-2 text-red-700">
            <AlertCircle className="h-4 w-4" />
            <span className="font-medium text-sm">{urgencyMessage}</span>
          </div>
        </div>
      )}

      {/* Progress Indicator */}
      <Card>
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between mb-2">
            <CardTitle className="text-lg">Secure Direct Booking</CardTitle>
            <Badge variant="secondary">Step {currentStep} of {totalSteps}</Badge>
          </div>
          <Progress value={progressPercentage} className="w-full h-2" />
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 mobile-landscape:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {steps.map((step, index) => {
              const isActive = step.id === currentStep;
              const isCompleted = step.id < currentStep;
              const isPending = step.id > currentStep;
              
              return (
                <div
                  key={step.id}
                  className={cn(
                    "flex flex-col items-center text-center p-3 rounded-lg transition-colors",
                    isActive && "bg-primary/10 border border-primary/20",
                    isCompleted && "bg-green-50 border border-green-200",
                    isPending && "bg-muted/30"
                  )}
                >
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-colors",
                    isActive && "bg-primary text-primary-foreground",
                    isCompleted && "bg-green-500 text-white",
                    isPending && "bg-muted text-muted-foreground"
                  )}>
                    <step.icon className="h-5 w-5" />
                  </div>
                  <h4 className={cn(
                    "font-medium text-sm mb-1",
                    isActive && "text-primary",
                    isCompleted && "text-green-700",
                    isPending && "text-muted-foreground"
                  )}>
                    {step.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-tight">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Main CTA Section */}
      <Card className="border-primary/20">
        <CardHeader className="text-center">
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-center gap-2 text-primary font-semibold mb-2">
              <Gift className="h-5 w-5" />
              <span>Secure Direct Booking: Lowest Rates + Exclusives</span>
            </div>
            <p className="text-sm text-muted-foreground">
              ✓ Best Rate Guarantee ✓ Free Welcome Drink ✓ Complimentary WiFi ✓ Late Checkout
            </p>
          </div>
          <CardTitle className="text-xl mb-2">Ready to Book Your Highland Escape?</CardTitle>
          <p className="text-muted-foreground">
            Recommended for your dates and group size
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 mobile-landscape:grid-cols-2 gap-3 sm:gap-4">
            <Button 
              size="lg" 
              className="min-h-[48px] w-full text-fluid-sm touch-manipulation"
              onClick={handleDirectBooking}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Book Direct Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="min-h-[48px] w-full text-fluid-sm touch-manipulation"
              onClick={handleWhatsAppInquiry}
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp Us
            </Button>
          </div>
          
          <div className="text-center">
            <Button variant="ghost" size="sm" asChild>
              <a href="tel:+27000000000" className="text-primary hover:underline">
                <Phone className="h-4 w-4 mr-2" />
                Call Direct: +27 00 000 0000
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Trust Badges */}
      {showTrustBadges && (
        <Card>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 mobile-landscape:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {trustElements.map((element, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                    <element.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="font-medium text-sm text-foreground">{element.text}</div>
                  <div className="text-xs text-muted-foreground">{element.description}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Fallback Support */}
      <div className="bg-muted/30 rounded-lg p-4 text-center">
        <p className="text-sm text-muted-foreground mb-3">
          Need help with your booking? Our team is here to assist.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 justify-center">
          <Button variant="ghost" size="sm" onClick={handleWhatsAppInquiry}>
            <MessageCircle className="h-4 w-4 mr-2" />
            WhatsApp Support
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href="mailto:stay@thebrowns.co.za">
              Email: stay@thebrowns.co.za
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}