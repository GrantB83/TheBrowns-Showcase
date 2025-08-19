import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Calendar as CalendarIcon,
  Users, 
  CreditCard, 
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  MessageCircle,
  Clock,
  Star,
  Shield
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Suite {
  id: string;
  name: string;
  roomId: number;
  capacity: string;
  price: number;
  features: string[];
  image: string;
  available: boolean;
  urgencyMessage?: string;
}

interface BookingFlowProps {
  className?: string;
  onClose?: () => void;
  preselectedSuite?: string;
  preselectedDates?: { checkIn: Date; checkOut: Date };
}

const suites: Suite[] = [
  {
    id: "garden-suite",
    name: "Garden Suite",
    roomId: 4,
    capacity: "2 Adults",
    price: 2800,
    features: ["Queen XL Bed", "Garden Views", "Spa Bath", "Private Entrance"],
    image: "/images/suites/garden-suite-01.jpg",
    available: true,
    urgencyMessage: "Popular choice"
  },
  {
    id: "master-suite",
    name: "Master Suite",
    roomId: 6,
    capacity: "2 Adults + 2 Children",
    price: 3500,
    features: ["King XL Bed", "Private Lounge", "Mountain Views", "Fireplace"],
    image: "/images/suites/master-suite-01.jpg",
    available: true,
    urgencyMessage: "Premium suite"
  },
  {
    id: "loft-family-suite",
    name: "Loft Family Suite",
    roomId: 5,
    capacity: "4 Adults",
    price: 4200,
    features: ["2 Bedrooms", "Family Lounge", "Mountain Views", "Netflix"],
    image: "/images/suites/loft-suite-01.jpg",
    available: true
  }
];

