import { SEO } from "@/components/ui/seo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookingFlow } from "@/components/ui/booking-flow";
import { BookingWidget } from "@/components/ui/booking-widget";
import { WhatsAppBookingButton } from "@/components/ui/whatsapp-contact";
import { 
  Calendar, 
  Clock, 
  Users, 
  Star, 
  CheckCircle, 
  Phone, 
  Mail, 
  Shield,
  Gift,
  ExternalLink,
  MessageCircle,
  AlertCircle,
  Crown
} from "lucide-react";
import { Link } from "react-router-dom";

const directBookingBenefits = [
  {
    title: "Best Rate Guarantee",
    description: "We match any competitive rate plus 5% off",
    icon: Crown,
    highlight: "Lowest rates guaranteed"
  },
  {
    title: "Exclusive Perks", 
    description: "Free welcome drink, complimentary WiFi, and late checkout",
    icon: Gift,
    highlight: "Worth R300+ value"
  },
  {
    title: "Instant Confirmation",
    description: "Secure your booking immediately with real-time availability",
    icon: CheckCircle,
    highlight: "Confirmed within seconds"
  }
];

const suiteHighlights = [
  {
    id: "master-suite",
    name: "Master Suite",
    roomId: 6,
    capacity: "2 Adults + 2 Children",
    features: ["King XL Bed", "Private Lounge", "Zuikerboschkop Views", "Fireplace", "Netflix"],
    urgencyMessage: "Premium flagship suite",
    image: "/images/suites/master-suite-01.jpg",
    description: "Luxury flagship suite with private lounge and Zuikerboschkop views from first-floor balcony"
  },
  {
    id: "garden-suite", 
    name: "Garden Suite",
    roomId: 4,
    capacity: "2 Adults",
    features: ["Queen XL Bed", "Garden Views", "Spa Bath", "Private Entrance"],
    urgencyMessage: "Garden view romance",
    image: "/images/suites/garden-suite-01.jpg",
    description: "Romantic retreat with private garden access and spa bath"
  },
  {
    id: "loft-suite",
    name: "Loft Family Suite",
    roomId: 5,
    capacity: "4 Adults", 
    features: ["2 Bedrooms", "Family Lounge", "Zuikerboschkop Views", "Entertainment"],
    urgencyMessage: "Family suite with balcony views",
    image: "/images/suites/loft-suite-01.jpg",
    description: "Perfect for families with separate bedrooms and entertainment"
  }
];

const bookingSteps = [
  {
    step: "1",
    title: "Select Your Dates",
    description: "Choose your preferred arrival and departure dates using our secure booking system",
    details: "Real-time availability • Instant confirmation • Best rate guarantee"
  },
  {
    step: "2", 
    title: "Choose Your Suite",
    description: "Browse our luxury accommodation with personalized recommendations",
    details: "Personalized suggestions • Detailed descriptions • Virtual tours"
  },
  {
    step: "3",
    title: "Secure Your Booking", 
    description: "Complete your reservation with our secure payment system",
    details: "SSL encryption • Multiple payment options • Instant confirmation"
  }
];

