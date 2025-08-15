import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/ui/seo";
import { StructuredData } from "@/components/ui/structured-data";
import { EnhancedImageSlider } from "@/components/ui/enhanced-image-slider";
import { SuiteCard } from "@/components/ui/suite-card";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { Card, CardContent } from "@/components/ui/card";
import { MobileSEO } from "@/components/ui/mobile-seo";
import { DullstroomInfographic } from "@/components/ui/dullstroom-infographic";
import { ReviewShowcase } from "@/components/ui/review-showcase";
import { PremiumImage } from "@/components/ui/premium-image";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useMobileDetection } from "@/hooks/use-mobile-optimization";
import { MapPin, Wifi, Car, Coffee, Zap, Shield, Droplets, Tv } from "lucide-react";

const heroImages = [
  {
    src: "/images/hero/browns-exterior.jpg",
    alt: "The Browns luxury guest suites exterior overlooking Dullstroom misty highlands with mountain backdrop",
    title: "Welcome to The Browns",
    subtitle: "Luxury Guest Suites & Cottage in Dullstroom"
  },
  {
    src: "/images/hero/suite-interior.jpg",
    alt: "Elegant interior of premium suite at The Browns featuring modern luxury amenities and boutique styling",
    title: "Modern Luxury",
    subtitle: "Beautifully appointed suites with premium amenities"
  },
  {
    src: "/images/hero/gardens-mountains.jpg",
    alt: "Serene gardens and panoramic highland views at The Browns Dullstroom guest house in Mpumalanga highlands",
    title: "Serene Setting",
    subtitle: "Peaceful gardens in the heart of Mpumalanga highlands"
  }
];

const featuredSuites = [
  {
    title: "Master Suite",
    description: "Our premium suite with elegant appointments and spacious living area.",
    capacity: "Family of 4",
    bedConfig: "King XL + Double sofa bed",
    image: <img src="/images/suites/master-suite-01.jpg" alt="Master Suite at The Browns featuring king XL bed and elegant luxury appointments" className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-t-lg" />,
    mainAmenities: [
      { text: "Dressing room", emoji: "👗" },
      { text: "Large lounge + sofa bed", emoji: "🛋️" },
      { text: "Hot water bottle", emoji: "🔥" },
      { text: "Double shower", emoji: "🚿" },
      { text: "Netflix", emoji: "📺" },
      { text: "Nespresso", emoji: "☕" }
    ],
    additionalAmenities: []
  },
  {
    title: "Garden Suite",
    description: "Ground floor suite with private entrance and beautiful garden views.",
    capacity: "2 guests",
    bedConfig: "Queen XL bed",
    image: <img src="/images/suites/garden-suite-01.jpg" alt="Garden Suite at The Browns with private entrance and beautiful garden views" className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-t-lg" />,
    mainAmenities: [
      { text: "Lovely bath", emoji: "🛀" },
      { text: "Double vanity", emoji: "🪞" },
      { text: "Hot water bottle", emoji: "🔥" },
      { text: "Private entrance", emoji: "🚪" },
      { text: "Netflix", emoji: "📺" },
      { text: "Nespresso", emoji: "☕" }
    ],
    additionalAmenities: []
  },
  {
    title: "Robin Suite",
    description: "Cottage suite with fireplace and charming, comfortable styling.",
    capacity: "2 guests",
    bedConfig: "King or 2 Singles",
    image: <img src="/images/suites/robin-suite-01.jpg" alt="Robin Suite at The Browns cottage with fireplace and comfortable styling for 2 guests" className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-t-lg" />,
    mainAmenities: [
      { text: "Fireplace", emoji: "🔥" },
      { text: "Configurable twin/king", emoji: "🛏️" },
      { text: "Charlotte Rhys", emoji: "✨" },
      { text: "Full ensuite", emoji: "🛁" },
      { text: "Netflix", emoji: "📺" },
      { text: "Nespresso", emoji: "☕" }
    ],
    additionalAmenities: []
  }
];

