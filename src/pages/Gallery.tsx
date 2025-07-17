import { EnhancedGallery } from "@/components/ui/enhanced-gallery";

// Flatten all images with enhanced metadata for the gallery component
const allGalleryImages = [
  // Property Exteriors
  { 
    src: "/images/gallery/main-building-exterior.jpg", // filename: main-building-exterior.jpg, folder: /images/gallery/, dimensions: 800x600
    alt: "The Browns luxury guest suites exterior facade in Dullstroom Mpumalanga",
    title: "Main Building Exterior",
    category: "Property Exteriors",
    description: "Main building exterior with mountain backdrop"
  },
  { 
    src: "/images/gallery/cottage-suites-exterior.jpg", // filename: cottage-suites-exterior.jpg, folder: /images/gallery/, dimensions: 800x600
    alt: "Property exterior with spectacular highland mountain views",
    title: "Cottage Suites",
    category: "Property Exteriors",
    description: "Cottage suites nestled in highland setting"
  },
  { 
    src: "/images/gallery/evening-exterior.jpg", // filename: evening-exterior.jpg, folder: /images/gallery/, dimensions: 800x600
    alt: "Evening exterior lighting at The Browns luxury accommodation",
    title: "Evening Ambiance",
    category: "Property Exteriors",
    description: "Enchanting evening exterior lighting"
  },
  // Suite Interiors
  { 
    src: "/images/gallery/master-suite-bedroom.jpg", // filename: master-suite-bedroom.jpg, folder: /images/gallery/, dimensions: 800x600
    alt: "Master Suite luxury interior design with King XL bed and premium amenities",
    title: "Master Suite Bedroom",
    category: "Suite Interiors",
    description: "King XL bed with luxury appointments"
  },
  { 
    src: "/images/gallery/robin-suite-living.jpg", // filename: robin-suite-living.jpg, folder: /images/gallery/, dimensions: 800x600
    alt: "Cottage suite cozy interior with fireplace and comfortable furnishings",
    title: "Robin Suite Living Area",
    category: "Suite Interiors",
    description: "Cozy fireplace and modern comfort"
  },
  { 
    src: "/images/gallery/luxury-ensuite.jpg", // filename: luxury-ensuite.jpg, folder: /images/gallery/, dimensions: 800x600
    alt: "Luxury bathroom with double vanity and premium Charlotte Rhys toiletries",
    title: "Luxury Ensuite",
    category: "Suite Interiors",
    description: "Spa-inspired bathroom with premium amenities"
  },
  // Gardens & Grounds
  { 
    src: "/images/gallery/garden-pathways.jpg", // filename: garden-pathways.jpg, folder: /images/gallery/, dimensions: 800x600
    alt: "Serene garden landscapes at The Browns with mountain views",
    title: "Garden Pathways",
    category: "Gardens & Grounds",
    description: "Peaceful garden paths with highland views"
  },
  { 
    src: "/images/gallery/private-garden-terrace.jpg", // filename: private-garden-terrace.jpg, folder: /images/gallery/, dimensions: 800x600
    alt: "Garden views from luxury suites at The Browns Dullstroom accommodation",
    title: "Private Garden Terrace",
    category: "Gardens & Grounds",
    description: "Private outdoor space for relaxation"
  },
  { 
    src: "/images/gallery/indigenous-garden.jpg", // filename: indigenous-garden.jpg, folder: /images/gallery/, dimensions: 800x600
    alt: "Landscaped gardens with indigenous plants and mountain backdrop",
    title: "Indigenous Highland Garden",
    category: "Gardens & Grounds",
    description: "Native plants and mountain backdrop"
  },
  // Dullstroom Attractions
  { 
    src: "/images/gallery/dullstroom-dam-fishing.jpg", // filename: dullstroom-dam-fishing.jpg, folder: /images/gallery/, dimensions: 800x600
    alt: "Dullstroom Dam fly-fishing destination near The Browns accommodation",
    title: "Dullstroom Dam Fishing",
    category: "Dullstroom Attractions",
    description: "World-class fly-fishing destination"
  },
  { 
    src: "/images/gallery/dullstroom-village.jpg", // filename: dullstroom-village.jpg, folder: /images/gallery/, dimensions: 800x600
    alt: "Dullstroom town center with shops and restaurants walking distance from The Browns",
    title: "Dullstroom Village",
    category: "Dullstroom Attractions",
    description: "Charming town center nearby"
  },
  { 
    src: "/images/gallery/highland-hiking-trails.jpg", // filename: highland-hiking-trails.jpg, folder: /images/gallery/, dimensions: 800x600
    alt: "Highland hiking trails and nature walks near The Browns luxury guest suites",
    title: "Highland Hiking Trails",
    category: "Dullstroom Attractions",
    description: "Scenic mountain hiking trails"
  }
];

const galleryCategories = ["Property Exteriors", "Suite Interiors", "Gardens & Grounds", "Dullstroom Attractions"];

export default function Gallery() {
  return (
    <div className="min-h-screen py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="max-w-full xl:max-w-7xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h1 className="fluid-heading text-primary mb-3 sm:mb-4 px-2">
              Gallery
            </h1>
            <p className="fluid-text text-muted-foreground max-w-2xl mx-auto px-4 leading-relaxed">
              Explore our luxury suites, beautiful gardens, and stunning Dullstroom location through our interactive photo gallery.
            </p>
          </div>

          <EnhancedGallery 
            images={allGalleryImages}
            categories={galleryCategories}
            columns={3}
            showCategories={true}
          />
        </div>
      </div>
    </div>
  );
}