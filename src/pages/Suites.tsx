import { Button } from "@/components/ui/button";
import { SuiteDetail } from "@/components/ui/suite-detail";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { SEO } from "@/components/ui/seo";

const luxurySuites = [
  {
    title: "Master Suite",
    capacity: "2 adults + 2 children under 12",
    bedConfig: "King XL bed + Double sofa bed (kids under 12)",
    description: "Our flagship suite offers the ultimate in luxury with a spacious private unit featuring a dedicated dressing room, elegant lounge area, and ensuite bathroom with double vanity, shower, and toilet. The Master Suite interleads with the Loft Suite, making it perfect for families seeking connected accommodation.",
    amenities: [
      "Hot water bottles & electric blankets",
      "Netflix & entertainment system", 
      "Nespresso coffee machine",
      "Beautiful garden views",
      "Double vanity ensuite",
      "Private dressing room",
      "Elegant lounge area",
      "Interleads with Loft Suite",
      "Free WiFi",
      "Charlotte Rhys toiletries",
      "Extra mattresses available",
      "Cot with linen for infants",
      "High chair & microwave for infants"
    ],
    slug: "master-suite"
  },
  {
    title: "Loft Suite",
    capacity: "4 adults",
    bedConfig: "Queen XL bed + 2 Single XL beds",
    description: "Perfect for families, the Loft Suite features two comfortable bedrooms with spectacular views, a welcoming lounge area, and a spacious bathroom with double vanity and toilet. The suite offers hot water bottles and electric blankets for warmth and connects seamlessly with the Master Suite for larger group bookings.",
    amenities: [
      "Spectacular mountain views",
      "Hot water bottles & electric blankets",
      "Netflix & entertainment",
      "Nespresso coffee machine",
      "Double vanity bathroom",
      "Two separate bedrooms", 
      "Comfortable lounge area",
      "Free WiFi",
      "Premium tea selection",
      "Charlotte Rhys amenities",
      "Extra mattresses available",
      "Cot with linen for infants",
      "High chair & microwave for infants"
    ],
    slug: "loft-suite"
  },
  {
    title: "Garden Suite",
    capacity: "2 guests",
    bedConfig: "Queen XL bed",
    description: "A romantic ground floor retreat with private entrance and enchanting garden views. The Garden Suite features a luxurious dual vanity bathroom with both bath and shower, creating the perfect sanctuary for couples seeking privacy and tranquility in our beautifully landscaped grounds.",
    amenities: [
      "Stunning garden views",
      "Private entrance",
      "Dual vanity bathroom",
      "Spa bath and shower",
      "Hot water bottles & electric blankets",
      "48-inch LED TV",
      "Netflix & DVD player",
      "Free WiFi",
      "Nespresso machine",
      "Charlotte Rhys toiletries",
      "Extra mattresses available",
      "Cot with linen for infants",
      "High chair & microwave for infants"
    ],
    slug: "garden-suite"
  },
  {
    title: "Cove Suite", 
    capacity: "2 guests",
    bedConfig: "Queen XL bed",
    description: "An intimate ground floor suite featuring a cozy lounge, comfortable bedroom, and modern shower-only bathroom. The Cove Suite offers a perfect blend of comfort and convenience with premium entertainment systems and luxury amenities for couples seeking a peaceful retreat.",
    amenities: [
      "Hot water bottles & electric blankets",
      "48-inch LED TV",
      "Netflix & DVD player",
      "Nespresso coffee machine",
      "Modern shower bathroom",
      "Comfortable lounge area",
      "Free WiFi",
      "Premium entertainment system",
      "Charlotte Rhys toiletries",
      "Daily housekeeping available",
      "Extra mattresses available",
      "Cot with linen for infants",
      "High chair & microwave for infants"
    ],
    slug: "cove-suite"
  }
];

const cottageSuites = [
  {
    title: "Robin Suite",
    capacity: "2 adults + 2 children under 12",
    bedConfig: "King XL bed or 2 Singles + Fold-out double sofa (kids under 12)",
    description: "Stylish and comfortable cottage suite featuring a warm fireplace and flexible bedding arrangements. The Robin Suite combines modern comfort with charming cottage character, offering premium amenities and cozy atmosphere perfect for families or couples seeking authentic Dullstroom charm.",
    amenities: [
      "Warm fireplace",
      "Netflix entertainment",
      "Nespresso coffee machine",
      "Charlotte Rhys toiletries",
      "Free WiFi throughout",
      "Full ensuite bathroom",
      "Flexible bedding options",
      "Cottage garden access",
      "Premium tea selection",
      "Daily housekeeping available",
      "Hot water bottles & electric blankets",
      "Extra mattresses available",
      "Cot with linen for infants",
      "High chair & microwave for infants"
    ],
    slug: "robin-suite"
  },
  {
    title: "Blue Crane Suite",
    capacity: "2 guests", 
    bedConfig: "Flexible bed configuration",
    description: "Charming and comfortable cottage suite designed for couples, featuring a private beverage station and cozy fireplace. The Blue Crane Suite embodies the essence of cottage comfort with thoughtful amenities and intimate spaces perfect for romantic getaways.",
    amenities: [
      "Private beverage station",
      "Cozy fireplace",
      "Free WiFi",
      "Charlotte Rhys toiletries",
      "Intimate cottage atmosphere",
      "Comfortable seating area",
      "Premium coffee facilities",
      "Garden views",
      "Flexible room layout",
      "Romantic ambiance",
      "Hot water bottles & electric blankets",
      "Extra mattresses available",
      "Cot with linen for infants",
      "High chair & microwave for infants"
    ],
    slug: "blue-crane-suite"
  },
  {
    title: "Falcon Suite",
    capacity: "2-3 guests",
    bedConfig: "Flexible bed configuration for small families",
    description: "Spacious and elegant cottage suite offering cozy comfort with sophisticated touches. The Falcon Suite features a warm fireplace, premium entertainment system, and flexible accommodation perfect for small families or couples seeking extra space and cottage charm.",
    amenities: [
      "Warm fireplace",
      "Flat-screen TV with Netflix",
      "Bootlegger coffee station",
      "Free WiFi",
      "Charlotte Rhys toiletries",
      "Spacious living area", 
      "Elegant cozy comfort",
      "Family-friendly layout",
      "Cottage garden access",
      "Premium entertainment system",
      "Hot water bottles & electric blankets",
      "Extra mattresses available",
      "Cot with linen for infants",
      "High chair & microwave for infants"
    ],
    slug: "falcon-suite"
  }
];

