import { EnhancedGallery } from "@/components/ui/enhanced-gallery";
import { SEO } from "@/components/ui/seo";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";


// Luxury Suites Gallery Images - Updated with accurate descriptions
const luxurySuitesImages = [
  // Master Suite
  {
    src: "/images/suites/master-suite-01.jpg",
    alt: "Master Suite main accommodation area",
    title: "Master Suite - Main Area",
    category: "Master Suite"
  },
  {
    src: "/images/suites/master-suite-02.jpg",
    alt: "Master Suite secondary living space",
    title: "Master Suite - Living Space",
    category: "Master Suite"
  },
  {
    src: "/images/suites/master-suite-03.jpg",
    alt: "Master Suite bathroom facilities",
    title: "Master Suite - Bathroom",
    category: "Master Suite"
  },
  {
    src: "/images/suites/master-suite-04.jpg",
    alt: "Master Suite kitchen or dining area",
    title: "Master Suite - Kitchen Area",
    category: "Master Suite"
  },
  {
    src: "/images/suites/master-suite-05.jpg",
    alt: "Master Suite additional room features",
    title: "Master Suite - Room Features",
    category: "Master Suite"
  },
  {
    src: "/images/suites/master-suite-06.jpg",
    alt: "Master Suite interior design and furnishings",
    title: "Master Suite - Interior Design",
    category: "Master Suite"
  },
  {
    src: "/images/suites/master-suite-07.jpg",
    alt: "Master Suite room amenities and features",
    title: "Master Suite - Room Amenities",
    category: "Master Suite"
  },

  // Loft Suite
  {
    src: "/images/suites/loft-suite-01.jpg",
    alt: "Loft Suite main accommodation area",
    title: "Loft Suite - Main Area",
    category: "Loft Suite"
  },
  {
    src: "/images/suites/loft-suite-02.jpg",
    alt: "Loft Suite secondary living space",
    title: "Loft Suite - Living Space",
    category: "Loft Suite"
  },
  {
    src: "/images/suites/loft-suite-03.jpg",
    alt: "Loft Suite kitchen facilities",
    title: "Loft Suite - Kitchen",
    category: "Loft Suite"
  },
  {
    src: "/images/suites/loft-suite-04.jpg",
    alt: "Loft Suite bathroom amenities",
    title: "Loft Suite - Bathroom",
    category: "Loft Suite"
  },
  {
    src: "/images/suites/loft-suite-05.jpg",
    alt: "Loft Suite additional room features",
    title: "Loft Suite - Room Features",
    category: "Loft Suite"
  },
  {
    src: "/images/suites/loft-suite-06.jpg",
    alt: "Loft Suite interior design elements",
    title: "Loft Suite - Interior Design",
    category: "Loft Suite"
  },
  {
    src: "/images/suites/loft-suite-07.jpg",
    alt: "Loft Suite room amenities",
    title: "Loft Suite - Room Amenities",
    category: "Loft Suite"
  },

  // Garden Suite
  {
    src: "/images/suites/garden-suite-01.jpg",
    alt: "Garden Suite main accommodation area",
    title: "Garden Suite - Main Area",
    category: "Garden Suite"
  },
  {
    src: "/images/suites/garden-suite-02.jpg",
    alt: "Garden Suite secondary room space",
    title: "Garden Suite - Secondary Room",
    category: "Garden Suite"
  },
  {
    src: "/images/suites/garden-suite-03.jpg",
    alt: "Garden Suite additional living area",
    title: "Garden Suite - Living Area",
    category: "Garden Suite"
  },
  {
    src: "/images/suites/garden-suite-04.jpg",
    alt: "Garden Suite kitchen facilities",
    title: "Garden Suite - Kitchen",
    category: "Garden Suite"
  },
  {
    src: "/images/suites/garden-suite-05.jpg",
    alt: "Garden Suite bathroom amenities",
    title: "Garden Suite - Bathroom",
    category: "Garden Suite"
  },
  {
    src: "/images/suites/garden-suite-06.jpg",
    alt: "Garden Suite interior design features",
    title: "Garden Suite - Interior Features",
    category: "Garden Suite"
  },

  // Blue Crane Suite
  {
    src: "/images/suites/blue-crane-suite-01.jpg",
    alt: "Blue Crane Suite main accommodation area",
    title: "Blue Crane Suite - Main Area",
    category: "Blue Crane Suite"
  },
  {
    src: "/images/suites/blue-crane-suite-02.jpg",
    alt: "Blue Crane Suite secondary living space",
    title: "Blue Crane Suite - Living Space",
    category: "Blue Crane Suite"
  },
  {
    src: "/images/suites/blue-crane-suite-03.jpg",
    alt: "Blue Crane Suite additional room area",
    title: "Blue Crane Suite - Additional Room",
    category: "Blue Crane Suite"
  },
  {
    src: "/images/suites/blue-crane-suite-04.jpg",
    alt: "Blue Crane Suite kitchen facilities",
    title: "Blue Crane Suite - Kitchen",
    category: "Blue Crane Suite"
  },
  {
    src: "/images/suites/blue-crane-suite-05.jpg",
    alt: "Blue Crane Suite bathroom amenities",
    title: "Blue Crane Suite - Bathroom",
    category: "Blue Crane Suite"
  },
  {
    src: "/images/suites/blue-crane-suite-06.jpg",
    alt: "Blue Crane Suite interior design details",
    title: "Blue Crane Suite - Interior Details",
    category: "Blue Crane Suite"
  },
  {
    src: "/images/suites/blue-crane-suite-07.jpg",
    alt: "Blue Crane Suite room features and amenities",
    title: "Blue Crane Suite - Room Features",
    category: "Blue Crane Suite"
  },

  // Falcon Suite
  {
    src: "/images/suites/falcon-suite-01.jpg",
    alt: "Falcon Suite main accommodation area",
    title: "Falcon Suite - Main Area",
    category: "Falcon Suite"
  },
  {
    src: "/images/suites/falcon-suite-02.jpg",
    alt: "Falcon Suite secondary living space",
    title: "Falcon Suite - Living Space",
    category: "Falcon Suite"
  },
  {
    src: "/images/suites/falcon-suite-03.jpg",
    alt: "Falcon Suite additional room area",
    title: "Falcon Suite - Additional Room",
    category: "Falcon Suite"
  },
  {
    src: "/images/suites/falcon-suite-04.jpg",
    alt: "Falcon Suite kitchen facilities",
    title: "Falcon Suite - Kitchen",
    category: "Falcon Suite"
  },
  {
    src: "/images/suites/falcon-suite-05.jpg",
    alt: "Falcon Suite bathroom amenities",
    title: "Falcon Suite - Bathroom",
    category: "Falcon Suite"
  },
  {
    src: "/images/suites/falcon-suite-06.jpg",
    alt: "Falcon Suite interior design features",
    title: "Falcon Suite - Interior Design",
    category: "Falcon Suite"
  },
  {
    src: "/images/suites/falcon-suite-07.jpg",
    alt: "Falcon Suite room amenities and features",
    title: "Falcon Suite - Room Features",
    category: "Falcon Suite"
  },

  // Cove Suite
  {
    src: "/images/suites/cove-suite-01.jpg",
    alt: "Cove Suite main accommodation area",
    title: "Cove Suite - Main Area",
    category: "Cove Suite"
  },
  {
    src: "/images/suites/cove-suite-02.jpg",
    alt: "Cove Suite secondary living space",
    title: "Cove Suite - Living Space",
    category: "Cove Suite"
  },
  {
    src: "/images/suites/cove-suite-03.jpg",
    alt: "Cove Suite additional room area",
    title: "Cove Suite - Additional Room",
    category: "Cove Suite"
  },
  {
    src: "/images/suites/cove-suite-04.jpg",
    alt: "Cove Suite kitchen facilities",
    title: "Cove Suite - Kitchen",
    category: "Cove Suite"
  },
  {
    src: "/images/suites/cove-suite-05.jpg",
    alt: "Cove Suite bathroom amenities",
    title: "Cove Suite - Bathroom",
    category: "Cove Suite"
  },
  {
    src: "/images/suites/cove-suite-06.jpg",
    alt: "Cove Suite interior features",
    title: "Cove Suite - Interior Features",
    category: "Cove Suite"
  },

  // Robin Suite
  {
    src: "/images/suites/robin-suite-01.jpg",
    alt: "Robin Suite main accommodation area",
    title: "Robin Suite - Main Area",
    category: "Robin Suite"
  },
  {
    src: "/images/suites/robin-suite-02.jpg",
    alt: "Robin Suite secondary living space",
    title: "Robin Suite - Living Space",
    category: "Robin Suite"
  },
  {
    src: "/images/suites/robin-suite-03.jpg",
    alt: "Robin Suite additional room area",
    title: "Robin Suite - Additional Room",
    category: "Robin Suite"
  },
  {
    src: "/images/suites/robin-suite-04.jpg",
    alt: "Robin Suite kitchen facilities",
    title: "Robin Suite - Kitchen",
    category: "Robin Suite"
  },
  {
    src: "/images/suites/robin-suite-05.jpg",
    alt: "Robin Suite bathroom amenities",
    title: "Robin Suite - Bathroom",
    category: "Robin Suite"
  },
  {
    src: "/images/suites/robin-suite-06.jpg",
    alt: "Robin Suite interior features",
    title: "Robin Suite - Interior Features",
    category: "Robin Suite"
  },

  // Luxury Guest House
  {
    src: "/images/suites/luxury-guest-house-01.jpg",
    alt: "Luxury Guest House main accommodation area",
    title: "Luxury Guest House - Main Area",
    category: "Luxury Guest House"
  },
  {
    src: "/images/suites/luxury-guest-house-02.jpg",
    alt: "Luxury Guest House secondary living space",
    title: "Luxury Guest House - Living Space",
    category: "Luxury Guest House"
  },
  {
    src: "/images/suites/luxury-guest-house-03.jpg",
    alt: "Luxury Guest House additional room area",
    title: "Luxury Guest House - Additional Room",
    category: "Luxury Guest House"
  },
  {
    src: "/images/suites/luxury-guest-house-04.jpg",
    alt: "Luxury Guest House kitchen facilities",
    title: "Luxury Guest House - Kitchen",
    category: "Luxury Guest House"
  },
  {
    src: "/images/suites/luxury-guest-house-05.jpg",
    alt: "Luxury Guest House bathroom facilities",
    title: "Luxury Guest House - Bathroom",
    category: "Luxury Guest House"
  },
  {
    src: "/images/suites/luxury-guest-house-06.jpg",
    alt: "Luxury Guest House interior design features",
    title: "Luxury Guest House - Interior Design",
    category: "Luxury Guest House"
  },
  {
    src: "/images/suites/luxury-guest-house-07.jpg",
    alt: "Luxury Guest House room amenities",
    title: "Luxury Guest House - Room Amenities",
    category: "Luxury Guest House"
  },
  {
    src: "/images/suites/luxury-guest-house-08.jpg",
    alt: "Luxury Guest House additional accommodation space",
    title: "Luxury Guest House - Additional Space",
    category: "Luxury Guest House"
  },
  {
    src: "/images/suites/luxury-guest-house-09.jpg",
    alt: "Luxury Guest House interior design elements",
    title: "Luxury Guest House - Design Elements",
    category: "Luxury Guest House"
  },
  {
    src: "/images/suites/luxury-guest-house-10.jpg",
    alt: "Luxury Guest House room layout and features",
    title: "Luxury Guest House - Room Layout",
    category: "Luxury Guest House"
  },
  {
    src: "/images/suites/luxury-guest-house-11.jpg",
    alt: "Luxury Guest House entrance and reception area",
    title: "Luxury Guest House - Entrance",
    category: "Luxury Guest House"
  },
  {
    src: "/images/suites/luxury-guest-house-12.jpg",
    alt: "Luxury Guest House additional living area",
    title: "Luxury Guest House - Additional Living",
    category: "Luxury Guest House"
  },
  {
    src: "/images/suites/luxury-guest-house-13.jpg",
    alt: "Luxury Guest House evening interior ambiance",
    title: "Luxury Guest House - Evening Ambiance",
    category: "Luxury Guest House"
  }
];

