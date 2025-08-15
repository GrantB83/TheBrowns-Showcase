import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { 
  Users, 
  Bed, 
  ExternalLink, 
  Clock, 
  Gift, 
  Star, 
  Wifi, 
  Coffee, 
  Tv, 
  Bath,
  Car,
  Flame,
  Mountain,
  TreePine,
  Heart,
  Baby,
  ChefHat
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Amenity {
  text: string;
  emoji: string;
}

interface SuiteBookingCardProps {
  title: string;
  capacity: string;
  bedConfig: string;
  description: string;
  mainAmenities: Amenity[];
  additionalAmenities: string[];
  slug: string;
  roomId: number;
  
  urgencyMessage?: string;
  offerText?: string;
  testimonial?: {
    quote: string;
    author: string;
    rating: number;
  };
  images?: string[];
  className?: string;
}

const AMENITY_ICONS: Record<string, any> = {
  'WiFi': Wifi,
  'Netflix': Tv,
  'Nespresso': Coffee,
  'fireplace': Flame,
  'views': Mountain,
  'garden': TreePine,
  'bathroom': Bath,
  'parking': Car,
  'romantic': Heart,
  'infant': Baby,
  'kitchen': ChefHat
};

const getAmenityIcon = (amenity: string) => {
  const amenityLower = amenity.toLowerCase();
  for (const [key, Icon] of Object.entries(AMENITY_ICONS)) {
    if (amenityLower.includes(key.toLowerCase())) {
      return Icon;
    }
  }
  return Star;
};

export function SuiteBookingCard({
  title,
  capacity,
  bedConfig,
  description,
  mainAmenities,
  additionalAmenities,
  slug,
  roomId,
  
  urgencyMessage,
  offerText = "Book Direct: Best Rate Guarantee + Free Welcome Drink",
  testimonial,
  images = [],
  className
}: SuiteBookingCardProps) {
  const [activeTab, setActiveTab] = useState("overview");

  const getBookingUrl = () => {
    return `https://book.nightsbridge.com/00000?rtid=${roomId}`;
  };

  const handleBookNow = () => {
    window.open(getBookingUrl(), '_blank', 'noopener,noreferrer');
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'suite_booking_click', {
        event_category: 'conversion',
        event_label: title,
        value: roomId
      });
    }
  };

  const getSuiteHighlights = () => {
    switch (slug) {
      case "master-suite":
        return "King XL bed, private lounge with fireplace and Netflix – Ideal for Couples";
      case "loft-suite":
        return "Family-friendly with 4 beds and Zuikerboschkop views – Perfect for Groups";
      case "garden-suite":
        return "Romantic retreat with garden views and spa bath – Couples' Haven";
      case "cove-suite":
        return "Intimate suite with modern amenities and cozy atmosphere";
      case "robin-suite":
        return "Cottage charm with fireplace and flexible sleeping – Family Favorite";
      case "blue-crane-suite":
        return "Romantic cottage with private beverage station – Perfect for Two";
      case "falcon-suite":
        return "Spacious cottage suite with entertainment system – Small Families";
      case "self-catering-house":
        return "Fully equipped for groups up to 16 with barbecues and secure parking";
      default:
        return "Luxury accommodation with premium amenities";
    }
  };

  return (
    <Card className={cn("overflow-hidden hover:shadow-xl transition-shadow duration-300", className)}>
      {/* Main Image */}
      {images && images.length > 0 && (
        <div className="relative h-48 sm:h-64 overflow-hidden">
          <img
            src={images[0]}
            alt={`${title} - luxury suite interior at The Browns Dullstroom`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop&crop=center`;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      )}
      <CardHeader className="pb-4">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h3 className="text-xl sm:text-2xl font-bold text-primary">{title}</h3>
              {urgencyMessage && (
                <Badge variant="destructive" className="bg-red-500 text-white text-xs">
                  <Clock className="h-3 w-3 mr-1" />
                  {urgencyMessage}
                </Badge>
              )}
            </div>
            
            <p className="text-sm text-muted-foreground font-medium mb-2">
              {getSuiteHighlights()}
            </p>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>{capacity}</span>
              </div>
              <div className="flex items-center gap-1">
                <Bed className="h-4 w-4" />
                <span>{bedConfig}</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-end gap-2">
            
            <Button 
              size="sm" 
              className="min-h-[44px] w-full sm:w-auto"
              onClick={handleBookNow}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Book Direct Now
            </Button>
          </div>
        </div>
        
        {offerText && (
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 mt-4">
            <div className="flex items-center gap-2 text-sm">
              <Gift className="h-4 w-4 text-primary" />
              <span className="font-medium text-primary">{offerText}</span>
            </div>
          </div>
        )}
      </CardHeader>

      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="overview" className="text-xs">Overview</TabsTrigger>
            <TabsTrigger value="amenities" className="text-xs">Amenities</TabsTrigger>
            <TabsTrigger value="gallery" className="text-xs">Gallery</TabsTrigger>
            <TabsTrigger value="reviews" className="text-xs">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">{description}</p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {mainAmenities.slice(0, 6).map((amenity, index) => {
                const Icon = getAmenityIcon(amenity.text);
                return (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <Icon className="h-4 w-4 text-primary" />
                    <span>{amenity.text}</span>
                  </div>
                );
              })}
            </div>
            
            <Button 
              className="w-full min-h-[48px] mt-4"
              onClick={handleBookNow}
            >
              Book {title} - Best Rate Guarantee
            </Button>
          </TabsContent>

          <TabsContent value="amenities" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-3 text-primary">Main Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {mainAmenities.map((amenity, index) => {
                    const Icon = getAmenityIcon(amenity.text);
                    return (
                      <div key={index} className="flex items-center gap-2 text-sm p-2 bg-muted/30 rounded">
                        <Icon className="h-4 w-4 text-primary" />
                        <span>{amenity.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <Accordion type="single" collapsible>
                <AccordionItem value="additional">
                  <AccordionTrigger className="text-sm font-medium">
                    Additional Amenities & Services
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                      {additionalAmenities.map((amenity, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </TabsContent>

          <TabsContent value="gallery" className="space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {Array.from({ length: 6 }, (_, i) => (
                <div key={i} className="aspect-square bg-muted rounded-lg overflow-hidden">
                  <img
                    src={`/images/suites/${slug}-0${i + 1}.jpg`}
                    alt={`${title} interior view ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=300&fit=crop&crop=center`;
                    }}
                  />
                </div>
              ))}
            </div>
            
            <Button variant="outline" className="w-full">
              View Full Gallery
            </Button>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-4">
            {testimonial ? (
              <TestimonialCard {...testimonial} />
            ) : (
              <div className="text-center py-8">
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-secondary fill-secondary" />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">4.9/5 Average</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Guests love the {title.toLowerCase()} for its comfort and amenities.
                </p>
              </div>
            )}
            
            <div className="bg-muted/30 rounded-lg p-4 text-center">
              <p className="text-sm text-muted-foreground mb-2">
                Join our satisfied guests
              </p>
              <Button 
                className="min-h-[44px]"
                onClick={handleBookNow}
              >
                Book Your Stay Today
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}