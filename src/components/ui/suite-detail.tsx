import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ImageSlider } from "@/components/ui/image-slider";
import { Users, Bed, Bath, Wifi, Coffee, Tv, Thermometer, Eye, CarFront } from "lucide-react";
import { useMemo, useState, useEffect, useCallback } from "react";

interface SuiteDetailProps {
  title: string;
  capacity: string;
  bedConfig: string;
  description: string;
  slug: string;
  mainAmenities?: Array<{ text: string; emoji: string }>;
  additionalAmenities?: string[];
  className?: string;
}

// Global cache for detected images to avoid re-checking
const imageCache = new Map<string, Array<{src: string, alt: string}>>();

// Optimized image detection with parallel checking
const detectSuiteImages = async (slug: string, title: string): Promise<Array<{src: string, alt: string}>> => {
  // Check cache first
  const cacheKey = `${slug}-${title}`;
  if (imageCache.has(cacheKey)) {
    return imageCache.get(cacheKey)!;
  }

  const images: Array<{src: string, alt: string}> = [];
  
  // Use a more efficient approach: check in batches
  const batchSize = 5;
  const maxImages = 20; // Reasonable limit
  
  for (let batch = 0; batch < maxImages / batchSize; batch++) {
    const batchPromises = [];
    
    for (let i = 0; i < batchSize; i++) {
      const imageNumber = batch * batchSize + i + 1;
      const paddedNumber = imageNumber.toString().padStart(2, '0');
      const imageSrc = `/images/suites/${slug}-${paddedNumber}.jpg`;
      
      const promise = new Promise<{src: string, alt: string} | null>((resolve) => {
        const img = new Image();
        const timeout = setTimeout(() => {
          resolve(null);
        }, 2000); // Reduced timeout for faster detection
        
        img.onload = () => {
          clearTimeout(timeout);
          resolve({
            src: imageSrc,
            alt: `${title} - Image ${imageNumber}`,
          });
        };
        
        img.onerror = () => {
          clearTimeout(timeout);
          resolve(null);
        };
        
        img.src = imageSrc;
      });
      
      batchPromises.push(promise);
    }
    
    // Wait for batch to complete
    const batchResults = await Promise.all(batchPromises);
    const validImages = batchResults.filter(img => img !== null) as Array<{src: string, alt: string}>;
    
    // If no images found in this batch, stop checking
    if (validImages.length === 0) {
      break;
    }
    
    images.push(...validImages);
  }
  
  // Cache the results
  imageCache.set(cacheKey, images);
  return images;
};

export function SuiteDetail({
  title,
  capacity,
  bedConfig,
  description,
  slug,
  mainAmenities,
  additionalAmenities,
  className
}: SuiteDetailProps) {
  const [availableImages, setAvailableImages] = useState<Array<{src: string, alt: string}>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Memoized image detection
  const loadImages = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const images = await detectSuiteImages(slug, title);
      setAvailableImages(images);
    } catch (err) {
      setError('Failed to load images');
      if (process.env.NODE_ENV === 'development') {
        console.error('Image detection error:', err);
      }
    } finally {
      setIsLoading(false);
    }
  }, [slug, title]);

  useEffect(() => {
    loadImages();
  }, [loadImages]);

  const getAmenityIcon = (amenity: string) => {
    const lower = amenity.toLowerCase();
    if (lower.includes('wifi')) return <Wifi className="h-4 w-4" />;
    if (lower.includes('coffee') || lower.includes('nespresso')) return <Coffee className="h-4 w-4" />;
    if (lower.includes('tv') || lower.includes('netflix')) return <Tv className="h-4 w-4" />;
    if (lower.includes('bathroom') || lower.includes('ensuite') || lower.includes('vanity')) return <Bath className="h-4 w-4" />;
    if (lower.includes('heating') || lower.includes('underfloor')) return <Thermometer className="h-4 w-4" />;
    if (lower.includes('view') || lower.includes('garden')) return <Eye className="h-4 w-4" />;
    if (lower.includes('parking')) return <CarFront className="h-4 w-4" />;
    return null;
  };

  // Clear cache when component unmounts (optional, for memory management)
  useEffect(() => {
    return () => {
      // Optionally clear cache after some time to allow for image updates
      setTimeout(() => {
        imageCache.delete(`${slug}-${title}`);
      }, 300000); // Clear after 5 minutes
    };
  }, [slug, title]);

  return (
    <Card className={className}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Image Gallery */}
        <div className="relative flex items-center min-h-[400px] lg:min-h-full">
          {isLoading ? (
            <div className="w-full h-80 lg:h-96 bg-muted rounded-l-lg flex items-center justify-center">
              <div className="flex flex-col items-center space-y-2">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                <div className="text-muted-foreground text-sm">Loading gallery...</div>
              </div>
            </div>
          ) : error ? (
            <div className="w-full h-80 lg:h-96 bg-muted rounded-l-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-muted-foreground mb-2">{error}</div>
                <Button variant="outline" size="sm" onClick={loadImages}>
                  Retry
                </Button>
              </div>
            </div>
          ) : availableImages.length > 0 ? (
            <ImageSlider 
              images={availableImages}
              className="h-80 lg:h-96 w-full rounded-l-lg"
              autoPlay={false}
            />
          ) : (
            <div className="w-full h-80 lg:h-96 bg-muted rounded-l-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-muted-foreground mb-2">No images available</div>
                <Button variant="outline" size="sm" onClick={loadImages}>
                  Refresh
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Suite Details */}
        <div className="p-6 space-y-6">
          <CardHeader className="p-0">
            <div className="flex items-start justify-between mb-4">
              <CardTitle className="text-2xl text-primary">{title}</CardTitle>
              <Badge variant="secondary" className="text-sm font-medium">
                <Users className="h-3 w-3 mr-1" />
                {capacity}
              </Badge>
            </div>
            <div className="flex items-center text-muted-foreground mb-4">
              <Bed className="h-4 w-4 mr-2" />
              <strong className="text-foreground">{bedConfig}</strong>
            </div>
          </CardHeader>

          <CardContent className="p-0 space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>

            {/* Amenities */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">Suite Amenities</h4>
              
              {/* Main amenities with emojis */}
              <div className="grid grid-cols-1 gap-3 mb-4">
                {(mainAmenities || []).map((amenity, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <span className="text-lg mr-3" role="img" aria-label={amenity.text}>
                      {amenity.emoji}
                    </span>
                    <span>{amenity.text}</span>
                  </div>
                ))}
              </div>
              
              {/* Additional amenities */}
              {additionalAmenities && additionalAmenities.length > 0 && (
                <div className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Additional amenities: </strong>
                  {additionalAmenities.join(", ")}.
                </div>
              )}
            </div>

            {/* Book Now Button */}
            <Button asChild size="lg" className="w-full">
              <a 
                                  href="https://book.nightsbridge.com/00000?promocode=PUBLICDEMO" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Book {title} Now
              </a>
            </Button>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}