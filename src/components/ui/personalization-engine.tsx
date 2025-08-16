import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  User,
  Clock,
  Heart,
  TrendingUp,
  Gift,
  Star,
  Users,
  Calendar,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

interface UserPreferences {
  favoriteAmenities: string[];
  priceRange: [number, number];
  preferredCapacity: number;
  lastViewedSuites: string[];
  bookingHistory: string[];
  searchHistory: {
    dates: string;
    guests: number;
    timestamp: number;
  }[];
}

interface PersonalizedRecommendation {
  suiteId: string;
  suiteName: string;
  roomId: number;
  reason: string;
  confidence: number;
  price: number;
  image: string;
  features: string[];
  available: boolean;
  specialOffer?: string;
}

interface PersonalizationEngineProps {
  className?: string;
  currentGuests?: number;
  selectedDates?: { from: Date | undefined; to: Date | undefined };
  onSuiteSelect?: (suiteId: string, roomId: number) => void;
}

// Mock user preferences - in real app, this would come from user profile/localStorage
const mockUserPreferences: UserPreferences = {
  favoriteAmenities: ["mountain-view", "fireplace", "spa-bath"],
  priceRange: [2500, 4000],
  preferredCapacity: 2,
  lastViewedSuites: ["master-suite", "garden-suite", "falcon-suite"],
  bookingHistory: ["garden-suite"],
  searchHistory: [
    { dates: "2024-03-15 to 2024-03-17", guests: 2, timestamp: Date.now() - 86400000 },
    { dates: "2024-02-20 to 2024-02-22", guests: 2, timestamp: Date.now() - 2592000000 }
  ]
};

const generatePersonalizedRecommendations = (
  preferences: UserPreferences,
  guests: number = 2
): PersonalizedRecommendation[] => {
  const allSuites = [
    {
      id: "master-suite",
      name: "Master Suite",
      roomId: 6,
      price: 3500,
      features: ["mountain-view", "fireplace", "private-lounge", "king-bed"],
      image: "/images/suites/master-suite-01.jpg",
      available: true,
      capacity: 4
    },
    {
      id: "falcon-suite", 
      name: "Falcon Suite",
      roomId: 3,
      price: 3000,
      features: ["mountain-view", "spa-bath", "fireplace", "coffee"],
      image: "/images/suites/falcon-suite-01.jpg",
      available: true,
      capacity: 3,
      specialOffer: "Early Bird 15% Off"
    },
    {
      id: "garden-suite",
      name: "Garden Suite", 
      roomId: 4,
      price: 2800,
      features: ["garden-view", "spa-bath", "private-entrance", "coffee"],
      image: "/images/suites/garden-suite-01.jpg",
      available: true,
      capacity: 2
    },
    {
      id: "loft-family-suite",
      name: "Loft Family Suite",
      roomId: 5,
      price: 4200,
      features: ["mountain-view", "family-space", "balcony", "netflix"],
      image: "/images/suites/loft-suite-01.jpg",
      available: true,
      capacity: 4
    }
  ];

  return allSuites
    .map(suite => {
      let confidence = 0;
      let reasons: string[] = [];

      // Previous booking history boost
      if (preferences.bookingHistory.includes(suite.id)) {
        confidence += 30;
        reasons.push("You've stayed here before");
      }

      // Recently viewed boost
      if (preferences.lastViewedSuites.includes(suite.id)) {
        confidence += 20;
        reasons.push("Recently viewed");
      }

      // Amenity preference matching
      const matchingAmenities = suite.features.filter(feature => 
        preferences.favoriteAmenities.includes(feature)
      );
      confidence += matchingAmenities.length * 15;
      if (matchingAmenities.length > 0) {
        reasons.push(`Matches your preferences: ${matchingAmenities.join(", ")}`);
      }

      // Price range matching
      if (suite.price >= preferences.priceRange[0] && suite.price <= preferences.priceRange[1]) {
        confidence += 10;
        reasons.push("Within your price range");
      }

      // Capacity matching
      if (suite.capacity >= guests && suite.capacity <= guests + 1) {
        confidence += 15;
        reasons.push("Perfect size for your group");
      }

      // Special offers boost
      if (suite.specialOffer) {
        confidence += 25;
        reasons.push(suite.specialOffer);
      }

      // Availability boost
      if (suite.available) {
        confidence += 10;
      }

      return {
        suiteId: suite.id,
        suiteName: suite.name,
        roomId: suite.roomId,
        reason: reasons.length > 0 ? reasons[0] : "Popular choice",
        confidence: Math.min(confidence, 100),
        price: suite.price,
        image: suite.image,
        features: suite.features.slice(0, 3),
        available: suite.available,
        specialOffer: suite.specialOffer
      };
    })
    .filter(rec => rec.confidence > 20)
    .sort((a, b) => b.confidence - a.confidence)
    .slice(0, 3);
};

