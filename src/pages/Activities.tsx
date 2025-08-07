import { SEO } from "@/components/ui/seo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InteractiveMap } from "@/components/ui/interactive-map";
import { 
  Fish, 
  TreePine, 
  Camera, 
  MapPin, 
  Clock, 
  Car, 
  Wine, 
  Palette, 
  Mountain, 
  Users,
  ExternalLink,
  Star,
  Gift,
  Utensils
} from "lucide-react";
import { Link } from "react-router-dom";

interface Activity {
  id: string;
  title: string;
  description: string;
  icon: any;
  duration: string;
  season: string;
  difficulty: string;
  highlights: string[];
  suitableFor: string[];
  recommendedSuite: string;
  suiteLink: string;
  tips: string[];
  image: string;
  price?: string;
}

const activities: Activity[] = [
  {
    id: "fly-fishing",
    title: "World-Class Fly Fishing",
    description: "Dullstroom is renowned as South Africa's premier trout fishing destination with pristine highland streams and professional guide services.",
    icon: Fish,
    duration: "Half/Full Day",
    season: "Year Round (Best: Oct-Mar)",
    difficulty: "All Levels",
    highlights: ["Brown & Rainbow Trout", "Guided Excursions", "Equipment Rental", "Professional Instruction"],
    suitableFor: ["Couples", "Solo Travelers", "Groups"],
    recommendedSuite: "Garden Suite",
    suiteLink: "/accommodations#garden-suite",
    tips: [
      "Book morning sessions for best results (6-10am)",
      "Pack warm layers - highland weather changes quickly",
      "Consider hiring a local guide for best spots",
      "Bring a camera for scenic stream photography"
    ],
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5d?auto=format&fit=crop&w=800&q=80",
    price: "From R800/day with guide"
  },
  {
    id: "panorama-route",
    title: "Panorama Route Day Trips",
    description: "Explore the breathtaking Blyde River Canyon, God's Window, and Bourke's Luck Potholes - some of South Africa's most spectacular natural wonders.",
    icon: Camera,
    duration: "Full Day (8-10 hours)",
    season: "Year Round (Clear days best)",
    difficulty: "Easy to Moderate",
    highlights: ["God's Window Views", "Three Rondavels", "Bourke's Luck Potholes", "Graskop Gorge"],
    suitableFor: ["Families", "Photography Enthusiasts", "Nature Lovers"],
    recommendedSuite: "Loft Family Suite",
    suiteLink: "/accommodations#loft-suite",
    tips: [
      "Start early (7am) to avoid crowds and heat",
      "Pack snacks and water for the journey",
      "Check weather - misty days limit visibility",
      "Allow extra time for photo stops"
    ],
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?auto=format&fit=crop&w=800&q=80",
    price: "Self-drive or guided tours from R1,200"
  },
  {
    id: "highland-spa",
    title: "Highland Spa & Wellness",
    description: "Rejuvenate with luxury spa treatments featuring mountain views, holistic therapies, and couples packages in the serene Dullstroom atmosphere.",
    icon: TreePine,
    duration: "2-4 Hours",
    season: "Year Round",
    difficulty: "Pure Relaxation",
    highlights: ["Mountain Views", "Holistic Treatments", "Couples Packages", "Highland Tranquility"],
    suitableFor: ["Couples", "Solo Wellness", "Groups"],
    recommendedSuite: "Master Suite",
    suiteLink: "/accommodations#master-suite",
    tips: [
      "Book spa treatments in advance",
      "Arrive 30 minutes early to relax",
      "Try signature highland stone therapy",
      "Combine with romantic dinner packages"
    ],
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    price: "Treatments from R450"
  },
  {
    id: "whisky-tasting",
    title: "Whisky & Wine Tasting",
    description: "Sample premium South African whiskies and wines at local distilleries and estates, including exclusive highland varieties unique to the region.",
    icon: Wine,
    duration: "2-3 Hours",
    season: "Year Round",
    difficulty: "Easy & Enjoyable",
    highlights: ["Local Distilleries", "Wine Estates", "Whisky Education", "Highland Varietals"],
    suitableFor: ["Adults", "Connoisseurs", "Social Groups"],
    recommendedSuite: "Blue Crane Suite",
    suiteLink: "/accommodations#blue-crane-suite",
    tips: [
      "Designate a driver or use shuttle services",
      "Book tastings ahead during peak season",
      "Ask about food pairing options",
      "Purchase bottles as memorable souvenirs"
    ],
    image: "https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&w=800&q=80",
    price: "Tastings from R150/person"
  },
  {
    id: "art-galleries",
    title: "Art Galleries & Studios",
    description: "Discover Dullstroom's vibrant arts scene with local galleries, artist studios, and craft shops showcasing highland-inspired works and traditional crafts.",
    icon: Palette,
    duration: "1-3 Hours",
    season: "Year Round",
    difficulty: "Leisurely",
    highlights: ["Local Artists", "Highland Art", "Craft Workshops", "Unique Souvenirs"],
    suitableFor: ["Art Lovers", "Families", "Cultural Enthusiasts"],
    recommendedSuite: "Robin Suite",
    suiteLink: "/accommodations#robin-suite",
    tips: [
      "Visit during weekend art walks",
      "Support local artists with purchases",
      "Ask about artist meet-and-greets",
      "Combine with coffee shop visits"
    ],
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80",
    price: "Gallery entry usually free"
  },
  {
    id: "highland-hiking",
    title: "Highland Hiking Trails",
    description: "Explore pristine mountain trails with varying difficulty levels, from gentle walks to challenging summit hikes with spectacular highland views.",
    icon: Mountain,
    duration: "2-8 Hours",
    season: "Year Round (Summer best)",
    difficulty: "Easy to Challenging",
    highlights: ["Mountain Views", "Wildlife Spotting", "Photography", "Highland Flora"],
    suitableFor: ["Active Travelers", "Nature Lovers", "Adventure Seekers"],
    recommendedSuite: "Garden Family Suite",
    suiteLink: "/accommodations#garden-family-suite",
    tips: [
      "Wear appropriate hiking boots",
      "Pack layers for changing weather",
      "Carry plenty of water and snacks",
      "Inform someone of your hiking plans"
    ],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    price: "Self-guided trails free"
  },
  {
    id: "cheese-factories",
    title: "Artisanal Cheese & Food Tours",
    description: "Visit local cheese factories, farms, and artisanal food producers to taste highland specialties and learn about traditional production methods.",
    icon: Utensils,
    duration: "2-4 Hours",
    season: "Year Round",
    difficulty: "Delicious",
    highlights: ["Cheese Tastings", "Farm Tours", "Local Produce", "Highland Specialties"],
    suitableFor: ["Foodies", "Families", "Groups"],
    recommendedSuite: "Self Catering House",
    suiteLink: "/accommodations#self-catering-house",
    tips: [
      "Book tours in advance",
      "Come hungry for tastings",
      "Ask about take-home packages",
      "Learn about cheese-making process"
    ],
    image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=800&q=80",
    price: "Tours from R200/person"
  },
  {
    id: "golf",
    title: "Highland Golf Courses",
    description: "Play championship golf on pristine highland courses with stunning mountain backdrops, challenging layouts, and excellent clubhouse facilities.",
    icon: Users,
    duration: "4-5 Hours",
    season: "Year Round",
    difficulty: "All Handicaps",
    highlights: ["Championship Courses", "Mountain Views", "Clubhouse Dining", "Golf Pro Services"],
    suitableFor: ["Golf Enthusiasts", "Corporate Groups", "Couples"],
    recommendedSuite: "Falcon Suite",
    suiteLink: "/accommodations#falcon-suite",
    tips: [
      "Book tee times well in advance",
      "Pack warm clothes for early rounds",
      "Rent clubs if traveling light",
      "Enjoy post-game dining at clubhouse"
    ],
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034d?auto=format&fit=crop&w=800&q=80",
    price: "Green fees from R450"
  }
];

