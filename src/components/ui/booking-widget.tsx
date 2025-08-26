import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Users, 
  Calendar, 
  MapPin, 
  Clock, 
  Gift, 
  ExternalLink,
  MessageCircle,
  AlertCircle,
  CheckCircle,
  Star,
  Shield,
  CreditCard
} from "lucide-react";
import { cn } from "@/lib/utils";
import { EmbeddedBookingIframe } from "./embedded-booking-iframe";
import { RealTimeAvailability } from "./real-time-availability";
import { DirectBookingBenefitsPopup, DirectBookingTracker } from "./direct-booking-benefits-popup";
import { ABTestBookingButton, BookingButtonVariants } from "./ab-test-booking-button";
import { useConversionFunnel } from "./conversion-funnel-tracker";
import { EnhancedMobileGestureNav, MobileQuickActions } from "./enhanced-mobile-gesture-nav";

interface SuiteRecommendation {
  id: string;
  name: string;
  roomId: number;
  capacity: string;
  features: string[];
  urgencyMessage?: string;
  recommended?: boolean;
  image: string;
}

interface BookingWidgetProps {
  className?: string;
  preselectedSuite?: string;
  showRecommendations?: boolean;
}

const suiteRecommendations: SuiteRecommendation[] = [
  {
    id: "master-suite",
    name: "Master Suite",
    roomId: 6,
    capacity: "2 Adults + 2 Children",
    features: ["King XL Bed", "Private Lounge", "Zuikerboschkop Views", "Fireplace"],
    urgencyMessage: "Luxury flagship suite",
    recommended: true,
    image: "/images/suites/master-suite-01.jpg"
  },
  {
    id: "garden-suite",
    name: "Garden Suite",
    roomId: 4,
    capacity: "2 Adults",
    features: ["Queen XL Bed", "Garden Views", "Spa Bath", "Private Entrance"],
    urgencyMessage: "Romantic garden suite",
    image: "/images/suites/garden-suite-01.jpg"
  },
  {
    id: "loft-family-suite",
    name: "Loft Family Suite",
    roomId: 5,
    capacity: "4 Adults",
    features: ["2 Bedrooms", "Family Lounge", "Zuikerboschkop Views", "Netflix"],
    urgencyMessage: "Family suite with balcony views",
    image: "/images/suites/loft-suite-01.jpg"
  }
];

