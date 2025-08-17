import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SuiteBookingCard } from "@/components/ui/suite-booking-card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { SEO } from "@/components/ui/seo";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { BookingWidget } from "@/components/ui/booking-widget";
import { ReviewShowcase } from "@/components/ui/review-showcase";
import { TwoHouseSelectionHero } from "@/components/ui/two-house-selection-hero";
import { Link } from "react-router-dom";
import { Clock, Gift, Users, ExternalLink, Filter, Crown } from "lucide-react";
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
  urgencyMessage: "Premium luxury suite",
  testimonial: {
    quote: "The Master Suite exceeded all expectations. Perfect for our anniversary with incredible attention to detail.",
    author: "Sarah & Michael K.",
    rating: 5
  }
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
  urgencyMessage: "Ideal for families",
  testimonial: {
    quote: "Perfect for our family of four. The kids loved having their own space while we enjoyed the Zuikerboschkop views from the balcony.",
    author: "The Johnson Family",
    rating: 5
  }
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
  urgencyMessage: "Romantic retreat",
  testimonial: {
    quote: "The most romantic suite with incredible garden views. The spa bath was pure luxury after a day of fly-fishing.",
    author: "Emma & David R.",
    rating: 5
  }
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
  urgencyMessage: "Intimate & modern"
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
  urgencyMessage: "Cottage charm",
  testimonial: {
    quote: "The cottage charm is incredible! Kids loved the fireplace and we loved the authentic Dullstroom experience.",
    author: "The Williams Family",
    rating: 5
  }
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
  urgencyMessage: "Couples' favorite"
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
  urgencyMessage: "Family elegance"
}];
const selfCateringHouse = {
  title: "Self Catering House",
  capacity: "Up to 16 guests",
  bedConfig: "8 bedrooms with flexible configurations",
  description: "Fully equipped luxury self-catering house perfect for large groups, families, or corporate retreats. Features multiple bedrooms, full kitchen facilities, barbecue areas, and secure parking for the ultimate Dullstroom group experience.",
  mainAmenities: [{
    text: "Full kitchen facilities",
    emoji: "🍳"
  }, {
    text: "Barbecue entertainment areas",
    emoji: "🔥"
  }, {
    text: "Secure parking for multiple vehicles",
    emoji: "🚗"
  }, {
    text: "Large group dining areas",
    emoji: "🍽️"
  }, {
    text: "Multiple entertainment zones",
    emoji: "📺"
  }, {
    text: "Highland countryside views",
    emoji: "🏔️"
  }],
  additionalAmenities: ["8 fully equipped bedrooms", "Multiple bathroom facilities", "Large commercial-style kitchen", "Indoor and outdoor dining spaces", "Entertainment and lounge areas", "Secure off-street parking", "Free WiFi throughout property", "Laundry facilities included", "Barbecue and outdoor entertaining", "Group accommodation rates", "Corporate retreat facilities", "Event hosting capabilities"],
  slug: "self-catering-house",
  roomId: 18,
  urgencyMessage: "Perfect for groups"
};
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
  const [activeFilter, setActiveFilter] = useState<'all' | 'luxury' | 'cottage'>('all');

  const filteredLuxurySuites = activeFilter === 'cottage' ? [] : luxurySuites;
  const filteredCottageSuites = activeFilter === 'luxury' ? [] : cottageSuites;
  const showSelfCateringHouse = activeFilter !== 'cottage';

  const handleFilterChange = (filter: 'all' | 'luxury' | 'cottage') => {
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

        {/* Review Showcase Section */}
        <ReviewShowcase />

        {/* Quick Booking Widget */}
        <section className="py-8 sm:py-12 lg:py-16 bg-muted/30">
          <div className="responsive-container">
            <div className="max-w-2xl mx-auto">
              <BookingWidget showRecommendations={false} />
            </div>
          </div>
        </section>

        {/* Simple Suite Filter */}
        <section className="py-4 sm:py-6" id="suites-section">
          <div className="responsive-container">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Button
                variant={activeFilter === 'all' ? 'default' : 'outline'}
                onClick={() => handleFilterChange('all')}
                className="min-h-[44px]"
              >
                <Filter className="h-4 w-4 mr-2" />
                All Suites
              </Button>
              <Button
                variant={activeFilter === 'luxury' ? 'default' : 'outline'}
                onClick={() => handleFilterChange('luxury')}
                className="min-h-[44px]"
              >
                <Crown className="h-4 w-4 mr-2" />
                Luxury Suites
              </Button>
              <Button
                variant={activeFilter === 'cottage' ? 'default' : 'outline'}
                onClick={() => handleFilterChange('cottage')}
                className="min-h-[44px]"
              >
                <Gift className="h-4 w-4 mr-2" />
                Cottage Suites
              </Button>
            </div>
          </div>
        </section>

        {/* Luxury Suites Section */}
        {filteredLuxurySuites.length > 0 && (
          <section className="section-spacing" id={activeFilter === 'all' ? 'suites-section' : ''}>
            <div className="responsive-container">
              <div className="text-center mb-8 sm:mb-10 lg:mb-12">
                <Badge variant="secondary" className="mb-4 text-xs sm:text-sm">Modern Luxury</Badge>
                <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-primary mb-4 font-playfair">Luxury Guest Suites</h2>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-2">
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

        {(filteredLuxurySuites.length > 0 && filteredCottageSuites.length > 0) && (
          <Separator className="my-8" />
        )}

        {/* Cottage Suites Section */}
        {filteredCottageSuites.length > 0 && (
          <section className="py-12 sm:py-16 lg:py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-secondary text-secondary-foreground">Cottage Charm</Badge>
                <h2 className="text-primary mb-4">Heritage Cottage Suites</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
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

        {(filteredCottageSuites.length > 0 && showSelfCateringHouse) && (
          <Separator className="my-8" />
        )}

        {/* Self Catering House Section */}
        {showSelfCateringHouse && (
          <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <Badge variant="outline" className="mb-4 border-primary text-primary">
                  <Users className="h-4 w-4 mr-2" />
                  Groups & Events
                </Badge>
                <h2 className="text-primary mb-4">Self Catering House</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Perfect for large groups, family reunions, or corporate retreats. 
                  Fully equipped for independent luxury living in the Dullstroom highlands.
                </p>
              </div>
              
              <SuiteBookingCard 
                {...selfCateringHouse} 
                images={['/images/suites/self-catering-house-01.jpg', '/images/suites/self-catering-house-02.jpg']} 
                className="max-w-4xl mx-auto" 
              />
            </div>
          </section>
        )}

        {/* Social Proof Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">What Our Guests Say</h2>
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => <div key={i} className="h-5 w-5 text-secondary fill-secondary">⭐</div>)}
                <span className="ml-2 text-muted-foreground">4.9/5 from 200+ reviews</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => <TestimonialCard key={index} {...testimonial} />)}
            </div>
          </div>
        </section>

        {/* Enhanced Booking Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-primary mb-4">Ready to Book Your Suite?</h2>
                <p className="text-lg text-muted-foreground">
                  Secure your luxury highland accommodation with our streamlined booking process
                </p>
              </div>
              
              <BookingWidget showRecommendations={true} />
            </div>
          </div>
        </section>

        {/* Final Call to Action */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary/10 to-accent/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-primary mb-6">Ready for Your Dullstroom Highland Escape?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">Book direct for guaranteed best rates, and a complimentary welcome drink. Your luxury highland experience awaits in the heart of South Africa's trout fishing capital.</p>
            
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-8 max-w-md mx-auto">
                <div className="flex items-center justify-center gap-2 text-primary font-semibold mb-2">
                  <Clock className="h-4 w-4" />
                  <span>Highland Luxury Awaits</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Experience the best of Dullstroom hospitality
                </p>
              </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button size="lg" className="min-h-[48px] flex-1" asChild>
                <a href="https://book.nightsbridge.com/00000" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Book Your Perfect Suite
                </a>
              </Button>
              <Button variant="outline" size="lg" className="min-h-[48px] flex-1" asChild>
                <Link to="/contact">Ask Questions</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>;
}