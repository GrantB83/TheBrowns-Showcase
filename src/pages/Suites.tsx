import { Button } from "@/components/ui/button";
import { SuiteDetail } from "@/components/ui/suite-detail";
import { SuiteGallery } from "@/components/ui/suite-gallery";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { SEO } from "@/components/ui/seo";

const luxurySuites = [
  {
    title: "Master Suite",
    capacity: "4 guests",
    bedConfig: "King XL bed + Double sofa bed (kids under 12)",
    description: "Our flagship suite offers the ultimate in luxury with a spacious private unit featuring a dedicated dressing room, elegant lounge area, and ensuite bathroom with double vanity, shower, and toilet. The Master Suite interleads with the Loft Suite, making it perfect for families seeking connected accommodation.",
    images: [
      { src: "/images/suites/master-suite-bedroom.jpg", alt: "Master Suite elegant bedroom with King XL bed" }, // filename: master-suite-bedroom.jpg, folder: /images/suites/, dimensions: 800x600
      { src: "/images/suites/master-suite-lounge.jpg", alt: "Master Suite private lounge area" }, // filename: master-suite-lounge.jpg, folder: /images/suites/, dimensions: 800x600
      { src: "/images/suites/master-suite-bathroom.jpg", alt: "Master Suite ensuite bathroom with double vanity" } // filename: master-suite-bathroom.jpg, folder: /images/suites/, dimensions: 800x600
    ],
    amenities: [
      "Underfloor heating",
      "Netflix & entertainment system", 
      "Premium beverage station",
      "Beautiful garden views",
      "Double vanity ensuite",
      "Private dressing room",
      "Elegant lounge area",
      "Interleads with Loft Suite",
      "Free WiFi",
      "Charlotte Rhys toiletries"
    ],
    slug: "master-suite"
  },
  {
    title: "Loft Suite",
    capacity: "4 guests",
    bedConfig: "Queen XL bed + 2 Single XL beds",
    description: "Perfect for families, the Loft Suite features two comfortable bedrooms with spectacular views, a welcoming lounge area, and a spacious bathroom with double vanity and toilet. The suite offers underfloor heating in bedrooms and connects seamlessly with the Master Suite for larger group bookings.",
    images: [
      { src: "/images/suites/loft-suite-bedroom.jpg", alt: "Loft Suite family bedroom with Queen XL bed" }, // filename: loft-suite-bedroom.jpg, folder: /images/suites/, dimensions: 800x600
      { src: "/images/suites/loft-suite-twin.jpg", alt: "Loft Suite twin bedroom with Single XL beds" }, // filename: loft-suite-twin.jpg, folder: /images/suites/, dimensions: 800x600
      { src: "/images/suites/loft-suite-lounge.jpg", alt: "Loft Suite lounge area with mountain views" } // filename: loft-suite-lounge.jpg, folder: /images/suites/, dimensions: 800x600
    ],
    amenities: [
      "Spectacular mountain views",
      "Underfloor heating in bedrooms",
      "Netflix & entertainment",
      "Nespresso coffee machine",
      "Double vanity bathroom",
      "Two separate bedrooms", 
      "Comfortable lounge area",
      "Free WiFi",
      "Premium tea selection",
      "Charlotte Rhys amenities"
    ],
    slug: "loft-suite"
  },
  {
    title: "Garden Suite",
    capacity: "2 guests",
    bedConfig: "Queen XL bed",
    description: "A romantic ground floor retreat with private entrance and enchanting garden views. The Garden Suite features a luxurious dual vanity bathroom with both bath and shower, creating the perfect sanctuary for couples seeking privacy and tranquility in our beautifully landscaped grounds.",
    images: [
      { src: "/images/suites/garden-suite-bedroom.jpg", alt: "Garden Suite romantic bedroom with garden views" }, // filename: garden-suite-bedroom.jpg, folder: /images/suites/, dimensions: 800x600
      { src: "/images/suites/garden-suite-entrance.jpg", alt: "Garden Suite private entrance" }, // filename: garden-suite-entrance.jpg, folder: /images/suites/, dimensions: 800x600
      { src: "/images/suites/garden-suite-bathroom.jpg", alt: "Garden Suite spa bathroom with bath and shower" } // filename: garden-suite-bathroom.jpg, folder: /images/suites/, dimensions: 800x600
    ],
    amenities: [
      "Stunning garden views",
      "Private entrance",
      "Dual vanity bathroom",
      "Spa bath and shower",
      "Underfloor heating",
      "48-inch LED TV",
      "Netflix & DVD player",
      "Free WiFi",
      "Nespresso machine",
      "Charlotte Rhys toiletries"
    ],
    slug: "garden-suite"
  },
  {
    title: "Cove Suite", 
    capacity: "2 guests",
    bedConfig: "Queen XL bed",
    description: "An intimate ground floor suite featuring a cozy lounge, comfortable bedroom, and modern shower-only bathroom. The Cove Suite offers a perfect blend of comfort and convenience with premium entertainment systems and luxury amenities for couples seeking a peaceful retreat.",
    images: [
      { src: "/images/suites/cove-suite-bedroom.jpg", alt: "Cove Suite cozy bedroom" }, // filename: cove-suite-bedroom.jpg, folder: /images/suites/, dimensions: 800x600
      { src: "/images/suites/cove-suite-lounge.jpg", alt: "Cove Suite comfortable lounge area" }, // filename: cove-suite-lounge.jpg, folder: /images/suites/, dimensions: 800x600
      { src: "/images/suites/cove-suite-bathroom.jpg", alt: "Cove Suite modern shower bathroom" } // filename: cove-suite-bathroom.jpg, folder: /images/suites/, dimensions: 800x600
    ],
    amenities: [
      "Underfloor heating",
      "48-inch LED TV",
      "Netflix & DVD player",
      "Nespresso coffee machine",
      "Modern shower bathroom",
      "Comfortable lounge area",
      "Free WiFi",
      "Premium entertainment system",
      "Charlotte Rhys toiletries",
      "Daily housekeeping available"
    ],
    slug: "cove-suite"
  }
];