export function BookingWidget({ 
  className, 
  preselectedSuite,
  showRecommendations = true 
}: BookingWidgetProps) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [selectedSuite, setSelectedSuite] = useState(preselectedSuite || "");
  const [showWidget, setShowWidget] = useState(true);
  const [showEmbeddedBooking, setShowEmbeddedBooking] = useState(false);
  
  // Advanced features
  const { trackStep, startFunnel } = useConversionFunnel();
  const sessionTracker = DirectBookingTracker.getInstance();

  // Initialize tracking on component mount
  useEffect(() => {
    startFunnel();
    trackStep('page_view');
    sessionTracker.startSession();
  }, [startFunnel, trackStep]);

  // Track form interactions
  useEffect(() => {
    if (checkIn && checkOut) {
      trackStep('dates_selected', { checkIn, checkOut, guests });
      sessionTracker.updateSession({ checkIn, checkOut, guests });
    }
  }, [checkIn, checkOut, guests, trackStep]);

  const handleDirectBooking = (roomId?: number) => {
    const baseUrl = "https://book.nightsbridge.com/00000?promocode=PUBLICDEMO";
    const urlParams = new URLSearchParams();
    
    // Add room ID if specified
    if (roomId) {
      urlParams.append('rtid', roomId.toString());
    }
    
    // Add dates if selected
    if (checkIn) {
      urlParams.append('checkin', checkIn);
    }
    if (checkOut) {
      urlParams.append('checkout', checkOut);
    }
    
    // Add guest count
    if (guests && guests !== "2") {
      urlParams.append('guests', guests);
    }
    
    // Add suite preference if selected
    if (selectedSuite) {
      urlParams.append('suite', selectedSuite);
    }
    
    const bookingUrl = urlParams.toString() ? `${baseUrl}?${urlParams.toString()}` : baseUrl;
    
    window.open(bookingUrl, '_blank', 'noopener,noreferrer');
    
    // Track conversion with enhanced data
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'booking_attempt', {
        event_category: 'conversion',
        event_label: selectedSuite || 'general_booking',
        value: roomId || 0,
        custom_parameters: {
          checkin_date: checkIn,
          checkout_date: checkOut,
          guest_count: guests,
          room_id: roomId
        }
      });
    }
  };


  const getRecommendedSuite = () => {
    const guestCount = parseInt(guests);
    if (guestCount <= 2) {
      return suiteRecommendations.find(s => s.id === "garden-suite") || suiteRecommendations[1];
    } else if (guestCount <= 4) {
      return suiteRecommendations.find(s => s.id === "loft-family-suite") || suiteRecommendations[2];
    }
    return suiteRecommendations[0]; // Master suite for larger groups
  };

  const recommendedSuite = getRecommendedSuite();

  if (!showWidget) {
    return (
      <div className={cn("text-center", className)}>
        <Button onClick={() => setShowWidget(true)} variant="outline">
          Show Booking Options
        </Button>
      </div>
    );
  }

  const handleEmbeddedBooking = () => {
    trackStep('booking_widget_opened');
    sessionTracker.updateSession({ 
      checkIn, 
      checkOut, 
      guests,
      roomId: recommendedSuite?.roomId,
      suiteName: recommendedSuite?.name 
    });
    setShowEmbeddedBooking(true);
  };

  const handleWhatsAppContact = () => {
    trackStep('whatsapp_initiated');
    const message = `Hi! I'd like to book at The Browns for ${checkIn || '[dates]'} to ${checkOut || '[dates]'} for ${guests} guests. ${selectedSuite ? `Interested in the ${selectedSuite}.` : ''} Can you help?`;
    const whatsappUrl = `https://wa.me/27000000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <EnhancedMobileGestureNav
      onSwipeUp={() => setShowEmbeddedBooking(true)}
      onSwipeLeft={() => trackStep('gesture_navigation')}
      className={cn("space-y-6", className)}
    >

      {/* Quick Booking Form */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            <span className="text-base sm:text-lg lg:text-xl">
              <span className="block sm:hidden">
                Book Direct for Best Rates<br />
                5% Lower Guaranteed!
              </span>
              <span className="hidden sm:block">
                Book Direct for Best Rates - 5% Lower Guaranteed!
              </span>
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <Label htmlFor="checkin" className="text-sm font-medium">Check-in</Label>
              <Input
                id="checkin"
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="min-h-[44px] text-sm"
              />
            </div>
            <div>
              <Label htmlFor="checkout" className="text-sm font-medium">Check-out</Label>
              <Input
                id="checkout"
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                min={checkIn || new Date().toISOString().split('T')[0]}
                className="min-h-[44px] text-sm"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="guests" className="text-sm font-medium">Guests</Label>
            <Select value={guests} onValueChange={setGuests}>
              <SelectTrigger className="min-h-[44px] text-sm">
                <SelectValue placeholder="Select guests" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Guest</SelectItem>
                <SelectItem value="2">2 Guests</SelectItem>
                <SelectItem value="3">3 Guests</SelectItem>
                <SelectItem value="4">4 Guests</SelectItem>
                <SelectItem value="5">5+ Guests</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <ABTestBookingButton
              testName="main_booking_cta"
              variants={BookingButtonVariants.HERO_BOOKING}
              onButtonClick={(variantId) => {
                trackStep('form_started', { variant: variantId });
                handleEmbeddedBooking();
              }}
              className="min-h-[48px]"
            />
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full min-h-[48px] text-sm"
              onClick={handleWhatsAppContact}
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp Booking
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground pt-2 border-t">
            <div className="flex items-center gap-1">
              <Shield className="h-3 w-3" />
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="h-3 w-3" />
              <span>Instant Confirmation</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="h-3 w-3" />
              <span>Best Rate Guarantee</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Real-time Availability Check */}
      {checkIn && checkOut && (
        <RealTimeAvailability
          checkIn={checkIn}
          checkOut={checkOut}
          guests={guests}
          onBookNow={handleEmbeddedBooking}
          className="mt-4"
        />
      )}

      {/* Personalized Recommendations */}
      {showRecommendations && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">
              Recommended for Your Dates and Group Size
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Perfect for {guests} guest{guests !== "1" ? "s" : ""} based on your preferences
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {[recommendedSuite].map((suite) => (
                <div 
                  key={suite.id}
                  className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold">{suite.name}</h4>
                        {suite.recommended && (
                          <Badge className="text-xs bg-green-100 text-green-700">
                            Recommended
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Users className="h-4 w-4" />
                        <span>{suite.capacity}</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {suite.features.slice(0, 3).map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Real-time availability for recommended suite */}
                  <div className="mt-3">
                    <RealTimeAvailability
                      roomId={suite.roomId}
                      checkIn={checkIn}
                      checkOut={checkOut}
                      guests={guests}
                      onBookNow={() => setShowEmbeddedBooking(true)}
                      compact={true}
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <ABTestBookingButton
                      testName="suite_booking_cta"
                      variants={BookingButtonVariants.SUITE_BOOKING}
                      onButtonClick={(variantId) => {
                        trackStep('suite_booking_clicked', { 
                          suite: suite.name, 
                          variant: variantId 
                        });
                        handleEmbeddedBooking();
                      }}
                      className="text-xs"
                    />
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => handleDirectBooking(suite.roomId)}
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      External
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 text-center">
              <Button variant="ghost" size="sm">
                View All Suites & Rates
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Mobile Quick Actions */}
      <MobileQuickActions
        onBooking={handleEmbeddedBooking}
        onCall={() => window.open('tel:+27000000000', '_self')}
        onWhatsApp={handleWhatsAppContact}
      />

      {/* Direct Booking Benefits Popup */}
      <DirectBookingBenefitsPopup
        onBookingClick={handleEmbeddedBooking}
        onDismiss={() => trackStep('direct_booking_dismissed')}
      />

      {/* Embedded Booking Modal */}
      {showEmbeddedBooking && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-5xl max-h-[90vh] overflow-hidden">
            <EmbeddedBookingIframe
              roomId={recommendedSuite?.roomId}
              checkIn={checkIn}
              checkOut={checkOut}
              guests={guests}
              suite={selectedSuite}
              onClose={() => {
                setShowEmbeddedBooking(false);
                trackStep('booking_modal_closed');
              }}
              fullscreen={true}
            />
          </div>
        </div>
      )}

    </EnhancedMobileGestureNav>
  );
}