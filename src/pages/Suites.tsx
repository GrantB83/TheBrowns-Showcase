import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SuiteBookingCard } from "@/components/ui/suite-booking-card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { SEO } from "@/components/ui/seo";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { BookingWidget } from "@/components/ui/booking-widget";
import { SuiteFilter } from "@/components/ui/suite-filter";
import { Link } from "react-router-dom";
import { Clock, Gift, Users, ExternalLink, Home } from "lucide-react";
import { ReviewShowcase } from "@/components/ui/review-showcase";
import { ConversionTrackingPage } from "@/components/ui/conversion-tracking-page";
const luxurySuites = [{
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
    { quote: "Couldn’t fault this accommodation, it was outstanding.", author: "Wendy", year: "2023", rating: 5 },
    { quote: "The room was amazing, the bed is so comfortable, it's clean and well designed.", author: "Eyal", year: "2023", rating: 5 }
  ]
}, {
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
}, {
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
}, {
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
}];
const cottageSuites = [{
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
}, {
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
}, {
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
}];
const selfCateringHouses = [
  {
    title: "Luxury Suites — Whole-house",
    capacity: "Up to 10 adults + 2 children",
    bedConfig: "4 suites (Master, Loft, Garden, Cove)",
    description: "Exclusive use of the entire Luxury Suites house (all four suites together) for families or groups (up to 10 adults + 2 children). Private suite entrances; walkable village location.",
    mainAmenities: [{
      text: "Bean-to-cup coffee machine",
      emoji: "☕"
    }, {
      text: "Gas stove, electric oven, microwave",
      emoji: "🍳"
    }, {
      text: "Dishwasher & scullery",
      emoji: "🏠"
    }, {
      text: "Breakfast nook & dining room",
      emoji: "🍽️"
    }, {
      text: "Lounge with 2 Morso fireplaces",
      emoji: "🔥"
    }, {
      text: "Gas braai/barbecue",
      emoji: "🔥"
    }],
    additionalAmenities: ["Backup power for lights & Wi-Fi", "Backup generator", "Backup water", "Secure parking", "Electric fencing", "Garden & kids' play area", "All four luxury suites included", "Private suite entrances", "Walkable village location"],
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
    title: "Heritage Cottage — Whole-house", 
    capacity: "~6 guests",
    bedConfig: "3 ensuite units (Robin, Falcon, Blue Crane)",
    description: "Reserve the entire Heritage Cottage across its independent ensuite units (three available while Owlet is under renovation) for ~6 guests.",
    mainAmenities: [{
      text: "Bean-to-cup coffee machine",
      emoji: "☕"
    }, {
      text: "Gas stove, electric oven, microwave",
      emoji: "🍳"
    }, {
      text: "Dishwasher & scullery",
      emoji: "🏠"
    }, {
      text: "Dining room",
      emoji: "🍽️"
    }, {
      text: "Lounge & kitchen fireplace",
      emoji: "🔥"
    }, {
      text: "Patio braai area",
      emoji: "🔥"
    }],
    additionalAmenities: ["Charlotte Rhys amenities", "Backup power for lights & Wi-Fi", "Backup generator", "Backup water", "Secure parking", "Electric fencing", "Garden & kids' play area", "Three available cottage suites (while Owlet under renovation)", "Independent ensuite units", "Authentic cottage character"],
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
  const [activeFilter, setActiveFilter] = useState<'suite-only' | 'self-catering'>('suite-only');
  const [showLuxurySuites, setShowLuxurySuites] = useState(true);
  const [showCottageSuites, setShowCottageSuites] = useState(true);

  // Filter logic for individual suites
  const filteredLuxurySuites = (activeFilter === 'suite-only' && showLuxurySuites) ? luxurySuites : [];
  const filteredCottageSuites = (activeFilter === 'suite-only' && showCottageSuites) ? cottageSuites : [];
  
  // Filter logic for self-catering houses
  const showSelfCateringHouse = activeFilter === 'self-catering';

  const handleFilterChange = (filter: 'suite-only' | 'self-catering') => {
    setActiveFilter(filter);
  };

  const handleSuiteTypeChange = (luxury: boolean, cottage: boolean) => {
    setShowLuxurySuites(luxury);
    setShowCottageSuites(cottage);
  };

  return <>
      <SEO title="Discover Tailored Dullstroom Luxury Suites 2025 - The Browns" description="Luxury Dullstroom accommodation with Master Suite featuring King XL bed, Self Catering House for groups up to 16. Direct booking benefits included." keywords="Dullstroom luxury guesthouse 2025, Panorama Route accommodation, self catering Dullstroom, family suites Mpumalanga, luxury cottage accommodation" />
      
      {/* Conversion Tracking for Accommodation Page */}
      <ConversionTrackingPage pageType="accommodation" />
      
      <div className="min-h-screen">
        {/* Intro Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary/10 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
                  <Home className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Two Distinct Houses, One Exceptional Experience</span>
                  <span className="sm:hidden">
                    Two Distinct Houses,<br />
                    One Exceptional Experience
                  </span>
                </Badge>
                
                <h1 className="text-primary mb-6">
                  Choose Your Perfect Dullstroom Retreat
                </h1>
                
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-4xl mx-auto">
                  Experience luxury highland accommodation with two distinct styles: modern sophistication in our Luxury Guest Suites 
                  or authentic cottage charm in our neighbouring Heritage Cottage. Each offers premium amenities and personalized service. 
                  For a complete guide to <Link to="/dullstroom-accommodation-travel-guide" className="text-primary hover:underline">where to stay in Dullstroom</Link> and planning your perfect getaway, visit our comprehensive travel guide.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Suite Filter */}
        <section className="section-spacing" id="suites-section">
          <div className="responsive-container">
            <SuiteFilter
              activeFilter={activeFilter}
              onFilterChange={handleFilterChange}
              showLuxurySuites={showLuxurySuites}
              showCottageSuites={showCottageSuites}
              onSuiteTypeChange={handleSuiteTypeChange}
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

        {/* Booking Widget after suites */}
        {(filteredLuxurySuites.length > 0 || filteredCottageSuites.length > 0) && (
          <section className="section-spacing bg-muted/30">
            <div className="responsive-container">
              <div className="max-w-2xl mx-auto">
                <BookingWidget showRecommendations={false} />
              </div>
            </div>
          </section>
        )}

        {(filteredCottageSuites.length > 0 && showSelfCateringHouse) && (
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
        <ReviewShowcase 
          title="Trusted by Hundreds of Highland Guests"
          subtitle="See why travelers choose The Browns for their Dullstroom luxury accommodation"
          compact={true} 
        />

        {/* Final Call to Action */}
        <section className="section-spacing bg-gradient-to-br from-primary/10 to-accent/5">
          <div className="responsive-container text-center">
            <h2 className="text-primary mb-6">Ready for Your Dullstroom Highland Escape?</h2>
            <p className="text-fluid-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Book direct for guaranteed best rates, and a complimentary welcome drink. Your luxury highland experience awaits in the heart of South Africa's trout fishing capital.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <Button size="lg" className="min-h-[56px] flex-1 text-base font-semibold touch-target" asChild>
                <a href="https://book.nightsbridge.com/00000?promocode=PUBLICDEMO" target="_blank" rel="noopener noreferrer">
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