export function UnifiedBookingFlow({ 
  className, 
  onClose,
  preselectedSuite,
  preselectedDates 
}: BookingFlowProps) {
  const [step, setStep] = useState(1);
  const [checkIn, setCheckIn] = useState<Date | undefined>(preselectedDates?.checkIn);
  const [checkOut, setCheckOut] = useState<Date | undefined>(preselectedDates?.checkOut);
  const [guests, setGuests] = useState("2");
  const [selectedSuite, setSelectedSuite] = useState(preselectedSuite || "");
  const [isLoading, setIsLoading] = useState(false);

  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;

  const filteredSuites = suites.filter(suite => {
    const guestCount = parseInt(guests);
    if (guestCount <= 2) return suite.capacity.includes("2 Adults");
    if (guestCount <= 4) return suite.capacity.includes("4 Adults") || suite.capacity.includes("2 Adults + 2 Children");
    return true;
  });

  const selectedSuiteData = suites.find(s => s.id === selectedSuite);

  const handleDateSelection = (dates: { from: Date | undefined; to: Date | undefined }) => {
    if (dates.from) setCheckIn(dates.from);
    if (dates.to) setCheckOut(dates.to);
  };

  const handleNextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleDirectBooking = () => {
    setIsLoading(true);
    const baseUrl = "https://book.nightsbridge.com/00000";
    const bookingUrl = selectedSuiteData?.roomId ? `${baseUrl}?rtid=${selectedSuiteData.roomId}` : baseUrl;
    
    // Track conversion
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'unified_booking_completion', {
        event_category: 'conversion',
        event_label: selectedSuite,
        value: selectedSuiteData?.price || 0
      });
    }
    
    window.open(bookingUrl, '_blank', 'noopener,noreferrer');
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleWhatsAppBooking = () => {
    const checkInStr = checkIn?.toLocaleDateString() || '[check-in date]';
    const checkOutStr = checkOut?.toLocaleDateString() || '[check-out date]';
    const message = `Hi! I'd like to book the ${selectedSuiteData?.name} at The Browns for ${checkInStr} to ${checkOutStr} for ${guests} guests. Can you help with the booking?`;
    const whatsappUrl = `https://wa.me/27000000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const isStepValid = (stepNum: number) => {
    switch (stepNum) {
      case 1: return checkIn && checkOut;
      case 2: return selectedSuite;
      case 3: return true;
      default: return false;
    }
  };

  const getStepTitle = (stepNum: number) => {
    switch (stepNum) {
      case 1: return "Select Dates & Guests";
      case 2: return "Choose Your Suite";
      case 3: return "Complete Booking";
      default: return "";
    }
  };

  return (
    <div className={cn("max-w-2xl mx-auto", className)}>
      <Card className="border-primary/20">
        <CardHeader className="px-3 sm:px-6 py-3 sm:py-6">
          <div className="flex items-center justify-between mb-2 sm:mb-4">
            <CardTitle className="text-lg sm:text-xl">Book Your Stay</CardTitle>
            {onClose && (
              <Button variant="ghost" size="sm" onClick={onClose} className="h-6 w-6 sm:h-8 sm:w-8 p-0">
                ×
              </Button>
            )}
          </div>
          
          {/* Progress Indicator */}
          <div className="space-y-1 sm:space-y-2">
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span>Step {step} of {totalSteps}</span>
              <span className="text-muted-foreground">{getStepTitle(step)}</span>
            </div>
            <Progress value={progress} className="h-1.5 sm:h-2" />
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span className={step >= 1 ? "text-primary" : ""}>Dates</span>
              <span className={step >= 2 ? "text-primary" : ""}>Suite</span>
              <span className={step >= 3 ? "text-primary" : ""}>Book</span>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-3 sm:space-y-6 px-3 sm:px-6">
          {/* Step 1: Date & Guest Selection */}
          {step === 1 && (
            <div className="space-y-3 sm:space-y-6">
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4">When would you like to stay?</h3>
                <div className="grid gap-2 sm:gap-4">
                  <Calendar
                    mode="range"
                    selected={{ from: checkIn, to: checkOut }}
                    onSelect={handleDateSelection}
                    disabled={(date) => date < new Date()}
                    numberOfMonths={1}
                    className="rounded-md border text-xs sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Number of Guests</h4>
                <Select value={guests} onValueChange={setGuests}>
                  <SelectTrigger className="w-full h-8 sm:h-10 text-sm">
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

              {checkIn && checkOut && (
                <div className="bg-primary/5 rounded-lg p-2 sm:p-4">
                  <div className="flex items-center gap-2 text-primary font-medium mb-1 sm:mb-2">
                    <CalendarIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="text-xs sm:text-sm">Your Stay Details</span>
                  </div>
                  <div className="text-xs sm:text-sm space-y-0.5 sm:space-y-1">
                    <p>Check-in: {checkIn.toLocaleDateString()}</p>
                    <p>Check-out: {checkOut.toLocaleDateString()}</p>
                    <p>Duration: {Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))} nights</p>
                    <p>Guests: {guests}</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 2: Suite Selection */}
          {step === 2 && (
            <div className="space-y-3 sm:space-y-6">
              <h3 className="text-base sm:text-lg font-semibold">Choose Your Perfect Suite</h3>
              
              <div className="space-y-2 sm:space-y-4">
                {filteredSuites.map((suite) => (
                  <div 
                    key={suite.id}
                    className={cn(
                      "border rounded-lg p-2 sm:p-4 cursor-pointer transition-all",
                      selectedSuite === suite.id 
                        ? "border-primary bg-primary/5" 
                        : "border-muted hover:border-primary/50"
                    )}
                    onClick={() => setSelectedSuite(suite.id)}
                  >
                    <div className="flex justify-between items-start mb-2 sm:mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-1 sm:gap-2 mb-1">
                          <h4 className="font-semibold text-sm sm:text-base">{suite.name}</h4>
                          {suite.urgencyMessage && (
                            <Badge variant="destructive" className="text-xs">
                              {suite.urgencyMessage}
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">
                          <Users className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span>{suite.capacity}</span>
                        </div>
                        <div className="flex flex-wrap gap-1 mb-2 sm:mb-3">
                          {suite.features.slice(0, 2).map((feature, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg sm:text-2xl font-bold text-primary">
                          R{suite.price.toLocaleString()}
                        </div>
                        <div className="text-xs text-muted-foreground">per night</div>
                      </div>
                    </div>
                    
                    {selectedSuite === suite.id && (
                      <div className="bg-green-50 border border-green-200 rounded p-1.5 sm:p-2 text-green-700 text-xs sm:text-sm">
                        ✓ Selected - Perfect for your group size
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Booking Confirmation */}
          {step === 3 && selectedSuiteData && (
            <div className="space-y-3 sm:space-y-6">
              <h3 className="text-base sm:text-lg font-semibold">Complete Your Booking</h3>
              
              {/* Booking Summary */}
              <div className="bg-primary/5 rounded-lg p-2 sm:p-4 space-y-2 sm:space-y-3">
                <h4 className="font-semibold text-primary text-sm sm:text-base">Booking Summary</h4>
                <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between">
                    <span>Suite:</span>
                    <span className="font-medium">{selectedSuiteData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Check-in:</span>
                    <span>{checkIn?.toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Check-out:</span>
                    <span>{checkOut?.toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Guests:</span>
                    <span>{guests}</span>
                  </div>
                  <div className="flex justify-between border-t pt-1 sm:pt-2 font-semibold">
                    <span>Total per night:</span>
                    <span className="text-primary">R{selectedSuiteData.price.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Direct Booking Benefits */}
              <div className="border rounded-lg p-2 sm:p-4">
                <h4 className="font-semibold mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                  <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500" />
                  Direct Booking Benefits
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 text-xs sm:text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-green-600" />
                    <span>Best Rate Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-green-600" />
                    <span>Welcome Drink</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-green-600" />
                    <span>Free WiFi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-green-600" />
                    <span>Flexible Cancellation</span>
                  </div>
                </div>
              </div>

              {/* Booking Options */}
              <div className="space-y-2 sm:space-y-3">
                <Button 
                  size="sm" 
                  className="w-full h-9 sm:h-11 text-sm sm:text-base" 
                  onClick={handleDirectBooking}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-2 animate-spin" />
                      Opening Booking System...
                    </>
                  ) : (
                    <>
                      <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                      Complete Booking Now
                    </>
                  )}
                </Button>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full h-9 sm:h-11 text-sm sm:text-base"
                  onClick={handleWhatsAppBooking}
                >
                  <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                  Book via WhatsApp
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center gap-2 sm:gap-4 text-xs text-muted-foreground pt-1 sm:pt-2 border-t">
                <div className="flex items-center gap-1">
                  <Shield className="h-3 w-3" />
                  <span className="hidden sm:inline">SSL Secured</span>
                  <span className="sm:hidden">SSL</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-3 w-3" />
                  <span className="hidden sm:inline">Instant Confirmation</span>
                  <span className="sm:hidden">Instant</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  <span className="hidden sm:inline">Guest Reviews</span>
                  <span className="sm:hidden">Reviews</span>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-2 sm:pt-4 border-t">
            <Button 
              variant="outline" 
              size="sm"
              onClick={handlePrevStep}
              disabled={step === 1}
              className="h-8 sm:h-10 text-xs sm:text-sm"
            >
              <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              Previous
            </Button>
            
            {step < totalSteps ? (
              <Button 
                size="sm"
                onClick={handleNextStep}
                disabled={!isStepValid(step)}
                className="h-8 sm:h-10 text-xs sm:text-sm"
              >
                Next
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1 sm:ml-2" />
              </Button>
            ) : null}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}