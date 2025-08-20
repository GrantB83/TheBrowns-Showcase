import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/ui/contact-form";
import { WhatsAppContact } from "@/components/ui/whatsapp-contact";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import { MobileQuickActions } from "@/components/ui/enhanced-mobile-gesture-nav";

export default function Contact() {
  return (
    <>
      <div className="min-h-screen section-spacing">
        <div className="responsive-container px-fluid-md">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-fluid-xl">
              <h1 className="text-primary mb-fluid-md">
                Contact Us
              </h1>
              <p className="text-fluid-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Get in touch for reservations, inquiries, or to learn more about our luxury suites.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-fluid-lg lg:gap-fluid-xl">
              {/* Contact Form - Takes more space on large screens */}
              <div className="lg:col-span-7">
                <ContactForm />
              </div>

              {/* Contact Information - Sidebar on large screens */}
              <div className="lg:col-span-5 space-y-fluid-lg">
                <Card>
                  <CardHeader className="pb-fluid-md">
                    <CardTitle className="text-fluid-lg">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-fluid-lg">
                    {/* Phone */}
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-fluid-base">Phone / WhatsApp</p>
                        <a 
                          href="tel:+27000000000" 
                          className="text-muted-foreground hover:text-primary transition-colors text-fluid-base touch-manipulation block min-h-[32px] flex items-center"
                        >
                          +27 00 000 0000
                        </a>
                        <div className="mt-2">
                          <WhatsAppContact 
                            variant="inline" 
                            message="Hi! I'd like to enquire about The Browns Guest Suites."
                          />
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-fluid-base">Email</p>
                        <a 
                          href="mailto:stay@thebrowns.co.za" 
                          className="text-muted-foreground hover:text-primary transition-colors text-fluid-base touch-manipulation block break-all min-h-[32px] flex items-center"
                        >
                          stay@thebrowns.co.za
                        </a>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-fluid-base">Address</p>
                        <p className="text-muted-foreground text-fluid-base leading-relaxed">
                          279 Blue Crane Drive<br />
                          Dullstroom 1110, Mpumalanga
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Book Direct Card */}
                <Card>
                  <CardHeader className="pb-fluid-md">
                    <CardTitle className="text-fluid-lg">Book Direct</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-fluid-lg text-fluid-base leading-relaxed">
                      For the best rates and personalized service, book directly through our secure Nightsbridge platform.
                    </p>
                    <Button asChild className="w-full min-h-[48px] touch-manipulation">
                      <a href="https://book.nightsbridge.com/00000" target="_blank" rel="noopener noreferrer">
                        Book Now
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Social Media Card */}
                <Card>
                  <CardHeader className="pb-fluid-md">
                    <CardTitle className="text-fluid-lg">Follow Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-fluid-md text-fluid-base">
                      Stay updated with our latest news and offers
                    </p>
                    <Button variant="outline" asChild className="w-full min-h-[48px] touch-manipulation">
                      <a 
                        href="https://instagram.com/thebrownsdullstroom" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <Instagram className="h-4 w-4 mr-2" />
                        @thebrownsdullstroom
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Quick Actions */}
      <MobileQuickActions
        onBooking={() => window.open('https://book.nightsbridge.com/00000', '_blank')}
        onCall={() => window.open('tel:+27000000000', '_self')}
        onWhatsApp={() => window.open('https://wa.me/27000000000?text=Hi! I would like to enquire about The Browns Guest Suites.', '_blank')}
      />
    </>
  );
}