import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Crown, 
  Gift, 
  Home
} from "lucide-react";

interface SuiteFilterProps {
  activeFilter: 'all' | 'luxury' | 'cottage' | 'self-catering';
  onFilterChange: (filter: 'all' | 'luxury' | 'cottage' | 'self-catering') => void;
  className?: string;
}

export function SuiteFilter({ activeFilter, onFilterChange, className }: SuiteFilterProps) {
  const getSliderValue = () => {
    switch (activeFilter) {
      case 'luxury': return [0];
      case 'cottage': return [1];
      case 'self-catering': return [2];
      default: return [0]; // Default to luxury
    }
  };

  const handleSliderChange = (value: number[]) => {
    const filterMap = ['luxury', 'cottage', 'self-catering'];
    const newFilter = filterMap[value[0]] as 'luxury' | 'cottage' | 'self-catering';
    onFilterChange(newFilter);
  };

  const getActiveFilterLabel = () => {
    switch (activeFilter) {
      case 'luxury': return 'Luxury Suites';
      case 'cottage': return 'Cottage Suites';
      case 'self-catering': return 'Self-Catering Houses';
      default: return 'Luxury Suites';
    }
  };

  const getActiveFilterIcon = () => {
    switch (activeFilter) {
      case 'luxury': return <Crown className="h-4 w-4" />;
      case 'cottage': return <Gift className="h-4 w-4" />;
      case 'self-catering': return <Home className="h-4 w-4" />;
      default: return <Crown className="h-4 w-4" />;
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <Card className="max-w-md mx-auto">
        <CardContent className="pt-6">
          <div className="space-y-6">
            {/* Slider Header */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                {getActiveFilterIcon()}
                <span className="text-sm font-medium">{getActiveFilterLabel()}</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Select your preferred accommodation type
              </p>
            </div>

            {/* Main Slider */}
            <div className="space-y-3">
              <Slider
                value={getSliderValue()}
                onValueChange={handleSliderChange}
                max={2}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <div className="flex flex-col items-center gap-1">
                  <Crown className="h-3 w-3" />
                  <span>Luxury</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Gift className="h-3 w-3" />
                  <span>Cottage</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Home className="h-3 w-3" />
                  <span>Self-Catering</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
