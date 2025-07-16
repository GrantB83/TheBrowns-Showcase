import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAccessibility } from "@/hooks/use-accessibility";
import { Type, Contrast, Eye } from "lucide-react";

export function AccessibilityPanel() {
  const {
    isHighContrast,
    fontSize,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
    toggleHighContrast
  } = useAccessibility();

  return (
    <Card className="fixed bottom-4 left-4 z-50 max-w-xs">
      <CardContent className="p-4">
        <h3 className="font-semibold mb-3 flex items-center">
          <Eye className="h-4 w-4 mr-2" />
          Accessibility
        </h3>
        
        <div className="space-y-3">
          {/* Font Size Controls */}
          <div>
            <p className="text-sm text-muted-foreground mb-2">Text Size</p>
            <div className="flex gap-1">
              <Button size="sm" variant="outline" onClick={decreaseFontSize}>
                A-
              </Button>
              <Button size="sm" variant="outline" onClick={resetFontSize}>
                A
              </Button>
              <Button size="sm" variant="outline" onClick={increaseFontSize}>
                A+
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Current: {fontSize}
            </p>
          </div>

          {/* High Contrast Toggle */}
          <div>
            <Button
              size="sm"
              variant={isHighContrast ? "default" : "outline"}
              onClick={toggleHighContrast}
              className="w-full"
            >
              <Contrast className="h-4 w-4 mr-2" />
              High Contrast
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Skip to content link
export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded z-50"
    >
      Skip to main content
    </a>
  );
}