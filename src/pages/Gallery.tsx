import { BookingGallery } from "@/components/ui/booking-gallery";
import { SEO } from "@/components/ui/seo";

// Enhanced gallery images with booking CTAs and urgency messaging
const allGalleryImages = [
  // Property Exteriors
  { 
    src: "/images/gallery/main-building-exterior.jpg",
    alt: "The Browns luxury guest suites exterior facade in Dullstroom Mpumalanga highlands",
    title: "Main Building Exterior",
    category: "Property Exteriors",
    description: "Stunning mountain backdrop views",
    caption: "Award-winning architecture nestled in Dullstroom's misty highlands"
  },
  { 
    src: "/images/gallery/cottage-suites-exterior.jpg",
    alt: "Property exterior with spectacular highland mountain views Dullstroom accommodation",
    title: "Cottage Suites",
    category: "Property Exteriors", 
    description: "Highland cottage setting",
    caption: "Individual cottage suites for ultimate privacy and tranquility"
  },
  { 
    src: "/images/gallery/evening-exterior.jpg",
    alt: "Evening exterior lighting at The Browns luxury accommodation Dullstroom",
    title: "Evening Ambiance",
    category: "Property Exteriors",
    description: "Magical evening atmosphere",
    caption: "Romantic evening lighting perfect for highland getaways"
  },
  
  // Suite Interiors with Booking CTAs
  { 
    src: "/images/gallery/master-suite-bedroom.jpg",
    alt: "Master Suite luxury interior King XL bed Nespresso corner Dullstroom",
    title: "Master Suite Bedroom",
    category: "Suite Interiors",
    description: "King XL bed, luxury amenities",
    caption: "Master Suite Nespresso corner – Book Direct for 10% Off",
    suiteCode: "Master Suite",
    roomId: 6,
    urgencyMessage: "Limited Availability"
  },
  { 
    src: "/images/gallery/robin-suite-living.jpg",
    alt: "Robin cottage suite cozy interior fireplace self-catering Dullstroom family accommodation",
    title: "Robin Suite Living Area", 
    category: "Suite Interiors",
    description: "Cozy fireplace, family-friendly",
    caption: "Robin Suite fireplace – Perfect for Dullstroom winter nights",
    suiteCode: "Robin Suite",
    roomId: 15,
    urgencyMessage: "Only 2 Nights Left"
  },
  { 
    src: "/images/gallery/luxury-ensuite.jpg",
    alt: "Luxury bathroom double vanity premium Charlotte Rhys toiletries Dullstroom",
    title: "Luxury Ensuite",
    category: "Suite Interiors", 
    description: "Spa-inspired bathroom",
    caption: "Premium Charlotte Rhys toiletries in every suite"
  },
  { 
    src: "/images/gallery/garden-suite-interior.jpg",
    alt: "Garden Suite interior mountain views self-catering kitchen Dullstroom family",
    title: "Garden Suite Interior",
    category: "Suite Interiors",
    description: "Mountain views, self-catering",
    caption: "Garden Suite kitchen – Book Direct for Best Rates",
    suiteCode: "Garden Suite", 
    roomId: 4,
    urgencyMessage: "Weekend Special"
  },
  { 
    src: "/images/gallery/loft-family-suite.jpg",
    alt: "Loft Family Suite spacious accommodation Dullstroom groups families",
    title: "Loft Family Suite",
    category: "Suite Interiors",
    description: "Spacious family accommodation", 
    caption: "Loft Family Suite – Perfect for Dullstroom family holidays",
    suiteCode: "Loft Family Suite",
    roomId: 5
  },
  { 
    src: "/images/gallery/blue-crane-suite.jpg",
    alt: "Blue Crane Suite luxury interior design Dullstroom highlands accommodation",
    title: "Blue Crane Suite",
    category: "Suite Interiors",
    description: "Highland-inspired luxury",
    caption: "Blue Crane Suite – Book Direct Save 10%",
    suiteCode: "Blue Crane Suite",
    roomId: 17,
    urgencyMessage: "Last Room Available"
  },
  
  // Gardens & Grounds
  { 
    src: "/images/gallery/garden-pathways.jpg",
    alt: "Serene garden landscapes The Browns Dullstroom mountain views walking paths",
    title: "Garden Pathways",
    category: "Gardens & Grounds",
    description: "Highland garden walks",
    caption: "Peaceful garden paths with panoramic Dullstroom mountain views"
  },
  { 
    src: "/images/gallery/private-garden-terrace.jpg",
    alt: "Garden views luxury suites The Browns Dullstroom accommodation outdoor space",
    title: "Private Garden Terrace", 
    category: "Gardens & Grounds",
    description: "Private outdoor relaxation",
    caption: "Private terraces for morning coffee and highland sunsets"
  },
  { 
    src: "/images/gallery/indigenous-garden.jpg",
    alt: "Landscaped gardens indigenous plants mountain backdrop Dullstroom",
    title: "Indigenous Highland Garden",
    category: "Gardens & Grounds", 
    description: "Native highland flora",
    caption: "Carefully curated indigenous gardens celebrating Dullstroom's natural beauty"
  },
  
  // Dullstroom Attractions
  { 
    src: "/images/gallery/dullstroom-dam-fishing.jpg",
    alt: "Dullstroom Dam fly-fishing destination near The Browns accommodation trout",
    title: "Dullstroom Dam Fishing",
    category: "Dullstroom Attractions",
    description: "World-class fly-fishing",
    caption: "World-renowned trout fishing just minutes from your suite"
  },
  { 
    src: "/images/gallery/dullstroom-village.jpg",
    alt: "Dullstroom town center shops restaurants walking distance The Browns",
    title: "Dullstroom Village",
    category: "Dullstroom Attractions", 
    description: "Charming highland town",
    caption: "Historic Dullstroom village within walking distance"
  },
  { 
    src: "/images/gallery/highland-hiking-trails.jpg",
    alt: "Highland hiking trails nature walks near The Browns luxury guest suites",
    title: "Highland Hiking Trails",
    category: "Dullstroom Attractions",
    description: "Mountain hiking adventures", 
    caption: "Explore scenic highland trails from your luxury base"
  },
  { 
    src: "/images/gallery/panorama-route-views.jpg",
    alt: "Panorama Route day trips Gods Window Blyde River Canyon from Dullstroom",
    title: "Panorama Route Access",
    category: "Dullstroom Attractions",
    description: "Day trips to iconic attractions",
    caption: "Perfect base for Panorama Route adventures to God's Window"
  }
];

