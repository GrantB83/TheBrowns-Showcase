import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Fish, Mountain, Camera, Calendar, Utensils, Music } from "lucide-react";

const attractions = [
  { 
    icon: Fish, 
    title: "World-Class Fly-Fishing", 
    description: "Experience premier trout fishing in pristine highland waters at Dullstroom Dam and surrounding streams. Perfect for both beginners and expert anglers.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
  },
  { 
    icon: Mountain, 
    title: "Highland Hiking Trails", 
    description: "Explore scenic nature trails with breathtaking mountain views, from gentle walks to challenging highland hikes through Mpumalanga's stunning landscapes.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&q=80"
  },
  { 
    icon: Camera, 
    title: "Birdwatching Paradise", 
    description: "Discover diverse bird species in their natural highland habitat. The area is renowned for its rich avian life and spectacular birdwatching opportunities.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80"
  },
  { 
    icon: Calendar, 
    title: "Seasonal Festivals & Events", 
    description: "Join local events and cultural celebrations throughout the year, including arts festivals, food markets, and traditional highland gatherings.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&q=80"
  },
  { 
    icon: Utensils, 
    title: "Fine Dining & Local Cuisine", 
    description: "Savor acclaimed restaurants and authentic local culinary experiences. From fine dining to traditional pub fare, all within walking distance.",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600&q=80"
  },
  { 
    icon: Music, 
    title: "Whiskey Tastings & Distilleries", 
    description: "Experience local distillery tours and premium whiskey tastings. Discover the craft of highland spirits in authentic Mpumalanga settings.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80"
  }
];

export default function Location() {
  return (
    <div className="min-h-screen">
      <section className="py-16 bg-gradient-to-br from-accent to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-primary mb-6">Location & Activities</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover Dullstroom's Highland Magic
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-primary mb-6">Perfect Location</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <strong className="text-foreground">279 Blue Crane Drive, Dullstroom 1110</strong>
                      <p>Walking distance to shops, restaurants, and the Dullstroom Dam</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-muted rounded-lg p-8 text-center">
                <h3 className="font-semibold mb-4">Interactive Map</h3>
                <p className="text-muted-foreground mb-4">Interactive map showing our location and nearby attractions</p>
                <Button variant="outline" asChild>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    View on Google Maps
                  </a>
                </Button>
              </div>
            </div>

            <h2 className="text-primary text-center mb-12">Dullstroom Activities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {attractions.map((attraction, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src={attraction.image}
                      alt={attraction.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-primary/10 p-2 rounded-lg">
                      <attraction.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{attraction.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{attraction.description}</p>
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