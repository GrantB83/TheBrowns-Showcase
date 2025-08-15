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
    <Card className={`${className} h-full flex flex-col hover:shadow-md transition-shadow duration-200`}>
      <CardContent className="p-4 sm:p-5 lg:p-6 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 sm:h-4 sm:w-4 ${
                  i < rating 
                    ? "text-secondary fill-secondary" 
                    : "text-muted-foreground"
                }`}
              />
            ))}
          </div>
          <span className="text-xs sm:text-sm text-muted-foreground font-medium">
            {rating}/5
          </span>
        </div>
        
        <blockquote className="text-sm sm:text-base text-muted-foreground italic mb-3 sm:mb-4 flex-1 leading-relaxed">
          "{quote}"
        </blockquote>
        
        <footer className="text-xs sm:text-sm mt-auto pt-2 border-t border-border/50">
          <cite className="font-medium text-foreground not-italic">
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