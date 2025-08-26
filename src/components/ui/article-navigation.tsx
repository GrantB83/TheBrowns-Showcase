import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BlogPost } from "@/data/blog-posts";
import { cn } from "@/lib/utils";

interface ArticleNavigationProps {
  currentPost: BlogPost;
  allPosts: BlogPost[];
  className?: string;
}

export function ArticleNavigation({ currentPost, allPosts, className }: ArticleNavigationProps) {
  // Get published posts sorted by date (newest first)
  const publishedPosts = allPosts
    .filter(post => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const currentIndex = publishedPosts.findIndex(post => post.id === currentPost.id);
  const prevPost = currentIndex < publishedPosts.length - 1 ? publishedPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? publishedPosts[currentIndex - 1] : null;

  if (!prevPost && !nextPost) return null;

  return (
    <nav className={cn("flex flex-col sm:flex-row gap-4", className)} aria-label="Article navigation">
      {/* Previous Article */}
      {prevPost && (
        <Card className="flex-1 group hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <Button
              variant="ghost"
              asChild
              className="w-full h-auto p-0 justify-start text-left group-hover:text-primary"
            >
              <Link to={`/blog/${prevPost.slug}`} className="flex items-start gap-3">
                <ArrowLeft className="h-5 w-5 mt-1 text-muted-foreground group-hover:text-primary transition-colors" />
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">
                    Previous Article
                  </div>
                  <div className="font-medium text-sm leading-tight line-clamp-2">
                    {prevPost.title}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {prevPost.readTime}
                  </div>
                </div>
              </Link>
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Next Article */}
      {nextPost && (
        <Card className="flex-1 group hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <Button
              variant="ghost"
              asChild
              className="w-full h-auto p-0 justify-end text-right group-hover:text-primary"
            >
              <Link to={`/blog/${nextPost.slug}`} className="flex items-start gap-3">
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">
                    Next Article
                  </div>
                  <div className="font-medium text-sm leading-tight line-clamp-2">
                    {nextPost.title}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {nextPost.readTime}
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 mt-1 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </nav>
  );
}