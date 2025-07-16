import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LightboxProps {
  images: { src: string; alt: string; title?: string }[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

export function Lightbox({ images, isOpen, onClose, initialIndex = 0 }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isZoomed, setIsZoomed] = useState(false);
  
  // Touch handling for mobile swipe
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  const minSwipeDistance = 50;

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsZoomed(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsZoomed(false);
  };

  // Touch handlers
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

    if (isLeftSwipe && images.length > 1) {
      goToNext();
    } else if (isRightSwipe && images.length > 1) {
      goToPrevious();
    }
  };

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Close Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 text-white hover:bg-white/20 z-10 min-h-[44px] min-w-[44px]"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <X className="h-6 w-6" />
      </Button>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10 min-h-[44px] min-w-[44px]"
            onClick={goToPrevious}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10 min-h-[44px] min-w-[44px]"
            onClick={goToNext}
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
          </Button>
        </>
      )}

      {/* Zoom Button - Hidden on mobile to save space */}
      <Button
        variant="ghost"
        size="icon"
        className="hidden sm:flex absolute top-4 right-16 text-white hover:bg-white/20 z-10 min-h-[44px] min-w-[44px]"
        onClick={() => setIsZoomed(!isZoomed)}
        aria-label={isZoomed ? "Zoom out" : "Zoom in"}
      >
        {isZoomed ? <ZoomOut className="h-6 w-6" /> : <ZoomIn className="h-6 w-6" />}
      </Button>

      {/* Image Container */}
      <div 
        className="relative max-w-[90vw] max-h-[90vh] overflow-auto"
        onClick={() => setIsZoomed(!isZoomed)}
      >
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className={cn(
            "max-w-full max-h-full object-contain transition-transform duration-300 cursor-zoom-in",
            isZoomed && "scale-150 cursor-zoom-out"
          )}
        />
      </div>

      {/* Image Info */}
      {currentImage.title && (
        <div className="absolute bottom-4 left-4 right-4 text-center">
          <p className="text-white text-lg font-medium bg-black/50 px-4 py-2 rounded-lg inline-block">
            {currentImage.title}
          </p>
        </div>
      )}

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="absolute top-4 left-4 text-white bg-black/50 px-3 py-1 rounded-lg">
          {currentIndex + 1} / {images.length}
        </div>
      )}

      {/* Thumbnail Strip - Hidden on mobile to save space */}
      {images.length > 1 && (
        <div className="hidden sm:flex absolute bottom-4 left-1/2 -translate-x-1/2 space-x-2 bg-black/50 p-2 rounded-lg max-w-[80vw] overflow-x-auto">
          {images.map((image, index) => (
            <button
              key={index}
              className={cn(
                "flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded border-2 overflow-hidden transition-opacity min-h-[44px] min-w-[44px]",
                index === currentIndex ? "border-primary opacity-100" : "border-transparent opacity-60 hover:opacity-80"
              )}
              onClick={() => {
                setCurrentIndex(index);
                setIsZoomed(false);
              }}
              aria-label={`View image ${index + 1}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
      
      {/* Mobile swipe indicator */}
      {images.length > 1 && (
        <div className="sm:hidden absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-3 py-1 rounded-lg text-sm">
          Swipe left/right to navigate
        </div>
      )}
    </div>
  );
}