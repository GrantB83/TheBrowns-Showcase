import { ReviewPlatformCard } from "@/components/ui/review-platform-card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { BookingLogo, GoogleLogo, TripAdvisorLogo } from "@/components/ui/platform-logos";

interface ReviewPlatform {
  name: string;
  rating: number;
  maxRating: number;
  reviewCount: number;
  url: string;
  color: string;
  logo?: React.ComponentType<{ className?: string }>;
}

interface ReviewShowcaseProps {
  title?: string;
  subtitle?: string;
  platforms?: ReviewPlatform[];
  className?: string;
  compact?: boolean;
}

const defaultPlatforms: ReviewPlatform[] = [
  {
    name: 'Booking.com',
    rating: 8.8,
    maxRating: 10,
    reviewCount: 401,
    url: 'https://www.booking.com/reviews/za/hotel/the-browns-39-luxury-guest-suites.en-gb.html',
    color: '#003580',
    logo: BookingLogo
  },
  {
    name: 'Google',
    rating: 4.5,
    maxRating: 5,
    reviewCount: 71,
    url: 'https://share.google/n4MnPktc9SS66LfDN',
    color: '#4285F4',
    logo: GoogleLogo
  },
  {
    name: 'TripAdvisor',
    rating: 4.8,
    maxRating: 5,
    reviewCount: 28,
    url: 'https://www.tripadvisor.co.za/Hotel_Review-g472515-d14094529-Reviews-The_Browns_Luxury_Guest_Suites-Dullstroom_Mpumalanga.html',
    color: '#00AA6C',
    logo: TripAdvisorLogo
  }
];

export function ReviewShowcase({
  title = "Trusted by Hundreds of Guests",
  subtitle = "See what our guests are saying on the world's leading review platforms",
  platforms = defaultPlatforms,
  className,
  compact = false
}: ReviewShowcaseProps) {
  return (
    <section className={cn("py-8 sm:py-12", className)}>
      <div className="container mx-auto px-4">
        {!compact && (
          <div className="text-center mb-8 sm:mb-12">
            <Badge variant="secondary" className="mb-4">Social Proof</Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </div>
        )}
        
        <div className={cn(
          "grid gap-6",
          compact 
            ? "grid-cols-1 sm:grid-cols-3" 
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        )}>
          {platforms.map((platform) => (
            <ReviewPlatformCard
              key={platform.name}
              {...platform}
              className="h-full"
            />
          ))}
        </div>
        
        {!compact && (
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Click any review card to read detailed guest experiences
            </p>
          </div>
        )}
      </div>
    </section>
  );
}