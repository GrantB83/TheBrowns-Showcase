import { Star, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ReviewPlatformCardProps {
  name: string;
  rating: number;
  maxRating: number;
  reviewCount: number;
  url: string;
  color: string;
  className?: string;
}

export function ReviewPlatformCard({
  name,
  rating,
  maxRating,
  reviewCount,
  url,
  color,
  className
}: ReviewPlatformCardProps) {
  const isStarRating = maxRating === 5;
  const starCount = isStarRating ? Math.round(rating) : Math.round((rating / maxRating) * 5);
  
  return (
    <Card className={cn("group hover:shadow-lg transition-all duration-300 cursor-pointer", className)}>
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
        aria-label={`View ${reviewCount} reviews on ${name} where we have ${rating} out of ${maxRating} rating`}
      >
        <CardContent className="p-6 text-center">
          <div className="flex items-center justify-center mb-4">
            <div 
              className="px-3 py-1 rounded-full text-white text-sm font-medium"
              style={{ backgroundColor: color }}
            >
              {name}
            </div>
            <ExternalLink className="h-4 w-4 ml-2 text-muted-foreground group-hover:text-foreground transition-colors" />
          </div>
          
          <div className="mb-3">
            <div className="text-3xl font-bold text-foreground mb-1">
              {rating}
              <span className="text-lg text-muted-foreground">/{maxRating}</span>
            </div>
            
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-4 w-4",
                    i < starCount 
                      ? "text-secondary fill-secondary" 
                      : "text-muted-foreground"
                  )}
                />
              ))}
            </div>
          </div>
          
          <div className="text-sm text-muted-foreground">
            Based on <span className="font-medium text-foreground">{reviewCount}</span> reviews
          </div>
        </CardContent>
      </a>
    </Card>
  );
}