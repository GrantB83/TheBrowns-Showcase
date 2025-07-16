import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ImageSlider } from "@/components/ui/image-slider";
import { Users, Bed, Bath, Wifi, Coffee, Tv, Thermometer, Eye, CarFront } from "lucide-react";

interface SuiteDetailProps {
  title: string;
  capacity: string;
  bedConfig: string;
  description: string;
  images: Array<{
    src: string;
    alt: string;
  }>;
  amenities: string[];
  className?: string;
}

export function SuiteDetail({
  title,
  capacity,
  bedConfig,
  description,
  images,
  amenities,
  className
}: SuiteDetailProps) {
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

  return (
    <Card className={className}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Image Gallery */}
        <div className="relative">
          <ImageSlider 
            images={images}
            className="h-80 lg:h-full rounded-l-lg"
            autoPlay={false}
          />
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

            {/* Amenities Grid */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">Suite Amenities</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center text-sm text-muted-foreground">
                    {getAmenityIcon(amenity)}
                    <span className="ml-2">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Book Now Button */}
            <Button asChild size="lg" className="w-full">
              <a 
                href="https://book.nightsbridge.com/00000" 
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