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
      case 2: return "grid-cols-1 md:grid-cols-2";
      case 3: return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
      case 4: return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
      default: return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
    }
  };

  return (
    <div className={cn("space-y-6", className)}>
      {/* Category Filter */}
      {showCategories && categories.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2">
          {allCategories.map((category) => (
            <Badge
              key={category}
              variant={category === selectedCategory ? "default" : "secondary"}
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      )}

      {/* Gallery Grid */}
      <div className={cn("grid gap-4", getGridCols())}>
        {filteredImages.map((image, index) => (
          <Card 
            key={index} 
            className="group overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
            onClick={() => openLightbox(index)}
          >
            <div className="relative aspect-square overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
                  <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                    <ZoomIn className="h-4 w-4 mr-1" />
                    View
                  </Button>
                </div>
              </div>

              {/* Category Badge */}
              {image.category && (
                <div className="absolute top-2 left-2">
                  <Badge variant="secondary" className="text-xs">
                    {image.category}
                  </Badge>
                </div>
              )}
            </div>

            {/* Image Info */}
            {(image.title || image.description) && (
              <div className="p-4">
                {image.title && (
                  <h3 className="font-medium text-sm mb-1">{image.title}</h3>
                )}
                {image.description && (
                  <p className="text-xs text-muted-foreground">{image.description}</p>
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