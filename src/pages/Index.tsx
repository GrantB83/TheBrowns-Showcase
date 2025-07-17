import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ImageSlider } from "@/components/ui/image-slider";
import { SuiteCard } from "@/components/ui/suite-card";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Wifi, Car, Coffee, Zap, Shield, Droplets, Tv } from "lucide-react";

const heroImages = [
  {
    src: "/images/hero/browns-exterior.jpg", // filename: browns-exterior.jpg, folder: /images/hero/, dimensions: 2000x1200
    alt: "The Browns luxury guest suites exterior in Dullstroom",
    title: "Welcome to The Browns",
    subtitle: "Luxury Guest Suites & Cottage in Dullstroom"
  },
  {
    src: "/images/hero/suite-interior.jpg", // filename: suite-interior.jpg, folder: /images/hero/, dimensions: 2000x1200
    alt: "Elegant interior of luxury suite at The Browns",
    title: "Modern Luxury",
    subtitle: "Beautifully appointed suites with premium amenities"
  },
  {
    src: "/images/hero/gardens-mountains.jpg", // filename: gardens-mountains.jpg, folder: /images/hero/, dimensions: 2000x1200
    alt: "Serene gardens and mountain views at The Browns Dullstroom",
    title: "Serene Setting",
    subtitle: "Peaceful gardens in the heart of Mpumalanga highlands"
  }
];

const featuredSuites = [
  {
    title: "Master Suite",
    description: "Our premium suite with elegant appointments and spacious living area.",
    capacity: "2 adults + 2 children under 12",
    bedConfig: "King XL + Double sofa bed",
    image: "/images/suites/master-suite-card.jpg", // filename: master-suite-card.jpg, folder: /images/suites/, dimensions: 800x600
    mainAmenities: [
      { text: "Hot water bottles & electric blankets", emoji: "🔥" },
      { text: "Netflix", emoji: "📺" },
      { text: "Nespresso", emoji: "☕" },
      { text: "Double vanity", emoji: "🛁" },
      { text: "Private lounge", emoji: "🛋️" },
      { text: "Garden views", emoji: "🌿" }
    ],
    additionalAmenities: []
  },
  {
    title: "Garden Suite",
    description: "Ground floor suite with private entrance and beautiful garden views.",
    capacity: "2 guests",
    bedConfig: "Queen XL bed",
    image: "/images/suites/garden-suite-card.jpg", // filename: garden-suite-card.jpg, folder: /images/suites/, dimensions: 800x600
    mainAmenities: [
      { text: "Garden views", emoji: "🌿" },
      { text: "Private entrance", emoji: "🚪" },
      { text: "Spa bath", emoji: "🛀" },
      { text: "Netflix", emoji: "📺" },
      { text: "WiFi", emoji: "📶" },
      { text: "Nespresso", emoji: "☕" }
    ],
    additionalAmenities: []
  },
  {
    title: "Robin Suite",
    description: "Cottage suite with fireplace and charming, comfortable styling.",
    capacity: "4 guests",
    bedConfig: "King XL or 2 Singles + Sofa bed",
    image: "/images/suites/robin-suite-card.jpg", // filename: robin-suite-card.jpg, folder: /images/suites/, dimensions: 800x600
    mainAmenities: [
      { text: "Fireplace", emoji: "🔥" },
      { text: "Netflix", emoji: "📺" },
      { text: "Nespresso", emoji: "☕" },
      { text: "Charlotte Rhys", emoji: "✨" },
      { text: "Full ensuite", emoji: "🛁" },
      { text: "WiFi", emoji: "📶" }
    ],
    additionalAmenities: []
  }
];

const testimonials = [
  {
    quote: "Beautifully appointed suites, spotlessly clean, central location – perfect stay!",
    author: "Anonymous",
    rating: 5,
    year: "2024"
  },
  {
    quote: "Big room with espresso machine and snacks, very cozy.",
    author: "Guest",
    rating: 5,
    year: "2021"
  },
  {
    quote: "Suites were well-equipped and clean, easy to explore town.",
    author: "Sarah M.",
    rating: 5,
    year: "2024"
  }
];

