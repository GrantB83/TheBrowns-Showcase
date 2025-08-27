import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/ui/seo";
import { ConversionTrackingPage } from "@/components/ui/conversion-tracking-page";
import { blogPosts } from "@/data/blog-posts";
import { 
  MapPin, 
  Calendar, 
  Coffee, 
  Fish, 
  Mountain, 
  Heart, 
  Users, 
  Clock,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  ExternalLink
} from "lucide-react";

export default function DullstroomGuide() {
  console.log("DullstroomGuide component is rendering!");
  const [activeSection, setActiveSection] = useState<string>("");

  // Filter relevant blog posts by category
  const activitiesPosts = blogPosts.filter(post => 
    post.category === "Activities" && post.published
  );
  
  const foodPosts = blogPosts.filter(post => 
    post.category === "Food" && post.published
  );
  
  const travelPosts = blogPosts.filter(post => 
    post.category === "Travel" && post.published
  );
  
  const accommodationPosts = blogPosts.filter(post => 
    post.category === "Accommodation" && post.published
  );

  // Table of Contents sections
  const tocSections = [
    { id: "where-to-stay", title: "Where to Stay", icon: MapPin },
    { id: "things-to-do", title: "Things to Do", icon: Mountain },
    { id: "restaurants", title: "Restaurants & Coffee", icon: Coffee },
    { id: "fly-fishing", title: "Fly-Fishing & Outdoor", icon: Fish },
    { id: "itineraries", title: "Weekend Itineraries", icon: Calendar },
    { id: "practical-info", title: "Practical Info", icon: Clock },
    { id: "faqs", title: "FAQs", icon: CheckCircle }
  ];

  // FAQ data for JSON-LD
  const faqData = [
    {
      question: "What's the best time to visit Dullstroom?",
      answer: "Dullstroom is beautiful year-round, but each season offers unique experiences. Spring (September-November) brings wildflowers and mild weather. Summer (December-February) offers lush landscapes and longer days. Autumn (March-May) provides crisp air and golden colors. Winter (June-August) features cozy fireside evenings and occasional snow on the peaks."
    },
    {
      question: "How far is Dullstroom from Johannesburg?",
      answer: "Dullstroom is approximately 2.5-3 hours drive from Johannesburg via the N12/N4 to Belfast and then R540. The route is well-maintained and suitable for all vehicles. Plan to arrive in daylight for the best experience navigating the highland roads."
    },
    {
      question: "Do I need to book restaurants in advance?",
      answer: "Yes, especially on weekends and during peak seasons. Dullstroom's popular restaurants and coffee shops can get busy. We recommend booking dinner reservations 1-2 weeks in advance, particularly for Friday and Saturday evenings."
    },
    {
      question: "What should I pack for a Dullstroom trip?",
      answer: "Pack layers regardless of season - mornings are typically crisp even in summer. Essential items include comfortable walking shoes, a warm jacket, sunscreen, and a reusable water bottle. If you plan to fly-fish, confirm gear availability or bring your own equipment."
    },
    {
      question: "Is Dullstroom suitable for families with children?",
      answer: "Absolutely! Dullstroom offers many family-friendly activities including gentle hiking trails, bird of prey experiences, easy walks around the town dams, and cozy accommodation options. The Browns offers family suites with flexible sleeping arrangements perfect for parents and children."
    },
    {
      question: "Can I visit Dullstroom without a car?",
      answer: "While having a car provides the most flexibility, some guests arrange transfers from Johannesburg or nearby airports. Once in Dullstroom, the village is walkable, and many activities and restaurants are within easy reach of The Browns' central location."
    }
  ];

  // FAQ JSON-LD schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Intersection Observer for TOC highlighting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    tocSections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <SEO 
        title="Dullstroom Accommodation & Travel Guide | The Browns Luxury Guest Suites"
        description="Plan the perfect Dullstroom getaway: where to stay, things to do, restaurants, fly-fishing, itineraries, maps, and insider tips—book direct & save."
        keywords="Dullstroom accommodation guide, where to stay Dullstroom, Dullstroom travel guide, fly fishing Dullstroom, Dullstroom restaurants, weekend getaway Dullstroom, highland accommodation Mpumalanga"
        schemaData={faqSchema}
      />
      
      <ConversionTrackingPage pageType="guide" />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="section-spacing bg-gradient-to-br from-accent to-muted">
          <div className="responsive-container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-primary mb-4 sm:mb-6">Dullstroom Accommodation & Travel Guide</h1>
              <p className="text-fluid-lg sm:text-fluid-xl text-muted-foreground leading-relaxed max-w-none sm:max-w-3xl mx-auto mb-6">
                Your complete guide to planning the perfect Dullstroom getaway. From luxury accommodation and world-class fly-fishing to cozy restaurants and scenic hiking trails.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="min-h-[48px]">
                  <Link to="/accommodation">
                    Book Direct & Save
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="min-h-[48px]" onClick={() => scrollToSection("practical-info")}>
                  <MapPin className="mr-2 h-4 w-4" />
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="section-spacing-sm bg-background border-b sticky top-0 z-10">
          <div className="responsive-container">
            <div className="max-w-6xl mx-auto">
              <nav className="flex flex-wrap justify-center gap-2 sm:gap-4">
                {tocSections.map(({ id, title, icon: Icon }) => (
                  <Button
                    key={id}
                    variant={activeSection === id ? "default" : "ghost"}
                    size="sm"
                    onClick={() => scrollToSection(id)}
                    className="text-xs sm:text-sm"
                  >
                    <Icon className="mr-1 h-3 w-3" />
                    {title}
                  </Button>
                ))}
              </nav>
            </div>
          </div>
        </section>

        {/* Where to Stay Section */}
        <section id="where-to-stay" className="section-spacing bg-background">
          <div className="responsive-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-fluid-xl sm:text-fluid-2xl text-primary mb-6">Where to Stay in Dullstroom</h2>
              <p className="text-fluid-lg text-muted-foreground mb-8 leading-relaxed">
                Choose from luxury guest suites or entire self-catering houses at The Browns, located in the heart of Dullstroom village. Our accommodation combines modern comforts with authentic highland hospitality, perfect for couples, families, and groups seeking a memorable Dullstroom experience.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="h-5 w-5 text-primary" />
                      Luxury Guest Suites
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Perfect for couples and solo travelers. Each suite features a fireplace, beverage station, and premium amenities.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Fireplace in every suite
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Beverage station with Nespresso
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Premium bedding and amenities
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      Self-Catering Houses
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Ideal for families and groups. Full kitchen facilities, multiple bedrooms, and private outdoor spaces.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Fully equipped kitchens
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Multiple bedrooms and bathrooms
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Private gardens and mountain views
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center">
                <Button asChild size="lg" className="min-h-[48px]">
                  <Link to="/accommodation">
                    View All Accommodation Options
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Things to Do Section */}
        <section id="things-to-do" className="section-spacing bg-muted/30">
          <div className="responsive-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-fluid-xl sm:text-fluid-2xl text-primary mb-6">Things to Do in Dullstroom</h2>
              <p className="text-fluid-lg text-muted-foreground mb-8 leading-relaxed">
                From world-class fly-fishing to gentle hiking trails, Dullstroom offers activities for every interest and fitness level. Discover the natural beauty of the Mpumalanga highlands and create unforgettable memories.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {activitiesPosts.slice(0, 6).map((post) => (
                  <Card key={post.id} className="group hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => window.location.href = `/blog/${post.slug}`}>
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                      </div>
                    </div>
                    <CardHeader className="p-4">
                      <CardTitle className="text-sm sm:text-base line-clamp-2">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-xs text-muted-foreground line-clamp-2">{post.excerpt}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="text-center">
                <Button variant="outline" asChild size="lg" className="min-h-[48px]">
                  <Link to="/activities">
                    View All Activities
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Restaurants & Coffee Section */}
        <section id="restaurants" className="section-spacing bg-background">
          <div className="responsive-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-fluid-xl sm:text-fluid-2xl text-primary mb-6">Restaurants & Coffee Shops</h2>
              <p className="text-fluid-lg text-muted-foreground mb-8 leading-relaxed">
                Dullstroom's food scene celebrates highland hospitality and local flavors. From artisanal coffee roasters to farm-fresh restaurants, discover the best dining experiences in the village.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {foodPosts.map((post) => (
                  <Card key={post.id} className="group hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => window.location.href = `/blog/${post.slug}`}>
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                      </div>
                    </div>
                    <CardHeader className="p-4">
                      <CardTitle className="text-sm sm:text-base line-clamp-2">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-xs text-muted-foreground line-clamp-2">{post.excerpt}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Fly-Fishing & Outdoor Section */}
        <section id="fly-fishing" className="section-spacing bg-muted/30">
          <div className="responsive-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-fluid-xl sm:text-fluid-2xl text-primary mb-6">Fly-Fishing & Outdoor Activities</h2>
              <p className="text-fluid-lg text-muted-foreground mb-8 leading-relaxed">
                Dullstroom is renowned for its world-class fly-fishing opportunities. From public town dams to private estates, discover the best fishing spots and outdoor adventures in the highlands.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {activitiesPosts.filter(post => 
                  post.title.toLowerCase().includes('fly') || 
                  post.title.toLowerCase().includes('fishing') ||
                  post.title.toLowerCase().includes('hiking') ||
                  post.title.toLowerCase().includes('outdoor')
                ).slice(0, 4).map((post) => (
                  <Card key={post.id} className="group hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => window.location.href = `/blog/${post.slug}`}>
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                      </div>
                    </div>
                    <CardHeader className="p-4">
                      <CardTitle className="text-sm sm:text-base line-clamp-2">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-xs text-muted-foreground line-clamp-2">{post.excerpt}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Weekend Itineraries Section */}
        <section id="itineraries" className="section-spacing bg-background">
          <div className="responsive-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-fluid-xl sm:text-fluid-2xl text-primary mb-6">Weekend Itineraries</h2>
              <p className="text-fluid-lg text-muted-foreground mb-8 leading-relaxed">
                Make the most of your Dullstroom weekend with our curated itineraries. Whether you're planning a romantic getaway, family adventure, or solo retreat, we have the perfect plan for you.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {activitiesPosts.filter(post => 
                  post.title.toLowerCase().includes('itinerary') ||
                  post.title.toLowerCase().includes('weekend') ||
                  post.title.toLowerCase().includes('couples') ||
                  post.title.toLowerCase().includes('family')
                ).slice(0, 6).map((post) => (
                  <Card key={post.id} className="group hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => window.location.href = `/blog/${post.slug}`}>
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                      </div>
                    </div>
                    <CardHeader className="p-4">
                      <CardTitle className="text-sm sm:text-base line-clamp-2">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-xs text-muted-foreground line-clamp-2">{post.excerpt}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Practical Info Section */}
        <section id="practical-info" className="section-spacing bg-muted/30">
          <div className="responsive-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-fluid-xl sm:text-fluid-2xl text-primary mb-6">Practical Information</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-fluid-lg text-primary mb-4">Weather & Best Time to Visit</h3>
                  <p className="text-muted-foreground mb-4">
                    Dullstroom enjoys a temperate highland climate with four distinct seasons. Spring (September-November) brings wildflowers and mild weather, perfect for outdoor activities. Summer offers lush landscapes and longer days, while autumn provides crisp air and golden colors. Winter features cozy fireside evenings and occasional snow on the peaks.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Packing tip:</strong> Always bring layers regardless of season - mornings are typically crisp even in summer.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-fluid-lg text-primary mb-4">Getting There</h3>
                  <p className="text-muted-foreground mb-4">
                    <strong>From Johannesburg:</strong> Take the N12/N4 to Belfast (eMakhazeni), then R540 to Dullstroom. The journey takes approximately 2.5-3 hours on well-maintained roads suitable for all vehicles.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Driving tip:</strong> Plan to arrive in daylight for the best experience navigating the highland roads, especially during your first visit.
                  </p>
                </div>
              </div>
              
              <div className="bg-background rounded-lg p-6 mb-8">
                <h3 className="text-fluid-lg text-primary mb-4">Location & Contact</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">The Browns Luxury Guest Suites</h4>
                    <p className="text-muted-foreground mb-2">279 Blue Crane Drive</p>
                    <p className="text-muted-foreground mb-4">Dullstroom, Mpumalanga 1110</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-primary" />
                        <a href="tel:+27000000000" className="text-primary hover:underline">+27 00 000 0000</a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-primary" />
                        <a href="mailto:stay@thebrowns.co.za" className="text-primary hover:underline">stay@thebrowns.co.za</a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/contact">
                        <MapPin className="mr-2 h-4 w-4" />
                        View on Map
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section id="faqs" className="section-spacing bg-background">
          <div className="responsive-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-fluid-xl sm:text-fluid-2xl text-primary mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                {faqData.map((faq, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-fluid-base sm:text-fluid-lg">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="section-spacing bg-gradient-to-br from-primary to-primary/80 text-white">
          <div className="responsive-container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-fluid-xl sm:text-fluid-2xl mb-4">Ready to Experience Dullstroom?</h2>
              <p className="text-fluid-lg mb-8 opacity-90">
                Book your stay at The Browns and discover the magic of the Mpumalanga highlands. Check availability and secure your preferred dates today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" variant="secondary" className="min-h-[48px]">
                  <Link to="/accommodation">
                    Check Availability
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="min-h-[48px] text-white border-white hover:bg-white hover:text-primary">
                  <Link to="/contact">
                    <Phone className="mr-2 h-4 w-4" />
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
