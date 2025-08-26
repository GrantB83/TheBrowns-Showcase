import { SEO } from "@/components/ui/seo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Calendar, Gift } from "lucide-react";
import { Link } from "react-router-dom";
import { MobileQuickActions } from "@/components/ui/enhanced-mobile-gesture-nav";

const supportPrograms = [
  {
    title: "Local Community Support",
    description: "Help fund educational programs and infrastructure improvements in the Dullstroom community.",
    icon: Users,
    impact: "Supporting 15+ local families",
    category: "Community"
  },
  {
    title: "Conservation Initiatives", 
    description: "Contribute to highland ecosystem preservation and trout stream conservation efforts.",
    icon: Heart,
    impact: "Protecting 50+ hectares",
    category: "Environment"
  },
  {
    title: "Skills Development",
    description: "Support training programs for local hospitality and tourism professionals.",
    icon: Gift,
    impact: "Training 20+ individuals annually",
    category: "Education"
  }
];

const contributionTiers = [
  {
    amount: "R50",
    title: "Supporter",
    description: "Every contribution makes a difference",
    benefits: ["Thank you note", "Updates on impact"]
  },
  {
    amount: "R150", 
    title: "Advocate",
    description: "Supporting meaningful change",
    benefits: ["Impact report", "Recognition certificate", "Exclusive updates"]
  },
  {
    amount: "R300",
    title: "Champion",
    description: "Making a significant impact",
    benefits: ["Personal thank you", "Annual impact summary", "Priority booking status"]
  },
  {
    amount: "Custom",
    title: "Your Choice",
    description: "Contribute what feels right for you",
    benefits: ["Personalized acknowledgment", "Detailed impact reporting"]
  }
];

export default function PayWhatYouCan() {
  return (
    <>
      <SEO
        title="Pay What You Can - Supporting Dullstroom Community - The Browns"
        description="Join The Browns' Pay What You Can initiative supporting local Dullstroom community programs, conservation efforts, and skills development in the Mpumalanga highlands."
        keywords="Dullstroom community support, social responsibility, conservation Mpumalanga, community development, sustainable tourism, The Browns giving back"
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-secondary/10 to-background section-spacing">
          <div className="responsive-container">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">Community Initiative</Badge>
              <h1 className="mb-6 text-foreground">
                Pay What You Can
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                At The Browns, we believe in giving back to the community that makes our highland home so special. 
                Join us in supporting local initiatives that preserve the beauty and spirit of Dullstroom.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <a href="#contribute" className="scroll-smooth">
                    Make a Contribution
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#programs">Learn More</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="section-spacing">
          <div className="responsive-container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="mb-6">Our Commitment to Dullstroom</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The beauty of Dullstroom extends far beyond its misty highlands and pristine streams. 
                  It's the warmth of its people, the richness of its heritage, and the shared responsibility 
                  we all have to preserve this special place for future generations.
                </p>
              </div>

              <Card className="mb-12 border-2 border-primary/20">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl flex items-center justify-center gap-3">
                    <Heart className="h-8 w-8 text-primary" />
                    Why Pay What You Can?
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg leading-relaxed">
                    We recognize that not everyone can contribute the same amount, and that's perfectly okay. 
                    What matters is that we're all part of a community working together to make a positive impact. 
                    Whether it's R10 or R1000, every contribution helps build a stronger, more sustainable Dullstroom.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Programs We Support */}
        <section id="programs" className="section-spacing bg-muted/30">
          <div className="responsive-container">
            <div className="text-center mb-12">
              <h2 className="mb-4">Programs We Support</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Your contributions directly fund these meaningful initiatives in our local community.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {supportPrograms.map((program) => (
                <Card key={program.title} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <program.icon className="h-8 w-8 text-primary" />
                    </div>
                    <Badge variant="outline" className="mx-auto mb-2 w-fit">{program.category}</Badge>
                    <CardTitle className="text-xl">{program.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {program.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="inline-flex items-center gap-2 bg-accent/50 px-3 py-2 rounded-lg">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{program.impact}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contribution Options */}
        <section id="contribute" className="section-spacing">
          <div className="responsive-container">
            <div className="text-center mb-12">
              <h2 className="mb-4">Choose Your Contribution</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Select an amount that feels right for you, or choose your own contribution level.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
              {contributionTiers.map((tier) => (
                <Card 
                  key={tier.title} 
                  className={`text-center hover:shadow-lg transition-all ${
                    tier.title === "Champion" ? "border-primary shadow-md" : ""
                  }`}
                >
                  <CardHeader>
                    <div className="text-3xl font-bold text-primary mb-2">{tier.amount}</div>
                    <CardTitle className="text-lg">{tier.title}</CardTitle>
                    <CardDescription>{tier.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                      {tier.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center justify-center gap-2">
                          <Heart className="h-3 w-3 text-primary flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant={tier.title === "Champion" ? "default" : "outline"}>
                      Contribute {tier.amount}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-6">
                Prefer to contribute directly? Contact us to arrange your contribution.
              </p>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Impact Stories */}
        <section className="section-spacing bg-muted/30">
          <div className="responsive-container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="mb-6">Your Impact in Action</h2>
              <Card className="bg-background">
                <CardContent className="p-8">
                  <blockquote className="text-lg leading-relaxed italic mb-6">
                    "Thanks to the generous contributions from guests at The Browns, we've been able to 
                    upgrade our local primary school's learning facilities and provide new books for over 
                    200 children. This is what community spirit looks like."
                  </blockquote>
                  <div className="flex items-center justify-center gap-3">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64&q=80"
                      alt="Community Representative"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <div className="font-medium">Sarah Mthembu</div>
                      <div className="text-sm text-muted-foreground">Dullstroom Community Representative</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-spacing">
          <div className="responsive-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-6">Ready to Make a Difference?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Every contribution, no matter the size, helps build a stronger and more sustainable Dullstroom community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <a href="#contribute">Contribute Now</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/accommodations">Book Your Stay</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Mobile Quick Actions */}
      <MobileQuickActions
        onBooking={() => window.open('https://book.nightsbridge.com/00000?promocode=PUBLICDEMO', '_blank')}
        onCall={() => window.open('tel:+27000000000', '_self')}
        onWhatsApp={() => window.open('https://wa.me/27000000000?text=Hi! I would like to enquire about The Browns Guest Suites.', '_blank')}
      />
    </>
  );
}