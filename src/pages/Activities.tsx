import { SEO } from "@/components/ui/seo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Fish, TreePine, Camera, MapPin, Clock, Car } from "lucide-react";
import { Link } from "react-router-dom";

const activities = [
  {
    id: "fly-fishing",
    title: "World-Class Fly Fishing",
    description: "Dullstroom is renowned as South Africa's premier trout fishing destination with pristine highland streams.",
    icon: Fish,
    duration: "Half/Full Day",
    season: "Year Round",
    difficulty: "All Levels",
    highlights: ["Brown & Rainbow Trout", "Guided Excursions", "Equipment Rental"],
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "panorama-route",
    title: "Panorama Route Day Trips",
    description: "Explore the breathtaking Blyde River Canyon, God's Window, and Bourke's Luck Potholes.",
    icon: Camera,
    duration: "Full Day",
    season: "Year Round",
    difficulty: "Easy",
    highlights: ["God's Window Views", "Three Rondavels", "Bourke's Luck Potholes"],
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "highland-spa",
    title: "Highland Spa Retreats",
    description: "Rejuvenate with luxury spa treatments in the serene Dullstroom highlands atmosphere.",
    icon: TreePine,
    duration: "2-4 Hours",
    season: "Year Round",
    difficulty: "Relaxation",
    highlights: ["Mountain Views", "Holistic Treatments", "Couples Packages"],
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "scenic-drives",
    title: "Scenic Highland Drives",
    description: "Discover hidden gems along winding mountain roads through misty highlands and rolling farmlands.",
    icon: Car,
    duration: "2-6 Hours",
    season: "Year Round", 
    difficulty: "Easy",
    highlights: ["Mountain Passes", "Wildlife Viewing", "Photography Stops"],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80"
  }
];

const nearbyAttractions = [
  { name: "Blyde River Canyon", distance: "45 min", type: "Natural Wonder" },
  { name: "God's Window", distance: "50 min", type: "Scenic Viewpoint" },
  { name: "Pilgrim's Rest", distance: "60 min", type: "Historic Gold Town" },
  { name: "Kruger National Park", distance: "90 min", type: "Wildlife Safari" }
];

export default function Activities() {
  return (
    <>
      <SEO
        title="Dullstroom Activities & Panorama Route Tours - The Browns"
        description="Discover world-class fly fishing, Panorama Route day trips, luxury spa retreats, and highland adventures from The Browns Luxury Guest Suites in Dullstroom."
        keywords="Dullstroom activities, fly fishing Dullstroom, Panorama Route tours, God's Window, Blyde River Canyon, highland spa retreats, Mpumalanga adventures"
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-primary/10 to-background py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">Dullstroom Adventures</Badge>
              <h1 className="mb-6 text-foreground">
                Unforgettable Highland Experiences
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                From world-renowned fly fishing to breathtaking Panorama Route tours, discover the magic of Dullstroom and the Mpumalanga highlands.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/contact">Plan Your Adventure</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/accommodations">View Our Suites</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Activities */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="mb-4">Featured Activities</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Immerse yourself in the natural beauty and adventure opportunities that make Dullstroom a premier highland destination.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {activities.map((activity) => (
                <Card key={activity.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={activity.image} 
                      alt={activity.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">{activity.season}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <activity.icon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-xl">{activity.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {activity.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{activity.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{activity.difficulty}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Highlights:</h4>
                      <div className="flex flex-wrap gap-2">
                        {activity.highlights.map((highlight) => (
                          <Badge key={highlight} variant="outline" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Nearby Attractions */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="mb-4">Explore the Panorama Route</h2>
                <p className="text-lg text-muted-foreground">
                  Venture beyond Dullstroom to discover some of South Africa's most spectacular natural wonders.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {nearbyAttractions.map((attraction) => (
                  <Card key={attraction.name} className="text-center">
                    <CardHeader>
                      <CardTitle className="text-lg">{attraction.name}</CardTitle>
                      <CardDescription>{attraction.type}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-center gap-2 text-primary font-medium">
                        <Car className="h-4 w-4" />
                        <span>{attraction.distance}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-6">Ready to Experience Dullstroom?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let us help you plan the perfect highland getaway with luxury accommodation and unforgettable experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <a href="https://book.nightsbridge.com/00000" target="_blank" rel="noopener noreferrer">
                    Book Your Stay
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Contact Our Concierge</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}