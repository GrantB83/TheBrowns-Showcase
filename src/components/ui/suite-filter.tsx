import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Crown, 
  Gift, 
  Home
} from "lucide-react";

interface SuiteFilterProps {
  activeFilter: 'suite-only' | 'self-catering';
  onFilterChange: (filter: 'suite-only' | 'self-catering') => void;
  showLuxurySuites: boolean;
  showCottageSuites: boolean;
  onSuiteTypeChange: (luxury: boolean, cottage: boolean) => void;
  className?: string;
}

export function SuiteFilter({ 
  activeFilter, 
  onFilterChange, 
  showLuxurySuites, 
  showCottageSuites, 
  onSuiteTypeChange, 
  className 
}: SuiteFilterProps) {
  const getSliderValue = () => {
    switch (activeFilter) {
      case 'suite-only': return [0];
      case 'self-catering': return [1];
      default: return [0];
    }
  };

  const handleSliderChange = (value: number[]) => {
    const filterMap = ['suite-only', 'self-catering'];
    const newFilter = filterMap[value[0]] as 'suite-only' | 'self-catering';
    onFilterChange(newFilter);
  };

  const handleIconClick = (filter: 'suite-only' | 'self-catering') => {
    onFilterChange(filter);
  };

  const getActiveFilterLabel = () => {
    switch (activeFilter) {
      case 'suite-only': return 'Suite Only';
      case 'self-catering': return 'Self-Catering';
      default: return 'Suite Only';
    }
  };

  const getActiveFilterIcon = () => {
    switch (activeFilter) {
      case 'suite-only': return <Crown className="h-4 w-4" />;
      case 'self-catering': return <Home className="h-4 w-4" />;
      default: return <Crown className="h-4 w-4" />;
    }
  };

  return (
    <div className={`space-y-6 ${className}`}>
      <Card className="max-w-lg mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardContent className="pt-8 pb-8">
          <div className="space-y-8">
            {/* Header */}
            <div className="text-center">
              <h3 className="text-lg font-semibold text-primary mb-2">Select Accommodation Type</h3>
              <p className="text-sm text-muted-foreground">
                Choose between individual suite bookings or full self-catering houses
              </p>
            </div>

            {/* Main Slider */}
            <div className="space-y-6">
              <Slider
                value={getSliderValue()}
                onValueChange={handleSliderChange}
                max={1}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <button
                  onClick={() => handleIconClick('suite-only')}
                  className={`flex flex-col items-center gap-2 p-2 rounded-lg transition-all duration-200 cursor-pointer ${
                    activeFilter === 'suite-only' 
                      ? 'bg-primary/10 text-primary border border-primary/20' 
                      : 'hover:bg-muted/30 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Crown className={`h-4 w-4 ${
                    activeFilter === 'suite-only' ? 'text-primary' : ''
                  }`} />
                  <span className="font-medium">Suite Only</span>
                </button>
                <button
                  onClick={() => handleIconClick('self-catering')}
                  className={`flex flex-col items-center gap-2 p-2 rounded-lg transition-all duration-200 cursor-pointer ${
                    activeFilter === 'self-catering' 
                      ? 'bg-primary/10 text-primary border border-primary/20' 
                      : 'hover:bg-muted/30 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Home className={`h-4 w-4 ${
                    activeFilter === 'self-catering' ? 'text-primary' : ''
                  }`} />
                  <span className="font-medium">Self-Catering</span>
                </button>
              </div>
            </div>

            {/* Suite Type Checkboxes - only show when Suite Only is selected */}
            {activeFilter === 'suite-only' && (
              <div className="border-t pt-6">
                <h4 className="text-sm font-medium text-primary mb-4 text-center">Suite Types</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Checkbox 
                      id="luxury-suites"
                      checked={showLuxurySuites}
                      onCheckedChange={(checked) => onSuiteTypeChange(!!checked, showCottageSuites)}
                    />
                    <label htmlFor="luxury-suites" className="text-sm font-medium cursor-pointer flex items-center gap-2">
                      <Crown className="h-4 w-4 text-primary" />
                      Luxury Suites
                    </label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox 
                      id="cottage-suites"
                      checked={showCottageSuites}
                      onCheckedChange={(checked) => onSuiteTypeChange(showLuxurySuites, !!checked)}
                    />
                    <label htmlFor="cottage-suites" className="text-sm font-medium cursor-pointer flex items-center gap-2">
                      <Gift className="h-4 w-4 text-secondary" />
                      Heritage Suites
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
