import { EnhancedGallery } from "@/components/ui/enhanced-gallery";
import { SEO } from "@/components/ui/seo";
import { Card } from "@/components/ui/card";

// Luxury Suites Gallery Images
const luxurySuitesImages = [
  // Master Suite
  {
    src: "/images/suites/master-suite-01.jpg",
    alt: "Master Suite luxury bedroom with King XL bed and mountain views",
    title: "Master Suite - Luxury Bedroom",
    category: "Master Suite",
    description: "King XL bed with stunning highland views"
  },
  {
    src: "/images/suites/master-suite-02.jpg",
    alt: "Master Suite elegant living area with fireplace",
    title: "Master Suite - Living Area",
    category: "Master Suite",
    description: "Elegant living space with cozy fireplace"
  },
  {
    src: "/images/suites/master-suite-03.jpg",
    alt: "Master Suite luxury bathroom with premium amenities",
    title: "Master Suite - Bathroom",
    category: "Master Suite",
    description: "Spa-inspired bathroom with premium Charlotte Rhys amenities"
  },
  {
    src: "/images/suites/master-suite-04.jpg",
    alt: "Master Suite private terrace with mountain views",
    title: "Master Suite - Private Terrace",
    category: "Master Suite",
    description: "Private outdoor space with panoramic views"
  },
  {
    src: "/images/suites/master-suite-05.jpg",
    alt: "Master Suite kitchenette with Nespresso machine",
    title: "Master Suite - Kitchenette",
    category: "Master Suite", 
    description: "Fully equipped kitchenette with Nespresso corner"
  },
  {
    src: "/images/suites/master-suite-06.jpg",
    alt: "Master Suite interior design details and luxury furnishings",
    title: "Master Suite - Interior Details",
    category: "Master Suite",
    description: "Carefully curated luxury furnishings and decor"
  },
  {
    src: "/images/suites/master-suite-07.jpg",
    alt: "Master Suite evening ambiance with warm lighting",
    title: "Master Suite - Evening Ambiance",
    category: "Master Suite",
    description: "Warm evening lighting creating perfect relaxation atmosphere"
  },

  // Loft Suite
  {
    src: "/images/suites/loft-suite-01.jpg",
    alt: "Loft Suite spacious family accommodation with multiple beds",
    title: "Loft Suite - Family Space",
    category: "Loft Suite",
    description: "Spacious accommodation perfect for families"
  },
  {
    src: "/images/suites/loft-suite-02.jpg",
    alt: "Loft Suite comfortable living area with seating",
    title: "Loft Suite - Living Area",
    category: "Loft Suite", 
    description: "Comfortable living space for family gatherings"
  },
  {
    src: "/images/suites/loft-suite-03.jpg",
    alt: "Loft Suite well-equipped kitchen for self-catering",
    title: "Loft Suite - Kitchen",
    category: "Loft Suite",
    description: "Fully equipped kitchen for self-catering convenience"
  },
  {
    src: "/images/suites/loft-suite-04.jpg",
    alt: "Loft Suite bathroom with modern amenities",
    title: "Loft Suite - Bathroom",
    category: "Loft Suite",
    description: "Modern bathroom with quality amenities"
  },
  {
    src: "/images/suites/loft-suite-05.jpg",
    alt: "Loft Suite bedroom with comfortable furnishings",
    title: "Loft Suite - Bedroom",
    category: "Loft Suite",
    description: "Comfortable bedroom with quality linens"
  },
  {
    src: "/images/suites/loft-suite-06.jpg",
    alt: "Loft Suite additional sleeping arrangements",
    title: "Loft Suite - Additional Sleeping",
    category: "Loft Suite",
    description: "Additional sleeping space for larger groups"
  },
  {
    src: "/images/suites/loft-suite-07.jpg",
    alt: "Loft Suite outdoor area and views",
    title: "Loft Suite - Outdoor Views",
    category: "Loft Suite",
    description: "Beautiful outdoor views and access"
  },

  // Garden Suite
  {
    src: "/images/suites/garden-suite-01.jpg",
    alt: "Garden Suite with beautiful garden views and natural light",
    title: "Garden Suite - Garden Views",
    category: "Garden Suite",
    description: "Stunning garden views with abundant natural light"
  },
  {
    src: "/images/suites/garden-suite-02.jpg",
    alt: "Garden Suite comfortable bedroom with garden access",
    title: "Garden Suite - Bedroom",
    category: "Garden Suite",
    description: "Peaceful bedroom with direct garden access"
  },
  {
    src: "/images/suites/garden-suite-03.jpg",
    alt: "Garden Suite living area with garden-facing windows",
    title: "Garden Suite - Living Area",
    category: "Garden Suite",
    description: "Bright living space overlooking the gardens"
  },
  {
    src: "/images/suites/garden-suite-04.jpg",
    alt: "Garden Suite kitchenette for self-catering needs",
    title: "Garden Suite - Kitchenette",
    category: "Garden Suite",
    description: "Convenient kitchenette for light meal preparation"
  },
  {
    src: "/images/suites/garden-suite-05.jpg",
    alt: "Garden Suite bathroom with modern fixtures",
    title: "Garden Suite - Bathroom",
    category: "Garden Suite",
    description: "Well-appointed bathroom with modern amenities"
  },
  {
    src: "/images/suites/garden-suite-06.jpg",
    alt: "Garden Suite private outdoor seating area",
    title: "Garden Suite - Private Patio",
    category: "Garden Suite",
    description: "Private outdoor seating among the gardens"
  },

  // Blue Crane Suite
  {
    src: "/images/suites/blue-crane-suite-01.jpg",
    alt: "Blue Crane Suite elegant highland-inspired interior design",
    title: "Blue Crane Suite - Highland Elegance",
    category: "Blue Crane Suite",
    description: "Highland-inspired luxury design and furnishings"
  },
  {
    src: "/images/suites/blue-crane-suite-02.jpg",
    alt: "Blue Crane Suite comfortable bedroom with quality linens",
    title: "Blue Crane Suite - Bedroom",
    category: "Blue Crane Suite",
    description: "Comfortable bedroom with premium linens"
  },
  {
    src: "/images/suites/blue-crane-suite-03.jpg",
    alt: "Blue Crane Suite living area with cozy atmosphere",
    title: "Blue Crane Suite - Living Space",
    category: "Blue Crane Suite",
    description: "Cozy living area perfect for relaxation"
  },
  {
    src: "/images/suites/blue-crane-suite-04.jpg",
    alt: "Blue Crane Suite well-equipped kitchenette",
    title: "Blue Crane Suite - Kitchenette",
    category: "Blue Crane Suite",
    description: "Modern kitchenette with all essentials"
  },
  {
    src: "/images/suites/blue-crane-suite-05.jpg",
    alt: "Blue Crane Suite bathroom with quality amenities",
    title: "Blue Crane Suite - Bathroom",
    category: "Blue Crane Suite",
    description: "Modern bathroom with premium amenities"
  },
  {
    src: "/images/suites/blue-crane-suite-06.jpg",
    alt: "Blue Crane Suite interior details and decor",
    title: "Blue Crane Suite - Interior Details",
    category: "Blue Crane Suite",
    description: "Thoughtful design details and quality furnishings"
  },
  {
    src: "/images/suites/blue-crane-suite-07.jpg",
    alt: "Blue Crane Suite outdoor access and views",
    title: "Blue Crane Suite - Outdoor Access",
    category: "Blue Crane Suite",
    description: "Beautiful outdoor access and mountain views"
  },

  // Falcon Suite
  {
    src: "/images/suites/falcon-suite-01.jpg",
    alt: "Falcon Suite spacious accommodation with mountain views",
    title: "Falcon Suite - Mountain Views",
    category: "Falcon Suite",
    description: "Spacious suite with stunning mountain panoramas"
  },
  {
    src: "/images/suites/falcon-suite-02.jpg",
    alt: "Falcon Suite comfortable bedroom with quality furnishings",
    title: "Falcon Suite - Bedroom",
    category: "Falcon Suite",
    description: "Comfortable bedroom with highland views"
  },
  {
    src: "/images/suites/falcon-suite-03.jpg",
    alt: "Falcon Suite living area with seating and relaxation space",
    title: "Falcon Suite - Living Area",
    category: "Falcon Suite",
    description: "Relaxing living space with comfortable seating"
  },
  {
    src: "/images/suites/falcon-suite-04.jpg",
    alt: "Falcon Suite kitchenette with modern appliances",
    title: "Falcon Suite - Kitchenette",
    category: "Falcon Suite",
    description: "Well-equipped kitchenette for convenience"
  },
  {
    src: "/images/suites/falcon-suite-05.jpg",
    alt: "Falcon Suite bathroom with modern amenities",
    title: "Falcon Suite - Bathroom",
    category: "Falcon Suite",
    description: "Modern bathroom with quality fixtures"
  },
  {
    src: "/images/suites/falcon-suite-06.jpg",
    alt: "Falcon Suite interior design and luxury touches",
    title: "Falcon Suite - Interior Design",
    category: "Falcon Suite",
    description: "Elegant interior design with luxury touches"
  },
  {
    src: "/images/suites/falcon-suite-07.jpg",
    alt: "Falcon Suite outdoor terrace and highland views",
    title: "Falcon Suite - Outdoor Terrace",
    category: "Falcon Suite", 
    description: "Private terrace with panoramic highland views"
  },

  // Cove Suite
  {
    src: "/images/suites/cove-suite-01.jpg",
    alt: "Cove Suite intimate accommodation with cozy atmosphere",
    title: "Cove Suite - Cozy Retreat",
    category: "Cove Suite",
    description: "Intimate suite perfect for romantic getaways"
  },
  {
    src: "/images/suites/cove-suite-02.jpg",
    alt: "Cove Suite comfortable bedroom with quality linens",
    title: "Cove Suite - Bedroom",
    category: "Cove Suite",
    description: "Comfortable bedroom with premium bedding"
  },
  {
    src: "/images/suites/cove-suite-03.jpg",
    alt: "Cove Suite living space with relaxing ambiance",
    title: "Cove Suite - Living Space",
    category: "Cove Suite",
    description: "Cozy living area with relaxing ambiance"
  },
  {
    src: "/images/suites/cove-suite-04.jpg",
    alt: "Cove Suite kitchenette for light refreshments",
    title: "Cove Suite - Kitchenette",
    category: "Cove Suite",
    description: "Compact kitchenette for light refreshments"
  },
  {
    src: "/images/suites/cove-suite-05.jpg",
    alt: "Cove Suite bathroom with modern amenities",
    title: "Cove Suite - Bathroom",
    category: "Cove Suite",
    description: "Well-appointed bathroom with modern amenities"
  },
  {
    src: "/images/suites/cove-suite-06.jpg",
    alt: "Cove Suite private outdoor space and views",
    title: "Cove Suite - Private Views",
    category: "Cove Suite",
    description: "Private outdoor space with beautiful views"
  },

  // Robin Suite
  {
    src: "/images/suites/robin-suite-01.jpg",
    alt: "Robin Suite cottage-style accommodation with fireplace",
    title: "Robin Suite - Cottage Charm",
    category: "Robin Suite",
    description: "Charming cottage-style suite with fireplace"
  },
  {
    src: "/images/suites/robin-suite-02.jpg",
    alt: "Robin Suite cozy bedroom with comfortable furnishings",
    title: "Robin Suite - Cozy Bedroom",
    category: "Robin Suite",
    description: "Comfortable bedroom with cottage charm"
  },
  {
    src: "/images/suites/robin-suite-03.jpg",
    alt: "Robin Suite living area with fireplace and seating",
    title: "Robin Suite - Fireplace Living",
    category: "Robin Suite",
    description: "Living area with cozy fireplace for cold highland nights"
  },
  {
    src: "/images/suites/robin-suite-04.jpg",
    alt: "Robin Suite kitchenette with self-catering facilities",
    title: "Robin Suite - Self-Catering Kitchen",
    category: "Robin Suite",
    description: "Well-equipped kitchenette for self-catering"
  },
  {
    src: "/images/suites/robin-suite-05.jpg",
    alt: "Robin Suite bathroom with quality amenities",
    title: "Robin Suite - Bathroom",
    category: "Robin Suite",
    description: "Modern bathroom with quality amenities"
  },
  {
    src: "/images/suites/robin-suite-06.jpg",
    alt: "Robin Suite outdoor area and garden access",
    title: "Robin Suite - Garden Access",
    category: "Robin Suite",
    description: "Direct access to beautiful garden areas"
  },

  // Luxury Guest House
  {
    src: "/images/suites/luxury-guest-house-01.jpg",
    alt: "Luxury Guest House spacious accommodation for groups",
    title: "Luxury Guest House - Spacious Living",
    category: "Luxury Guest House",
    description: "Spacious luxury accommodation perfect for groups"
  },
  {
    src: "/images/suites/luxury-guest-house-02.jpg",
    alt: "Luxury Guest House master bedroom with premium amenities",
    title: "Luxury Guest House - Master Bedroom",
    category: "Luxury Guest House",
    description: "Luxurious master bedroom with premium amenities"
  },
  {
    src: "/images/suites/luxury-guest-house-03.jpg",
    alt: "Luxury Guest House additional bedroom for guests",
    title: "Luxury Guest House - Guest Bedroom",
    category: "Luxury Guest House",
    description: "Comfortable additional bedroom for guests"
  },
  {
    src: "/images/suites/luxury-guest-house-04.jpg",
    alt: "Luxury Guest House fully equipped kitchen for self-catering",
    title: "Luxury Guest House - Full Kitchen",
    category: "Luxury Guest House",
    description: "Fully equipped kitchen for self-catering luxury"
  },
  {
    src: "/images/suites/luxury-guest-house-05.jpg",
    alt: "Luxury Guest House living room with fireplace and entertainment",
    title: "Luxury Guest House - Living Room",
    category: "Luxury Guest House",
    description: "Comfortable living room with fireplace and entertainment"
  },
  {
    src: "/images/suites/luxury-guest-house-06.jpg",
    alt: "Luxury Guest House dining area for group meals",
    title: "Luxury Guest House - Dining Area",
    category: "Luxury Guest House",
    description: "Elegant dining area perfect for group meals"
  },
  {
    src: "/images/suites/luxury-guest-house-07.jpg",
    alt: "Luxury Guest House bathroom with luxury amenities",
    title: "Luxury Guest House - Luxury Bathroom",
    category: "Luxury Guest House",
    description: "Spa-inspired bathroom with luxury amenities"
  },
  {
    src: "/images/suites/luxury-guest-house-08.jpg",
    alt: "Luxury Guest House additional bathroom for convenience",
    title: "Luxury Guest House - Guest Bathroom",
    category: "Luxury Guest House",
    description: "Additional bathroom for guest convenience"
  },
  {
    src: "/images/suites/luxury-guest-house-09.jpg",
    alt: "Luxury Guest House outdoor terrace with mountain views",
    title: "Luxury Guest House - Mountain Terrace",
    category: "Luxury Guest House",
    description: "Private terrace with stunning mountain views"
  },
  {
    src: "/images/suites/luxury-guest-house-10.jpg",
    alt: "Luxury Guest House interior design and luxury furnishings",
    title: "Luxury Guest House - Interior Design",
    category: "Luxury Guest House",
    description: "Carefully curated luxury interior design"
  },
  {
    src: "/images/suites/luxury-guest-house-11.jpg",
    alt: "Luxury Guest House entrance and welcoming atmosphere",
    title: "Luxury Guest House - Grand Entrance",
    category: "Luxury Guest House",
    description: "Welcoming entrance with luxury atmosphere"
  },
  {
    src: "/images/suites/luxury-guest-house-12.jpg",
    alt: "Luxury Guest House additional living space and comfort",
    title: "Luxury Guest House - Additional Living",
    category: "Luxury Guest House",
    description: "Additional comfortable living space"
  },
  {
    src: "/images/suites/luxury-guest-house-13.jpg",
    alt: "Luxury Guest House evening ambiance and lighting",
    title: "Luxury Guest House - Evening Ambiance",
    category: "Luxury Guest House",
    description: "Beautiful evening ambiance with warm lighting"
  }
];

