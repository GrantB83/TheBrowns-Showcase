import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  quote: string;
  author: string;
  rating: number;
  year?: string;
  className?: string;
}

export function TestimonialCard({ 
  quote, 
  author, 
  rating, 
  year,
  className 
}: TestimonialCardProps) {
  return (
    <Card className={className}>
      <CardContent className="p-4 sm:p-5">
        <div className="flex items-center mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating 
                  ? "text-secondary fill-secondary" 
                  : "text-muted-foreground"
              }`}
            />
          ))}
          <span className="ml-2 text-sm text-muted-foreground">
            {rating}/5
          </span>
        </div>
        
        <blockquote className="text-muted-foreground italic mb-3">
          "{quote}"
        </blockquote>
        
        <footer className="text-sm">
          <cite className="font-medium text-foreground">
            {author}
          </cite>
          {year && (
            <span className="text-muted-foreground ml-2">
              ({year})
            </span>
          )}
        </footer>
      </CardContent>
    </Card>
  );
}