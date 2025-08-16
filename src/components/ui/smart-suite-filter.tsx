import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Filter,
  Users,
  Star,
  Heart,
  Wifi,
  Car,
  Coffee,
  Tv,
  Bath,
  Mountain,
  Flower,
  Flame,
  X,
  SlidersHorizontal
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Suite {
  id: string;
  name: string;
  capacity: number;
  maxGuests: number;
  price: number;
  rating: number;
  features: string[];
  image: string;
  available: boolean;
  popularityScore: number;
  roomsLeft?: number;
}

interface FilterState {
  priceRange: [number, number];
  guestCount: number;
  amenities: string[];
  sortBy: 'price' | 'popularity' | 'rating' | 'availability';
  availableOnly: boolean;
}

interface SmartSuiteFilterProps {
  className?: string;
  onSuiteSelect?: (suiteId: string) => void;
  preselectedGuests?: number;
}

const allSuites: Suite[] = [
  {
    id: "garden-suite",
    name: "Garden Suite",
    capacity: 2,
    maxGuests: 2,
    price: 2800,
    rating: 4.8,
    features: ["wifi", "garden-view", "spa-bath", "coffee", "private-entrance"],
    image: "/images/suites/garden-suite-01.jpg",
    available: true,
    popularityScore: 85,
    roomsLeft: 2
  },
  {
    id: "blue-crane-suite",
    name: "Blue Crane Suite",
    capacity: 2,
    maxGuests: 2,
    price: 2600,
    rating: 4.7,
    features: ["wifi", "mountain-view", "fireplace", "coffee", "netflix"],
    image: "/images/suites/blue-crane-suite-01.jpg",
    available: true,
    popularityScore: 75
  },
  {
    id: "robin-suite",
    name: "Robin Suite",
    capacity: 2,
    maxGuests: 2,
    price: 2500,
    rating: 4.6,
    features: ["wifi", "garden-view", "coffee", "netflix"],
    image: "/images/suites/robin-suite-01.jpg",
    available: true,
    popularityScore: 70
  },
  {
    id: "falcon-suite",
    name: "Falcon Suite",
    capacity: 2,
    maxGuests: 3,
    price: 3000,
    rating: 4.9,
    features: ["wifi", "mountain-view", "spa-bath", "fireplace", "coffee"],
    image: "/images/suites/falcon-suite-01.jpg",
    available: true,
    popularityScore: 90,
    roomsLeft: 1
  },
  {
    id: "loft-family-suite",
    name: "Loft Family Suite",
    capacity: 4,
    maxGuests: 4,
    price: 4200,
    rating: 4.8,
    features: ["wifi", "mountain-view", "netflix", "coffee", "family-space", "balcony"],
    image: "/images/suites/loft-suite-01.jpg",
    available: true,
    popularityScore: 95
  },
  {
    id: "master-suite",
    name: "Master Suite",
    capacity: 4,
    maxGuests: 4,
    price: 3500,
    rating: 4.9,
    features: ["wifi", "mountain-view", "fireplace", "coffee", "private-lounge", "king-bed"],
    image: "/images/suites/master-suite-01.jpg",
    available: true,
    popularityScore: 98,
    roomsLeft: 1
  },
  {
    id: "cove-suite",
    name: "Cove Suite",
    capacity: 2,
    maxGuests: 2,
    price: 2700,
    rating: 4.7,
    features: ["wifi", "garden-view", "spa-bath", "coffee"],
    image: "/images/suites/cove-suite-01.jpg",
    available: false,
    popularityScore: 80
  }
];

const amenityIcons = {
  wifi: Wifi,
  "mountain-view": Mountain,
  "garden-view": Flower,
  fireplace: Flame,
  "spa-bath": Bath,
  coffee: Coffee,
  netflix: Tv,
  "private-entrance": Star,
  "private-lounge": Star,
  "king-bed": Star,
  "family-space": Users,
  balcony: Mountain
};

