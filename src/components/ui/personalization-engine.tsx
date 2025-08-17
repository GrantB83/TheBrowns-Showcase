import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface PersonalizationEngineProps {
  className?: string;
  currentGuests?: number;
  selectedDates?: { from: Date | undefined; to: Date | undefined };
  onSuiteSelect?: (suiteId: string, roomId: number) => void;
}

const featuredSuites = [
  {
    id: "master-suite",
    name: "Master Suite",
    roomId: 6,
    price: 3500,
    features: ["Mountain View", "Fireplace", "Private Lounge"],
    image: "/images/suites/master-suite-01.jpg",
    description: "Our flagship luxury suite with panoramic mountain views"
  },
  {
    id: "garden-suite",
    name: "Garden Suite", 
    roomId: 4,
    price: 2800,
    features: ["Garden View", "Spa Bath", "Private Entrance"],
    image: "/images/suites/garden-suite-01.jpg",
    description: "Peaceful garden retreat with private entrance"
  },
  {
    id: "loft-family-suite",
    name: "Loft Family Suite",
    roomId: 5,
    price: 4200,
    features: ["Family Space", "Balcony", "Mountain View"],
    image: "/images/suites/loft-suite-01.jpg",
    description: "Spacious family accommodation with stunning views"
  }
];

export function PersonalizationEngine({ 
  className, 
  currentGuests = 2,
  selectedDates,
  onSuiteSelect 
}: PersonalizationEngineProps) {
  const handleSuiteSelect = (suiteId: string, roomId: number) => {
    onSuiteSelect?.(suiteId, roomId);
  };

  const handleBookNow = (roomId: number) => {
    const bookingUrl = `https://book.nightsbridge.com/00000?rtid=${roomId}`;
    window.open(bookingUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={cn("space-y-4", className)}>
      <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-primary" />
            Featured Suites
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Our most popular accommodation options
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          {featuredSuites.map((suite, index) => (
            <Card 
              key={suite.id} 
              className={cn(
                "cursor-pointer transition-all hover:shadow-md",
                index === 0 && "ring-2 ring-primary/20"
              )}
              onClick={() => handleSuiteSelect(suite.id, suite.roomId)}
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold">{suite.name}</h4>
                      {index === 0 && (
                        <Badge className="text-xs bg-yellow-100 text-yellow-700">
                          <Star className="h-3 w-3 mr-1" />
                          Most Popular
                        </Badge>
                      )}
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-2">
                      {suite.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {suite.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-right ml-4">
                    <div className="text-xl font-bold text-primary">
                      R{suite.price.toLocaleString()}
                    </div>
                    <div className="text-xs text-muted-foreground mb-2">per night</div>
                    <Button 
                      size="sm" 
                      variant={index === 0 ? "default" : "outline"}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBookNow(suite.roomId);
                      }}
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Book Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}