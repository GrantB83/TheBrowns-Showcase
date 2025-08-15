import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BlogSearch } from "@/components/ui/blog-search";
import { Calendar, Clock, User, ExternalLink } from "lucide-react";

const blogPosts = [
  {
    title: "Top Fly-Fishing Spots in Dullstroom",
    excerpt: "Discover the best trout fishing locations around Dullstroom, from the iconic Dullstroom Dam to hidden highland streams. Expert tips for a successful fishing holiday in Mpumalanga.",
    category: "Activities",
    author: "The Browns Team",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "/images/blog/fly-fishing-dullstroom.jpg", // filename: fly-fishing-dullstroom.jpg, folder: /images/blog/, dimensions: 800x600
    keywords: ["Dullstroom fishing accommodation", "trout fishing", "fly fishing", "Mpumalanga activities", "highland fishing"]
  },
  {
    title: "Upcoming Events and Festivals in Mpumalanga",
    excerpt: "Stay updated on Dullstroom's seasonal festivals, markets, and cultural celebrations. Plan your visit around these exciting community events and local gatherings.",
    category: "Events",
    author: "The Browns Team", 
    date: "March 10, 2024",
    readTime: "4 min read",
    image: "/images/blog/mpumalanga-events.jpg", // filename: mpumalanga-events.jpg, folder: /images/blog/, dimensions: 800x600
    keywords: ["Dullstroom events", "Mpumalanga festivals", "seasonal celebrations", "local markets"]
  },
  {
    title: "Why Choose Self-Catering Luxury in Dullstroom",
    excerpt: "Experience the freedom and comfort of self-catering luxury accommodation. Enjoy premium amenities, flexibility, and authentic highland living at The Browns.",
    category: "Accommodation",
    author: "The Browns Team",
    date: "March 5, 2024",
    readTime: "6 min read",
    image: "/images/blog/self-catering-luxury.jpg", // filename: self-catering-luxury.jpg, folder: /images/blog/, dimensions: 800x600
    keywords: ["self-catering luxury", "Dullstroom accommodation", "luxury suites", "highland retreat"]
  },
  {
    title: "Exploring Dullstroom's Artisanal Food Scene",
    excerpt: "From fine dining restaurants to local delicacies, discover Dullstroom's culinary treasures. Perfect dining experiences within walking distance of The Browns.",
    category: "Dining",
    author: "The Browns Team",
    date: "February 28, 2024",
    readTime: "7 min read",
    image: "/images/blog/dullstroom-food-scene.jpg", // filename: dullstroom-food-scene.jpg, folder: /images/blog/, dimensions: 800x600
    keywords: ["Dullstroom dining", "fine dining", "local cuisine", "artisanal food", "restaurant recommendations"]
  },
  {
    title: "Highland Hiking Trails Around Dullstroom",
    excerpt: "Explore breathtaking hiking trails in the Mpumalanga highlands. From gentle nature walks to challenging mountain paths, discover the natural beauty surrounding The Browns.",
    category: "Outdoor Activities",
    author: "The Browns Team",
    date: "February 20, 2024",
    readTime: "8 min read",
    image: "/images/blog/highland-hiking-trails.jpg", // filename: highland-hiking-trails.jpg, folder: /images/blog/, dimensions: 800x600
    keywords: ["Dullstroom hiking", "highland trails", "nature walks", "outdoor activities", "mountain hiking"]
  }
];

const categories = ["All", "Activities", "Events", "Accommodation", "Dining", "Outdoor Activities"];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Filter blog posts based on search and categories
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = searchTerm === "" || 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategories.length === 0 || 
        selectedCategories.includes(post.category);
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategories]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-br from-accent to-muted">
        <div className="responsive-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-primary mb-4 sm:mb-6">The Browns Blog</h1>
            <p className="text-fluid-lg sm:text-fluid-xl text-muted-foreground leading-relaxed max-w-none sm:max-w-3xl mx-auto">
              Discover Dullstroom's hidden gems, local insights, and travel inspiration 
              from our luxury guest suites in the heart of Mpumalanga highlands.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="section-spacing-sm bg-background border-b">
        <div className="responsive-container">
          <div className="max-w-4xl mx-auto">
            <BlogSearch
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              selectedCategories={selectedCategories}
              onCategoryChange={setSelectedCategories}
              availableCategories={categories}
              resultsCount={filteredPosts.length}
            />
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-spacing bg-background">
        <div className="responsive-container">
          <div className="max-w-6xl mx-auto">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-8 sm:py-12">
                <p className="text-muted-foreground text-fluid-lg mb-4">
                  No blog posts found matching your search criteria.
                </p>
                <Button 
                  variant="ghost" 
                  className="min-h-[48px] text-fluid-base"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategories([]);
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8">
                {filteredPosts.map((post, index) => (
                <Card key={index} className="group hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                      <Badge variant="secondary" className="text-xs sm:text-sm">{post.category}</Badge>
                    </div>
                  </div>
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="truncate">{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1 hidden sm:flex">
                        <User className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="truncate">{post.author}</span>
                      </div>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors text-fluid-lg leading-tight">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <p className="text-muted-foreground mb-4 text-fluid-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-1 flex-1 min-w-0">
                        {post.keywords.slice(0, 2).map((keyword, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs truncate">
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="ghost" size="sm" className="group-hover:text-primary flex-shrink-0 min-h-[40px]">
                        <span className="hidden sm:inline">Read More</span>
                        <span className="sm:hidden">Read</span>
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                ))}
              </div>
            )}

            {/* Load More */}
            <div className="text-center mt-8 sm:mt-12">
              <Button variant="outline" size="lg" className="min-h-[48px] text-fluid-base">
                Load More Posts
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-spacing bg-muted">
        <div className="responsive-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-primary mb-4">Stay Updated</h2>
            <p className="text-fluid-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Subscribe to our blog for the latest Dullstroom insights, travel tips, 
              and exclusive offers for The Browns guests.
            </p>
            <div className="flex flex-col mobile-landscape:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-input bg-background text-fluid-base min-h-[48px]"
              />
              <Button className="min-h-[48px] text-fluid-base font-medium">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Book CTA */}
      <section className="section-spacing bg-primary text-primary-foreground">
        <div className="responsive-container text-center">
          <h2 className="text-primary-foreground mb-4">Ready to Experience Dullstroom?</h2>
          <p className="text-fluid-lg sm:text-fluid-xl text-primary-foreground/90 mb-6 sm:mb-8 max-w-none sm:max-w-2xl mx-auto leading-relaxed">
            Book your luxury stay at The Browns and explore all that Dullstroom has to offer.
          </p>
          <Button size="lg" variant="secondary" asChild className="min-h-[48px] text-fluid-base font-medium">
            <a 
              href="https://book.nightsbridge.com/00000" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Book Your Stay
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}