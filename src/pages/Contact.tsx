import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/ui/contact-form";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-primary mb-4">Contact Us</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get in touch for reservations, inquiries, or to learn more about our luxury suites.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Phone / WhatsApp</p>
                       <a href="tel:+27000000000" className="text-muted-foreground hover:text-primary">
                        +27 00 000 0000
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">WhatsApp available</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:info@thebrowns.co.za" className="text-muted-foreground hover:text-primary">
                        info@thebrowns.co.za
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-muted-foreground">279 Blue Crane Drive<br />Dullstroom 1110, Mpumalanga</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Book Direct</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    For the best rates and personalized service, book directly through our secure Nightsbridge platform.
                  </p>
                  <Button asChild className="w-full">
                    <a href="https://book.nightsbridge.com/00000" target="_blank" rel="noopener noreferrer">
                      Book Now
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