const amenityLabels = {
  wifi: "WiFi",
  "mountain-view": "Mountain View",
  "garden-view": "Garden View", 
  fireplace: "Fireplace",
  "spa-bath": "Spa Bath",
  coffee: "Coffee Station",
  netflix: "Netflix",
  "private-entrance": "Private Entrance",
  "private-lounge": "Private Lounge",
  "king-bed": "King Bed",
  "family-space": "Family Space",
  balcony: "Balcony"
};

const allAmenities = Object.keys(amenityLabels);

export function SmartSuiteFilter({ 
  className, 
  onSuiteSelect,
  preselectedGuests = 2 
}: SmartSuiteFilterProps) {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [2000, 5000],
    guestCount: preselectedGuests,
    amenities: [],
    sortBy: 'popularity',
    availableOnly: true
  });

  const filteredAndSortedSuites = useMemo(() => {
    let filtered = allSuites.filter(suite => {
      // Price filter
      if (suite.price < filters.priceRange[0] || suite.price > filters.priceRange[1]) {
        return false;
      }
      
      // Guest count filter
      if (suite.maxGuests < filters.guestCount) {
        return false;
      }
      
      // Availability filter
      if (filters.availableOnly && !suite.available) {
        return false;
      }
      
      // Amenities filter
      if (filters.amenities.length > 0) {
        const hasAllAmenities = filters.amenities.every(amenity => 
          suite.features.includes(amenity)
        );
        if (!hasAllAmenities) {
          return false;
        }
      }
      
      return true;
    });

    // Sort suites
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case 'price':
          return a.price - b.price;
        case 'rating':
          return b.rating - a.rating;
        case 'availability':
          if (a.available !== b.available) {
            return a.available ? -1 : 1;
          }
          return (a.roomsLeft || 0) - (b.roomsLeft || 0);
        case 'popularity':
        default:
          return b.popularityScore - a.popularityScore;
      }
    });

    return filtered;
  }, [filters]);

  const updateFilter = (key: keyof FilterState, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const toggleAmenity = (amenity: string) => {
    const newAmenities = filters.amenities.includes(amenity)
      ? filters.amenities.filter(a => a !== amenity)
      : [...filters.amenities, amenity];
    updateFilter('amenities', newAmenities);
  };

  const clearFilters = () => {
    setFilters({
      priceRange: [2000, 5000],
      guestCount: preselectedGuests,
      amenities: [],
      sortBy: 'popularity',
      availableOnly: true
    });
  };

  const getRecommendationBadge = (suite: Suite) => {
    if (suite.popularityScore >= 95) {
      return { text: "Most Popular", variant: "destructive" as const };
    }
    if (suite.rating >= 4.8 && suite.available) {
      return { text: "Highly Rated", variant: "default" as const };
    }
    if (suite.roomsLeft && suite.roomsLeft <= 1) {
      return { text: "Last Room", variant: "destructive" as const };
    }
    if (suite.capacity === filters.guestCount) {
      return { text: "Perfect Match", variant: "default" as const };
    }
    return null;
  };

  return (
    <div className={cn("space-y-6", className)}>
      {/* Filter Controls */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Find Your Perfect Suite
            </CardTitle>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              {showFilters ? 'Hide' : 'Show'} Filters
            </Button>
          </div>
        </CardHeader>

        {showFilters && (
          <CardContent className="space-y-6">
            {/* Guest Count */}
            <div>
              <label className="text-sm font-medium mb-2 block">Number of Guests</label>
              <Select 
                value={filters.guestCount.toString()} 
                onValueChange={(value) => updateFilter('guestCount', parseInt(value))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Guest</SelectItem>
                  <SelectItem value="2">2 Guests</SelectItem>
                  <SelectItem value="3">3 Guests</SelectItem>
                  <SelectItem value="4">4+ Guests</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Price Range */}
            <div>
              <label className="text-sm font-medium mb-2 block">
                Price Range: R{filters.priceRange[0]} - R{filters.priceRange[1]} per night
              </label>
              <Slider
                value={filters.priceRange}
                onValueChange={(value) => updateFilter('priceRange', value)}
                min={2000}
                max={5000}
                step={100}
                className="mt-2"
              />
            </div>

            {/* Amenities */}
            <div>
              <label className="text-sm font-medium mb-3 block">Amenities</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {allAmenities.map(amenity => {
                  const Icon = amenityIcons[amenity as keyof typeof amenityIcons];
                  const isSelected = filters.amenities.includes(amenity);
                  
                  return (
                    <div
                      key={amenity}
                      className={cn(
                        "flex items-center gap-2 p-2 rounded border cursor-pointer transition-colors",
                        isSelected 
                          ? "bg-primary/10 border-primary" 
                          : "border-muted hover:border-primary/50"
                      )}
                      onClick={() => toggleAmenity(amenity)}
                    >
                      <Checkbox
                        checked={isSelected}
                        onChange={() => toggleAmenity(amenity)}
                      />
                      <Icon className="h-4 w-4" />
                      <span className="text-sm">{amenityLabels[amenity as keyof typeof amenityLabels]}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Sort & Availability */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Sort By</label>
                <Select 
                  value={filters.sortBy} 
                  onValueChange={(value) => updateFilter('sortBy', value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popularity">Popularity</SelectItem>
                    <SelectItem value="price">Price (Low to High)</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="availability">Availability</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-end">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="available-only"
                    checked={filters.availableOnly}
                    onCheckedChange={(checked) => updateFilter('availableOnly', checked)}
                  />
                  <label
                    htmlFor="available-only"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Available only
                  </label>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <Button variant="outline" size="sm" onClick={clearFilters}>
                Clear All Filters
              </Button>
              <div className="text-sm text-muted-foreground">
                {filteredAndSortedSuites.length} of {allSuites.length} suites
              </div>
            </div>
          </CardContent>
        )}
      </Card>

      {/* Results */}
      <div className="space-y-4">
        {filteredAndSortedSuites.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground mb-4">No suites match your current filters.</p>
              <Button variant="outline" onClick={clearFilters}>
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        ) : (
          filteredAndSortedSuites.map((suite) => {
            const recommendation = getRecommendationBadge(suite);
            
            return (
              <Card 
                key={suite.id} 
                className={cn(
                  "cursor-pointer transition-all hover:shadow-md",
                  !suite.available && "opacity-60"
                )}
                onClick={() => suite.available && onSuiteSelect?.(suite.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-lg">{suite.name}</h3>
                        {recommendation && (
                          <Badge variant={recommendation.variant} className="text-xs">
                            {recommendation.text}
                          </Badge>
                        )}
                        {!suite.available && (
                          <Badge variant="outline" className="text-xs">
                            Unavailable
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>Up to {suite.maxGuests} guests</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span>{suite.rating}</span>
                        </div>
                        {suite.roomsLeft && suite.roomsLeft <= 2 && (
                          <Badge variant="destructive" className="text-xs">
                            Only {suite.roomsLeft} left
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {suite.features.slice(0, 4).map((feature) => {
                          const Icon = amenityIcons[feature as keyof typeof amenityIcons];
                          const label = amenityLabels[feature as keyof typeof amenityLabels];
                          
                          return (
                            <div 
                              key={feature}
                              className="flex items-center gap-1 bg-muted rounded px-2 py-1 text-xs"
                            >
                              {Icon && <Icon className="h-3 w-3" />}
                              <span>{label}</span>
                            </div>
                          );
                        })}
                        {suite.features.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{suite.features.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="text-right ml-4">
                      <div className="text-2xl font-bold text-primary">
                        R{suite.price.toLocaleString()}
                      </div>
                      <div className="text-xs text-muted-foreground mb-2">per night</div>
                      
                      {suite.available ? (
                        <Button size="sm" className="w-full">
                          Select Suite
                        </Button>
                      ) : (
                        <Button size="sm" variant="outline" disabled>
                          Unavailable
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })
        )}
      </div>
    </div>
  );
}