const testimonials = [
  {
    quote: "The room was pretty big, especially the bathroom. It had an espresso machine, coffee capsules, hot chocolate, snacks, and sweets.",
    author: "Sabrina",
    rating: 5,
    year: "2023"
  },
  {
    quote: "The accommodation was lovely and had all the extra little finishing touches – home away from home!",
    author: "Laura Bolton",
    rating: 5,
    year: "2022"
  },
  {
    quote: "The room was nicely appointed with lots of extra touches such as hot chocolate, a Nespresso machine, and a decanter of sherry.",
    author: "dhw77",
    rating: 5,
    year: "2022"
  }
];

const keyFeatures = [
  { icon: MapPin, title: "Prime Location", description: "278 & 279 Blue Crane Drive, walking distance to Dullstroom's shops and restaurants" },
  { icon: Wifi, title: "Free WiFi & Netflix", description: "High-speed internet with Netflix throughout the property" },
  { icon: Car, title: "Secure Parking", description: "Secure onsite parking for all guests" },
  { icon: Coffee, title: "Nespresso & Treats", description: "Premium coffee machines with exclusive teas and snacks" },
  { icon: Zap, title: "Backup Power & Water", description: "Uninterrupted stay with backup systems" },
  { icon: Shield, title: "Daily Housekeeping", description: "Professional housekeeping services daily" },
];

