import { Badge } from "@/components/ui/badge";

const galleryCategories = [
  {
    title: "Property Exteriors",
    description: "Stunning exterior views of The Browns luxury accommodations in Dullstroom",
    images: [
      { 
        src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600&q=80", 
        alt: "The Browns luxury guest suites exterior facade in Dullstroom Mpumalanga",
        caption: "Main building exterior with mountain backdrop"
      },
      { 
        src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80", 
        alt: "Property exterior with spectacular highland mountain views",
        caption: "Cottage suites nestled in highland setting"
      },
      { 
        src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&q=80", 
        alt: "Evening exterior lighting at The Browns luxury accommodation",
        caption: "Enchanting evening ambiance"
      }
    ]
  },
  {
    title: "Suite Interiors",
    description: "Elegant interior design and premium amenities in our luxury suites",
    images: [
      { 
        src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80", 
        alt: "Master Suite luxury interior design with King XL bed and premium amenities",
        caption: "Master Suite elegant bedroom with luxury appointments"
      },
      { 
        src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=600&q=80", 
        alt: "Cottage suite cozy interior with fireplace and comfortable furnishings",
        caption: "Robin Suite with cozy fireplace and modern comfort"
      },
      { 
        src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80", 
        alt: "Luxury bathroom with double vanity and premium Charlotte Rhys toiletries",
        caption: "Spa-inspired ensuite with premium amenities"
      }
    ]
  },
  {
    title: "Gardens & Grounds",
    description: "Beautifully landscaped gardens and serene outdoor spaces",
    images: [
      { 
        src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&q=80", 
        alt: "Serene garden landscapes at The Browns with mountain views",
        caption: "Peaceful garden paths with highland views"
      },
      { 
        src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600&q=80", 
        alt: "Garden views from luxury suites at The Browns Dullstroom accommodation",
        caption: "Garden Suite private terrace and outdoor space"
      },
      { 
        src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80", 
        alt: "Landscaped gardens with indigenous plants and mountain backdrop",
        caption: "Indigenous highland garden design"
      }
    ]
  },
  {
    title: "Dullstroom Attractions",
    description: "Local attractions and activities near The Browns luxury suites",
    images: [
      { 
        src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80", 
        alt: "Dullstroom Dam fly-fishing destination near The Browns accommodation",
        caption: "World-class fly-fishing at Dullstroom Dam"
      },
      { 
        src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&q=80", 
        alt: "Dullstroom town center with shops and restaurants walking distance from The Browns",
        caption: "Charming Dullstroom town center"
      },
      { 
        src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&q=80", 
        alt: "Highland hiking trails and nature walks near The Browns luxury guest suites",
        caption: "Highland hiking trails and mountain views"
      }
    ]
  }
];

export default function Gallery() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-primary mb-4">Gallery</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our luxury suites, beautiful gardens, and stunning Dullstroom location through our photo gallery.
          </p>
        </div>

        {galleryCategories.map((category, index) => (
          <div key={index} className="mb-16">
            <div className="text-center mb-8">
              <Badge variant="secondary" className="mb-4">{category.title}</Badge>
              <h2 className="text-primary mb-2">{category.title}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{category.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.images.map((image, imgIndex) => (
                <div key={imgIndex} className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm font-medium">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}