import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { OptimizedHeroImage } from "./optimized-hero-image";
import { usePerformance } from "@/hooks/use-performance";

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

export function PerformanceEnhancedSlider({ 
  images, 
  className, 
  autoPlay = true, 
  autoPlayInterval = 5000,
  enableSwipe = true
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0]));
  const sliderRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  const { measureRender } = usePerformance();

  // Preload adjacent images
  useEffect(() => {
    const preloadNext = () => {
      const nextIndex = (currentIndex + 1) % images.length;
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      
      setLoadedImages(prev => new Set([...prev, nextIndex, prevIndex]));
    };

    const timer = setTimeout(preloadNext, 100);
    return () => clearTimeout(timer);
  }, [currentIndex, images.length]);

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
    const endMeasure = measureRender('slider-navigation');
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    endMeasure();
  }, [images.length, measureRender]);

  const goToNext = useCallback(() => {
    const endMeasure = measureRender('slider-navigation');
    setCurrentIndex((prev) => (prev + 1) % images.length);
    endMeasure();
  }, [images.length, measureRender]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    setLoadedImages(prev => new Set([...prev, index]));
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

  // Mouse handlers for desktop
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!enableSwipe) return;
    touchStartX.current = e.clientX;
    setIsAutoPlaying(false);
    setIsDragging(true);
  }, [enableSwipe]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!enableSwipe || !isDragging) return;
    touchEndX.current = e.clientX;
  }, [enableSwipe, isDragging]);

  const handleMouseUp = useCallback(() => {
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

  // Pause on hover
  const handleMouseEnter = useCallback(() => {
    setIsAutoPlaying(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (autoPlay && !isDragging) {
      setIsAutoPlaying(true);
    }
  }, [autoPlay, isDragging]);

  const handleImageLoad = useCallback((index: number) => {
    setLoadedImages(prev => new Set([...prev, index]));
  }, []);

  if (images.length === 0) {
    return (
      <div className={cn("bg-muted rounded-lg aspect-[16/9] flex items-center justify-center", className)}>
        <span className="text-muted-foreground">No images available</span>
      </div>
    );
  }

  return (
    <div 
      ref={sliderRef}
      className={cn("relative group overflow-hidden rounded-lg", className)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image container */}
      <div className="relative aspect-[16/9] overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-transform duration-500 ease-in-out",
              index === currentIndex ? "translate-x-0" : 
              index < currentIndex ? "-translate-x-full" : "translate-x-full"
            )}
            style={{ 
              transform: `translateX(${(index - currentIndex) * 100}%)`,
              willChange: 'transform'
            }}
          >
            {loadedImages.has(index) && (
              <OptimizedHeroImage
                src={image.src}
                alt={image.alt}
                title={image.title}
                subtitle={image.subtitle}
                priority={index === 0}
                className="w-full h-full"
                onLoad={() => handleImageLoad(index)}
              />
            )}
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white border-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"
            onClick={goToPrevious}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white border-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"
            onClick={goToNext}
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </>
      )}

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === currentIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
              )}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Mobile swipe hint */}
      {enableSwipe && images.length > 1 && (
        <div className="absolute bottom-4 right-4 text-white/75 text-xs bg-black/30 px-2 py-1 rounded backdrop-blur-sm lg:hidden">
          Swipe to navigate
        </div>
      )}
    </div>
  );
}