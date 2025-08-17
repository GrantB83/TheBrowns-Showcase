import { useState } from "react";
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
  Shield
} from "lucide-react";
import { cn } from "@/lib/utils";

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

  const handleDirectBooking = (roomId?: number) => {
    const baseUrl = "https://book.nightsbridge.com/00000";
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

  const handleWhatsAppBooking = () => {
    const message = `Hi! I'd like to book at The Browns for ${checkIn || '[dates]'} to ${checkOut || '[dates]'} for ${guests} guests. ${selectedSuite ? `Interested in the ${selectedSuite}.` : ''} Can you help?`;
    const whatsappUrl = `https://wa.me/27000000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
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

  return (
    <div className={cn("space-y-6", className)}>

      {/* Quick Booking Form */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            Book Direct for Best Rates
          </CardTitle>
          <div className="bg-primary/10 rounded-lg p-3">
            <div className="flex items-center gap-2 text-primary font-medium text-sm">
              <Gift className="h-4 w-4" />
              Free welcome drink + WiFi included
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 mobile-landscape:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <Label htmlFor="checkin" className="text-fluid-sm">Check-in</Label>
              <Input
                id="checkin"
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="min-h-[44px] text-fluid-sm"
              />
            </div>
            <div>
              <Label htmlFor="checkout" className="text-fluid-sm">Check-out</Label>
              <Input
                id="checkout"
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                min={checkIn || new Date().toISOString().split('T')[0]}
                className="min-h-[44px] text-fluid-sm"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="guests" className="text-fluid-sm">Guests</Label>
            <Select value={guests} onValueChange={setGuests}>
              <SelectTrigger className="min-h-[44px] text-fluid-sm">
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

          <div className="grid grid-cols-1 mobile-landscape:grid-cols-2 gap-3 sm:gap-4">
            <Button 
              size="lg" 
              className="w-full min-h-[48px] text-fluid-sm touch-manipulation"
              onClick={() => handleDirectBooking()}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Book Direct Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full min-h-[48px] text-fluid-sm touch-manipulation"
              onClick={handleWhatsAppBooking}
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
              <Star className="h-3 w-3" />
              <span>4.9/5 Rating</span>
            </div>
          </div>
        </CardContent>
      </Card>

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
                  
                  
                  <div className="grid grid-cols-2 gap-2">
                    <Button 
                      size="sm" 
                      className="w-full"
                      onClick={() => handleDirectBooking(suite.roomId)}
                    >
                      Book {suite.name}
                    </Button>
                    <Button variant="outline" size="sm" className="w-full">
                      View Details
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

    </div>
  );
}