export default function Suites() {
  return (
    <>
      <SEO 
        title="Luxury Suites & Cottage Accommodation | The Browns Dullstroom"
        description="Choose from our luxury guest suites and charming cottage rooms in Dullstroom. Modern amenities, spectacular views, and authentic highland comfort await."
        keywords="luxury suites Dullstroom, cottage accommodation, family suites, romantic getaway, premium lodging Mpumalanga"
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-accent to-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center mb-12">
              <h1 className="text-primary mb-6">Two Distinct Accommodation Experiences</h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-12">
                Choose between modern luxury and cottage charm, each offering unique character 
                and amenities to create your perfect Dullstroom escape.
              </p>
            </div>
            
            {/* Two House Options */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
              {/* Luxury House */}
              <div className="bg-background rounded-lg p-8 shadow-lg border">
                <div className="text-center">
                  <Badge variant="secondary" className="text-lg px-4 py-2 mb-4">Modern Luxury</Badge>
                  <h2 className="text-2xl font-bold text-primary mb-4">Luxury Guest Suites</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Sophisticated design, premium amenities, and contemporary comfort. 
                    4 ensuite rooms accommodating up to 10 adults and 2 children.
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center justify-center gap-2">
                      <span>•</span>
                      <span>Hot water bottles, electric blankets & modern amenities</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span>•</span>
                      <span>Netflix, Nespresso & premium finishes</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span>•</span>
                      <span>Spectacular mountain & garden views</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Cottage House */}
              <div className="bg-background rounded-lg p-8 shadow-lg border">
                <div className="text-center">
                  <Badge className="text-lg px-4 py-2 mb-4 bg-secondary text-secondary-foreground">Cottage Cozy</Badge>
                  <h2 className="text-2xl font-bold text-primary mb-4">Cottage Suites</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Charming character, cozy fireplaces, and authentic cottage atmosphere. 
                    3 intimate rooms accommodating up to 6 adults and 1 child.
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center justify-center gap-2">
                      <span>•</span>
                      <span>Warm fireplaces & cottage charm</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span>•</span>
                      <span>Flexible layouts & family-friendly</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span>•</span>
                      <span>Garden access & intimate spaces</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="min-h-[48px]" asChild>
                  <a 
                    href="https://book.nightsbridge.com/00000" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Book your suite now"
                  >
                    Book Your Suite
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="min-h-[48px]" asChild>
                  <a href="/contact" aria-label="Contact us for inquiries">
                    Contact Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Luxury Guest Suites */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8 sm:mb-12">
                <Badge variant="secondary" className="text-sm sm:text-lg px-3 py-1 sm:px-4 sm:py-2 mb-4">Modern Luxury</Badge>
                <h2 className="text-primary mb-4">Luxury Guest Suites</h2>
                <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Our main house features 4 elegantly appointed ensuite rooms with sophisticated design, 
                  premium amenities, and modern luxury touches. Perfect for up to 10 adults and 2 children.
                </p>
              </div>

              <div className="space-y-8 sm:space-y-12">
                {luxurySuites.map((suite, index) => (
                  <SuiteDetail key={index} {...suite} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-0" />

        {/* Cottage Suites */}
        <section className="py-12 sm:py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8 sm:mb-12">
                <Badge className="text-sm sm:text-lg px-3 py-1 sm:px-4 sm:py-2 mb-4 bg-secondary text-secondary-foreground">Charming Comfort</Badge>
                <h2 className="text-primary mb-4">Cottage Suites</h2>
                <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Our neighboring cottage offers 3 available rooms with cozy, charming vibes and 
                  old-school comfort. Perfect for intimate stays accommodating up to 6 adults and 1 child.
                </p>
              </div>

              <div className="space-y-8 sm:space-y-12">
                {cottageSuites.map((suite, index) => (
                  <SuiteDetail key={index} {...suite} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Booking CTA */}
        <section className="py-12 sm:py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-primary-foreground mb-4">Ready to Experience Luxury?</h2>
            <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Book directly with us through Nightsbridge for the best rates, personalized service, 
              and seamless reservation experience.
            </p>
            <Button size="lg" variant="secondary" className="min-h-[48px]" asChild>
              <a 
                href="https://book.nightsbridge.com/00000" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Book your luxury suite now"
              >
                Book Your Luxury Suite Now
              </a>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}