import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ImageSliderProps {
  images: {
    src: string;
    alt: string;
    title?: string;
    subtitle?: string;
  }[];
  className?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export function ImageSlider({ 
  images, 
  className, 
  autoPlay = true, 
  autoPlayInterval = 5000 
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (images.length === 0) return null;

  return (
    <div className={cn("relative overflow-hidden rounded-lg", className)}>
      {/* Images */}
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={`slider-${image.src}-${image.title || 'slide'}-${index}`} className="relative w-full flex-shrink-0">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
            {(image.title || image.subtitle) && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                  {image.title && (
                    <h1 className="font-playfair font-bold mb-2 sm:mb-4" style={{ fontSize: 'clamp(1.75rem, 6vw, 3.75rem)' }}>
                      {image.title}
                    </h1>
                  )}
                  {image.subtitle && (
                    <p className="leading-relaxed" style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)' }}>
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
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 min-h-[44px] min-w-[44px] backdrop-blur-sm"
            onClick={goToPrevious}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 min-h-[44px] min-w-[44px] backdrop-blur-sm"
            onClick={goToNext}
            aria-label="Next image"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </>
      )}

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1.5 sm:space-x-2">
          {images.map((image, index) => (
            <button
              key={`dot-${image.src}-${index}`}
              className={cn(
                "w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-colors min-h-[32px] min-w-[32px] flex items-center justify-center",
                index === currentIndex
                  ? "bg-primary"
                  : "bg-white/50 hover:bg-white/70"
              )}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              <span className="sr-only">Slide {index + 1}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}