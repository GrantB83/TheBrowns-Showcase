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
  const defaultMessage = "Hi! I'd like to enquire about booking at The Browns Guest Suites in Dullstroom.";
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
          "fixed bottom-6 left-6 z-50 rounded-full shadow-lg bg-green-500 hover:bg-green-600 text-white border-0",
          "animate-pulse hover:animate-none transition-all duration-300",
          "h-14 w-14 md:h-16 md:w-16",
          className
        )}
        size="icon"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6 md:h-7 md:w-7" />
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
          "inline-flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors",
          "hover:underline font-medium",
          className
        )}
      >
        <MessageCircle className="h-4 w-4" />
        {showText && (
          <span>
            WhatsApp: +27 00 000 0000
          </span>
        )}
      </a>
    );
  }

  if (variant === "card") {
    return (
      <Card className={cn("cursor-pointer hover:shadow-md transition-shadow", className)}>
        <CardContent 
          className="p-6 text-center space-y-4"
          onClick={handleWhatsAppClick}
        >
          <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <MessageCircle className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">WhatsApp Us</h3>
            <p className="text-muted-foreground text-sm mb-3">
              Get instant responses to your enquiries
            </p>
            <div className="flex items-center justify-center gap-2 text-green-600 font-medium">
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
        "bg-green-50 border-green-200 text-green-700 hover:bg-green-100 hover:border-green-300",
        "transition-colors duration-200",
        className
      )}
    >
      <MessageCircle className="h-4 w-4 mr-2" />
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
  const bookingMessage = suiteType 
    ? `Hi! I'm interested in booking the ${suiteType} at The Browns Guest Suites. Could you please provide availability and rates?`
    : "Hi! I'd like to make a booking enquiry for The Browns Guest Suites. Could you please help me with availability and rates?";

  return (
    <WhatsAppContact
      variant="button"
      message={bookingMessage}
      className={className}
      showText={true}
    />
  );
}

export function WhatsAppFloatingButton() {
  return <WhatsAppContact variant="floating" />;
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