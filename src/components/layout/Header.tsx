import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useResponsiveNavigation } from "@/hooks/use-responsive-navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Accommodation", href: "/accommodation" },
  { name: "Activities", href: "/activities" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
  { name: "Location", href: "/location" },
  { name: "Blog", href: "/blog" },
  { name: "Booking", href: "/booking" },
];

// Priority order for showing items (high priority stays visible longest)
const itemPriority = {
  "Home": 1,
  "Accommodation": 2,
  "Activities": 3,
  "Gallery": 4,
  "Contact": 5,
  "Location": 6,
  "Blog": 7,
  "Booking": 8,
};

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Use dynamic responsive navigation
  const { visibleItems, overflowItems, hasOverflow, containerRef, measureItems } = 
    useResponsiveNavigation({
      items: navigation,
      priority: itemPriority,
      additionalWidth: 200 // Space for Book Now button and logo
    });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Register item references for width measurement
  const registerItemRef = (measureItems as any).registerItemRef;

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b transition-all duration-300",
      isScrolled 
        ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-sm" 
        : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    )}>
      <div className="responsive-container section-spacing-sm">
        <div className="flex h-14 xs:h-16 md:h-18 lg:h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img 
              src="/images/logo.png" 
              alt="The Browns Logo" 
              className="h-8 w-auto xs:h-9 sm:h-10 md:h-12 lg:h-14 transition-all duration-200"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav 
            ref={containerRef}
            className="hidden md:flex items-center space-x-2 lg:space-x-3 xl:space-x-4"
          >
            {/* Dynamic visible items */}
            <div className="flex items-center space-x-2 lg:space-x-3 xl:space-x-4">
              {visibleItems.map((item) => (
                <Link
                  key={item.name}
                  ref={(el) => registerItemRef?.(item.name, el)}
                  to={item.href}
                  className={cn(
                    "text-fluid-sm font-medium transition-colors hover:text-primary min-h-[44px] px-2 lg:px-3 flex items-center whitespace-nowrap rounded-md hover:bg-accent/50",
                    location.pathname === item.href
                      ? "text-primary bg-accent"
                      : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* More dropdown for overflow items - only shows when there are actually overflow items */}
            {hasOverflow && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-fluid-sm font-medium text-muted-foreground hover:text-primary min-h-[44px] px-2 lg:px-3"
                  >
                    More
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-background border shadow-lg z-50">
                  {overflowItems.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <Link
                        to={item.href}
                        className={cn(
                          "block px-4 py-2 text-sm font-medium transition-colors hover:text-primary cursor-pointer",
                          location.pathname === item.href
                            ? "text-primary bg-accent"
                            : "text-muted-foreground"
                        )}
                      >
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
            
            {/* Hidden measurement items for all navigation items */}
            <div className="fixed top-0 left-[-9999px] opacity-0 pointer-events-none" aria-hidden="true">
              {navigation.map((item) => (
                <span
                  key={`measure-${item.name}`}
                  ref={(el) => registerItemRef?.(item.name, el)}
                  className="text-sm lg:text-base font-medium whitespace-nowrap px-3"
                >
                  {item.name}
                </span>
              ))}
            </div>
          </nav>

          {/* Book Now Button & Mobile Menu */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Button asChild className="hidden xs:inline-flex text-fluid-sm px-2 xs:px-3 py-2 lg:px-4 lg:py-2 min-h-[44px] touch-manipulation" size="sm">
              <a 
                href="https://book.nightsbridge.com/00000" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Book accommodation now"
              >
                Book Now
              </a>
            </Button>
            
            {/* Mobile menu */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden min-h-[44px] min-w-[44px]"
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] max-w-sm">
                <div className="flex flex-col h-full py-2">
                  {/* Logo */}
                  <div className="flex items-center mb-6 px-2">
                    <img 
                      src="/images/logo.png" 
                      alt="The Browns Logo" 
                      className="h-8 w-auto"
                    />
                  </div>

                  {/* Navigation */}
                  <nav className="flex-1 px-2">
                    <div className="space-y-1">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={cn(
                            "block px-3 py-3 text-fluid-base font-medium transition-colors hover:text-primary rounded-lg min-h-[48px] flex items-center touch-manipulation",
                            location.pathname === item.href
                              ? "text-primary bg-accent"
                              : "text-muted-foreground hover:bg-accent/50"
                          )}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>

                    {/* Contact Info in Mobile Menu */}
                    <div className="mt-6 pt-4 border-t space-y-3 px-2">
                      <div className="flex items-center space-x-3 text-fluid-sm min-h-[48px]">
                        <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                        <a 
                          href="tel:+27000000000" 
                          className="hover:text-primary py-2 touch-manipulation"
                          aria-label="Call The Browns"
                        >
                          +27 00 000 0000
                        </a>
                      </div>
                      <div className="flex items-center space-x-3 text-fluid-sm min-h-[48px]">
                        <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                        <a 
                          href="mailto:stay@thebrowns.co.za" 
                          className="hover:text-primary py-2 touch-manipulation break-all"
                          aria-label="Email The Browns"
                        >
                          stay@thebrowns.co.za
                        </a>
                      </div>
                      <div className="flex items-center space-x-3 text-fluid-sm min-h-[48px]">
                        <button
                          onClick={() => {
                            const message = "Hi! I'd like to enquire about The Browns Guest Suites.";
                            const whatsappUrl = `https://wa.me/27000000000?text=${encodeURIComponent(message)}`;
                            window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
                          }}
                          className="flex items-center space-x-3 w-full text-left hover:text-primary py-2 touch-manipulation"
                          aria-label="Contact via WhatsApp"
                        >
                          <svg className="h-4 w-4 text-green-600 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386"/>
                          </svg>
                          <span>WhatsApp Us</span>
                        </button>
                      </div>
                    </div>
                  </nav>

                  {/* Book Now Button */}
                  <div className="pt-4 border-t px-2">
                    <Button asChild className="w-full min-h-[48px] text-fluid-base touch-manipulation">
                      <a 
                        href="https://book.nightsbridge.com/00000" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Book Now
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

      </div>
    </header>
  );
}