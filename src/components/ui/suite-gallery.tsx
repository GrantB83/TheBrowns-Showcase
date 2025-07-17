import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbox } from "@/components/ui/lightbox";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";

interface SuiteGalleryProps {
  suiteSlug: string;
  suiteName: string;
  className?: string;
}

// Suite slugs mapping
const SUITE_SLUGS = {
  'master-suite': 'Master Suite',
  'loft-suite': 'Loft Suite', 
  'garden-suite': 'Garden Suite',
  'cove-suite': 'Cove Suite',
  'robin-suite': 'Robin Suite',
  'blue-crane-suite': 'Blue Crane Suite',
  'falcon-suite': 'Falcon Suite'
} as const;

export function SuiteGallery({ suiteSlug, suiteName, className }: SuiteGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Generate image array based on naming convention
  const images = useMemo(() => {
    const imageArray = [];
    // Support up to 20 images per suite
    for (let i = 1; i <= 20; i++) {
      const paddedNumber = i.toString().padStart(2, '0');
      imageArray.push({
        src: `/images/suites/${suiteSlug}-${paddedNumber}.jpg`,
        alt: `${suiteName} - Image ${i}`,
        title: `${suiteName} View ${i}`,
        // Fallback to webp if jpg doesn't exist
        srcWebp: `/images/suites/${suiteSlug}-${paddedNumber}.webp`,
        // Fallback to png if jpg doesn't exist
        srcPng: `/images/suites/${suiteSlug}-${paddedNumber}.png`,
      });
    }
    return imageArray;
  }, [suiteSlug, suiteName]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  // Touch/swipe handlers for mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <div className={cn("space-y-6", className)}>
      {/* Mobile Carousel View */}
      <div className="block lg:hidden">
        <div 
          className="relative overflow-hidden rounded-lg aspect-[4/3]"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div 
            className="flex transition-transform duration-300 ease-in-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {images.map((image, index) => (
              <div 
                key={index}
                className="w-full flex-shrink-0 relative cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <picture>
                  <source srcSet={image.srcWebp} type="image/webp" />
                  <source srcSet={image.srcPng} type="image/png" />
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                    onError={(e) => {
                      // Fallback placeholder
                      const target = e.target as HTMLImageElement;
                      target.src = `https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop&crop=center`;
                    }}
                  />
                </picture>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <Button 
                    size="sm" 
                    variant="secondary" 
                    className="opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white/90 hover:bg-white"
                  >
                    <ZoomIn className="h-4 w-4 mr-1" />
                    View
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white min-h-[44px] min-w-[44px]"
            onClick={prevSlide}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white min-h-[44px] min-w-[44px]"
            onClick={nextSlide}
            aria-label="Next image"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Slide Indicators */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
            {images.slice(0, 8).map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-1 h-1 rounded-full transition-colors opacity-80",
                  index === currentSlide ? "bg-white" : "bg-white/50"
                )}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Grid View */}
      <div className="hidden lg:grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
        {images.slice(0, 12).map((image, index) => (
          <Card 
            key={index}
            className="group overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
            onClick={() => openLightbox(index)}
          >
            <div className="relative aspect-square overflow-hidden">
              <picture>
                <source srcSet={image.srcWebp} type="image/webp" />
                <source srcSet={image.srcPng} type="image/png" />
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading={index < 4 ? "eager" : "lazy"}
                  onError={(e) => {
                    // Fallback placeholder
                    const target = e.target as HTMLImageElement;
                    target.src = `https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop&crop=center`;
                  }}
                />
              </picture>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                    <ZoomIn className="h-4 w-4 mr-1" />
                    View
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Show More Button for Desktop */}
      {images.length > 12 && (
        <div className="hidden lg:flex justify-center">
          <Button
            variant="outline"
            onClick={() => openLightbox(0)}
            className="min-h-[44px]"
          >
            View All {images.length} Images
          </Button>
        </div>
      )}

      {/* Lightbox */}
      <Lightbox
        images={images}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        initialIndex={lightboxIndex}
      />
    </div>
  );
}