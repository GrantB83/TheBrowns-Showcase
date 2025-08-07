import { useState, useEffect, useRef, useCallback } from "react";
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
  enableSwipe?: boolean;
}

export function EnhancedImageSlider({ 
  images, 
  className, 
  autoPlay = true, 
  autoPlayInterval = 5000,
  enableSwipe = true
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);
  const sliderRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const [isDragging, setIsDragging] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, autoPlayInterval, images.length]);

  // Navigation functions
  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Touch/swipe handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!enableSwipe) return;
    touchStartX.current = e.touches[0].clientX;
    setIsAutoPlaying(false);
    setIsDragging(true);
  }, [enableSwipe]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!enableSwipe || !isDragging) return;
    touchEndX.current = e.touches[0].clientX;
  }, [enableSwipe, isDragging]);

  const handleTouchEnd = useCallback(() => {
    if (!enableSwipe || !isDragging) return;
    
    const touchDiff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(touchDiff) > minSwipeDistance) {
      if (touchDiff > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }

    setIsDragging(false);
    setTimeout(() => setIsAutoPlaying(autoPlay), 1000);
  }, [enableSwipe, isDragging, goToNext, goToPrevious, autoPlay]);

  // Mouse handlers for desktop drag support
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!enableSwipe) return;
    e.preventDefault();
    touchStartX.current = e.clientX;
    setIsAutoPlaying(false);
    setIsDragging(true);
  }, [enableSwipe]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!enableSwipe || !isDragging) return;
    touchEndX.current = e.clientX;
  }, [enableSwipe, isDragging]);

  const handleMouseUp = useCallback(() => {
    handleTouchEnd();
  }, [handleTouchEnd]);

  // Pause auto-play on hover
  const handleMouseEnter = useCallback(() => {
    setIsAutoPlaying(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!isDragging) {
      setIsAutoPlaying(autoPlay);
    }
  }, [autoPlay, isDragging]);

  if (images.length === 0) return null;

  return (
    <div 
      ref={sliderRef}
      className={cn("relative overflow-hidden rounded-lg swipe-container", className)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ touchAction: 'pan-y pinch-zoom' }}
    >
      {/* Images */}
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ 
          transform: `translateX(-${currentIndex * 100}%)`,
          cursor: isDragging ? 'grabbing' : 'grab'
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="relative w-full flex-shrink-0 mobile-select-none">
            <picture>
              <source 
                srcSet={`${image.src}?fm=webp&w=800&h=600&q=80`} 
                type="image/webp"
                media="(max-width: 768px)"
              />
              <source 
                srcSet={`${image.src}?fm=webp&w=1200&h=800&q=80`} 
                type="image/webp"
                media="(min-width: 769px)"
              />
              <img
                src={`${image.src}?w=1200&h=800&q=80`}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
                draggable={false}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
              />
            </picture>
            {(image.title || image.subtitle) && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                  {image.title && (
                    <h1 className="font-playfair font-bold mb-2 sm:mb-4 text-white drop-shadow-lg" 
                        style={{ fontSize: 'clamp(1.75rem, 6vw, 3.75rem)' }}>
                      {image.title}
                    </h1>
                  )}
                  {image.subtitle && (
                    <p className="leading-relaxed text-white/95 drop-shadow-md" 
                       style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)' }}>
                      {image.subtitle}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Enhanced for mobile */}
      {images.length > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background border-white/20 min-h-[48px] min-w-[48px] backdrop-blur-sm touch-feedback mobile-tap-highlight"
            onClick={goToPrevious}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background border-white/20 min-h-[48px] min-w-[48px] backdrop-blur-sm touch-feedback mobile-tap-highlight"
            onClick={goToNext}
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </Button>
        </>
      )}

      {/* Dots Indicator - Enhanced touch targets */}
      {images.length > 1 && (
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              className={cn(
                "rounded-full transition-all duration-300 touch-feedback mobile-tap-highlight",
                "min-h-[44px] min-w-[44px] flex items-center justify-center",
                "hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50",
                index === currentIndex
                  ? "bg-white shadow-lg"
                  : "bg-white/60 hover:bg-white/80"
              )}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1} of ${images.length}`}
              aria-current={index === currentIndex ? "true" : "false"}
            >
              <span 
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === currentIndex 
                    ? "bg-primary scale-110" 
                    : "bg-white/80"
                )}
              />
              <span className="sr-only">
                Slide {index + 1} {index === currentIndex ? "(current)" : ""}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Swipe indicator for mobile users */}
      {enableSwipe && images.length > 1 && (
        <div className="absolute top-4 right-4 sm:hidden">
          <div className="bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
            Swipe to navigate
          </div>
        </div>
      )}
    </div>
  );
}