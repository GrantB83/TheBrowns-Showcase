import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Calendar,
  ExternalLink,
  MessageCircle,
  CheckCircle,
  Star,
  Shield,
  Gift,
  TrendingUp,
  Users,
  CreditCard
} from "lucide-react";
import { cn } from "@/lib/utils";
import { EmbeddedBookingIframe } from "./embedded-booking-iframe";

interface HeroBookingWidgetProps {
  className?: string;
  compact?: boolean;
}

export function HeroBookingWidget({ className, compact = false }: HeroBookingWidgetProps) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [showEmbeddedBooking, setShowEmbeddedBooking] = useState(false);

  const handleDirectBooking = () => {
    const baseUrl = "https://book.nightsbridge.com/00000";
    const urlParams = new URLSearchParams();
    
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
    
    const bookingUrl = urlParams.toString() ? `${baseUrl}?${urlParams.toString()}` : baseUrl;
    
    window.open(bookingUrl, '_blank', 'noopener,noreferrer');
    
    // Track conversion with enhanced data
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'hero_booking_click', {
        event_category: 'conversion',
        event_label: 'hero_widget',
        value: 1,
        custom_parameters: {
          checkin_date: checkIn,
          checkout_date: checkOut,
          guest_count: guests
        }
      });
    }
  };

  const handleWhatsAppBooking = () => {
    const message = `Hi! I'd like to book at The Browns for ${checkIn || '[dates]'} to ${checkOut || '[dates]'} for ${guests} guests. Can you help with availability and rates?`;
    const whatsappUrl = `https://wa.me/27000000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Card className={cn(
      "bg-white/95 backdrop-blur-sm border-primary/20 shadow-lg max-w-lg mx-auto",
      compact && "max-w-md",
      className
    )}>
      <CardContent className="p-4 sm:p-6">
        {/* Trust Signals Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Badge className="bg-green-100 text-green-700 text-xs">
              <TrendingUp className="h-3 w-3 mr-1" />
              Best Rate Guarantee
            </Badge>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="font-medium">4.9/5</span>
          </div>
        </div>

        {/* Quick Booking Form */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="hero-checkin" className="text-xs font-medium text-muted-foreground">Check-in</Label>
              <Input
                id="hero-checkin"
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="min-h-[40px] text-sm"
              />
            </div>
            <div>
              <Label htmlFor="hero-checkout" className="text-xs font-medium text-muted-foreground">Check-out</Label>
              <Input
                id="hero-checkout"
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                min={checkIn || new Date().toISOString().split('T')[0]}
                className="min-h-[40px] text-sm"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="hero-guests" className="text-xs font-medium text-muted-foreground">Guests</Label>
            <Select value={guests} onValueChange={setGuests}>
              <SelectTrigger className="min-h-[40px] text-sm">
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

          {/* CTA Buttons */}
          <div className="space-y-2">
            <Button 
              size="lg" 
              className="w-full min-h-[48px] text-sm font-medium"
              onClick={() => setShowEmbeddedBooking(true)}
            >
              <CreditCard className="h-4 w-4 mr-2" />
              Book Securely Now
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full min-h-[40px] text-sm"
              onClick={handleWhatsAppBooking}
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp Booking
            </Button>
          </div>
          
          {/* Benefits Bar */}
          <div className="bg-primary/5 rounded-lg p-3">
            <div className="flex items-center gap-2 text-primary text-xs font-medium mb-2">
              <Gift className="h-3 w-3" />
              Direct Booking Benefits
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <CheckCircle className="h-3 w-3 text-green-600" />
                <span>Best Rate Guarantee</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-3 w-3 text-green-600" />
                <span>Welcome Drink</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-3 w-3 text-green-600" />
                <span>Free WiFi</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-3 w-3 text-green-600" />
                <span>Flexible Cancellation</span>
              </div>
            </div>
          </div>
          
          {/* Security indicators */}
          <div className="flex items-center justify-center gap-3 text-xs text-muted-foreground pt-2 border-t">
            <div className="flex items-center gap-1">
              <Shield className="h-3 w-3" />
              <span>Secure Booking</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="h-3 w-3" />
              <span>Instant Confirmation</span>
            </div>
          </div>
        </div>
      </CardContent>

      {/* Embedded Booking Modal */}
      {showEmbeddedBooking && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-4xl max-h-[90vh] overflow-hidden">
            <EmbeddedBookingIframe
              checkIn={checkIn}
              checkOut={checkOut}
              guests={guests}
              onClose={() => setShowEmbeddedBooking(false)}
              fullscreen={true}
            />
          </div>
        </div>
      )}
    </Card>
  );
}