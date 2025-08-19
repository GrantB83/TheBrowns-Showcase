import { Link } from "react-router-dom";
import { Instagram, Phone, Mail, MapPin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppInlineLink } from "@/components/ui/whatsapp-contact";
const footerLinks = {
  pages: [{
    name: "Home",
    href: "/"
  }, {
    name: "About",
    href: "/about"
  }, {
    name: "Suites",
    href: "/suites"
  }, {
    name: "Gallery",
    href: "/gallery"
  }, {
    name: "Location",
    href: "/location"
  }, {
    name: "Contact",
    href: "/contact"
  }, {
    name: "Blog",
    href: "/blog"
  }],
  legal: [{
    name: "Privacy Policy",
    href: "/privacy"
  }]
};
export function Footer() {
  return <footer className="bg-muted">
      <div className="responsive-container px-fluid-md py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo & Description */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex items-center">
              <img src="/images/logo.svg" alt="The Browns Logo" className="h-8 sm:h-10 w-auto" />
            </Link>
            <p className="text-fluid-sm text-muted-foreground leading-relaxed">
              Luxury guest suites and cottage accommodation in the heart of Dullstroom, Mpumalanga.
            </p>
            <Button asChild className="min-h-[44px] touch-manipulation">
              <a href="https://book.nightsbridge.com/00000" target="_blank" rel="noopener noreferrer">
                Book Now
              </a>
            </Button>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-semibold text-fluid-base">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.pages.map(link => <li key={link.name}>
                  <Link to={link.href} className="text-fluid-sm text-muted-foreground hover:text-primary transition-colors min-h-[32px] flex items-center touch-manipulation">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-semibold text-fluid-base">Contact</h3>
            <div className="space-y-3 text-fluid-sm text-muted-foreground">
              <div className="flex items-start space-x-2 min-h-[32px]">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">278 & 279 Blue Crane Drive,<br />Dullstroom 1110</span>
              </div>
              <div className="flex items-center space-x-2 min-h-[32px]">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+27000000000" className="hover:text-primary transition-colors touch-manipulation">
                  +27 00 000 0000
                </a>
              </div>
              <div className="flex items-center space-x-2 min-h-[32px]">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:stay@thebrowns.co.za" className="hover:text-primary transition-colors touch-manipulation break-all">stay@thebrowns.co.za</a>
              </div>
              <div className="flex items-center space-x-2 min-h-[32px]">
                <WhatsAppInlineLink 
                  message="Hi! I'd like to enquire about The Browns Guest Suites in Dullstroom."
                  className="text-fluid-sm touch-manipulation"
                />
              </div>
            </div>
          </div>

          {/* Social & Legal */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-semibold text-fluid-base">Follow Us</h3>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="icon" asChild className="min-h-[44px] min-w-[44px] touch-manipulation">
                <a href="https://www.facebook.com/thebrownsluxury/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">
                  <Facebook className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild className="min-h-[44px] min-w-[44px] touch-manipulation">
                <a href="https://www.instagram.com/thebrowns.dullstroom/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild className="min-h-[44px] min-w-[44px] touch-manipulation">
                <a href="https://g.co/kgs/yXm4ixA" target="_blank" rel="noopener noreferrer" aria-label="Visit our Google Business page">
                  <MapPin className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="pt-3">
              <ul className="space-y-2">
                {footerLinks.legal.map(link => <li key={link.name}>
                    <Link to={link.href} className="text-fluid-sm text-muted-foreground hover:text-primary transition-colors min-h-[32px] flex items-center touch-manipulation">
                      {link.name}
                    </Link>
                  </li>)}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-2">
            <p className="text-fluid-sm text-muted-foreground">
              © 2024 The Browns Luxury Guest Suites & Cottage. All rights reserved.
            </p>
            <p className="text-fluid-sm text-muted-foreground">
              Dullstroom, Mpumalanga, South Africa
            </p>
          </div>
        </div>
      </div>
    </footer>;
}