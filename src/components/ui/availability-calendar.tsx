import { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Calendar as CalendarIcon,
  AlertCircle,
  CheckCircle,
  TrendingUp,
  TrendingDown
} from "lucide-react";
import { cn } from "@/lib/utils";

interface AvailabilityData {
  date: string;
  available: boolean;
  price: number;
  roomsLeft?: number;
  specialOffer?: string;
}

interface AvailabilityCalendarProps {
  className?: string;
  suiteId?: string;
  onDateSelect?: (dates: { from: Date | undefined; to: Date | undefined }) => void;
  selectedDates?: { from: Date | undefined; to: Date | undefined };
}

// Mock availability data - in real app, this would come from API
const generateMockAvailability = (): AvailabilityData[] => {
  const data: AvailabilityData[] = [];
  const today = new Date();
  
  for (let i = 0; i < 90; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    
    const dayOfWeek = date.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    const isHoliday = Math.random() < 0.1; // 10% chance of holiday
    
    // Simulate availability patterns
    const available = Math.random() > (isWeekend || isHoliday ? 0.3 : 0.1);
    const basePrice = isWeekend ? 3200 : 2800;
    const priceVariation = Math.random() * 400 - 200;
    const price = Math.round(basePrice + priceVariation);
    
    const roomsLeft = available ? Math.floor(Math.random() * 4) + 1 : 0;
    
    let specialOffer;
    if (available && Math.random() < 0.15) {
      specialOffer = "Early Bird 15% Off";
    }
    
    data.push({
      date: date.toISOString().split('T')[0],
      available,
      price,
      roomsLeft,
      specialOffer
    });
  }
  
  return data;
};

