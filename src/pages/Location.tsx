import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Fish, Mountain, Camera, Calendar, Utensils, Music } from "lucide-react";

const attractions = [
  { icon: Fish, title: "Fly-Fishing", description: "World-class trout fishing in pristine highland waters" },
  { icon: Mountain, title: "Hiking Trails", description: "Scenic nature trails with breathtaking mountain views" },
  { icon: Camera, title: "Birdwatching", description: "Spot diverse bird species in their natural habitat" },
  { icon: Calendar, title: "Seasonal Festivals", description: "Enjoy local events and cultural celebrations" },
  { icon: Utensils, title: "Fine Dining", description: "Acclaimed restaurants and local culinary experiences" },
  { icon: Music, title: "Whiskey Tastings", description: "Experience local distillery tours and tastings" }
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
                <p className="text-muted-foreground mb-4">Embedded Google Maps coming soon</p>
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
                <Card key={index}>
                  <CardHeader>
                    <attraction.icon className="h-8 w-8 text-primary mb-4" />
                    <CardTitle>{attraction.title}</CardTitle>
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