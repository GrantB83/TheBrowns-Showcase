import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lightbox } from "@/components/ui/lightbox";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { ZoomIn, Eye, ExternalLink, Clock, Star, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
  category?: string;
  description?: string;
  caption?: string;
  suiteCode?: string;
  roomId?: number;
  urgencyMessage?: string;
  placeholder?: { filename: string; folder: string; width: number; height: number };
}

interface BookingGalleryProps {
  images: GalleryImage[];
  categories?: string[];
  className?: string;
  showTestimonials?: boolean;
}

const ROOM_CODES = {
  6: "Master Suite",
  4: "Garden Suite", 
  5: "Loft Family Suite",
  3: "Cove Suite",
  14: "Garden Family Suite",
  16: "Falcon Suite",
  17: "Blue Crane Suite",
  15: "Robin Suite",
  18: "Self Catering House"
};

const testimonials = [
  {
    quote: "What a wonderfully comfortable stay. Exceptional quality furnishings, excellent linen and bed, soft candles at the bath.",
    author: "tdvilliers",
    rating: 5,
    year: "2020"
  },
  {
    quote: "We had a fabulous 1-night stay in 'The Loft'. The room was nicely appointed with lots of extra touches.",
    author: "dhw77",
    rating: 5,
    year: "2022"
  },
  {
    quote: "The converted residence offers four rooms and all the comforts and options you need and want.",
    author: "SouthAfricaSanta",
    rating: 5,
    year: "2019"
  }
];

