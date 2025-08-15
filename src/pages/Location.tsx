import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Fish, Mountain, Camera, Calendar, Utensils, Music } from "lucide-react";

const attractions = [
  { 
    icon: Fish, 
    title: "World-Class Fly-Fishing", 
    description: "Experience premier trout fishing in pristine highland waters at Dullstroom Dam and surrounding streams. Perfect for both beginners and expert anglers.",
    image: "/images/location/fly-fishing.jpg" // filename: fly-fishing.jpg, folder: /images/location/, dimensions: 600x400
  },
  { 
    icon: Mountain, 
    title: "Highland Hiking Trails", 
    description: "Explore scenic nature trails with breathtaking highland views, from gentle walks to challenging highland hikes through Mpumalanga's stunning landscapes.",
    image: "/images/location/highland-hiking.jpg" // filename: highland-hiking.jpg, folder: /images/location/, dimensions: 600x400
  },
  { 
    icon: Camera, 
    title: "Birdwatching Paradise", 
    description: "Discover diverse bird species in their natural highland habitat. The area is renowned for its rich avian life and spectacular birdwatching opportunities.",
    image: "/images/location/birdwatching.jpg" // filename: birdwatching.jpg, folder: /images/location/, dimensions: 600x400
  },
  { 
    icon: Calendar, 
    title: "Seasonal Festivals & Events", 
    description: "Join local events and cultural celebrations throughout the year, including arts festivals, food markets, and traditional highland gatherings.",
    image: "/images/location/seasonal-festivals.jpg" // filename: seasonal-festivals.jpg, folder: /images/location/, dimensions: 600x400
  },
  { 
    icon: Utensils, 
    title: "Fine Dining & Local Cuisine", 
    description: "Savor acclaimed restaurants and authentic local culinary experiences. From fine dining to traditional pub fare, all within walking distance.",
    image: "/images/location/fine-dining.jpg" // filename: fine-dining.jpg, folder: /images/location/, dimensions: 600x400
  },
  { 
    icon: Music, 
    title: "Whiskey Tastings & Distilleries", 
    description: "Experience local distillery tours and premium whiskey tastings. Discover the craft of highland spirits in authentic Mpumalanga settings.",
    image: "/images/location/whiskey-tastings.jpg" // filename: whiskey-tastings.jpg, folder: /images/location/, dimensions: 600x400
  }
];

export default function Location() {
  return (
    <div className="min-h-screen">
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-accent to-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-primary mb-4 sm:mb-6">Location & Activities</h1>
            <p className="text-fluid-lg sm:text-fluid-xl text-muted-foreground leading-relaxed max-w-none sm:max-w-3xl mx-auto">
              Discover Dullstroom's Highland Magic
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
              <div className="order-2 lg:order-1">
                <h2 className="text-primary mb-4 sm:mb-6">Perfect Location</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground text-fluid-base">279 Blue Crane Drive, Dullstroom 1110</strong>
                      <p className="text-fluid-base leading-relaxed">Walking distance to shops, restaurants, and the Dullstroom Dam</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-muted rounded-lg p-6 sm:p-8 text-center order-1 lg:order-2">
                <h3 className="font-semibold mb-4 text-fluid-lg">Interactive Map</h3>
                <p className="text-muted-foreground mb-4 sm:mb-6 text-fluid-base">Interactive map showing our location and nearby attractions</p>
                <Button variant="outline" asChild className="min-h-[48px] text-fluid-base">
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    View on Google Maps
                  </a>
                </Button>
              </div>
            </div>

            <h2 className="text-primary text-center mb-8 sm:mb-10 lg:mb-12">Dullstroom Activities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
              {attractions.map((attraction, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    <img
                      src={attraction.image}
                      alt={attraction.title}
                      className="w-full h-40 sm:h-48 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-primary/10 p-2 rounded-lg">
                      <attraction.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                  </div>
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="text-fluid-lg leading-tight">{attraction.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <p className="text-muted-foreground text-fluid-sm leading-relaxed">{attraction.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}