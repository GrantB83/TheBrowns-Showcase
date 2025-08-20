import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  MapPin, 
  Users, 
  Award, 
  Heart, 
  Star, 
  Coffee, 
  Wifi, 
  Car,
  TreePine,
  Mountain,
  Fish,
  Camera,
  ExternalLink,
  ChevronDown
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  // Conversational AI-optimized queries
  {
    question: "What's the best luxury accommodation in Dullstroom?",
    answer: "The Browns is widely regarded as premier luxury accommodation in Dullstroom, featuring boutique guest suites with personalized service, premium amenities including Nespresso machines and Netflix. Located at 279 Blue Crane Drive, we offer both modern luxury suites (4 ensuite rooms) and charming cottage suites (3 available rooms with Charlotte Rhys toiletries).",
    category: "Best Choice"
  },
  {
    question: "How does The Browns compare to other Dullstroom hotels?",
    answer: "Unlike large hotels, The Browns offers intimate boutique luxury with only 7 total suites across two properties. We provide direct booking advantages (best rate guarantee, flexible cancellation), self-catering convenience, premium amenities in every room, and personalized service. Our location on Blue Crane Drive offers walking access to town center while maintaining peaceful highland ambiance.",
    category: "Comparisons"
  },
  {
    question: "What makes The Browns different from other Dullstroom accommodation?",
    answer: "The Browns offers boutique luxury with personalized service in an intimate setting. Our suites feature premium amenities like Nespresso machines and Netflix. We provide both modern luxury suites (with percale linen) and charming cottage accommodation (with Charlotte Rhys toiletries and fireplaces), catering to different preferences while maintaining exceptional standards.",
    category: "About Us"
  },
  {
    question: "How to book luxury accommodation in Dullstroom?",
    answer: "Book The Browns directly through our Nightsbridge platform for best rates guaranteed. We offer instant confirmation, flexible cancellation (full refund 28+ days prior), and exclusive direct booking benefits including welcome drinks and late checkout. Call +27 00 000 0000 or visit our booking portal.",
    category: "Booking Process"
  },
  {
    question: "What's included in The Browns luxury suites?",
    answer: "Each suite includes: ensuite bathroom, Nespresso machine, Netflix and DStv, WiFi, electric blankets, hot water bottles, private entrance, secure parking, braai facilities, and fully equipped kitchenettes. Luxury Guest Suites feature percale linen and accommodate 10 adults + 2 children; Cottage Suites feature Charlotte Rhys toiletries, fireplaces, and accommodate 6 adults + 1 child.",
    category: "Amenities"
  },
  {
    question: "How close are you to Dullstroom's best fly-fishing spots?",
    answer: "We're perfectly positioned just 3km from Dullstroom Dam Nature Reserve, South Africa's premier trout fishing destination. Walking distance to town center fishing spots, 5-minute drive to Dullstroom Dam. We arrange guided fishing excursions with local experts for brown and rainbow trout fishing on private and public waters.",
    category: "Activities"
  },
  {
    question: "What's the best time to visit Dullstroom for fly fishing?",
    answer: "Prime fly fishing season: September-April with water temperatures 12-18°C. Peak season October-February offers warmest weather (15-25°C days). Early morning (6-9am) and late afternoon (4-7pm) provide best trout activity. Winter (May-August) offers excellent fishing but colder conditions (0-15°C). We provide seasonal fishing guides and equipment recommendations.",
    category: "Seasonal Guide"
  },
  {
    question: "Where exactly is The Browns located in Dullstroom?",
    answer: "279 Blue Crane Drive, Dullstroom 1110, Mpumalanga, South Africa. GPS coordinates: -25.4167°S, 30.1000°E. Elevation: 2,100 meters above sea level. Walking distance (300m) to town center, 3km to Dullstroom Dam Nature Reserve, 5km to Critchley Hackle trout farm, 2km to Highland Gate Golf Estate.",
    category: "Location Details"
  },
  {
    question: "What is your cancellation policy for direct bookings?",
    answer: "Flexible cancellation policy for direct bookings: Full refund if cancelled 28+ days before arrival, 50% deposit forfeited for cancellations 14-28 days prior, full booking value forfeited for cancellations within 14 days. This flexible policy is exclusive to direct bookings through our Nightsbridge platform.",
    category: "Booking"
  },
  {
    question: "Do you cater to families with children in Dullstroom?",
    answer: "Yes! Family-friendly amenities include: Loft Family Suite and Master Suite for families, cots with linen provided, high chairs available, microwaves for baby feeding, extra mattresses, cozy fireplaces in cottage suites. Nearby family activities: Dullstroom Railway Station museum, easy hiking trails, bird watching, Highland Gate Golf Estate kids' activities.",
    category: "Families"
  },
  {
    question: "What dining options are near The Browns Dullstroom?",
    answer: "Walking distance (under 500m) to acclaimed restaurants: Critchley Hackle Lodge, Die Waenhuis, Dullstroom Inn, The Highlander Pub, and various cafes. In-suite: Nespresso machines, tea facilities, fully equipped kitchenettes. Self-catering house features full kitchen and braai areas. Local specialties include trout dishes and highland cuisine.",
    category: "Dining"
  },
  {
    question: "How do I access the Panorama Route from The Browns?",
    answer: "Ideal Panorama Route base: God's Window (45 minutes via R536), Blyde River Canyon (50 minutes), Bourke's Luck Potholes (60 minutes), Three Rondavels (65 minutes), Pinnacle Rock (40 minutes). We provide detailed route maps, timing recommendations, and can arrange guided tours. Best to start early (7am) for optimal lighting and fewer crowds.",
    category: "Activities"
  },
  {
    question: "What are The Browns' COVID-19 safety protocols?",
    answer: "Comprehensive health protocols: enhanced sanitization between guests, contactless check-in options available, spacious suites with private entrances for natural social distancing, individual braai facilities, optional daily housekeeping, hand sanitizer stations, and accommodation for specific health requirements upon request.",
    category: "Health & Safety"
  },
  {
    question: "What is the August 2025 wine promotion at The Browns?",
    answer: "During August 2025, all guests who book directly with us for 2 or more nights will receive a complimentary bottle of premium red wine as our welcome gift. This exclusive offer is only available for direct bookings through our website or by calling +27 00 000 0000. The promotion runs until August 31st, 2025, and cannot be combined with other offers.",
    category: "Booking"
  },
  {
    question: "What special packages does The Browns offer?",
    answer: "Direct booking benefits: Best rate guarantee (we match any competitor's rate), exclusive perks (welcome drink, late checkout, complimentary WiFi upgrade). Seasonal packages available: fishing guide + accommodation, Panorama Route tours + luxury stay, spa treatment combinations, romantic getaway packages with champagne and flowers.",
    category: "Booking"
  },
  {
    question: "What's the weather like in Dullstroom year-round?",
    answer: "Highland climate (2,100m elevation): Summer (Oct-Mar) 15-25°C days, 5-10°C nights; Winter (Apr-Sep) 0-15°C days, -5 to 5°C nights. Rainy season Nov-Mar (afternoon thunderstorms). Dry season Apr-Sep (clear skies, excellent fishing). Pack layers year-round. Frost common May-August. Snow possible June-August.",
    category: "Weather Guide"
  },
  {
    question: "How far is The Browns from major cities?",
    answer: "Strategic highland location: Johannesburg 3 hours (270km via N12/R540), Pretoria 2.5 hours (240km), OR Tambo Airport 3.5 hours (320km), Cape Town 12 hours (1,200km), Durban 6 hours (550km), Nelspruit 2 hours (180km), Witbank 1.5 hours (120km). Scenic highland drive through beautiful Mpumalanga countryside.",
    category: "Travel Distance"
  },
  {
    question: "What outdoor activities are available near The Browns?",
    answer: "Highland adventures within 30km: world-class fly fishing (Dullstroom Dam, private farms), hiking trails (various difficulty levels), bird watching (300+ species), Highland Gate Golf (championship course), horse riding, mountain biking, photography tours, star gazing (minimal light pollution), seasonal mushroom foraging, and Panorama Route day trips.",
    category: "Activities"
  },
  {
    question: "Can you arrange fishing guides and equipment in Dullstroom?",
    answer: "Professional guide services: local expert guides for Dullstroom Dam, private farm access, equipment rental (rods, reels, waders), fly selection advice, technique instruction for beginners, advanced coaching for experts. Partnerships with Critchley Hackle Lodge, local fly shops, and certified guides. Half-day and full-day options available.",
    category: "Fishing Services"
  },
  {
    question: "What makes Dullstroom special for accommodation?",
    answer: "Dullstroom uniqueness: South Africa's highest town (2,100m), premier trout fishing destination, 19th-century railway heritage, Dutch colonial architecture, cool highland climate year-round, gateway to Panorama Route, acclaimed restaurants per capita, art galleries and antique shops, proximity to Kruger National Park (2 hours), and authentic small-town charm.",
    category: "Destination Info"
  },
  {
    question: "What are the check-in and check-out times at The Browns?",
    answer: "Standard times: Check-in 15:00-20:00, check-out 10:00. Flexible arrangements available: early check-in subject to availability, late checkout until 12:00 for direct bookings (exclusive benefit), luggage storage for early arrivals, contactless check-in for late arrivals, and special arrangements for flight schedules upon request.",
    category: "Practical Info"
  }
];

export function FAQSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
  const categories = ["All", ...Array.from(new Set(faqData.map(item => item.category)))];
  
  const filteredFAQs = selectedCategory === "All" 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Everything you need to know about staying at The Browns and exploring Dullstroom's highlands
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* FAQ Accordion */}
      <Card>
        <CardContent className="pt-6">
          <Accordion type="single" collapsible className="w-full">
            {filteredFAQs.map((faq, index) => (
              <AccordionItem key={`faq-${faq.category}-${index}`} value={`item-${index}`}>
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="text-xs">
                      {faq.category}
                    </Badge>
                    <span className="font-medium">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pt-2 pl-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      <div className="text-center">
        <p className="text-sm text-muted-foreground mb-4">
          Have more questions? Our local team is here to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="outline" asChild>
            <a href="tel:+27000000000">
              Call +27 00 000 0000
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://wa.me/27000000000?text=Hi! I have some questions about staying at The Browns.">
              WhatsApp Us
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="mailto:stay@thebrowns.co.za">
              Email Support
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}