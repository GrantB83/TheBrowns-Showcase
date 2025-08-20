import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

interface BlogSearchProps {
  selectedCategories: string[];
  onCategoryChange: (categories: string[]) => void;
  availableCategories: string[];
  resultsCount?: number;
  quickFilters?: { label: string; category: string; }[];
}

export function BlogSearch({
  selectedCategories,
  onCategoryChange,
  availableCategories,
  resultsCount,
  quickFilters = []
}: BlogSearchProps) {
  const clearFilters = () => {
    onCategoryChange([]);
  };

  const selectCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      // If already selected, clear all filters
      onCategoryChange([]);
    } else {
      // Select only this category (single selection mode)
      onCategoryChange([category]);
    }
  };

  const removeCategory = (category: string) => {
    onCategoryChange(selectedCategories.filter(c => c !== category));
  };

  const hasActiveFilters = selectedCategories.length > 0;

  return (
    <div className="space-y-3">
      {/* Quick Filters - Optimized for 2 lines */}
      {quickFilters.length > 0 && (
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          <Button
            variant={selectedCategories.length === 0 ? "default" : "outline"}
            size="sm"
            onClick={clearFilters}
            className="h-7 px-3 text-xs sm:h-8 sm:px-4 sm:text-sm"
          >
            All Topics
          </Button>
          {quickFilters.map((filter) => (
            <Button
              key={filter.category}
              variant={selectedCategories.includes(filter.category) ? "default" : "outline"}
              size="sm"
              onClick={() => selectCategory(filter.category)}
              className="h-7 px-3 text-xs sm:h-8 sm:px-4 sm:text-sm"
            >
              {filter.label}
            </Button>
          ))}
        </div>
      )}

      {/* Active Filters & Results */}
      {(hasActiveFilters || resultsCount !== undefined) && (
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            {selectedCategories.map((category) => (
              <Badge key={category} variant="secondary" className="text-xs h-6">
                {category}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeCategory(category)}
                  className="ml-1 h-3 w-3 p-0 hover:bg-transparent"
                  aria-label={`Remove ${category} filter`}
                >
                  <X className="h-2 w-2" />
                </Button>
              </Badge>
            ))}
            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-xs text-muted-foreground h-6 px-2"
              >
                Clear all
              </Button>
            )}
          </div>
          
          {resultsCount !== undefined && (
            <span className="text-sm text-muted-foreground">
              {resultsCount} {resultsCount === 1 ? 'result' : 'results'}
            </span>
          )}
        </div>
      )}
    </div>
  );
}