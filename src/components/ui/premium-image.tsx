import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface PremiumImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  loading?: "lazy" | "eager";
  onLoad?: () => void;
  onError?: () => void;
}

export function PremiumImage({
  src,
  alt,
  className = "",
  width,
  height,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  objectFit = "cover",
  loading = "lazy",
  onLoad,
  onError
}: PremiumImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || !imgRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        rootMargin: "50px",
        threshold: 0.1 
      }
    );

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Generate WebP and fallback sources
  const getOptimizedSrc = (originalSrc: string, format: 'webp' | 'jpg' = 'jpg') => {
    if (originalSrc.includes('unsplash.com')) {
      const baseUrl = originalSrc.split('?')[0];
      const params = new URLSearchParams({
        auto: 'format',
        fit: 'crop',
        w: width?.toString() || '800',
        h: height?.toString() || '600',
        q: '80',
        fm: format
      });
      return `${baseUrl}?${params.toString()}`;
    }
    return originalSrc;
  };

  if (hasError) {
    return (
      <div 
        className={cn(
          "bg-muted flex items-center justify-center text-muted-foreground",
          className
        )}
        style={{ width, height }}
        role="img"
        aria-label={alt}
      >
        <div className="text-center p-4">
          <p className="text-sm">Image unavailable</p>
          <p className="text-xs opacity-70">{alt}</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={imgRef}
      className={cn(
        "relative overflow-hidden",
        !isLoaded && "lazy-placeholder",
        className
      )}
      style={{ width, height }}
    >
      {isInView && (
        <picture>
          <source 
            srcSet={getOptimizedSrc(src, 'webp')} 
            type="image/webp"
            sizes={sizes}
          />
          <img
            src={getOptimizedSrc(src)}
            alt={alt}
            width={width}
            height={height}
            loading={loading}
            onLoad={handleLoad}
            onError={handleError}
            className={cn(
              "w-full h-full transition-all duration-700",
              objectFit === "cover" && "object-cover",
              objectFit === "contain" && "object-contain",
              objectFit === "fill" && "object-fill",
              objectFit === "none" && "object-none",
              objectFit === "scale-down" && "object-scale-down",
              !isLoaded && "opacity-0 scale-110",
              isLoaded && "opacity-100 scale-100 image-reveal"
            )}
            style={{
              aspectRatio: width && height ? `${width}/${height}` : undefined
            }}
          />
        </picture>
      )}
    </div>
  );
}