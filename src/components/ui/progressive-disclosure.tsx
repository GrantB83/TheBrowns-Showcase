import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProgressiveDisclosureProps {
  children: React.ReactNode;
  preview: React.ReactNode;
  maxHeight?: string;
  showLabel?: string;
  hideLabel?: string;
  className?: string;
}

export function ProgressiveDisclosure({
  children,
  preview,
  maxHeight = "200px",
  showLabel = "Show More",
  hideLabel = "Show Less",
  className
}: ProgressiveDisclosureProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={cn("relative", className)}>
      <div 
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          !isExpanded && "relative"
        )}
        style={{ 
          maxHeight: isExpanded ? "none" : maxHeight 
        }}
      >
        {isExpanded ? children : preview}
        
        {!isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        )}
      </div>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-2 gap-1 text-sm hover:bg-muted/50"
      >
        {isExpanded ? hideLabel : showLabel}
        {isExpanded ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
}

interface AmenityDisclosureProps {
  mainAmenities: { text: string; emoji: string }[];
  additionalAmenities: string[];
  className?: string;
}

export function AmenityDisclosure({ mainAmenities, additionalAmenities, className }: AmenityDisclosureProps) {
  return (
    <ProgressiveDisclosure
      className={className}
      showLabel="View All Amenities"
      hideLabel="Show Key Features"
      preview={
        <div className="space-y-2">
          {mainAmenities.slice(0, 4).map((amenity, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <span className="text-lg">{amenity.emoji}</span>
              <span>{amenity.text}</span>
            </div>
          ))}
          {(mainAmenities.length > 4 || additionalAmenities.length > 0) && (
            <p className="text-xs text-muted-foreground">
              + {(mainAmenities.length - 4) + additionalAmenities.length} more amenities
            </p>
          )}
        </div>
      }
    >
      <div className="space-y-3">
        <div>
          <h4 className="font-medium mb-2 text-sm">Key Features</h4>
          <div className="space-y-2">
            {mainAmenities.map((amenity, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <span className="text-lg">{amenity.emoji}</span>
                <span>{amenity.text}</span>
              </div>
            ))}
          </div>
        </div>
        
        {additionalAmenities.length > 0 && (
          <div>
            <h4 className="font-medium mb-2 text-sm">Additional Amenities</h4>
            <div className="grid grid-cols-2 gap-1">
              {additionalAmenities.map((amenity, index) => (
                <div key={index} className="text-sm text-muted-foreground">
                  • {amenity}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </ProgressiveDisclosure>
  );
}

interface DescriptionDisclosureProps {
  description: string;
  maxLength?: number;
  className?: string;
}

export function DescriptionDisclosure({ description, maxLength = 150, className }: DescriptionDisclosureProps) {
  const isLong = description.length > maxLength;
  
  if (!isLong) {
    return <p className={cn("text-sm text-muted-foreground", className)}>{description}</p>;
  }

  const preview = description.slice(0, maxLength) + "...";
  
  return (
    <ProgressiveDisclosure
      className={className}
      showLabel="Read More"
      hideLabel="Read Less"
      maxHeight="60px"
      preview={
        <p className="text-sm text-muted-foreground">{preview}</p>
      }
    >
      <p className="text-sm text-muted-foreground">{description}</p>
    </ProgressiveDisclosure>
  );
}