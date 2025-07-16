import { Link } from "react-router-dom";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  pages: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Suites", href: "/suites" },
    { name: "Gallery", href: "/gallery" },
    { name: "Location", href: "/location" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-muted">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-primary"></div>
              <span className="font-playfair text-xl font-semibold text-primary">
                The Browns
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Luxury guest suites and cottage accommodation in the heart of Dullstroom, Mpumalanga.
            </p>
            <Button asChild>
              <a 
                href="https://book.nightsbridge.com/00000" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Book Now
              </a>
            </Button>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.pages.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>279 Blue Crane Drive, Dullstroom 1110</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+27000000000" className="hover:text-primary transition-colors">
                  +27 00 000 0000
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@thebrowns.co.za" className="hover:text-primary transition-colors">
                  info@thebrowns.co.za
                </a>
              </div>
            </div>
          </div>

          {/* Social & Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold">Follow Us</h3>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
            <div className="pt-4">
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 The Browns Luxury Guest Suites & Cottage. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-2 md:mt-0">
              Dullstroom, Mpumalanga, South Africa
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}