import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/ui/seo";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { Link } from "react-router-dom";
import { MapPin, Calendar, Users, Home, Utensils, Car } from "lucide-react";

const propertyFeatures = [
  {
    icon: Home,
    title: "Two Luxury Properties",
    description: "Luxury Guest Suites (4 ensuite rooms) and Cottage Suites (3 available rooms) offering distinct experiences"
  },
  {
    icon: Users,
    title: "Flexible Accommodation",
    description: "Up to 10 adults + 2 children in Guest Suites, or 6 adults + 1 child in Cottage Suites"
  },
  {
    icon: Utensils,
    title: "Self-Catering Excellence",
    description: "Fully equipped kitchens, braai areas, and premium amenities for independent luxury"
  },
  {
    icon: Car,
    title: "Seamless Experience",
    description: "Secure parking, backup power/water, and direct booking convenience via Nightsbridge"
  }
];

export default function About() {
  return (
    <>
      <SEO
        title="About The Browns - Luxury Dullstroom Guest Suites & Highland Hospitality"
        description="Discover The Browns luxury guest suites in Dullstroom, Mpumalanga. Premium self-catering accommodation with personalized highland hospitality and modern amenities."
        keywords="The Browns Dullstroom, luxury guest suites Mpumalanga, Dullstroom accommodation, highland hospitality, self-catering luxury, trout fishing accommodation"
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative section-spacing bg-gradient-to-br from-accent to-muted">
        <div className="responsive-container px-fluid-md">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-primary mb-fluid-lg">About The Browns</h1>
            <p className="text-fluid-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Enchanting luxury stays in the heart of Dullstroom since 2022
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-spacing bg-background">
        <div className="responsive-container px-fluid-md">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-fluid-xl items-center mb-fluid-3xl">
              <div className="order-2 lg:order-1">
                <ImagePlaceholder 
                  filename="browns-exterior.jpg" 
                  folder="/images/about/" 
                  width={800} 
                  height={600}
                  className="rounded-lg shadow-lg w-full"
                  alt="The Browns luxury guest suites exterior in Dullstroom"
                />
              </div>
              <div className="space-y-fluid-lg order-1 lg:order-2">
                <h2 className="text-primary">Our Story</h2>
                <p className="text-fluid-lg text-muted-foreground leading-relaxed">
                  Nestled in the picturesque highland town of Dullstroom, Mpumalanga, The Browns has been 
                  providing enchanting luxury stays since 2022. Our carefully curated accommodation offers 
                  the perfect blend of modern comfort and sophisticated charm in two distinctive properties.
                </p>
                <p className="text-fluid-lg text-muted-foreground leading-relaxed">
                  Located at 279 Blue Crane Drive, Dullstroom 1110, we're ideally positioned just a short 
                  stroll from the town's vibrant shops, acclaimed restaurants, and the tranquil waters of 
                  the Dullstroom Dam. Our location offers the perfect balance of peaceful retreat and 
                  convenient access to nature and local attractions.
                </p>
              </div>
            </div>

            {/* Property Features */}
            <div className="mobile-grid mb-fluid-3xl">
              {propertyFeatures.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-fluid-lg">
                    <div className="flex items-start space-x-fluid-md">
                      <div className="bg-primary/10 p-fluid-md rounded-lg flex-shrink-0">
                        <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-semibold mb-2 text-fluid-lg">{feature.title}</h3>
                        <p className="text-muted-foreground text-fluid-base leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Two Properties Section */}
            <div className="space-y-fluid-2xl">
              <div className="text-center">
                <h2 className="text-primary mb-fluid-lg">Two Distinct Experiences</h2>
                <p className="text-fluid-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Choose between our modern Luxury Guest Suites with elegant appointments or 
                  our charming Cottage Suites with cozy, traditional comfort.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-fluid-xl">
                {/* Luxury Guest Suites */}
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    <ImagePlaceholder 
                      filename="luxury-guest-suites.jpg" 
                      folder="/images/about/" 
                      width={600} 
                      height={400}
                      className="w-full h-48 sm:h-56 md:h-64"
                      alt="Luxury Guest Suites elegant interior at The Browns"
                    />
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                      <span className="bg-primary text-primary-foreground px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                        Modern Luxury
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-primary mb-3 sm:mb-4 text-fluid-lg">Luxury Guest Suites</h3>
                    <p className="text-fluid-base text-muted-foreground mb-4 leading-relaxed">
                      Our main house features 4 elegantly appointed ensuite rooms accommodating up to 
                      10 adults and 2 children. Each suite boasts sophisticated design with premium 
                      amenities and modern luxury touches.
                    </p>
                    <ul className="space-y-2 text-fluid-sm text-muted-foreground">
                      <li className="flex items-center min-h-[24px]">
                        <MapPin className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                        <span>4 ensuite bedrooms with elegant appointments</span>
                      </li>
                      <li className="flex items-center min-h-[24px]">
                        <Users className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                        <span>Up to 10 adults + 2 children accommodation</span>
                      </li>
                       <li className="flex items-center min-h-[24px]">
                         <Calendar className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                         <span>Hot water bottles, electric blankets & premium comfort</span>
                       </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Cottage Suites */}
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    <ImagePlaceholder 
                      filename="cottage-suites.jpg" 
                      folder="/images/about/" 
                      width={600} 
                      height={400}
                      className="w-full h-48 sm:h-56 md:h-64"
                      alt="Cottage Suites cozy interior with fireplace at The Browns"
                    />
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                      <span className="bg-secondary text-secondary-foreground px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                        Charming Comfort
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-primary mb-3 sm:mb-4 text-fluid-lg">Cottage Suites</h3>
                    <p className="text-fluid-base text-muted-foreground mb-4 leading-relaxed">
                      Our neighboring cottage offers 3 available rooms with cozy, charming vibes and 
                      old-school comfort. Perfect for intimate stays accommodating up to 6 adults 
                      and 1 child (excluding rooms under renovation).
                    </p>
                    <ul className="space-y-2 text-fluid-sm text-muted-foreground">
                      <li className="flex items-center min-h-[24px]">
                        <MapPin className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                        <span>3 available cottage suites with fireplaces</span>
                      </li>
                      <li className="flex items-center min-h-[24px]">
                        <Users className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                        <span>Up to 6 adults + 1 child accommodation</span>
                      </li>
                      <li className="flex items-center min-h-[24px]">
                        <Calendar className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                        <span>Cozy comfort with vintage charm elements</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Commitment Section */}
            <div className="mt-fluid-3xl text-center bg-muted rounded-lg p-fluid-xl">
              <h2 className="text-primary mb-fluid-lg">Our Commitment</h2>
              <p className="text-fluid-xl text-muted-foreground mb-fluid-lg max-w-3xl mx-auto leading-relaxed">
                We're dedicated to providing seamless direct bookings through our Nightsbridge platform, 
                ensuring maximum convenience for our guests while maintaining our commitment to 
                exceptional service and competitive rates.
              </p>
              <p className="text-fluid-lg text-muted-foreground mb-fluid-2xl max-w-2xl mx-auto leading-relaxed">
                Whether you choose our entire house self-catering options or individual suites, 
                every stay is designed to exceed expectations with thoughtful amenities, premium 
                comfort, and the warm hospitality that makes The Browns your home away from home.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-fluid-md justify-center max-w-md mx-auto">
                <Button size="lg" asChild className="min-h-[48px] text-fluid-base font-medium touch-manipulation">
                  <a 
                    href="https://book.nightsbridge.com/00000" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Book Your Stay
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="min-h-[48px] text-fluid-base font-medium touch-manipulation">
                  <Link to="/accommodation">
                    Explore Our Suites
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}