export function BookingGallery({ 
  images, 
  categories = [], 
  className,
  showTestimonials = false 
}: BookingGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredImages = selectedCategory === "All" 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const allCategories = ["All", ...categories];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const getBookingUrl = (roomId: number) => {
    return `https://book.nightsbridge.com/00000?rtid=${roomId}`;
  };

  const handleBookNow = (roomId: number, suiteName: string) => {
    window.open(getBookingUrl(roomId), '_blank', 'noopener,noreferrer');
    
    // Track booking click for analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'booking_click', {
        event_category: 'conversion',
        event_label: suiteName,
        value: roomId
      });
    }
  };

  return (
    <div className={cn("space-y-6 sm:space-y-8", className)}>
      {/* Category Filter */}
      {categories.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 px-2 sm:px-4">
          {allCategories.map((category) => (
            <button
              key={category}
              className={cn(
                "px-3 py-2 sm:px-4 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200",
                "min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation",
                "text-center whitespace-nowrap",
                category === selectedCategory 
                  ? "bg-primary text-primary-foreground shadow-sm" 
                  : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground hover:shadow-sm"
              )}
              onClick={() => setSelectedCategory(category)}
              aria-label={`Filter by ${category}`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Gallery Grid - Masonry-style layout */}
      <div className="grid grid-cols-1 xxs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
        {filteredImages.map((image, index) => (
          <Card 
            key={index} 
            className={cn(
              "group overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 touch-manipulation",
              "hover:scale-[1.02] transform-gpu",
              // Vary heights for masonry effect
              index % 5 === 0 ? "row-span-2" : "",
              index % 7 === 0 ? "lg:col-span-2" : ""
            )}
            onClick={() => openLightbox(index)}
          >
            <div className="relative overflow-hidden">
              <picture>
                <source 
                  media="(max-width: 640px)" 
                  srcSet={`${image.src}?w=400&h=300&fit=crop&crop=center&q=85`}
                />
                <source 
                  media="(max-width: 1024px)" 
                  srcSet={`${image.src}?w=600&h=400&fit=crop&crop=center&q=85`}
                />
                <img
                  src={`${image.src}?w=800&h=600&fit=crop&crop=center&q=85`}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading={index < 6 ? "eager" : "lazy"}
                  decoding="async"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    const container = target.closest('.relative');
                    if (image.placeholder && container) {
                      // Replace with placeholder component
                      const placeholderHTML = `
                        <div class="bg-muted border-2 border-dashed border-muted-foreground/25 rounded-lg flex flex-col items-center justify-center text-center p-4 h-full min-h-[200px] w-full absolute inset-0">
                          <div class="text-4xl text-muted-foreground/50 mb-4">📷</div>
                          <div class="space-y-2">
                            <div class="font-medium text-sm text-muted-foreground">Image Placeholder</div>
                            <div class="text-xs text-muted-foreground/75 space-y-1">
                              <div><strong>File:</strong> ${image.placeholder.filename}</div>
                              <div><strong>Path:</strong> ${image.placeholder.folder}</div>
                              <div><strong>Size:</strong> ${image.placeholder.width}×${image.placeholder.height}px</div>
                            </div>
                          </div>
                        </div>
                      `;
                      container.innerHTML = placeholderHTML;
                    } else {
                      target.src = `https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop&crop=center&q=85`;
                    }
                  }}
                />
              </picture>
              
              {/* Overlay with enhanced interactions */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center space-y-2">
                  <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white min-h-[44px]">
                    <ZoomIn className="h-4 w-4 sm:mr-2" />
                    <span className="hidden sm:inline">View Full Size</span>
                  </Button>
                  
                  {/* Direct booking button for suite images */}
                  {image.roomId && (
                    <Button 
                      size="sm" 
                      className="bg-primary/90 hover:bg-primary min-h-[44px]"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBookNow(image.roomId!, image.suiteCode || 'Suite');
                      }}
                    >
                      <ExternalLink className="h-4 w-4 sm:mr-2" />
                      <span className="hidden sm:inline">Book This Room</span>
                      <span className="sm:hidden">Book</span>
                    </Button>
                  )}
                </div>
              </div>

              {/* Urgency messaging */}
              {image.urgencyMessage && (
                <div className="absolute top-2 left-2">
                  <Badge className="bg-green-500/90 text-white text-xs">
                    <Lightbulb className="h-3 w-3 mr-1" />
                    {image.urgencyMessage}
                  </Badge>
                </div>
              )}

              {/* Category badge */}
              {image.category && (
                <div className="absolute top-2 right-2">
                  <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm text-xs">
                    {image.category}
                  </Badge>
                </div>
              )}
              
              {/* Mobile tap indicator */}
              <div className="sm:hidden absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-black/20 rounded-full p-2 opacity-60">
                  <Eye className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>

            {/* Enhanced image info with booking CTAs */}
            <div className="p-3 sm:p-4">
              {image.title && (
                <h3 className="font-semibold text-sm sm:text-base mb-2 leading-tight">{image.title}</h3>
              )}
              
              {image.caption && (
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 leading-relaxed">
                  {image.caption}
                </p>
              )}
              
              {image.description && (
                <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed mb-3">
                  {image.description}
                </p>
              )}

              {/* Direct booking CTA for suites */}
              {image.roomId && (
                <div className="space-y-2">
                  <Button 
                    className="w-full min-h-[44px] text-xs sm:text-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBookNow(image.roomId!, image.suiteCode || 'Suite');
                    }}
                  >
                    Book {image.suiteCode} Direct
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Best rate guaranteed • Direct booking benefits
                  </p>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Social Proof Testimonials */}
      {showTestimonials && (
        <div className="bg-muted/30 rounded-lg p-4 sm:p-6 lg:p-8">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">What Our Guests Say</h2>
            <div className="mb-2">
              <span className="text-sm text-muted-foreground">Google Reviews</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                {...testimonial}
                className="hover:shadow-md transition-shadow duration-200"
              />
            ))}
          </div>
        </div>
      )}

      {/* No Results */}
      {filteredImages.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground fluid-text px-4 mb-4">No images found in this category.</p>
          <Button
            variant="ghost"
            onClick={() => setSelectedCategory("All")}
            className="min-h-[44px]"
          >
            View All Images
          </Button>
        </div>
      )}

      {/* Lightbox */}
      <Lightbox
        images={filteredImages}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        initialIndex={lightboxIndex}
      />
    </div>
  );
}