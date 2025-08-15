import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  ExternalLink,
  Gift,
  Users,
  Bed,
  TreePine,
  Crown,
  ArrowRight
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface TwoHouseSelectionHeroProps {
  onFilterChange: (filter: 'all' | 'luxury' | 'cottage') => void;
  activeFilter: 'all' | 'luxury' | 'cottage';
}

export function TwoHouseSelectionHero({ onFilterChange, activeFilter }: TwoHouseSelectionHeroProps) {
  const { elementRef: heroRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const handleHouseSelection = (houseType: 'luxury' | 'cottage') => {
    onFilterChange(houseType);
    // Smooth scroll to suites section
    setTimeout(() => {
      const suitesSection = document.getElementById('suites-section');
      if (suitesSection) {
        suitesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleDirectBooking = () => {
    window.open('https://book.nightsbridge.com/00000', '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      ref={heroRef}
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary/10 to-accent/5"
    >
      <div className="container mx-auto px-4">
        <div className={`max-w-6xl mx-auto transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
              <Home className="h-4 w-4 mr-2" />
              Two Distinct Houses, One Exceptional Experience
            </Badge>
            
            <h1 className="text-primary mb-6">
              Choose Your Perfect Dullstroom Retreat
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-4xl mx-auto">
              Experience luxury highland accommodation with two distinct styles: modern sophistication in our Luxury Guest Suites 
              or authentic cottage charm in our neighbouring Heritage Cottage. Each offers premium amenities and personalized service.
            </p>
            
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 text-primary font-semibold">
                <Gift className="h-5 w-5" />
                <span>Direct Booking Benefits Included</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Best rate guaranteed • Free welcome drink • Complimentary WiFi • Flexible cancellation
              </p>
            </div>
          </div>

          {/* Two House Selection Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            
            {/* Luxury Guest Suites Card */}
            <Card className={`overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer ${
              activeFilter === 'luxury' ? 'ring-2 ring-primary' : ''
            }`}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="/images/hero/browns-exterior.jpg"
                  alt="The Browns Luxury Guest Suites - Modern highlands accommodation"
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=450&fit=crop&crop=center';
                  }}
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">
                    <Crown className="h-3 w-3 mr-1" />
                    Premium
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-600 text-white font-bold">
                    From R895pppn
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl flex items-center gap-2">
                  <Home className="h-5 w-5 text-primary" />
                  Luxury Guest Suites
                </CardTitle>
                <p className="text-muted-foreground">
                  Modern sophistication meets highland luxury in our flagship guest house. 
                  Perfect for couples and families seeking premium comfort. Master and Loft suites feature Zuikerboschkop views from first-floor balcony.
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>2-6 guests per suite</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bed className="h-4 w-4 text-muted-foreground" />
                    <span>King XL & Queen beds</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-1">
                    <span className="text-base" role="img" aria-label="spa">🛁</span>
                    <span>Modern bathrooms</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-base" role="img" aria-label="mountain">🏔️</span>
                    <span>Garden views & balcony access</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-base" role="img" aria-label="coffee">☕</span>
                    <span>Nespresso machines</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-base" role="img" aria-label="tv">📺</span>
                    <span>Netflix systems</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full min-h-[48px] text-base font-medium"
                  onClick={() => handleHouseSelection('luxury')}
                >
                  View Luxury Suites
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Cottage Suites Card */}
            <Card className={`overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer ${
              activeFilter === 'cottage' ? 'ring-2 ring-primary' : ''
            }`}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="/images/suites/robin-suite-01.jpg"
                  alt="Heritage Cottage Suites - Authentic Dullstroom cottage accommodation"
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=450&fit=crop&crop=center';
                  }}
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-accent text-accent-foreground">
                    <TreePine className="h-3 w-3 mr-1" />
                    Authentic
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-600 text-white font-bold">
                    From R695pppn
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl flex items-center gap-2">
                  <TreePine className="h-5 w-5 text-primary" />
                  Heritage Cottage Suites
                </CardTitle>
                <p className="text-muted-foreground">
                  Authentic cottage charm with cozy fireplaces and traditional highland character. 
                  Ideal for romantic getaways and families seeking rustic luxury.
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>2-4 guests per suite</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bed className="h-4 w-4 text-muted-foreground" />
                    <span>Flexible bed configs</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-1">
                    <span className="text-base" role="img" aria-label="fireplace">🔥</span>
                    <span>Cozy fireplaces</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-base" role="img" aria-label="garden">🌿</span>
                    <span>Garden access</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-base" role="img" aria-label="coffee">☕</span>
                    <span>Coffee stations</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-base" role="img" aria-label="cottage">🏡</span>
                    <span>Cottage charm</span>
                  </div>
                </div>
                
                <Button 
                  variant="outline"
                  className="w-full min-h-[48px] text-base font-medium"
                  onClick={() => handleHouseSelection('cottage')}
                >
                  View Cottage Suites
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-6">
              <Button 
                size="lg" 
                className="min-h-[48px] flex-1"
                onClick={handleDirectBooking}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Book Direct Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="min-h-[48px] flex-1"
                onClick={() => onFilterChange('all')}
              >
                View All Suites
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}