export function AvailabilityCalendar({ 
  className, 
  suiteId = "garden-suite",
  onDateSelect,
  selectedDates 
}: AvailabilityCalendarProps) {
  const [availabilityData, setAvailabilityData] = useState<AvailabilityData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredDate, setHoveredDate] = useState<Date | null>(null);

  useEffect(() => {
    // Simulate API call
    const loadAvailability = async () => {
      setIsLoading(true);
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 800));
      setAvailabilityData(generateMockAvailability());
      setIsLoading(false);
    };

    loadAvailability();
  }, [suiteId]);

  const getAvailabilityForDate = (date: Date): AvailabilityData | null => {
    const dateStr = date.toISOString().split('T')[0];
    return availabilityData.find(item => item.date === dateStr) || null;
  };

  const isDateUnavailable = (date: Date): boolean => {
    const availability = getAvailabilityForDate(date);
    return !availability?.available || date < new Date();
  };

  const getDayContent = (date: Date) => {
    const availability = getAvailabilityForDate(date);
    if (!availability) return null;

    const isUnavailable = !availability.available;
    const isLowInventory = availability.roomsLeft && availability.roomsLeft <= 2;

    return (
      <div className="relative w-full h-full">
        <span className={cn(
          "relative z-10",
          isUnavailable && "text-muted-foreground line-through"
        )}>
          {date.getDate()}
        </span>
        
        {/* Price indicator */}
        {availability.available && (
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 text-xs font-medium text-primary">
            R{Math.round(availability.price / 100)}
          </div>
        )}
        
        {/* Availability indicators */}
        {availability.available && (
          <>
            {isLowInventory && (
              <div className="absolute top-0 right-0 w-2 h-2 bg-orange-500 rounded-full"></div>
            )}
            {availability.specialOffer && (
              <div className="absolute top-0 left-0 w-2 h-2 bg-green-500 rounded-full"></div>
            )}
          </>
        )}
      </div>
    );
  };

  const handleDateSelect = (range: { from: Date | undefined; to: Date | undefined } | undefined) => {
    if (range && onDateSelect) {
      onDateSelect(range);
    }
  };

  const getDateTooltip = (date: Date) => {
    const availability = getAvailabilityForDate(date);
    if (!availability) return null;

    if (!availability.available) {
      return "Unavailable";
    }

    let tooltip = `R${availability.price.toLocaleString()} per night`;
    
    if (availability.roomsLeft && availability.roomsLeft <= 2) {
      tooltip += ` • Only ${availability.roomsLeft} room${availability.roomsLeft > 1 ? 's' : ''} left`;
    }
    
    if (availability.specialOffer) {
      tooltip += ` • ${availability.specialOffer}`;
    }
    
    return tooltip;
  };

  const getSelectedDateDetails = () => {
    if (!selectedDates?.from || !selectedDates?.to) return null;

    const checkInData = getAvailabilityForDate(selectedDates.from);
    const checkOutData = getAvailabilityForDate(selectedDates.to);
    
    if (!checkInData || !checkOutData) return null;

    const nights = Math.ceil((selectedDates.to.getTime() - selectedDates.from.getTime()) / (1000 * 60 * 60 * 24));
    const averagePrice = Math.round((checkInData.price + checkOutData.price) / 2);
    const totalPrice = averagePrice * nights;

    return {
      nights,
      averagePrice,
      totalPrice,
      hasSpecialOffer: checkInData.specialOffer || checkOutData.specialOffer
    };
  };

  const selectedDetails = getSelectedDateDetails();

  return (
    <div className={cn("space-y-4", className)}>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CalendarIcon className="h-5 w-5" />
            Live Availability & Pricing
          </CardTitle>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Special Offer</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span>Limited Availability</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-muted rounded-full"></div>
              <span>Unavailable</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <div className="text-center space-y-2">
                <div className="animate-spin h-6 w-6 border-2 border-primary border-t-transparent rounded-full mx-auto"></div>
                <p className="text-sm text-muted-foreground">Loading live availability...</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <Calendar
                mode="range"
                selected={selectedDates}
                onSelect={handleDateSelect}
                disabled={isDateUnavailable}
                numberOfMonths={2}
                className="rounded-md border"
                components={{
                  DayContent: ({ date }) => getDayContent(date)
                }}
                modifiers={{
                  lowInventory: (date) => {
                    const availability = getAvailabilityForDate(date);
                    return availability?.available && availability.roomsLeft && availability.roomsLeft <= 2;
                  },
                  specialOffer: (date) => {
                    const availability = getAvailabilityForDate(date);
                    return availability?.available && !!availability.specialOffer;
                  }
                }}
                modifiersStyles={{
                  lowInventory: { backgroundColor: 'rgba(249, 115, 22, 0.1)' },
                  specialOffer: { backgroundColor: 'rgba(34, 197, 94, 0.1)' }
                }}
              />

              {/* Hovered Date Info */}
              {hoveredDate && (
                <div className="bg-muted rounded-lg p-3 text-sm">
                  <div className="font-medium">{hoveredDate.toLocaleDateString()}</div>
                  <div className="text-muted-foreground">{getDateTooltip(hoveredDate)}</div>
                </div>
              )}

              {/* Selected Dates Summary */}
              {selectedDetails && (
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-primary">Your Selection</h4>
                        {selectedDetails.hasSpecialOffer && (
                          <Badge className="bg-green-100 text-green-700">
                            <TrendingDown className="h-3 w-3 mr-1" />
                            Special Offer Applied
                          </Badge>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="font-medium">Check-in</div>
                          <div className="text-muted-foreground">
                            {selectedDates?.from?.toLocaleDateString()}
                          </div>
                        </div>
                        <div>
                          <div className="font-medium">Check-out</div>
                          <div className="text-muted-foreground">
                            {selectedDates?.to?.toLocaleDateString()}
                          </div>
                        </div>
                        <div>
                          <div className="font-medium">Duration</div>
                          <div className="text-muted-foreground">
                            {selectedDetails.nights} night{selectedDetails.nights > 1 ? 's' : ''}
                          </div>
                        </div>
                        <div>
                          <div className="font-medium">Average Rate</div>
                          <div className="text-muted-foreground">
                            R{selectedDetails.averagePrice.toLocaleString()}/night
                          </div>
                        </div>
                      </div>
                      
                      <div className="border-t pt-3">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold">Estimated Total</span>
                          <span className="text-xl font-bold text-primary">
                            R{selectedDetails.totalPrice.toLocaleString()}
                          </span>
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          *Final price confirmed at booking
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}