const galleryCategories = ["Property Exteriors", "Suite Interiors", "Gardens & Grounds", "Dullstroom Attractions"];

export default function Gallery() {
  return (
    <>
      <SEO
        title="Photo Gallery - The Browns Luxury Guest Suites Dullstroom"
        description="View luxury suites, gardens, and Dullstroom attractions. Book direct for 10% off at The Browns - premier highland accommodation near fly-fishing and Panorama Route."
        keywords="Dullstroom luxury guesthouse photos, highland accommodation gallery, Panorama Route accommodation, Dullstroom suite interiors, self-catering luxury Mpumalanga"
      />
      
      <div className="min-h-screen py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6">
          <div className="max-w-full xl:max-w-7xl mx-auto">
            <div className="text-center mb-6 sm:mb-8 lg:mb-12">
              <h1 className="fluid-heading text-primary mb-3 sm:mb-4 px-2">
                Gallery - Luxury Dullstroom Accommodation
              </h1>
              <p className="fluid-text text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed">
                Explore our luxury suites, beautiful highland gardens, and stunning Dullstroom location. Book direct for guaranteed best rates and 10% off your stay.
              </p>
            </div>

            <BookingGallery 
              images={allGalleryImages}
              categories={galleryCategories}
              showTestimonials={true}
            />
          </div>
        </div>
      </div>
    </>
  );
}