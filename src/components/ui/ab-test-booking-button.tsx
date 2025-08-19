import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ABTestVariant {
  id: string;
  name: string;
  buttonText: string;
  buttonVariant: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  buttonClass?: string;
  urgencyText?: string;
  icon?: React.ReactNode;
  color?: string;
}

interface ABTestButtonProps {
  variants: ABTestVariant[];
  onButtonClick: (variantId: string) => void;
  testName: string;
  className?: string;
  disabled?: boolean;
}

// A/B Test variants for booking buttons
const BOOKING_BUTTON_VARIANTS: ABTestVariant[] = [
  {
    id: 'control',
    name: 'Control - Standard',
    buttonText: 'Book Now',
    buttonVariant: 'default',
    urgencyText: undefined
  },
  {
    id: 'urgency',
    name: 'Urgency Variant',
    buttonText: 'Book Now - Only 2 Left!',
    buttonVariant: 'destructive',
    urgencyText: 'High Demand',
    buttonClass: 'animate-pulse'
  },
  {
    id: 'value',
    name: 'Value Proposition',
    buttonText: 'Secure Best Rate + Free Perks',
    buttonVariant: 'default',
    buttonClass: 'bg-green-600 hover:bg-green-700',
    urgencyText: 'Best Value'
  },
  {
    id: 'premium',
    name: 'Premium Positioning',
    buttonText: 'Reserve Luxury Suite',
    buttonVariant: 'default',
    buttonClass: 'bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800',
    urgencyText: 'Exclusive'
  },
  {
    id: 'social',
    name: 'Social Proof',
    buttonText: 'Join 2,500+ Happy Guests',
    buttonVariant: 'default',
    urgencyText: 'Highly Rated'
  }
];

// Simple A/B testing logic
class ABTestManager {
  private static instance: ABTestManager;
  private activeTests: Map<string, string> = new Map();
  
  static getInstance() {
    if (!ABTestManager.instance) {
      ABTestManager.instance = new ABTestManager();
    }
    return ABTestManager.instance;
  }

  getVariant(testName: string, variants: ABTestVariant[]): ABTestVariant {
    if (!this.activeTests.has(testName)) {
      // Assign user to a variant (simple random assignment)
      const variantIndex = Math.floor(Math.random() * variants.length);
      const selectedVariant = variants[variantIndex];
      this.activeTests.set(testName, selectedVariant.id);
      
      // Track assignment
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'ab_test_assignment', {
          event_category: 'experiments',
          event_label: `${testName}_${selectedVariant.id}`,
          custom_parameters: {
            test_name: testName,
            variant_id: selectedVariant.id,
            variant_name: selectedVariant.name
          }
        });
      }
      
      return selectedVariant;
    }
    
    const variantId = this.activeTests.get(testName)!;
    return variants.find(v => v.id === variantId) || variants[0];
  }

  trackConversion(testName: string, variantId: string, conversionType: string = 'click') {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'ab_test_conversion', {
        event_category: 'experiments',
        event_label: `${testName}_${variantId}`,
        value: 1,
        custom_parameters: {
          test_name: testName,
          variant_id: variantId,
          conversion_type: conversionType
        }
      });
    }
  }
}

export function ABTestBookingButton({
  variants = BOOKING_BUTTON_VARIANTS,
  onButtonClick,
  testName,
  className,
  disabled = false
}: ABTestButtonProps) {
  const [variant, setVariant] = useState<ABTestVariant | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const abTestManager = ABTestManager.getInstance();

  useEffect(() => {
    const selectedVariant = abTestManager.getVariant(testName, variants);
    setVariant(selectedVariant);
    setIsLoaded(true);
  }, [testName, variants, abTestManager]);

  const handleClick = () => {
    if (!variant) return;
    
    abTestManager.trackConversion(testName, variant.id, 'button_click');
    onButtonClick(variant.id);
  };

  if (!isLoaded || !variant) {
    return (
      <Button disabled className={className}>
        Loading...
      </Button>
    );
  }

  return (
    <div className={cn("space-y-2", className)}>
      {variant.urgencyText && (
        <Badge 
          className={cn(
            "text-xs",
            variant.color === 'green' && "bg-green-100 text-green-700",
            variant.color === 'red' && "bg-red-100 text-red-700",
            variant.color === 'amber' && "bg-amber-100 text-amber-700",
            !variant.color && "bg-blue-100 text-blue-700"
          )}
        >
          {variant.urgencyText}
        </Badge>
      )}
      
      <Button
        variant={variant.buttonVariant}
        onClick={handleClick}
        disabled={disabled}
        className={cn(
          "w-full min-h-[48px] font-medium transition-all duration-200",
          variant.buttonClass
        )}
      >
        {variant.icon && <span className="mr-2">{variant.icon}</span>}
        {variant.buttonText}
      </Button>
    </div>
  );
}

// Preset configurations for common use cases
export const BookingButtonVariants = {
  HERO_BOOKING: [
    {
      id: 'hero_standard',
      name: 'Standard CTA',
      buttonText: 'Check Availability',
      buttonVariant: 'default' as const
    },
    {
      id: 'hero_alternative',
      name: 'Alternative CTA',
      buttonText: 'Book Your Stay',
      buttonVariant: 'default' as const
    }
  ],
  
  SUITE_BOOKING: [
    {
      id: 'suite_book',
      name: 'Direct Booking',
      buttonText: 'Book This Suite',
      buttonVariant: 'default' as const
    },
    {
      id: 'suite_value',
      name: 'Value Focused',
      buttonText: 'Best Rate Guaranteed',
      buttonVariant: 'default' as const,
      buttonClass: 'bg-green-600 hover:bg-green-700',
      urgencyText: 'Lowest Price'
    }
  ]
};

export { ABTestManager };