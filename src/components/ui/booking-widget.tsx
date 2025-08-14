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
  rate: string;
  originalRate?: string;
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
    features: ["King XL Bed", "Private Lounge", "Mountain Views", "Fireplace"],
    rate: "R3,200",
    originalRate: "R3,600",
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
    rate: "R2,500",
    originalRate: "R2,800",
    urgencyMessage: "Romantic garden suite",
    image: "/images/suites/garden-suite-01.jpg"
  },
  {
    id: "loft-family-suite",
    name: "Loft Family Suite",
    roomId: 5,
    capacity: "4 Adults",
    features: ["2 Bedrooms", "Family Lounge", "Mountain Views", "Netflix"],
    rate: "R2,800",
    urgencyMessage: "Family mountain views",
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
    const bookingUrl = roomId ? `${baseUrl}?rtid=${roomId}` : baseUrl;
    
    window.open(bookingUrl, '_blank', 'noopener,noreferrer');
    
    // Track conversion
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'booking_attempt', {
        event_category: 'conversion',
        event_label: selectedSuite || 'general_booking',
        value: roomId || 0
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
      {/* Urgency Banner */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-4">
        <div className="flex items-center justify-center gap-2 text-red-700 mb-2">
          <Clock className="h-4 w-4" />
          <span className="font-semibold text-sm">Popular Dates Fill Quickly - Book Early!</span>
        </div>
        <p className="text-center text-xs text-red-600">
          High demand period • Best rates when booking direct • Flexible cancellation policy
        </p>
      </div>

      {/* Quick Booking Form */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            Secure Direct Booking: Lowest Rates + Exclusives
          </CardTitle>
          <div className="bg-primary/10 rounded-lg p-3">
            <div className="flex items-center gap-2 text-primary font-medium text-sm mb-1">
              <Gift className="h-4 w-4" />
              Direct Bookers Get a Free Welcome Drink + WiFi
            </div>
            <p className="text-xs text-muted-foreground">
              We match any rate plus 5% • Instant confirmation • Flexible cancellation policy
            </p>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="checkin">Check-in</Label>
              <Input
                id="checkin"
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            <div>
              <Label htmlFor="checkout">Check-out</Label>
              <Input
                id="checkout"
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                min={checkIn || new Date().toISOString().split('T')[0]}
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="guests">Guests</Label>
            <Select value={guests} onValueChange={setGuests}>
              <SelectTrigger>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Button 
              size="lg" 
              className="w-full min-h-[48px]"
              onClick={() => handleDirectBooking()}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Book Direct Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full min-h-[48px]"
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
                    <div className="text-right">
                      <div className="font-bold text-lg text-primary">{suite.rate}/night</div>
                      {suite.originalRate && (
                        <div className="text-xs text-muted-foreground line-through">
                          {suite.originalRate}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {suite.urgencyMessage && (
                    <div className="bg-orange-50 border border-orange-200 rounded p-2 mb-3">
                      <div className="flex items-center gap-2 text-orange-700 text-xs">
                        <AlertCircle className="h-3 w-3" />
                        <span>{suite.urgencyMessage}</span>
                      </div>
                    </div>
                  )}
                  
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

      {/* Support Fallback */}
      <div className="bg-muted/30 rounded-lg p-4 text-center">
        <h4 className="font-medium text-sm mb-2">Need Help with Your Booking?</h4>
        <p className="text-xs text-muted-foreground mb-3">
          Our local team is available to assist with special requests and recommendations
        </p>
        <div className="flex flex-col sm:flex-row gap-2 justify-center">
          <Button variant="ghost" size="sm" onClick={handleWhatsAppBooking}>
            <MessageCircle className="h-4 w-4 mr-2" />
            WhatsApp: +27 00 000 0000
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href="mailto:info@thebrowns.co.za">
              Email Support
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}