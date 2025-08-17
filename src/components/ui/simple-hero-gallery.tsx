import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroImage {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
}

interface SimpleHeroGalleryProps {
  images: HeroImage[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

export function SimpleHeroGallery({ 
  images, 
  autoPlay = true, 
  autoPlayInterval = 6000,
  className = "" 
}: SimpleHeroGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  if (images.length === 0) return null;

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Images */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
            
            {/* Text Overlay */}
            {(image.title || image.subtitle) && (
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="text-center text-white px-4 max-w-4xl mx-auto">
                  {image.title && (
                    <h1 className="font-playfair font-bold mb-2 sm:mb-4 text-white drop-shadow-lg text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                      {image.title}
                    </h1>
                  )}
                  {image.subtitle && (
                    <p className="text-white/95 drop-shadow-md text-lg sm:text-xl md:text-2xl">
                      {image.subtitle}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-white/20 min-h-[48px] min-w-[48px] backdrop-blur-sm"
            onClick={goToPrevious}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5 text-gray-800" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-white/20 min-h-[48px] min-w-[48px] backdrop-blur-sm"
            onClick={goToNext}
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5 text-gray-800" />
          </Button>
        </>
      )}
    </div>
  );
}