// Heritage Cottage Gallery Images - Updated with accurate descriptions
const heritageCottageImages = [
  // Heritage Cottage House Images
  {
    src: "/images/suites/heritage-cottage-cover.jpg",
    alt: "Heritage Cottage exterior view",
    title: "Heritage Cottage - Exterior",
    category: "Exterior"
  },
  {
    src: "/images/suites/heritage-cottage-house-01.jpg",
    alt: "Heritage Cottage main living area",
    title: "Heritage Cottage - Main Living Area",
    category: "Living Spaces"
  },
  {
    src: "/images/suites/heritage-cottage-house-02.jpg",
    alt: "Heritage Cottage secondary living space",
    title: "Heritage Cottage - Secondary Living",
    category: "Living Spaces"
  },
  {
    src: "/images/suites/heritage-cottage-house-03.jpg",
    alt: "Heritage Cottage bedroom accommodation",
    title: "Heritage Cottage - Bedroom",
    category: "Bedrooms"
  },
  {
    src: "/images/suites/heritage-cottage-house-04.jpg",
    alt: "Heritage Cottage additional bedroom space",
    title: "Heritage Cottage - Additional Bedroom",
    category: "Bedrooms"
  },
  {
    src: "/images/suites/heritage-cottage-house-05.jpg",
    alt: "Heritage Cottage third bedroom area",
    title: "Heritage Cottage - Third Bedroom",
    category: "Bedrooms"
  },
  {
    src: "/images/suites/heritage-cottage-house-06.jpg",
    alt: "Heritage Cottage kitchen facilities",
    title: "Heritage Cottage - Kitchen",
    category: "Kitchen & Dining"
  },
  {
    src: "/images/suites/heritage-cottage-house-07.jpg",
    alt: "Heritage Cottage dining area",
    title: "Heritage Cottage - Dining Area",
    category: "Kitchen & Dining"
  },
  {
    src: "/images/suites/heritage-cottage-house-08.jpg",
    alt: "Heritage Cottage kitchen details",
    title: "Heritage Cottage - Kitchen Details",
    category: "Kitchen & Dining"
  },
  {
    src: "/images/suites/heritage-cottage-house-09.jpg",
    alt: "Heritage Cottage bathroom facilities",
    title: "Heritage Cottage - Main Bathroom",
    category: "Bathrooms"
  },
  {
    src: "/images/suites/heritage-cottage-house-10.jpg",
    alt: "Heritage Cottage additional bathroom",
    title: "Heritage Cottage - Additional Bathroom",
    category: "Bathrooms"
  },
  {
    src: "/images/suites/heritage-cottage-house-11.jpg",
    alt: "Heritage Cottage entrance area",
    title: "Heritage Cottage - Entrance",
    category: "Interior Features"
  },
  {
    src: "/images/suites/heritage-cottage-house-12.jpg",
    alt: "Heritage Cottage interior details",
    title: "Heritage Cottage - Interior Details",
    category: "Interior Features"
  },
  {
    src: "/images/suites/heritage-cottage-house-13.jpg",
    alt: "Heritage Cottage outdoor space",
    title: "Heritage Cottage - Outdoor Area",
    category: "Outdoor Spaces"
  },
  {
    src: "/images/suites/heritage-cottage-house-14.jpg",
    alt: "Heritage Cottage additional outdoor area",
    title: "Heritage Cottage - Additional Outdoor",
    category: "Outdoor Spaces"
  }
];

