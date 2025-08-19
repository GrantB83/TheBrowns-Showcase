import { useState, useMemo, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { AmenityDisclosure, DescriptionDisclosure } from "@/components/ui/progressive-disclosure";
import { UrgencyIndicator } from "@/components/ui/social-proof";
import { TouchOptimizedGallery, MobileFriendlyActions } from "@/components/ui/enhanced-mobile-interactions";
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
  ChefHat,
  Lightbulb,
  Info,
  List,
  Image,
  MessageSquare
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
  testimonials?: Array<{
    quote: string;
    author: string;
    year?: string;
    rating?: number;
  }>;
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
  testimonials,
  images = [],
  className
}: SuiteBookingCardProps) {
  const [activeTab, setActiveTab] = useState("overview");
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Generate gallery images based on slug and naming convention
  const galleryImages = useMemo(() => {
    const imageArray = [];
    // Support up to 20 images per suite/house
    for (let i = 1; i <= 20; i++) {
      const paddedNumber = i.toString().padStart(2, '0');
      imageArray.push({
        src: `/images/suites/${slug}-${paddedNumber}.jpg`,
        alt: `${title} - Image ${i}`,
        title: `${title} View ${i}`,
      });
    }
    return imageArray;
  }, [slug, title]);

  // Detect actual available images
  const [availableImages, setAvailableImages] = useState<Array<{src: string, alt: string, title: string}>>([]);
  const [isLoadingImages, setIsLoadingImages] = useState(true);

  // Check which images actually exist
  useEffect(() => {
    const checkImages = async () => {
      setIsLoadingImages(true);
      const validImages = [];
      
      // Define known image counts for each property
      const imageCounts: Record<string, number> = {
        'luxury-guest-house': 13,
        'heritage-cottage-house': 14,
        'master-suite': 7,
        'loft-suite': 7,
        'garden-suite': 6,
        'cove-suite': 6,
        'robin-suite': 6,
        'blue-crane-suite': 7,
        'falcon-suite': 7
      };
      
      const maxImages = imageCounts[slug] || 20;
      
      for (let i = 1; i <= maxImages; i++) {
        const paddedNumber = i.toString().padStart(2, '0');
        const imageSrc = `/images/suites/${slug}-${paddedNumber}.jpg`;
        
        validImages.push({
          src: imageSrc,
          alt: `${title} - Image ${i}`,
          title: `${title} View ${i}`,
        });
      }
      
      console.log(`[${title}] Generated ${validImages.length} images for ${slug}:`, validImages.map(img => img.src));
      setAvailableImages(validImages);
      setIsLoadingImages(false);
    };

    checkImages();
  }, [slug, title]);

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

  const handleViewFullGallery = () => {
    if (availableImages.length > 0) {
      setGalleryOpen(true);
      setCurrentImageIndex(0);
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % availableImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + availableImages.length) % availableImages.length);
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

  const getCombinedDescription = () => {
    const highlights = getSuiteHighlights();
    return `${highlights}. ${description}`;
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
                <Badge className="bg-green-500 text-white text-xs">
                  <Lightbulb className="h-3 w-3 mr-1" />
                  {urgencyMessage}
                </Badge>
              )}
            </div>
            

            
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
          
          <div className="flex flex-col items-end gap-2 w-full sm:w-auto">
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
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 border border-primary/20 rounded-lg p-3 mt-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Gift className="h-4 w-4 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-primary mb-1">Book Direct Benefits</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{offerText}</div>
              </div>
            </div>
          </div>
        )}
      </CardHeader>

      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Mobile: 2x2 grid of visible buttons */}
            <TabsList
            aria-label="Suite details navigation"
            className="grid grid-cols-2 gap-2 mb-4 sm:hidden bg-transparent p-0"
          >
            <TabsTrigger
              value="overview"
              className="min-h-[44px] px-3 py-2 text-sm rounded-md border border-primary/20 text-primary/80 hover:text-primary hover:bg-primary/5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="amenities"
              className="min-h-[44px] px-3 py-2 text-sm rounded-md border border-primary/20 text-primary/80 hover:text-primary hover:bg-primary/5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary"
            >
              Amenities
            </TabsTrigger>
            <TabsTrigger
              value="gallery"
              className="min-h-[44px] px-3 py-2 text-sm rounded-md border border-primary/20 text-primary/80 hover:text-primary hover:bg-primary/5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary"
            >
              Gallery
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="min-h-[44px] px-3 py-2 text-sm rounded-md border border-primary/20 text-primary/80 hover:text-primary hover:bg-primary/5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary"
            >
              Reviews
            </TabsTrigger>
          </TabsList>

          {/* Tablet/Desktop: pill tab list */}
          <TabsList
            aria-label="Suite details navigation"
            className="hidden sm:flex w-full mb-4 gap-2 overflow-x-auto md:overflow-visible md:grid md:grid-cols-4 bg-transparent p-1 rounded-none"
          >
            <TabsTrigger
              value="overview"
              className="shrink-0 snap-start min-h-[44px] px-4 py-2 text-sm sm:text-base rounded-full border border-primary/20 text-primary/80 hover:text-primary hover:bg-primary/5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary transition-colors"
            >
              <Info className="h-4 w-4 mr-2 hidden sm:inline-block" />
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="amenities"
              className="shrink-0 snap-start min-h-[44px] px-4 py-2 text-sm sm:text-base rounded-full border border-primary/20 text-primary/80 hover:text-primary hover:bg-primary/5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary transition-colors"
            >
              <List className="h-4 w-4 mr-2 hidden sm:inline-block" />
              Amenities
            </TabsTrigger>
            <TabsTrigger
              value="gallery"
              className="shrink-0 snap-start min-h-[44px] px-4 py-2 text-sm sm:text-base rounded-full border border-primary/20 text-primary/80 hover:text-primary hover:bg-primary/5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary transition-colors"
            >
              <Image className="h-4 w-4 mr-2 hidden sm:inline-block" />
              Gallery
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="shrink-0 snap-start min-h-[44px] px-4 py-2 text-sm sm:text-base rounded-full border border-primary/20 text-primary/80 hover:text-primary hover:bg-primary/5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary transition-colors"
            >
              <MessageSquare className="h-4 w-4 mr-2 hidden sm:inline-block" />
              Reviews
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4 mt-0 pt-12 sm:pt-0">
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{getCombinedDescription()}</p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
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
            {isLoadingImages ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {Array.from({ length: 6 }, (_, i) => (
                  <div key={i} className="aspect-square bg-muted rounded-lg animate-pulse" />
                ))}
              </div>
            ) : availableImages.length > 0 ? (
              <>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {availableImages.slice(0, 6).map((image, i) => (
                    <div key={i} className="aspect-square bg-muted rounded-lg overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=300&fit=crop&crop=center`;
                        }}
                      />
                    </div>
                  ))}
                </div>
                
                {availableImages.length > 6 && (
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={handleViewFullGallery}
                  >
                    View Full Gallery ({availableImages.length} images)
                  </Button>
                )}
              </>
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No gallery images available yet.</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="reviews" className="space-y-4">
            {testimonials && testimonials.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {testimonials.map((item, index) => (
                  <TestimonialCard
                    key={index}
                    quote={item.quote}
                    author={item.author}
                    year={item.year}
                    rating={item.rating ?? 5}
                  />
                ))}
              </div>
            ) : testimonial ? (
              <TestimonialCard {...testimonial} />
            ) : (
              <div className="text-center py-8">
                <div className="mb-2">
                  <span className="text-sm text-muted-foreground">Guest Reviews</span>
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
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>

      {/* Gallery Modal */}
      {galleryOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full max-h-full">
            {/* Close button */}
            <button
              onClick={() => setGalleryOpen(false)}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image */}
            <div className="flex items-center justify-center h-full">
              <img
                src={availableImages[currentImageIndex]?.src}
                alt={availableImages[currentImageIndex]?.alt || `${title} gallery image`}
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop&crop=center`;
                }}
              />
            </div>

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentImageIndex + 1} / {availableImages.length}
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}