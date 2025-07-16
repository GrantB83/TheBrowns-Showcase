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
      case 2: return "grid-cols-1 sm:grid-cols-2";
      case 3: return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
      case 4: return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4";
      default: return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    }
  };

  return (
    <div className={cn("space-y-6", className)}>
      {/* Category Filter */}
      {showCategories && categories.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 px-4">
          {allCategories.map((category) => (
            <button
              key={category}
              className={cn(
                "px-3 py-2 rounded-full text-sm font-medium transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center",
                category === selectedCategory 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
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
      <div className={cn("grid gap-3 sm:gap-4", getGridCols())}>
        {filteredImages.map((image, index) => (
          <Card 
            key={index} 
            className="group overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
            onClick={() => openLightbox(index)}
          >
            <div className="relative aspect-square overflow-hidden">
              <picture>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading={index < 6 ? "eager" : "lazy"}
                  onError={(e) => {
                    // Fallback placeholder
                    const target = e.target as HTMLImageElement;
                    target.src = `https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop&crop=center`;
                  }}
                />
              </picture>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
                  <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white min-h-[44px]">
                    <ZoomIn className="h-4 w-4 mr-1" />
                    View
                  </Button>
                </div>
              </div>

              {/* Category Badge */}
              {image.category && (
                <div className="absolute top-2 left-2">
                  <div className="bg-background/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium">
                    {image.category}
                  </div>
                </div>
              )}
            </div>

            {/* Image Info */}
            {(image.title || image.description) && (
              <div className="p-3 sm:p-4">
                {image.title && (
                  <h3 className="font-medium text-sm mb-1 line-clamp-1">{image.title}</h3>
                )}
                {image.description && (
                  <p className="text-xs text-muted-foreground line-clamp-2">{image.description}</p>
                )}
              </div>
            )}
          </Card>
        ))}
      </div>

      {/* No Results */}
      {filteredImages.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No images found in this category.</p>
          <Button
            variant="ghost"
            onClick={() => setSelectedCategory("All")}
            className="mt-2"
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