import { Button } from "@/components/ui/button";
import { SuiteDetail } from "@/components/ui/suite-detail";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const luxurySuites = [
  {
    title: "Master Suite",
    capacity: "4 guests",
    bedConfig: "King XL bed + Double sofa bed (kids under 12)",
    description: "Our flagship suite offers the ultimate in luxury with a spacious private unit featuring a dedicated dressing room, elegant lounge area, and ensuite bathroom with double vanity, shower, and toilet. The Master Suite interleads with the Loft Suite, making it perfect for families seeking connected accommodation.",
    images: [
      { src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80", alt: "Master Suite elegant bedroom with King XL bed" },
      { src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80", alt: "Master Suite private lounge area" },
      { src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&q=80", alt: "Master Suite ensuite bathroom with double vanity" }
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
    ]
  },
  {
    title: "Loft Suite",
    capacity: "4 guests",
    bedConfig: "Queen XL bed + 2 Single XL beds",
    description: "Perfect for families, the Loft Suite features two comfortable bedrooms with spectacular views, a welcoming lounge area, and a spacious bathroom with double vanity and toilet. The suite offers underfloor heating in bedrooms and connects seamlessly with the Master Suite for larger group bookings.",
    images: [
      { src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80", alt: "Loft Suite family bedroom with Queen XL bed" },
      { src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80", alt: "Loft Suite twin bedroom with Single XL beds" },
      { src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80", alt: "Loft Suite lounge area with mountain views" }
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
    ]
  },
  {
    title: "Garden Suite",
    capacity: "2 guests",
    bedConfig: "Queen XL bed",
    description: "A romantic ground floor retreat with private entrance and enchanting garden views. The Garden Suite features a luxurious dual vanity bathroom with both bath and shower, creating the perfect sanctuary for couples seeking privacy and tranquility in our beautifully landscaped grounds.",
    images: [
      { src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&q=80", alt: "Garden Suite romantic bedroom with garden views" },
      { src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80", alt: "Garden Suite private entrance" },
      { src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80", alt: "Garden Suite spa bathroom with bath and shower" }
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
    ]
  },
  {
    title: "Cove Suite",
    capacity: "2 guests",
    bedConfig: "Queen XL bed",
    description: "An intimate ground floor suite featuring a cozy lounge, comfortable bedroom, and modern shower-only bathroom. The Cove Suite offers a perfect blend of comfort and convenience with premium entertainment systems and luxury amenities for couples seeking a peaceful retreat.",
    images: [
      { src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80", alt: "Cove Suite cozy bedroom" },
      { src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80", alt: "Cove Suite comfortable lounge area" },
      { src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80", alt: "Cove Suite modern shower bathroom" }
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
    ]
  }
];

const cottageSuites = [
  {
    title: "Robin Suite",
    capacity: "4 guests",
    bedConfig: "King XL bed or 2 Singles + Fold-out double sofa (kids under 12)",
    description: "Stylish and comfortable cottage suite featuring a warm fireplace and flexible bedding arrangements. The Robin Suite combines modern comfort with charming cottage character, offering premium amenities and cozy atmosphere perfect for families or couples seeking authentic Dullstroom charm.",
    images: [
      { src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&q=80", alt: "Robin Suite stylish bedroom with fireplace" },
      { src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80", alt: "Robin Suite cozy living area" },
      { src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80", alt: "Robin Suite full ensuite bathroom" }
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
    ]
  },
  {
    title: "Blue Crane Suite",
    capacity: "2 guests",
    bedConfig: "Flexible bed configuration",
    description: "Charming and comfortable cottage suite designed for couples, featuring a private beverage station and cozy fireplace. The Blue Crane Suite embodies the essence of cottage comfort with thoughtful amenities and intimate spaces perfect for romantic getaways.",
    images: [
      { src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80", alt: "Blue Crane Suite charming bedroom" },
      { src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80", alt: "Blue Crane Suite private beverage station" },
      { src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&q=80", alt: "Blue Crane Suite cozy fireplace area" }
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
    ]
  },
  {
    title: "Falcon Suite",
    capacity: "2-3 guests",
    bedConfig: "Flexible bed configuration for small families",
    description: "Spacious and elegant cottage suite offering cozy comfort with sophisticated touches. The Falcon Suite features a warm fireplace, premium entertainment system, and flexible accommodation perfect for small families or couples seeking extra space and cottage charm.",
    images: [
      { src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80", alt: "Falcon Suite spacious bedroom" },
      { src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80", alt: "Falcon Suite elegant living space" },
      { src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80", alt: "Falcon Suite fireplace and entertainment area" }
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
    ]
  }
];

export default function Suites() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-accent to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-primary mb-6">Our Luxury Suites</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Choose from our collection of elegantly appointed suites, each uniquely designed 
              with premium amenities and thoughtful touches for an unforgettable stay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a 
                  href="https://book.nightsbridge.com/00000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Book Your Suite
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/contact">
                  Contact Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Guest Suites */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="text-lg px-4 py-2 mb-4">Modern Luxury</Badge>
              <h2 className="text-primary mb-4">Luxury Guest Suites</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our main house features 4 elegantly appointed ensuite rooms with sophisticated design, 
                premium amenities, and modern luxury touches. Perfect for up to 10 adults and 2 children.
              </p>
            </div>

            <div className="space-y-12">
              {luxurySuites.map((suite, index) => (
                <SuiteDetail key={index} {...suite} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-0" />

      {/* Cottage Suites */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="text-lg px-4 py-2 mb-4 bg-secondary text-secondary-foreground">Charming Comfort</Badge>
              <h2 className="text-primary mb-4">Cottage Suites</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our neighboring cottage offers 3 available rooms with cozy, charming vibes and 
                old-school comfort. Perfect for intimate stays accommodating up to 6 adults and 1 child.
              </p>
            </div>

            <div className="space-y-12">
              {cottageSuites.map((suite, index) => (
                <SuiteDetail key={index} {...suite} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-primary-foreground mb-4">Ready to Experience Luxury?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Book directly with us through Nightsbridge for the best rates, personalized service, 
            and seamless reservation experience.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a 
              href="https://book.nightsbridge.com/00000" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Book Your Luxury Suite Now
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}