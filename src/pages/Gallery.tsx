import { BookingGallery } from "@/components/ui/booking-gallery";
import { SEO } from "@/components/ui/seo";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

// Enhanced gallery images with booking CTAs and urgency messaging
const allGalleryImages = [
  // Property Exteriors
  { 
    src: "/images/gallery/main-building-exterior.jpg",
    alt: "The Browns luxury guest suites exterior facade in Dullstroom Mpumalanga highlands",
    title: "Main Building Exterior",
    category: "Property Exteriors",
    description: "Stunning mountain backdrop views",
    caption: "Award-winning architecture nestled in Dullstroom's misty highlands",
    placeholder: { filename: "main-building-exterior.jpg", folder: "/images/gallery/", width: 800, height: 600 }
  },
  { 
    src: "/images/gallery/cottage-suites-exterior.jpg",
    alt: "Property exterior with spectacular highland views Dullstroom accommodation",
    title: "Cottage Suites",
    category: "Property Exteriors", 
    description: "Highland cottage setting",
    caption: "Individual cottage suites for ultimate privacy and tranquility",
    placeholder: { filename: "cottage-suites-exterior.jpg", folder: "/images/gallery/", width: 800, height: 600 }
  },
  { 
    src: "/images/gallery/evening-exterior.jpg",
    alt: "Evening exterior lighting at The Browns luxury accommodation Dullstroom",
    title: "Evening Ambiance",
    category: "Property Exteriors",
    description: "Magical evening atmosphere",
    caption: "Romantic evening lighting perfect for highland getaways",
    placeholder: { filename: "evening-exterior.jpg", folder: "/images/gallery/", width: 800, height: 600 }
  },
  
  // Suite Interiors with Booking CTAs
  { 
    src: "/images/gallery/master-suite-bedroom.jpg",
    alt: "Master Suite luxury interior King XL bed Nespresso corner Dullstroom",
    title: "Master Suite Bedroom",
    category: "Suite Interiors",
    description: "King XL bed, luxury amenities",
    caption: "Master Suite Nespresso corner – Book Direct for Best Rates",
    suiteCode: "Master Suite",
    roomId: 6,
    urgencyMessage: "Flagship luxury suite",
    placeholder: { filename: "master-suite-bedroom.jpg", folder: "/images/gallery/", width: 800, height: 600 }
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
    urgencyMessage: "Cottage fireplace charm",
    placeholder: { filename: "robin-suite-living.jpg", folder: "/images/gallery/", width: 800, height: 600 }
  },
  { 
    src: "/images/gallery/luxury-ensuite.jpg",
    alt: "Luxury bathroom double vanity premium Charlotte Rhys toiletries Dullstroom",
    title: "Luxury Ensuite",
    category: "Suite Interiors", 
    description: "Spa-inspired bathroom",
    caption: "Premium Charlotte Rhys toiletries in every suite",
    placeholder: { filename: "luxury-ensuite.jpg", folder: "/images/gallery/", width: 800, height: 600 }
  },
  { 
    src: "/images/gallery/garden-suite-interior.jpg",
    alt: "Garden Suite interior garden views self-catering kitchen Dullstroom family",
    title: "Garden Suite Interior",
    category: "Suite Interiors",
    description: "Garden views, self-catering",
    caption: "Garden Suite kitchen – Book Direct for Best Rates",
    suiteCode: "Garden Suite", 
    roomId: 4,
    urgencyMessage: "Garden retreat views",
    placeholder: { filename: "garden-suite-interior.jpg", folder: "/images/gallery/", width: 800, height: 600 }
  },
  { 
    src: "/images/gallery/loft-family-suite.jpg",
    alt: "Loft Family Suite spacious accommodation Dullstroom groups families",
    title: "Loft Family Suite",
    category: "Suite Interiors",
    description: "Spacious family accommodation", 
    caption: "Loft Family Suite – Perfect for Dullstroom family holidays",
    suiteCode: "Loft Family Suite",
    roomId: 5,
    placeholder: { filename: "loft-family-suite.jpg", folder: "/images/gallery/", width: 800, height: 600 }
  },
  { 
    src: "/images/gallery/blue-crane-suite.jpg",
    alt: "Blue Crane Suite luxury interior design Dullstroom highlands accommodation",
    title: "Blue Crane Suite",
    category: "Suite Interiors",
    description: "Highland-inspired luxury",
    caption: "Blue Crane Suite – Highland luxury accommodation",
    suiteCode: "Blue Crane Suite",
    roomId: 17,
    urgencyMessage: "Highland cottage luxury",
    placeholder: { filename: "blue-crane-suite.jpg", folder: "/images/gallery/", width: 800, height: 600 }
  },
  
  // Gardens & Grounds
  { 
    src: "/images/gallery/garden-pathways.jpg",
    alt: "Serene garden landscapes The Browns Dullstroom highland views walking paths",
    title: "Garden Pathways",
    category: "Gardens & Grounds",
    description: "Highland garden walks",
    caption: "Peaceful garden paths with panoramic Dullstroom highland views",
    placeholder: { filename: "garden-pathways.jpg", folder: "/images/gallery/", width: 800, height: 600 }
  },
  { 
    src: "/images/gallery/private-garden-terrace.jpg",
    alt: "Garden views luxury suites The Browns Dullstroom accommodation outdoor space",
    title: "Private Garden Terrace", 
    category: "Gardens & Grounds",
    description: "Private outdoor relaxation",
    caption: "Private terraces for morning coffee and highland sunsets",
    placeholder: { filename: "private-garden-terrace.jpg", folder: "/images/gallery/", width: 800, height: 600 }
  },
  { 
    src: "/images/gallery/indigenous-garden.jpg",
    alt: "Landscaped gardens indigenous plants mountain backdrop Dullstroom",
    title: "Indigenous Highland Garden",
    category: "Gardens & Grounds", 
    description: "Native highland flora",
    caption: "Carefully curated indigenous gardens celebrating Dullstroom's natural beauty",
    placeholder: { filename: "indigenous-garden.jpg", folder: "/images/gallery/", width: 800, height: 600 }
  },
  
  // Dullstroom Attractions
  { 
    src: "/images/gallery/dullstroom-dam-fishing.jpg",
    alt: "Dullstroom Dam fly-fishing destination near The Browns accommodation trout",
    title: "Dullstroom Dam Fishing",
    category: "Dullstroom Attractions",
    description: "World-class fly-fishing",
    caption: "World-renowned trout fishing just minutes from your suite",
    placeholder: { filename: "dullstroom-dam-fishing.jpg", folder: "/images/gallery/", width: 800, height: 600 }
  },
  { 
    src: "/images/gallery/dullstroom-village.jpg",
    alt: "Dullstroom town center shops restaurants walking distance The Browns",
    title: "Dullstroom Village",
    category: "Dullstroom Attractions", 
    description: "Charming highland town",
    caption: "Historic Dullstroom village within walking distance",
    placeholder: { filename: "dullstroom-village.jpg", folder: "/images/gallery/", width: 800, height: 600 }
  },
  { 
    src: "/images/gallery/highland-hiking-trails.jpg",
    alt: "Highland hiking trails nature walks near The Browns luxury guest suites",
    title: "Highland Hiking Trails",
    category: "Dullstroom Attractions",
    description: "Mountain hiking adventures", 
    caption: "Explore scenic highland trails from your luxury base",
    placeholder: { filename: "highland-hiking-trails.jpg", folder: "/images/gallery/", width: 800, height: 600 }
  },
  { 
    src: "/images/gallery/panorama-route-views.jpg",
    alt: "Panorama Route day trips Gods Window Blyde River Canyon from Dullstroom",
    title: "Panorama Route Access",
    category: "Dullstroom Attractions",
    description: "Day trips to iconic attractions",
    caption: "Perfect base for Panorama Route adventures to God's Window",
    placeholder: { filename: "panorama-route-views.jpg", folder: "/images/gallery/", width: 800, height: 600 }
  }
];

const galleryCategories = ["Property Exteriors", "Suite Interiors", "Gardens & Grounds", "Dullstroom Attractions"];

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