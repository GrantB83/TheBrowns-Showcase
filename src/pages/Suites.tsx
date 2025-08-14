import { Button } from "@/components/ui/button";
import { SuiteBookingCard } from "@/components/ui/suite-booking-card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { SEO } from "@/components/ui/seo";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { BookingWidget } from "@/components/ui/booking-widget";
import { Link } from "react-router-dom";
import { Clock, Gift, Users, ExternalLink } from "lucide-react";
const luxurySuites = [{
  title: "Master Suite",
  capacity: "2 adults + 2 children under 12",
  bedConfig: "King XL bed + Double sofa bed (kids under 12)",
  description: "Our flagship suite offers the ultimate in luxury with a spacious private unit featuring a dedicated dressing room, elegant lounge area, and ensuite bathroom with double vanity. Perfect for romantic getaways with modern conveniences.",
  mainAmenities: [{
    text: "Hot water bottles & electric blankets",
    emoji: "🔥"
  }, {
    text: "Netflix & entertainment system",
    emoji: "📺"
  }, {
    text: "Nespresso coffee machine",
    emoji: "☕"
  }, {
    text: "Beautiful garden views",
    emoji: "🌿"
  }, {
    text: "Double vanity ensuite",
    emoji: "🛁"
  }, {
    text: "Private dressing room",
    emoji: "👗"
  }],
  additionalAmenities: ["Elegant lounge area with fireplace", "Interleads with Loft Suite for families", "Free high-speed WiFi throughout", "Charlotte Rhys premium toiletries", "Extra mattresses available for children", "Cot with linen for infants", "High chair & microwave for baby feeding", "Secure parking included", "Daily housekeeping available", "Complimentary tea and coffee selection"],
  images: ["/images/suites/master-suite-01.jpg", "/images/suites/master-suite-02.jpg", "/images/suites/master-suite-03.jpg", "/images/suites/master-suite-04.jpg", "/images/suites/master-suite-05.jpg", "/images/suites/master-suite-06.jpg", "/images/suites/master-suite-07.jpg"],
  slug: "master-suite",
  roomId: 6,
  price: "From R3,200/night",
  urgencyMessage: "Only 2 Dates Left This Month",
  testimonial: {
    quote: "The Master Suite exceeded all expectations. Perfect for our anniversary with incredible attention to detail.",
    author: "Sarah & Michael K.",
    rating: 5
  }
}, {
  title: "Loft Family Suite",
  capacity: "4 adults",
  bedConfig: "Queen XL bed + 2 Single XL beds",
  description: "Perfect for families, the Loft Suite features two comfortable bedrooms with spectacular mountain views, a welcoming lounge area, and spacious bathroom. Connects with Master Suite for larger groups.",
  mainAmenities: [{
    text: "Spectacular mountain views",
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
  additionalAmenities: ["Comfortable family lounge area", "Connects to Master Suite for large groups", "Free WiFi throughout both bedrooms", "Premium tea and coffee selection", "Charlotte Rhys toiletries and amenities", "Extra mattresses for additional guests", "Cot with linen for infants", "High chair & microwave facilities", "Mountain view from every window", "Secure covered parking"],
  images: ["/images/suites/loft-suite-01.jpg", "/images/suites/loft-suite-02.jpg", "/images/suites/loft-suite-03.jpg", "/images/suites/loft-suite-04.jpg", "/images/suites/loft-suite-05.jpg", "/images/suites/loft-suite-06.jpg", "/images/suites/loft-suite-07.jpg"],
  slug: "loft-suite",
  roomId: 5,
  price: "From R2,800/night",
  urgencyMessage: "Family Special Available",
  testimonial: {
    quote: "Perfect for our family of four. The kids loved having their own space while we enjoyed the mountain views.",
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
  price: "From R2,500/night",
  urgencyMessage: "Weekend Special",
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
  price: "From R2,300/night",
  urgencyMessage: "Last Room This Weekend"
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
  price: "From R2,400/night",
  urgencyMessage: "Cottage Special - Book 3 Nights Save 20%",
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
  price: "From R2,200/night",
  urgencyMessage: "Romantic Special Available"
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
  price: "From R2,600/night"
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
    text: "Highland mountain views",
    emoji: "🏔️"
  }],
  additionalAmenities: ["8 fully equipped bedrooms", "Multiple bathroom facilities", "Large commercial-style kitchen", "Indoor and outdoor dining spaces", "Entertainment and lounge areas", "Secure off-street parking", "Free WiFi throughout property", "Laundry facilities included", "Barbecue and outdoor entertaining", "Group booking discounts available", "Corporate retreat facilities", "Event hosting capabilities"],
  slug: "self-catering-house",
  roomId: 18,
  price: "From R8,500/night",
  urgencyMessage: "Perfect for Groups - Limited Weekend Availability"
};
const testimonials = [{
  quote: "Best Dullstroom family guesthouse experience! The luxury suites were perfect and the kids loved the space.",
  author: "The Thompson Family",
  rating: 5,
  year: "2024"
}, {
  quote: "The cottage suites have such authentic charm. We felt completely at home in the highlands.",
  author: "Mark & Lisa K.",
  rating: 5,
  year: "2024"
}, {
  quote: "Perfect location for fly-fishing. Walking distance to everything with luxury accommodation.",
  author: "Robert S.",
  rating: 5,
  year: "2024"
}];
export default function Suites() {
  return <>
      <SEO title="Discover Tailored Dullstroom Luxury Suites 2025 | The Browns" description="Book direct for best rates on luxury Dullstroom accommodation. Master Suite with King XL bed, Self Catering House for groups up to 16. Free fly-fishing guide included." keywords="Dullstroom luxury guesthouse 2025, Panorama Route accommodation, self catering Dullstroom, family suites Mpumalanga, luxury cottage accommodation" />
      
      <div className="min-h-screen">
        {/* Enhanced Hero Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary/10 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center mb-8">
              <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
                <Clock className="h-4 w-4 mr-2" />
                Limited 2025 Availability
              </Badge>
              
              <h1 className="text-primary mb-6">Discover Dullstroom Luxury Suites 2025</h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-4xl mx-auto">Experience luxury highland accommodation with two distinct styles: modern sophistication or authentic cottage charm. Each suite features premium amenities, stunning views, and personalized service in the heart of the Dullstroom Village.</p>
              
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-2 text-primary font-semibold">
                  <Gift className="h-5 w-5" />
                  <span>Rate Match + Free Welcome Drink</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Best rate guaranteed • Flexible cancellation policy • No booking fees</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Button size="lg" className="min-h-[48px] flex-1" asChild>
                  <a href="https://book.nightsbridge.com/00000" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Book Direct Now
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="min-h-[48px] flex-1" asChild>
                  <Link to="/gallery">View Gallery</Link>
                </Button>
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="text-center bg-background/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-primary">7</div>
                <div className="text-sm text-muted-foreground">Luxury Suites</div>
              </div>
              <div className="text-center bg-background/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-primary">19</div>
                <div className="text-sm text-muted-foreground">Max Guests</div>
              </div>
              <div className="text-center bg-background/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-primary">2</div>
                <div className="text-sm text-muted-foreground">Adjoining Properties</div>
              </div>
              <div className="text-center bg-background/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-primary">8.8</div>
                <div className="text-sm text-muted-foreground">Booking.com Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Luxury Suites Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Modern Luxury</Badge>
              <h2 className="text-primary mb-4">Luxury Guest Suites</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">Sophisticated design meets modern comfort in our guest house. Perfect for couples, families, and discerning travelers seeking premium highland accommodation.</p>
            </div>
            
            <div className="space-y-8">
              {luxurySuites.map((suite, index) => <SuiteBookingCard key={suite.slug} {...suite} className={index % 2 === 1 ? "bg-muted/20" : ""} />)}
            </div>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Cottage Suites Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-secondary text-secondary-foreground">Cottage Charm</Badge>
              <h2 className="text-primary mb-4">Cottage Suites</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Authentic cottage character with warm fireplaces and cozy atmospheres. 
                Perfect for romantic getaways and families seeking genuine highland charm.
              </p>
            </div>
            
            <div className="space-y-8">
              {cottageSuites.map((suite, index) => <SuiteBookingCard key={suite.slug} {...suite} className={index % 2 === 0 ? "bg-muted/20" : ""} />)}
            </div>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Self Catering House Section */}
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
            
            <SuiteBookingCard {...selfCateringHouse} images={['/images/suites/self-catering-house-01.jpg', '/images/suites/self-catering-house-02.jpg']} className="max-w-4xl mx-auto" />
          </div>
        </section>

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
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Book direct for guaranteed best rates, 10% savings, and complimentary fly-fishing guide. 
              Your luxury highland experience awaits in the heart of South Africa's trout fishing capital.
            </p>
            
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-8 max-w-md mx-auto">
              <div className="flex items-center justify-center gap-2 text-primary font-semibold mb-2">
                <Clock className="h-4 w-4" />
                <span>Rooms Filling Fast for 2025</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Secure your dates today for the best rates
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