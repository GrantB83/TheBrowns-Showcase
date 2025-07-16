import { Badge } from "@/components/ui/badge";

const galleryCategories = [
  {
    title: "Exteriors",
    images: [
      { src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600&q=80", alt: "The Browns luxury exterior facade" },
      { src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80", alt: "Property exterior with mountain views" }
    ]
  },
  {
    title: "Interiors",
    images: [
      { src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80", alt: "Luxury suite interior design" },
      { src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=600&q=80", alt: "Elegant bedroom with premium amenities" }
    ]
  },
  {
    title: "Gardens",
    images: [
      { src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&q=80", alt: "Serene garden landscapes" },
      { src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600&q=80", alt: "Garden views from suites" }
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
              <h2 className="text-primary">{category.title}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.images.map((image, imgIndex) => (
                <div key={imgIndex} className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}