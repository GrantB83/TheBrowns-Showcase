import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/ui/contact-form";
import { WhatsAppContact } from "@/components/ui/whatsapp-contact";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="max-w-full xl:max-w-7xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h1 className="fluid-heading text-primary mb-3 sm:mb-4 px-2">
              Contact Us
            </h1>
            <p className="fluid-text text-muted-foreground max-w-2xl mx-auto px-4 leading-relaxed">
              Get in touch for reservations, inquiries, or to learn more about our luxury suites.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
            {/* Contact Form - Takes more space on large screens */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Contact Information - Sidebar on large screens */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-6 lg:space-y-8">
              <Card>
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="fluid-subheading">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                  {/* Phone */}
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-sm sm:text-base">Phone / WhatsApp</p>
                      <a 
                        href="tel:+27000000000" 
                        className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base touch-manipulation block"
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
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-sm sm:text-base">Email</p>
                      <a 
                        href="mailto:info@thebrowns.co.za" 
                        className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base touch-manipulation block break-all"
                      >
                        info@thebrowns.co.za
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-sm sm:text-base">Address</p>
                      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                        279 Blue Crane Drive<br />
                        Dullstroom 1110, Mpumalanga
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Book Direct Card */}
              <Card>
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="fluid-subheading">Book Direct</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                    For the best rates and personalized service, book directly through our secure Nightsbridge platform.
                  </p>
                  <Button asChild className="w-full min-h-[44px] touch-manipulation">
                    <a href="https://book.nightsbridge.com/00000" target="_blank" rel="noopener noreferrer">
                      Book Now
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Social Media Card */}
              <Card>
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="fluid-subheading">Follow Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                    Stay updated with our latest news and offers
                  </p>
                  <Button variant="outline" asChild className="w-full min-h-[44px] touch-manipulation">
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
  );
}