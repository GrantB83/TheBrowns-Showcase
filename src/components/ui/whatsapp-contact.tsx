import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface WhatsAppContactProps {
  variant?: "floating" | "inline" | "button" | "card";
  message?: string;
  className?: string;
  size?: "sm" | "default" | "lg";
  showText?: boolean;
}

export function WhatsAppContact({ 
  variant = "button", 
  message,
  className,
  size = "default",
  showText = true
}: WhatsAppContactProps) {
  const phoneNumber = "27000000000";
  const defaultMessage = "Hi! I'm interested in The Browns Guest Suites in Dullstroom. Could you please help me with information? Thanks!";
  const encodedMessage = encodeURIComponent(message || defaultMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const handleWhatsAppClick = () => {
    // Track WhatsApp click event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_contact', {
        event_category: 'engagement',
        event_label: 'WhatsApp Contact',
        value: 1
      });
    }
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  if (variant === "floating") {
    return (
      <Button
        onClick={handleWhatsAppClick}
        className={cn(
          // Positioning: Bottom-right following international standards
          "fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50",
          // Official WhatsApp green colors for brand recognition
          "bg-[#25D366] hover:bg-[#128C7E] active:bg-[#075E54]",
          // Shape and sizing for optimal touch targets (44px minimum)
          "rounded-full shadow-xl hover:shadow-2xl",
          "h-14 w-14 md:h-16 md:w-16 min-w-[44px] min-h-[44px]",
          // Smooth animations without being distracting
          "transition-all duration-300 ease-in-out",
          "hover:scale-110 active:scale-95",
          // Subtle breathing animation
          "animate-pulse hover:animate-none",
          // Better contrast and accessibility
          "text-white border-0 focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2",
          // Safe area for mobile devices
          "mb-safe-area-inset-bottom mr-safe-area-inset-right",
          className
        )}
        size="icon"
        aria-label="Contact us on WhatsApp - Opens in new window"
        title="Chat with us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6 md:h-7 md:w-7" />
        {/* Add visual feedback dot */}
        <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full animate-ping" aria-hidden="true" />
        <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full" aria-hidden="true" />
      </Button>
    );
  }

  if (variant === "inline") {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          e.preventDefault();
          handleWhatsAppClick();
        }}
        className={cn(
          // WhatsApp brand colors for recognition
          "inline-flex items-center gap-2 text-[#25D366] hover:text-[#128C7E] transition-all duration-200",
          // Better interaction design
          "hover:underline font-medium decoration-2 underline-offset-4",
          // Touch-friendly sizing
          "min-h-[44px] py-2 px-1 rounded-md",
          // Focus accessibility
          "focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2",
          // Better hover state
          "hover:bg-green-50 dark:hover:bg-green-950/20",
          className
        )}
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-4 w-4 flex-shrink-0" />
        {showText && (
          <span className="font-medium">
            WhatsApp: +27 00 000 0000
          </span>
        )}
      </a>
    );
  }

  if (variant === "card") {
    return (
      <Card className={cn(
        "cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-[1.02]",
        "border-green-200 hover:border-green-300",
        className
      )}>
        <CardContent 
          className="p-6 text-center space-y-4"
          onClick={handleWhatsAppClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleWhatsAppClick();
            }
          }}
          aria-label="Contact us on WhatsApp"
        >
          <div className="mx-auto w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center">
            <MessageCircle className="h-8 w-8 text-[#25D366]" />
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2 text-foreground">WhatsApp Us</h3>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              Get instant responses to your enquiries.<br />
              We typically reply within minutes!
            </p>
            <div className="flex items-center justify-center gap-2 text-[#25D366] font-semibold text-base">
              <Phone className="h-4 w-4" />
              <span>+27 00 000 0000</span>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Default button variant
  return (
    <Button
      onClick={handleWhatsAppClick}
      variant="outline"
      size={size}
      className={cn(
        // WhatsApp brand colors
        "bg-[#25D366]/5 border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366] hover:text-white",
        "hover:border-[#25D366] active:bg-[#128C7E]",
        // Better interaction design
        "transition-all duration-200 font-medium",
        "focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2",
        // Touch-friendly sizing
        "min-h-[44px] px-6",
        className
      )}
    >
      <MessageCircle className="h-4 w-4 mr-2 flex-shrink-0" />
      {showText && "WhatsApp Us"}
    </Button>
  );
}

// Specialized components for specific use cases
export function WhatsAppBookingButton({ 
  suiteType,
  className 
}: { 
  suiteType?: string;
  className?: string;
}) {
  // Context-aware messaging following best practices
  const bookingMessage = suiteType 
    ? `Hi! I'm interested in booking the ${suiteType} at The Browns Guest Suites in Dullstroom. Could you please help me with availability and rates? Thanks!`
    : "Hi! I'd like to enquire about booking at The Browns Guest Suites in Dullstroom. Could you please help me with availability and rates? Thanks!";

  return (
    <WhatsAppContact
      variant="button"
      message={bookingMessage}
      className={cn("shadow-sm hover:shadow-md", className)}
      showText={true}
      size="default"
    />
  );
}

export function WhatsAppFloatingButton() {
  return (
    <WhatsAppContact 
      variant="floating" 
      message="Hi! I'm browsing The Browns Guest Suites website and would like to get more information. Could you help me? Thanks!"
    />
  );
}

export function WhatsAppInlineLink({ 
  message,
  className 
}: { 
  message?: string;
  className?: string;
}) {
  return (
    <WhatsAppContact
      variant="inline"
      message={message}
      className={className}
    />
  );
}