const seasonalGuide = [
  {
    season: "Spring (Sep-Nov)",
    weather: "Mild days, cool nights (10-22°C)",
    bestFor: ["Fly fishing", "Hiking", "Photography"],
    packingTips: "Layers, rain jacket, comfortable walking shoes"
  },
  {
    season: "Summer (Dec-Feb)",
    weather: "Warm days, afternoon thunderstorms (15-28°C)",
    bestFor: ["All outdoor activities", "Swimming", "Long hiking"],
    packingTips: "Sun protection, light layers, umbrella"
  },
  {
    season: "Autumn (Mar-May)",
    weather: "Perfect temperatures, clear skies (8-24°C)",
    bestFor: ["Photography", "Wine tasting", "Scenic drives"],
    packingTips: "Light jacket, comfortable shoes, camera"
  },
  {
    season: "Winter (Jun-Aug)",
    weather: "Cold mornings, sunny days (2-18°C)",
    bestFor: ["Spa treatments", "Fireside relaxation", "Indoor activities"],
    packingTips: "Warm clothes, thermals, waterproof jacket"
  }
];

export default function Activities() {
  return (
    <>
      <SEO
        title="Unwind with Dullstroom Fly-Fishing & Panorama Route Adventures 2025"
        description="Discover world-class fly fishing, Panorama Route tours, luxury spa retreats, whisky tasting, and highland adventures from The Browns Dullstroom activities guesthouse. Book your experience."
        keywords="Dullstroom activities guesthouse, fly fishing Dullstroom 2025, Panorama Route tours, God's Window, highland spa retreats, whisky tasting Mpumalanga, Dullstroom golf courses, art galleries Dullstroom"
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-primary/10 to-background py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
                <Clock className="h-4 w-4 mr-2" />
                2025 Highland Adventures
              </Badge>
              
              <h1 className="mb-6 text-foreground">
                Unwind with Dullstroom Fly-Fishing & Panorama Route Adventures 2025
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                From world-renowned fly fishing in pristine highland streams to breathtaking Panorama Route tours, 
                discover the magic of Dullstroom's misty highlands with luxury accommodation as your base.
              </p>
              
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-2 text-primary font-semibold">
                  <Gift className="h-5 w-5" />
                  <span>Book Experience Packages & Save 15% on Activities</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Combine accommodation with activities for the best rates
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Button asChild size="lg" className="min-h-[48px] flex-1">
                  <a href="https://book.nightsbridge.com/00000" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Book Your Experience
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="min-h-[48px] flex-1">
                  <Link to="/accommodations">View Suites</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Activities Categories */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="mb-4">Signature Highland Experiences</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Curated activities that showcase the best of Dullstroom and the Mpumalanga highlands, 
                from adrenaline adventures to peaceful retreats.
              </p>
            </div>

            <Tabs defaultValue="outdoor" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="outdoor">Outdoor</TabsTrigger>
                <TabsTrigger value="wellness">Wellness</TabsTrigger>
                <TabsTrigger value="cultural">Cultural</TabsTrigger>
                <TabsTrigger value="culinary">Culinary</TabsTrigger>
              </TabsList>

              <TabsContent value="outdoor" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {activities.filter(a => ['fly-fishing', 'panorama-route', 'highland-hiking', 'golf'].includes(a.id)).map((activity) => (
                    <Card key={activity.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                      <div className="aspect-video relative overflow-hidden">
                        <img 
                          src={activity.image} 
                          alt={activity.title}
                          className="w-full h-full object-cover transition-transform hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary">{activity.season}</Badge>
                        </div>
                        {activity.price && (
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-primary/90 text-primary-foreground">
                              {activity.price}
                            </Badge>
                          </div>
                        )}
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
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>{activity.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span>{activity.difficulty}</span>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-sm mb-2">Perfect For:</h4>
                          <div className="flex flex-wrap gap-2">
                            {activity.suitableFor.map((type) => (
                              <Badge key={type} variant="outline" className="text-xs">
                                {type}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="border-t pt-4">
                          <p className="text-sm text-muted-foreground mb-2">
                            <span className="font-medium">Recommended:</span> 
                            <Link to={activity.suiteLink} className="text-primary hover:underline ml-1">
                              {activity.recommendedSuite}
                            </Link>
                          </p>
                          <div className="flex gap-2">
                            <Button size="sm" className="flex-1" asChild>
                              <Link to="/contact">Book Activity</Link>
                            </Button>
                            <Button size="sm" variant="outline" asChild>
                              <Link to={activity.suiteLink}>Pair Suite</Link>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="wellness" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {activities.filter(a => ['highland-spa'].includes(a.id)).map((activity) => (
                    <Card key={activity.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                      <div className="aspect-video relative overflow-hidden">
                        <img 
                          src={activity.image} 
                          alt={activity.title}
                          className="w-full h-full object-cover transition-transform hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary">{activity.season}</Badge>
                        </div>
                        {activity.price && (
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-primary/90 text-primary-foreground">
                              {activity.price}
                            </Badge>
                          </div>
                        )}
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
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>{activity.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span>{activity.difficulty}</span>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-sm mb-2">Insider Tips:</h4>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            {activity.tips.slice(0, 3).map((tip, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <Star className="h-3 w-3 text-primary mt-0.5" />
                                <span>{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="border-t pt-4">
                          <p className="text-sm text-muted-foreground mb-2">
                            <span className="font-medium">Pair with:</span> 
                            <Link to={activity.suiteLink} className="text-primary hover:underline ml-1">
                              {activity.recommendedSuite} for romantic getaways
                            </Link>
                          </p>
                          <div className="flex gap-2">
                            <Button size="sm" className="flex-1" asChild>
                              <Link to="/contact">Book Spa Package</Link>
                            </Button>
                            <Button size="sm" variant="outline" asChild>
                              <Link to={activity.suiteLink}>View Suite</Link>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="cultural" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {activities.filter(a => ['art-galleries'].includes(a.id)).map((activity) => (
                    <Card key={activity.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                      <div className="aspect-video relative overflow-hidden">
                        <img 
                          src={activity.image} 
                          alt={activity.title}
                          className="w-full h-full object-cover transition-transform hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary">{activity.season}</Badge>
                        </div>
                        {activity.price && (
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-primary/90 text-primary-foreground">
                              {activity.price}
                            </Badge>
                          </div>
                        )}
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
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>{activity.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span>{activity.difficulty}</span>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-sm mb-2">Highlights:</h4>
                          <div className="flex flex-wrap gap-2">
                            {activity.highlights.map((highlight) => (
                              <Badge key={highlight} variant="outline" className="text-xs">
                                {highlight}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="border-t pt-4">
                          <p className="text-sm text-muted-foreground mb-2">
                            <span className="font-medium">Great for:</span> 
                            <Link to={activity.suiteLink} className="text-primary hover:underline ml-1">
                              {activity.recommendedSuite} guests seeking culture
                            </Link>
                          </p>
                          <Button size="sm" className="w-full" asChild>
                            <Link to="/contact">Plan Cultural Tour</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="culinary" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {activities.filter(a => ['whisky-tasting', 'cheese-factories'].includes(a.id)).map((activity) => (
                    <Card key={activity.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                      <div className="aspect-video relative overflow-hidden">
                        <img 
                          src={activity.image} 
                          alt={activity.title}
                          className="w-full h-full object-cover transition-transform hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary">{activity.season}</Badge>
                        </div>
                        {activity.price && (
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-primary/90 text-primary-foreground">
                              {activity.price}
                            </Badge>
                          </div>
                        )}
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
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>{activity.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span>{activity.difficulty}</span>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-sm mb-2">Local Tips:</h4>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            {activity.tips.slice(0, 2).map((tip, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <Star className="h-3 w-3 text-primary mt-0.5" />
                                <span>{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="border-t pt-4">
                          <p className="text-sm text-muted-foreground mb-2">
                            <span className="font-medium">Perfect with:</span> 
                            <Link to={activity.suiteLink} className="text-primary hover:underline ml-1">
                              {activity.recommendedSuite}
                            </Link>
                          </p>
                          <Button size="sm" className="w-full" asChild>
                            <Link to="/contact">Book Tasting Tour</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Interactive Map Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="mb-4">Explore Dullstroom & Surroundings</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover local partners, attractions, and activities with our interactive map of the Dullstroom highlands region.
              </p>
            </div>
            
            <InteractiveMap className="max-w-6xl mx-auto" />
          </div>
        </section>

        {/* Seasonal Guide */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="mb-4">Year-Round Highland Adventures</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Every season offers unique experiences in the Dullstroom highlands. Plan your perfect getaway.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {seasonalGuide.map((season, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{season.season}</CardTitle>
                    <CardDescription>{season.weather}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <h4 className="font-medium text-sm mb-2">Best Activities:</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {season.bestFor.map((activity, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full mt-1.5" />
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-2">Pack:</h4>
                      <p className="text-xs text-muted-foreground">{season.packingTips}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 lg:py-20 bg-gradient-to-br from-primary/10 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-6">Ready for Your Highland Adventure?</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Book your luxury accommodation and activities together for the ultimate Dullstroom experience. 
                Our concierge team will help plan your perfect highland getaway.
              </p>
              
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-8">
                <div className="flex items-center justify-center gap-2 text-primary font-semibold mb-2">
                  <Gift className="h-4 w-4" />
                  <span>Activity Package Deals Available</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Save 15% when booking accommodation + 2 or more activities
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Button asChild size="lg" className="min-h-[48px] flex-1">
                  <a href="https://book.nightsbridge.com/00000" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Book Your Experience
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="min-h-[48px] flex-1">
                  <Link to="/contact">Custom Package</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}