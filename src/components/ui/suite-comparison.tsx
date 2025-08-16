import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Users, 
  Bed, 
  ExternalLink, 
  ArrowUpDown,
  CheckCircle,
  X,
  Star,
  Mountain,
  Wifi,
  Coffee,
  Tv,
  Bath,
  Car,
  Flame
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Suite {
  id: string;
  name: string;
  roomId: number;
  capacity: string;
  bedConfig: string;
  features: string[];
  valueProposition: string;
  image: string;
  description: string;
  priceRange?: string;
  maxGuests: number;
}

interface SuiteComparisonProps {
  suites: Suite[];
  className?: string;
}

const getFeatureIcon = (feature: string) => {
  const featureLower = feature.toLowerCase();
  if (featureLower.includes('wifi')) return Wifi;
  if (featureLower.includes('netflix') || featureLower.includes('tv')) return Tv;
  if (featureLower.includes('coffee') || featureLower.includes('nespresso')) return Coffee;
  if (featureLower.includes('view')) return Mountain;
  if (featureLower.includes('bath')) return Bath;
  if (featureLower.includes('parking')) return Car;
  if (featureLower.includes('fireplace')) return Flame;
  if (featureLower.includes('bed')) return Bed;
  return CheckCircle;
};

export function SuiteComparison({ suites, className }: SuiteComparisonProps) {
  const [selectedSuites, setSelectedSuites] = useState<Suite[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSuiteSelection = (suite: Suite) => {
    setSelectedSuites(prev => {
      const isSelected = prev.find(s => s.id === suite.id);
      if (isSelected) {
        return prev.filter(s => s.id !== suite.id);
      } else if (prev.length < 3) {
        return [...prev, suite];
      }
      return prev;
    });
  };

  const handleBookNow = (roomId: number) => {
    const bookingUrl = `https://book.nightsbridge.com/00000?rtid=${roomId}`;
    window.open(bookingUrl, '_blank', 'noopener,noreferrer');
    
    // Track conversion
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'book_now_comparison', {
        event_category: 'Booking',
        event_label: `Room ${roomId}`,
        value: 1
      });
    }
  };

  const allFeatures = Array.from(
    new Set(selectedSuites.flatMap(suite => suite.features))
  );

  return (
    <div className={cn("", className)}>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" className="gap-2">
            <ArrowUpDown className="h-4 w-4" />
            Compare Suites
          </Button>
        </DialogTrigger>
        
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <ArrowUpDown className="h-5 w-5" />
              Compare Luxury Suites
            </DialogTitle>
          </DialogHeader>

          {/* Suite Selection */}
          <div className="mb-6">
            <p className="text-sm text-muted-foreground mb-4">
              Select up to 3 suites to compare (Currently selected: {selectedSuites.length}/3)
            </p>
            <div className="flex flex-wrap gap-2">
              {suites.map(suite => (
                <Button
                  key={suite.id}
                  variant={selectedSuites.find(s => s.id === suite.id) ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleSuiteSelection(suite)}
                  disabled={!selectedSuites.find(s => s.id === suite.id) && selectedSuites.length >= 3}
                  className="gap-2"
                >
                  {selectedSuites.find(s => s.id === suite.id) && (
                    <X className="h-3 w-3" />
                  )}
                  {suite.name}
                </Button>
              ))}
            </div>
          </div>

          {selectedSuites.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <ArrowUpDown className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Select suites above to start comparing</p>
            </div>
          )}

          {selectedSuites.length > 0 && (
            <div className="overflow-x-auto">
              <div className="grid gap-4" style={{ gridTemplateColumns: `200px repeat(${selectedSuites.length}, 1fr)` }}>
                
                {/* Headers */}
                <div className="font-semibold p-4"></div>
                {selectedSuites.map(suite => (
                  <Card key={suite.id} className="p-4">
                    <div className="aspect-video relative overflow-hidden rounded-lg mb-3">
                      <img
                        src={suite.image}
                        alt={suite.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop&crop=center';
                        }}
                      />
                      <Badge className="absolute top-2 right-2 text-xs">
                        {suite.valueProposition}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{suite.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{suite.description}</p>
                    <Button 
                      className="w-full gap-2"
                      onClick={() => handleBookNow(suite.roomId)}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Book Now
                    </Button>
                  </Card>
                ))}

                {/* Capacity */}
                <div className="p-4 font-medium text-sm border-t flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Capacity
                </div>
                {selectedSuites.map(suite => (
                  <div key={`${suite.id}-capacity`} className="p-4 border-t text-sm">
                    {suite.capacity}
                  </div>
                ))}

                {/* Bed Configuration */}
                <div className="p-4 font-medium text-sm border-t flex items-center gap-2">
                  <Bed className="h-4 w-4" />
                  Bed Config
                </div>
                {selectedSuites.map(suite => (
                  <div key={`${suite.id}-bed`} className="p-4 border-t text-sm">
                    {suite.bedConfig}
                  </div>
                ))}

                {/* Features Comparison */}
                {allFeatures.map(feature => {
                  const Icon = getFeatureIcon(feature);
                  return (
                    <>
                      <div key={`feature-${feature}`} className="p-4 font-medium text-sm border-t flex items-center gap-2">
                        <Icon className="h-4 w-4" />
                        {feature}
                      </div>
                      {selectedSuites.map(suite => (
                        <div key={`${suite.id}-${feature}`} className="p-4 border-t text-center">
                          {suite.features.includes(feature) ? (
                            <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-muted-foreground mx-auto" />
                          )}
                        </div>
                      ))}
                    </>
                  );
                })}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}