const cottageSuites = [
  {
    title: "Robin Suite",
    capacity: "4 guests",
    bedConfig: "King XL bed or 2 Singles + Fold-out double sofa (kids under 12)",
    description: "Stylish and comfortable cottage suite featuring a warm fireplace and flexible bedding arrangements. The Robin Suite combines modern comfort with charming cottage character, offering premium amenities and cozy atmosphere perfect for families or couples seeking authentic Dullstroom charm.",
    images: [
      { src: "/images/suites/robin-suite-bedroom.jpg", alt: "Robin Suite stylish bedroom with fireplace" }, // filename: robin-suite-bedroom.jpg, folder: /images/suites/, dimensions: 800x600
      { src: "/images/suites/robin-suite-02.jpg", alt: "Robin Suite cozy living area" }, // filename: robin-suite-02.jpg, folder: /images/suites/, dimensions: 800x600
      { src: "/images/suites/robin-suite-03.jpg", alt: "Robin Suite full ensuite bathroom" } // filename: robin-suite-03.jpg, folder: /images/suites/, dimensions: 800x600
    ],
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
      "Daily housekeeping available"
    ],
    slug: "robin-suite"
  },
  {
    title: "Blue Crane Suite",
    capacity: "2 guests", 
    bedConfig: "Flexible bed configuration",
    description: "Charming and comfortable cottage suite designed for couples, featuring a private beverage station and cozy fireplace. The Blue Crane Suite embodies the essence of cottage comfort with thoughtful amenities and intimate spaces perfect for romantic getaways.",
    images: [
      { src: "/images/suites/blue-crane-suite-01.jpg", alt: "Blue Crane Suite charming bedroom" }, // filename: blue-crane-suite-01.jpg, folder: /images/suites/, dimensions: 800x600
      { src: "/images/suites/blue-crane-suite-02.jpg", alt: "Blue Crane Suite private beverage station" }, // filename: blue-crane-suite-02.jpg, folder: /images/suites/, dimensions: 800x600
      { src: "/images/suites/blue-crane-suite-03.jpg", alt: "Blue Crane Suite cozy fireplace area" } // filename: blue-crane-suite-03.jpg, folder: /images/suites/, dimensions: 800x600
    ],
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
      "Romantic ambiance"
    ],
    slug: "blue-crane-suite"
  },
  {
    title: "Falcon Suite",
    capacity: "2-3 guests",
    bedConfig: "Flexible bed configuration for small families",
    description: "Spacious and elegant cottage suite offering cozy comfort with sophisticated touches. The Falcon Suite features a warm fireplace, premium entertainment system, and flexible accommodation perfect for small families or couples seeking extra space and cottage charm.",
    images: [
      { src: "/images/suites/falcon-suite-01.jpg", alt: "Falcon Suite spacious bedroom" }, // filename: falcon-suite-01.jpg, folder: /images/suites/, dimensions: 800x600
      { src: "/images/suites/falcon-suite-02.jpg", alt: "Falcon Suite elegant living space" }, // filename: falcon-suite-02.jpg, folder: /images/suites/, dimensions: 800x600
      { src: "/images/suites/falcon-suite-03.jpg", alt: "Falcon Suite fireplace and entertainment area" } // filename: falcon-suite-03.jpg, folder: /images/suites/, dimensions: 800x600
    ],
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
      "Premium entertainment system"
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
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-primary mb-6">Our Luxury Suites</h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
                Choose from our collection of elegantly appointed suites, each uniquely designed 
                with premium amenities and thoughtful touches for an unforgettable stay.
              </p>
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
                  <div key={index} className="space-y-6">
                    <SuiteDetail {...suite} />
                    <SuiteGallery 
                      suiteSlug={suite.slug}
                      suiteName={suite.title}
                      className="mt-6"
                    />
                  </div>
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
                  <div key={index} className="space-y-6">
                    <SuiteDetail {...suite} />
                    <SuiteGallery 
                      suiteSlug={suite.slug}
                      suiteName={suite.title}
                      className="mt-6"
                    />
                  </div>
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