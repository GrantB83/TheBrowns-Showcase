import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lightbox } from "@/components/ui/lightbox";
import { ZoomIn, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
  category?: string;
  description?: string;
}

interface EnhancedGalleryProps {
  images: GalleryImage[];
  categories?: string[];
  className?: string;
  columns?: 2 | 3 | 4;
  showCategories?: boolean;
}

export function EnhancedGallery({ 
  images, 
  categories = [], 
  className,
  columns = 3,
  showCategories = true 
}: EnhancedGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredImages = selectedCategory === "All" 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const allCategories = ["All", ...categories];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const getGridCols = () => {
    switch (columns) {
      case 2: return "grid-cols-1 xxs:grid-cols-2";
      case 3: return "grid-cols-1 xxs:grid-cols-2 md:grid-cols-3";
      case 4: return "grid-cols-1 xxs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4";
      default: return "grid-cols-1 xxs:grid-cols-2 md:grid-cols-3";
    }
  };

  return (
    <div className={cn("space-y-4 sm:space-y-6", className)}>
      {/* Category Filter */}
      {showCategories && categories.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 px-2 sm:px-4">
          {allCategories.map((category) => (
            <button
              key={category}
              className={cn(
                "px-3 py-2 sm:px-4 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200",
                "min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation",
                "text-center whitespace-nowrap",
                category === selectedCategory 
                  ? "bg-primary text-primary-foreground shadow-sm" 
                  : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground hover:shadow-sm"
              )}
              onClick={() => setSelectedCategory(category)}
              aria-label={`Filter by ${category}`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Gallery Grid */}
      <div className={cn("grid gap-2 sm:gap-3 lg:gap-4", getGridCols())}>
        {filteredImages.map((image, index) => (
          <Card 
            key={`gallery-${image.src}-${image.title || 'untitled'}-${index}`}
            className="group overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 touch-manipulation"
            onClick={() => openLightbox(index)}
          >
            <div className="relative aspect-square overflow-hidden">
              <picture>
                <source 
                  media="(max-width: 640px)" 
                  srcSet={`${image.src}?w=400&h=400&fit=crop&crop=center`}
                />
                <source 
                  media="(max-width: 1024px)" 
                  srcSet={`${image.src}?w=600&h=600&fit=crop&crop=center`}
                />
                <img
                  src={`${image.src}?w=800&h=800&fit=crop&crop=center`}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300"
                  loading={index < 4 ? "eager" : "lazy"}
                  decoding="async"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop&crop=center`;
                  }}
                />
              </picture>
              
              {/* Overlay - Hidden on touch devices for better mobile experience */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center hidden sm:flex">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
                  <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white min-h-[44px] min-w-[44px]">
                    <ZoomIn className="h-4 w-4 sm:mr-1" />
                    <span className="hidden sm:inline">View</span>
                  </Button>
                </div>
              </div>

              {/* Category Badge - Responsive sizing */}
              {image.category && (
                <div className="absolute top-1.5 sm:top-2 left-1.5 sm:left-2">
                  <div className="bg-background/90 backdrop-blur-sm px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-xs font-medium leading-tight">
                    {image.category}
                  </div>
                </div>
              )}
              
              {/* Mobile tap indicator */}
              <div className="sm:hidden absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-black/20 rounded-full p-2">
                  <Eye className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>

            {/* Image Info - Responsive padding and text */}
            {(image.title || image.description) && (
              <div className="p-2 sm:p-3 lg:p-4">
                {image.title && (
                  <h3 className="font-medium text-xs sm:text-sm mb-1 line-clamp-1 leading-tight">{image.title}</h3>
                )}
                {image.description && (
                  <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">{image.description}</p>
                )}
              </div>
            )}
          </Card>
        ))}
      </div>

      {/* No Results */}
      {filteredImages.length === 0 && (
        <div className="text-center py-8 sm:py-12">
          <p className="text-muted-foreground fluid-text px-4">No images found in this category.</p>
          <Button
            variant="ghost"
            onClick={() => setSelectedCategory("All")}
            className="mt-3 sm:mt-4 min-h-[44px] min-w-[44px]"
          >
            View All Images
          </Button>
        </div>
      )}

      {/* Lightbox */}
      <Lightbox
        images={filteredImages}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        initialIndex={lightboxIndex}
      />
    </div>
  );
}