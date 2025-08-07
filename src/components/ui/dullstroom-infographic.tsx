import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Fish, TreePine, Camera, Mountain, Coffee, Heart, Share2 } from "lucide-react";

interface DullstroomPerk {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  highlight: string;
}

const dullstroomPerks: DullstroomPerk[] = [
  {
    icon: Fish,
    title: "World-Class Fly Fishing",
    description: "Premium trout fishing on crystal-clear highland streams",
    highlight: "30+ stocked dams nearby"
  },
  {
    icon: TreePine,
    title: "Panorama Route Gateway",
    description: "Access to God's Window, Blyde River Canyon, and more",
    highlight: "45 min to major attractions"
  },
  {
    icon: Camera,
    title: "Photography Paradise",
    description: "Misty mornings, golden sunsets, and mountain vistas",
    highlight: "Year-round scenic beauty"
  },
  {
    icon: Mountain,
    title: "Highland Adventures",
    description: "Hiking trails, mountain biking, and nature walks",
    highlight: "2000m+ elevation tranquility"
  },
  {
    icon: Coffee,
    title: "Artisanal Local Scene",
    description: "Boutique shops, craft breweries, and gourmet dining",
    highlight: "Walking distance exploration"
  },
  {
    icon: Heart,
    title: "Wellness Retreats",
    description: "Spa treatments and peaceful highland healing",
    highlight: "Ultimate relaxation destination"
  }
];

interface DullstroomInfographicProps {
  variant?: "horizontal" | "grid" | "carousel";
  showShareButton?: boolean;
  className?: string;
}

export function DullstroomInfographic({ 
  variant = "grid", 
  showShareButton = true,
  className = "" 
}: DullstroomInfographicProps) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Discover Dullstroom - Premium Highland Experience",
          text: "Explore world-class fly fishing, Panorama Route attractions, and luxury accommodation at The Browns Guest Suites",
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const gridLayout = variant === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" :
                    variant === "horizontal" ? "flex flex-col lg:flex-row gap-4 sm:gap-6" :
                    "flex overflow-x-auto gap-4 pb-4";

  return (
    <div className={`${className}`}>
      <div className="text-center mb-6 sm:mb-8">
        <h3 className="text-primary mb-3">Why Choose Dullstroom?</h3>
        <p className="text-fluid-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Discover the perfect blend of adventure and tranquility in South Africa's premier highland destination
        </p>
      </div>

      <div className={gridLayout}>
        {dullstroomPerks.map((perk, index) => (
          <Card 
            key={index} 
            className="group hover:shadow-lg transition-all duration-300 scroll-animate border-border/50 hover:border-primary/20"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="mb-4 relative">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-accent rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                  <perk.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
              </div>
              
              <h4 className="font-semibold mb-2 text-fluid-base group-hover:text-primary transition-colors duration-300">
                {perk.title}
              </h4>
              
              <p className="text-fluid-sm text-muted-foreground mb-3 leading-relaxed">
                {perk.description}
              </p>
              
              <div className="inline-flex items-center px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-xs font-medium">
                {perk.highlight}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {showShareButton && (
        <div className="text-center mt-6 sm:mt-8">
          <Button
            onClick={handleShare}
            variant="outline"
            size="sm"
            className="gap-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
          >
            <Share2 className="h-4 w-4" />
            Share Dullstroom Perks
          </Button>
        </div>
      )}
    </div>
  );
}