const luxurySuiteCategories = ["Master Suite", "Loft Suite", "Garden Suite", "Blue Crane Suite", "Falcon Suite", "Cove Suite", "Robin Suite", "Luxury Guest House"];
const heritageCottageCategories = ["Exterior", "Living Spaces", "Bedrooms", "Kitchen & Dining", "Bathrooms", "Interior Features", "Outdoor Spaces"];

export default function Gallery() {
  const [activeGallery, setActiveGallery] = useState<'luxury' | 'heritage'>('luxury');

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
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto px-2 leading-relaxed mb-8">
                Explore our luxury suites, beautiful highland gardens, and stunning Dullstroom location. Book direct for guaranteed best rates and exclusive perks.
              </p>

              {/* House Selection Interface */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8 sm:mb-12">
                <div className="bg-card rounded-lg p-2 border shadow-sm">
                  <div className="flex flex-col xs:flex-row gap-2">
                    <Button
                      onClick={() => setActiveGallery('luxury')}
                      variant={activeGallery === 'luxury' ? 'default' : 'ghost'}
                      className={`px-4 sm:px-6 py-3 text-sm sm:text-base font-medium transition-all duration-200 ${
                        activeGallery === 'luxury' 
                          ? 'bg-primary text-primary-foreground shadow-sm' 
                          : 'hover:bg-muted'
                      }`}
                    >
                      🏨 Luxury Suites Collection
                    </Button>
                    <Button
                      onClick={() => setActiveGallery('heritage')}
                      variant={activeGallery === 'heritage' ? 'default' : 'ghost'}
                      className={`px-4 sm:px-6 py-3 text-sm sm:text-base font-medium transition-all duration-200 ${
                        activeGallery === 'heritage' 
                          ? 'bg-primary text-primary-foreground shadow-sm' 
                          : 'hover:bg-muted'
                      }`}
                    >
                      🏡 Heritage Cottage Suites
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Luxury Suites Gallery */}
            {activeGallery === 'luxury' && (
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
            )}

            {/* Heritage Cottage Gallery */}
            {activeGallery === 'heritage' && (
              <div className="mb-12 lg:mb-16">
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
            )}

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