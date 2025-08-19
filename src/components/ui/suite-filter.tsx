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
    <div className={`space-y-6 ${className}`}>
      <Card className="max-w-lg mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardContent className="pt-8 pb-8">
          <div className="space-y-8">
            {/* Slider Header */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                {getActiveFilterIcon()}
                <span className="text-base font-semibold text-primary">{getActiveFilterLabel()}</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Select your preferred accommodation type
              </p>
            </div>

            {/* Main Slider */}
            <div className="space-y-6">
              <Slider
                value={getSliderValue()}
                onValueChange={handleSliderChange}
                max={2}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <div className="flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-muted/30 transition-colors">
                  <Crown className="h-4 w-4" />
                  <span className="font-medium">Luxury</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-muted/30 transition-colors">
                  <Gift className="h-4 w-4" />
                  <span className="font-medium">Cottage</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-muted/30 transition-colors">
                  <Home className="h-4 w-4" />
                  <span className="font-medium">Self-Catering</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