const Index = () => {
  const { elementRef: overviewRef, isVisible: overviewVisible } = useScrollAnimation();
  const { elementRef: suitesRef, isVisible: suitesVisible } = useScrollAnimation();
  const { elementRef: testimonialsRef, isVisible: testimonialsVisible } = useScrollAnimation();
  const { isMobile, isTouch } = useMobileDetection();

  return (
    <>
      <SEO
        title="The Browns Luxury Guest Suites & Cottage | Dullstroom Guest Suites 2025 | Mpumalanga Highlands Accommodation"
        description="Premier luxury guest suites in Dullstroom's misty highlands. World-class fly-fishing access, Panorama Route base, highland views, premium amenities. Book direct for best rates and exclusive perks."
        keywords="Dullstroom luxury accommodation 2025, boutique guesthouse, Mpumalanga highlands accommodation,fly fishing, Panorama Route accommodation, luxury self-catering Dullstroom, luxury suites Dullstroom"
      />
      
      <StructuredData 
        type="hotel" 
        data={{}}
      />
      
      <MobileSEO />
      <div className="min-h-screen mobile-scroll-smooth">
      {/* Hero Section - Mobile Optimized */}
      <section className="relative h-[40vh] xs:h-[45vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[75vh] mobile-select-none">
        <EnhancedImageSlider 
          images={heroImages}
          className="h-full w-full"
          autoPlay={!isTouch} // Disable autoplay on touch devices for better UX
          autoPlayInterval={6000}
          enableSwipe={true}
        />
        <div className="absolute bottom-4 xs:bottom-6 sm:bottom-8 md:bottom-12 lg:bottom-16 left-1/2 transform -translate-x-1/2 text-center w-full px-3 xs:px-4 z-20">
          <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 max-w-sm xs:max-w-md mx-auto">
            <Button 
              size="lg" 
              asChild 
              className="bg-primary hover:bg-primary/90 min-h-[48px] xs:min-h-[52px] text-sm xs:text-base font-medium touch-feedback mobile-tap-highlight flex-1"
            >
              <a 
                href="https://book.nightsbridge.com/00000" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Book your luxury Dullstroom accommodation now"
              >
                Book Now
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              asChild 
              className="bg-white/90 hover:bg-white border-white text-foreground min-h-[48px] xs:min-h-[52px] text-sm xs:text-base font-medium touch-feedback mobile-tap-highlight flex-1"
            >
              <Link 
                to="/accommodation"
                aria-label="View our luxury suite accommodation"
              >
                View Our Suites
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Property Overview */}
      <section 
        ref={overviewRef}
        className={`-mt-2 sm:mt-0 py-4 sm:py-8 md:py-12 lg:py-16 bg-background transition-all duration-1000 ${
          overviewVisible ? 'scroll-animate' : 'opacity-0'
        }`}
      >
        <div className="responsive-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-primary mb-4 sm:mb-6">Luxury Accommodation in Dullstroom</h2>
            <p className="text-fluid-lg text-muted-foreground mb-8 sm:mb-10 md:mb-12 leading-relaxed max-w-none sm:max-w-3xl mx-auto">
            Located in Dullstroom, Mpumalanga, our luxurious suites combine modern comfort with refined style across two exceptional properties. The Luxury Guest Suites host up to 10 adults and 2 children in four elegant ensuite rooms, while the charming Cottage Suites offer intimate accommodation for up to 6 adults and 1 child. Enjoy premium self-catering amenities in the heart of South Africa’s premier highland retreat.
            </p>
            
            <div className="mobile-grid max-w-6xl mx-auto">
              {keyFeatures.map((feature, index) => (
                <Card 
                  key={index} 
                  className="text-center hover:shadow-lg transition-all duration-300 touch-feedback mobile-tap-highlight"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
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
      <section 
        ref={suitesRef}
        className={`section-spacing bg-muted transition-all duration-1000 ${
          suitesVisible ? 'scroll-animate' : 'opacity-0'
        }`}
      >
        <div className="responsive-container">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-primary mb-4 font-playfair">Featured Suites</h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
              Choose from our collection of luxury suites, each uniquely designed with premium amenities 
              and thoughtful touches for an unforgettable stay.
            </p>
          </div>
          
          <div className="card-grid max-w-7xl mx-auto">
            {featuredSuites.map((suite, index) => (
              <div 
                key={index}
                style={{ animationDelay: `${index * 150}ms` }}
                className="scroll-animate h-full"
              >
                <SuiteCard {...suite} className="h-full" />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-10 md:mt-12">
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="min-h-[48px] sm:min-h-[52px] text-sm sm:text-base font-medium touch-feedback mobile-tap-highlight"
            >
              <Link 
                to="/accommodation"
                aria-label="View all luxury accommodation options"
              >
                View All Suites
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section 
        ref={testimonialsRef}
        className={`section-spacing bg-background transition-all duration-1000 ${
          testimonialsVisible ? 'scroll-animate' : 'opacity-0'
        }`}
      >
        <div className="responsive-container">
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-primary mb-4 font-playfair">Guest Testimonials</h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
              See what our guests say about their luxury stay at The Browns.
            </p>
          </div>
          
          <div className="card-grid max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                style={{ animationDelay: `${index * 150}ms` }}
                className="scroll-animate h-full"
              >
                <TestimonialCard {...testimonial} className="h-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Showcase Section */}
      <ReviewShowcase compact={true} className="py-4 sm:py-6" />

      {/* Dullstroom Highlights - Interactive Infographic */}
      <section className="section-spacing bg-accent">
        <div className="responsive-container">
          <DullstroomInfographic 
            variant="grid"
            showShareButton={true}
            className="max-w-6xl mx-auto"
          />
          
          <div className="flex flex-col xs:flex-row gap-4 max-w-md mx-auto mt-8">
            <Button 
              asChild 
              size="lg" 
              className="min-h-[48px] sm:min-h-[52px] text-sm sm:text-base font-medium touch-feedback mobile-tap-highlight flex-1"
            >
              <Link 
                to="/activities"
                aria-label="Explore Dullstroom highland activities and attractions"
              >
                Explore Highland Activities
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="min-h-[48px] sm:min-h-[52px] text-sm sm:text-base font-medium touch-feedback mobile-tap-highlight flex-1"
            >
              <Link 
                to="/contact"
                aria-label="Contact The Browns for bookings and inquiries"
              >
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-spacing bg-primary text-primary-foreground">
        <div className="responsive-container text-center">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-primary-foreground mb-4 font-playfair">Ready for Your Luxury Escape?</h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed px-2">
            Book directly with us for the best rates and personalized service. 
            Experience the perfect blend of luxury and comfort in Dullstroom.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            asChild 
            className="min-h-[48px] sm:min-h-[52px] text-sm sm:text-base font-medium touch-feedback mobile-tap-highlight"
          >
            <a 
              href="https://book.nightsbridge.com/00000" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Book your luxury Dullstroom stay now - best rates guaranteed"
            >
              Book Your Stay Now
            </a>
          </Button>
        </div>
      </section>
    </div>
    </>
  );
};

export default Index;
