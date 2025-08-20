import { useState, useMemo, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
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
  MessageSquare,
  Armchair,
  Sparkles,
  Shield,
  Link
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
  'Wi-Fi': Wifi,
  'Netflix': Tv,
  'TV': Tv,
  'Nespresso': Coffee,
  'coffee': Coffee,
  'bean-to-cup': Coffee,
  'fireplace': Flame,
  'views': Mountain,
  'balcony': Mountain,
  'garden': TreePine,
  'patio': TreePine,
  'bathroom': Bath,
  'bath': Bath,
  'shower': Bath,
  'vanity': Bath,
  'ensuite': Bath,
  'parking': Car,
  'romantic': Heart,
  'infant': Baby,
  'kitchen': ChefHat,
  'dining': ChefHat,
  'braai': Flame,
  'barbecue': Flame,
  'lounge': Armchair,
  'charlotte rhys': Sparkles,
  'amenities': Sparkles,
  'backup': Shield,
  'generator': Shield,
  'power': Shield,
  'electric': Shield,
  'fencing': Shield,
  'interleads': Link,
  'sofa': Armchair,
  'fold-out': Armchair,
  'seating': Armchair,
  'outdoor': TreePine
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
        return "King XL bed, private lounge opening to two balconies – Ideal for Couples";
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
        <div className="relative h-48 sm:h-64 lg:h-72 overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      )}
      <CardHeader className="pb-2">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">{title}</h3>
          {urgencyMessage && (
            <Badge className="bg-green-500 text-white text-xs">
              <Lightbulb className="h-3 w-3 mr-1" />
              {urgencyMessage}
            </Badge>
          )}
        </div>
        
        <TooltipProvider>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge variant="default" className="flex items-center gap-1 px-2 py-1">
                  <Users className="h-4 w-4" />
                  <span className="text-xs font-medium">{capacity.replace('Up to ', '').replace(' guests', '')}</span>
                </Badge>
              </TooltipTrigger>
              <TooltipContent>
                <p>Capacity: {capacity}</p>
              </TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge variant="secondary" className="flex items-center gap-1 px-2 py-1">
                  <Bed className="h-4 w-4" />
                  <span className="text-xs font-medium">
                    {bedConfig.replace(/^\d+\s*x?\s*/, '').replace(' bed', '').replace(' beds', '')}
                  </span>
                </Badge>
              </TooltipTrigger>
              <TooltipContent>
                <p>Beds: {bedConfig}</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </CardHeader>

      <CardContent>
        <Accordion type="multiple" className="w-full space-y-2">
          {/* Suite Details Section */}
          <AccordionItem value="overview" className="border rounded-lg">
            <AccordionTrigger className="px-4 py-4 hover:no-underline text-left">
              <div className="flex items-center gap-3 w-full">
                <Info className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="flex-1">
                  <div className="font-semibold text-base">Suite Details</div>
                  <div className="text-sm text-muted-foreground">Overview and key highlights</div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{getCombinedDescription()}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {mainAmenities.slice(0, 6).map((amenity, index) => {
                    const Icon = getAmenityIcon(amenity.text);
                    return (
                      <div key={index} className="flex items-center gap-3 text-sm p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                        <Icon className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="font-medium">{amenity.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Features & Amenities Section */}
          <AccordionItem value="amenities" className="border rounded-lg">
            <AccordionTrigger className="px-4 py-4 hover:no-underline text-left">
              <div className="flex items-center gap-3 w-full">
                <List className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="flex-1">
                  <div className="font-semibold text-base">Features & Amenities</div>
                  <div className="text-sm text-muted-foreground">{mainAmenities.length + additionalAmenities.length} total features</div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-4 text-primary text-base">Main Features</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {mainAmenities.map((amenity, index) => {
                      const Icon = getAmenityIcon(amenity.text);
                      return (
                        <div key={index} className="flex items-center gap-3 text-sm p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                          <Icon className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="font-medium">{amenity.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                <Accordion type="single" collapsible>
                  <AccordionItem value="additional">
                    <AccordionTrigger className="text-base font-semibold text-primary">
                      Additional Amenities & Services
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                        {additionalAmenities.map((amenity, index) => (
                          <div key={index} className="flex items-center gap-3 text-sm">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                            <span className="leading-relaxed">{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Photo Gallery Section */}
          <AccordionItem value="gallery" className="border rounded-lg">
            <AccordionTrigger className="px-4 py-4 hover:no-underline text-left">
              <div className="flex items-center gap-3 w-full">
                <Image className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="flex-1">
                  <div className="font-semibold text-base">Photo Gallery</div>
                  <div className="text-sm text-muted-foreground">
                    {isLoadingImages ? 'Loading images...' : `${availableImages.length} photos`}
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <div className="space-y-4">
                {isLoadingImages ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {Array.from({ length: 6 }, (_, i) => (
                      <div key={i} className="aspect-square bg-muted rounded-lg animate-pulse" />
                    ))}
                  </div>
                ) : availableImages.length > 0 ? (
                  <>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {availableImages.slice(0, 6).map((image, i) => (
                        <div key={i} className="aspect-square bg-muted rounded-lg overflow-hidden group cursor-pointer">
                          <img
                            src={image.src}
                            alt={image.alt}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = `https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop&crop=center`;
                            }}
                          />
                        </div>
                      ))}
                    </div>
                    {availableImages.length > 6 && (
                      <Button 
                        variant="outline" 
                        className="w-full mt-4"
                        onClick={handleViewFullGallery}
                      >
                        <Image className="h-4 w-4 mr-2" />
                        View Full Gallery ({availableImages.length} photos)
                      </Button>
                    )}
                  </>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <Image className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>No images available</p>
                  </div>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Guest Reviews Section */}
          <AccordionItem value="reviews" className="border rounded-lg">
            <AccordionTrigger className="px-4 py-4 hover:no-underline text-left">
              <div className="flex items-center gap-3 w-full">
                <MessageSquare className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="flex-1">
                  <div className="font-semibold text-base">Guest Reviews</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials && testimonials.length > 0 ? `${testimonials.length} reviews` : 'Guest feedback'}
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <div className="space-y-4">
                {testimonials && testimonials.length > 0 ? (
                  <>
                    {testimonials.slice(0, 3).map((testimonial, index) => (
                      <TestimonialCard
                        key={index}
                        quote={testimonial.quote}
                        author={testimonial.author}
                        rating={testimonial.rating || 5}
                        year={testimonial.year}
                        className="border-none shadow-sm"
                      />
                    ))}
                    {testimonials.length > 3 && (
                      <div className="text-center pt-4">
                        <span className="text-sm text-muted-foreground">
                          +{testimonials.length - 3} more reviews available
                        </span>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-6 text-muted-foreground">
                    <MessageSquare className="h-8 w-8 mx-auto mb-3 opacity-50" />
                    <p className="text-sm">Guest reviews will appear here</p>
                  </div>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
      
      {/* Bottom Booking Button */}
      <div className="px-6 pb-6 pt-2 border-t bg-muted/20">
        <Button 
          size="lg" 
          className="w-full min-h-[56px] text-base font-semibold touch-target"
          onClick={handleBookNow}
        >
          <ExternalLink className="h-5 w-5 mr-2" />
          Book This Suite
        </Button>
      </div>

      {/* Full Gallery Modal */}
      {galleryOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setGalleryOpen(false)}
              className="absolute top-4 right-4 z-10 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
            >
              ×
            </button>
            
            {availableImages.length > 0 && (
              <>
                <img
                  src={availableImages[currentImageIndex].src}
                  alt={availableImages[currentImageIndex].alt}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
                
                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={prevImage}
                    className="text-white bg-black/50 rounded-full px-4 py-2 hover:bg-black/70 transition-colors"
                    disabled={availableImages.length <= 1}
                  >
                    Previous
                  </button>
                  
                  <span className="text-white">
                    {currentImageIndex + 1} of {availableImages.length}
                  </span>
                  
                  <button
                    onClick={nextImage}
                    className="text-white bg-black/50 rounded-full px-4 py-2 hover:bg-black/70 transition-colors"
                    disabled={availableImages.length <= 1}
                  >
                    Next
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </Card>
  );
}