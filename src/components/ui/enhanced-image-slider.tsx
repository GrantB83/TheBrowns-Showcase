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

  // Generate optimized image sources
  const getOptimizedSrc = (originalSrc: string, format: 'avif' | 'webp' | 'jpg', size: string) => {
    // Check if this is a hero image that has optimized variants
    if (originalSrc.includes('/images/hero/')) {
      const basePath = originalSrc.replace('.jpg', '');
      return `/images/hero/optimized/${basePath.split('/').pop()}-${size}.${format}`;
    }
    
    // For other images, return original with optimization params
    if (originalSrc.startsWith('http')) {
      const params = new URLSearchParams({
        auto: 'format',
        fit: 'crop',
        w: size === 'mobile' ? '768' : size === 'tablet' ? '1200' : '1920',
        h: size === 'mobile' ? '461' : size === 'tablet' ? '720' : '1152',
        q: '80',
        fm: format
      });
      return `${originalSrc}?${params.toString()}`;
    }
    
    return originalSrc;
  };

  const generateSrcSet = (originalSrc: string, format: 'avif' | 'webp' | 'jpg') => {
    const sizes = [
      { name: 'mobile', width: 768 },
      { name: 'tablet', width: 1200 },
      { name: 'desktop', width: 1920 }
    ];
    
    return sizes
      .map(size => `${getOptimizedSrc(originalSrc, format, size.name)} ${size.width}w`)
      .join(', ');
  };

  if (images.length === 0) return null;

  return (
    <div 
      ref={sliderRef}
      className={cn("relative overflow-hidden swipe-container", className)}
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
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ 
          transform: `translateX(-${currentIndex * 100}%)`,
          cursor: isDragging ? 'grabbing' : 'grab'
        }}
      >
        {images.map((image, index) => (
          <div key={`${image.src}-${index}`} className="relative w-full h-full flex-shrink-0 mobile-select-none">
            <picture className="w-full h-full">
              {/* AVIF - Best compression for modern browsers */}
              <source 
                srcSet={generateSrcSet(image.src, 'avif')} 
                type="image/avif"
                media="(max-width: 768px)"
              />
              <source 
                srcSet={generateSrcSet(image.src, 'avif')} 
                type="image/avif"
                media="(min-width: 769px)"
              />
              {/* WebP - Good compression, wide support */}
              <source 
                srcSet={generateSrcSet(image.src, 'webp')} 
                type="image/webp"
                media="(max-width: 768px)"
              />
              <source 
                srcSet={generateSrcSet(image.src, 'webp')} 
                type="image/webp"
                media="(min-width: 769px)"
              />
              {/* Optimized JPEG fallback */}
              <img
                src={getOptimizedSrc(image.src, 'jpg', 'desktop')}
                srcSet={generateSrcSet(image.src, 'jpg')}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
                decoding={index === 0 ? "sync" : "async"}
                {...(index === 0 && { fetchpriority: "high" } as any)}
                draggable={false}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                width={1920}
                height={1152}
                style={{ aspectRatio: '16/9' }}
              />
            </picture>
            {(image.title || image.subtitle) && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center pointer-events-none">
                <div className="text-center text-white px-8 sm:px-12 lg:px-16 max-w-3xl mx-auto relative z-10">
                  {image.title && (
                    <h1 className="font-playfair font-bold mb-2 sm:mb-4 text-white drop-shadow-lg" 
                        style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)' }}>
                      {image.title}
                    </h1>
                  )}
                  {image.subtitle && (
                    <p className="leading-relaxed text-white/95 drop-shadow-md" 
                       style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1.25rem)' }}>
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
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/30 border-white/30 min-h-[48px] min-w-[48px] backdrop-blur-sm touch-feedback mobile-tap-highlight"
            onClick={goToPrevious}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5 text-white" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/30 border-white/30 min-h-[48px] min-w-[48px] backdrop-blur-sm touch-feedback mobile-tap-highlight"
            onClick={goToNext}
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5 text-white" />
          </Button>
        </>
      )}

    </div>
  );
}