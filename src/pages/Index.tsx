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
import { HeroBookingWidget } from "@/components/ui/hero-booking-widget";

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
        title="The Browns Luxury Guest Suites & Cottage - Dullstroom Guest Suites 2025 - Mpumalanga Highlands Accommodation"
        description="Premier luxury guest suites in Dullstroom's misty highlands. World-class fly-fishing access, Panorama Route base, highland views, premium amenities. Book direct for best rates and exclusive perks."
        keywords="Dullstroom luxury accommodation 2025, boutique guesthouse, Mpumalanga highlands accommodation, fly fishing, Panorama Route accommodation, luxury self-catering Dullstroom, luxury suites Dullstroom"
      />
      
      <StructuredData 
        type="hotel" 
        data={{}}
      />
      
      <MobileSEO />
      <div className="min-h-screen mobile-scroll-smooth">
      {/* Hero Section - Dynamic height for narrowest mobile */}
      <section className="relative min-h-[50vh] h-[60vh] xs:h-[50vh] sm:h-[55vh] md:h-[65vh] lg:h-[75vh] xl:h-[80vh] mobile-select-none">
        <EnhancedImageSlider 
          images={heroImages}
          className="h-full w-full"
          autoPlay={!isTouch}
          autoPlayInterval={6000}
          enableSwipe={true}
        />
        {/* Hero Booking Widget - Positioned prominently */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2 w-full px-4 z-30">
          <HeroBookingWidget compact={true} />
        </div>
      </section>

      {/* Trust Signals & Social Proof */}
      <section className="py-4 sm:py-6 bg-primary/5 border-b">
        <div className="responsive-container">
          <div className="text-center">
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="font-medium">4.9/5 Rating</span>
              </div>
              <div className="h-4 w-px bg-border"></div>
              <span>300+ Happy Guests</span>
              <div className="h-4 w-px bg-border"></div>
              <span>Best Rate Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Property Overview */}
      <section 
        ref={overviewRef}
        className={`py-8 sm:py-12 lg:py-16 bg-background transition-all duration-1000 ${
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
        className={`py-6 sm:py-10 md:py-16 lg:py-20 bg-muted transition-all duration-1000 ${
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
        className={`py-6 sm:py-10 md:py-16 lg:py-20 bg-background transition-all duration-1000 ${
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
      <section className="py-6 sm:py-10 md:py-16 lg:py-20 bg-accent">
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
      <section className="py-6 sm:py-10 md:py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="responsive-container text-center">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-primary-foreground mb-4 font-playfair">Ready for Your Luxury Escape?</h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed px-2">
            Book directly with us for the best rates and personalized service. 
            Experience the perfect blend of luxury and comfort in Dullstroom.
          </p>
          <div className="max-w-lg mx-auto">
            <HeroBookingWidget compact={false} />
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Index;
