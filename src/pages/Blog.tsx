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
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    keywords: ["Dullstroom fishing accommodation", "trout fishing", "fly fishing", "Mpumalanga activities", "highland fishing"]
  },
  {
    title: "Upcoming Events and Festivals in Mpumalanga",
    excerpt: "Stay updated on Dullstroom's seasonal festivals, markets, and cultural celebrations. Plan your visit around these exciting community events and local gatherings.",
    category: "Events",
    author: "The Browns Team", 
    date: "March 10, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80",
    keywords: ["Dullstroom events", "Mpumalanga festivals", "seasonal celebrations", "local markets"]
  },
  {
    title: "Why Choose Self-Catering Luxury in Dullstroom",
    excerpt: "Experience the freedom and comfort of self-catering luxury accommodation. Enjoy premium amenities, flexibility, and authentic highland living at The Browns.",
    category: "Accommodation",
    author: "The Browns Team",
    date: "March 5, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
    keywords: ["self-catering luxury", "Dullstroom accommodation", "luxury suites", "highland retreat"]
  },
  {
    title: "Exploring Dullstroom's Artisanal Food Scene",
    excerpt: "From fine dining restaurants to local delicacies, discover Dullstroom's culinary treasures. Perfect dining experiences within walking distance of The Browns.",
    category: "Dining",
    author: "The Browns Team",
    date: "February 28, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80",
    keywords: ["Dullstroom dining", "fine dining", "local cuisine", "artisanal food", "restaurant recommendations"]
  },
  {
    title: "Highland Hiking Trails Around Dullstroom",
    excerpt: "Explore breathtaking hiking trails in the Mpumalanga highlands. From gentle nature walks to challenging mountain paths, discover the natural beauty surrounding The Browns.",
    category: "Outdoor Activities",
    author: "The Browns Team",
    date: "February 20, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80",
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
      <section className="py-16 bg-gradient-to-br from-accent to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-primary mb-6">The Browns Blog</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover Dullstroom's hidden gems, local insights, and travel inspiration 
              from our luxury guest suites in the heart of Mpumalanga highlands.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
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
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg mb-4">
                  No blog posts found matching your search criteria.
                </p>
                <Button 
                  variant="ghost" 
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategories([]);
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredPosts.map((post, index) => (
                <Card key={index} className="group hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">{post.category}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author}
                      </div>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {post.keywords.slice(0, 2).map((keyword, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="ghost" size="sm" className="group-hover:text-primary">
                        Read More
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                ))}
              </div>
            )}

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Posts
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-primary mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our blog for the latest Dullstroom insights, travel tips, 
              and exclusive offers for The Browns guests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-input bg-background"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Book CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-primary-foreground mb-4">Ready to Experience Dullstroom?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Book your luxury stay at The Browns and explore all that Dullstroom has to offer.
          </p>
          <Button size="lg" variant="secondary" asChild>
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