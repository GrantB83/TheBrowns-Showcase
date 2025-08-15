import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { usePerformance } from "@/hooks/use-performance";

interface OptimizedHeroImageProps {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export function OptimizedHeroImage({
  src,
  alt,
  title,
  subtitle,
  priority = false,
  className,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px",
  onLoad,
  onError
}: OptimizedHeroImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const { measureRender } = usePerformance();

  // Intersection observer for lazy loading
  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Generate responsive image sources
  const getOptimizedSrc = (originalSrc: string, width?: number) => {
    const extension = originalSrc.split('.').pop();
    const basePath = originalSrc.replace(`.${extension}`, '');
    
    if (width) {
      return `${basePath}-${width}w.webp`;
    }
    
    // Try WebP first, fallback to original
    return `${basePath}.webp`;
  };

  const generateSrcSet = (originalSrc: string) => {
    const widths = [400, 800, 1200, 1920];
    return widths
      .map(width => `${getOptimizedSrc(originalSrc, width)} ${width}w`)
      .join(', ');
  };

  const handleLoad = () => {
    const endMeasure = measureRender('hero-image');
    setIsLoaded(true);
    setHasError(false);
    onLoad?.();
    endMeasure();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    // Fallback to original image if WebP fails
    const img = e.currentTarget;
    if (img.src.includes('.webp')) {
      img.src = src;
    } else {
      handleError();
    }
  };

  if (!isInView) {
    return (
      <div 
        ref={imgRef}
        className={cn(
          "bg-muted animate-pulse aspect-[16/9] w-full",
          className
        )}
        aria-label={alt}
      />
    );
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Blur placeholder while loading */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
      
      {!hasError ? (
        <picture>
          <source
            srcSet={generateSrcSet(src)}
            sizes={sizes}
            type="image/webp"
          />
          <img
            ref={imgRef}
            src={priority ? getOptimizedSrc(src) : src}
            srcSet={generateSrcSet(src)}
            sizes={sizes}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            decoding={priority ? "sync" : "async"}
            fetchPriority={priority ? "high" : "auto"}
            className={cn(
              "w-full h-full object-cover transition-opacity duration-500",
              isLoaded ? "opacity-100" : "opacity-0"
            )}
            onLoad={handleLoad}
            onError={handleImageError}
          />
        </picture>
      ) : (
        <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
          <span className="text-sm">Image unavailable</span>
        </div>
      )}

      {/* Text overlay */}
      {(title || subtitle) && (
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white px-4">
            {title && (
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 drop-shadow-lg">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-sm sm:text-base md:text-lg lg:text-xl drop-shadow-md opacity-90">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}