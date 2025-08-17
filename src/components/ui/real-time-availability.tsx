import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  Loader2, 
  Clock,
  Users,
  TrendingUp
} from "lucide-react";
import { cn } from "@/lib/utils";

interface AvailabilityStatus {
  status: 'available' | 'limited' | 'sold-out' | 'checking';
  roomsLeft?: number;
  price?: number;
  urgencyMessage?: string;
  lastChecked?: Date;
}

interface RealTimeAvailabilityProps {
  roomId?: number;
  checkIn?: string;
  checkOut?: string;
  guests?: string;
  onBookNow?: () => void;
  className?: string;
  compact?: boolean;
}

// Simulated real-time availability service
const checkAvailability = async (
  roomId?: number, 
  checkIn?: string, 
  checkOut?: string, 
  guests?: string
): Promise<AvailabilityStatus> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1000));
  
  // Simulate different availability scenarios based on inputs
  const scenarios = [
    { 
      status: 'available' as const, 
      roomsLeft: Math.floor(Math.random() * 5) + 3,
      price: 1200 + Math.floor(Math.random() * 400),
      urgencyMessage: undefined 
    },
    { 
      status: 'limited' as const, 
      roomsLeft: Math.floor(Math.random() * 2) + 1,
      price: 1400 + Math.floor(Math.random() * 300),
      urgencyMessage: "Only 2 rooms left at this rate!" 
    },
    { 
      status: 'limited' as const, 
      roomsLeft: 1,
      price: 1600 + Math.floor(Math.random() * 200),
      urgencyMessage: "Last room available!" 
    },
    { 
      status: 'sold-out' as const, 
      roomsLeft: 0,
      urgencyMessage: "Fully booked for these dates" 
    }
  ];
  
  // Weight availability based on realistic patterns
  const weights = [0.4, 0.3, 0.2, 0.1]; // 40% available, 30% limited, 20% very limited, 10% sold out
  const random = Math.random();
  let cumulativeWeight = 0;
  
  for (let i = 0; i < scenarios.length; i++) {
    cumulativeWeight += weights[i];
    if (random <= cumulativeWeight) {
      return {
        ...scenarios[i],
        lastChecked: new Date()
      };
    }
  }
  
  return scenarios[0];
};

export function RealTimeAvailability({
  roomId,
  checkIn,
  checkOut,
  guests,
  onBookNow,
  className,
  compact = false
}: RealTimeAvailabilityProps) {
  const [availability, setAvailability] = useState<AvailabilityStatus>({ 
    status: 'checking' 
  });
  const [isRefreshing, setIsRefreshing] = useState(false);

  const refreshAvailability = useCallback(async () => {
    setIsRefreshing(true);
    try {
      const result = await checkAvailability(roomId, checkIn, checkOut, guests);
      setAvailability(result);
    } catch (error) {
      setAvailability({ 
        status: 'available', 
        urgencyMessage: 'Unable to check availability - booking still available' 
      });
    } finally {
      setIsRefreshing(false);
    }
  }, [roomId, checkIn, checkOut, guests]);

  // Auto-refresh availability every 3 minutes
  useEffect(() => {
    refreshAvailability();
    
    const interval = setInterval(() => {
      refreshAvailability();
    }, 180000); // 3 minutes
    
    return () => clearInterval(interval);
  }, [refreshAvailability]);

  // Refresh when dates change
  useEffect(() => {
    if (checkIn && checkOut) {
      refreshAvailability();
    }
  }, [checkIn, checkOut, refreshAvailability]);

  const getStatusIcon = () => {
    switch (availability.status) {
      case 'checking':
        return <Loader2 className="h-4 w-4 animate-spin" />;
      case 'available':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'limited':
        return <AlertTriangle className="h-4 w-4 text-orange-600" />;
      case 'sold-out':
        return <XCircle className="h-4 w-4 text-red-600" />;
    }
  };

  const getStatusColor = () => {
    switch (availability.status) {
      case 'checking':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'available':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'limited':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'sold-out':
        return 'bg-red-100 text-red-700 border-red-200';
    }
  };

  const getStatusText = () => {
    switch (availability.status) {
      case 'checking':
        return 'Checking availability...';
      case 'available':
        return availability.roomsLeft ? `${availability.roomsLeft} rooms available` : 'Available';
      case 'limited':
        return availability.roomsLeft === 1 ? 'Last room!' : `Only ${availability.roomsLeft} left`;
      case 'sold-out':
        return 'Sold out';
    }
  };

  const getButtonText = () => {
    if (availability.status === 'checking') return 'Checking...';
    if (availability.status === 'sold-out') return 'View Alternative Dates';
    if (availability.price) return `Book Now - R${availability.price}`;
    return 'Book Now';
  };

  const isBookingAvailable = availability.status !== 'sold-out' && availability.status !== 'checking';

  if (compact) {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        <Badge className={cn("text-xs", getStatusColor())}>
          {getStatusIcon()}
          <span className="ml-1">{getStatusText()}</span>
        </Badge>
        {availability.status === 'limited' && availability.urgencyMessage && (
          <span className="text-xs text-orange-600 font-medium">
            {availability.urgencyMessage}
          </span>
        )}
      </div>
    );
  }

  return (
    <Card className={cn("border-2", className, {
      'border-green-200 bg-green-50/50': availability.status === 'available',
      'border-orange-200 bg-orange-50/50': availability.status === 'limited',
      'border-red-200 bg-red-50/50': availability.status === 'sold-out',
      'border-blue-200 bg-blue-50/50': availability.status === 'checking'
    })}>
      <CardContent className="p-4 space-y-3">
        {/* Status Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {getStatusIcon()}
            <span className="font-medium">{getStatusText()}</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={refreshAvailability}
            disabled={isRefreshing}
            className="h-8 px-2 text-xs"
          >
            {isRefreshing ? (
              <Loader2 className="h-3 w-3 animate-spin" />
            ) : (
              <>
                <Clock className="h-3 w-3 mr-1" />
                Refresh
              </>
            )}
          </Button>
        </div>

        {/* Price Display */}
        {availability.price && availability.status !== 'sold-out' && (
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">R{availability.price}</span>
            <span className="text-sm text-muted-foreground">per night</span>
            {availability.status === 'limited' && (
              <Badge className="bg-orange-100 text-orange-700 text-xs">
                <TrendingUp className="h-3 w-3 mr-1" />
                High demand
              </Badge>
            )}
          </div>
        )}

        {/* Urgency Message */}
        {availability.urgencyMessage && (
          <div className={cn(
            "p-2 rounded-lg text-sm font-medium",
            availability.status === 'limited' && "bg-orange-100 text-orange-700",
            availability.status === 'sold-out' && "bg-red-100 text-red-700"
          )}>
            {availability.urgencyMessage}
          </div>
        )}

        {/* Guest Capacity Check */}
        {guests && parseInt(guests) > 2 && availability.status === 'limited' && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>Suitable for {guests} guests</span>
          </div>
        )}

        {/* Action Button */}
        <Button
          className="w-full"
          disabled={!isBookingAvailable}
          onClick={onBookNow}
          variant={availability.status === 'sold-out' ? 'outline' : 'default'}
        >
          {getButtonText()}
        </Button>

        {/* Last Updated */}
        {availability.lastChecked && (
          <div className="text-xs text-muted-foreground text-center">
            Last updated: {availability.lastChecked.toLocaleTimeString()}
          </div>
        )}
      </CardContent>
    </Card>
  );
}