// Heritage Cottage Gallery Images
const heritageCottageImages = [
  {
    src: "/images/suites/heritage-cottage-cover.jpg",
    alt: "Heritage Cottage exterior view showcasing traditional architecture",
    title: "Heritage Cottage - Exterior View",
    category: "Exterior",
    description: "Traditional heritage architecture in stunning highland setting"
  },
  {
    src: "/images/suites/heritage-cottage-house-01.jpg",
    alt: "Heritage Cottage spacious living area with traditional decor",
    title: "Heritage Cottage - Living Area",
    category: "Living Spaces",
    description: "Spacious living area with traditional heritage charm"
  },
  {
    src: "/images/suites/heritage-cottage-house-02.jpg",
    alt: "Heritage Cottage comfortable seating and relaxation area",
    title: "Heritage Cottage - Relaxation Area",
    category: "Living Spaces",
    description: "Comfortable seating area perfect for family gatherings"
  },
  {
    src: "/images/suites/heritage-cottage-house-03.jpg",
    alt: "Heritage Cottage master bedroom with traditional furnishings",
    title: "Heritage Cottage - Master Bedroom",
    category: "Bedrooms",
    description: "Master bedroom with traditional heritage furnishings"
  },
  {
    src: "/images/suites/heritage-cottage-house-04.jpg",
    alt: "Heritage Cottage additional bedroom for family accommodation",
    title: "Heritage Cottage - Family Bedroom",
    category: "Bedrooms",
    description: "Additional bedroom perfect for family stays"
  },
  {
    src: "/images/suites/heritage-cottage-house-05.jpg",
    alt: "Heritage Cottage third bedroom with heritage character",
    title: "Heritage Cottage - Heritage Bedroom",
    category: "Bedrooms",
    description: "Charming bedroom with authentic heritage character"
  },
  {
    src: "/images/suites/heritage-cottage-house-06.jpg",
    alt: "Heritage Cottage fully equipped kitchen for self-catering",
    title: "Heritage Cottage - Traditional Kitchen",
    category: "Kitchen & Dining",
    description: "Fully equipped traditional kitchen for self-catering"
  },
  {
    src: "/images/suites/heritage-cottage-house-07.jpg",
    alt: "Heritage Cottage dining area for family meals",
    title: "Heritage Cottage - Family Dining",
    category: "Kitchen & Dining",
    description: "Traditional dining area perfect for family meals"
  },
  {
    src: "/images/suites/heritage-cottage-house-08.jpg",
    alt: "Heritage Cottage kitchen details and traditional features",
    title: "Heritage Cottage - Kitchen Details",
    category: "Kitchen & Dining",
    description: "Traditional kitchen features with modern conveniences"
  },
  {
    src: "/images/suites/heritage-cottage-house-09.jpg",
    alt: "Heritage Cottage bathroom with modern amenities",
    title: "Heritage Cottage - Main Bathroom",
    category: "Bathrooms",
    description: "Modern bathroom facilities with heritage charm"
  },
  {
    src: "/images/suites/heritage-cottage-house-10.jpg",
    alt: "Heritage Cottage additional bathroom for convenience",
    title: "Heritage Cottage - Guest Bathroom",
    category: "Bathrooms",
    description: "Additional bathroom for guest convenience"
  },
  {
    src: "/images/suites/heritage-cottage-house-11.jpg",
    alt: "Heritage Cottage entrance hall and welcoming interior",
    title: "Heritage Cottage - Entrance Hall",
    category: "Interior Features",
    description: "Welcoming entrance with traditional heritage character"
  },
  {
    src: "/images/suites/heritage-cottage-house-12.jpg",
    alt: "Heritage Cottage interior details and traditional decor",
    title: "Heritage Cottage - Interior Details",
    category: "Interior Features",
    description: "Authentic heritage details and traditional decor"
  },
  {
    src: "/images/suites/heritage-cottage-house-13.jpg",
    alt: "Heritage Cottage outdoor area and garden access",
    title: "Heritage Cottage - Garden Access",
    category: "Outdoor Spaces",
    description: "Beautiful outdoor spaces and garden access"
  },
  {
    src: "/images/suites/heritage-cottage-house-14.jpg",
    alt: "Heritage Cottage private outdoor seating and highland views",
    title: "Heritage Cottage - Highland Views",
    category: "Outdoor Spaces",
    description: "Private outdoor seating with stunning highland views"
  }
];

