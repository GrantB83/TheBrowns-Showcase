import { useState } from "react";
import { Search, X, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

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
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const clearFilters = () => {
    onCategoryChange([]);
  };

  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      onCategoryChange(selectedCategories.filter(c => c !== category));
    } else {
      onCategoryChange([...selectedCategories, category]);
    }
  };

  const hasActiveFilters = selectedCategories.length > 0;

  return (
    <div className="space-y-4">
      {/* Quick Filters */}
      {quickFilters.length > 0 && (
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedCategories.length === 0 ? "default" : "outline"}
            size="sm"
            onClick={() => onCategoryChange([])}
            className="h-8"
          >
            All Topics
          </Button>
          {quickFilters.map((filter) => (
            <Button
              key={filter.category}
              variant={selectedCategories.includes(filter.category) ? "default" : "outline"}
              size="sm"
              onClick={() => {
                if (selectedCategories.includes(filter.category)) {
                  onCategoryChange(selectedCategories.filter(c => c !== filter.category));
                } else {
                  onCategoryChange([filter.category]);
                }
              }}
              className="h-8"
            >
              {filter.label}
            </Button>
          ))}
        </div>
      )}

      {/* Additional Filter Options */}
      <div className="flex justify-end">
        <Popover open={isFilterOpen} onOpenChange={setIsFilterOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm" className="h-8 gap-2">
              <Filter className="h-4 w-4" />
              More Filters
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64" align="end">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">Filter by Category</h4>
                {selectedCategories.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onCategoryChange([])}
                    className="h-6 px-2 text-xs"
                  >
                    Clear
                  </Button>
                )}
              </div>
              <div className="space-y-2">
                {availableCategories.filter(cat => cat !== "All").map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox
                      id={category}
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={() => toggleCategory(category)}
                    />
                    <Label htmlFor={category} className="text-sm">
                      {category}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* Active Filters & Results */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center space-x-2">
          {selectedCategories.map((category) => (
            <Badge key={category} variant="secondary" className="text-xs">
              {category}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleCategory(category)}
                className="ml-1 h-3 w-3 p-0 hover:bg-transparent"
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
              className="text-xs text-muted-foreground"
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
    </div>
  );
}