import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Suites", href: "/suites" },
  { name: "Gallery", href: "/gallery" },
  { name: "Location", href: "/location" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b transition-all duration-300",
      isScrolled 
        ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-sm" 
        : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/assets/logo.png" 
              alt="The Browns Logo" 
              className="h-8 w-auto sm:h-10"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Book Now Button & Mobile Menu */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button asChild className="hidden sm:inline-flex text-sm px-4 py-2" size="sm">
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
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col h-full">
                  {/* Logo */}
                  <div className="flex items-center mb-8">
                    <img 
                      src="/assets/logo.png" 
                      alt="The Browns Logo" 
                      className="h-10 w-auto"
                    />
                  </div>

                  {/* Navigation */}
                  <nav className="flex-1">
                    <div className="space-y-1">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={cn(
                            "block px-4 py-4 text-base font-medium transition-colors hover:text-primary rounded-lg min-h-[44px] flex items-center",
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
                    <div className="mt-8 pt-6 border-t space-y-4">
                      <div className="flex items-center space-x-3 text-sm min-h-[44px]">
                        <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                        <a 
                          href="tel:+27000000000" 
                          className="hover:text-primary py-2"
                          aria-label="Call The Browns"
                        >
                          +27 00 000 0000
                        </a>
                      </div>
                      <div className="flex items-center space-x-3 text-sm min-h-[44px]">
                        <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                        <a 
                          href="mailto:info@thebrowns.co.za" 
                          className="hover:text-primary py-2"
                          aria-label="Email The Browns"
                        >
                          info@thebrowns.co.za
                        </a>
                      </div>
                    </div>
                  </nav>

                  {/* Book Now Button */}
                  <div className="pt-6 border-t">
                    <Button asChild className="w-full">
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