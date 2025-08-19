import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SuiteBookingCard } from "@/components/ui/suite-booking-card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { SEO } from "@/components/ui/seo";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { BookingWidget } from "@/components/ui/booking-widget";
import { SuiteFilter } from "@/components/ui/suite-filter";
import { TwoHouseSelectionHero } from "@/components/ui/two-house-selection-hero";
import { Link } from "react-router-dom";
import { Clock, Gift, Users, ExternalLink } from "lucide-react";
const luxurySuites = [{
  title: "Master Suite",
  capacity: "2 adults + 2 children under 12",
  bedConfig: "King XL bed + Double sofa bed (kids under 12)",
  description: "Our flagship suite offers the ultimate in luxury with a spacious private unit featuring a dedicated dressing room, spacious lounge area, and full ensuite bathroom with double vanity and double shower. Enjoy Zuikerboschkop mountain views from the first-floor balcony. Perfect for romantic getaways with modern conveniences.",
  mainAmenities: [{
    text: "Hot water bottles & electric blankets",
    emoji: "🔥"
  }, {
    text: "WiFi & Netflix system",
    emoji: "📺"
  }, {
    text: "Nespresso coffee machine",
    emoji: "☕"
  }, {
    text: "Zuikerboschkop views from balcony",
    emoji: "🏔️"
  }, {
    text: "Double vanity ensuite",
    emoji: "🛁"
  }, {
    text: "Private dressing room",
    emoji: "👗"
  }],
  additionalAmenities: ["Elegant lounge area with fireplace", "Interleads with Loft Suite for families", "Free high-speed WiFi throughout", "Charlotte Rhys premium toiletries", "Extra mattresses available for children", "Cot with linen for infants", "High chair & microwave for baby feeding", "Zuikerboschkop mountain views from first-floor balcony", "Secure parking included", "Daily housekeeping available", "Complimentary tea and coffee selection"],
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
    { quote: "Couldn’t fault this accommodation, it was outstanding.", author: "Wendy", year: "2023", rating: 5 },
    { quote: "The room was amazing, the bed is so comfortable, it's clean and well designed.", author: "Eyal", year: "2023", rating: 5 }
  ]
}, {
  title: "Loft Family Suite",
  capacity: "4 adults",
  bedConfig: "Queen XL bed + 2 Single XL beds",
  description: "Perfect for families, the Loft Suite features two comfortable bedrooms with Zuikerboschkop mountain views from the first-floor balcony, a welcoming lounge area, and spacious bathroom. Connects with Master Suite for larger groups.",
  mainAmenities: [{
    text: "Zuikerboschkop views from balcony",
    emoji: "🏔️"
  }, {
    text: "Hot water bottles & electric blankets",
    emoji: "🔥"
  }, {
    text: "Netflix & entertainment",
    emoji: "📺"
  }, {
    text: "Nespresso coffee machine",
    emoji: "☕"
  }, {
    text: "Double vanity bathroom",
    emoji: "🛁"
  }, {
    text: "Two separate bedrooms",
    emoji: "🛏️"
  }],
  additionalAmenities: ["Comfortable family lounge area", "Connects to Master Suite for large groups", "Free WiFi throughout both bedrooms", "Premium tea and coffee selection", "Charlotte Rhys toiletries and amenities", "Extra mattresses for additional guests", "Cot with linen for infants", "High chair & microwave facilities", "Zuikerboschkop mountain views from first-floor balcony", "Secure covered parking"],
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
}, {
  title: "Garden Suite",
  capacity: "2 guests",
  bedConfig: "Queen XL bed",
  description: "A romantic ground floor retreat with private entrance and enchanting garden views. Features luxurious dual vanity bathroom with both spa bath and shower, perfect for couples seeking intimate luxury.",
  mainAmenities: [{
    text: "Stunning garden views",
    emoji: "🌿"
  }, {
    text: "Private entrance",
    emoji: "🚪"
  }, {
    text: "Dual vanity bathroom",
    emoji: "🛁"
  }, {
    text: "Spa bath and shower",
    emoji: "🛀"
  }, {
    text: "Hot water bottles & electric blankets",
    emoji: "🔥"
  }, {
    text: "Netflix & DVD player",
    emoji: "📺"
  }],
  additionalAmenities: ["48-inch LED TV with premium channels", "Free high-speed WiFi", "Nespresso machine with premium pods", "Charlotte Rhys luxury toiletries", "Private garden terrace access", "Romantic lighting and ambiance", "Extra mattresses if needed", "Cot with linen for infants", "High chair & microwave for babies", "Complimentary wine on arrival (weekends)"],
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
}, {
  title: "Cove Suite",
  capacity: "2 guests",
  bedConfig: "Queen XL bed",
  description: "An intimate ground floor suite featuring a cozy lounge, comfortable bedroom, and modern shower bathroom. Perfect blend of comfort and convenience with premium entertainment and luxury amenities.",
  mainAmenities: [{
    text: "Hot water bottles & electric blankets",
    emoji: "🔥"
  }, {
    text: "Netflix & DVD player",
    emoji: "📺"
  }, {
    text: "Nespresso coffee machine",
    emoji: "☕"
  }, {
    text: "Modern shower bathroom",
    emoji: "🚿"
  }, {
    text: "Comfortable lounge area",
    emoji: "🛋️"
  }, {
    text: "Premium entertainment system",
    emoji: "🎬"
  }],
  additionalAmenities: ["48-inch LED TV with streaming", "Free WiFi throughout suite", "Charlotte Rhys premium toiletries", "Daily housekeeping service available", "Ground floor accessibility", "Intimate dining space for two", "Extra mattresses available", "Cot with linen for infants", "High chair & microwave facilities", "Private entrance and parking"],
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
}];
const cottageSuites = [{
  title: "Robin Suite",
  capacity: "2 adults + 2 children under 12",
  bedConfig: "King XL bed or 2 Singles + Fold-out double sofa (kids under 12)",
  description: "Stylish and comfortable cottage suite featuring a warm fireplace and flexible bedding arrangements. Combines modern comfort with authentic Dullstroom cottage character, perfect for families.",
  mainAmenities: [{
    text: "Warm fireplace",
    emoji: "🔥"
  }, {
    text: "Netflix entertainment",
    emoji: "📺"
  }, {
    text: "Nespresso coffee machine",
    emoji: "☕"
  }, {
    text: "Full ensuite bathroom",
    emoji: "🛁"
  }, {
    text: "Flexible bedding options",
    emoji: "🛏️"
  }, {
    text: "Cottage garden access",
    emoji: "🌿"
  }],
  additionalAmenities: ["Charlotte Rhys luxury toiletries", "Free WiFi throughout cottage", "Premium tea and coffee selection", "Daily housekeeping available", "Hot water bottles & electric blankets", "Authentic cottage atmosphere", "Extra mattresses for children", "Cot with linen for infants", "High chair & microwave for babies", "Private cottage garden access", "Wood for fireplace included"],
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
}, {
  title: "Blue Crane Suite",
  capacity: "2 guests",
  bedConfig: "Flexible bed configuration",
  description: "Charming and comfortable cottage suite designed for couples, featuring a private beverage station and cozy fireplace. Embodies the essence of cottage comfort with romantic atmosphere.",
  mainAmenities: [{
    text: "Private beverage station",
    emoji: "☕"
  }, {
    text: "Cozy fireplace",
    emoji: "🔥"
  }, {
    text: "Garden views",
    emoji: "🌿"
  }, {
    text: "Romantic ambiance",
    emoji: "💕"
  }, {
    text: "Comfortable seating area",
    emoji: "🛋️"
  }, {
    text: "Cottage atmosphere",
    emoji: "🏡"
  }],
  additionalAmenities: ["Free WiFi throughout", "Charlotte Rhys luxury toiletries", "Premium coffee and tea facilities", "Flexible room layout options", "Hot water bottles & electric blankets", "Cottage garden access", "Extra mattresses available", "Cot with linen for infants", "High chair & microwave facilities", "Romantic cottage lighting", "Complimentary wood for fireplace"],
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
}, {
  title: "Falcon Suite",
  capacity: "2-3 guests",
  bedConfig: "Flexible bed configuration for small families",
  description: "Spacious and elegant cottage suite offering cozy comfort with sophisticated touches. Features warm fireplace, premium entertainment, and flexible accommodation for small families.",
  mainAmenities: [{
    text: "Warm fireplace",
    emoji: "🔥"
  }, {
    text: "Netflix entertainment",
    emoji: "📺"
  }, {
    text: "Bootlegger coffee station",
    emoji: "☕"
  }, {
    text: "Spacious living area",
    emoji: "🛋️"
  }, {
    text: "Family-friendly layout",
    emoji: "👨‍👩‍👧‍👦"
  }, {
    text: "Cottage garden access",
    emoji: "🌿"
  }],
  additionalAmenities: ["Free WiFi throughout cottage", "Charlotte Rhys toiletries", "Elegant cozy comfort furnishings", "Premium entertainment system", "Hot water bottles & electric blankets", "Flexible family sleeping arrangements", "Extra mattresses available", "Cot with linen for infants", "High chair & microwave for children", "Private cottage entrance", "Secure parking space"],
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
}];
const selfCateringHouses = [
  {
    title: "Luxury Guest House",
    capacity: "Up to 10 adults + 2 children under 12",
    bedConfig: "4 suites (Master, Loft, Garden, Cove)",
    description: "Our main luxury guest house features four elegantly appointed suites with modern amenities, mountain views, and sophisticated comfort. Perfect for smaller groups seeking premium accommodation with full self-catering facilities.",
    mainAmenities: [{
      text: "Full kitchen facilities",
      emoji: "🍳"
    }, {
      text: "Mountain views from balcony",
      emoji: "🏔️"
    }, {
      text: "4 luxury suites",
      emoji: "🛏️"
    }, {
      text: "Entertainment areas",
      emoji: "📺"
    }, {
      text: "Secure parking",
      emoji: "🚗"
    }, {
      text: "WiFi throughout",
      emoji: "📶"
    }],
    additionalAmenities: ["Master Suite with private dressing room", "Loft Suite perfect for families", "Garden Suite with spa bath", "Cove Suite with modern amenities", "Commercial-style kitchen", "Indoor and outdoor dining", "Laundry facilities", "Barbecue area", "Free WiFi throughout", "Daily housekeeping available"],
    slug: "luxury-guest-house",
    roomId: 18,
    testimonials: [
      { quote: "The house is well stocked and furnished beautifully.", author: "Sonja", year: "2025", rating: 5 },
      { quote: "Spacious and had all amenities one would need for a comfortable stay.", author: "Erica", year: "2025", rating: 5 },
      { quote: "Cute attention to detail with coffee, water and sherry provided.", author: "Paula", year: "2023", rating: 5 },
      { quote: "Excellent location in Dullstroom. Highly recommended!", author: "Jonathan", year: "2025", rating: 5 },
      { quote: "Very clean, comfortable stay.", author: "Alti", year: "2025", rating: 5 },
      { quote: "Beautifully appointed, well equipped, and spotlessly clean.", author: "Eugene", year: "2025", rating: 5 }
    ],
    images: ['/images/suites/master-suite-01.jpg', '/images/suites/loft-suite-01.jpg', '/images/suites/garden-suite-01.jpg', '/images/suites/cove-suite-01.jpg']
  },
  {
    title: "Heritage Cottage House", 
    capacity: "Up to 6 adults",
    bedConfig: "3 cottage suites (Robin, Blue Crane, Falcon)",
    description: "Our charming heritage cottage house offers authentic cottage character with warm fireplaces and cozy atmospheres. Features three distinctive cottage suites, each with unique charm and full self-catering capabilities.",
    mainAmenities: [{
      text: "Cottage fireplaces",
      emoji: "🔥"
    }, {
      text: "Heritage character",
      emoji: "🏡"
    }, {
      text: "3 cottage suites",
      emoji: "🛏️"
    }, {
      text: "Garden access",
      emoji: "🌿"
    }, {
      text: "Self-catering kitchen",
      emoji: "🍳"
    }, {
      text: "Authentic atmosphere",
      emoji: "✨"
    }],
    additionalAmenities: ["Robin Suite with fireplace and flexible bedding", "Blue Crane Suite perfect for couples", "Falcon Suite ideal for small families", "Full cottage kitchen facilities", "Cottage garden access", "Wood for fireplaces included", "Free WiFi throughout", "Authentic Dullstroom cottage experience", "Private cottage entrance", "Secure parking"],
    slug: "heritage-cottage-house",
    roomId: 19,
    testimonials: [
      { quote: "Everything you can think about for an ultra comfortable home stay… Lovely garden.", author: "Sonja", year: "2024", rating: 5 },
      { quote: "I thoroughly enjoyed my stay… well-appointed and cosy.", author: "Thanda", year: "2024", rating: 5 },
      { quote: "It was very well appointed, comfortable and convenient.", author: "Jen", year: "2024", rating: 5 },
      { quote: "Beautiful room with a large bathroom. Walking distance to shops and the historic pub.", author: "Peter", year: "2024", rating: 5 },
      { quote: "Great location and everything you need.", author: "Kirsty", year: "2024", rating: 5 },
      { quote: "Near all shops and restaurants… Spacious and beautiful room.", author: "Maruzaan", year: "2024", rating: 5 }
    ],
    images: ['/images/suites/heritage-cottage-cover.jpg', '/images/suites/robin-suite-01.jpg', '/images/suites/blue-crane-suite-01.jpg', '/images/suites/falcon-suite-01.jpg']
  }
];
const testimonials = [{
  quote: "Everything was so luxurious, it felt like we booked into a hotel. The rooms are spacious, and the beds have electric blankets.",
  author: "Elsabe83",
  rating: 5,
  year: "2021"
}, {
  quote: "Thoughtful touches such as hot chocolate, espresso machine with milk frother and sweets. Exceptional quality furnishings.",
  author: "tdvilliers",
  rating: 5,
  year: "2020"
}, {
  quote: "Great linens, bed, bath, and services. What a comfortable stay!",
  author: "SouthAfricaSanta",
  rating: 5,
  year: "2019"
}];
export default function Suites() {
  const [activeFilter, setActiveFilter] = useState<'luxury' | 'cottage' | 'self-catering'>('luxury');

  // Filter logic for individual suites
  const filteredLuxurySuites = activeFilter === 'luxury' ? luxurySuites : [];
  const filteredCottageSuites = activeFilter === 'cottage' ? cottageSuites : [];
  
  // Filter logic for self-catering houses
  const showSelfCateringHouse = activeFilter === 'self-catering';

  const handleFilterChange = (filter: 'luxury' | 'cottage' | 'self-catering') => {
    setActiveFilter(filter);
  };

  return <>
      <SEO title="Discover Tailored Dullstroom Luxury Suites 2025 - The Browns" description="Luxury Dullstroom accommodation with Master Suite featuring King XL bed, Self Catering House for groups up to 16. Direct booking benefits included." keywords="Dullstroom luxury guesthouse 2025, Panorama Route accommodation, self catering Dullstroom, family suites Mpumalanga, luxury cottage accommodation" />
      
      <div className="min-h-screen">
        {/* Two House Selection Hero */}
        <TwoHouseSelectionHero 
          onFilterChange={handleFilterChange}
          activeFilter={activeFilter}
        />

        {/* Quick Booking Widget */}
        <section className="section-spacing bg-muted/30">
          <div className="responsive-container">
            <div className="max-w-2xl mx-auto">
              <BookingWidget showRecommendations={false} />
            </div>
          </div>
        </section>

        {/* Enhanced Suite Filter */}
        <section className="section-spacing" id="suites-section">
          <div className="responsive-container">
            <SuiteFilter
              activeFilter={activeFilter}
              onFilterChange={handleFilterChange}
            />
          </div>
        </section>

        {/* Luxury Suites Section */}
        {filteredLuxurySuites.length > 0 && (
          <section className="section-spacing">
            <div className="responsive-container">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
                  Modern Luxury
                </Badge>
                <h2 className="text-primary mb-6">Luxury Guest Suites</h2>
                <p className="text-fluid-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  Sophisticated design meets modern comfort in our guest house. Perfect for couples, families, 
                  and discerning travelers seeking premium highland accommodation.
                </p>
              </div>
              
              <div className="space-y-8">
                {filteredLuxurySuites.map((suite, index) => (
                  <SuiteBookingCard 
                    key={suite.slug} 
                    {...suite} 
                    className={index % 2 === 1 ? "bg-muted/20" : ""} 
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {(filteredLuxurySuites.length > 0 && filteredCottageSuites.length > 0 && activeFilter !== 'self-catering') && (
          <Separator className="my-6" />
        )}

        {/* Cottage Suites Section */}
        {filteredCottageSuites.length > 0 && (
          <section className="section-spacing">
            <div className="responsive-container">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="mb-6 text-sm px-4 py-2 bg-secondary text-secondary-foreground">
                  Cottage Charm
                </Badge>
                <h2 className="text-primary mb-6">Heritage Cottage Suites</h2>
                <p className="text-fluid-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  Authentic cottage character with warm fireplaces and cozy atmospheres. 
                  Perfect for romantic getaways and families seeking genuine highland charm.
                </p>
              </div>
              
              <div className="space-y-8">
                {filteredCottageSuites.map((suite, index) => (
                  <SuiteBookingCard 
                    key={suite.slug} 
                    {...suite} 
                    className={index % 2 === 0 ? "bg-muted/20" : ""} 
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {(filteredCottageSuites.length > 0 && showSelfCateringHouse && activeFilter !== 'self-catering') && (
          <Separator className="my-6" />
        )}

        {/* Self Catering Houses Section */}
        {showSelfCateringHouse && (
          <section className="section-spacing bg-muted/30">
            <div className="responsive-container">
              <div className="text-center mb-12">
                <Badge variant="outline" className="mb-6 text-sm px-4 py-2 border-primary text-primary">
                  <Users className="h-4 w-4 mr-2" />
                  Groups & Events
                </Badge>
                <h2 className="text-primary mb-6">Self-Catering Houses</h2>
                <p className="text-fluid-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  Two beautifully appointed houses perfect for groups, family reunions, or corporate retreats. 
                  Book the Luxury Guest House (up to 10 adults & 2 children under 12) or Heritage Cottage House (up to 6 adults) separately, 
                  or combine both adjoining houses for larger groups up to 18+ guests. Mattresses can also be added for little children. Each house offers fully equipped 
                  self-catering facilities for independent luxury living in the Dullstroom highlands.
                </p>
              </div>
              
              <div className="space-y-8 max-w-6xl mx-auto">
                {selfCateringHouses.map((house, index) => (
                  <SuiteBookingCard 
                    key={house.slug} 
                    {...house} 
                    className={index % 2 === 1 ? "bg-background/50" : ""} 
                  />
                ))}
                
                <div className="text-center mt-8 p-6 bg-primary/10 border border-primary/20 rounded-lg max-w-2xl mx-auto">
                  <h3 className="text-primary font-semibold mb-2">Combined Booking Option</h3>
                  <p className="text-sm text-muted-foreground">
                    Both houses adjoin each other and can be booked together for groups up to 16 guests, 
                    offering the ultimate private highland retreat experience.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Social Proof Section */}
        <section className="section-spacing">
          <div className="responsive-container">
            <div className="text-center mb-12">
              <h2 className="text-primary mb-6">What Our Guests Say</h2>
              <div className="mb-6">
                <Badge variant="outline" className="text-sm px-4 py-2">
                  200+ Five Star Reviews
                </Badge>
              </div>
            </div>
            
            <div className="card-grid max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} className="animate-fade-in" />
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Booking Section */}
        <section className="section-spacing">
          <div className="responsive-container">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-primary mb-6">Ready to Book Your Suite?</h2>
                <p className="text-fluid-lg text-muted-foreground">
                  Secure your luxury highland accommodation with our streamlined booking process
                </p>
              </div>
              
              <BookingWidget showRecommendations={false} />
            </div>
          </div>
        </section>

        {/* Final Call to Action */}
        <section className="section-spacing bg-gradient-to-br from-primary/10 to-accent/5">
          <div className="responsive-container text-center">
            <h2 className="text-primary mb-6">Ready for Your Dullstroom Highland Escape?</h2>
            <p className="text-fluid-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Book direct for guaranteed best rates, and a complimentary welcome drink. Your luxury highland experience awaits in the heart of South Africa's trout fishing capital.
            </p>
            
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-10 max-w-md mx-auto">
              <div className="flex items-center justify-center gap-2 text-primary font-semibold mb-2">
                <Clock className="h-5 w-5" />
                <span>Highland Luxury Awaits</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Experience the best of Dullstroom hospitality
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <Button size="lg" className="min-h-[56px] flex-1 text-base font-semibold touch-target" asChild>
                <a href="https://book.nightsbridge.com/00000" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Book Your Perfect Suite
                </a>
              </Button>
              <Button variant="outline" size="lg" className="min-h-[56px] flex-1 text-base font-semibold touch-target" asChild>
                <Link to="/contact">Ask Questions</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>;
}