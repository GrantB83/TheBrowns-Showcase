import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Users, Bed, ChevronDown, ChevronUp } from "lucide-react";

interface SuiteCardProps {
  title: string;
  description: string;
  capacity: string;
  bedConfig: string;
  image: string;
  mainAmenities: Array<{ text: string; emoji: string }>;
  additionalAmenities: string[];
  price?: string;
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
  price,
  className
}: SuiteCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className={`${className} hover:shadow-lg transition-shadow duration-300`}>
      <div className="relative">
        <img
          src={image}
          alt={`${title} interior at The Browns luxury accommodation in Dullstroom`}
          className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-t-lg"
          loading="lazy"
        />
        {price && (
          <Badge className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-primary text-primary-foreground text-xs sm:text-sm">
            {price}
          </Badge>
        )}
      </div>
      
      <CardHeader className="pb-3 sm:pb-4">
        <CardTitle className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <span className="text-fluid-xl font-semibold">{title}</span>
          <Badge variant="secondary" className="flex items-center text-xs sm:text-sm w-fit">
            <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
            {capacity}
          </Badge>
        </CardTitle>
        <CardDescription className="text-fluid-sm leading-relaxed">{description}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-3 sm:space-y-4 px-4 sm:px-6">
        <div className="flex items-center text-fluid-sm text-muted-foreground">
          <Bed className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
          <strong>{bedConfig}</strong>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-fluid-sm">Key Amenities</h4>
          
          {/* Main 6 amenities with emojis */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {mainAmenities.map((amenity, index) => (
              <div key={index} className="flex items-center text-fluid-sm">
                <span className="text-base sm:text-lg mr-2 flex-shrink-0" role="img" aria-label={amenity.text}>
                  {amenity.emoji}
                </span>
                <span className="leading-snug">{amenity.text}</span>
              </div>
            ))}
          </div>

          {/* Collapsible additional amenities */}
          {additionalAmenities.length > 0 && (
            <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
              <CollapsibleTrigger className="flex items-center text-fluid-sm text-muted-foreground hover:text-foreground transition-colors min-h-[44px]">
                <span>+{additionalAmenities.length} more amenities</span>
                {isExpanded ? (
                  <ChevronUp className="h-4 w-4 ml-1 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-4 w-4 ml-1 flex-shrink-0" />
                )}
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2 animate-accordion-down">
                <div className="text-fluid-sm text-muted-foreground leading-relaxed">
                  {additionalAmenities.join(", ")}.
                </div>
              </CollapsibleContent>
            </Collapsible>
          )}
        </div>
      </CardContent>

      <CardFooter className="px-4 sm:px-6">
        <Button asChild className="w-full min-h-[48px] text-fluid-base font-medium">
          <a 
            href="https://book.nightsbridge.com/00000" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label={`Book ${title} suite now`}
          >
            Book Now
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}