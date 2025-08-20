import { useState, useMemo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BlogSearch } from "@/components/ui/blog-search";
import { blogPosts, categories } from "@/data/blog-posts";
import { Calendar, Clock, User, ExternalLink } from "lucide-react";
import { MobileQuickActions } from "@/components/ui/enhanced-mobile-gesture-nav";

// Data is now imported from /src/data/blog-posts.ts

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Quick filter buttons for main topics
  const quickFilters = [
    { label: "Activities", category: "Activities" },
    { label: "Food & Drink", category: "Food" },
    { label: "Travel Tips", category: "Travel" },
    { label: "Events", category: "Events" },
    { label: "Accommodation", category: "Accommodation" }
  ];

  // Category-specific hero content
  const categoryHeroContent = {
    Activities: {
      title: "Activities in Dullstroom",
      description: "Dullstroom is perfect for easy outdoor time and relaxed exploring. Spend mornings on managed trout waters, take gentle walks around the town dams or along farm roads, and plan short scenic drives for big views on Long Tom Pass. Add a guided tasting in the late afternoon and a slow browse through local food and craft spots to round out the day."
    },
    Food: {
      title: "Food & Drink in Dullstroom",
      description: "Start with good coffee in the village, then work through simple, hearty meals that suit cool highland weather. Pick up local cheeses and pantry treats for snack boards, plan one sit-down dinner in town, and, if you booked a whole house, keep one night for a relaxed self-catered pasta or braai. Cap the afternoon with a curated whisky or gin tasting before dinner."
    },
    Travel: {
      title: "Travel Tips for Dullstroom",
      description: "From Johannesburg, the straightforward route is N12/N4 to Belfast (eMakhazeni) and then R540 to Dullstroom. Aim to do the final stretch in daylight, keep a warm layer handy year-round, and book popular restaurants or tastings ahead on weekends. If you are self-catering, stock up in Belfast before turning onto the R540."
    },
    Events: {
      title: "Events in Dullstroom",
      description: "The Highlands Meander has a steady calendar of community runs, markets, heritage days, and outdoor weekends, with Dullstroom highlights peaking in winter and spring. Build your trip around one anchor event, then add a tasting, an easy walk, or a fly-fishing session so the whole group has something to enjoy. Check dates early and secure accommodation first on busy weekends."
    },
    Accommodation: {
      title: "Accommodation at The Browns",
      description: "At The Browns' Luxury Guest & Cottage Suites you can choose whole-house self-catering when you book an entire house, or suite-only stays that include a beverage station with a minibar fridge, Nespresso coffee, a tea selection, hot chocolate, still water, and milk. Suites do not include cooking facilities. Pick the setup that fits your trip, then check live rates and availability to lock in your dates."
    }
  };

  // Get current hero content based on selected category
  const getCurrentHeroContent = () => {
    if (selectedCategories.length === 1) {
      const category = selectedCategories[0] as keyof typeof categoryHeroContent;
      return categoryHeroContent[category] || {
        title: "The Browns Blog",
        description: "Discover Dullstroom's hidden gems, local insights, and travel inspiration from our luxury guest suites in the heart of Mpumalanga highlands."
      };
    }
    return {
      title: "The Browns Blog",
      description: "Discover Dullstroom's hidden gems, local insights, and travel inspiration from our luxury guest suites in the heart of Mpumalanga highlands."
    };
  };

  // Handle URL parameters and route-based filtering
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam && categories.includes(categoryParam)) {
      setSelectedCategories([categoryParam]);
    } else if (window.location.pathname === '/activities') {
      // Auto-activate Activities filter when accessed via /activities route
      setSelectedCategories(['Activities']);
    }
  }, [searchParams]);

  // Update URL when categories change
  const handleCategoryChange = (newCategories: string[]) => {
    setSelectedCategories(newCategories);
    if (newCategories.length === 1) {
      setSearchParams({ category: newCategories[0] });
    } else {
      setSearchParams({});
    }
  };

  // Filter blog posts based on categories only
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      // Only show published posts
      if (!post.published) return false;
      
      // Filter by categories only
      const matchesCategory = selectedCategories.length === 0 || 
        selectedCategories.includes(post.category);
      
      return matchesCategory;
    });
  }, [selectedCategories]);

  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="section-spacing bg-gradient-to-br from-accent to-muted">
          <div className="responsive-container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-primary mb-4 sm:mb-6">{getCurrentHeroContent().title}</h1>
              <p className="text-fluid-lg sm:text-fluid-xl text-muted-foreground leading-relaxed max-w-none sm:max-w-3xl mx-auto">
                {getCurrentHeroContent().description}
              </p>
            </div>
          </div>
        </section>

        {/* Search & Filter */}
        <section className="section-spacing-sm bg-background border-b">
          <div className="responsive-container">
            <div className="max-w-4xl mx-auto">
              <BlogSearch
                selectedCategories={selectedCategories}
                onCategoryChange={handleCategoryChange}
                availableCategories={categories}
                resultsCount={filteredPosts.length}
                quickFilters={quickFilters}
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
                    No blog posts found matching your selected categories.
                  </p>
                  <Button 
                    variant="ghost" 
                    className="min-h-[48px] text-fluid-base"
                    onClick={() => handleCategoryChange([])}
                  >
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8">
                  {filteredPosts.map((post) => (
                  <Card key={post.id} className="group hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => window.location.href = `/blog/${post.slug}`}>
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
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="group-hover:text-primary flex-shrink-0 min-h-[40px]"
                          asChild
                        >
                          <Link to={`/blog/${post.slug}`}>
                            <span className="hidden sm:inline">Read More</span>
                            <span className="sm:hidden">Read</span>
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </Link>
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

      {/* Mobile Quick Actions */}
      <MobileQuickActions
        onBooking={() => window.open('https://book.nightsbridge.com/00000', '_blank')}
        onCall={() => window.open('tel:+27000000000', '_self')}
        onWhatsApp={() => window.open('https://wa.me/27000000000?text=Hi! I would like to enquire about The Browns Guest Suites.', '_blank')}
      />
    </>
  );
}