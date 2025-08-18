import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  CheckCircle, 
  MapPin, 
  Clock, 
  Users, 
  Star,
  TrendingUp,
  Eye
} from "lucide-react";
import { cn } from "@/lib/utils";

interface RecentBooking {
  guestName: string;
  suite: string;
  location: string;
  timeAgo: string;
  verified?: boolean;
}

interface SocialProofProps {
  className?: string;
  variant?: "popup" | "banner" | "sidebar";
}

const recentBookings: RecentBooking[] = [
  { guestName: "Sarah M.", suite: "Master Suite", location: "Johannesburg", timeAgo: "2 hours ago", verified: true },
  { guestName: "Michael R.", suite: "Garden Suite", location: "Cape Town", timeAgo: "4 hours ago", verified: true },
  { guestName: "Emma L.", suite: "Loft Family Suite", location: "Pretoria", timeAgo: "6 hours ago" },
  { guestName: "David K.", suite: "Master Suite", location: "Durban", timeAgo: "8 hours ago", verified: true },
  { guestName: "Lisa P.", suite: "Garden Suite", location: "Bloemfontein", timeAgo: "12 hours ago" },
];

const liveStats = {
  viewing: Math.floor(Math.random() * 15) + 8,
  bookingsToday: Math.floor(Math.random() * 5) + 3,
  availableRooms: Math.floor(Math.random() * 3) + 1
};

export function RecentBookingNotification({ className }: SocialProofProps) {
  const [currentBooking, setCurrentBooking] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBooking((prev) => (prev + 1) % recentBookings.length);
      setIsVisible(true);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const booking = recentBookings[currentBooking];

  return (
    <div className={cn(
      "fixed bottom-4 left-4 z-50 transition-all duration-500 transform",
      isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0",
      className
    )}>
      <Card className="p-3 shadow-lg border bg-background/95 backdrop-blur-sm max-w-sm">
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="text-xs bg-primary/10 text-primary">
              {booking.guestName.charAt(0)}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1 mb-1">
              <span className="text-sm font-medium truncate">{booking.guestName}</span>
              {booking.verified && (
                <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              Booked {booking.suite}
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
              <MapPin className="h-3 w-3" />
              <span>{booking.location}</span>
              <Clock className="h-3 w-3" />
              <span>{booking.timeAgo}</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export function LiveActivityBanner({ className }: SocialProofProps) {
  const [stats, setStats] = useState(liveStats);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats({
        viewing: Math.floor(Math.random() * 15) + 8,
        bookingsToday: Math.floor(Math.random() * 5) + 3,
        availableRooms: Math.floor(Math.random() * 3) + 1
      });
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn("border-l-4 border-l-green-500 bg-green-50 p-3 rounded-r-lg", className)}>
      <div className="flex items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-1">
          <Eye className="h-4 w-4 text-green-600" />
          <span className="font-medium text-green-800">{stats.viewing} people</span>
          <span className="text-green-700">viewing now</span>
        </div>
        
        <div className="flex items-center gap-1">
          <TrendingUp className="h-4 w-4 text-orange-600" />
          <span className="font-medium text-orange-800">{stats.bookingsToday} bookings</span>
          <span className="text-orange-700">today</span>
        </div>
        
        <Badge variant="destructive" className="text-xs">
          {stats.availableRooms} rooms left
        </Badge>
      </div>
    </div>
  );
}

export function TrustIndicators({ className }: SocialProofProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3 text-sm text-muted-foreground", className)}>
      <div className="flex items-center gap-1">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <span>SSL Secured</span>
      </div>
      
      <div className="flex items-center gap-1">
        <Users className="h-4 w-4 text-blue-600" />
        <span>127 reviews</span>
      </div>
      
      <div className="flex items-center gap-1">
        <Users className="h-4 w-4 text-blue-600" />
        <span>500+ Happy Guests</span>
      </div>
      
      <Badge variant="outline" className="text-xs">
        <CheckCircle className="h-3 w-3 mr-1 text-green-600" />
        Instant Confirmation
      </Badge>
    </div>
  );
}

export function UrgencyIndicator({ 
  availableRooms = 2, 
  lastBooking = "3 hours ago",
  className 
}: { 
  availableRooms?: number; 
  lastBooking?: string; 
  className?: string;
}) {
  const isUrgent = availableRooms <= 2;
  
  return (
    <div className={cn(
      "p-3 rounded-lg border-l-4",
      isUrgent 
        ? "border-l-red-500 bg-red-50 text-red-800" 
        : "border-l-orange-500 bg-orange-50 text-orange-800",
      className
    )}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          <span className="font-medium">
            {isUrgent ? "High Demand" : "Popular Choice"}
          </span>
        </div>
        <Badge variant={isUrgent ? "destructive" : "secondary"} className="text-xs">
          {availableRooms} rooms left
        </Badge>
      </div>
      <p className="text-xs mt-1 opacity-90">
        Last booking {lastBooking} • Secure your dates now
      </p>
    </div>
  );
}