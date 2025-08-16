import { useState, useRef, useEffect, TouchEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Heart, Share } from "lucide-react";
import { cn } from "@/lib/utils";

interface SwipeableCardProps {
  children: React.ReactNode;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  className?: string;
}

export function SwipeableCard({ children, onSwipeLeft, onSwipeRight, className }: SwipeableCardProps) {
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    setCurrentX(e.touches[0].clientX - startX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    
    const threshold = 100;
    if (currentX > threshold && onSwipeRight) {
      onSwipeRight();
    } else if (currentX < -threshold && onSwipeLeft) {
      onSwipeLeft();
    }
    
    setCurrentX(0);
    setIsDragging(false);
  };

  return (
    <div
      ref={cardRef}
      className={cn("touch-pan-y", className)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        transform: isDragging ? `translateX(${currentX}px)` : 'translateX(0px)',
        transition: isDragging ? 'none' : 'transform 0.3s ease-out'
      }}
    >
      {children}
    </div>
  );
}

interface TouchOptimizedGalleryProps {
  images: string[];
  alt: string;
  className?: string;
}

export function TouchOptimizedGallery({ images, alt, className }: TouchOptimizedGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const minSwipeDistance = 50;

  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className={cn("relative overflow-hidden rounded-lg bg-muted", className)}>
      <div
        className="flex transition-transform duration-300 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={image}
              alt={`${alt} - Image ${index + 1}`}
              className="w-full h-64 object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop&crop=center';
              }}
            />
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-200",
              index === currentIndex 
                ? "bg-white scale-125" 
                : "bg-white/50"
            )}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* Navigation arrows for larger screens */}
      {images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white hidden sm:flex"
            onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white hidden sm:flex"
            onClick={() => setCurrentIndex(Math.min(images.length - 1, currentIndex + 1))}
            disabled={currentIndex === images.length - 1}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </>
      )}
    </div>
  );
}

interface MobileFriendlyActionsProps {
  onBookNow: () => void;
  onFavorite?: () => void;
  onShare?: () => void;
  isFavorited?: boolean;
  className?: string;
}

export function MobileFriendlyActions({ 
  onBookNow, 
  onFavorite, 
  onShare, 
  isFavorited = false,
  className 
}: MobileFriendlyActionsProps) {
  return (
    <div className={cn("flex gap-2", className)}>
      <Button 
        className="flex-1 min-h-[48px] text-base font-medium"
        onClick={onBookNow}
      >
        Book Now
      </Button>
      
      {onFavorite && (
        <Button
          variant="outline"
          size="icon"
          className="min-h-[48px] min-w-[48px]"
          onClick={onFavorite}
        >
          <Heart className={cn("h-5 w-5", isFavorited && "fill-current text-red-500")} />
        </Button>
      )}
      
      {onShare && (
        <Button
          variant="outline"
          size="icon"
          className="min-h-[48px] min-w-[48px]"
          onClick={onShare}
        >
          <Share className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
}

interface TouchTargetProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  minSize?: number;
}

export function TouchTarget({ children, onClick, className, minSize = 44 }: TouchTargetProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center transition-colors rounded-lg",
        "hover:bg-muted/50 active:bg-muted",
        className
      )}
      style={{ minWidth: `${minSize}px`, minHeight: `${minSize}px` }}
    >
      {children}
    </button>
  );
}

interface PullToRefreshProps {
  onRefresh: () => Promise<void>;
  children: React.ReactNode;
  threshold?: number;
  className?: string;
}

export function PullToRefresh({ 
  onRefresh, 
  children, 
  threshold = 80,
  className 
}: PullToRefreshProps) {
  const [pullDistance, setPullDistance] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [startY, setStartY] = useState(0);

  const handleTouchStart = (e: TouchEvent) => {
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: TouchEvent) => {
    const currentY = e.touches[0].clientY;
    const distance = currentY - startY;
    
    if (distance > 0 && window.scrollY === 0) {
      setPullDistance(Math.min(distance, threshold * 1.5));
      e.preventDefault();
    }
  };

  const handleTouchEnd = async () => {
    if (pullDistance >= threshold && !isRefreshing) {
      setIsRefreshing(true);
      try {
        await onRefresh();
      } finally {
        setIsRefreshing(false);
      }
    }
    setPullDistance(0);
  };

  const refreshProgress = Math.min(pullDistance / threshold, 1);
  const shouldTriggerRefresh = refreshProgress >= 1;

  return (
    <div 
      className={cn("relative", className)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {pullDistance > 0 && (
        <div 
          className="absolute top-0 left-0 right-0 flex items-center justify-center transition-all duration-200 bg-primary/10"
          style={{ 
            height: `${pullDistance}px`,
            transform: `translateY(-${threshold - pullDistance}px)`
          }}
        >
          <div 
            className={cn(
              "w-6 h-6 border-2 border-primary border-t-transparent rounded-full transition-all duration-200",
              (isRefreshing || shouldTriggerRefresh) && "animate-spin"
            )}
            style={{
              transform: `rotate(${refreshProgress * 360}deg)`,
              opacity: refreshProgress
            }}
          />
        </div>
      )}
      
      <div style={{ transform: `translateY(${Math.min(pullDistance, threshold)}px)` }}>
        {children}
      </div>
    </div>
  );
}