export function PersonalizationEngine({ 
  className, 
  currentGuests = 2,
  selectedDates,
  onSuiteSelect 
}: PersonalizationEngineProps) {
  const [userPreferences, setUserPreferences] = useState<UserPreferences>(mockUserPreferences);
  const [recommendations, setRecommendations] = useState<PersonalizedRecommendation[]>([]);
  const [isReturningUser, setIsReturningUser] = useState(false);

  useEffect(() => {
    // Check if user has previous data (returning user)
    const hasHistory = userPreferences.bookingHistory.length > 0 || 
                      userPreferences.lastViewedSuites.length > 0;
    setIsReturningUser(hasHistory);

    // Generate recommendations
    const newRecommendations = generatePersonalizedRecommendations(
      userPreferences, 
      currentGuests
    );
    setRecommendations(newRecommendations);
  }, [userPreferences, currentGuests]);

  const handleSuiteInteraction = (suiteId: string, roomId: number) => {
    // Track interaction for future personalization
    setUserPreferences(prev => ({
      ...prev,
      lastViewedSuites: [suiteId, ...prev.lastViewedSuites.filter(id => id !== suiteId)].slice(0, 5)
    }));

    onSuiteSelect?.(suiteId, roomId);
  };

  const getConfidenceBadge = (confidence: number) => {
    if (confidence >= 80) return { text: "Perfect Match", variant: "default" as const };
    if (confidence >= 60) return { text: "Great Match", variant: "secondary" as const };
    return { text: "Good Match", variant: "outline" as const };
  };

  const getPersonalizationInsight = () => {
    if (userPreferences.bookingHistory.length > 0) {
      return `Welcome back! Based on your previous stay at ${userPreferences.bookingHistory[0].replace('-', ' ')}`;
    }
    if (userPreferences.lastViewedSuites.length > 0) {
      return "Based on suites you've recently viewed";
    }
    return "Personalized recommendations for you";
  };

  if (recommendations.length === 0) {
    return null;
  }

  return (
    <div className={cn("space-y-4", className)}>
      <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            {isReturningUser ? "Welcome Back!" : "Recommended For You"}
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            {getPersonalizationInsight()}
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          {recommendations.map((rec, index) => {
            const confidenceBadge = getConfidenceBadge(rec.confidence);
            
            return (
              <Card 
                key={rec.suiteId} 
                className={cn(
                  "cursor-pointer transition-all hover:shadow-md",
                  index === 0 && "ring-2 ring-primary/20" // Highlight top recommendation
                )}
                onClick={() => handleSuiteInteraction(rec.suiteId, rec.roomId)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold">{rec.suiteName}</h4>
                        <Badge variant={confidenceBadge.variant} className="text-xs">
                          {confidenceBadge.text}
                        </Badge>
                        {index === 0 && (
                          <Badge className="text-xs bg-yellow-100 text-yellow-700">
                            <Star className="h-3 w-3 mr-1" />
                            Top Pick
                          </Badge>
                        )}
                        {rec.specialOffer && (
                          <Badge className="text-xs bg-green-100 text-green-700">
                            <Gift className="h-3 w-3 mr-1" />
                            {rec.specialOffer}
                          </Badge>
                        )}
                      </div>
                      
                      <div className="text-sm text-primary font-medium mb-2">
                        {rec.reason}
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {rec.features.map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {feature.replace('-', ' ')}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <TrendingUp className="h-3 w-3" />
                          <span>{rec.confidence}% match</span>
                        </div>
                        {selectedDates?.from && selectedDates?.to && (
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>Available for your dates</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="text-right ml-4">
                      <div className="text-xl font-bold text-primary">
                        R{rec.price.toLocaleString()}
                      </div>
                      <div className="text-xs text-muted-foreground mb-2">per night</div>
                      <Button size="sm" variant={index === 0 ? "default" : "outline"}>
                        {index === 0 ? "Book Top Pick" : "Select Suite"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
          
          {/* Recently Viewed Section */}
          {userPreferences.lastViewedSuites.length > 0 && (
            <div className="border-t pt-4">
              <h5 className="text-sm font-medium mb-2 flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Recently Viewed
              </h5>
              <div className="flex gap-2 overflow-x-auto">
                {userPreferences.lastViewedSuites.slice(0, 3).map(suiteId => (
                  <Button 
                    key={suiteId}
                    variant="ghost" 
                    size="sm" 
                    className="whitespace-nowrap"
                    onClick={() => {
                      const suite = recommendations.find(r => r.suiteId === suiteId);
                      if (suite) handleSuiteInteraction(suite.suiteId, suite.roomId);
                    }}
                  >
                    {suiteId.replace('-', ' ')}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}