import { SEO } from "@/components/ui/seo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, Star, CheckCircle, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const bookingBenefits = [
  {
    title: "Instant Confirmation",
    description: "Secure your preferred dates immediately with our real-time booking system",
    icon: CheckCircle
  },
  {
    title: "Best Rate Guarantee",
    description: "We guarantee the best available rates when you book directly with us",
    icon: Star
  },
  {
    title: "Personalized Service",
    description: "Enjoy priority access to concierge services and special requests",
    icon: Users
  },
  {
    title: "Flexible Booking",
    description: "Modify or cancel your reservation up to 48 hours before arrival",
    icon: Calendar
  }
];

const suiteHighlights = [
  {
    name: "Master Suite",
    capacity: "2 Guests",
    features: ["Mountain Views", "Private Patio", "Luxury Amenities"],
    rate: "From R2,500/night"
  },
  {
    name: "Garden Suite", 
    capacity: "2 Guests",
    features: ["Garden Views", "Outdoor Seating", "Modern Comfort"],
    rate: "From R2,200/night"
  },
  {
    name: "Loft Suite",
    capacity: "2 Guests", 
    features: ["Elevated Views", "Contemporary Design", "Spacious Layout"],
    rate: "From R2,300/night"
  }
];

const bookingSteps = [
  {
    step: "1",
    title: "Select Your Dates",
    description: "Choose your preferred arrival and departure dates using our booking calendar"
  },
  {
    step: "2", 
    title: "Choose Your Suite",
    description: "Browse our luxury accommodations and select the perfect suite for your stay"
  },
  {
    step: "3",
    title: "Secure Your Booking", 
    description: "Complete your reservation with instant confirmation and prepare for your getaway"
  }
];

export default function Booking() {
  return (
    <>
      <SEO
        title="Book Your Luxury Stay - The Browns Dullstroom Guest Suites"
        description="Reserve your luxury accommodation at The Browns Dullstroom. Instant confirmation, best rate guarantee, and personalized highland hospitality in Mpumalanga."
        keywords="book Dullstroom accommodation, luxury guest suite booking, The Browns reservations, Dullstroom luxury lodging, Mpumalanga accommodation booking"
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-primary/10 to-background py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">Secure Booking</Badge>
              <h1 className="mb-6 text-foreground">
                Book Your Highland Escape
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Reserve your luxury suite at The Browns and experience the finest accommodation 
                in Dullstroom's misty highlands. Instant confirmation and best rate guarantee included.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg px-8 py-6">
                  <a 
                    href="https://book.nightsbridge.com/00000" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Book Now
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/accommodations">View Our Suites</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Benefits */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="mb-4">Why Book Direct?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Enjoy exclusive benefits and personalized service when you book directly with The Browns.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {bookingBenefits.map((benefit) => (
                <Card key={benefit.title} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {benefit.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Process */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="mb-4">Simple Booking Process</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Secure your luxury highland retreat in three easy steps.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {bookingSteps.map((step, index) => (
                  <div key={step.step} className="text-center relative">
                    <div className="mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full text-2xl font-bold mb-4">
                        {step.step}
                      </div>
                      {index < bookingSteps.length - 1 && (
                        <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-border transform translate-x-8"></div>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button asChild size="lg" className="text-lg px-8 py-6">
                  <a 
                    href="https://book.nightsbridge.com/00000" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Start Your Booking
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Suite Overview */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="mb-4">Our Luxury Suites</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose from our collection of thoughtfully designed accommodations, each offering unique views and amenities.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              {suiteHighlights.map((suite) => (
                <Card key={suite.name} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{suite.name}</CardTitle>
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span className="text-sm">{suite.capacity}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {suite.features.map((feature) => (
                        <div key={feature} className="flex items-center justify-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-lg font-semibold text-primary mb-4">{suite.rate}</div>
                    <Button variant="outline" className="w-full">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button asChild variant="outline" size="lg">
                <Link to="/accommodations">View All Suites</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="mb-4">Need Assistance?</h2>
                <p className="text-lg text-muted-foreground">
                  Our concierge team is here to help with special requests and personalized recommendations.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="text-center">
                  <CardHeader>
                    <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                    <CardTitle>Call Us</CardTitle>
                    <CardDescription>Speak directly with our reservations team</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full">
                      <a href="tel:+27000000000">+27 00 000 0000</a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                    <CardTitle>Email Us</CardTitle>
                    <CardDescription>Send us your questions and special requests</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full">
                      <a href="mailto:info@thebrowns.co.za">info@thebrowns.co.za</a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-6">Your Highland Adventure Awaits</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Experience the magic of Dullstroom from the comfort of our luxury accommodations. 
                Book now and create memories that will last a lifetime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg px-8 py-6">
                  <a 
                    href="https://book.nightsbridge.com/00000" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Book Your Stay
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Ask a Question</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}