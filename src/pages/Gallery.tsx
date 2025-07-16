import { EnhancedGallery } from "@/components/ui/enhanced-gallery";

// Flatten all images with enhanced metadata for the gallery component
const allGalleryImages = [
  // Property Exteriors
  { 
    src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80", 
    alt: "The Browns luxury guest suites exterior facade in Dullstroom Mpumalanga",
    title: "Main Building Exterior",
    category: "Property Exteriors",
    description: "Main building exterior with mountain backdrop"
  },
  { 
    src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80", 
    alt: "Property exterior with spectacular highland mountain views",
    title: "Cottage Suites",
    category: "Property Exteriors",
    description: "Cottage suites nestled in highland setting"
  },
  { 
    src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80", 
    alt: "Evening exterior lighting at The Browns luxury accommodation",
    title: "Evening Ambiance",
    category: "Property Exteriors",
    description: "Enchanting evening exterior lighting"
  },
  // Suite Interiors
  { 
    src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80", 
    alt: "Master Suite luxury interior design with King XL bed and premium amenities",
    title: "Master Suite Bedroom",
    category: "Suite Interiors",
    description: "King XL bed with luxury appointments"
  },
  { 
    src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&q=80", 
    alt: "Cottage suite cozy interior with fireplace and comfortable furnishings",
    title: "Robin Suite Living Area",
    category: "Suite Interiors",
    description: "Cozy fireplace and modern comfort"
  },
  { 
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80", 
    alt: "Luxury bathroom with double vanity and premium Charlotte Rhys toiletries",
    title: "Luxury Ensuite",
    category: "Suite Interiors",
    description: "Spa-inspired bathroom with premium amenities"
  },
  // Gardens & Grounds
  { 
    src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80", 
    alt: "Serene garden landscapes at The Browns with mountain views",
    title: "Garden Pathways",
    category: "Gardens & Grounds",
    description: "Peaceful garden paths with highland views"
  },
  { 
    src: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=800&q=80", 
    alt: "Garden views from luxury suites at The Browns Dullstroom accommodation",
    title: "Private Garden Terrace",
    category: "Gardens & Grounds",
    description: "Private outdoor space for relaxation"
  },
  { 
    src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80", 
    alt: "Landscaped gardens with indigenous plants and mountain backdrop",
    title: "Indigenous Highland Garden",
    category: "Gardens & Grounds",
    description: "Native plants and mountain backdrop"
  },
  // Dullstroom Attractions
  { 
    src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80", 
    alt: "Dullstroom Dam fly-fishing destination near The Browns accommodation",
    title: "Dullstroom Dam Fishing",
    category: "Dullstroom Attractions",
    description: "World-class fly-fishing destination"
  },
  { 
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80", 
    alt: "Dullstroom town center with shops and restaurants walking distance from The Browns",
    title: "Dullstroom Village",
    category: "Dullstroom Attractions",
    description: "Charming town center nearby"
  },
  { 
    src: "https://images.unsplash.com/photo-1501436513145-30f24e19fcc4?auto=format&fit=crop&w=800&q=80", 
    alt: "Highland hiking trails and nature walks near The Browns luxury guest suites",
    title: "Highland Hiking Trails",
    category: "Dullstroom Attractions",
    description: "Scenic mountain hiking trails"
  }
];

const galleryCategories = ["Property Exteriors", "Suite Interiors", "Gardens & Grounds", "Dullstroom Attractions"];

export default function Gallery() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-primary mb-4">Gallery</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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