const keyFeatures = [
  { icon: MapPin, title: "Prime Location", description: "279 Blue Crane Drive, walking distance to Dullstroom's shops and restaurants" },
  { icon: Wifi, title: "Free WiFi", description: "High-speed internet throughout the property" },
  { icon: Car, title: "Secure Parking", description: "Safe, covered parking for all guests" },
  { icon: Coffee, title: "Nespresso & Treats", description: "Premium coffee machines with exclusive teas and snacks" },
  { icon: Zap, title: "Backup Power", description: "Uninterrupted stay with backup power systems" },
  { icon: Shield, title: "Daily Cleaning", description: "Professional housekeeping services available" },
  { icon: Droplets, title: "Backup Water", description: "Reliable water supply with backup systems" },
  { icon: Tv, title: "Entertainment", description: "Netflix, DVD players, and premium entertainment" }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen">
        <ImageSlider 
          images={heroImages}
          className="h-full w-full"
          autoPlay={true}
          autoPlayInterval={6000}
        />
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 text-center w-full px-4">
          <div className="flex flex-col mobile-landscape:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
            <Button 
              size="lg" 
              asChild 
              className="bg-primary hover:bg-primary/90 min-h-[48px] text-fluid-base font-medium"
            >
              <a 
                href="https://book.nightsbridge.com/00000" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Book Now
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              asChild 
              className="bg-white/90 hover:bg-white border-white text-foreground min-h-[48px] text-fluid-base font-medium"
            >
              <Link to="/suites">
                View Our Suites
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Property Overview */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-primary mb-4 sm:mb-6">Luxury Accommodation in Dullstroom</h2>
            <p className="text-fluid-lg text-muted-foreground mb-8 sm:mb-10 md:mb-12 leading-relaxed max-w-none sm:max-w-3xl mx-auto">
              Nestled in Dullstroom, Mpumalanga, our luxurious suites offer modern comfort in two exquisite properties. 
              The Luxury Guest Suites accommodate up to 10 adults and 2 children across 4 elegant ensuite rooms, 
              while our charming Cottage Suites provide intimate accommodation for up to 6 adults and 1 child. 
              Experience self-catering excellence with premium amenities in the heart of South Africa's premier highland retreat.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {keyFeatures.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-4 sm:p-6">
                    <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-3 sm:mb-4" />
                    <h3 className="font-semibold mb-2 text-fluid-base">{feature.title}</h3>
                    <p className="text-fluid-sm text-muted-foreground leading-snug">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Suites */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-primary mb-4">Featured Suites</h2>
            <p className="text-fluid-lg text-muted-foreground max-w-none sm:max-w-2xl mx-auto leading-relaxed">
              Choose from our collection of luxury suites, each uniquely designed with premium amenities 
              and thoughtful touches for an unforgettable stay.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {featuredSuites.map((suite, index) => (
              <SuiteCard key={index} {...suite} />
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-10 md:mt-12">
            <Button asChild size="lg" variant="outline" className="min-h-[48px] text-fluid-base font-medium">
              <Link to="/suites">
                View All Suites
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-primary mb-4">Guest Testimonials</h2>
            <p className="text-fluid-lg text-muted-foreground max-w-none sm:max-w-2xl mx-auto leading-relaxed">
              See what our guests say about their luxury stay at The Browns.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Dullstroom Highlights */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-primary mb-4 sm:mb-6">Discover Dullstroom</h2>
            <p className="text-fluid-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Located in the heart of Mpumalanga's highlands, Dullstroom offers world-class fly-fishing, 
              scenic hiking trails, artisanal shops, fine dining, and seasonal festivals. Our suites 
              provide the perfect base for exploring this charming highland town.
            </p>
            
            <div className="flex flex-col mobile-landscape:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
              <Button asChild size="lg" className="min-h-[48px] text-fluid-base font-medium">
                <Link to="/location">
                  Explore Location & Activities
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="min-h-[48px] text-fluid-base font-medium">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-primary-foreground mb-4">Ready for Your Luxury Escape?</h2>
          <p className="text-fluid-xl mb-6 sm:mb-8 text-primary-foreground/90 max-w-none sm:max-w-2xl mx-auto leading-relaxed">
            Book directly with us for the best rates and personalized service. 
            Experience the perfect blend of luxury and comfort in Dullstroom.
          </p>
          <Button size="lg" variant="secondary" asChild className="min-h-[48px] text-fluid-base font-medium">
            <a 
              href="https://book.nightsbridge.com/00000" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Book Your Stay Now
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
