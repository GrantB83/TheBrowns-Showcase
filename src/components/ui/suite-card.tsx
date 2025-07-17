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
    <Card className={className}>
      <div className="relative">
        <img
          src={image}
          alt={`${title} interior at The Browns luxury accommodation in Dullstroom`}
          className="w-full h-64 object-cover rounded-t-lg"
        />
        {price && (
          <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
            {price}
          </Badge>
        )}
      </div>
      
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {title}
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="h-4 w-4 mr-1" />
            {capacity}
          </div>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center text-sm text-muted-foreground">
          <Bed className="h-4 w-4 mr-2" />
          <strong>{bedConfig}</strong>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-sm">Key Amenities</h4>
          
          {/* Main 6 amenities with emojis */}
          <div className="grid grid-cols-1 gap-2">
            {mainAmenities.map((amenity, index) => (
              <div key={index} className="flex items-center text-sm">
                <span className="text-lg mr-2" role="img" aria-label={amenity.text}>
                  {amenity.emoji}
                </span>
                <span>{amenity.text}</span>
              </div>
            ))}
          </div>

          {/* Collapsible additional amenities */}
          {additionalAmenities.length > 0 && (
            <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
              <CollapsibleTrigger className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
                <span>+{additionalAmenities.length} more amenities</span>
                {isExpanded ? (
                  <ChevronUp className="h-4 w-4 ml-1" />
                ) : (
                  <ChevronDown className="h-4 w-4 ml-1" />
                )}
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2 animate-accordion-down">
                <div className="text-sm text-muted-foreground leading-relaxed">
                  {additionalAmenities.join(", ")}.
                </div>
              </CollapsibleContent>
            </Collapsible>
          )}
        </div>
      </CardContent>

      <CardFooter>
        <Button asChild className="w-full">
          <a 
            href="https://book.nightsbridge.com/00000" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Book Now
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}