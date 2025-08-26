import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface AvailabilityCalendarProps {
  className?: string;
  suiteId?: string;
  onDateSelect?: (dates: { from: Date | undefined; to: Date | undefined }) => void;
  selectedDates?: { from: Date | undefined; to: Date | undefined };
}

export function AvailabilityCalendar({ 
  className, 
  suiteId = "garden-suite",
  onDateSelect,
  selectedDates 
}: AvailabilityCalendarProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleDateSelect = (range: { from: Date | undefined; to: Date | undefined } | undefined) => {
    if (range && onDateSelect) {
      onDateSelect(range);
    }
  };

  const handleBookNow = () => {
    // Redirect to Nightsbridge booking system
    const bookingUrl = `https://book.nightsbridge.com/00000?promocode=PUBLICDEMO&rtid=${getRoomId(suiteId)}`;
    window.open(bookingUrl, '_blank', 'noopener,noreferrer');
  };

  const getRoomId = (suiteId: string): number => {
    const roomMapping: Record<string, number> = {
      "master-suite": 6,
      "garden-suite": 4,
      "loft-family-suite": 5,
      "cove-suite": 3,
      "garden-family-suite": 14,
      "falcon-suite": 16,
      "blue-crane-suite": 17,
      "robin-suite": 15
    };
    return roomMapping[suiteId] || 4; // Default to Garden Suite
  };

  return (
    <div className={cn("space-y-4", className)}>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CalendarIcon className="h-5 w-5" />
            Check Availability & Book
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Select your dates to check real-time availability and pricing
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Calendar
              mode="range"
              selected={selectedDates}
              onSelect={handleDateSelect}
              numberOfMonths={2}
              className="rounded-md border"
              disabled={(date) => date < new Date()}
            />

            {selectedDates?.from && selectedDates?.to && (
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-primary">Your Selection</h4>
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
                    </div>
                    
                    <div className="border-t pt-3">
                      <Button 
                        onClick={handleBookNow}
                        className="w-full"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                            Checking Availability...
                          </>
                        ) : (
                          <>
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Check Availability & Book Now
                          </>
                        )}
                      </Button>
                      <div className="text-xs text-muted-foreground mt-2 text-center">
                        You'll be redirected to our secure booking system
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}