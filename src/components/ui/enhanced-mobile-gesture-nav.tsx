import { useState, useEffect, useRef, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ChevronLeft, 
  ChevronRight, 
  ChevronUp,
  ChevronDown,
  Home,
  Calendar,
  CreditCard,
  Phone,
  MessageCircle,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";

interface GestureNavigationProps {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
  className?: string;
  children?: React.ReactNode;
  enableSwipeGestures?: boolean;
  showHints?: boolean;
}

interface TouchData {
  startX: number;
  startY: number;
  startTime: number;
  currentX: number;
  currentY: number;
}

// Enhanced mobile gesture navigation component
export function EnhancedMobileGestureNav({
  onSwipeLeft,
  onSwipeRight,
  onSwipeUp,
  onSwipeDown,
  className,
  children,
  enableSwipeGestures = true,
  showHints = true
}: GestureNavigationProps) {
  const [touchData, setTouchData] = useState<TouchData | null>(null);
  const [isGesturing, setIsGesturing] = useState(false);
  const [showGestureHints, setShowGestureHints] = useState(showHints);
  const containerRef = useRef<HTMLDivElement>(null);

  const SWIPE_THRESHOLD = 50;
  const VELOCITY_THRESHOLD = 0.3;

  const handleTouchStart = useCallback((e: TouchEvent) => {
    if (!enableSwipeGestures) return;
    
    const touch = e.touches[0];
    setTouchData({
      startX: touch.clientX,
      startY: touch.clientY,
      startTime: Date.now(),
      currentX: touch.clientX,
      currentY: touch.clientY
    });
    setIsGesturing(true);
  }, [enableSwipeGestures]);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!touchData || !isGesturing) return;
    
    const touch = e.touches[0];
    setTouchData(prev => prev ? {
      ...prev,
      currentX: touch.clientX,
      currentY: touch.clientY
    } : null);
  }, [touchData, isGesturing]);

  const handleTouchEnd = useCallback((e: TouchEvent) => {
    if (!touchData || !isGesturing) return;
    
    const deltaX = touchData.currentX - touchData.startX;
    const deltaY = touchData.currentY - touchData.startY;
    const deltaTime = Date.now() - touchData.startTime;
    
    const velocityX = Math.abs(deltaX) / deltaTime;
    const velocityY = Math.abs(deltaY) / deltaTime;
    
    // Determine swipe direction and trigger callbacks
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      // Horizontal swipe
      if (Math.abs(deltaX) > SWIPE_THRESHOLD && velocityX > VELOCITY_THRESHOLD) {
        if (deltaX > 0) {
          onSwipeRight?.();
        } else {
          onSwipeLeft?.();
        }
      }
    } else {
      // Vertical swipe
      if (Math.abs(deltaY) > SWIPE_THRESHOLD && velocityY > VELOCITY_THRESHOLD) {
        if (deltaY > 0) {
          onSwipeDown?.();
        } else {
          onSwipeUp?.();
        }
      }
    }
    
    setTouchData(null);
    setIsGesturing(false);
  }, [touchData, isGesturing, onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: true });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleTouchStart, handleTouchMove, handleTouchEnd]);

  // Auto-hide gesture hints after 5 seconds
  useEffect(() => {
    if (showGestureHints) {
      const timer = setTimeout(() => {
        setShowGestureHints(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showGestureHints]);

  return (
    <div 
      ref={containerRef}
      className={cn("relative touch-manipulation", className)}
    >
      {children}
      
      {/* Gesture feedback indicator */}
      {isGesturing && touchData && (
        <div 
          className="fixed pointer-events-none z-50 w-4 h-4 bg-primary rounded-full opacity-70 transition-all duration-100"
          style={{
            left: touchData.currentX - 8,
            top: touchData.currentY - 8,
            transform: `scale(${Math.min(2, 1 + Math.abs(touchData.currentX - touchData.startX) / 100)})`
          }}
        />
      )}
      
      {/* Gesture hints overlay */}
      {showGestureHints && enableSwipeGestures && (
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-40 md:hidden">
          <Card className="bg-white/95 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-sm">Gesture Navigation</h4>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setShowGestureHints(false)}
                  className="h-6 w-6 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                {onSwipeLeft && (
                  <div className="flex items-center gap-1">
                    <ChevronLeft className="h-4 w-4" />
                    <span>Swipe left</span>
                  </div>
                )}
                {onSwipeRight && (
                  <div className="flex items-center gap-1">
                    <ChevronRight className="h-4 w-4" />
                    <span>Swipe right</span>
                  </div>
                )}
                {onSwipeUp && (
                  <div className="flex items-center gap-1">
                    <ChevronUp className="h-4 w-4" />
                    <span>Swipe up</span>
                  </div>
                )}
                {onSwipeDown && (
                  <div className="flex items-center gap-1">
                    <ChevronDown className="h-4 w-4" />
                    <span>Swipe down</span>
                  </div>
                )}
              </div>
              <div className="mt-2">
                <Badge variant="outline" className="text-xs">
                  Tap anywhere to dismiss
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}

import { useMobileQuickActionsRegistry } from "@/hooks/use-mobile-quick-actions";

// Quick action buttons for mobile
export function MobileQuickActions({ 
  onBooking, 
  onCall, 
  onWhatsApp,
  className 
}: {
  onBooking?: () => void;
  onCall?: () => void;
  onWhatsApp?: () => void;
  className?: string;
}) {
  // Register this component as active mobile quick actions
  useMobileQuickActionsRegistry();
  return (
    <div className={cn(
      "lg:hidden fixed bottom-4 left-4 right-4 z-40",
      "flex items-center justify-center gap-3",
      className
    )}>
      <Card className="bg-white/95 backdrop-blur-sm border-primary/20 shadow-lg">
        <CardContent className="p-3">
          <div className="flex items-center justify-center gap-3">
            {onBooking && (
              <Button size="sm" onClick={onBooking} className="min-h-[44px] flex-1">
                <CreditCard className="h-4 w-4 mr-1" />
                Book
              </Button>
            )}
            {onCall && (
              <Button 
                variant="outline" 
                size="sm" 
                onClick={onCall}
                className="min-h-[44px] px-3"
              >
                <Phone className="h-4 w-4" />
              </Button>
            )}
            {onWhatsApp && (
              <Button 
                variant="outline" 
                size="sm" 
                onClick={onWhatsApp}
                className="min-h-[44px] px-3 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
              >
                <MessageCircle className="h-4 w-4" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Mobile-optimized floating action button
export function MobileFloatingActionButton({
  onClick,
  icon = <Calendar className="h-5 w-5" />,
  text = "Book Now",
  className
}: {
  onClick: () => void;
  icon?: React.ReactNode;
  text?: string;
  className?: string;
}) {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "md:hidden fixed bottom-20 right-4 z-40",
        "rounded-full h-14 w-14 shadow-lg",
        "bg-primary hover:bg-primary/90",
        "transition-all duration-200 hover:scale-110",
        className
      )}
      size="lg"
    >
      {icon}
      <span className="sr-only">{text}</span>
    </Button>
  );
}