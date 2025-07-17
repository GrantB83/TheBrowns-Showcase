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
    mainAmenities: [
      { text: "Hot water bottles & electric blankets", emoji: "🔥" },
      { text: "Netflix & entertainment system", emoji: "📺" },
      { text: "Nespresso coffee machine", emoji: "☕" },
      { text: "Beautiful garden views", emoji: "🌿" },
      { text: "Double vanity ensuite", emoji: "🛁" },
      { text: "Private dressing room", emoji: "👗" }
    ],
    additionalAmenities: [
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
    mainAmenities: [
      { text: "Spectacular mountain views", emoji: "🏔️" },
      { text: "Hot water bottles & electric blankets", emoji: "🔥" },
      { text: "Netflix & entertainment", emoji: "📺" },
      { text: "Nespresso coffee machine", emoji: "☕" },
      { text: "Double vanity bathroom", emoji: "🛁" },
      { text: "Two separate bedrooms", emoji: "🛏️" }
    ],
    additionalAmenities: [
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
    mainAmenities: [
      { text: "Stunning garden views", emoji: "🌿" },
      { text: "Private entrance", emoji: "🚪" },
      { text: "Dual vanity bathroom", emoji: "🛁" },
      { text: "Spa bath and shower", emoji: "🛀" },
      { text: "Hot water bottles & electric blankets", emoji: "🔥" },
      { text: "Netflix & DVD player", emoji: "📺" }
    ],
    additionalAmenities: [
      "48-inch LED TV",
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
    mainAmenities: [
      { text: "Hot water bottles & electric blankets", emoji: "🔥" },
      { text: "Netflix & DVD player", emoji: "📺" },
      { text: "Nespresso coffee machine", emoji: "☕" },
      { text: "Modern shower bathroom", emoji: "🚿" },
      { text: "Comfortable lounge area", emoji: "🛋️" },
      { text: "Premium entertainment system", emoji: "🎬" }
    ],
    additionalAmenities: [
      "48-inch LED TV",
      "Free WiFi",
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
    mainAmenities: [
      { text: "Warm fireplace", emoji: "🔥" },
      { text: "Netflix entertainment", emoji: "📺" },
      { text: "Nespresso coffee machine", emoji: "☕" },
      { text: "Full ensuite bathroom", emoji: "🛁" },
      { text: "Flexible bedding options", emoji: "🛏️" },
      { text: "Cottage garden access", emoji: "🌿" }
    ],
    additionalAmenities: [
      "Charlotte Rhys toiletries",
      "Free WiFi throughout",
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
    mainAmenities: [
      { text: "Private beverage station", emoji: "☕" },
      { text: "Cozy fireplace", emoji: "🔥" },
      { text: "Garden views", emoji: "🌿" },
      { text: "Romantic ambiance", emoji: "💕" },
      { text: "Comfortable seating area", emoji: "🛋️" },
      { text: "Cottage atmosphere", emoji: "🏡" }
    ],
    additionalAmenities: [
      "Free WiFi",
      "Charlotte Rhys toiletries",
      "Premium coffee facilities",
      "Flexible room layout",
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
    mainAmenities: [
      { text: "Warm fireplace", emoji: "🔥" },
      { text: "Netflix entertainment", emoji: "📺" },
      { text: "Bootlegger coffee station", emoji: "☕" },
      { text: "Spacious living area", emoji: "🛋️" },
      { text: "Family-friendly layout", emoji: "👨‍👩‍👧‍👦" },
      { text: "Cottage garden access", emoji: "🌿" }
    ],
    additionalAmenities: [
      "Free WiFi",
      "Charlotte Rhys toiletries",
      "Elegant cozy comfort",
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
                  >
                    Book Your Stay
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="min-h-[48px]" asChild>
                  <a href="/contact">Contact Us</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Luxury Suites Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <Badge variant="secondary" className="text-fluid-base px-3 py-2 sm:px-4 sm:py-2 mb-4">Modern Luxury</Badge>
              <h2 className="text-primary mb-4">Luxury Guest Suites</h2>
              <p className="text-fluid-lg text-muted-foreground max-w-none sm:max-w-3xl mx-auto leading-relaxed">
                Experience sophisticated comfort in our luxury guest house featuring modern amenities, 
                premium finishes, and breathtaking views of the Dullstroom highlands.
              </p>
            </div>
            
            <div className="space-y-12 sm:space-y-16 md:space-y-20">
              {luxurySuites.map((suite, index) => (
                <SuiteDetail
                  key={suite.slug}
                  title={suite.title}
                  capacity={suite.capacity}
                  bedConfig={suite.bedConfig}
                  description={suite.description}
                  mainAmenities={suite.mainAmenities}
                  additionalAmenities={suite.additionalAmenities}
                  slug={suite.slug}
                  className={index % 2 === 1 ? "md:flex-row-reverse" : ""}
                />
              ))}
            </div>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Cottage Suites Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <Badge className="text-fluid-base px-3 py-2 sm:px-4 sm:py-2 mb-4 bg-secondary text-secondary-foreground">Cottage Cozy</Badge>
              <h2 className="text-primary mb-4">Cottage Suites</h2>
              <p className="text-fluid-lg text-muted-foreground max-w-none sm:max-w-3xl mx-auto leading-relaxed">
                Discover authentic charm in our cottage suites featuring warm fireplaces, 
                cozy atmospheres, and the genuine hospitality of highland cottage living.
              </p>
            </div>
            
            <div className="space-y-12 sm:space-y-16 md:space-y-20">
              {cottageSuites.map((suite, index) => (
                <SuiteDetail
                  key={suite.slug}
                  title={suite.title}
                  capacity={suite.capacity}
                  bedConfig={suite.bedConfig}
                  description={suite.description}
                  mainAmenities={suite.mainAmenities}
                  additionalAmenities={suite.additionalAmenities}
                  slug={suite.slug}
                  className={index % 2 === 1 ? "md:flex-row-reverse" : ""}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-primary/5 to-accent/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-primary mb-4 sm:mb-6">Ready to Experience The Browns?</h2>
            <p className="text-fluid-lg text-muted-foreground mb-6 sm:mb-8 max-w-none sm:max-w-2xl mx-auto leading-relaxed">
              Whether you choose modern luxury or cottage charm, unforgettable memories await 
              in the heart of Dullstroom's spectacular highland landscape.
            </p>
            <div className="flex flex-col mobile-landscape:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
              <Button size="lg" className="min-h-[48px] text-fluid-base font-medium" asChild>
                <a 
                  href="https://book.nightsbridge.com/00000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Book Your Perfect Suite
                </a>
              </Button>
              <Button variant="outline" size="lg" className="min-h-[48px] text-fluid-base font-medium" asChild>
                <a href="/gallery">View Our Gallery</a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}