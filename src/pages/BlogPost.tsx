import { useParams, useNavigate, Link } from "react-router-dom";
import { getBlogPostBySlug, getRelatedPosts } from "@/data/blog-posts";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BreadcrumbNavigation } from "@/components/ui/breadcrumb-navigation";
import { SEO } from "@/components/ui/seo";
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  Facebook, 
  Twitter, 
  Linkedin,
  ExternalLink 
} from "lucide-react";
import { useState } from "react";
import { MobileQuickActions } from "@/components/ui/enhanced-mobile-gesture-nav";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);

  const post = slug ? getBlogPostBySlug(slug) : null;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-6">The blog post you're looking for doesn't exist.</p>
          <Button onClick={() => navigate("/blog")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  const relatedPosts = getRelatedPosts(post);
  const shareUrl = window.location.href;
  const shareText = `Check out "${post.title}" - ${post.excerpt}`;

  const handleShare = (platform: string) => {
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
    };
    
    window.open(urls[platform as keyof typeof urls], '_blank', 'width=600,height=400');
  };

  return (
    <>
      <div className="min-h-screen">
        <SEO 
          title={post.title}
          description={post.metaDescription}
          keywords={post.keywords.join(", ")}
          url={`/blog/${post.slug}`}
          image={post.image}
          type="article"
          schemaData={{
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.metaDescription,
            image: post.image,
            author: {
              "@type": "Person",
              name: post.author
            },
            publisher: {
              "@type": "Organization",
              name: "The Browns Luxury Guest Suites",
              logo: {
                "@type": "ImageObject",
                url: "https://thebrowns.co.za/images/logo.png"
              }
            },
            datePublished: post.date,
            dateModified: post.date,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://thebrowns.co.za/blog/${post.slug}`
            }
          }}
        />

        {/* Breadcrumb Navigation */}
        <section className="py-4 bg-muted/50 border-b">
          <div className="responsive-container">
            <BreadcrumbNavigation />
          </div>
        </section>

        {/* Article Header */}
        <article className="section-spacing">
          <div className="responsive-container">
            <div className="max-w-4xl mx-auto">
              {/* Back Button */}
              <Button 
                variant="ghost" 
                onClick={() => navigate("/blog")}
                className="mb-6 hover:bg-muted"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Button>

              {/* Article Meta */}
              <div className="mb-6">
                <Badge variant="secondary" className="mb-4">{post.category}</Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-playfair text-primary mb-4 leading-tight">
                  {post.title}
                </h1>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                </div>

                {/* Share Buttons */}
                <div className="flex items-center gap-2 mb-8">
                  <span className="text-sm text-muted-foreground mr-2">Share:</span>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleShare('facebook')}
                    className="gap-2"
                  >
                    <Facebook className="h-4 w-4" />
                    <span className="hidden sm:inline">Facebook</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleShare('twitter')}
                    className="gap-2"
                  >
                    <Twitter className="h-4 w-4" />
                    <span className="hidden sm:inline">Twitter</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleShare('linkedin')}
                    className="gap-2"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span className="hidden sm:inline">LinkedIn</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => navigator.share?.({ title: post.title, text: shareText, url: shareUrl })}
                    className="gap-2"
                  >
                    <Share2 className="h-4 w-4" />
                    <span className="hidden sm:inline">Share</span>
                  </Button>
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative mb-8 overflow-hidden rounded-lg bg-muted">
                <img
                  src={post.image}
                  alt={post.title}
                  className={`w-full h-64 sm:h-80 lg:h-96 object-cover transition-opacity duration-300 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                  loading="eager"
                />
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-muted animate-pulse" />
                )}
              </div>

              {/* Article Content */}
              <div 
                className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-playfair prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Author Bio */}
              {post.authorBio && (
                <div className="mt-12 p-6 bg-muted/50 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{post.author}</h3>
                      <p className="text-sm text-muted-foreground">{post.authorBio}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Keywords */}
              <div className="mt-8 pt-8 border-t">
                <h3 className="text-sm font-medium text-muted-foreground mb-4">Related Topics:</h3>
                <div className="flex flex-wrap gap-2">
                  {post.keywords.map((keyword, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="section-spacing bg-muted/30">
            <div className="responsive-container">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-playfair text-primary mb-8 text-center">
                  Related Articles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Card key={relatedPost.id} className="group hover:shadow-lg transition-shadow">
                      <div className="relative overflow-hidden">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute top-3 left-3">
                          <Badge variant="secondary" className="text-xs">
                            {relatedPost.category}
                          </Badge>
                        </div>
                      </div>
                      <CardHeader className="p-4">
                        <CardTitle className="text-lg group-hover:text-primary transition-colors leading-tight">
                          {relatedPost.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          asChild 
                          className="group-hover:text-primary"
                        >
                          <Link to={`/blog/${relatedPost.slug}`}>
                            Read More
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="section-spacing bg-primary text-primary-foreground">
          <div className="responsive-container text-center">
            <h2 className="text-2xl sm:text-3xl font-playfair text-primary-foreground mb-4">
              Ready to Experience Dullstroom?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Book your luxury stay at The Browns and explore all that Dullstroom has to offer.
            </p>
            <Button size="lg" variant="secondary" asChild className="font-medium">
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