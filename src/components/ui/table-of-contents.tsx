import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  className?: string;
}

export function TableOfContents({ className }: TableOfContentsProps) {
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Extract headings from the article content
    const headings = document.querySelectorAll('.article-content h2, .article-content h3, .article-content h4');
    const items: TocItem[] = [];

    headings.forEach((heading, index) => {
      const id = `heading-${index}`;
      heading.id = id;
      
      items.push({
        id,
        text: heading.textContent || '',
        level: parseInt(heading.tagName.charAt(1))
      });
    });

    setTocItems(items);

    // Intersection Observer for active section tracking
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0% -35% 0%',
        threshold: 0
      }
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
    };
  }, []);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (tocItems.length === 0) return null;

  return (
    <nav className={cn("space-y-2", className)} aria-label="Table of contents">
      <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
        <div className="w-4 h-4 rounded bg-primary/20 flex items-center justify-center">
          <div className="w-2 h-2 bg-primary rounded-full" />
        </div>
        Contents
      </h3>
      <ul className="space-y-1">
        {tocItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToHeading(item.id)}
              className={cn(
                "block w-full text-left text-sm py-1.5 px-2 rounded-md transition-colors hover:bg-muted/50 hover:text-foreground",
                item.level === 2 && "font-medium",
                item.level === 3 && "ml-4 text-muted-foreground",
                item.level === 4 && "ml-8 text-muted-foreground text-xs",
                activeId === item.id && "bg-primary/10 text-primary font-medium"
              )}
              aria-current={activeId === item.id ? "location" : undefined}
            >
              {item.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}