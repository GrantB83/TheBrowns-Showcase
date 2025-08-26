import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Users, Bed, ChevronDown, ChevronUp } from "lucide-react";
import { DirectBookingTracker } from "./direct-booking-benefits-popup";

interface SuiteCardProps {
  title: string;
  description: string;
  capacity: string;
  bedConfig: string;
  image: string | React.ReactNode;
  mainAmenities: Array<{ text: string; emoji: string }>;
  additionalAmenities: string[];
  
  className?: string;
}

export function SuiteCard({
  title,
  description,
  capacity,
  bedConfig,
  image,
  mainAmenities,
  additionalAmenities,
  
  className
}: SuiteCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const tracker = DirectBookingTracker.getInstance();

  // Track suite view when component mounts or when expanded
  useEffect(() => {
    tracker.addViewedSuite(title);
  }, [title, tracker]);

  const handleBookingClick = () => {
    tracker.trackEvent('suite_booking_clicked', {
      suite_name: title,
      source: 'suite_card'
    });
  };

  return (
    <Card className={`${className} hover:shadow-lg transition-all duration-300 overflow-hidden`}>
      <div className="relative">
        {typeof image === 'string' ? (
          <img
            src={image}
            alt={`${title} interior at The Browns luxury accommodation in Dullstroom`}
            className="w-full h-48 xs:h-52 sm:h-56 md:h-60 lg:h-64 object-cover"
            loading="lazy"
          />
        ) : (
          image
        )}
      </div>
      
      <CardHeader className="p-4 sm:p-5 lg:p-6 pb-3 sm:pb-4">
        <CardTitle className="flex flex-col xs:flex-row xs:items-start xs:justify-between gap-2 mb-2">
          <span className="text-lg sm:text-xl lg:text-2xl font-semibold leading-tight">{title}</span>
          <Badge variant="secondary" className="flex items-center text-xs sm:text-sm w-fit px-2 py-1 shrink-0">
            <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
            {capacity}
          </Badge>
        </CardTitle>
        <CardDescription className="text-sm sm:text-base leading-relaxed text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4 p-4 sm:p-5 lg:p-6 pt-0">
        <div className="flex items-center text-sm sm:text-base text-muted-foreground">
          <Bed className="h-4 w-4 sm:h-5 sm:w-5 mr-2 shrink-0" />
          <span className="font-medium">{bedConfig}</span>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-sm sm:text-base">Key Amenities</h4>
          
          {/* Main amenities optimized for mobile */}
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3">
            {mainAmenities.map((amenity, index) => (
              <div key={index} className="flex items-center text-sm sm:text-base gap-2">
                <span className="text-lg sm:text-xl shrink-0" role="img" aria-label={amenity.text}>
                  {amenity.emoji}
                </span>
                <span className="leading-snug flex-1">{amenity.text}</span>
              </div>
            ))}
          </div>

          {/* Enhanced collapsible section */}
          {additionalAmenities.length > 0 && (
            <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
              <CollapsibleTrigger className="flex items-center justify-between w-full text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors min-h-[44px] py-2 touch-target">
                <span>View {additionalAmenities.length} more amenities</span>
                {isExpanded ? (
                  <ChevronUp className="h-4 w-4 ml-2 shrink-0" />
                ) : (
                  <ChevronDown className="h-4 w-4 ml-2 shrink-0" />
                )}
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2 animate-accordion-down">
                <div className="text-sm sm:text-base text-muted-foreground leading-relaxed bg-muted/30 p-3 rounded-md">
                  {additionalAmenities.join(" • ")}.
                </div>
              </CollapsibleContent>
            </Collapsible>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 sm:p-5 lg:p-6 pt-0">
        <Button asChild className="w-full min-h-[48px] sm:min-h-[52px] text-sm sm:text-base font-medium touch-target">
          <a 
                              href="https://book.nightsbridge.com/00000?promocode=PUBLICDEMO" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label={`Book ${title} suite now`}
            onClick={handleBookingClick}
          >
            Book Now
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}