const luxurySuiteCategories = ["Master Suite", "Loft Suite", "Garden Suite", "Blue Crane Suite", "Falcon Suite", "Cove Suite", "Robin Suite", "Luxury Guest House"];
const heritageCottageCategories = ["Exterior", "Living Spaces", "Bedrooms", "Kitchen & Dining", "Bathrooms", "Interior Features", "Outdoor Spaces"];

export default function Gallery() {
  return (
    <>
      <SEO
        title="Photo Gallery - The Browns Luxury Guest Suites Dullstroom"
        description="View luxury suites, gardens, and Dullstrom attractions. The Browns - premier highland accommodation near fly-fishing and Panorama Route with direct booking benefits."
        keywords="Dullstroom luxury guesthouse photos, highland accommodation gallery, Panorama Route accommodation, Dullstroom suite interiors, self-catering luxury Mpumalanga"
      />
      
      <div className="min-h-screen section-spacing">
        <div className="responsive-container">
          <div className="max-w-full xl:max-w-7xl mx-auto">
            <div className="text-center mb-6 sm:mb-8 lg:mb-12">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-primary mb-3 sm:mb-4 px-2 font-playfair">
                Gallery - Luxury Dullstroom Accommodation
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto px-2 leading-relaxed">
                Explore our luxury suites, beautiful highland gardens, and stunning Dullstroom location. Book direct for guaranteed best rates and exclusive perks.
              </p>
            </div>

            {/* Luxury Suites Gallery */}
            <div className="mb-12 lg:mb-16">
              <Card className="p-4 sm:p-6 lg:p-8">
                <div className="text-center mb-6 sm:mb-8">
                  <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl text-primary mb-2 sm:mb-3 font-playfair">
                    Luxury Suites Collection
                  </h2>
                  <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Discover our premium luxury suites featuring elegant interiors, modern amenities, and stunning highland views. Each suite offers a unique blend of comfort and sophistication.
                  </p>
                </div>
                <EnhancedGallery 
                  images={luxurySuitesImages}
                  categories={luxurySuiteCategories}
                  columns={3}
                  showCategories={true}
                />
              </Card>
            </div>

            {/* Heritage Cottage Gallery */}
            <div className="mb-8">
              <Card className="p-4 sm:p-6 lg:p-8">
                <div className="text-center mb-6 sm:mb-8">
                  <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl text-primary mb-2 sm:mb-3 font-playfair">
                    Heritage Cottage Suites
                  </h2>
                  <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Experience authentic heritage charm in our traditional cottage accommodation. Perfect for families and groups seeking spacious, self-catering luxury with historical character.
                  </p>
                </div>
                <EnhancedGallery 
                  images={heritageCottageImages}
                  categories={heritageCottageCategories}
                  columns={3}
                  showCategories={true}
                />
              </Card>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-8 sm:mt-12 lg:mt-16">
              <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-4 sm:p-6 lg:p-8">
                <h3 className="text-lg sm:text-xl lg:text-2xl text-primary mb-2 sm:mb-3 font-playfair">
                  Ready to Experience Luxury?
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto">
                  Book direct with us for guaranteed best rates, exclusive perks, and personalized service in the heart of Dullstroom's highland beauty.
                </p>
                <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 justify-center items-center">
                  <a 
                    href="/booking" 
                    className="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg text-sm sm:text-base font-medium transition-colors duration-200 min-h-[44px] min-w-[120px]"
                  >
                    Book Now
                  </a>
                  <a 
                    href="/suites" 
                    className="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-lg text-sm sm:text-base font-medium transition-colors duration-200 min-h-[44px] min-w-[120px]"
                  >
                    View Suites
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}