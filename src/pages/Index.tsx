import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/ui/seo";
import { StructuredData } from "@/components/ui/structured-data";
import { EnhancedImageSlider } from "@/components/ui/enhanced-image-slider";
import { SuiteCard } from "@/components/ui/suite-card";
import { SuiteBookingCard } from "@/components/ui/suite-booking-card";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { Card, CardContent } from "@/components/ui/card";
import { MobileSEO } from "@/components/ui/mobile-seo";
import { DullstroomInfographic } from "@/components/ui/dullstroom-infographic";
import { ReviewShowcase } from "@/components/ui/review-showcase";
import { PremiumImage } from "@/components/ui/premium-image";
import { HeroBookingWidget } from "@/components/ui/hero-booking-widget";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useMobileDetection } from "@/hooks/use-mobile-optimization";
import { MapPin, Wifi, Car, Coffee, Zap, Shield, Droplets, Tv } from "lucide-react";
import { MobileQuickActions } from "@/components/ui/enhanced-mobile-gesture-nav";

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

// All suites data from Accommodation page
const allSuites = [
  {
    title: "Master Suite",
    capacity: "2 adults + 2 children under 12",
    bedConfig: "King XL bed + Double fold-out sofa (kids under 12)",
    description: "First-floor, extra-spacious suite with a King XL bed and a double fold-out sofa (recommended for children up to 12). Large bedroom + dressing room with bay windows, a private lounge opening to two balconies, and a full bathroom with double vanity and double shower (plus separate toilet). Interleads with the Loft Family Suite.",
    mainAmenities: [{
      text: "Free Wi-Fi & TV with Netflix",
      emoji: "📺"
    }, {
      text: "Nespresso + milk frother",
      emoji: "☕"
    }, {
      text: "Double vanity & double shower + separate toilet",
      emoji: "🛁"
    }, {
      text: "Private lounge opening to two balconies",
      emoji: "🏠"
    }, {
      text: "Dressing room with bay windows",
      emoji: "👗"
    }, {
      text: "Percale linen",
      emoji: "🛏️"
    }],
    additionalAmenities: ["DVD player", "Hair dryer", "Heater/fan", "Electric blankets", "Down duvets", "Beverage station with minibar fridge (still water & milk)", "Premium tea selection", "Hot chocolate", "Rusks", "Backup power for lights & Wi-Fi", "Backup generator", "Backup water", "Secure parking", "Electric fencing", "Lovely garden & outdoor kids' play area", "Interleads with Loft Family Suite"],
    images: ["/images/suites/master-suite-01.jpg", "/images/suites/master-suite-02.jpg", "/images/suites/master-suite-03.jpg", "/images/suites/master-suite-04.jpg", "/images/suites/master-suite-05.jpg", "/images/suites/master-suite-06.jpg", "/images/suites/master-suite-07.jpg"],
    slug: "master-suite",
    roomId: 6,
    testimonial: {
      quote: "The Master Suite exceeded all expectations. Perfect for our anniversary with incredible attention to detail.",
      author: "Sarah & Michael K.",
      rating: 5
    },
    testimonials: [
      { quote: "Breathtaking. Had a great stay and had a wonderful room. Beautiful place.", author: "Flip K", year: "2024", rating: 5 },
      { quote: "Luxurious stay with impeccable facilities. Walking distance to the village centre and all the restaurants.", author: "Sonja", year: "2025", rating: 5 },
      { quote: "Excellent location in Dullstroom. Highly recommended!", author: "Jonathan", year: "2025", rating: 5 },
      { quote: "Clean and loved the little extras like sherry and teas and coffee station.", author: "Thaveshini", year: "2025", rating: 5 },
      { quote: "Couldn't fault this accommodation, it was outstanding.", author: "Wendy", year: "2023", rating: 5 },
      { quote: "The room was amazing, the bed is so comfortable, it's clean and well designed.", author: "Eyal", year: "2023", rating: 5 }
    ]
  },
  {
    title: "Loft Family Suite",
    capacity: "4 adults",
    bedConfig: "Queen XL main; two single beds in second (not combinable)",
    description: "First-floor family unit with two bedrooms (Queen XL main; two single beds in second, not combinable), a spacious lounge with full surround sound, full bathroom with double vanity and separate toilet, plus a balcony with Zuikerboschkop views. Interleads with the Master Suite.",
    mainAmenities: [{
      text: "Two bedrooms (Queen XL + two singles)",
      emoji: "🛏️"
    }, {
      text: "Spacious lounge with full surround sound",
      emoji: "🔊"
    }, {
      text: "Balcony with Zuikerboschkop views",
      emoji: "🏔️"
    }, {
      text: "Free Wi-Fi & TV with Netflix",
      emoji: "📺"
    }, {
      text: "Nespresso + frother",
      emoji: "☕"
    }, {
      text: "Percale linen",
      emoji: "🛏️"
    }],
    additionalAmenities: ["DVD player", "Hair dryer", "Heater/fan", "Electric blankets", "Down duvets", "Minibar fridge (still water & milk)", "Premium teas", "Hot chocolate", "Rusks", "Backup power for lights & Wi-Fi", "Backup generator", "Backup water", "Secure parking", "Electric fencing", "Garden & kids' play area", "Interleads with Master Suite"],
    images: ["/images/suites/loft-suite-01.jpg", "/images/suites/loft-suite-02.jpg", "/images/suites/loft-suite-03.jpg", "/images/suites/loft-suite-04.jpg", "/images/suites/loft-suite-05.jpg", "/images/suites/loft-suite-06.jpg", "/images/suites/loft-suite-07.jpg"],
    slug: "loft-suite",
    roomId: 5,
    testimonial: {
      quote: "Perfect for our family of four. The kids loved having their own space while we enjoyed the Zuikerboschkop views from the balcony.",
      author: "The Johnson Family",
      rating: 5
    },
    testimonials: [
      { quote: "Super luxurious b&b style accommodation staying in The Loft Suite.", author: "Martin", year: "2022", rating: 5 },
      { quote: "We stayed in the Loft and it was nice and quiet and private.", author: "Magna V", year: "2024", rating: 5 },
      { quote: "Easy access, good WiFi, heating, cleanliness, space and linen were of the highest quality.", author: "Reynard B", year: "2024", rating: 5 },
      { quote: "Spacious and had all amenities one would need for a comfortable stay.", author: "Erica", year: "2025", rating: 5 },
      { quote: "The location is perfect, walking distance to everything. Rooms well equipped, lots of extras.", author: "Terence", year: "2025", rating: 5 },
      { quote: "Our room was huge and the property was well looked after and very peaceful.", author: "Kirsten", year: "2023", rating: 5 }
    ]
  },
  {
    title: "Garden Suite",
    capacity: "2 guests",
    bedConfig: "Queen XL bed",
    description: "Ground-floor suite with Queen XL bed, wonderful garden views, and a full bathroom featuring double vanity and a sumptuous bath (plus shower). Interleads with the Cove Suite.",
    mainAmenities: [{
      text: "Wonderful garden views",
      emoji: "🌿"
    }, {
      text: "Double vanity bathroom",
      emoji: "🛁"
    }, {
      text: "Sumptuous bath + shower",
      emoji: "🛀"
    }, {
      text: "Free Wi-Fi & TV with Netflix",
      emoji: "📺"
    }, {
      text: "Nespresso + frother",
      emoji: "☕"
    }, {
      text: "Percale linen",
      emoji: "🛏️"
    }],
    additionalAmenities: ["DVD player", "Hair dryer", "Heater/fan", "Electric blankets", "Down duvets", "Minibar fridge (still water & milk)", "Premium teas", "Hot chocolate", "Rusks", "Backup power for lights & Wi-Fi", "Backup generator", "Backup water", "Secure parking", "Electric fencing", "Garden & kids' play area", "Interleads with Cove Suite"],
    images: ["/images/suites/garden-suite-01.jpg", "/images/suites/garden-suite-02.jpg", "/images/suites/garden-suite-03.jpg", "/images/suites/garden-suite-04.jpg", "/images/suites/garden-suite-05.jpg", "/images/suites/garden-suite-06.jpg"],
    slug: "garden-suite",
    roomId: 4,
    testimonial: {
      quote: "The most romantic suite with incredible garden views. The spa bath was pure luxury after a day of fly-fishing.",
      author: "Emma & David R.",
      rating: 5
    },
    testimonials: [
      { quote: "The room was spectacular with some extra treats.", author: "Charlene H", year: "2024", rating: 5 },
      { quote: "Lovely, clean and lots of extras.", author: "Elmarie V", year: "2024", rating: 5 },
      { quote: "Very good value for money and the finer details are special.", author: "Fanie I", year: "2024", rating: 5 },
      { quote: "Very clean, comfortable stay.", author: "Alti", year: "2025", rating: 5 },
      { quote: "The room was modern, cozy and very comfortable.", author: "Lauren", year: "2023", rating: 5 },
      { quote: "Attention to detail, welcome complimentary sherry on arrival.", author: "Reg", year: "2023", rating: 5 }
    ]
  },
  {
    title: "Cove Suite",
    capacity: "2 guests",
    bedConfig: "Queen XL bed",
    description: "Ground-floor retreat with Queen XL bed, a private lounge for two, shower-only bathroom, and a charming outdoor seating area. Interleads with the Garden Suite.",
    mainAmenities: [{
      text: "Private lounge for two",
      emoji: "🛋️"
    }, {
      text: "Shower-only bathroom",
      emoji: "🚿"
    }, {
      text: "Charming outdoor seating area",
      emoji: "🪑"
    }, {
      text: "Free Wi-Fi & TV with Netflix",
      emoji: "📺"
    }, {
      text: "Nespresso + frother",
      emoji: "☕"
    }, {
      text: "Percale linen",
      emoji: "🛏️"
    }],
    additionalAmenities: ["DVD player", "Hair dryer", "Heater/fan", "Electric blankets", "Down duvets", "Minibar fridge (still water & milk)", "Premium teas", "Hot chocolate", "Rusks", "Backup power for lights & Wi-Fi", "Backup generator", "Backup water", "Secure parking", "Electric fencing", "Garden & kids' play area", "Interleads with Garden Suite"],
    images: ["/images/suites/cove-suite-01.jpg", "/images/suites/cove-suite-02.jpg", "/images/suites/cove-suite-03.jpg", "/images/suites/cove-suite-04.jpg", "/images/suites/cove-suite-05.jpg", "/images/suites/cove-suite-06.jpg"],
    slug: "cove-suite",
    roomId: 3,
    testimonials: [
      { quote: "Good location, new, clean and everything in good working order.", author: "Cas P", year: "2025", rating: 5 },
      { quote: "Beautifully appointed, well equipped, and spotlessly clean.", author: "Eugene", year: "2025", rating: 5 },
      { quote: "Impeccable cleanliness and the fireplace abundantly supplied.", author: "Kavi", year: "2023", rating: 5 },
      { quote: "Extremely well equipped and comfortable.", author: "Frik", year: "2023", rating: 5 },
      { quote: "Really good and cozy place, feels like home.", author: "Boris", year: "2023", rating: 5 },
      { quote: "Beautiful place with luxurious treats everywhere you look.", author: "Marisa", year: "2023", rating: 5 }
    ]
  },
  {
    title: "Robin Suite",
    capacity: "2 adults",
    bedConfig: "King bed or two singles (configurable)",
    description: "Ground-floor, spacious bedroom opening to a private patio overlooking the garden. Bedding configurable as King or two singles. Full ensuite bathroom (bath + shower). Interleads with the Falcon Suite and the kitchen/dining area.",
    mainAmenities: [{
      text: "Fireplace",
      emoji: "🔥"
    }, {
      text: "Private patio overlooking garden",
      emoji: "🌿"
    }, {
      text: "Full ensuite bathroom (bath + shower)",
      emoji: "🛁"
    }, {
      text: "Free Wi-Fi & TV with Netflix",
      emoji: "📺"
    }, {
      text: "Nespresso + frother",
      emoji: "☕"
    }, {
      text: "Charlotte Rhys amenities",
      emoji: "🧴"
    }],
    additionalAmenities: ["Hair dryer", "Heater/fan", "Electric blankets", "Down duvets", "Minibar fridge (still water & milk)", "Premium teas", "Hot chocolate", "Rusks", "Backup power for lights & Wi-Fi", "Backup generator", "Backup water", "Secure parking", "Electric fencing", "Lovely garden & kids' play area", "Interleads with Falcon Suite and kitchen/dining area"],
    images: ["/images/suites/robin-suite-01.jpg", "/images/suites/robin-suite-02.jpg", "/images/suites/robin-suite-03.jpg", "/images/suites/robin-suite-04.jpg", "/images/suites/robin-suite-05.jpg", "/images/suites/robin-suite-06.jpg"],
    slug: "robin-suite",
    roomId: 15,
    testimonial: {
      quote: "The cottage charm is incredible! Kids loved the fireplace and we loved the authentic Dullstroom experience.",
      author: "The Williams Family",
      rating: 5
    },
    testimonials: [
      { quote: "The fireplace in the Robin room, the coffee machine, the heater in the bathroom.", author: "Samuels", year: "2024", rating: 5 },
      { quote: "Perfect place for stay in family.", author: "Xavier", year: "2025", rating: 5 },
      { quote: "Beautiful room with a large bathroom. Walking distance to shops and the historic pub.", author: "Peter", year: "2024", rating: 5 },
      { quote: "Thoughtful touches for load shedding.", author: "Lauren", year: "2024", rating: 5 },
      { quote: "Great location and everything you need.", author: "Kirsty", year: "2024", rating: 5 },
      { quote: "Lovely, spacious, and well equipped.", author: "Anneli", year: "2023", rating: 5 }
    ]
  },
  {
    title: "Blue Crane Suite",
    capacity: "2 guests",
    bedConfig: "King bed",
    description: "Ground-floor, spacious bedroom with a private patio, King bed, and a full ensuite bathroom (bath + shower).",
    mainAmenities: [{
      text: "Fireplace",
      emoji: "🔥"
    }, {
      text: "Private patio",
      emoji: "🌿"
    }, {
      text: "Full ensuite bathroom (bath + shower)",
      emoji: "🛁"
    }, {
      text: "Free Wi-Fi & TV with Netflix",
      emoji: "📺"
    }, {
      text: "Nespresso + frother",
      emoji: "☕"
    }, {
      text: "Charlotte Rhys amenities",
      emoji: "🧴"
    }],
    additionalAmenities: ["Hair dryer", "Heater/fan", "Electric blankets", "Down duvets", "Minibar fridge (still water & milk)", "Premium teas", "Hot chocolate", "Rusks", "Backup power for lights & Wi-Fi", "Backup generator", "Backup water", "Secure parking", "Electric fencing", "Garden & kids' play area"],
    images: ["/images/suites/blue-crane-suite-01.jpg", "/images/suites/blue-crane-suite-02.jpg", "/images/suites/blue-crane-suite-03.jpg", "/images/suites/blue-crane-suite-04.jpg", "/images/suites/blue-crane-suite-05.jpg", "/images/suites/blue-crane-suite-06.jpg", "/images/suites/blue-crane-suite-07.jpg"],
    slug: "blue-crane-suite",
    roomId: 17,
    testimonials: [
      { quote: "Near all shops and restaurants… Spacious and beautiful room.", author: "Maruzaan", year: "2024", rating: 5 },
      { quote: "Very quiet spot with an old school feeling. The Indoor fire place is a welcome treat.", author: "Robin", year: "2024", rating: 5 },
      { quote: "Nothing, I liked everything… I'm definitely going to book there again.", author: "Ntombifuthi", year: "2024", rating: 5 },
      { quote: "It was very well appointed, comfortable and convenient.", author: "Jen", year: "2024", rating: 5 },
      { quote: "Beautiful room with a large bathroom. Walking distance to shops and the historic pub.", author: "Peter", year: "2024", rating: 5 },
      { quote: "Great location and everything you need.", author: "Kirsty", year: "2024", rating: 5 }
    ]
  },
  {
    title: "Falcon Suite",
    capacity: "2 guests",
    bedConfig: "King bed or two singles (configurable)",
    description: "Ground-floor suite with a private patio, King bed (or two singles), and a spacious private lounge with fold-out sofa; shower-only ensuite bathroom. Interleads with the Robin Suite and the kitchen/dining area.",
    mainAmenities: [{
      text: "Fireplace",
      emoji: "🔥"
    }, {
      text: "Private patio",
      emoji: "🌿"
    }, {
      text: "Spacious private lounge with fold-out sofa",
      emoji: "🛋️"
    }, {
      text: "Shower-only ensuite bathroom",
      emoji: "🚿"
    }, {
      text: "Free Wi-Fi & TV with Netflix",
      emoji: "📺"
    }, {
      text: "Charlotte Rhys amenities",
      emoji: "🧴"
    }],
    additionalAmenities: ["Hair dryer", "Heater/fan", "Electric blankets", "Down duvets", "Minibar fridge (still water & milk)", "Nespresso + frother", "Premium teas", "Hot chocolate", "Rusks", "Backup power for lights & Wi-Fi", "Backup generator", "Backup water", "Secure parking", "Electric fencing", "Garden & kids' play area", "Interleads with Robin Suite and kitchen/dining area"],
    images: ["/images/suites/falcon-suite-01.jpg", "/images/suites/falcon-suite-02.jpg", "/images/suites/falcon-suite-03.jpg", "/images/suites/falcon-suite-04.jpg", "/images/suites/falcon-suite-05.jpg", "/images/suites/falcon-suite-06.jpg", "/images/suites/falcon-suite-07.jpg"],
    slug: "falcon-suite",
    roomId: 16,
    testimonials: [
      { quote: "Clean and comfortable.", author: "Clement", year: "2024", rating: 5 },
      { quote: "It was very well appointed, comfortable and convenient.", author: "Jen", year: "2024", rating: 5 },
      { quote: "I loved that they put the heater on for me before I arrived.", author: "Carla", year: "2024", rating: 5 },
      { quote: "I thoroughly enjoyed my stay… well-appointed and cosy.", author: "Thanda", year: "2024", rating: 5 },
      { quote: "Close to town, quiet, good value, suite had nice little touches.", author: "Jaegar", year: "2024", rating: 5 },
      { quote: "The room was clean and user friendly.", author: "Ellen", year: "2023", rating: 5 }
    ]
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
      
      {/* Hero Section - Clean height without whitespace */}
      <section className="relative h-[40vh] sm:h-[55vh] md:h-[65vh] lg:h-[75vh] xl:h-[80vh] m-0 p-0">
        <EnhancedImageSlider 
          images={heroImages}
          className="h-full w-full"
          autoPlay={!isTouch}
          autoPlayInterval={6000}
          enableSwipe={true}
        />
      </section>

      {/* Property Overview - Moved above Testimonials */}
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
            Located in Dullstroom, Mpumalanga, our luxurious suites combine modern comfort with refined style across two exceptional properties. The Luxury Guest Suites host up to 10 adults and 2 children in four elegant ensuite rooms, while the charming Cottage Suites offer intimate accommodation for up to 6 adults and 1 child. Enjoy premium self-catering amenities in the heart of South Africa's premier highland retreat.
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

      {/* Social Proof Section */}
      <ReviewShowcase />

      {/* Featured Suites Carousel */}
      <section 
        ref={suitesRef}
        className={`py-6 sm:py-10 md:py-16 lg:py-20 bg-muted transition-all duration-1000 ${
          suitesVisible ? 'scroll-animate' : 'opacity-0'
        }`}
      >
        <div className="responsive-container">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-primary mb-4 font-playfair">Our Elegant Suites</h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
              Explore our two distinct properties: modern Luxury Guest Suites with elegant amenities and our charming Heritage Cottage with authentic character. Swipe through to discover your perfect Dullstroom accommodation.
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {allSuites.map((suite, idx) => (
                  <CarouselItem key={`suite-${idx}`} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                    <div className="h-full">
                      <SuiteBookingCard {...suite} className="h-full" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 md:left-4" />
              <CarouselNext className="right-2 md:right-4" />
            </Carousel>
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

      {/* Featured Booking Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-r from-primary/10 via-background to-accent/10">
        <div className="responsive-container">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-primary mb-4 font-playfair">Book Your Stay at The Browns</h2>
            <p className="text-fluid-lg text-muted-foreground mb-6 leading-relaxed">
              Choose your dates and secure your perfect highland retreat with our best rate guarantee.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <HeroBookingWidget compact={false} />
          </div>
        </div>
      </section>

      {/* Dullstroom Highlights - Interactive Infographic */}
      <section className="py-6 sm:py-10 md:py-16 lg:py-20 bg-accent">
        <div className="responsive-container">
          <DullstroomInfographic 
            variant="grid"
            showShareButton={true}
            className="max-w-6xl mx-auto"
          />
          
          <div className="flex justify-center mt-8">
            <Button 
              asChild 
              size="lg" 
              className="min-h-[48px] sm:min-h-[52px] text-sm sm:text-base font-medium touch-feedback mobile-tap-highlight"
            >
              <Link 
                to="/activities"
                aria-label="Explore Dullstroom highland activities and attractions"
              >
                Explore Highland Activities
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

      {/* Mobile Quick Actions */}
      <MobileQuickActions
        onBooking={() => window.open('https://book.nightsbridge.com/00000?promocode=PUBLICDEMO', '_blank')}
        onCall={() => window.open('tel:+27000000000', '_self')}
        onWhatsApp={() => window.open('https://wa.me/27000000000?text=Hi! I would like to enquire about The Browns Guest Suites.', '_blank')}
      />
    </>
  );
};

export default Index;
