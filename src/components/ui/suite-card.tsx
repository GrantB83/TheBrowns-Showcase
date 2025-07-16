import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Bed, Bath, Wifi, Coffee, Tv } from "lucide-react";

interface SuiteCardProps {
  title: string;
  description: string;
  capacity: string;
  bedConfig: string;
  image: string;
  amenities: string[];
  price?: string;
  className?: string;
}

export function SuiteCard({
  title,
  description,
  capacity,
  bedConfig,
  image,
  amenities,
  price,
  className
}: SuiteCardProps) {
  const getAmenityIcon = (amenity: string) => {
    if (amenity.toLowerCase().includes('wifi')) return <Wifi className="h-4 w-4" />;
    if (amenity.toLowerCase().includes('coffee') || amenity.toLowerCase().includes('nespresso')) return <Coffee className="h-4 w-4" />;
    if (amenity.toLowerCase().includes('tv') || amenity.toLowerCase().includes('netflix')) return <Tv className="h-4 w-4" />;
    if (amenity.toLowerCase().includes('bathroom') || amenity.toLowerCase().includes('ensuite')) return <Bath className="h-4 w-4" />;
    return null;
  };

  return (
    <Card className={className}>
      <div className="relative">
        <img
          src={image}
          alt={`${title} interior at The Browns luxury accommodation in Dullstroom`}
          className="w-full h-64 object-cover rounded-t-lg"
        />
        {price && (
          <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
            {price}
          </Badge>
        )}
      </div>
      
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {title}
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="h-4 w-4 mr-1" />
            {capacity}
          </div>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center text-sm text-muted-foreground">
          <Bed className="h-4 w-4 mr-2" />
          <strong>{bedConfig}</strong>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-sm">Key Amenities</h4>
          <div className="grid grid-cols-2 gap-2">
            {amenities.slice(0, 6).map((amenity, index) => (
              <div key={index} className="flex items-center text-xs text-muted-foreground">
                {getAmenityIcon(amenity)}
                <span className="ml-1">{amenity}</span>
              </div>
            ))}
          </div>
          {amenities.length > 6 && (
            <p className="text-xs text-muted-foreground">
              +{amenities.length - 6} more amenities
            </p>
          )}
        </div>
      </CardContent>

      <CardFooter>
        <Button asChild className="w-full">
          <a 
            href="https://book.nightsbridge.com/00000" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Book Now
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}