export default function Booking() {
  const handleDirectBooking = (roomId?: number) => {
    const baseUrl = "https://book.nightsbridge.com/00000";
    const bookingUrl = roomId ? `${baseUrl}?rtid=${roomId}` : baseUrl;
    window.open(bookingUrl, '_blank', 'noopener,noreferrer');
  };

  const handleWhatsAppContact = () => {
    const message = "Hi! I'm interested in booking a stay at The Browns. Can you help me with availability and rates?";
    const whatsappUrl = `https://wa.me/27000000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <SEO
        title="Secure Direct Booking - The Browns Dullstroom Luxury Guest Suites 2025"
        description="Book direct at The Browns Dullstroom for best rates, exclusive perks, and instant confirmation. Luxury highland accommodation with free welcome drink and WiFi included."
        keywords="book Dullstroom accommodation direct, luxury guest suite booking 2025, The Browns reservations, Dullstroom luxury lodging secure booking, Mpumalanga accommodation best rates"
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-primary/10 to-background py-8 sm:py-12 lg:py-16">
          <div className="responsive-container">
            <div className="max-w-5xl mx-auto">
              {/* Subtle Availability Notice */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-6 text-center">
                <div className="flex items-center justify-center gap-2 text-orange-700">
                  <Clock className="h-4 w-4" />
                  <span className="font-medium text-sm">Limited Availability - Secure Your Dates</span>
                </div>
              </div>

              <div className="text-center mb-8">
                <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
                  <Shield className="h-4 w-4 mr-2" />
                  Secure Direct Booking
                </Badge>
                
                <h1 className="mb-6 text-foreground">
                  Secure Direct Booking: Lowest Rates + Exclusives
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                  Book directly with The Browns for guaranteed best rates, free welcome drink, 
                  and personalized service in Dullstroom's premier luxury highland accommodation.
                </p>
                
                {/* Direct Benefits Highlight */}
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-5 mb-8 max-w-2xl mx-auto">
                  <div className="flex items-center justify-center gap-2 text-primary font-semibold text-lg mb-3">
                    <Gift className="h-5 w-5" />
                    <span>Book Direct Benefits</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                    <div className="flex items-center justify-center gap-1">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Best Rate + 5% Off</span>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Free Welcome Drink</span>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Instant Confirmation</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <Button 
                    size="lg" 
                    className="text-lg px-8 py-6 min-h-[48px] flex-1"
                    onClick={() => handleDirectBooking()}
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Book Direct Now
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="min-h-[48px] flex-1"
                    onClick={handleWhatsAppContact}
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    WhatsApp Us
                  </Button>
                </div>
                
                <p className="text-sm text-muted-foreground mt-4">
                  Need help? Call us directly: <a href="tel:+27000000000" className="text-primary hover:underline">+27 00 000 0000</a>
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Interactive Booking Widget */}
        <section className="py-8 sm:py-12 lg:py-16 bg-muted/30">
          <div className="responsive-container">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="mb-4">Book Your Highland Escape</h2>
                <p className="text-lg text-muted-foreground">
                  Check availability and secure your dates
                </p>
              </div>
              
              <BookingWidget showRecommendations={true} />
            </div>
          </div>
        </section>

        {/* Direct Booking Benefits */}
        <section className="py-8 sm:py-12 lg:py-16">
          <div className="responsive-container">
            <div className="text-center mb-10">
              <h2 className="mb-4">Why Book Direct?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get the best value and exclusive perks by booking directly with us.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {directBookingBenefits.map((benefit) => (
                <Card key={benefit.title} className="text-center hover:shadow-md transition-shadow relative">
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="text-xs">
                      {benefit.highlight}
                    </Badge>
                  </div>
                  <CardHeader className="pb-4">
                    <div className="mx-auto mb-3 p-2 bg-primary/10 rounded-full w-fit">
                      <benefit.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-base">{benefit.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {benefit.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Suite Selection with Urgency */}
        <section className="section-spacing bg-muted/30">
          <div className="responsive-container">
            <div className="text-center mb-12">
              <h2 className="mb-4">Choose Your Luxury Suite</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Each suite offers unique amenities and views, with personalized recommendations for your perfect stay.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              {suiteHighlights.map((suite) => (
                <Card key={suite.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={suite.image}
                      alt={suite.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop&crop=center';
                      }}
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="text-xs">
                        {suite.urgencyMessage}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                     <div className="flex justify-between items-start mb-2">
                       <CardTitle className="text-xl">{suite.name}</CardTitle>
                     </div>
                    
                    <div className="flex items-center gap-2 text-muted-foreground mb-3">
                      <Users className="h-4 w-4" />
                      <span className="text-sm">{suite.capacity}</span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-3">
                      {suite.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {suite.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <Button 
                        className="w-full min-h-[44px]"
                        onClick={() => handleDirectBooking(suite.roomId)}
                      >
                        Book Now
                      </Button>
                      <Button variant="outline" className="w-full min-h-[44px]" asChild>
                        <Link to={`/accommodations#${suite.id}`}>
                          View Details
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button asChild variant="outline" size="lg">
                <Link to="/accommodations">View All Suites & Rates</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact & Support with WhatsApp */}
        <section className="section-spacing">
          <div className="responsive-container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="mb-4">Need Booking Assistance?</h2>
                <p className="text-lg text-muted-foreground">
                  Our local team is available to help with special requests, recommendations, and personalized service.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <MessageCircle className="h-8 w-8 text-green-600 mx-auto mb-4" />
                    <CardTitle>WhatsApp Booking</CardTitle>
                    <CardDescription>Instant response from our local team</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      className="w-full min-h-[44px] bg-green-600 hover:bg-green-700"
                      onClick={handleWhatsAppContact}
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp +27 00 000 0000
                    </Button>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                    <CardTitle>Call Direct</CardTitle>
                    <CardDescription>Speak with our reservations team</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full min-h-[44px]">
                      <a href="tel:+27000000000">Call +27 00 000 0000</a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                    <CardTitle>Email Support</CardTitle>
                    <CardDescription>Send detailed requests and questions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full min-h-[44px]">
                      <a href="mailto:stay@thebrowns.co.za">stay@thebrowns.co.za</a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Final Conversion CTA */}
        <section className="py-12 lg:py-16 bg-gradient-to-br from-primary/10 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-6">Your Highland Adventure Awaits</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Don't miss out on Dullstroom's premier luxury accommodation. Book direct for the best rates, 
                exclusive perks, and personalized service that makes every stay unforgettable.
              </p>
              
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-8">
                <div className="flex items-center justify-center gap-2 text-primary font-semibold mb-2">
                  <Clock className="h-4 w-4" />
                  <span>Direct Booking Benefits: Best Rate Guarantee + Free Welcome Drink</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Flexible cancellation policy • Best rate guarantee
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 min-h-[48px] flex-1"
                  onClick={() => handleDirectBooking()}
                >
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Secure Your Booking
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="min-h-[48px] flex-1"
                  onClick={handleWhatsAppContact}
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Ask Questions
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}